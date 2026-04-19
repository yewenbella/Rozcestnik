import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Route, ChevronRight, CheckCircle2, Construction, MapPin } from "lucide-react";
import { useLocation } from "wouter";
import { useDenik } from "@/hooks/useDenik";

function isTrasa1Done(): boolean {
  try { return !!localStorage.getItem("trasa1_result_sent"); } catch { return false; }
}
function isTrasa2Done(): boolean {
  try { return !!localStorage.getItem("trasa2_result_sent"); } catch { return false; }
}
function isTrasa3Done(): boolean {
  try { return !!localStorage.getItem("trasa3_result_sent"); } catch { return false; }
}

const trasy = [
  { id: 1, name: "Trasa \u010d.1", location: "Janov nad Nisou", locationPath: "/janov", duration: "\u23f1 odh. 3\u20134 h", wip: false },
  { id: 2, name: "Trasa \u010d.2", location: "\u010cesk\u00fd r\u00e1j", locationPath: "/cesky-raj", duration: "\u23f1 odh. 3\u20134 h", wip: false },
  { id: 3, name: "Trasa č.3", location: "Malá Skála", locationPath: "/mala-skala", duration: "⏱ odh. 3–4 h", wip: false },
];

export default function TrasyPage() {
  const [, navigate] = useLocation();
  const trasa1Done = isTrasa1Done();
  const trasa2Done = isTrasa2Done();
  const trasa3Done = isTrasa3Done();
  const { markDone, isSignedIn } = useDenik();

  useEffect(() => {
    if (isSignedIn && trasa1Done) markDone("trasa", "1", "Trasa č.1");
  }, [isSignedIn, trasa1Done]);

  useEffect(() => {
    if (isSignedIn && trasa2Done) markDone("trasa", "2", "Trasa č.2");
  }, [isSignedIn, trasa2Done]);

  useEffect(() => {
    if (isSignedIn && trasa3Done) markDone("trasa", "3", "Trasa č.3");
  }, [isSignedIn, trasa3Done]);

  return (
    <PageLayout title="Trasy" backPath="/vyzva">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
        {trasy.map((trasa) => {
          const done = trasa.id === 1 ? trasa1Done : trasa.id === 2 ? trasa2Done : trasa.id === 3 ? trasa3Done : false;
          const wip = trasa.wip;
          const handleClick = () => {
            if (wip) return;
            navigate(`/trasy/${trasa.id}`);
          };

          return (
            <div
              key={trasa.id}
              onClick={handleClick}
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

                  {wip && (
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}>{trasa.location}</span>
                  )}
                  {!wip && (
                    <span style={{ color: done ? "#4ade80" : "rgba(255,255,255,0.40)", fontSize: "0.72rem" }}>
                      {trasa.duration}
                    </span>
                  )}
                </div>
              </div>

              {!wip && trasa.locationPath && (
                <div
                  onClick={(e) => { e.stopPropagation(); navigate(trasa.locationPath!); }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "4px",
                    flexShrink: 0, marginRight: "6px",
                    padding: "3px 9px", borderRadius: "8px",
                    border: done ? "1px solid rgba(74,222,128,0.45)" : "1px solid rgba(14,165,233,0.40)",
                    background: done ? "rgba(74,222,128,0.12)" : "rgba(14,165,233,0.12)",
                    color: done ? "#86efac" : "rgba(255,255,255,0.80)",
                    fontSize: "0.72rem", fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <MapPin size={10} color={done ? "#4ade80" : "#38bdf8"} />
                  {trasa.location}
                  {done && <CheckCircle2 size={11} color="#4ade80" style={{ marginLeft: "2px" }} />}
                </div>
              )}

              {!wip && <ChevronRight size={18} color="rgba(255,255,255,0.4)" style={{ flexShrink: 0 }} />}
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}
