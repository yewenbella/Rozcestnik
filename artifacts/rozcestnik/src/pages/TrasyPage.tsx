import PageLayout from "@/components/PageLayout";
import { Route, ChevronRight, CheckCircle2, Construction, MapPin, X } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

function isTrasa1Completed(): boolean {
  try {
    const data = JSON.parse(localStorage.getItem("trasa1_times") || "{}");
    return !!(data["START"] && data["CÍL"]);
  } catch {
    return false;
  }
}

const trasy = [
  { id: 1, name: "Trasa č.1", location: "Janov nad Nisou", wikiSlug: "Janov_nad_Nisou", duration: "⏱ odh. 4–5 h", wip: false },
  { id: 2, name: "Trasa č.2", location: "Rozpracováno", wikiSlug: null, duration: "", wip: true },
  { id: 3, name: "Trasa č.3", location: "Rozpracováno", wikiSlug: null, duration: "", wip: true },
];

export default function TrasyPage() {
  const [, navigate] = useLocation();
  const trasa1Done = isTrasa1Completed();
  const [wikiOpen, setWikiOpen] = useState<number | null>(null);
  const [wikiText, setWikiText] = useState<Record<number, string>>({});
  const [wikiLoading, setWikiLoading] = useState(false);

  async function toggleWiki(e: React.MouseEvent, trasa: typeof trasy[0]) {
    e.stopPropagation();
    if (!trasa.wikiSlug) return;
    if (wikiOpen === trasa.id) {
      setWikiOpen(null);
      return;
    }
    setWikiOpen(trasa.id);
    if (wikiText[trasa.id]) return;
    setWikiLoading(true);
    try {
      const res = await fetch(`https://cs.wikipedia.org/api/rest_v1/page/summary/${trasa.wikiSlug}`);
      const data = await res.json();
      setWikiText((prev) => ({ ...prev, [trasa.id]: data.extract || "Informace nejsou k dispozici." }));
    } catch {
      setWikiText((prev) => ({ ...prev, [trasa.id]: "Nepodařilo se načíst informace z Wikipedie." }));
    } finally {
      setWikiLoading(false);
    }
  }

  return (
    <PageLayout title="Trasy" backPath="/">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
        {trasy.map((trasa) => {
          const done = trasa.id === 1 ? trasa1Done : false;
          const wip = trasa.wip;
          const isWikiOpen = wikiOpen === trasa.id;
          return (
            <div key={trasa.id} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div
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
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "12px",
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
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ color: wip ? "rgba(255,255,255,0.55)" : "white", fontWeight: 700, fontSize: "1rem" }}>
                      {trasa.name}
                    </span>
                    {wip && <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}>{trasa.location}</span>}
                    {!wip && (done
                      ? <span style={{ color: "#4ade80", fontSize: "0.75rem", fontWeight: 600 }}>Splněno ✓</span>
                      : <span style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.72rem" }}>{trasa.duration}</span>
                    )}
                  </div>
                </div>

                {!wip && (
                  <div
                    onClick={(e) => toggleWiki(e, trasa)}
                    style={{
                      flex: 1, display: "flex", justifyContent: "center", alignItems: "center",
                    }}
                  >
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: "4px",
                      padding: "4px 11px", borderRadius: "8px",
                      border: isWikiOpen
                        ? "1px solid rgba(14,165,233,0.60)"
                        : "1px solid rgba(14,165,233,0.35)",
                      background: isWikiOpen
                        ? "rgba(14,165,233,0.22)"
                        : "rgba(14,165,233,0.10)",
                      color: isWikiOpen ? "#7dd3fc" : "rgba(255,255,255,0.75)",
                      fontSize: "0.72rem", fontWeight: 600, whiteSpace: "nowrap",
                      transition: "all 0.2s",
                    }}>
                      <MapPin size={10} />
                      {trasa.location}
                    </span>
                  </div>
                )}

                {!wip && <ChevronRight size={18} color="rgba(255,255,255,0.4)" style={{ flexShrink: 0 }} />}
              </div>

              {isWikiOpen && (
                <div style={{
                  padding: "12px 14px", borderRadius: "12px",
                  background: "rgba(14,165,233,0.07)", border: "1px solid rgba(14,165,233,0.20)",
                  position: "relative",
                }}>
                  <button
                    onClick={() => setWikiOpen(null)}
                    style={{
                      position: "absolute", top: "8px", right: "8px",
                      background: "none", border: "none", cursor: "pointer", padding: "2px",
                    }}
                  >
                    <X size={14} color="rgba(255,255,255,0.4)" />
                  </button>
                  <div style={{ color: "#7dd3fc", fontSize: "0.70rem", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Wikipedia · {trasa.location}
                  </div>
                  {wikiLoading
                    ? <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>Načítání…</div>
                    : <div style={{ color: "rgba(255,255,255,0.80)", fontSize: "0.78rem", lineHeight: 1.55 }}>
                        {wikiText[trasa.id] || ""}
                      </div>
                  }
                </div>
              )}
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}
