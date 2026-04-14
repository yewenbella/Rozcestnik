import { useParams } from "wouter";
import { MapPin, Navigation, Flag, Info, ExternalLink, Star, Clock, Ticket } from "lucide-react";
import { trasa1Steps } from "@/data/trasa1Steps";
import PageLayout from "@/components/PageLayout";

function SlovankаStamp() {
  return (
    <div style={{
      position: "absolute",
      bottom: "8px",
      right: "8px",
      width: "148px",
      height: "148px",
      pointerEvents: "none",
      opacity: 0.78,
    }}>
      <svg viewBox="0 0 200 200" width="148" height="148" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="topArc" d="M 18,100 A 82,82 0 0,1 182,100"/>
          <path id="bottomArc" d="M 32,148 A 82,82 0 0,0 168,148"/>
        </defs>

        {/* Outer dashed ring — stamp edge */}
        <circle cx="100" cy="100" r="94" fill="none" stroke="#1a1a1a" strokeWidth="4.5" strokeDasharray="5,2.5"/>
        {/* Inner solid ring */}
        <circle cx="100" cy="100" r="85" fill="none" stroke="#1a1a1a" strokeWidth="1.8"/>

        {/* ── Tower silhouette ── */}
        {/* Outer left leg */}
        <path d="M 71,128 L 82,40 L 85,40 L 77,128 Z" fill="#1a1a1a"/>
        {/* Outer right leg */}
        <path d="M 129,128 L 118,40 L 115,40 L 123,128 Z" fill="#1a1a1a"/>
        {/* Inner left leg */}
        <path d="M 83,128 L 87,40 L 89,40 L 86,128 Z" fill="#1a1a1a"/>
        {/* Inner right leg */}
        <path d="M 117,128 L 113,40 L 111,40 L 114,128 Z" fill="#1a1a1a"/>

        {/* Horizontal bars */}
        <rect x="71" y="126" width="58" height="3.5" fill="#1a1a1a"/>
        <rect x="73" y="107" width="54" height="2.8" fill="#1a1a1a"/>
        <rect x="75" y="88"  width="50" height="2.8" fill="#1a1a1a"/>
        <rect x="77" y="69"  width="46" height="2.8" fill="#1a1a1a"/>
        <rect x="79" y="50"  width="42" height="2.5" fill="#1a1a1a"/>
        <rect x="81" y="38"  width="38" height="3"   fill="#1a1a1a"/>

        {/* X bracing — bottom panel */}
        <line x1="72" y1="128" x2="122" y2="109" stroke="#1a1a1a" strokeWidth="1.6"/>
        <line x1="122" y1="128" x2="72" y2="109" stroke="#1a1a1a" strokeWidth="1.6"/>
        {/* X bracing — second panel */}
        <line x1="74" y1="109" x2="120" y2="90"  stroke="#1a1a1a" strokeWidth="1.6"/>
        <line x1="120" y1="109" x2="74" y2="90"  stroke="#1a1a1a" strokeWidth="1.6"/>
        {/* X bracing — third panel */}
        <line x1="76" y1="90"  x2="118" y2="71"  stroke="#1a1a1a" strokeWidth="1.6"/>
        <line x1="118" y1="90"  x2="76" y2="71"  stroke="#1a1a1a" strokeWidth="1.6"/>
        {/* X bracing — fourth panel */}
        <line x1="78" y1="71"  x2="116" y2="52"  stroke="#1a1a1a" strokeWidth="1.6"/>
        <line x1="116" y1="71"  x2="78" y2="52"  stroke="#1a1a1a" strokeWidth="1.6"/>

        {/* Viewing gallery platform */}
        <rect x="74" y="33" width="52" height="5" rx="1" fill="#1a1a1a"/>
        {/* Gallery rail posts */}
        <rect x="76" y="26" width="2" height="7" fill="#1a1a1a"/>
        <rect x="122" y="26" width="2" height="7" fill="#1a1a1a"/>
        <rect x="92" y="26" width="2" height="7" fill="#1a1a1a"/>
        <rect x="106" y="26" width="2" height="7" fill="#1a1a1a"/>
        {/* Gallery rail top */}
        <rect x="76" y="24" width="48" height="2.5" fill="#1a1a1a"/>

        {/* Lantern/top box */}
        <rect x="88" y="14" width="24" height="10" rx="1" fill="#1a1a1a"/>
        {/* Flagpole */}
        <line x1="100" y1="14" x2="100" y2="7" stroke="#1a1a1a" strokeWidth="2"/>
        {/* Flag */}
        <path d="M 100 7 L 111 10 L 100 13 Z" fill="#1a1a1a"/>

        {/* Curved text — top */}
        <text
          fontFamily="Georgia, serif"
          fontSize="12"
          fontWeight="bold"
          fill="#1a1a1a"
          letterSpacing="2.5"
        >
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            ROZHLEDNA · SLOVANKA
          </textPath>
        </text>

        {/* Curved text — bottom */}
        <text
          fontFamily="Georgia, serif"
          fontSize="11"
          fontWeight="bold"
          fill="#1a1a1a"
          letterSpacing="1.5"
        >
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            · 1887 · JIZERSKÉ HORY ·
          </textPath>
        </text>
      </svg>
    </div>
  );
}

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
            aspectRatio: "16/9",
            background: step.bg,
            position: "relative",
          }}>
            <img
              src={step.imageUrl}
              alt={step.place}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {slug === "checkpoint-1" && <SlovankаStamp />}
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

        {/* Hours + entry badges */}
        {(step.openHours || step.entryFee) && (
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {step.openHours && (
              step.googleMapsUrl ? (
                <a
                  href={step.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "5px 10px", borderRadius: "8px",
                    background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.25)",
                    textDecoration: "none",
                  }}
                >
                  <Clock size={12} color="#4ade80" />
                  <span style={{ color: "#4ade80", fontSize: "0.73rem", fontWeight: 600 }}>{step.openHours}</span>
                  <ExternalLink size={10} color="rgba(74,222,128,0.55)" />
                </a>
              ) : (
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "5px 10px", borderRadius: "8px",
                  background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.25)",
                }}>
                  <Clock size={12} color="#4ade80" />
                  <span style={{ color: "#4ade80", fontSize: "0.73rem", fontWeight: 600 }}>{step.openHours}</span>
                </div>
              )
            )}
            {step.entryFee && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "5px 10px", borderRadius: "8px",
                background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.25)",
              }}>
                <Ticket size={12} color="#a78bfa" />
                <span style={{ color: "#a78bfa", fontSize: "0.73rem", fontWeight: 600 }}>{step.entryFee}</span>
              </div>
            )}
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
