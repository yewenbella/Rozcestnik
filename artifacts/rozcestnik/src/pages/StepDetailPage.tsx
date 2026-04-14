import { useParams } from "wouter";
import { MapPin, Navigation, Flag, Info, ExternalLink, Star, Clock } from "lucide-react";
import { trasa1Steps } from "@/data/trasa1Steps";
import PageLayout from "@/components/PageLayout";

export default function StepDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const step = trasa1Steps.find((s) => s.slug === slug);

  if (!step) {
    return (
      <PageLayout title="Místo" backPath="/trasy/1">
        <div style={{ color: "white", padding: "32px", textAlign: "center" }}>
          Místo nenalezeno.
        </div>
      </PageLayout>
    );
  }

  const IconComp = step.type === "start" ? Navigation : step.type === "finish" ? Flag : MapPin;

  return (
    <PageLayout title={step.place} backPath="/trasy/1">
      <div style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 12px",
        boxSizing: "border-box",
        gap: "10px",
      }}>

        {/* Colored label */}
        <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", color: step.color, textTransform: "uppercase" }}>
          {step.label}
        </div>

        {/* Photo or icon fallback */}
        {step.imageUrl ? (
          <div style={{
            borderRadius: "12px",
            overflow: "hidden",
            border: `1px solid ${step.color}33`,
            boxShadow: `0 4px 20px ${step.color}22`,
            aspectRatio: "16/7",
            background: step.bg,
          }}>
            <img
              src={step.imageUrl}
              alt={step.place}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center", padding: "12px 0" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "20px",
              background: step.bg, border: `2px solid ${step.color}55`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 0 24px ${step.color}33`,
            }}>
              <IconComp size={30} color={step.color} strokeWidth={1.5} />
            </div>
          </div>
        )}

        {/* Opening hours badge */}
        {step.openInfo && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "5px 10px", borderRadius: "8px",
            background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.22)",
            alignSelf: "flex-start",
          }}>
            <Clock size={12} color="#4ade80" />
            <span style={{ color: "#4ade80", fontSize: "0.73rem", fontWeight: 600 }}>{step.openInfo}</span>
          </div>
        )}

        {/* Info card */}
        <div style={{
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "12px",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Info size={13} color={step.color} />
              <span style={{ color: step.color, fontWeight: 700, fontSize: "0.73rem", letterSpacing: "0.05em" }}>
                O tomto místě
              </span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.65rem" }}>zdroj: Wikipedie</span>
          </div>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.80)", fontSize: "0.80rem", lineHeight: "1.55" }}>
            {step.info}
          </p>
          {step.wikiUrl && (
            <a
              href={step.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                marginTop: "10px",
                padding: "4px 9px", borderRadius: "7px",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", textDecoration: "none",
              }}
            >
              <ExternalLink size={10} />
              Přečíst celý článek na Wikipedii
            </a>
          )}
        </div>

        {/* Zajímavost card */}
        {step.zajimavost && (
          <div style={{
            borderRadius: "12px",
            background: "rgba(251,191,36,0.07)",
            border: "1px solid rgba(251,191,36,0.25)",
            padding: "12px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
              <Star size={13} color="#fbbf24" fill="#fbbf24" />
              <span style={{ color: "#fbbf24", fontWeight: 700, fontSize: "0.73rem", letterSpacing: "0.05em" }}>
                Zajímavost
              </span>
            </div>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.80)", fontSize: "0.80rem", lineHeight: "1.55" }}>
              {step.zajimavost}
            </p>
          </div>
        )}

      </div>
    </PageLayout>
  );
}
