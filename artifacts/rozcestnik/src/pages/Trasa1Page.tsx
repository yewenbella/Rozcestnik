import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import PageLayout from "@/components/PageLayout";
import {
  MapPin, Flag, Camera, Navigation, Car, Bus,
  ChevronUp, ChevronDown, ParkingCircle, Clock,
  Loader2, AlertCircle, CheckCircle2, Timer, ExternalLink, Hotel,
} from "lucide-react";
import { trasa1Steps } from "@/data/trasa1Steps";

const STORAGE_KEY = "trasa1_times";
const RADIUS_M = 100;

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

export default function Trasa1Page() {
  const [busOpen, setBusOpen] = useState(false);
  const [parkOpen, setParkOpen] = useState(false);
  const [hotelOpen, setHotelOpen] = useState(false);

  const [times, setTimes] = useState<StoredTimes>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
    catch { return {}; }
  });

  const [geoState, setGeoState] = useState<Record<string, GeoState>>({});
  const [geoError, setGeoError] = useState<Record<string, string>>({});
  const [, navigate] = useLocation();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(times));
  }, [times]);

  const startEntry = times["START"];
  const finishEntry = times["CÍL"];
  const totalTimeMs =
    startEntry && finishEntry ? finishEntry.ts - startEntry.ts : null;
  const totalDuration = totalTimeMs ? formatDuration(totalTimeMs) : null;

  useEffect(() => {
    if (!totalTimeMs) return;
    const saved = localStorage.getItem("trasa1_result_sent");
    if (saved === String(totalTimeMs)) return;
    fetch("/api/results", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ routeId: 1, totalTimeMs }),
    })
      .then((r) => { if (r.ok) localStorage.setItem("trasa1_result_sent", String(totalTimeMs)); })
      .catch(() => {});
  }, [totalTimeMs]);

  function recordWithGeo(step: typeof trasa1Steps[number]) {
    if (!navigator.geolocation) {
      setGeoError((p) => ({ ...p, [step.label]: "GPS není dostupné" }));
      return;
    }
    setGeoState((p) => ({ ...p, [step.label]: "loading" }));
    setGeoError((p) => { const n = { ...p }; delete n[step.label]; return n; });

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const dist = haversineM(pos.coords.latitude, pos.coords.longitude, step.lat, step.lng);
        if (dist <= RADIUS_M) {
          setTimes((p) => ({ ...p, [step.label]: nowEntry() }));
          setGeoState((p) => ({ ...p, [step.label]: "idle" }));
        } else {
          const distStr = dist < 1000 ? `${Math.round(dist)} m` : `${(dist / 1000).toFixed(1)} km`;
          setGeoError((p) => ({ ...p, [step.label]: `Jsi ${distStr} od místa` }));
          setGeoState((p) => ({ ...p, [step.label]: "error" }));
        }
      },
      () => {
        setGeoError((p) => ({ ...p, [step.label]: "GPS selhalo, zkus znovu" }));
        setGeoState((p) => ({ ...p, [step.label]: "error" }));
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  return (
    <PageLayout title="Trasa č.1" backPath="/trasy">
      <div style={{ display: "flex", flexDirection: "column", minHeight: "calc(100vh - 71px)", padding: "16px" }}>

        {/* Route timeline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {trasa1Steps.map((step, index) => {
            const Icon = iconMap[step.type];
            const isLast = index === trasa1Steps.length - 1;
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
                  onClick={() => navigate(`/trasy/1/${step.slug}`)}
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
                        onClick={(e) => { e.stopPropagation(); recordWithGeo(step as typeof trasa1Steps[number]); }}
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

        {/* Total time — centered between route and transport */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
            padding: "8px 20px",
            borderRadius: "12px",
            border: totalDuration ? "1px solid rgba(253,230,138,0.45)" : "1px dashed rgba(253,230,138,0.25)",
            background: totalDuration ? "rgba(253,230,138,0.15)" : "rgba(253,230,138,0.05)",
            backdropFilter: "blur(10px)",
            minWidth: "160px",
            transition: "all 0.4s",
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

          {/* Ubytování button */}
          <button onClick={() => setHotelOpen((o) => !o)} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
            padding: "8px 10px", borderRadius: "12px",
            border: hotelOpen ? "1px solid rgba(232,121,249,0.45)" : "1px solid rgba(255,255,255,0.15)",
            background: hotelOpen ? "rgba(232,121,249,0.15)" : "rgba(255,255,255,0.07)",
            backdropFilter: "blur(10px)", color: "rgba(255,255,255,0.8)",
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
                  { name: "Penzion Janov", detail: "Janov nad Nisou 236" },
                  { name: "Hotel Maxov", detail: "Maxov 27, Janov nad Nisou" },
                  { name: "Penzion Severák", detail: "u lyžařského areálu Severák" },
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
                href="https://www.booking.com/searchresults.html?ss=Janov+nad+Nisou"
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
              backdropFilter: "blur(10px)", color: "rgba(255,255,255,0.8)",
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
              backdropFilter: "blur(10px)", color: "rgba(255,255,255,0.8)",
              fontWeight: 700, fontSize: "0.80rem", cursor: "pointer", transition: "all 0.2s",
            }}>
              <Bus size={15} color={busOpen ? "#60a5fa" : "rgba(255,255,255,0.7)"} />
              Autobus
              {busOpen ? <ChevronUp size={12} color="rgba(255,255,255,0.5)" /> : <ChevronDown size={12} color="rgba(255,255,255,0.5)" />}
            </button>
          </div>

          {parkOpen && (
            <div style={{ padding: "12px 14px", borderRadius: "12px", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.22)", display: "flex", alignItems: "center", gap: "8px" }}>
              <ParkingCircle size={15} color="#4ade80" style={{ flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", marginBottom: "2px" }}>Parkoviště</div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.88rem" }}>Kavárna Mlsné myšky (Janov nad Nisou 518)</div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Kav%C3%A1rna+Mls%C3%A9+my%C5%A1ky%2C+Janov+nad+Nisou+518"
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
              <Bus size={15} color="#60a5fa" flexShrink={0} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", marginBottom: "2px" }}>Zastávka</div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.88rem" }}>Janov nad Nisou, pošta</div>
              </div>
              <a
                href="https://idos.cz/autobusy/spojeni/?t=Janov+nad+Nisou%2C+po%C5%A1ta"
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
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </PageLayout>
  );
}
