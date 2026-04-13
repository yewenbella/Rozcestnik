import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  windspeed: number;
  code: number;
  city: string;
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

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const [weatherRes, city] = await Promise.all([
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m&timezone=auto`
          ),
          reverseGeocode(lat, lon),
        ]);
        const data = await weatherRes.json();
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          windspeed: Math.round(data.current.windspeed_10m),
          code: data.current.weathercode,
          city,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(50.08, 14.43)
      );
    } else {
      fetchWeather(50.08, 14.43);
    }
  }, []);

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

  return (
    <div style={widgetStyle}>
      <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>{icon}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{ color: "white", fontSize: "1.3rem", fontWeight: 700, lineHeight: 1 }}>
            {weather.temp}°C
          </span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>{label}</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem" }}>
          {weather.city} · 💨 {weather.windspeed} km/h
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
  padding: "10px 14px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
  boxSizing: "border-box",
};
