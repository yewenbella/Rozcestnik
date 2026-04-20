import React, { useState, useMemo, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import { Eye, Search, X, ExternalLink, ChevronDown, CheckCircle2, Circle, MapPin, Navigation, Filter, Bookmark, BookmarkCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { rozhledny, krajeList, type Rozhledna } from "@/data/rozhledny";
import { rozhlednyCoords } from "@/data/rozhlednyCoords";
import { useDenik } from "@/hooks/useDenik";
import { useWishlist } from "@/hooks/useWishlist";

function distKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const PAGE_SIZE = 24;

const MAPS_OVERRIDES: Record<string, string> = {
  "dubecko": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Dubečko Mírová pod Kozákovem")}`,
  "frydlant": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Frýdlant")}`,
  "hamstejn": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Hamštejn Koberovy")}`,
  "hermanice": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Heřmanice Frýdlant v Čechách")}`,
  "hornik": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Horník Rokytnice nad Jizerou")}`,
  "hruba-skala": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Hrubá Skála")}`,
  "jablonne-v-podjestedi": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Jablonné v Podještědí")}`,
  "kopanina": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Kopanina Pulečný")}`,
  "kozakov": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Kozákov Chuchelna")}`,
  "kralovka": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Královka Janov nad Nisou")}`,
  "kumburk": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Kumburk Syřenov")}`,
  "lemberk": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Lemberk Jablonné v Podještědí")}`,
  "liberecka-vysina": `https://maps.google.com/maps/search/${encodeURIComponent("Liberecká výšina Liberec")}`,
  "lidove-sady": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Lidové sady Liberec")}`,
  "na-janecku": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Na Janečku Semily")}`,
  "na-krizku": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Na křížku Albrechtice v Jizerských horách")}`,
  "na-strazi": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Na stráži Sloup v Čechách")}`,
  "petrin-2": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Petřín Jablonec nad Nisou")}`,
  "prosecsky-hreben": `https://maps.google.com/maps/search/${encodeURIComponent("Rozhledna Prosečský hřeben Jablonec nad Nisou")}`,
};

interface TowerExtra {
  parkingUrl: string;
  parkingNote?: string;
  parkingPrice: string;
  routeFromParking: string;
  openingHours: string;
  entrance: string;
}

const TOWER_EXTRA: Record<string, TowerExtra> = {
  "allainova-vez": {
    parkingUrl: "https://maps.google.com/maps?q=50.5093036,15.3686631",
    parkingPrice: "Zdarma",
    routeFromParking: "Po modré necelé 2 km",
    openingHours: "24/7",
    entrance: "Zdarma",
  },
};

const DEFUNCT_TOWERS: Record<string, string> = {
  "cisarsky-kamen": "Zaniklá – nahrazena rozhlednou Císařský kámen II",
  "rozhledna-na-grosscedlobi": "Zaniklá rozhledna",
  "u-obrazku": "Zaniklá – nahrazena rozhlednou U Obrázku II",
};

function DetailModal({ r, onClose, isCompleted, toggle, isSignedIn, isWishlisted, toggleWishlist }: {
  r: Rozhledna;
  onClose: () => void;
  isCompleted: (type: string, id: string) => boolean;
  toggle: (type: string, id: string, name: string) => void;
  isSignedIn: boolean;
  isWishlisted: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
}) {
  const rid = String(r.id);
  const done = isCompleted("rozhledna", rid);
  const wished = isWishlisted(rid);
  const defunctNote = DEFUNCT_TOWERS[r.slug];
  const coords = rozhlednyCoords[r.slug];
  const mapsUrl = MAPS_OVERRIDES[r.slug] ?? `https://maps.google.com/maps/search/${encodeURIComponent(r.name)}`;
  const extra = TOWER_EXTRA[r.slug];

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

          {/* Practical info panel */}
          {extra && (
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(134,239,172,0.2)",
              borderRadius: "12px", padding: "12px 14px", marginBottom: "12px",
              display: "flex", flexDirection: "column", gap: "10px",
            }}>
              <a
                href={extra.parkingUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  textDecoration: "none",
                  background: "rgba(66,133,244,0.10)", border: "1px solid rgba(66,133,244,0.3)",
                  borderRadius: "9px", padding: "9px 12px",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>🅿️</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#93c5fd", fontWeight: 700, fontSize: "0.8rem" }}>Navigace na parkoviště</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem" }}>{extra.parkingPrice === "Zdarma" ? "Parkování zdarma" : `Parkování ${extra.parkingPrice}`}</div>
                </div>
                <span style={{ fontSize: "0.7rem", color: "#93c5fd" }}>↗</span>
              </a>

              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>🥾</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Z parkoviště na rozhlednu</div>
                    <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.82rem", marginTop: "2px" }}>{extra.routeFromParking}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>🕐</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Otevírací doba</div>
                    <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.82rem", marginTop: "2px" }}>{extra.openingHours}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>🎫</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Vstupné</div>
                    <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.82rem", marginTop: "2px" }}>{extra.entrance}</div>
                  </div>
                </div>
              </div>
            </div>
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
              <span style={{ fontSize: "0.9rem" }}>{"📍"}</span>
              {"Google Maps"}
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

          {/* Wishlist button — always available */}
          <button
            onClick={() => toggleWishlist(rid)}
            style={{
              marginTop: "8px",
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

export default function RozhlednyPage() {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const [kraj, setKraj] = useState("");
  const [page, setPage] = useState(1);
  const [showKrajDropdown, setShowKrajDropdown] = useState(false);
  const [selected, setSelected] = useState<Rozhledna | null>(null);
  const [showVisited, setShowVisited] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [nearbyActive, setNearbyActive] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { isCompleted, toggle, isSignedIn } = useDenik();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolokace nen\u00ed podporov\u00e1na");
      return;
    }
    setLocationLoading(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        setLocationLoading(false);
        setNearbyActive(true);
      },
      () => {
        setLocationError("P\u0159\u00edstup k poloze odm\u00edtnut");
        setLocationLoading(false);
        setNearbyActive(false);
      },
      { timeout: 8000 }
    );
  }, []);

  const distanceMap = useMemo(() => {
    if (!userLocation) return {} as Record<string, number>;
    const map: Record<string, number> = {};
    for (const r of rozhledny) {
      const c = rozhlednyCoords[r.slug];
      if (c) map[r.slug] = distKm(userLocation.lat, userLocation.lon, c[0], c[1]);
    }
    return map;
  }, [userLocation]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    let result = rozhledny.filter(r => {
      const matchName = !q || r.name.toLowerCase().includes(q);
      const matchKraj = !kraj || r.kraj.some(k => k === kraj);
      const matchVisited = !showVisited || isCompleted("rozhledna", String(r.id));
      const matchWishlist = !showWishlist || isWishlisted(String(r.id));
      return matchName && matchKraj && matchVisited && matchWishlist;
    });
    if (nearbyActive && userLocation) {
      result = result
        .filter(r => {
          const d = distanceMap[r.slug];
          return d !== undefined && d <= 100;
        })
        .sort((a, b) => (distanceMap[a.slug] ?? Infinity) - (distanceMap[b.slug] ?? Infinity));
    }
    return result;
  }, [query, kraj, showVisited, showWishlist, nearbyActive, userLocation, distanceMap, isCompleted, isWishlisted]);

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
      height: "100dvh", width: "100%", maxWidth: "480px", margin: "0 auto",
      position: "relative", display: "flex", flexDirection: "column", overflow: "hidden",
    }}>
      {/* Background */}
      <img src={heroBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,30,10,0.82) 100%)" }} />

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
                background: showWishlist ? "rgba(251,191,36,0.18)" : "rgba(255,255,255,0.08)",
                border: showWishlist ? "1px solid rgba(251,191,36,0.6)" : "1px solid rgba(255,255,255,0.15)",
                color: showWishlist ? "#fbbf24" : "rgba(255,255,255,0.65)",
                transition: "all 0.18s", whiteSpace: "nowrap",
              }}
            >
              <Bookmark size={12} />
              {"Chci nav\u0161t\u00edvit"}
            </button>
            <button
              onClick={() => {
                if (nearbyActive) { setNearbyActive(false); setPage(1); }
                else if (userLocation) { setNearbyActive(true); setPage(1); }
                else { requestLocation(); setPage(1); }
              }}
              disabled={locationLoading}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", flex: 1,
                padding: "6px 4px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 700,
                cursor: locationLoading ? "wait" : "pointer",
                background: nearbyActive ? "rgba(96,165,250,0.18)" : "rgba(255,255,255,0.08)",
                border: nearbyActive ? "1px solid rgba(96,165,250,0.6)" : "1px solid rgba(255,255,255,0.15)",
                color: nearbyActive ? "#60a5fa" : "rgba(255,255,255,0.65)",
                transition: "all 0.18s", whiteSpace: "nowrap", opacity: locationLoading ? 0.7 : 1,
              }}
            >
              <Navigation size={12} />
              {locationLoading ? "Hled\u00e1m\u2026" : nearbyActive ? "Do 100\u00a0km" : "V\u00a0okol\u00ed"}
            </button>
          </div>
          {locationError && (
            <div style={{ fontSize: "0.73rem", color: "#f87171", paddingLeft: "2px" }}>
              {locationError}
            </div>
          )}
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
                  const dist = nearbyActive ? distanceMap[r.slug] : undefined;
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
                      {r.photo ? (
                        <img
                          src={r.photo}
                          alt={r.name}
                          loading="lazy"
                          style={{
                            position: "absolute", inset: 0,
                            width: "100%", height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
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
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          {regionTag && (
                            <span style={{ color: "#86efac", fontSize: "0.61rem", fontWeight: 600, opacity: 0.85 }}>
                              {regionTag.replace(" kraj", "")}
                            </span>
                          )}
                          {dist !== undefined && (
                            <span style={{ color: "#60a5fa", fontSize: "0.61rem", fontWeight: 700, marginLeft: "auto" }}>
                              {dist < 1 ? "<1\u00a0km" : Math.round(dist) + "\u00a0km"}
                            </span>
                          )}
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
          isWishlisted={isWishlisted}
          toggleWishlist={toggleWishlist}
        />
      )}
    </div>
  );
}
