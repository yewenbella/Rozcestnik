import { useEffect, useState } from "react";
import { MapPin, Info, ExternalLink, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const zajimavosti = [
  { emoji: "🛷", text: "Bobová dráha na Severáku měří přes 600 metrů a sjezd trvá jen pár minut plných adrenalinu — jezdí se celoročně, i v létě." },
  { emoji: "⛷️", text: "Areál Severák nabízí sjezdové i běžecké tratě — v zimě je to jedno z nejspolehlivějších středisek v Jizerských horách." },
  { emoji: "🧇", text: "V místních hospůdkách a penzionech se podávají tradiční krkonošské i jizerské speciality — doporučujeme bramborové placky." },
];

export default function JanovPage() {
  const [text, setText] = useState("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://cs.wikipedia.org/api/rest_v1/page/summary/Janov_nad_Nisou")
      .then((r) => r.json())
      .then((d) => {
        setText(d.extract || "Informace nejsou k dispozici.");
        if (d.thumbnail?.source) setThumbnail(d.thumbnail.source);
      })
      .catch(() => setText("Nepodařilo se načíst informace z Wikipedie."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageLayout title="Janov nad Nisou" backPath="/trasy">
      <div style={{ display: "flex", flexDirection: "column", padding: "10px 12px 16px", gap: "10px", boxSizing: "border-box" }}>

        <div style={{ fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.12em", color: "#38bdf8", textTransform: "uppercase" }}>
          Výchozí město trasy
        </div>

        {thumbnail ? (
          <div style={{
            borderRadius: "12px", overflow: "hidden",
            border: "1px solid rgba(14,165,233,0.25)",
            boxShadow: "0 4px 16px rgba(14,165,233,0.15)",
            aspectRatio: "16/7",
          }}>
            <img
              src={thumbnail}
              alt="Janov nad Nisou"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ) : !loading && (
          <div style={{ display: "flex", justifyContent: "center", padding: "12px 0" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "20px",
              background: "rgba(14,165,233,0.12)", border: "2px solid rgba(14,165,233,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 24px rgba(14,165,233,0.20)",
            }}>
              <MapPin size={28} color="#38bdf8" strokeWidth={1.5} />
            </div>
          </div>
        )}

        <div style={{
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "11px 12px",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "7px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Info size={12} color="#38bdf8" />
              <span style={{ color: "#38bdf8", fontWeight: 700, fontSize: "0.73rem", letterSpacing: "0.05em" }}>
                O tomto místě
              </span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.65rem" }}>zdroj: Wikipedie</span>
          </div>

          {loading ? (
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.80rem" }}>Načítání…</div>
          ) : (
            <p style={{ margin: 0, color: "rgba(255,255,255,0.80)", fontSize: "0.80rem", lineHeight: "1.55" }}>
              {text}
            </p>
          )}

          <a
            href="https://cs.wikipedia.org/wiki/Janov_nad_Nisou"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              marginTop: "9px",
              padding: "4px 9px", borderRadius: "7px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.55)", fontSize: "0.70rem", textDecoration: "none",
            }}
          >
            <ExternalLink size={10} />
            Přečíst celý článek na Wikipedii
          </a>
        </div>

        <div style={{
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "11px 12px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "9px" }}>
            <Sparkles size={12} color="#f59e0b" />
            <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.73rem", letterSpacing: "0.05em" }}>
              Zajímavosti
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {zajimavosti.map((z, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0, lineHeight: 1.4 }}>{z.emoji}</span>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontSize: "0.78rem", lineHeight: "1.50" }}>
                  {z.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
