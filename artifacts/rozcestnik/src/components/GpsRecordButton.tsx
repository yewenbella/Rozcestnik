import { useState, useRef, useEffect } from "react";
import { CheckCircle2, Clock, Loader2, AlertCircle } from "lucide-react";

interface Step {
  label: string;
  lat: number;
  lng: number;
  color: string;
}

interface TimeEntry { display: string; ts: number; }

const RADIUS_M = 150;

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

function nowEntry(): TimeEntry {
  const now = new Date();
  return {
    display: now.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" }),
    ts: now.getTime(),
  };
}

export default function GpsRecordButton({ step, storageKey }: { step: Step; storageKey: string }) {
  const [recorded, setRecorded] = useState<TimeEntry | null>(() => {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return data[step.label] ?? null;
    } catch { return null; }
  });
  const [geoState, setGeoState] = useState<"idle" | "loading" | "error">("idle");
  const [geoMsg, setGeoMsg] = useState<string | null>(null);
  const watchRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (watchRef.current !== null) navigator.geolocation?.clearWatch(watchRef.current);
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, []);

  function record() {
    if (!navigator.geolocation) {
      setGeoMsg("GPS není dostupné");
      setGeoState("error");
      return;
    }
    if (watchRef.current !== null) {
      navigator.geolocation.clearWatch(watchRef.current);
    }
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);

    setGeoState("loading");
    setGeoMsg("Hledám GPS polohu…");

    let bestDist = Infinity;
    let bestAcc = Infinity;
    let bestLat = 0;
    let bestLng = 0;
    let finished = false;

    const finish = (success: boolean) => {
      if (finished) return;
      finished = true;
      if (watchRef.current !== null) navigator.geolocation.clearWatch(watchRef.current);
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
      if (success) {
        const entry = nowEntry();
        setRecorded(entry);
        setGeoState("idle");
        setGeoMsg(null);
        try {
          const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
          data[step.label] = entry;
          localStorage.setItem(storageKey, JSON.stringify(data));
        } catch {}
      } else {
        setGeoState("error");
        const distStr = bestDist < 1000 ? `${Math.round(bestDist)} m` : `${(bestDist / 1000).toFixed(1)} km`;
        setGeoMsg(
          `${distStr} od místa • tvoje GPS: ${bestLat.toFixed(5)},${bestLng.toFixed(5)} • cíl: ${step.lat.toFixed(5)},${step.lng.toFixed(5)} (±${Math.round(bestAcc)} m)`
        );
      }
    };

    timeoutRef.current = setTimeout(() => {
      finish(bestDist <= RADIUS_M);
    }, 20000);

    watchRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        if (finished) return;
        const dist = haversineM(pos.coords.latitude, pos.coords.longitude, step.lat, step.lng);
        const acc = pos.coords.accuracy;
        if (acc < bestAcc) { bestAcc = acc; bestDist = dist; bestLat = pos.coords.latitude; bestLng = pos.coords.longitude; }
        if (dist > RADIUS_M) {
          const distStr = dist < 1000 ? `${Math.round(dist)} m` : `${(dist / 1000).toFixed(1)} km`;
          setGeoMsg(`Zpřesňuji GPS… ~${distStr} od cíle (±${Math.round(acc)} m)`);
        }
        if (dist <= RADIUS_M) { finish(true); return; }
        if (acc <= 12 && dist > RADIUS_M * 2) { finish(false); }
      },
      () => {
        if (finished) return;
        finished = true;
        if (watchRef.current !== null) navigator.geolocation.clearWatch(watchRef.current);
        if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
        setGeoState("error");
        setGeoMsg("GPS selhalo — povolil/a jsi přístup?");
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
    );
  }

  if (recorded) {
    return (
      <div style={{
        display: "flex", alignItems: "center", gap: "8px",
        padding: "10px 14px", borderRadius: "12px",
        background: step.color + "15", border: `1px solid ${step.color}44`,
      }}>
        <CheckCircle2 size={16} color={step.color} />
        <span style={{ color: step.color, fontWeight: 700, fontSize: "0.85rem" }}>
          Zapsáno {recorded.display}
        </span>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <button
        onClick={record}
        disabled={geoState === "loading"}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          width: "100%", padding: "11px 14px", borderRadius: "12px",
          background: geoState === "error" ? "rgba(239,68,68,0.10)" : "rgba(255,255,255,0.07)",
          border: geoState === "error" ? "1px solid rgba(239,68,68,0.35)" : "1px solid rgba(255,255,255,0.18)",
          color: "rgba(255,255,255,0.80)", fontSize: "0.85rem", fontWeight: 700,
          cursor: geoState === "loading" ? "default" : "pointer",
          opacity: geoState === "loading" ? 0.75 : 1,
        }}
      >
        {geoState === "loading"
          ? <><Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} />Zjišťuji polohu…</>
          : <><Clock size={14} />Zapsat čas</>
        }
      </button>

      {geoMsg && (
        <div style={{
          display: "flex", alignItems: "flex-start", gap: "6px",
          padding: "7px 10px", borderRadius: "8px",
          background: geoState === "error" ? "rgba(239,68,68,0.10)" : "rgba(255,255,255,0.05)",
          border: geoState === "error" ? "1px solid rgba(239,68,68,0.25)" : "1px solid rgba(255,255,255,0.08)",
        }}>
          <AlertCircle size={13} color={geoState === "error" ? "#f87171" : "rgba(255,255,255,0.5)"} style={{ flexShrink: 0, marginTop: "1px" }} />
          <span style={{ color: geoState === "error" ? "#f87171" : "rgba(255,255,255,0.6)", fontSize: "0.73rem", lineHeight: "1.4" }}>
            {geoMsg}
          </span>
        </div>
      )}

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
