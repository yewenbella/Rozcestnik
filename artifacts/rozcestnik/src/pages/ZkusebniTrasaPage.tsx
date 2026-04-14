import { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import {
  Navigation, MapPin, Flag, CheckCircle2, Timer,
  Loader2, AlertCircle, FlaskConical,
} from "lucide-react";
import { zkusebniSteps } from "@/data/zkusebniSteps";

const STORAGE_KEY = "zkusebni_times";
const RADIUS_M = 100;

interface TimeEntry { display: string; ts: number; }
type StoredTimes = Record<string, TimeEntry>;
type GeoState = "idle" | "loading" | "error";

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

const iconMap = { start: Navigation, checkpoint: MapPin, finish: Flag } as const;
const typeColor = { start: "#4ade80", checkpoint: "#fbbf24", finish: "#f87171" } as const;

export default function ZkusebniTrasaPage() {
  const [times, setTimes] = useState<StoredTimes>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
    catch { return {}; }
  });
  const [geoState, setGeoState] = useState<Record<string, GeoState>>({});
  const [geoError, setGeoError] = useState<Record<string, string>>({});

  const startEntry = times["START"];
  const finishEntry = times["CÍL"];
  const totalTimeMs = startEntry && finishEntry ? finishEntry.ts - startEntry.ts : null;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(times));
  }, [times]);

  function recordManual(label: string) {
    setTimes((p) => ({ ...p, [label]: nowEntry() }));
  }

  function recordWithGeo(step: typeof zkusebniSteps[number]) {
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
          setGeoState((p) => ({ ...p, [step.label]: "error" }));
          setGeoError((p) => ({
            ...p,
            [step.label]: `Jsi ${Math.round(dist)} m daleko (potřeba do ${RADIUS_M} m)`,
          }));
        }
      },
      () => {
        setGeoState((p) => ({ ...p, [step.label]: "error" }));
        setGeoError((p) => ({ ...p, [step.label]: "GPS poloha nedostupná" }));
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  function reset() {
    setTimes({});
    setGeoState({});
    setGeoError({});
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <PageLayout title="Zkušební trasa" backPath="/trasy">
      <div style={{ display: "flex", flexDirection: "column", padding: "16px", gap: "16px" }}>

        {/* Info banner */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: "10px",
          padding: "12px 14px", borderRadius: "12px",
          background: "rgba(251,191,36,0.10)",
          border: "1px solid rgba(251,191,36,0.30)",
        }}>
          <FlaskConical size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "1px" }} />
          <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontSize: "0.80rem", lineHeight: 1.55 }}>
            Zkušební trasa pro ověření funkce GPS záznamu. Zápis je možný pouze do 100 m od kontrolního bodu.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {zkusebniSteps.map((step, idx) => {
            const Icon = iconMap[step.type];
            const color = typeColor[step.type];
            const recorded = times[step.label];
            const gs = geoState[step.label] ?? "idle";
            const err = geoError[step.label];
            const isLast = idx === zkusebniSteps.length - 1;
            const hasCoords = step.lat !== 0 || step.lng !== 0;

            return (
              <div key={step.label} style={{ display: "flex", gap: "12px" }}>
                {/* Timeline */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "32px", flexShrink: 0 }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "10px",
                    background: recorded ? `${color}22` : "rgba(255,255,255,0.06)",
                    border: `1.5px solid ${recorded ? color + "66" : "rgba(255,255,255,0.12)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s",
                  }}>
                    {recorded
                      ? <CheckCircle2 size={15} color={color} strokeWidth={2} />
                      : <Icon size={15} color="rgba(255,255,255,0.4)" strokeWidth={1.8} />
                    }
                  </div>
                  {!isLast && (
                    <div style={{
                      width: "2px", flex: 1, minHeight: "16px", margin: "4px 0",
                      background: recorded ? `${color}44` : "rgba(255,255,255,0.08)",
                      borderRadius: "1px", transition: "background 0.3s",
                    }} />
                  )}
                </div>

                {/* Card */}
                <div style={{
                  flex: 1, padding: "12px 14px", borderRadius: "14px",
                  marginBottom: isLast ? 0 : "8px",
                  background: recorded ? `${color}0d` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${recorded ? color + "33" : "rgba(255,255,255,0.08)"}`,
                  transition: "all 0.3s",
                }}>
                  <div style={{ fontSize: "0.64rem", fontWeight: 800, letterSpacing: "0.10em", textTransform: "uppercase", color, marginBottom: "2px" }}>
                    {step.type === "start" ? "Start" : step.type === "finish" ? "Cíl" : "Checkpoint"}
                  </div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", marginBottom: "2px" }}>
                    {step.label}
                  </div>
                  {step.address && (
                    <div style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.73rem", marginBottom: "8px" }}>
                      {step.address}
                    </div>
                  )}

                  {recorded ? (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "4px 10px", borderRadius: "8px",
                      background: `${color}18`, border: `1px solid ${color}44`,
                    }}>
                      <CheckCircle2 size={12} color={color} />
                      <span style={{ color, fontWeight: 700, fontSize: "0.80rem" }}>{recorded.display}</span>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <button
                        onClick={() => hasCoords ? recordWithGeo(step) : recordManual(step.label)}
                        disabled={gs === "loading"}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "6px",
                          padding: "7px 14px", borderRadius: "10px", width: "fit-content",
                          background: `${color}18`, border: `1px solid ${color}44`,
                          color, fontWeight: 700, fontSize: "0.80rem",
                          cursor: gs === "loading" ? "wait" : "pointer",
                          opacity: gs === "loading" ? 0.7 : 1,
                          transition: "all 0.2s",
                        }}
                      >
                        {gs === "loading"
                          ? <><Loader2 size={13} style={{ animation: "spin 1s linear infinite" }} /> Zjišťuji polohu…</>
                          : <><Timer size={13} /> Zapsat čas</>
                        }
                      </button>

                      {err && (
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 10px", borderRadius: "8px", background: "rgba(239,68,68,0.10)", border: "1px solid rgba(239,68,68,0.25)" }}>
                          <AlertCircle size={13} color="#f87171" style={{ flexShrink: 0 }} />
                          <span style={{ color: "#f87171", fontSize: "0.75rem" }}>{err}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Total time */}
        <div style={{
          padding: "14px 16px", borderRadius: "14px", textAlign: "center",
          background: totalTimeMs ? "rgba(251,191,36,0.10)" : "rgba(255,255,255,0.04)",
          border: `1px dashed ${totalTimeMs ? "rgba(251,191,36,0.45)" : "rgba(255,255,255,0.12)"}`,
        }}>
          {totalTimeMs ? (
            <>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#fbbf24", marginBottom: "4px" }}>Celkový čas</div>
              <div style={{ color: "white", fontWeight: 800, fontSize: "1.4rem" }}>{formatDuration(totalTimeMs)}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", marginTop: "4px" }}>Testování GPS proběhlo úspěšně ✓</div>
            </>
          ) : (
            <>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.80rem", fontWeight: 600 }}>⏱ Celkový čas trasy</div>
              <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem", marginTop: "3px" }}>Zobrazí se po dokončení</div>
            </>
          )}
        </div>

        {Object.keys(times).length > 0 && (
          <button
            onClick={reset}
            style={{
              padding: "10px", borderRadius: "12px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", cursor: "pointer",
            }}
          >
            Resetovat záznam
          </button>
        )}
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </PageLayout>
  );
}
