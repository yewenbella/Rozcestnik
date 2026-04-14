import { useEffect, useState } from "react";

// NOAA Solar Calculator algorithm
// Returns sunset time in minutes from midnight UTC
function calcSunsetMinutesUTC(lat: number, lon: number, date: Date): number | null {
  const rad = (deg: number) => (deg * Math.PI) / 180;
  const deg = (r: number) => (r * 180) / Math.PI;

  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate();

  // Julian Day
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  const JD =
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    d + B - 1524.5;

  // Julian Century
  const JC = (JD - 2451545.0) / 36525.0;

  // Geometric Mean Long Sun (deg)
  const L0 = (280.46646 + JC * (36000.76983 + JC * 0.0003032)) % 360;

  // Geometric Mean Anom Sun (deg)
  const M = 357.52911 + JC * (35999.05029 - 0.0001537 * JC);

  // Orbit Eccentricity
  const e = 0.016708634 - JC * (0.000042037 + 0.0000001267 * JC);

  // Sun Eq of Center
  const C =
    Math.sin(rad(M)) * (1.914602 - JC * (0.004817 + 0.000014 * JC)) +
    Math.sin(rad(2 * M)) * (0.019993 - 0.000101 * JC) +
    Math.sin(rad(3 * M)) * 0.000289;

  // Sun True Long (deg)
  const sunLon = L0 + C;

  // Apparent Long (deg)
  const omega = 125.04 - 1934.136 * JC;
  const lambda = sunLon - 0.00569 - 0.00478 * Math.sin(rad(omega));

  // Mean Obliq Ecliptic (deg)
  const meanObliq =
    23 +
    (26 +
      (21.448 - JC * (46.815 + JC * (0.00059 - JC * 0.001813))) / 60) /
      60;

  // Obliq Correction (deg)
  const obliqCorr = meanObliq + 0.00256 * Math.cos(rad(omega));

  // Sun Declination (deg)
  const decl = deg(Math.asin(Math.sin(rad(obliqCorr)) * Math.sin(rad(lambda))));

  // Equation of Time (minutes)
  const tanObliq2 = Math.tan(rad(obliqCorr / 2)) ** 2;
  const eqTime =
    4 *
    deg(
      tanObliq2 * Math.sin(rad(2 * L0)) -
        2 * e * Math.sin(rad(M)) +
        4 * e * tanObliq2 * Math.sin(rad(M)) * Math.cos(rad(2 * L0)) -
        0.5 * tanObliq2 ** 2 * Math.sin(rad(4 * L0)) -
        1.25 * e ** 2 * Math.sin(rad(2 * M))
    );

  // Hour Angle Sunset (deg)
  const cosHA =
    Math.cos(rad(90.833)) /
      (Math.cos(rad(lat)) * Math.cos(rad(decl))) -
    Math.tan(rad(lat)) * Math.tan(rad(decl));

  if (cosHA < -1 || cosHA > 1) return null; // Midnight sun or polar night

  const HA = deg(Math.acos(cosHA));

  // Solar Noon UTC (minutes from midnight)
  const solarNoon = 720 - 4 * lon - eqTime;

  // Sunset UTC (minutes from midnight)
  return solarNoon + 4 * HA;
}

function getSunsetDate(lat: number, lon: number): Date | null {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const minutes = calcSunsetMinutesUTC(lat, lon, today);
  if (minutes === null) return null;
  return new Date(today.getTime() + minutes * 60000);
}

function formatCountdown(sunsetDate: Date): { line1: string; line2: string; passed: boolean } {
  const now = new Date();
  const diff = sunsetDate.getTime() - now.getTime();
  const sunsetTime = sunsetDate.toLocaleTimeString("cs-CZ", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (diff <= 0) {
    return { line1: "Západ slunce", line2: `${sunsetTime} — již nastal`, passed: true };
  }

  const totalMin = Math.floor(diff / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  const countdown = h > 0 ? `za ${h} h ${m} min` : `za ${m} min`;

  return {
    line1: `Západ slunce ${sunsetTime}`,
    line2: countdown,
    passed: false,
  };
}

export default function SunsetBadge({ tile }: { tile?: boolean } = {}) {
  const [info, setInfo] = useState<{ line1: string; line2: string; passed: boolean } | null>(null);
  const [sunsetDate, setSunsetDate] = useState<Date | null>(null);

  useEffect(() => {
    const compute = (lat: number, lon: number) => {
      const sd = getSunsetDate(lat, lon);
      if (sd) {
        setSunsetDate(sd);
        setInfo(formatCountdown(sd));
      }
    };

    // Use default coordinates immediately (Janov nad Nisou area)
    compute(50.72, 15.15);

    // Refine with real location if available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => compute(pos.coords.latitude, pos.coords.longitude),
        () => {},
        { timeout: 5000 }
      );
    }
  }, []);

  // Update countdown every minute
  useEffect(() => {
    if (!sunsetDate) return;
    const id = setInterval(() => setInfo(formatCountdown(sunsetDate)), 60000);
    return () => clearInterval(id);
  }, [sunsetDate]);

  if (!info) return null;

  if (tile) {
    const sunsetTime = info.line1.replace("Z\u00e1pad slunce ", "").replace(" \u2014 ji\u017e nastal", "");
    const ts = "0 1px 6px rgba(0,0,0,0.9), 0 0px 2px rgba(0,0,0,0.8)";
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "7px", height: "100%", overflow: "hidden" }}>
        <span style={{ fontSize: "1rem", lineHeight: 1, flexShrink: 0 }}>{info.passed ? "🌙" : "🌅"}</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }}>
          <span style={{ color: "white", fontSize: "0.70rem", fontWeight: 800, textShadow: ts, lineHeight: 1 }}>
            {sunsetTime}
          </span>
          <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.52rem", fontWeight: 500, lineHeight: 1.2, whiteSpace: "nowrap" }}>
            {info.passed ? "ji\u017e nastal" : info.line2} · {"Z\u00e1pad slunce"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        display: "flex",
        alignItems: "center",
        gap: "7px",
        padding: "4px 9px 4px 7px",
        zIndex: 10,
        pointerEvents: "none",
        userSelect: "none",
        background: "rgba(0,0,0,0.38)",
        borderRadius: "10px",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>
        {info.passed ? "🌙" : "🌅"}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <span style={{
          color: "rgba(255,255,255,0.82)",
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.03em",
          lineHeight: 1.3,
          textShadow: "0 1px 4px rgba(0,0,0,0.6)",
        }}>
          {info.line1}
        </span>
        <span style={{
          color: "white",
          fontSize: "0.80rem",
          fontWeight: 700,
          lineHeight: 1.2,
          textShadow: "0 1px 4px rgba(0,0,0,0.6)",
        }}>
          {info.line2}
        </span>
      </div>
    </div>
  );
}
