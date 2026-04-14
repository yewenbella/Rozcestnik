import { useParams } from "wouter";
import { useEffect, useState } from "react";
import { MapPin, Navigation, Flag, Info, ExternalLink, Star } from "lucide-react";
import { trasa2Steps } from "@/data/trasa2Steps";
import PageLayout from "@/components/PageLayout";

function wikiArticleTitle(wikiUrl?: string): string | null {
  if (!wikiUrl) return null;
  try {
    const url = new URL(wikiUrl);
    const parts = url.pathname.split("/wiki/");
    return parts[1] ? decodeURIComponent(parts[1]) : null;
  } catch {
    return null;
  }
}

export default function Trasa2StepDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const step = trasa2Steps.find((s) => s.slug === slug);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    if (step?.imageUrl) {
      setThumbnail(step.imageUrl);
      setImgLoading(false);
      return;
    }
    const title = wikiArticleTitle(step?.wikiUrl);
    if (!title) { setImgLoading(false); return; }
    fetch(`https://cs.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
      .then((r) => r.json())
      .then((d) => { if (d.thumbnail?.source) setThumbnail(d.thumbnail.source); })
      .catch(() => {})
      .finally(() => setImgLoading(false));
  }, [step?.imageUrl, step?.wikiUrl]);

  if (!step) {
    return (
      <PageLayout title="Místo" backPath="/trasy/2">
        <div style={{ color: "white", padding: "32px", textAlign: "center" }}>
          Místo nenalezeno.
        </div>
      </PageLayout>
    );
  }

  const IconComp = step.type === "start" ? Navigation : step.type === "finish" ? Flag : MapPin;

  return (
    <PageLayout title={step.place} backPath="/trasy/2">
      <div style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px 16px 24px",
        boxSizing: "border-box",
        gap: "16px",
      }}>

        <div style={{ fontSize: "0.70rem", fontWeight: 800, letterSpacing: "0.12em", color: step.color, textTransform: "uppercase" }}>
          {step.label}
        </div>

        {/* Photo */}
        {thumbnail ? (
          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: `1px solid ${step.color}33`,
            boxShadow: `0 4px 24px ${step.color}22`,
            aspectRatio: "16/9",
            background: step.bg,
          }}>
            <img
              src={thumbnail}
              alt={step.place}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ) : !imgLoading && (
          <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
            <div style={{
              width: "80px", height: "80px", borderRadius: "24px",
              background: step.bg, border: `2px solid ${step.color}55`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 0 32px ${step.color}33`,
            }}>
              <IconComp size={36} color={step.color} strokeWidth={1.5} />
            </div>
          </div>
        )}

        {/* Info card */}
        <div style={{
          borderRadius: "16px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Info size={14} color={step.color} />
              <span style={{ color: step.color, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.05em" }}>
                O tomto místě
              </span>
            </div>
          </div>
          <p style={{
            margin: 0,
            color: "rgba(255,255,255,0.80)",
            fontSize: "0.88rem",
            lineHeight: "1.65",
          }}>
            {step.info}
          </p>
          {step.wikiUrl && (
            <a
              href={step.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                marginTop: "12px",
                padding: "5px 10px", borderRadius: "8px",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.55)", fontSize: "0.74rem", textDecoration: "none",
              }}
            >
              <ExternalLink size={11} />
              Přečíst celý článek na Wikipedii
            </a>
          )}
        </div>

        {/* Zajímavost card */}
        {step.zajimavost && (
          <div style={{
            borderRadius: "16px",
            background: "rgba(250,204,21,0.06)",
            border: "1px solid rgba(250,204,21,0.20)",
            padding: "16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px" }}>
              <Star size={14} color="#facc15" fill="#facc15" />
              <span style={{ color: "#facc15", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.05em" }}>
                Zajímavost
              </span>
            </div>
            <p style={{
              margin: 0,
              color: "rgba(255,255,255,0.80)",
              fontSize: "0.88rem",
              lineHeight: "1.65",
            }}>
              {step.zajimavost}
            </p>
          </div>
        )}

      </div>
    </PageLayout>
  );
}
