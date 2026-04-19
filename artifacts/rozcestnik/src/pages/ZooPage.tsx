import React, { useState, useMemo, useRef } from "react";
import { useLocation } from "wouter";
import { Search, X, ExternalLink, ChevronDown, CheckCircle2, Circle, MapPin, Navigation, Bookmark, BookmarkCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { zoos, zooKrajeList, type Zoo } from "@/data/zoo";
import { useDenik } from "@/hooks/useDenik";
import { useWishlist } from "@/hooks/useWishlist";

const PAGE_SIZE = 24;

function DetailModal({ z, onClose, isCompleted, toggle, isSignedIn, isWishlisted, toggleWishlist }: {
  z: Zoo;
  onClose: () => void;
  isCompleted: (type: string, id: string) => boolean;
  toggle: (type: string, id: string, name: string) => void;
  isSignedIn: boolean;
  isWishlisted: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
}) {
  const wid = "z" + String(z.id);
  const zid = String(z.id);
  const done = isCompleted("zoo", zid);
  const wished = isWishlisted(wid);
  const mapsUrl = (z.lat && z.lng)
    ? `https://maps.google.com/maps?q=${z.lat},${z.lng}`
    : `https://maps.google.com/maps/search/${encodeURIComponent(z.name + " " + z.kraj)}`;

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
          background: "rgba(2,18,15,0.97)",
          border: "1px solid rgba(20,184,166,0.25)",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Photo */}
        <div style={{
          position: "relative", width: "100%", height: "220px", flexShrink: 0,
          background: "#02120f", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {z.photo ? (
            <img
              src={z.photo}
              alt={z.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          ) : (
            <span style={{ fontSize: "3rem", opacity: 0.3 }}>{"🐘"}</span>
          )}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "65%",
            background: "linear-gradient(to bottom, transparent, rgba(2,18,15,0.98))",
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
            {z.name}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "12px 16px 24px", overflowY: "auto", flex: 1 }}>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px", alignItems: "center" }}>
            <span style={{
              background: "rgba(20,184,166,0.15)", border: "1px solid rgba(20,184,166,0.4)",
              borderRadius: "6px", padding: "2px 8px",
              color: "#5eead4", fontSize: "0.74rem", fontWeight: 700, textTransform: "uppercase",
            }}>
              {"ZOO"}
            </span>
            {z.kraj && (
              <>
                <MapPin size={11} color="#5eead4" style={{ flexShrink: 0 }} />
                <span style={{
                  background: "rgba(20,184,166,0.10)", border: "1px solid rgba(20,184,166,0.25)",
                  borderRadius: "6px", padding: "2px 8px",
                  color: "#5eead4", fontSize: "0.74rem", fontWeight: 600,
                }}>
                  {z.kraj.replace(" kraj", "")}
                </span>
              </>
            )}
          </div>

          {/* Buttons row */}
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
              href={z.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                padding: "10px 6px", borderRadius: "10px",
                background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.25)",
                color: "#5eead4", fontWeight: 700, fontSize: "0.78rem",
                textDecoration: "none",
              }}
            >
              <ExternalLink size={12} />
              {"O zahrad\u011b"}
            </a>
          </div>

          {/* Description */}
          {z.desc ? (
            <div style={{
              marginBottom: "10px", padding: "10px 12px",
              background: "rgba(255,255,255,0.04)", borderRadius: "10px",
              color: "rgba(255,255,255,0.72)", fontSize: "0.82rem", lineHeight: 1.6,
            }}>
              {z.desc}
            </div>
          ) : null}

          {/* Mark visited */}
          {isSignedIn ? (
            <button
              onClick={() => toggle("zoo", zid, z.name)}
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

          {/* Wishlist */}
          <button
            onClick={() => toggleWishlist(wid)}
            style={{
              width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              padding: "12px", borderRadius: "10px",
              background: wished ? "rgba(20,184,166,0.13)" : "rgba(255,255,255,0.06)",
              border: wished ? "1px solid rgba(20,184,166,0.5)" : "1px solid rgba(255,255,255,0.12)",
              color: wished ? "#5eead4" : "rgba(255,255,255,0.6)",
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

export default function ZooPage() {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const [kraj, setKraj] = useState("");
  const [page, setPage] = useState(1);
  const [showKrajDropdown, setShowKrajDropdown] = useState(false);
  const [selected, setSelected] = useState<Zoo | null>(null);
  const [showVisited, setShowVisited] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const { isCompleted, toggle, isSignedIn } = useDenik();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return zoos.filter(z => {
      const matchName = !q || z.name.toLowerCase().includes(q);
      const matchKraj = !kraj || z.kraj === kraj;
      const matchVisited = !showVisited || isCompleted("zoo", String(z.id));
      const matchWishlist = !showWishlist || isWishlisted("z" + String(z.id));
      return matchName && matchKraj && matchVisited && matchWishlist;
    });
  }, [query, kraj, showVisited, showWishlist, isCompleted, isWishlisted]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice(0, page * PAGE_SIZE);

  function handleQueryChange(v: string) { setQuery(v); setPage(1); }
  function handleKrajChange(v: string) { setKraj(v); setPage(1); setShowKrajDropdown(false); }

  return (
    <div style={{
      height: "100dvh", width: "100%", maxWidth: "480px", margin: "0 auto",
      position: "relative", display: "flex", flexDirection: "column", overflow: "hidden",
    }}>
      <img src={heroBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(2,18,15,0.88) 100%)" }} />

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
            <span style={{ fontSize: "1.15rem", lineHeight: 1 }}>{"🐘"}</span>
            <span style={{ color: "white", fontWeight: 900, fontSize: "1.05rem", letterSpacing: "0.04em" }}>{"ZOOLOGICK\u00c9 ZAHRADY"}</span>
            <span style={{
              background: "rgba(20,184,166,0.2)", border: "1px solid rgba(20,184,166,0.4)",
              borderRadius: "20px", padding: "1px 8px", color: "#5eead4",
              fontSize: "0.72rem", fontWeight: 700,
            }}>{filtered.length}</span>
          </div>
        </div>

        {/* Search + Filters */}
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
              placeholder={"Hledat zoologickou zahradu\u2026"}
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

          {/* Kraj dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowKrajDropdown(p => !p)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "rgba(255,255,255,0.10)",
                border: kraj ? "1px solid rgba(20,184,166,0.5)" : "1px solid rgba(255,255,255,0.15)",
                borderRadius: "10px", padding: "9px 12px", cursor: "pointer",
                color: kraj ? "#5eead4" : "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontWeight: kraj ? 700 : 400,
              }}
            >
              <span>{kraj || "V\u0161echny kraje"}</span>
              <ChevronDown size={14} color={kraj ? "#5eead4" : "rgba(255,255,255,0.5)"} style={{ transform: showKrajDropdown ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {showKrajDropdown && (
              <div style={{
                position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 50,
                background: "rgba(2,18,15,0.98)",
                border: "1px solid rgba(20,184,166,0.25)", borderRadius: "10px",
                maxHeight: "220px", overflowY: "auto",
              }}>
                <button
                  onClick={() => handleKrajChange("")}
                  style={{
                    width: "100%", textAlign: "left", padding: "10px 14px",
                    background: !kraj ? "rgba(20,184,166,0.12)" : "none",
                    border: "none", borderBottom: "1px solid rgba(255,255,255,0.07)",
                    color: !kraj ? "#5eead4" : "rgba(255,255,255,0.75)", fontSize: "0.85rem",
                    cursor: "pointer", fontWeight: !kraj ? 700 : 400,
                  }}
                >
                  {"V\u0161echny kraje"}
                </button>
                {zooKrajeList.map(k => (
                  <button
                    key={k}
                    onClick={() => handleKrajChange(k)}
                    style={{
                      width: "100%", textAlign: "left", padding: "10px 14px",
                      background: kraj === k ? "rgba(20,184,166,0.12)" : "none",
                      border: "none", borderBottom: "1px solid rgba(255,255,255,0.07)",
                      color: kraj === k ? "#5eead4" : "rgba(255,255,255,0.75)", fontSize: "0.85rem",
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
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              onClick={() => { setShowVisited(p => !p); setPage(1); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", flex: 1,
                padding: "6px 4px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 700, cursor: "pointer",
                background: showVisited ? "rgba(74,222,128,0.18)" : "rgba(255,255,255,0.08)",
                border: showVisited ? "1px solid rgba(74,222,128,0.6)" : "1px solid rgba(255,255,255,0.15)",
                color: showVisited ? "#4ade80" : "rgba(255,255,255,0.65)",
                transition: "all 0.18s", whiteSpace: "nowrap",
              }}
            >
              <CheckCircle2 size={12} />
              {"Nav\u0161t\u00edven\u00e9"}
            </button>
            <button
              onClick={() => { setShowWishlist(p => !p); setPage(1); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", flex: 1,
                padding: "6px 4px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 700, cursor: "pointer",
                background: showWishlist ? "rgba(20,184,166,0.18)" : "rgba(255,255,255,0.08)",
                border: showWishlist ? "1px solid rgba(20,184,166,0.6)" : "1px solid rgba(255,255,255,0.15)",
                color: showWishlist ? "#5eead4" : "rgba(255,255,255,0.65)",
                transition: "all 0.18s", whiteSpace: "nowrap",
              }}
            >
              <Bookmark size={12} />
              {"Chci nav\u0161t\u00edvit"}
            </button>
            <a
              href="https://maps.google.com/maps/search/zoologick%C3%A1+zahrada"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", flex: 1,
                padding: "6px 4px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 700,
                background: "rgba(96,165,250,0.08)",
                border: "1px solid rgba(96,165,250,0.25)",
                color: "#60a5fa", textDecoration: "none",
                transition: "all 0.18s", whiteSpace: "nowrap",
              }}
            >
              <Navigation size={12} />
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
                {visible.map(z => {
                  const zid = String(z.id);
                  const wid = "z" + zid;
                  const done = isCompleted("zoo", zid);
                  const wished = isWishlisted(wid);
                  return (
                    <div
                      key={z.id}
                      onClick={() => setSelected(z)}
                      style={{
                        borderRadius: "12px", overflow: "hidden", cursor: "pointer",
                        background: done ? "rgba(74,222,128,0.07)" : "rgba(255,255,255,0.08)",
                        border: done
                          ? "1.5px solid rgba(74,222,128,0.35)"
                          : wished
                            ? "1.5px solid rgba(20,184,166,0.35)"
                            : "1.5px solid rgba(255,255,255,0.10)",
                        transition: "all 0.15s",
                        position: "relative",
                      }}
                    >
                      {/* Photo */}
                      <div style={{
                        width: "100%", height: "110px",
                        background: "#02120f",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        overflow: "hidden", position: "relative",
                      }}>
                        {z.photo ? (
                          <img
                            src={z.photo}
                            alt={z.name}
                            loading="lazy"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        ) : (
                          <span style={{ fontSize: "2rem", opacity: 0.25 }}>{"🐘"}</span>
                        )}
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
                        {!done && wished && (
                          <div style={{
                            position: "absolute", top: "6px", right: "6px",
                            background: "rgba(0,0,0,0.6)", borderRadius: "50%",
                            width: "22px", height: "22px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <Bookmark size={12} color="#5eead4" fill="#5eead4" />
                          </div>
                        )}
                        <div style={{
                          position: "absolute", bottom: "5px", left: "6px",
                          background: "rgba(20,184,166,0.85)",
                          borderRadius: "4px", padding: "1px 5px",
                          color: "white", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.05em",
                        }}>
                          {"ZOO"}
                        </div>
                      </div>

                      {/* Name */}
                      <div style={{ padding: "7px 9px 8px" }}>
                        <div style={{
                          color: "white", fontWeight: 700, fontSize: "0.82rem",
                          lineHeight: 1.25, display: "-webkit-box",
                          WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                        }}>
                          {z.name}
                        </div>
                        <div style={{
                          marginTop: "3px", color: "rgba(255,255,255,0.45)",
                          fontSize: "0.68rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                        }}>
                          {z.kraj.replace(" kraj", "")}
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
                    background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.3)",
                    borderRadius: "10px", color: "#5eead4", fontSize: "0.85rem",
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
          z={selected}
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
