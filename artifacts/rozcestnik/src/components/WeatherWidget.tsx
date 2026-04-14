import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  windspeed: number;
  code: number;
  city: string;
  maxTemp: number;
  minTemp: number;
  dailyCode: number;
}

const CACHE_KEY = "rozcestnik_weather_v2";
const COORD_KEY = "rozcestnik_coords_v1";
const CACHE_TTL = 30 * 60 * 1000;
const COORD_TTL = 6 * 60 * 60 * 1000;

interface CachedWeather {
  data: WeatherData;
  ts: number;
}

interface CachedCoords {
  lat: number;
  lon: number;
  ts: number;
}

function readCache(): WeatherData | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const c: CachedWeather = JSON.parse(raw);
    if (Date.now() - c.ts < CACHE_TTL) return c.data;
    return null;
  } catch {
    return null;
  }
}

function writeCache(data: WeatherData) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {}
}

function readCoords(): { lat: number; lon: number } | null {
  try {
    const raw = localStorage.getItem(COORD_KEY);
    if (!raw) return null;
    const c: CachedCoords = JSON.parse(raw);
    if (Date.now() - c.ts < COORD_TTL) return { lat: c.lat, lon: c.lon };
    return null;
  } catch {
    return null;
  }
}

function writeCoords(lat: number, lon: number) {
  try {
    localStorage.setItem(COORD_KEY, JSON.stringify({ lat, lon, ts: Date.now() }));
  } catch {}
}

function getWeatherInfo(code: number): { label: string; icon: string } {
  if (code === 0) return { label: "Jasno", icon: "☀️" };
  if (code <= 2) return { label: "Polojasno", icon: "🌤️" };
  if (code === 3) return { label: "Oblačno", icon: "☁️" };
  if (code <= 48) return { label: "Mlha", icon: "🌫️" };
  if (code <= 55) return { label: "Mrholení", icon: "🌦️" };
  if (code <= 65) return { label: "Déšť", icon: "🌧️" };
  if (code <= 77) return { label: "Sněžení", icon: "🌨️" };
  if (code <= 82) return { label: "Přeháňky", icon: "🌦️" };
  if (code <= 99) return { label: "Bouřka", icon: "⛈️" };
  return { label: "Proměnlivě", icon: "🌡️" };
}

async function reverseGeocode(lat: number, lon: number): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=cs`
    );
    const data = await res.json();
    return (
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      data.address?.county ||
      "Vaše poloha"
    );
  } catch {
    return "Vaše poloha";
  }
}

async function fetchWeatherData(lat: number, lon: number): Promise<WeatherData> {
  const [weatherRes, city] = await Promise.all([
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,weathercode,windspeed_10m` +
      `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
      `&timezone=auto&forecast_days=1`
    ),
    reverseGeocode(lat, lon),
  ]);
  const data = await weatherRes.json();
  return {
    temp: Math.round(data.current.temperature_2m),
    windspeed: Math.round(data.current.windspeed_10m),
    code: data.current.weathercode,
    city,
    maxTemp: Math.round(data.daily.temperature_2m_max[0]),
    minTemp: Math.round(data.daily.temperature_2m_min[0]),
    dailyCode: data.daily.weathercode[0],
  };
}

async function getCoords(): Promise<{ lat: number; lon: number }> {
  const cached = readCoords();
  if (cached) return cached;

  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = { lat: pos.coords.latitude, lon: pos.coords.longitude };
          writeCoords(coords.lat, coords.lon);
          resolve(coords);
        },
        async () => {
          try {
            const res = await fetch("https://ipapi.co/json/");
            const d = await res.json();
            if (d.latitude && d.longitude) {
              writeCoords(d.latitude, d.longitude);
              resolve({ lat: d.latitude, lon: d.longitude });
            } else {
              resolve({ lat: 50.08, lon: 14.43 });
            }
          } catch {
            resolve({ lat: 50.08, lon: 14.43 });
          }
        },
        { timeout: 5000, maximumAge: 600000 }
      );
    } else {
      resolve({ lat: 50.08, lon: 14.43 });
    }
  });
}

export default function WeatherWidget({ compact, tile }: { compact?: boolean; tile?: boolean } = {}) {
  const cached = readCache();
  const [weather, setWeather] = useState<WeatherData | null>(cached);
  const [loading, setLoading] = useState(cached === null);

  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      try {
        const coords = await getCoords();
        if (cancelled) return;
        const data = await fetchWeatherData(coords.lat, coords.lon);
        if (cancelled) return;
        writeCache(data);
        setWeather(data);
      } catch {
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    const stale = (() => {
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return true;
        const c: CachedWeather = JSON.parse(raw);
        return Date.now() - c.ts >= CACHE_TTL;
      } catch { return true; }
    })();

    if (stale) {
      refresh();
    } else {
      setLoading(false);
    }

    return () => { cancelled = true; };
  }, []);

  const textShadow = "0 1px 6px rgba(0,0,0,0.9), 0 0px 2px rgba(0,0,0,0.8)";

  if (loading && !weather) {
    if (compact || tile) return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.68rem" }}>…</span>
      </div>
    );
    return (
      <div style={widgetStyle}>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem" }}>
          {"Na\u010d\u00edt\u00e1m po\u010das\u00ed\u2026"}
        </span>
      </div>
    );
  }

  if (!weather) return null;

  const { label, icon } = getWeatherInfo(weather.code);
  const { label: dailyLabel } = getWeatherInfo(weather.dailyCode);

  if (tile) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "7px", height: "100%", overflow: "hidden" }}>
        <span style={{ fontSize: "1.1rem", lineHeight: 1, flexShrink: 0 }}>{icon}</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
            <span style={{ color: "white", fontSize: "0.78rem", fontWeight: 800, textShadow }}>
              {weather.temp}{"°C"}
            </span>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.56rem", fontWeight: 600 }}>{label}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <span style={{ color: "#fca5a5", fontSize: "0.57rem", fontWeight: 700, textShadow }}>{"↑"}{weather.maxTemp}{"°"}</span>
            <span style={{ color: "#93c5fd", fontSize: "0.57rem", fontWeight: 700, textShadow }}>{"↓"}{weather.minTemp}{"°"}</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.53rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {weather.city}
          </span>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div style={{
        display: "flex", alignItems: "center", gap: "7px", pointerEvents: "none", userSelect: "none",
        background: "rgba(0,0,0,0.38)", borderRadius: "10px", padding: "4px 9px 4px 7px",
      }}>
        <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>{icon}</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <span style={{ color: "white", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.03em", lineHeight: 1.3, textShadow }}>
            {weather.city} {"\u00b7"} {label}
          </span>
          <span style={{ fontSize: "0.80rem", fontWeight: 700, lineHeight: 1.2, display: "flex", gap: "4px", alignItems: "baseline" }}>
            <span style={{ color: "white", textShadow }}>{weather.temp}{"°C"}</span>
            <span style={{ color: "rgba(255,255,255,0.7)", textShadow }}>{"\u00b7"}</span>
            <span style={{ color: "#fca5a5", textShadow }}>{"↑"}{weather.maxTemp}{"°"}</span>
            <span style={{ color: "#93c5fd", textShadow }}>{"↓"}{weather.minTemp}{"°"}</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div style={widgetStyle}>
      <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }}>{icon}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
          <span style={{ color: "white", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1 }}>
            {weather.temp}{"°C"}
          </span>
          <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.72rem" }}>{label}</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.68rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {weather.city} {"\u00b7"} {"💨"} {weather.windspeed} {"km/h"}
        </div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.68rem", display: "flex", alignItems: "center", gap: "4px" }}>
          <span>{"Dnes:"}</span>
          <span style={{ color: "#fca5a5", fontWeight: 600 }}>{"↑"}{weather.maxTemp}{"°"}</span>
          <span style={{ color: "#93c5fd", fontWeight: 600 }}>{"↓"}{weather.minTemp}{"°"}</span>
          <span style={{ color: "rgba(255,255,255,0.45)" }}>{"\u00b7"} {dailyLabel}</span>
        </div>
      </div>
    </div>
  );
}

const widgetStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "220px",
  padding: "9px 13px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
  boxSizing: "border-box",
};
