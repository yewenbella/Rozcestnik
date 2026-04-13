import { useParams } from "wouter";
import { MapPin, Navigation, Flag, Info, ExternalLink } from "lucide-react";
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
        padding: "16px 16px 24px",
        boxSizing: "border-box",
        gap: "16px",
      }}>

        {/* Colored label */}
        <div style={{ fontSize: "0.70rem", fontWeight: 800, letterSpacing: "0.12em", color: step.color, textTransform: "uppercase" }}>
          {step.label}
        </div>

        {/* Photo or icon fallback */}
        {step.imageUrl ? (
          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: `1px solid ${step.color}33`,
            boxShadow: `0 4px 24px ${step.color}22`,
            aspectRatio: "16/9",
            background: step.bg,
          }}>
            <img
              src={step.imageUrl}
              alt={step.place}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ) : (
          <div style={{
            display: "flex", justifyContent: "center", padding: "24px 0",
          }}>
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
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.68rem" }}>zdroj: Wikipedie</span>
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

      </div>
    </PageLayout>
  );
}
