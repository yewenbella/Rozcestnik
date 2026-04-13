import { useEffect, useState } from "react";

function formatCountdown(sunsetMs: number): { text: string; passed: boolean } {
  const now = Date.now();
  const diff = sunsetMs - now;
  if (diff <= 0) return { text: "Západ nastal", passed: true };
  const totalMin = Math.floor(diff / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return { text: `za ${m} min`, passed: false };
  return { text: `za ${h} h ${m} min`, passed: false };
}

export default function SunsetBadge() {
  const [sunsetMs, setSunsetMs] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<{ text: string; passed: boolean } | null>(null);

  useEffect(() => {
    const fetchSunset = async (lat: number, lon: number) => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunset&timezone=auto&forecast_days=1`
        );
        const data = await res.json();
        const sunsetStr: string = data.daily?.sunset?.[0];
        if (!sunsetStr) return;
        setSunsetMs(new Date(sunsetStr).getTime());
      } catch {}
    };

    fetchSunset(50.72, 15.15);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchSunset(pos.coords.latitude, pos.coords.longitude),
        () => {},
        { timeout: 5000 }
      );
    }
  }, []);

  useEffect(() => {
    if (sunsetMs === null) return;
    setCountdown(formatCountdown(sunsetMs));
    const id = setInterval(() => setCountdown(formatCountdown(sunsetMs)), 30000);
    return () => clearInterval(id);
  }, [sunsetMs]);

  if (!countdown) return null;

  const passed = countdown.passed;

  return (
    <div
      style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "5px 10px",
        borderRadius: "20px",
        background: passed
          ? "rgba(99,102,241,0.18)"
          : "rgba(251,146,60,0.18)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: passed
          ? "1px solid rgba(99,102,241,0.35)"
          : "1px solid rgba(251,146,60,0.35)",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      <span style={{ fontSize: "0.88rem", lineHeight: 1 }}>
        {passed ? "🌙" : "🌅"}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
        <span style={{
          color: passed ? "rgba(165,180,252,0.9)" : "rgba(253,186,116,0.9)",
          fontSize: "0.64rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
          lineHeight: 1.2,
          textTransform: "uppercase",
        }}>
          Západ slunce
        </span>
        <span style={{
          color: "white",
          fontSize: "0.76rem",
          fontWeight: 700,
          lineHeight: 1.2,
        }}>
          {countdown.text}
        </span>
      </div>
    </div>
  );
}
