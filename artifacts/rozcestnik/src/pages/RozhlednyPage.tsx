import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { useAuth } from "@clerk/react";
import { useLocation } from "wouter";
import { Eye, Search, X, ExternalLink, ChevronDown, CheckCircle2, Circle, MapPin, Navigation, Filter, Bookmark, BookmarkCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { rozhledny, krajeList, type Rozhledna } from "@/data/rozhledny";
import { rozhlednyCoords } from "@/data/rozhlednyCoords";
import { useDenik } from "@/hooks/useDenik";
import { useWishlist } from "@/hooks/useWishlist";
import { useRatings } from "@/hooks/useRatings";

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
  parkingPrice: string;
  routeFromParking: string;
  openingHours: string;
  entrance: string;
  stairs?: number;
}

const TOWER_EXTRA: Record<string, TowerExtra> = {
  "allainova-vez": {
    parkingUrl: `https://maps.google.com/maps/search/${encodeURIComponent("Táborská Tichánkova rozhledna Lomnice nad Popelkou")}`,
    parkingPrice: "Parkování u Táborská/Tichánkova rozhledna - Zdarma",
    routeFromParking: "Po modré turistické stezce necelé 2km",
    stairs: 42,
    openingHours: "24/7",
    entrance: "Zdarma",
  },
  "tabor": {
    parkingUrl: `https://maps.google.com/maps/search/${encodeURIComponent("Táborská Tichánkova rozhledna Lomnice nad Popelkou")}`,
    parkingPrice: "Parkování u rozhledny Táborská/Tichánkova rozhledna · Zdarma",
    routeFromParking: "",
    openingHours: "",
    entrance: "",
  },
};

const DEFUNCT_TOWERS: Record<string, string> = {
  "cisarsky-kamen": "Zaniklá – nahrazena rozhlednou Císařský kámen II",
  "rozhledna-na-grosscedlobi": "Zaniklá rozhledna",
  "u-obrazku": "Zaniklá – nahrazena rozhlednou U Obrázku II",
};

function StarPicker({ value, hover, onHover, onLeave, onClick }: {
  value: number; hover: number;
  onHover: (n: number) => void; onLeave: () => void; onClick: (n: number) => void;
}) {
  const active = hover || value;
  return (
    <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          onMouseEnter={() => onHover(n)}
          onMouseLeave={onLeave}
          onClick={() => onClick(n)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: "2.2rem", lineHeight: 1, padding: "6px",
            filter: n <= active ? "none" : "grayscale(1) opacity(0.3)",
            transform: n <= active ? "scale(1.15)" : "scale(1)",
            transition: "transform 0.12s, filter 0.12s",
          }}
        >⭐</button>
      ))}
    </div>
  );
}

function RatingPopup({ name, currentRating, onRate, onSkip, onClose }: {
  name: string;
  currentRating: number;
  onRate: (stars: number) => void;
  onSkip: () => void;
  onClose: () => void;
}) {
  const [hover, setHover] = useState(0);
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 400,
        background: "rgba(0,0,0,0.65)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: "340px",
          background: "rgba(8,22,8,0.98)", border: "1px solid rgba(134,239,172,0.3)",
          borderRadius: "20px", padding: "24px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "8px" }}>⭐</div>
        <div style={{ color: "white", fontWeight: 900, fontSize: "1rem", marginBottom: "4px" }}>
          Jak hodnotíte rozhlednu?
        </div>
        <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", marginBottom: "18px" }}>
          {name}
        </div>
        <StarPicker
          value={currentRating}
          hover={hover}
          onHover={setHover}
          onLeave={() => setHover(0)}
          onClick={onRate}
        />
        <button
          onClick={onSkip}
          style={{
            background: "none", border: "none", color: "rgba(255,255,255,0.35)",
            fontSize: "0.75rem", cursor: "pointer", marginTop: "16px",
            textDecoration: "underline",
          }}
        >
          Přeskočit hodnocení
        </button>
      </div>
    </div>
  );
}

function DetailModal({ r, onClose, isCompleted, toggle, isSignedIn, isWishlisted, toggleWishlist, getRating, setRating, onRateRequest }: {
  r: Rozhledna;
  onClose: () => void;
  isCompleted: (type: string, id: string) => boolean;
  toggle: (type: string, id: string, name: string) => void;
  isSignedIn: boolean;
  isWishlisted: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
  getRating: (id: string) => number;
  setRating: (id: string, stars: number) => void;
  onRateRequest: (rid: string, name: string) => void;
}) {
  const rid = String(r.id);
  const done = isCompleted("rozhledna", rid);
  const wished = isWishlisted(rid);
  const currentRating = getRating(rid);
  const [editingRating, setEditingRating] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
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
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
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

          {/* Extra info: route / hours / entrance */}
          {extra && (extra.routeFromParking || extra.openingHours || extra.entrance) && (
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(134,239,172,0.2)",
              borderRadius: "12px", padding: "12px 14px", marginBottom: "12px",
              display: "flex", flexDirection: "column", gap: "7px",
            }}>
              {extra.routeFromParking && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>🥾</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Z parkoviště na rozhlednu</div>
                    <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.82rem", marginTop: "2px" }}>{extra.routeFromParking}</div>
                  </div>
                </div>
              )}
              {extra.openingHours && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>🕐</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Otevírací doba</div>
                    <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.82rem", marginTop: "2px" }}>{extra.openingHours}</div>
                  </div>
                </div>
              )}
              {extra.entrance && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>🎫</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Vstupné</div>
                    <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.82rem", marginTop: "2px" }}>{extra.entrance}</div>
                  </div>
                </div>
              )}
              {extra.stairs && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>🪜</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Počet schodů</div>
                    <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.82rem", marginTop: "2px" }}>{extra.stairs}</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Parking navigation button — above Google Maps / Popis */}
          {extra && (
            <a
              href={extra.parkingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                textDecoration: "none", marginBottom: "8px",
                background: "rgba(66,133,244,0.10)", border: "1px solid rgba(66,133,244,0.3)",
                borderRadius: "10px", padding: "7px 10px",
              }}
            >
              <span style={{ fontSize: "0.95rem", flexShrink: 0 }}>🅿️</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ color: "#93c5fd", fontWeight: 700, fontSize: "0.76rem" }}>Navigace na parkoviště</span>
                {extra.parkingPrice && (
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem", marginLeft: "5px" }}>· {extra.parkingPrice}</span>
                )}
              </div>
              <span style={{ fontSize: "0.7rem", color: "#93c5fd", flexShrink: 0 }}>↗</span>
            </a>
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
                background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.45)",
                color: "#fbbf24", fontWeight: 700, fontSize: "0.82rem",
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

          {/* Current rating display — shown for visited towers */}
          {done && (
            <div style={{
              marginBottom: "8px",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(134,239,172,0.15)",
              borderRadius: "10px", padding: "10px 12px",
            }}>
              {editingRating ? (
                <>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", marginBottom: "8px", textAlign: "center" }}>
                    Změnit hodnocení
                  </div>
                  <StarPicker
                    value={currentRating}
                    hover={hoverRating}
                    onHover={setHoverRating}
                    onLeave={() => setHoverRating(0)}
                    onClick={(n) => {
                      setRating(rid, n);
                      setEditingRating(false);
                      setHoverRating(0);
                    }}
                  />
                  <div style={{ textAlign: "center" }}>
                    <button
                      onClick={() => setEditingRating(false)}
                      style={{
                        background: "none", border: "none", color: "rgba(255,255,255,0.4)",
                        fontSize: "0.75rem", cursor: "pointer", marginTop: "8px",
                      }}
                    >
                      Zrušit
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Vaše hodnocení</span>
                    {currentRating > 0 ? (
                      <span style={{ fontSize: "0.9rem" }}>
                        {"⭐".repeat(currentRating)}{"☆".repeat(5 - currentRating)}
                      </span>
                    ) : (
                      <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>Bez hodnocení</span>
                    )}
                  </div>
                  <button
                    onClick={() => setEditingRating(true)}
                    style={{
                      background: "rgba(134,239,172,0.1)", border: "1px solid rgba(134,239,172,0.25)",
                      borderRadius: "6px", padding: "3px 10px",
                      color: "#86efac", fontSize: "0.72rem", fontWeight: 700, cursor: "pointer",
                    }}
                  >
                    {currentRating > 0 ? "Změnit" : "Ohodnotit"}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mark visited + Wishlist buttons side by side */}
          <div style={{ display: "flex", gap: "8px" }}>
            {isSignedIn ? (
              <button
                onClick={() => {
                  if (!done) {
                    onRateRequest(rid, r.name);
                  } else {
                    toggle("rozhledna", rid, r.name);
                    setEditingRating(false);
                  }
                }}
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  padding: "12px 6px", borderRadius: "10px",
                  background: done ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.07)",
                  border: done ? "1px solid rgba(74,222,128,0.45)" : "1px solid rgba(255,255,255,0.15)",
                  color: done ? "#4ade80" : "rgba(255,255,255,0.7)",
                  fontWeight: 700, fontSize: "0.78rem", cursor: "pointer",
                }}
              >
                {done ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                {"Navštíveno"}
              </button>
            ) : (
              <div style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                padding: "12px 6px", borderRadius: "10px",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", textAlign: "center",
              }}>
                {"Přihlas se"}
              </div>
            )}

            <button
              onClick={() => toggleWishlist(rid)}
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                padding: "12px 6px", borderRadius: "10px",
                background: wished ? "rgba(251,191,36,0.13)" : "rgba(255,255,255,0.06)",
                border: wished ? "1px solid rgba(251,191,36,0.5)" : "1px solid rgba(255,255,255,0.12)",
                color: wished ? "#fbbf24" : "rgba(255,255,255,0.6)",
                fontWeight: 700, fontSize: "0.78rem", cursor: "pointer",
              }}
            >
              {wished ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
              {"Chci navštívit"}
            </button>
          </div>
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
  const { getRating, setRating } = useRatings();
  const { getToken } = useAuth();
  const [ratingTarget, setRatingTarget] = useState<{ rid: string; name: string } | null>(null);
  const [communityRatings, setCommunityRatings] = useState<Record<string, { avg: number; count: number }>>({});
  const [drivingDistances, setDrivingDistances] = useState<Record<string, number>>({});
  const [osrmLoading, setOsrmLoading] = useState(false);

  useEffect(() => {
    fetch("/api/viewpoint-ratings/all", { credentials: "include" })
      .then(r => r.ok ? r.json() : {})
      .then(data => setCommunityRatings(data || {}))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!userLocation) return;
    const nearby = rozhledny
      .map(r => ({ slug: r.slug, coords: rozhlednyCoords[r.slug] }))
      .filter(r => r.coords && distKm(userLocation.lat, userLocation.lon, r.coords[0], r.coords[1]) <= 100)
      .sort((a, b) => distKm(userLocation.lat, userLocation.lon, a.coords![0], a.coords![1]) - distKm(userLocation.lat, userLocation.lon, b.coords![0], b.coords![1]))
      .slice(0, 100);
    if (nearby.length === 0) return;
    setOsrmLoading(true);
    const coordStr = [
      `${userLocation.lon},${userLocation.lat}`,
      ...nearby.map(r => `${r.coords![1]},${r.coords![0]}`),
    ].join(";");
    fetch(`https://router.project-osrm.org/table/v1/driving/${coordStr}?sources=0&annotations=distance`, { signal: AbortSignal.timeout(8000) })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data?.distances?.[0]) return;
        const meters: number[] = data.distances[0];
        const result: Record<string, number> = {};
        nearby.forEach((r, i) => {
          const m = meters[i + 1];
          if (m != null && m >= 0) result[r.slug] = m / 1000;
        });
        setDrivingDistances(result);
      })
      .catch(() => {})
      .finally(() => setOsrmLoading(false));
  }, [userLocation]);

  const saveRatingToApi = useCallback(async (rid: string, stars: number) => {
    try {
      const token = await getToken();
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const res = await fetch("/api/viewpoint-ratings", {
        method: "POST", headers, credentials: "include",
        body: JSON.stringify({ itemId: rid, rating: stars }),
      });
      if (res.ok) {
        setCommunityRatings(prev => {
          const existing = prev[rid];
          if (existing) {
            const newCount = existing.count;
            const newAvg = parseFloat(((existing.avg * newCount - (prev[rid]?.avg ?? 0) + stars) / newCount).toFixed(1));
            return { ...prev, [rid]: { avg: newAvg, count: newCount } };
          }
          return { ...prev, [rid]: { avg: stars, count: 1 } };
        });
        const fresh = await fetch("/api/viewpoint-ratings/all", { credentials: "include" });
        if (fresh.ok) setCommunityRatings(await fresh.json());
      }
    } catch {}
  }, [getToken]);

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
        .sort((a, b) => {
          const da = drivingDistances[a.slug] ?? distanceMap[a.slug] ?? Infinity;
          const db = drivingDistances[b.slug] ?? distanceMap[b.slug] ?? Infinity;
          return da - db;
        });
    }
    return result;
  }, [query, kraj, showVisited, showWishlist, nearbyActive, userLocation, distanceMap, drivingDistances, isCompleted, isWishlisted]);

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
                  const straightDist = nearbyActive ? distanceMap[r.slug] : undefined;
                  const drivingDist = nearbyActive ? drivingDistances[r.slug] : undefined;
                  const dist = drivingDist ?? straightDist;
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
                          onClick={e => {
                            e.stopPropagation();
                            if (!done) {
                              setRatingTarget({ rid, name: r.name });
                            } else {
                              toggle("rozhledna", rid, r.name);
                            }
                          }}
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

                      {/* Community/personal rating — bottom left */}
                      {(() => {
                        const community = communityRatings[rid];
                        const personal = getRating(rid);
                        if (!community && !personal) return null;
                        return (
                          <div style={{
                            position: "absolute", bottom: "calc(15% + 4px)", left: "7px",
                            background: "rgba(0,0,0,0.6)", borderRadius: "6px",
                            padding: "2px 6px", display: "flex", alignItems: "center", gap: "3px",
                          }}>
                            <span style={{ fontSize: "0.62rem" }}>⭐</span>
                            <span style={{ color: "white", fontSize: "0.62rem", fontWeight: 700 }}>
                              {community ? community.avg.toFixed(1) : personal}
                            </span>
                            {community && community.count > 1 && (
                              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.56rem" }}>
                                ({community.count})
                              </span>
                            )}
                          </div>
                        );
                      })()}

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
                          {nearbyActive && osrmLoading && straightDist !== undefined && drivingDist === undefined && (
                            <span style={{ color: "rgba(96,165,250,0.55)", fontSize: "0.58rem", fontWeight: 600, marginLeft: "auto" }}>
                              {straightDist < 1 ? "<1" : Math.round(straightDist)}&nbsp;km…
                            </span>
                          )}
                          {dist !== undefined && (!osrmLoading || drivingDist !== undefined) && (
                            <span style={{ color: "#60a5fa", fontSize: "0.61rem", fontWeight: 700, marginLeft: "auto", display: "flex", alignItems: "center", gap: "2px" }}>
                              {drivingDist !== undefined && <span style={{ fontSize: "0.56rem" }}>🚗</span>}
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
          getRating={getRating}
          setRating={setRating}
          onRateRequest={(rid, name) => setRatingTarget({ rid, name })}
        />
      )}

      {/* Rating Popup */}
      {ratingTarget && (
        <RatingPopup
          name={ratingTarget.name}
          currentRating={getRating(ratingTarget.rid)}
          onRate={(stars) => {
            setRating(ratingTarget.rid, stars);
            saveRatingToApi(ratingTarget.rid, stars);
            toggle("rozhledna", ratingTarget.rid, ratingTarget.name);
            setRatingTarget(null);
          }}
          onSkip={() => {
            toggle("rozhledna", ratingTarget.rid, ratingTarget.name);
            setRatingTarget(null);
          }}
          onClose={() => setRatingTarget(null)}
        />
      )}
    </div>
  );
}
