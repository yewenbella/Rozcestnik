import { useEffect, useState } from "react";
import { MapPin, Info, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function JanovPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://cs.wikipedia.org/api/rest_v1/page/summary/Janov_nad_Nisou")
      .then((r) => r.json())
      .then((d) => setText(d.extract || "Informace nejsou k dispozici."))
      .catch(() => setText("Nepodařilo se načíst informace z Wikipedie."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageLayout title="Janov nad Nisou" backPath="/trasy">
      <div style={{ display: "flex", flexDirection: "column", padding: "16px 16px 24px", gap: "16px", boxSizing: "border-box" }}>

        <div style={{ fontSize: "0.70rem", fontWeight: 800, letterSpacing: "0.12em", color: "#38bdf8", textTransform: "uppercase" }}>
          Výchozí město trasy
        </div>

        <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
          <div style={{
            width: "80px", height: "80px", borderRadius: "24px",
            background: "rgba(14,165,233,0.12)", border: "2px solid rgba(14,165,233,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 32px rgba(14,165,233,0.20)",
          }}>
            <MapPin size={36} color="#38bdf8" strokeWidth={1.5} />
          </div>
        </div>

        <div style={{
          borderRadius: "16px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Info size={14} color="#38bdf8" />
              <span style={{ color: "#38bdf8", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.05em" }}>
                O tomto místě
              </span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.68rem" }}>zdroj: Wikipedie</span>
          </div>

          {loading ? (
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem" }}>Načítání…</div>
          ) : (
            <p style={{ margin: 0, color: "rgba(255,255,255,0.80)", fontSize: "0.88rem", lineHeight: "1.65" }}>
              {text}
            </p>
          )}

          <a
            href="https://cs.wikipedia.org/wiki/Janov_nad_Nisou"
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
        </div>

      </div>
    </PageLayout>
  );
}
