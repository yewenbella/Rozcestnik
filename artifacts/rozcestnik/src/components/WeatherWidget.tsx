import { useEffect, useState, useRef } from "react";

interface WeatherData {
  temp: number;
  windspeed: number;
  code: number;
  city: string;
  sunsetMs: number;
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

function formatSunset(sunsetMs: number): string {
  const diff = sunsetMs - Date.now();
  if (diff <= 0) return "Západ nastal";
  const totalMin = Math.floor(diff / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return `Západ za ${m} min`;
  return `Západ za ${h} h ${m} min`;
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

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [sunsetLabel, setSunsetLabel] = useState<string>("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const [weatherRes, city] = await Promise.all([
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m&daily=sunset&timezone=auto&forecast_days=1`
          ),
          reverseGeocode(lat, lon),
        ]);
        const data = await weatherRes.json();
        const sunsetStr: string = data.daily?.sunset?.[0] ?? "";
        const sunsetMs = sunsetStr ? new Date(sunsetStr).getTime() : 0;
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          windspeed: Math.round(data.current.windspeed_10m),
          code: data.current.weathercode,
          city,
          sunsetMs,
        });
        if (sunsetMs) setSunsetLabel(formatSunset(sunsetMs));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const DEFAULT_LAT = 50.72;
    const DEFAULT_LON = 15.15;

    fetchWeather(DEFAULT_LAT, DEFAULT_LON);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => {},
        { timeout: 5000 }
      );
    }
  }, []);

  useEffect(() => {
    if (!weather?.sunsetMs) return;
    const tick = () => setSunsetLabel(formatSunset(weather.sunsetMs));
    timerRef.current = setInterval(tick, 30000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [weather?.sunsetMs]);

  if (loading) {
    return (
      <div style={widgetStyle}>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
          Načítám počasí…
        </span>
      </div>
    );
  }

  if (error || !weather) return null;

  const { label, icon } = getWeatherInfo(weather.code);
  const passed = weather.sunsetMs > 0 && Date.now() > weather.sunsetMs;

  return (
    <div style={widgetStyle}>
      <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>{icon}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{ color: "white", fontSize: "1.3rem", fontWeight: 700, lineHeight: 1 }}>
            {weather.temp}°C
          </span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>{label}</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem" }}>
          {weather.city} · 💨 {weather.windspeed} km/h
        </div>
        {sunsetLabel && (
          <div style={{
            color: passed ? "rgba(165,180,252,0.85)" : "rgba(253,186,116,0.9)",
            fontSize: "0.70rem",
            fontWeight: 600,
            marginTop: "1px",
          }}>
            {passed ? "🌙" : "🌅"} {sunsetLabel}
          </div>
        )}
      </div>
    </div>
  );
}

const widgetStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "220px",
  padding: "10px 14px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
  boxSizing: "border-box",
};
