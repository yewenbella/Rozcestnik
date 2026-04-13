import PageLayout from "@/components/PageLayout";
import { Route, ChevronRight, CheckCircle2 } from "lucide-react";
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
  { id: 1, label: "Trasa č.1" },
];

export default function TrasyPage() {
  const [, navigate] = useLocation();
  const trasa1Done = isTrasa1Completed();

  return (
    <PageLayout title="Trasy" backPath="/">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
        {trasy.map((trasa) => {
          const done = trasa.id === 1 ? trasa1Done : false;
          return (
            <button
              key={trasa.id}
              onClick={() => navigate(`/trasy/${trasa.id}`)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "16px 18px",
                borderRadius: "16px",
                border: done
                  ? "1px solid rgba(74,222,128,0.45)"
                  : "1px solid rgba(14,165,233,0.30)",
                background: done
                  ? "rgba(74,222,128,0.10)"
                  : "rgba(14,165,233,0.10)",
                backdropFilter: "blur(12px)",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.3s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "12px",
                    background: done
                      ? "rgba(74,222,128,0.15)"
                      : "rgba(14,165,233,0.15)",
                    border: done
                      ? "1px solid rgba(74,222,128,0.30)"
                      : "1px solid rgba(14,165,233,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {done
                    ? <CheckCircle2 size={18} color="#4ade80" strokeWidth={2} />
                    : <Route size={18} color="#38bdf8" strokeWidth={1.8} />
                  }
                </div>
                <div>
                  <span style={{ color: "white", fontWeight: 700, fontSize: "1rem", display: "block" }}>
                    {trasa.label}
                  </span>
                  {done && (
                    <span style={{ color: "#4ade80", fontSize: "0.75rem", fontWeight: 600 }}>
                      Splněno ✓
                    </span>
                  )}
                </div>
              </div>
              <ChevronRight size={18} color="rgba(255,255,255,0.4)" />
            </button>
          );
        })}
      </div>
    </PageLayout>
  );
}
