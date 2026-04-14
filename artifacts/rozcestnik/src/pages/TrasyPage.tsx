import PageLayout from "@/components/PageLayout";
import { Route, ChevronRight, CheckCircle2, Construction } from "lucide-react";
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
  { id: 1, name: "Trasa č.1", location: "Janov nad Nisou", duration: "⏱ odh. 4–5 h", wip: false },
  { id: 2, name: "Trasa č.2", location: "Rozpracováno", duration: "", wip: true },
  { id: 3, name: "Trasa č.3", location: "Rozpracováno", duration: "", wip: true },
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
            <button
              key={trasa.id}
              onClick={() => !wip && navigate(`/trasy/${trasa.id}`)}
              disabled={wip}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "16px 18px",
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
                textAlign: "left",
                opacity: wip ? 0.5 : 1,
                transition: "all 0.3s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "12px",
                    background: wip
                      ? "rgba(255,255,255,0.06)"
                      : done
                        ? "rgba(74,222,128,0.15)"
                        : "rgba(14,165,233,0.15)",
                    border: wip
                      ? "1px solid rgba(255,255,255,0.10)"
                      : done
                        ? "1px solid rgba(74,222,128,0.30)"
                        : "1px solid rgba(14,165,233,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {wip
                    ? <Construction size={18} color="rgba(255,255,255,0.4)" strokeWidth={1.8} />
                    : done
                      ? <CheckCircle2 size={18} color="#4ade80" strokeWidth={2} />
                      : <Route size={18} color="#38bdf8" strokeWidth={1.8} />
                  }
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
                  <span style={{ color: wip ? "rgba(255,255,255,0.55)" : "white", fontWeight: 700, fontSize: "1rem" }}>
                    {trasa.name}
                  </span>
                  {!wip && (
                    <span style={{
                      alignSelf: "flex-end",
                      color: "rgba(255,255,255,0.60)",
                      fontSize: "0.76rem",
                      fontWeight: 500,
                      fontStyle: "italic",
                    }}>
                      {trasa.location}
                    </span>
                  )}
                  {wip && (
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}>
                      {trasa.location}
                    </span>
                  )}
                  {!wip && (done ? (
                    <span style={{ color: "#4ade80", fontSize: "0.75rem", fontWeight: 600 }}>
                      Splněno ✓
                    </span>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.72rem" }}>
                      {trasa.duration}
                    </span>
                  ))}
                </div>
              </div>
              {!wip && <ChevronRight size={18} color="rgba(255,255,255,0.4)" />}
            </button>
          );
        })}
      </div>
    </PageLayout>
  );
}
