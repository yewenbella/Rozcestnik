import React, { useState, useMemo, useRef } from "react";
import { useLocation } from "wouter";
import { Search, X, ExternalLink, ChevronDown, CheckCircle2, Circle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { hrady, krajeList } from "@/data/hrady";
import { useDenik } from "@/hooks/useDenik";

const PAGE_SIZE = 30;

type TypeFilter = "vse" | "hrad" | "zamek";

export default function HradyPage() {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const [kraj, setKraj] = useState("");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("vse");
  const [page, setPage] = useState(1);
  const [showKrajDropdown, setShowKrajDropdown] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const { isCompleted, toggle, isSignedIn } = useDenik();

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return hrady.filter(h => {
      const matchName = !q || h.name.toLowerCase().includes(q);
      const matchKraj = !kraj || h.kraj === kraj;
      const matchType = typeFilter === "vse" || h.type === typeFilter;
      return matchName && matchKraj && matchType;
    });
  }, [query, kraj, typeFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice(0, page * PAGE_SIZE);

  function handleQueryChange(v: string) { setQuery(v); setPage(1); }
  function handleKrajChange(v: string) { setKraj(v); setPage(1); setShowKrajDropdown(false); }
  function handleTypeChange(t: TypeFilter) { setTypeFilter(t); setPage(1); }

  const hradyCount = useMemo(() => hrady.filter(h => h.type === "hrad").length, []);
  const zamkyCount = useMemo(() => hrady.filter(h => h.type === "zamek").length, []);

  return (
    <div style={{
      minHeight: "100vh", width: "100%", maxWidth: "480px", margin: "0 auto",
      position: "relative", display: "flex", flexDirection: "column", overflow: "hidden",
    }}>
      <img src={heroBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,18,5,0.85) 100%)" }} />

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
            <span style={{ fontSize: "1.1rem" }}>{"🏰"}</span>
            <span style={{ color: "white", fontWeight: 900, fontSize: "1.05rem", letterSpacing: "0.04em" }}>{"HRADY & Z\u00c1MKY"}</span>
            <span style={{
              background: "rgba(251,191,36,0.2)", border: "1px solid rgba(251,191,36,0.4)",
              borderRadius: "20px", padding: "1px 8px", color: "#fbbf24",
              fontSize: "0.72rem", fontWeight: 700,
            }}>{filtered.length}</span>
          </div>
        </div>

        {/* Type Filter Pills */}
        <div style={{ padding: "12px 16px 0", display: "flex", gap: "6px" }}>
          {(["vse", "hrad", "zamek"] as TypeFilter[]).map(t => {
            const label = t === "vse"
              ? `V\u0161e (${hrady.length})`
              : t === "hrad"
                ? `Hrady (${hradyCount})`
                : `Z\u00e1mky (${zamkyCount})`;
            const active = typeFilter === t;
            return (
              <button
                key={t}
                onClick={() => handleTypeChange(t)}
                style={{
                  padding: "6px 12px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 700,
                  cursor: "pointer", border: "1px solid",
                  background: active ? "rgba(251,191,36,0.18)" : "rgba(255,255,255,0.07)",
                  borderColor: active ? "rgba(251,191,36,0.6)" : "rgba(255,255,255,0.15)",
                  color: active ? "#fbbf24" : "rgba(255,255,255,0.6)",
                  transition: "all 0.15s",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Search + Kraj Filter */}
        <div style={{ padding: "10px 16px 8px", display: "flex", flexDirection: "column", gap: "8px" }}>
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
              <ChevronDown
                size={14}
                color={kraj ? "#fbbf24" : "rgba(255,255,255,0.5)"}
                style={{ transform: showKrajDropdown ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
              />
            </button>

            {showKrajDropdown && (
              <div style={{
                position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 50,
                background: "rgba(10,18,5,0.98)",
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
        </div>

        {/* List */}
        <div
          ref={listRef}
          onClick={() => showKrajDropdown && setShowKrajDropdown(false)}
          style={{ flex: 1, overflowY: "auto", padding: "0 16px 24px" }}
        >
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", color: "rgba(255,255,255,0.45)", padding: "60px 0", fontSize: "0.9rem" }}>
              {"Nic nenalezeno"}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {visible.map(h => {
                const hid = String(h.id);
                const done = isCompleted("hrad", hid);
                const isHradType = h.type === "hrad";
                const typeColor = isHradType ? "#f97316" : "#fbbf24";
                const typeBg = isHradType ? "rgba(249,115,22,0.15)" : "rgba(251,191,36,0.15)";
                const typeBorder = isHradType ? "rgba(249,115,22,0.35)" : "rgba(251,191,36,0.35)";
                return (
                  <div
                    key={h.id}
                    style={{
                      display: "flex", alignItems: "center",
                      background: done ? "rgba(251,191,36,0.07)" : "rgba(255,255,255,0.10)",
                      border: done ? "1px solid rgba(251,191,36,0.35)" : "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "10px", padding: "11px 14px",
                      transition: "background 0.15s", gap: "10px",
                    }}
                  >
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1, minWidth: 0, textDecoration: "none" }}
                    >
                      <div style={{
                        color: "white", fontWeight: 700, fontSize: "0.9rem",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}>
                        {h.name}
                      </div>
                      <div style={{ marginTop: "4px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                        <span style={{
                          background: typeBg, border: `1px solid ${typeBorder}`,
                          borderRadius: "6px", padding: "1px 6px",
                          color: typeColor, fontSize: "0.67rem", fontWeight: 700, textTransform: "uppercase",
                        }}>
                          {h.type === "hrad" ? "hrad" : h.type === "zamek" ? "z\u00e1mek" : "tvrz"}
                        </span>
                        {h.kraj && (
                          <span style={{
                            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "6px", padding: "1px 6px",
                            color: "rgba(255,255,255,0.55)", fontSize: "0.67rem",
                          }}>
                            {h.kraj.replace(" kraj", "")}
                          </span>
                        )}
                      </div>
                    </a>
                    <ExternalLink size={13} color="rgba(255,255,255,0.25)" style={{ flexShrink: 0 }} />
                    {isSignedIn ? (
                      <button
                        onClick={() => toggle("hrad", hid, h.name)}
                        title={done ? "Odebrat z den\u00edku" : "Ozna\u010dit jako nav\u0161t\u00edveno"}
                        style={{
                          flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
                          border: done ? "1.5px solid rgba(251,191,36,0.7)" : "1.5px solid rgba(255,255,255,0.22)",
                          background: done ? "rgba(251,191,36,0.18)" : "rgba(255,255,255,0.06)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          cursor: "pointer", transition: "all 0.18s",
                        }}
                      >
                        {done
                          ? <CheckCircle2 size={16} color="#fbbf24" />
                          : <Circle size={16} color="rgba(255,255,255,0.35)" />
                        }
                      </button>
                    ) : (
                      <div style={{
                        flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
                        border: "1.5px solid rgba(255,255,255,0.10)",
                        background: "rgba(255,255,255,0.03)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        opacity: 0.4,
                      }}>
                        <Circle size={16} color="rgba(255,255,255,0.3)" />
                      </div>
                    )}
                  </div>
                );
              })}

              {page < totalPages && (
                <button
                  onClick={() => setPage(p => p + 1)}
                  style={{
                    marginTop: "4px", padding: "12px",
                    background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)",
                    borderRadius: "10px", color: "#fbbf24", fontSize: "0.85rem",
                    fontWeight: 700, cursor: "pointer", letterSpacing: "0.05em",
                  }}
                >
                  {`Zobrazit dal\u0161\u00ed (${filtered.length - page * PAGE_SIZE} zb\u00fdv\u00e1)`}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
