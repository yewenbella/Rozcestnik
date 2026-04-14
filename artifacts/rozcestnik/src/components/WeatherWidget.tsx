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

export default function WeatherWidget({ compact }: { compact?: boolean } = {}) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
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
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          windspeed: Math.round(data.current.windspeed_10m),
          code: data.current.weathercode,
          city,
          maxTemp: Math.round(data.daily.temperature_2m_max[0]),
          minTemp: Math.round(data.daily.temperature_2m_min[0]),
          dailyCode: data.daily.weathercode[0],
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const fallbackToIp = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.latitude && data.longitude) {
          fetchWeather(data.latitude, data.longitude);
        } else {
          fetchWeather(50.08, 14.43);
        }
      } catch {
        fetchWeather(50.08, 14.43);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fallbackToIp()
      );
    } else {
      fallbackToIp();
    }
  }, []);

  const textShadow = "0 1px 4px rgba(0,0,0,0.6)";

  if (loading) {
    if (compact) return null;
    return (
      <div style={widgetStyle}>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem" }}>
          Načítám počasí…
        </span>
      </div>
    );
  }

  if (error || !weather) return null;

  const { label, icon } = getWeatherInfo(weather.code);
  const { label: dailyLabel } = getWeatherInfo(weather.dailyCode);

  if (compact) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "7px", pointerEvents: "none", userSelect: "none" }}>
        <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>{icon}</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.03em", lineHeight: 1.3, textShadow }}>
            {weather.city} · {label}
          </span>
          <span style={{ color: "white", fontSize: "0.80rem", fontWeight: 700, lineHeight: 1.2, textShadow }}>
            {weather.temp}°C · ↑{weather.maxTemp}° ↓{weather.minTemp}°
          </span>
        </div>
      </div>
    );
  }

  return (
    <div style={widgetStyle}>
      <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }}>{icon}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }}>
        {/* Current temp + condition */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
          <span style={{ color: "white", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1 }}>
            {weather.temp}°C
          </span>
          <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.72rem" }}>{label}</span>
        </div>
        {/* Location + wind */}
        <div style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.68rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {weather.city} · 💨 {weather.windspeed} km/h
        </div>
        {/* Daily forecast */}
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.68rem", display: "flex", alignItems: "center", gap: "4px" }}>
          <span>Dnes:</span>
          <span style={{ color: "#fca5a5", fontWeight: 600 }}>↑{weather.maxTemp}°</span>
          <span style={{ color: "#93c5fd", fontWeight: 600 }}>↓{weather.minTemp}°</span>
          <span style={{ color: "rgba(255,255,255,0.45)" }}>· {dailyLabel}</span>
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
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
  boxSizing: "border-box",
};
