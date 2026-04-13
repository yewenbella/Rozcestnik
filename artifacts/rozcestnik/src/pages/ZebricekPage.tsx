import { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Trophy, Route, Loader2, Medal } from "lucide-react";

function formatDuration(ms: number): string {
  const totalMin = Math.round(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return `${m} min`;
  return `${h} h ${m} min`;
}

interface LeaderboardEntry {
  teamName: string;
  totalTimeMs: number;
  completedAt: string;
}

const medalColors = ["#fbbf24", "#94a3b8", "#b45309"];
const medalLabels = ["1.", "2.", "3."];

export default function ZebricekPage() {
  const [activeRoute, setActiveRoute] = useState(1);
  const [results, setResults] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/results/leaderboard/${activeRoute}`, { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setResults(data.results || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Nepodařilo se načíst výsledky.");
        setLoading(false);
      });
  }, [activeRoute]);

  return (
    <PageLayout title="Žebříček" backPath="/">
      {/* Route tabs */}
      <div style={{ padding: "12px 16px 0" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => setActiveRoute(1)}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "7px 14px", borderRadius: "10px",
              border: activeRoute === 1
                ? "1px solid rgba(56,189,248,0.55)"
                : "1px solid rgba(255,255,255,0.12)",
              background: activeRoute === 1
                ? "rgba(56,189,248,0.15)"
                : "rgba(255,255,255,0.05)",
              color: activeRoute === 1 ? "#7dd3fc" : "rgba(255,255,255,0.45)",
              fontSize: "0.80rem", fontWeight: 700, cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <Route size={13} />
            Trasa č.1
          </button>
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginTop: "12px" }} />
      </div>

      {/* Content */}
      <div style={{ padding: "16px" }}>
        {loading && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "40px", color: "rgba(255,255,255,0.4)" }}>
            <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
            <span style={{ fontSize: "0.85rem" }}>Načítám výsledky…</span>
          </div>
        )}

        {!loading && error && (
          <div style={{ textAlign: "center", padding: "40px 24px", color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
            {error}
          </div>
        )}

        {!loading && !error && results.length === 0 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", padding: "48px 24px", textAlign: "center" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "20px",
              background: "rgba(245,158,11,0.10)", border: "1.5px solid rgba(245,158,11,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Trophy size={28} color="#f59e0b" strokeWidth={1.8} />
            </div>
            <h2 style={{ color: "white", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>
              Žebříček je prázdný
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.83rem", lineHeight: 1.6, margin: 0 }}>
              Výsledky se zobrazí, jakmile dvojice dokončí trasu.
            </p>
          </div>
        )}

        {!loading && !error && results.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {results.map((entry, idx) => {
              const isTop3 = idx < 3;
              const medalColor = medalColors[idx] ?? "rgba(255,255,255,0.3)";
              return (
                <div
                  key={entry.teamName + idx}
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: "12px 14px", borderRadius: "14px",
                    background: isTop3 ? `${medalColor}12` : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isTop3 ? medalColor + "33" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  {/* Rank */}
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "10px", flexShrink: 0,
                    background: isTop3 ? `${medalColor}22` : "rgba(255,255,255,0.06)",
                    border: `1px solid ${isTop3 ? medalColor + "44" : "rgba(255,255,255,0.10)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {isTop3
                      ? <Medal size={15} color={medalColor} strokeWidth={2} />
                      : <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", fontWeight: 700 }}>{idx + 1}.</span>
                    }
                  </div>

                  {/* Team info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: "white", fontWeight: 700, fontSize: "0.90rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {entry.teamName}
                    </div>
                    {isTop3 && (
                      <div style={{ color: medalColor, fontSize: "0.70rem", fontWeight: 600, marginTop: "1px" }}>
                        {medalLabels[idx]} místo
                      </div>
                    )}
                  </div>

                  {/* Time */}
                  <div style={{
                    padding: "4px 10px", borderRadius: "8px",
                    background: isTop3 ? `${medalColor}18` : "rgba(255,255,255,0.06)",
                    border: `1px solid ${isTop3 ? medalColor + "33" : "rgba(255,255,255,0.10)"}`,
                  }}>
                    <span style={{ color: isTop3 ? medalColor : "rgba(255,255,255,0.6)", fontWeight: 700, fontSize: "0.82rem" }}>
                      {formatDuration(entry.totalTimeMs)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </PageLayout>
  );
}
