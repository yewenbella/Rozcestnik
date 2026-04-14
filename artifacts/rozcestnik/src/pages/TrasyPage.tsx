import PageLayout from "@/components/PageLayout";
import { Route, ChevronRight, CheckCircle2, Construction, MapPin } from "lucide-react";
import { useLocation } from "wouter";

function isTrasa1Completed(): boolean {
  try {
    const data = JSON.parse(localStorage.getItem("trasa1_times") || "{}");
    return !!(data["START"] && data["CÍL"]);
  } catch {
    return false;
  }
}

const trasy = [
  { id: 1, name: "Trasa č.1", location: "Janov nad Nisou", locationPath: "/janov", duration: "⏱ odh. 4–5 h", wip: false },
  { id: 2, name: "Trasa č.2", location: "Rozpracováno", locationPath: null, duration: "", wip: true },
  { id: 3, name: "Trasa č.3", location: "Rozpracováno", locationPath: null, duration: "", wip: true },
];

export default function TrasyPage() {
  const [, navigate] = useLocation();
  const trasa1Done = isTrasa1Completed();

  return (
    <PageLayout title="Trasy" backPath="/">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
        {trasy.map((trasa) => {
          const done = trasa.id === 1 ? trasa1Done : false;
          const wip = trasa.wip;
          return (
            <div
              key={trasa.id}
              onClick={() => !wip && navigate(`/trasy/${trasa.id}`)}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: "14px 16px",
                borderRadius: "16px",
                border: wip
                  ? "1px solid rgba(255,255,255,0.10)"
                  : done
                    ? "1px solid rgba(74,222,128,0.45)"
                    : "1px solid rgba(14,165,233,0.30)",
                background: wip
                  ? "rgba(255,255,255,0.04)"
                  : done
                    ? "rgba(74,222,128,0.10)"
                    : "rgba(14,165,233,0.10)",
                backdropFilter: "blur(12px)",
                cursor: wip ? "default" : "pointer",
                opacity: wip ? 0.5 : 1,
                transition: "all 0.3s",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1, minWidth: 0 }}>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "12px", flexShrink: 0,
                  background: wip ? "rgba(255,255,255,0.06)" : done ? "rgba(74,222,128,0.15)" : "rgba(14,165,233,0.15)",
                  border: wip ? "1px solid rgba(255,255,255,0.10)" : done ? "1px solid rgba(74,222,128,0.30)" : "1px solid rgba(14,165,233,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {wip
                    ? <Construction size={18} color="rgba(255,255,255,0.4)" strokeWidth={1.8} />
                    : done
                      ? <CheckCircle2 size={18} color="#4ade80" strokeWidth={2} />
                      : <Route size={18} color="#38bdf8" strokeWidth={1.8} />
                  }
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: 0 }}>
                  <span style={{ color: wip ? "rgba(255,255,255,0.55)" : "white", fontWeight: 700, fontSize: "1rem" }}>
                    {trasa.name}
                  </span>

                  {!wip && trasa.locationPath && (
                    <div
                      onClick={(e) => { e.stopPropagation(); navigate(trasa.locationPath!); }}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "4px",
                        alignSelf: "flex-start",
                        padding: "3px 9px", borderRadius: "8px",
                        border: "1px solid rgba(14,165,233,0.40)",
                        background: "rgba(14,165,233,0.12)",
                        color: "rgba(255,255,255,0.80)",
                        fontSize: "0.72rem", fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <MapPin size={10} color="#38bdf8" />
                      {trasa.location}
                    </div>
                  )}

                  {wip && (
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}>{trasa.location}</span>
                  )}

                  {!wip && (done
                    ? <span style={{ color: "#4ade80", fontSize: "0.75rem", fontWeight: 600 }}>Splněno ✓</span>
                    : <span style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.72rem" }}>{trasa.duration}</span>
                  )}
                </div>
              </div>

              {!wip && <ChevronRight size={18} color="rgba(255,255,255,0.4)" style={{ flexShrink: 0 }} />}
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}
