import React, { useState, useMemo, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import { Search, X, ExternalLink, ChevronDown, CheckCircle2, Circle, MapPin, Navigation, Bookmark, BookmarkCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { hrady, krajeList, type Hrad } from "@/data/hrady";
import { useDenik } from "@/hooks/useDenik";
import { useWishlist } from "@/hooks/useWishlist";

const PAGE_SIZE = 24;

function DetailModal({ h, onClose, isCompleted, toggle, isSignedIn, isWishlisted, toggleWishlist }: {
  h: Hrad;
  onClose: () => void;
  isCompleted: (type: string, id: string) => boolean;
  toggle: (type: string, id: string, name: string) => void;
  isSignedIn: boolean;
  isWishlisted: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
}) {
  const wid = "h" + String(h.id);
  const hid = String(h.id);
  const done = isCompleted("hrad", hid);
  const wished = isWishlisted(wid);
  const mapsUrl = `https://maps.google.com/maps/search/${encodeURIComponent(h.name + " " + h.kraj)}`;
  const typeLabel = h.type === "hrad" ? "hrad" : "z\u00e1mek";

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
          background: "rgba(15,10,3,0.97)",
          border: "1px solid rgba(251,191,36,0.2)",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Photo area */}
        <div style={{
          position: "relative", width: "100%", height: "220px", flexShrink: 0,
          background: "#0f0a03", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {h.photo ? (
            <img
              src={h.photo}
              alt={h.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          ) : (
            <span style={{ fontSize: "3rem", opacity: 0.3 }}>{"🏰"}</span>
          )}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "65%",
            background: "linear-gradient(to bottom, transparent, rgba(15,10,3,0.98))",
            pointerEvents: "none",
          }} />
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
            {h.name}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "12px 16px 24px", overflowY: "auto", flex: 1 }}>

          {/* Tags row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px", alignItems: "center" }}>
            <span style={{
              background: h.type === "hrad" ? "rgba(249,115,22,0.15)" : "rgba(251,191,36,0.13)",
              border: h.type === "hrad" ? "1px solid rgba(249,115,22,0.4)" : "1px solid rgba(251,191,36,0.35)",
              borderRadius: "6px", padding: "2px 8px",
              color: h.type === "hrad" ? "#f97316" : "#fbbf24",
              fontSize: "0.74rem", fontWeight: 700, textTransform: "uppercase",
            }}>
              {typeLabel}
            </span>
            {h.kraj && (
              <>
                <MapPin size={11} color="#fbbf24" style={{ flexShrink: 0 }} />
                <span style={{
                  background: "rgba(251,191,36,0.10)", border: "1px solid rgba(251,191,36,0.25)",
                  borderRadius: "6px", padding: "2px 8px",
                  color: "#fbbf24", fontSize: "0.74rem", fontWeight: 600,
                }}>
                  {h.kraj.replace(" kraj", "")}
                </span>
              </>
            )}
          </div>

          {/* Buttons row: Maps + info */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                padding: "10px 6px", borderRadius: "10px",
                background: "rgba(66,133,244,0.12)", border: "1px solid rgba(66,133,244,0.35)",
                color: "#93c5fd", fontWeight: 700, fontSize: "0.78rem",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: "0.85rem" }}>{"📍"}</span>
              {"Google Maps"}
            </a>
            <a
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                padding: "10px 6px", borderRadius: "10px",
                background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.25)",
                color: "#fbbf24", fontWeight: 700, fontSize: "0.78rem",
                textDecoration: "none",
              }}
            >
              <ExternalLink size={12} />
              {"Popis " + typeLabel + "u"}
            </a>
          </div>

          {/* Mark visited button */}
          {isSignedIn ? (
            <button
              onClick={() => toggle("hrad", hid, h.name)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "12px", borderRadius: "10px", marginBottom: "8px",
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
              padding: "11px", borderRadius: "10px", marginBottom: "8px",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.3)", fontSize: "0.82rem",
            }}>
              {"P\u0159ihlas se pro ozna\u010dov\u00e1n\u00ed nav\u0161t\u00edven\u00fdch"}
            </div>
          )}

          {/* Wishlist button */}
          <button
            onClick={() => toggleWishlist(wid)}
            style={{
              width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              padding: "12px", borderRadius: "10px",
              background: wished ? "rgba(251,191,36,0.13)" : "rgba(255,255,255,0.06)",
              border: wished ? "1px solid rgba(251,191,36,0.5)" : "1px solid rgba(255,255,255,0.12)",
              color: wished ? "#fbbf24" : "rgba(255,255,255,0.6)",
              fontWeight: 700, fontSize: "0.88rem", cursor: "pointer",
            }}
          >
            {wished ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
            {wished ? "Chci nav\u0161t\u00edvit \u2013 odebrat" : "Chci nav\u0161t\u00edvit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HradyPage() {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const [kraj, setKraj] = useState("");
  const [typeFilter, setTypeFilter] = useState<"" | "hrad" | "zamek">("");
  const [page, setPage] = useState(1);
  const [showKrajDropdown, setShowKrajDropdown] = useState(false);
  const [selected, setSelected] = useState<Hrad | null>(null);
  const [showVisited, setShowVisited] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const { isCompleted, toggle, isSignedIn } = useDenik();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return hrady.filter(h => {
      const matchName = !q || h.name.toLowerCase().includes(q);
      const matchKraj = !kraj || h.kraj === kraj;
      const matchType = !typeFilter || h.type === typeFilter;
      const matchVisited = !showVisited || isCompleted("hrad", String(h.id));
      const matchWishlist = !showWishlist || isWishlisted("h" + String(h.id));
      return matchName && matchKraj && matchType && matchVisited && matchWishlist;
    });
  }, [query, kraj, typeFilter, showVisited, showWishlist, isCompleted, isWishlisted]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice(0, page * PAGE_SIZE);

  function handleQueryChange(v: string) { setQuery(v); setPage(1); }
  function handleKrajChange(v: string) { setKraj(v); setPage(1); setShowKrajDropdown(false); }

  return (
    <div style={{
      height: "100dvh", width: "100%", maxWidth: "480px", margin: "0 auto",
      position: "relative", display: "flex", flexDirection: "column", overflow: "hidden",
    }}>
      {/* Background */}
      <img src={heroBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(18,10,2,0.85) 100%)" }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>

        {/* Header */}
        <div style={{ padding: "16px 16px 0", display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => navigate("/tipy-na-vylet")}
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
            <span style={{ fontSize: "1.15rem", lineHeight: 1 }}>{"🏰"}</span>
            <span style={{ color: "white", fontWeight: 900, fontSize: "1.05rem", letterSpacing: "0.04em" }}>{"HRADY A Z\u00c1MKY"}</span>
            <span style={{
              background: "rgba(251,191,36,0.2)", border: "1px solid rgba(251,191,36,0.4)",
              borderRadius: "20px", padding: "1px 8px", color: "#fbbf24",
              fontSize: "0.72rem", fontWeight: 700,
            }}>{filtered.length}</span>
          </div>
        </div>

        {/* Search + Filter */}
        <div style={{ padding: "12px 16px 8px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Search bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px",
            padding: "9px 12px",
          }}>
            <Search size={15} color="rgba(255,255,255,0.55)" />
            <input
              type="text"
              placeholder={"Hledat hrad nebo z\u00e1mek\u2026"}
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

          {/* Kraj filter */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowKrajDropdown(p => !p)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "rgba(255,255,255,0.10)",
                border: kraj ? "1px solid rgba(251,191,36,0.5)" : "1px solid rgba(255,255,255,0.15)",
                borderRadius: "10px", padding: "9px 12px", cursor: "pointer",
                color: kraj ? "#fbbf24" : "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontWeight: kraj ? 700 : 400,
              }}
            >
              <span>{kraj || "V\u0161echny kraje"}</span>
              <ChevronDown size={14} color={kraj ? "#fbbf24" : "rgba(255,255,255,0.5)"} style={{ transform: showKrajDropdown ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {showKrajDropdown && (
              <div style={{
                position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 50,
                background: "rgba(18,10,2,0.98)",
                border: "1px solid rgba(251,191,36,0.25)", borderRadius: "10px",
                maxHeight: "220px", overflowY: "auto",
              }}>
                <button
                  onClick={() => handleKrajChange("")}
                  style={{
                    width: "100%", textAlign: "left", padding: "10px 14px",
                    background: !kraj ? "rgba(251,191,36,0.12)" : "none",
                    border: "none", borderBottom: "1px solid rgba(255,255,255,0.07)",
                    color: !kraj ? "#fbbf24" : "rgba(255,255,255,0.75)", fontSize: "0.85rem",
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
                      background: kraj === k ? "rgba(251,191,36,0.12)" : "none",
                      border: "none", borderBottom: "1px solid rgba(255,255,255,0.07)",
                      color: kraj === k ? "#fbbf24" : "rgba(255,255,255,0.75)", fontSize: "0.85rem",
                      cursor: "pointer", fontWeight: kraj === k ? 700 : 400,
                    }}
                  >
                    {k}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "2px" }}>
            {/* Hrad */}
            <button
              onClick={() => { setTypeFilter(p => p === "hrad" ? "" : "hrad"); setPage(1); }}
              style={{
                display: "flex", alignItems: "center", gap: "5px", flexShrink: 0,
                padding: "6px 10px", borderRadius: "20px", fontSize: "0.76rem", fontWeight: 700, cursor: "pointer",
                background: typeFilter === "hrad" ? "rgba(249,115,22,0.18)" : "rgba(255,255,255,0.08)",
                border: typeFilter === "hrad" ? "1px solid rgba(249,115,22,0.6)" : "1px solid rgba(255,255,255,0.15)",
                color: typeFilter === "hrad" ? "#f97316" : "rgba(255,255,255,0.65)",
                transition: "all 0.18s",
              }}
            >
              {"Hrady"}
            </button>

            {/* Zamek */}
            <button
              onClick={() => { setTypeFilter(p => p === "zamek" ? "" : "zamek"); setPage(1); }}
              style={{
                display: "flex", alignItems: "center", gap: "5px", flexShrink: 0,
                padding: "6px 10px", borderRadius: "20px", fontSize: "0.76rem", fontWeight: 700, cursor: "pointer",
                background: typeFilter === "zamek" ? "rgba(251,191,36,0.18)" : "rgba(255,255,255,0.08)",
                border: typeFilter === "zamek" ? "1px solid rgba(251,191,36,0.6)" : "1px solid rgba(255,255,255,0.15)",
                color: typeFilter === "zamek" ? "#fbbf24" : "rgba(255,255,255,0.65)",
                transition: "all 0.18s",
              }}
            >
              {"Z\u00e1mky"}
            </button>

            {/* Navštívené */}
            <button
              onClick={() => { setShowVisited(p => !p); setPage(1); }}
              style={{
                display: "flex", alignItems: "center", gap: "5px", flexShrink: 0,
                padding: "6px 10px", borderRadius: "20px", fontSize: "0.76rem", fontWeight: 700, cursor: "pointer",
                background: showVisited ? "rgba(74,222,128,0.18)" : "rgba(255,255,255,0.08)",
                border: showVisited ? "1px solid rgba(74,222,128,0.6)" : "1px solid rgba(255,255,255,0.15)",
                color: showVisited ? "#4ade80" : "rgba(255,255,255,0.65)",
                transition: "all 0.18s",
              }}
            >
              <CheckCircle2 size={14} />
              {"Nav\u0161t\u00edven\u00e9"}
            </button>

            {/* Chci navštívit */}
            <button
              onClick={() => { setShowWishlist(p => !p); setPage(1); }}
              style={{
                display: "flex", alignItems: "center", gap: "5px", flexShrink: 0,
                padding: "6px 10px", borderRadius: "20px", fontSize: "0.76rem", fontWeight: 700, cursor: "pointer",
                background: showWishlist ? "rgba(251,191,36,0.18)" : "rgba(255,255,255,0.08)",
                border: showWishlist ? "1px solid rgba(251,191,36,0.6)" : "1px solid rgba(255,255,255,0.15)",
                color: showWishlist ? "#fbbf24" : "rgba(255,255,255,0.65)",
                transition: "all 0.18s",
              }}
            >
              <Bookmark size={14} />
              {"Chci nav\u0161t\u00edvit"}
            </button>

            {/* V okolí */}
            <a
              href="https://maps.google.com/maps/search/hrady+a+z%C3%A1mky"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "5px", flexShrink: 0,
                padding: "6px 10px", borderRadius: "20px", fontSize: "0.76rem", fontWeight: 700,
                background: "rgba(96,165,250,0.08)",
                border: "1px solid rgba(96,165,250,0.25)",
                color: "#60a5fa",
                textDecoration: "none",
                transition: "all 0.18s",
              }}
            >
              <Navigation size={14} />
              {"V\u00a0okol\u00ed"}
            </a>
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
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {visible.map(h => {
                  const hid = String(h.id);
                  const wid = "h" + hid;
                  const done = isCompleted("hrad", hid);
                  const wished = isWishlisted(wid);
                  return (
                    <div
                      key={h.id}
                      onClick={() => setSelected(h)}
                      style={{
                        borderRadius: "12px", overflow: "hidden", cursor: "pointer",
                        background: done ? "rgba(74,222,128,0.07)" : "rgba(255,255,255,0.08)",
                        border: done
                          ? "1.5px solid rgba(74,222,128,0.35)"
                          : wished
                            ? "1.5px solid rgba(251,191,36,0.35)"
                            : "1.5px solid rgba(255,255,255,0.10)",
                        transition: "all 0.15s",
                        position: "relative",
                      }}
                    >
                      {/* Photo */}
                      <div style={{
                        width: "100%", height: "110px",
                        background: "#0f0a03",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        overflow: "hidden", position: "relative",
                      }}>
                        {h.photo ? (
                          <img
                            src={h.photo}
                            alt={h.name}
                            loading="lazy"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        ) : (
                          <span style={{ fontSize: "2rem", opacity: 0.25 }}>{"🏰"}</span>
                        )}
                        {/* Done overlay */}
                        {done && (
                          <div style={{
                            position: "absolute", top: "6px", right: "6px",
                            background: "rgba(0,0,0,0.6)", borderRadius: "50%",
                            width: "22px", height: "22px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <CheckCircle2 size={14} color="#4ade80" />
                          </div>
                        )}
                        {/* Wished overlay */}
                        {!done && wished && (
                          <div style={{
                            position: "absolute", top: "6px", right: "6px",
                            background: "rgba(0,0,0,0.6)", borderRadius: "50%",
                            width: "22px", height: "22px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <Bookmark size={12} color="#fbbf24" fill="#fbbf24" />
                          </div>
                        )}
                        {/* Type badge */}
                        <div style={{
                          position: "absolute", bottom: "5px", left: "6px",
                          background: h.type === "hrad" ? "rgba(249,115,22,0.85)" : "rgba(180,130,20,0.85)",
                          borderRadius: "4px", padding: "1px 5px",
                          color: "white", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.05em",
                        }}>
                          {h.type === "hrad" ? "HRAD" : "Z\u00c1MEK"}
                        </div>
                      </div>

                      {/* Name */}
                      <div style={{ padding: "7px 9px 8px" }}>
                        <div style={{
                          color: "white", fontWeight: 700, fontSize: "0.82rem",
                          lineHeight: 1.25, display: "-webkit-box",
                          WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                        }}>
                          {h.name}
                        </div>
                        <div style={{
                          marginTop: "3px", color: "rgba(255,255,255,0.45)",
                          fontSize: "0.68rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                        }}>
                          {h.kraj.replace(" kraj", "")}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {page < totalPages && (
                <button
                  onClick={() => setPage(p => p + 1)}
                  style={{
                    marginTop: "12px", padding: "12px", width: "100%",
                    background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)",
                    borderRadius: "10px", color: "#fbbf24", fontSize: "0.85rem",
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

      {/* Detail modal */}
      {selected && (
        <DetailModal
          h={selected}
          onClose={() => setSelected(null)}
          isCompleted={isCompleted}
          toggle={toggle}
          isSignedIn={isSignedIn}
          isWishlisted={isWishlisted}
          toggleWishlist={toggleWishlist}
        />
      )}
    </div>
  );
}
