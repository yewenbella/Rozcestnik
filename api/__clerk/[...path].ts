import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const pathParts = Array.isArray(req.query.path)
    ? req.query.path
    : req.query.path
    ? [req.query.path]
    : [];
  const clerkPath = pathParts.join("/");

  const targetUrl = new URL(`https://frontend-api.clerk.dev/${clerkPath}`);
  if (req.url) {
    const qs = req.url.split("?")[1];
    if (qs) targetUrl.search = "?" + qs;
  }

  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host || "";
  const proxyUrl = `${protocol}://${host}/api/__clerk`;

  const forwardHeaders: Record<string, string> = {};
  for (const [k, v] of Object.entries(req.headers)) {
    if (k === "host" || k === "content-length") continue;
    if (typeof v === "string") forwardHeaders[k] = v;
    else if (Array.isArray(v)) forwardHeaders[k] = v[0];
  }
  forwardHeaders["clerk-proxy-url"] = proxyUrl;
  if (process.env.CLERK_SECRET_KEY) {
    forwardHeaders["clerk-secret-key"] = process.env.CLERK_SECRET_KEY;
  }

  const hasBody = ["POST", "PUT", "PATCH"].includes(req.method || "");
  const body = hasBody && req.body
    ? typeof req.body === "string"
      ? req.body
      : JSON.stringify(req.body)
    : undefined;

  const upstream = await fetch(targetUrl.toString(), {
    method: req.method || "GET",
    headers: forwardHeaders,
    body,
  });

  upstream.headers.forEach((value, key) => {
    if (key === "content-encoding" || key === "transfer-encoding") return;
    res.setHeader(key, value);
  });

  res.status(upstream.status);
  const buf = await upstream.arrayBuffer();
  res.end(Buffer.from(buf));
}
