import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import {
  MapPin, Flag, Camera, Navigation, Car, Bus,
  ChevronUp, ChevronDown, ParkingCircle, Clock,
  Loader2, AlertCircle, CheckCircle2, Timer, ExternalLink, Hotel, Train, Route,
} from "lucide-react";
import { trasa3Steps } from "@/data/trasa3Steps";
import RouteRating from "@/components/RouteRating";

const STORAGE_KEY = "trasa3_times";
const RADIUS_M = 150;

const iconMap = {
  start: Navigation,
  checkpoint: MapPin,
  finish: Flag,
} as const;

interface TimeEntry { display: string; ts: number; }
type StoredTimes = Record<string, TimeEntry>;

function nowEntry(): TimeEntry {
  const now = new Date();
  return {
    display: now.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" }),
    ts: now.getTime(),
  };
}

function formatDuration(ms: number): string {
  const totalMin = Math.round(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return `${m} min`;
  return `${h} h ${m} min`;
}

function haversineM(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

type GeoState = "idle" | "loading" | "error";

export default function Trasa3Page() {
  const [busOpen, setBusOpen] = useState(false);
  const [parkOpen, setParkOpen] = useState(false);
  const [trainOpen, setTrainOpen] = useState(false);
  const [hotelOpen, setHotelOpen] = useState(false);
  const [cestaOpen, setCestaOpen] = useState(false);

  const [times, setTimes] = useState<StoredTimes>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
    catch { return {}; }
  });

  const [geoState, setGeoState] = useState<Record<string, GeoState>>({});
  const [geoError, setGeoError] = useState<Record<string, string>>({});
  const [, navigate] = useLocation();
  const geoWatchRef = useRef<Record<string, number>>({});
  const geoTimeoutRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(times));
  }, [times]);

  useEffect(() => {
    return () => {
      Object.values(geoWatchRef.current).forEach((id) => navigator.geolocation?.clearWatch(id));
      Object.values(geoTimeoutRef.current).forEach((id) => clearTimeout(id));
    };
  }, []);

  const startEntry = times["START"];
  const finishEntry = times["CÍL"];
  const totalTimeMs =
    startEntry && finishEntry ? finishEntry.ts - startEntry.ts : null;
  const totalDuration = totalTimeMs ? formatDuration(totalTimeMs) : null;

  useEffect(() => {
    if (!totalTimeMs) return;
    const saved = localStorage.getItem("trasa3_result_sent");
    if (saved === String(totalTimeMs)) return;
    fetch("/api/results", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ routeId: 3, totalTimeMs }),
    })
      .then((r) => { if (r.ok) localStorage.setItem("trasa3_result_sent", String(totalTimeMs)); })
      .catch(() => {});
  }, [totalTimeMs]);

  function recordWithGeo(step: typeof trasa3Steps[number]) {
    if (!navigator.geolocation) {
      setGeoError((p) => ({ ...p, [step.label]: "GPS není dostupné" }));
      return;
    }
    if (geoWatchRef.current[step.label] !== undefined) {
      navigator.geolocation.clearWatch(geoWatchRef.current[step.label]);
      delete geoWatchRef.current[step.label];
    }
    clearTimeout(geoTimeoutRef.current[step.label]);

    setGeoState((p) => ({ ...p, [step.label]: "loading" }));
    setGeoError((p) => ({ ...p, [step.label]: "Hledám GPS polohu…" }));

    let bestDist = Infinity;
    let bestAcc = Infinity;
    let bestLat = 0;
    let bestLng = 0;
    let finished = false;

    const finish = (success: boolean) => {
      if (finished) return;
      finished = true;
      navigator.geolocation.clearWatch(geoWatchRef.current[step.label]);
      delete geoWatchRef.current[step.label];
      clearTimeout(geoTimeoutRef.current[step.label]);
      if (success) {
        setTimes((p) => ({ ...p, [step.label]: nowEntry() }));
        setGeoState((p) => ({ ...p, [step.label]: "idle" }));
        setGeoError((p) => { const n = { ...p }; delete n[step.label]; return n; });
      } else {
        setGeoState((p) => ({ ...p, [step.label]: "error" }));
        const distStr = bestDist < 1000 ? `${Math.round(bestDist)} m` : `${(bestDist / 1000).toFixed(1)} km`;
        setGeoError((p) => ({
          ...p,
          [step.label]: `${distStr} od místa • tvoje GPS: ${bestLat.toFixed(5)},${bestLng.toFixed(5)} • cíl: ${step.lat.toFixed(5)},${step.lng.toFixed(5)} (±${Math.round(bestAcc)} m)`,
        }));
      }
    };

    geoTimeoutRef.current[step.label] = setTimeout(() => {
      finish(bestDist <= RADIUS_M);
    }, 20000);

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        if (finished) return;
        const dist = haversineM(pos.coords.latitude, pos.coords.longitude, step.lat, step.lng);
        const acc = pos.coords.accuracy;
        if (acc < bestAcc) { bestAcc = acc; bestDist = dist; bestLat = pos.coords.latitude; bestLng = pos.coords.longitude; }
        if (dist > RADIUS_M) {
          const distStr = dist < 1000 ? `${Math.round(dist)} m` : `${(dist / 1000).toFixed(1)} km`;
          setGeoError((p) => ({
            ...p,
            [step.label]: `Zpřesňuji GPS… ~${distStr} od cíle (±${Math.round(acc)} m)`,
          }));
        }
        if (dist <= RADIUS_M) { finish(true); return; }
        if (acc <= 12 && dist > RADIUS_M * 2) { finish(false); }
      },
      () => {
        if (finished) return;
        finished = true;
        clearTimeout(geoTimeoutRef.current[step.label]);
        navigator.geolocation.clearWatch(geoWatchRef.current[step.label]);
        delete geoWatchRef.current[step.label];
        setGeoState((p) => ({ ...p, [step.label]: "error" }));
        setGeoError((p) => ({ ...p, [step.label]: "GPS selhalo — povolil/a jsi přístup?" }));
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
    );
    geoWatchRef.current[step.label] = watchId;
  }

  return (
    <PageLayout title="Trasa č.3" backPath="/trasy" rightSlot={<RouteRating routeId={3} />}>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "calc(100vh - 71px)", padding: "16px" }}>

        {/* Route timeline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {trasa3Steps.map((step, index) => {
            const Icon = iconMap[step.type];
            const isLast = index === trasa3Steps.length - 1;
            const recorded = times[step.label];
            const geo = geoState[step.label] ?? "idle";
            const err = geoError[step.label];

            return (
              <div key={step.label} style={{ display: "flex", gap: "12px" }}>
                {/* Timeline */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "36px", flexShrink: 0 }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: step.bg,
                    border: `2px solid ${recorded ? step.color : step.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    boxShadow: recorded ? `0 0 8px ${step.color}55` : "none",
                    transition: "all 0.3s",
                  }}>
                    <Icon size={16} color={step.color} strokeWidth={2} />
                  </div>
                  {!isLast && (
                    <div style={{ width: "2px", flex: 1, minHeight: "24px", background: "rgba(255,255,255,0.10)", margin: "4px 0" }} />
                  )}
                </div>

                {/* Card */}
                <div
                  onClick={() => navigate(`/trasy/3/${step.slug}`)}
                  style={{
                    flex: 1, marginBottom: isLast ? 0 : "5px", padding: "5px 10px",
                    borderRadius: "14px", background: step.bg,
                    border: `1px solid ${recorded ? step.color + "66" : step.border}`,
                    transition: "border-color 0.3s", cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.1em", color: step.color, marginBottom: "1px" }}>
                    {step.label}
                  </div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "0.90rem", marginBottom: "4px" }}>
                    {step.place}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
                      <Camera size={12} />
                      <span>{step.proof}</span>
                    </div>

                    {recorded ? (
                      <div style={{
                        display: "flex", alignItems: "center", gap: "4px",
                        padding: "3px 8px", borderRadius: "20px",
                        background: step.color + "22", border: `1px solid ${step.color}55`,
                      }}>
                        <CheckCircle2 size={10} color={step.color} />
                        <span style={{ color: step.color, fontWeight: 700, fontSize: "0.76rem" }}>{recorded.display}</span>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => { e.stopPropagation(); recordWithGeo(step); }}
                        disabled={geo === "loading"}
                        style={{
                          display: "flex", alignItems: "center", gap: "4px",
                          padding: "3px 8px", borderRadius: "20px",
                          background: geo === "error" ? "rgba(239,68,68,0.10)" : "rgba(255,255,255,0.05)",
                          border: geo === "error" ? "1px solid rgba(239,68,68,0.35)" : "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", fontWeight: 600,
                          cursor: geo === "loading" ? "default" : "pointer", whiteSpace: "nowrap",
                          opacity: geo === "loading" ? 0.7 : 1,
                        }}
                      >
                        {geo === "loading"
                          ? <><Loader2 size={10} style={{ animation: "spin 1s linear infinite" }} />Zjišťuji…</>
                          : <><Clock size={10} />Zapsat čas</>
                        }
                      </button>
                    )}
                  </div>

                  {err && !recorded && (
                    <div style={{
                      display: "flex", alignItems: "center", gap: "5px",
                      marginTop: "8px", padding: "5px 8px", borderRadius: "8px",
                      background: "rgba(239,68,68,0.10)", border: "1px solid rgba(239,68,68,0.25)",
                    }}>
                      <AlertCircle size={12} color="#f87171" />
                      <span style={{ color: "#f87171", fontSize: "0.75rem" }}>{err}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ flex: 1 }} />

        {/* Total time */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "2px", padding: "8px 20px", borderRadius: "12px",
            border: totalDuration ? "1px solid rgba(253,230,138,0.45)" : "1px dashed rgba(253,230,138,0.25)",
            background: totalDuration ? "rgba(253,230,138,0.15)" : "rgba(253,230,138,0.05)",
            minWidth: "160px", transition: "all 0.4s",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Timer size={14} color={totalDuration ? "#fde68a" : "rgba(253,230,138,0.35)"} />
              <span style={{ color: totalDuration ? "#fde68a" : "rgba(253,230,138,0.35)", fontWeight: 700, fontSize: "0.80rem" }}>
                {totalDuration ? totalDuration : "Celkový čas trasy"}
              </span>
            </div>
            {totalDuration ? (
              <span style={{ color: "rgba(253,230,138,0.45)", fontSize: "0.72rem", marginTop: "2px" }}>
                {startEntry!.display} → {finishEntry!.display}
              </span>
            ) : (
              <span style={{ color: "rgba(253,230,138,0.25)", fontSize: "0.72rem", fontStyle: "italic", marginTop: "1px" }}>
                Zapíše se po dokončení trasy
              </span>
            )}
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* Transport section */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>

          {/* Cesta zpět */}
          <button onClick={() => setCestaOpen((o) => !o)} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
            padding: "8px 10px", borderRadius: "12px",
            border: cestaOpen ? "1px solid rgba(52,211,153,0.45)" : "1px solid rgba(255,255,255,0.15)",
            background: cestaOpen ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.8)",
            fontWeight: 700, fontSize: "0.80rem", cursor: "pointer", transition: "all 0.2s",
          }}>
            <Route size={15} color={cestaOpen ? "#34d399" : "rgba(255,255,255,0.7)"} />
            Cesta z Malé Skály do Žel. Brodu
            {cestaOpen ? <ChevronUp size={12} color="rgba(255,255,255,0.5)" /> : <ChevronDown size={12} color="rgba(255,255,255,0.5)" />}
          </button>

          {cestaOpen && (
            <div style={{ borderRadius: "12px", background: "rgba(52,211,153,0.07)", border: "1px solid rgba(52,211,153,0.22)", overflow: "hidden" }}>

              {/* Vlak */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <Train size={14} color="#34d399" style={{ flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "0.80rem" }}>Cesta vlakem</div>
                  <div style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.65rem" }}>Malá Skála → Železný Brod</div>
                </div>
                <a
                  href="https://idos.cz/vlaky/spojeni/?f=Mal%C3%A1+Sk%C3%A1la&t=%C5%BDelezn%C3%BD+Brod"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
                    padding: "5px 9px", borderRadius: "8px",
                    background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.35)",
                    color: "#34d399", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap",
                  }}
                >
                  <ExternalLink size={11} />
                  IDOS
                </a>
              </div>

              {/* Koloběžka – trasa */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0, lineHeight: 1 }}>🛴</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "0.80rem" }}>Cesta na koloběžce</div>
                  <div style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.65rem" }}>Greenway Jizera</div>
                </div>
                <a
                  href="https://www.kolobezky-ceskyraj.cz/vylety/2-uncategorised/33-greenway-jizera.html"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
                    padding: "5px 9px", borderRadius: "8px",
                    background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.35)",
                    color: "#34d399", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap",
                  }}
                >
                  <ExternalLink size={11} />
                  Trasa
                </a>
              </div>

              {/* Rezervace koloběžky */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0, lineHeight: 1 }}>📅</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "0.80rem" }}>Rezervace koloběžky</div>
                  <div style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.65rem" }}>Malá Skála &gt; Železný Brod – po Greenway Jizera – 1,5 hod. 199 Kč</div>
                </div>
                <a
                  href="https://www.kolobezky-ceskyraj.cz/rezervace"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
                    padding: "5px 9px", borderRadius: "8px",
                    background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.35)",
                    color: "#34d399", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap",
                  }}
                >
                  <ExternalLink size={11} />
                  Rezervovat
                </a>
              </div>

              {/* Zapůjčení */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <MapPin size={14} color="#34d399" style={{ flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "0.80rem" }}>Zapůjčení koloběžky</div>
                  <div style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.65rem" }}>Infoshop Vejměnek</div>
                </div>
                <a
                  href="https://www.google.com/maps?q=J5PR%2BHG+Mal%C3%A1+Sk%C3%A1la"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
                    padding: "5px 9px", borderRadius: "8px",
                    background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.35)",
                    color: "#34d399", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap",
                  }}
                >
                  <Navigation size={11} />
                  Mapa
                </a>
              </div>

              {/* Vrácení */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px" }}>
                <MapPin size={14} color="#34d399" style={{ flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "0.80rem" }}>Vrácení koloběžky</div>
                  <div style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.65rem" }}>Kavárna Rest.Art</div>
                </div>
                <a
                  href="https://www.google.com/maps?q=J7R4%2B7P+%C5%BDelezn%C3%BD+Brod"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
                    padding: "5px 9px", borderRadius: "8px",
                    background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.35)",
                    color: "#34d399", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap",
                  }}
                >
                  <Navigation size={11} />
                  Mapa
                </a>
              </div>

            </div>
          )}

          {/* Ubytování */}
          <button onClick={() => setHotelOpen((o) => !o)} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
            padding: "8px 10px", borderRadius: "12px",
            border: hotelOpen ? "1px solid rgba(232,121,249,0.45)" : "1px solid rgba(255,255,255,0.15)",
            background: hotelOpen ? "rgba(232,121,249,0.15)" : "rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.8)",
            fontWeight: 700, fontSize: "0.80rem", cursor: "pointer", transition: "all 0.2s",
          }}>
            <Hotel size={15} color={hotelOpen ? "#e879f9" : "rgba(255,255,255,0.7)"} />
            Ubytování
            {hotelOpen ? <ChevronUp size={12} color="rgba(255,255,255,0.5)" /> : <ChevronDown size={12} color="rgba(255,255,255,0.5)" />}
          </button>

          {hotelOpen && (
            <div style={{ padding: "12px 14px", borderRadius: "12px", background: "rgba(232,121,249,0.08)", border: "1px solid rgba(232,121,249,0.22)", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px", minWidth: 0 }}>
                {[
                  { name: "Hotel Cristal Palace", detail: "Železný Brod, nám. 3. května" },
                  { name: "Penzion Na Jizeře", detail: "Malá Skála 104" },
                  { name: "Chata Údolí Jizery", detail: "okolí Malé Skály" },
                ].map((h) => (
                  <div key={h.name} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Hotel size={10} color="#e879f9" style={{ flexShrink: 0 }} />
                    <div>
                      <div style={{ color: "white", fontWeight: 600, fontSize: "0.74rem" }}>{h.name}</div>
                      <div style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.63rem" }}>{h.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://www.booking.com/searchresults.html?ss=%C5%BDelezn%C3%BD+Brod"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
                  padding: "5px 9px", borderRadius: "8px",
                  background: "rgba(232,121,249,0.15)", border: "1px solid rgba(232,121,249,0.35)",
                  color: "#e879f9", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <ExternalLink size={11} />
                Booking
              </a>
            </div>
          )}

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setParkOpen((o) => !o)} style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
              padding: "8px 10px", borderRadius: "12px",
              border: parkOpen ? "1px solid rgba(74,222,128,0.45)" : "1px solid rgba(255,255,255,0.15)",
              background: parkOpen ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 700, fontSize: "0.80rem", cursor: "pointer", transition: "all 0.2s",
            }}>
              <Car size={15} color={parkOpen ? "#4ade80" : "rgba(255,255,255,0.7)"} />
              Parkoviště
              {parkOpen ? <ChevronUp size={12} color="rgba(255,255,255,0.5)" /> : <ChevronDown size={12} color="rgba(255,255,255,0.5)" />}
            </button>

            <button onClick={() => setBusOpen((o) => !o)} style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
              padding: "8px 10px", borderRadius: "12px",
              border: busOpen ? "1px solid rgba(96,165,250,0.45)" : "1px solid rgba(255,255,255,0.15)",
              background: busOpen ? "rgba(96,165,250,0.15)" : "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 700, fontSize: "0.80rem", cursor: "pointer", transition: "all 0.2s",
            }}>
              <Bus size={15} color={busOpen ? "#60a5fa" : "rgba(255,255,255,0.7)"} />
              Autobus
              {busOpen ? <ChevronUp size={12} color="rgba(255,255,255,0.5)" /> : <ChevronDown size={12} color="rgba(255,255,255,0.5)" />}
            </button>

            <button onClick={() => setTrainOpen((o) => !o)} style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
              padding: "8px 10px", borderRadius: "12px",
              border: trainOpen ? "1px solid rgba(251,191,36,0.45)" : "1px solid rgba(255,255,255,0.15)",
              background: trainOpen ? "rgba(251,191,36,0.15)" : "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 700, fontSize: "0.80rem", cursor: "pointer", transition: "all 0.2s",
            }}>
              <Train size={15} color={trainOpen ? "#fbbf24" : "rgba(255,255,255,0.7)"} />
              Vlak
              {trainOpen ? <ChevronUp size={12} color="rgba(255,255,255,0.5)" /> : <ChevronDown size={12} color="rgba(255,255,255,0.5)" />}
            </button>
          </div>

          {parkOpen && (
            <div style={{ padding: "12px 14px", borderRadius: "12px", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.22)", display: "flex", alignItems: "center", gap: "8px" }}>
              <ParkingCircle size={15} color="#4ade80" style={{ flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", marginBottom: "2px" }}>Parkoviště</div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.88rem" }}>u nádraží Železný Brod</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.74rem", marginTop: "2px" }}>Vlakové nádraží, Železný Brod</div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Vlakové+nádraží+Železný+Brod&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
                  padding: "5px 9px", borderRadius: "8px",
                  background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.35)",
                  color: "#4ade80", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <Navigation size={11} />
                Navigovat
              </a>
            </div>
          )}

          {busOpen && (
            <div style={{ padding: "12px 14px", borderRadius: "12px", background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.22)", display: "flex", alignItems: "center", gap: "8px" }}>
              <Bus size={15} color="#60a5fa" style={{ flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", marginBottom: "2px" }}>Zastávka</div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.88rem" }}>Terminál u žel. stanice</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.74rem", marginTop: "2px" }}>Železný Brod</div>
              </div>
              <a
                href="https://idos.cz/autobusy/spojeni/?t=%C5%BDelezn%C3%BD+Brod%2C+Termin%C3%A1l+u+%C5%BEel.st."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
                  padding: "5px 9px", borderRadius: "8px",
                  background: "rgba(96,165,250,0.15)", border: "1px solid rgba(96,165,250,0.35)",
                  color: "#60a5fa", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <ExternalLink size={11} />
                IDOS
              </a>
            </div>
          )}

          {trainOpen && (
            <div style={{ padding: "12px 14px", borderRadius: "12px", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.22)", display: "flex", alignItems: "center", gap: "8px" }}>
              <Train size={15} color="#fbbf24" style={{ flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", marginBottom: "2px" }}>Vlakové nádraží</div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.88rem" }}>Železný Brod</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.74rem", marginTop: "2px" }}>Cíl: Malá Skála (tatáž linka)</div>
              </div>
              <a
                href="https://idos.cz/vlaky/spojeni/?t=%C5%BDelezn%C3%BD+Brod"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
                  padding: "5px 9px", borderRadius: "8px",
                  background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.35)",
                  color: "#fbbf24", fontSize: "0.72rem", fontWeight: 700, textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <ExternalLink size={11} />
                IDOS
              </a>
            </div>
          )}
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </PageLayout>
  );
}
