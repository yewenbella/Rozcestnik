import React, { useState, useMemo, useRef } from "react";
import { useLocation } from "wouter";
import { Eye, Search, X, ExternalLink, ChevronDown, CheckCircle2, Circle, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { rozhledny, krajeList, type Rozhledna } from "@/data/rozhledny";
import { useDenik } from "@/hooks/useDenik";

const PAGE_SIZE = 24;

const DEFUNCT_TOWERS: Record<string, string> = {
  "cisarsky-kamen": "Zaniklá – nahrazena rozhlednou Císařský kámen II",
  "rozhledna-na-grosscedlobi": "Zaniklá rozhledna",
};

function DetailModal({ r, onClose, isCompleted, toggle, isSignedIn }: {
  r: Rozhledna;
  onClose: () => void;
  isCompleted: (type: string, id: string) => boolean;
  toggle: (type: string, id: string, name: string) => void;
  isSignedIn: boolean;
}) {
  const rid = String(r.id);
  const done = isCompleted("rozhledna", rid);
  const defunctNote = DEFUNCT_TOWERS[r.slug];
  const mapsUrl = `https://maps.google.com/maps/search/${encodeURIComponent(r.name + " rozhledna")}`;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.75)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        maxWidth: "480px", margin: "0 auto",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%",
          background: "rgba(8,22,8,0.97)",
          border: "1px solid rgba(134,239,172,0.2)",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Photo area — full tower visible */}
        <div style={{
          position: "relative", width: "100%", height: "240px", flexShrink: 0,
          background: "#050e05", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {r.photo ? (
            <img
              src={r.photo}
              alt={r.name}
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center top" }}
            />
          ) : (
            <Eye size={40} color="rgba(134,239,172,0.2)" />
          )}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "linear-gradient(to bottom, transparent, rgba(8,22,8,0.98))", pointerEvents: "none" }} />
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "12px", right: "12px",
              width: "32px", height: "32px", borderRadius: "50%",
              background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.2)",
              color: "white", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <X size={16} />
          </button>
          <div style={{
            position: "absolute", bottom: "10px", left: "16px", right: "50px",
            color: "white", fontWeight: 900, fontSize: "1.15rem", lineHeight: 1.2,
          }}>
            {r.name}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "12px 16px 20px", overflowY: "auto", flex: 1 }}>

          {/* Defunct warning */}
          {defunctNote && (
            <div style={{
              display: "flex", alignItems: "flex-start", gap: "8px",
              background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.3)",
              borderRadius: "10px", padding: "10px 12px", marginBottom: "12px",
            }}>
              <span style={{ fontSize: "1rem", flexShrink: 0 }}>{"⚠️"}</span>
              <span style={{ color: "#fbbf24", fontSize: "0.82rem", fontWeight: 600, lineHeight: 1.4 }}>{defunctNote}</span>
            </div>
          )}

          {/* Kraj tags */}
          {r.kraj.filter(k => krajeList.includes(k)).length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px", alignItems: "center" }}>
              <MapPin size={11} color="#86efac" style={{ flexShrink: 0 }} />
              {r.kraj.filter(k => krajeList.includes(k)).map(k => (
                <span key={k} style={{
                  background: "rgba(134,239,172,0.12)", border: "1px solid rgba(134,239,172,0.25)",
                  borderRadius: "6px", padding: "2px 8px",
                  color: "#86efac", fontSize: "0.74rem", fontWeight: 600,
                }}>
                  {k.replace(" kraj", "")}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          {r.desc && (
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.86rem", lineHeight: 1.6, margin: "0 0 14px" }}>
              {r.desc}
            </p>
          )}

          {/* Buttons row 1: Maps + info */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                padding: "11px 8px", borderRadius: "10px",
                background: "rgba(66,133,244,0.12)", border: "1px solid rgba(66,133,244,0.35)",
                color: "#93c5fd", fontWeight: 700, fontSize: "0.82rem",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: "0.9rem" }}>{"🗺️"}</span>
              {"Otev\u00edrac\u00ed doby"}
            </a>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                padding: "11px 8px", borderRadius: "10px",
                background: "rgba(134,239,172,0.08)", border: "1px solid rgba(134,239,172,0.25)",
                color: "#86efac", fontWeight: 700, fontSize: "0.82rem",
                textDecoration: "none",
              }}
            >
              <ExternalLink size={13} />
              {"Popis rozhledny"}
            </a>
          </div>

          {/* Mark visited button */}
          {isSignedIn ? (
            <button
              onClick={() => toggle("rozhledna", rid, r.name)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "12px", borderRadius: "10px",
                background: done ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.07)",
                border: done ? "1px solid rgba(74,222,128,0.45)" : "1px solid rgba(255,255,255,0.15)",
                color: done ? "#4ade80" : "rgba(255,255,255,0.7)",
                fontWeight: 700, fontSize: "0.88rem", cursor: "pointer",
              }}
            >
              {done ? <CheckCircle2 size={16} /> : <Circle size={16} />}
              {done ? "Nav\u0161t\u00edveno \u2013 odebrat z den\u00edku" : "Ozna\u010dit jako nav\u0161t\u00edveno"}
            </button>
          ) : (
            <div style={{
              width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
              padding: "11px", borderRadius: "10px",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.3)", fontSize: "0.82rem",
            }}>
              {"P\u0159ihlas se pro ozna\u010dov\u00e1n\u00ed nav\u0161t\u00edven\u00fdch"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RozhlednyPage() {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const [kraj, setKraj] = useState("");
  const [page, setPage] = useState(1);
  const [showKrajDropdown, setShowKrajDropdown] = useState(false);
  const [selected, setSelected] = useState<Rozhledna | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { isCompleted, toggle, isSignedIn } = useDenik();

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return rozhledny.filter(r => {
      const matchName = !q || r.name.toLowerCase().includes(q);
      const matchKraj = !kraj || r.kraj.some(k => k === kraj);
      return matchName && matchKraj;
    });
  }, [query, kraj]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice(0, page * PAGE_SIZE);

  function handleQueryChange(v: string) {
    setQuery(v);
    setPage(1);
  }

  function handleKrajChange(v: string) {
    setKraj(v);
    setPage(1);
    setShowKrajDropdown(false);
  }

  return (
    <div style={{
      minHeight: "100vh", width: "100%", maxWidth: "480px", margin: "0 auto",
      position: "relative", display: "flex", flexDirection: "column", overflow: "hidden",
    }}>
      {/* Background */}
      <img src={heroBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,30,10,0.82) 100%)" }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        {/* Header */}
        <div style={{ padding: "16px 16px 0", display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "rgba(0,0,0,0.50)",
              border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px",
              padding: "7px 12px", color: "rgba(255,255,255,0.85)", fontSize: "0.78rem",
              fontWeight: 700, cursor: "pointer", flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
              <path d="M10 3L5 7.5 10 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {"Zp\u011bt"}
          </button>

          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px" }}>
            <Eye size={18} color="#86efac" />
            <span style={{ color: "white", fontWeight: 900, fontSize: "1.05rem", letterSpacing: "0.04em" }}>ROZHLEDNY</span>
            <span style={{
              background: "rgba(134,239,172,0.2)", border: "1px solid rgba(134,239,172,0.4)",
              borderRadius: "20px", padding: "1px 8px", color: "#86efac",
              fontSize: "0.72rem", fontWeight: 700,
            }}>{filtered.length}</span>
          </div>
        </div>

        {/* Search + Filter */}
        <div style={{ padding: "12px 16px 8px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px",
            padding: "9px 12px",
          }}>
            <Search size={15} color="rgba(255,255,255,0.55)" />
            <input
              type="text"
              placeholder={"Hledat rozhlednu\u2026"}
              value={query}
              onChange={e => handleQueryChange(e.target.value)}
              style={{ flex: 1, background: "none", border: "none", outline: "none", color: "white", fontSize: "0.88rem" }}
            />
            {query && (
              <button onClick={() => handleQueryChange("")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
                <X size={14} color="rgba(255,255,255,0.55)" />
              </button>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowKrajDropdown(p => !p)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "rgba(255,255,255,0.10)",
                border: kraj ? "1px solid rgba(134,239,172,0.5)" : "1px solid rgba(255,255,255,0.15)",
                borderRadius: "10px", padding: "9px 12px", cursor: "pointer",
                color: kraj ? "#86efac" : "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontWeight: kraj ? 700 : 400,
              }}
            >
              <span>{kraj || "V\u0161echny kraje"}</span>
              <ChevronDown size={14} color={kraj ? "#86efac" : "rgba(255,255,255,0.5)"} style={{ transform: showKrajDropdown ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {showKrajDropdown && (
              <div style={{
                position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 50,
                background: "rgba(10,30,10,0.98)",
                border: "1px solid rgba(134,239,172,0.25)", borderRadius: "10px",
                maxHeight: "220px", overflowY: "auto",
              }}>
                <button
                  onClick={() => handleKrajChange("")}
                  style={{
                    width: "100%", textAlign: "left", padding: "10px 14px",
                    background: !kraj ? "rgba(134,239,172,0.12)" : "none",
                    border: "none", borderBottom: "1px solid rgba(255,255,255,0.07)",
                    color: !kraj ? "#86efac" : "rgba(255,255,255,0.75)", fontSize: "0.85rem",
                    cursor: "pointer", fontWeight: !kraj ? 700 : 400,
                  }}
                >
                  {"V\u0161echny kraje"}
                </button>
                {krajeList.map(k => (
                  <button
                    key={k}
                    onClick={() => handleKrajChange(k)}
                    style={{
                      width: "100%", textAlign: "left", padding: "10px 14px",
                      background: kraj === k ? "rgba(134,239,172,0.12)" : "none",
                      border: "none", borderBottom: "1px solid rgba(255,255,255,0.07)",
                      color: kraj === k ? "#86efac" : "rgba(255,255,255,0.75)", fontSize: "0.85rem",
                      cursor: "pointer", fontWeight: kraj === k ? 700 : 400,
                    }}
                  >
                    {k}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid */}
        <div
          ref={listRef}
          onClick={() => showKrajDropdown && setShowKrajDropdown(false)}
          style={{ flex: 1, overflowY: "auto", padding: "4px 16px 24px" }}
        >
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", color: "rgba(255,255,255,0.45)", padding: "60px 0", fontSize: "0.9rem" }}>
              {"Nic nenalezeno"}
            </div>
          ) : (
            <>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}>
                {visible.map(r => {
                  const rid = String(r.id);
                  const done = isCompleted("rozhledna", rid);
                  const regionTag = r.kraj.filter(k => krajeList.includes(k))[0];
                  const isDefunct = !!DEFUNCT_TOWERS[r.slug];
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelected(r)}
                      style={{
                        position: "relative",
                        borderRadius: "12px",
                        overflow: "hidden",
                        cursor: "pointer",
                        border: done ? "2px solid rgba(74,222,128,0.5)" : "1px solid rgba(255,255,255,0.12)",
                        background: "#050e05",
                        transition: "border-color 0.15s",
                        aspectRatio: "2/3",
                      }}
                    >
                      {/* Full-height photo with contain so whole tower is visible */}
                      {r.photo ? (
                        <img
                          src={r.photo}
                          alt={r.name}
                          loading="lazy"
                          style={{
                            position: "absolute", inset: 0,
                            width: "100%", height: "85%",
                            objectFit: "contain",
                            objectPosition: "center top",
                          }}
                        />
                      ) : (
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "85%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Eye size={26} color="rgba(134,239,172,0.2)" />
                        </div>
                      )}

                      {/* Bottom gradient into text area */}
                      <div style={{ position: "absolute", bottom: "15%", left: 0, right: 0, height: "40%", background: "linear-gradient(to bottom, transparent, #050e05)", pointerEvents: "none" }} />

                      {/* Defunct badge */}
                      {isDefunct && (
                        <div style={{
                          position: "absolute", top: "6px", left: "6px",
                          background: "rgba(251,191,36,0.9)", borderRadius: "6px",
                          padding: "2px 6px", fontSize: "0.6rem", fontWeight: 800, color: "#1a0f00",
                          letterSpacing: "0.03em",
                        }}>
                          {"ZAN\u00cdKL\u00c1"}
                        </div>
                      )}

                      {/* Check button */}
                      {isSignedIn && (
                        <button
                          onClick={e => { e.stopPropagation(); toggle("rozhledna", rid, r.name); }}
                          style={{
                            position: "absolute", top: "6px", right: "6px",
                            width: "26px", height: "26px", borderRadius: "50%",
                            background: done ? "rgba(74,222,128,0.88)" : "rgba(0,0,0,0.6)",
                            border: done ? "none" : "1.5px solid rgba(255,255,255,0.4)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          {done ? <CheckCircle2 size={13} color="#052805" /> : <Circle size={13} color="rgba(255,255,255,0.85)" />}
                        </button>
                      )}

                      {/* Name + region — bottom strip */}
                      <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        height: "15%", padding: "0 7px 6px",
                        display: "flex", flexDirection: "column", justifyContent: "flex-end",
                        background: "#050e05",
                      }}>
                        <div style={{
                          color: "white", fontWeight: 800, fontSize: "0.73rem",
                          lineHeight: 1.25, marginBottom: "1px",
                          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                        }}>
                          {r.name}
                        </div>
                        {regionTag && (
                          <span style={{ color: "#86efac", fontSize: "0.61rem", fontWeight: 600, opacity: 0.85 }}>
                            {regionTag.replace(" kraj", "")}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {page < totalPages && (
                <button
                  onClick={() => setPage(p => p + 1)}
                  style={{
                    width: "100%", marginTop: "12px", padding: "12px",
                    background: "rgba(134,239,172,0.1)", border: "1px solid rgba(134,239,172,0.3)",
                    borderRadius: "10px", color: "#86efac", fontSize: "0.85rem",
                    fontWeight: 700, cursor: "pointer", letterSpacing: "0.05em",
                  }}
                >
                  {`Zobrazit dal\u0161\u00ed (${filtered.length - page * PAGE_SIZE} zb\u00fdv\u00e1)`}
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <DetailModal
          r={selected}
          onClose={() => setSelected(null)}
          isCompleted={isCompleted}
          toggle={toggle}
          isSignedIn={isSignedIn}
        />
      )}
    </div>
  );
}
