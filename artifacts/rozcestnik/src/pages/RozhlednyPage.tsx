import React, { useState, useMemo, useRef } from "react";
import { useLocation } from "wouter";
import { Eye, Search, X, ExternalLink, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { rozhledny, krajeList } from "@/data/rozhledny";

const PAGE_SIZE = 30;

export default function RozhlednyPage() {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const [kraj, setKraj] = useState("");
  const [page, setPage] = useState(1);
  const [showKrajDropdown, setShowKrajDropdown] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

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
              placeholder={"Hledat rozhlednu\u2026"}
              value={query}
              onChange={e => handleQueryChange(e.target.value)}
              style={{
                flex: 1, background: "none", border: "none", outline: "none",
                color: "white", fontSize: "0.88rem",
              }}
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
              {visible.map(r => (
                <a
                  key={r.id}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px",
                    padding: "11px 14px", textDecoration: "none",
                    transition: "background 0.15s",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      color: "white", fontWeight: 700, fontSize: "0.9rem",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {r.name}
                    </div>
                    {r.kraj.filter(k => k.endsWith("kraj")).length > 0 && (
                      <div style={{ marginTop: "3px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                        {r.kraj.filter(k => k.endsWith("kraj")).map(k => (
                          <span key={k} style={{
                            background: "rgba(134,239,172,0.12)", border: "1px solid rgba(134,239,172,0.25)",
                            borderRadius: "6px", padding: "1px 6px",
                            color: "#86efac", fontSize: "0.68rem", fontWeight: 600,
                          }}>
                            {k.replace(" kraj", "")}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <ExternalLink size={14} color="rgba(255,255,255,0.35)" style={{ flexShrink: 0, marginLeft: "10px" }} />
                </a>
              ))}

              {page < totalPages && (
                <button
                  onClick={() => setPage(p => p + 1)}
                  style={{
                    marginTop: "4px", padding: "12px",
                    background: "rgba(134,239,172,0.1)", border: "1px solid rgba(134,239,172,0.3)",
                    borderRadius: "10px", color: "#86efac", fontSize: "0.85rem",
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
