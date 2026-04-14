import { useLocation } from "wouter";
import { Map, Route, Trophy, BookOpen, UserCircle, Gamepad2 } from "lucide-react";
import { Show } from "@clerk/react";
import heroBg from "@/assets/hero-bg.jpg";
import WeatherWidget from "@/components/WeatherWidget";
import SunsetBadge from "@/components/SunsetBadge";

const buttons = [
  {
    label: "MAPA",
    icon: Map,
    path: "/mapa",
    gradient: "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(22,163,74,0.12))",
    border: "rgba(34,197,94,0.40)",
    glow: "#22c55e",
    accent: "#4ade80",
  },
  {
    label: "TRASY",
    icon: Route,
    path: "/trasy",
    gradient: "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(2,132,199,0.12))",
    border: "rgba(56,189,248,0.40)",
    glow: "#38bdf8",
    accent: "#7dd3fc",
  },
  {
    label: "ŽEBŘÍČEK",
    icon: Trophy,
    path: "/zebricek",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.18), rgba(234,88,12,0.12))",
    border: "rgba(251,146,60,0.40)",
    glow: "#fb923c",
    accent: "#fdba74",
  },
  {
    label: "PRAVIDLA",
    icon: BookOpen,
    path: "/pravidla",
    gradient: "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(22,163,74,0.12))",
    border: "rgba(34,197,94,0.40)",
    glow: "#22c55e",
    accent: "#4ade80",
  },
  {
    label: "MINI HRA",
    icon: Gamepad2,
    path: "/hra",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.18), rgba(126,34,206,0.12))",
    border: "rgba(168,85,247,0.40)",
    glow: "#a855f7",
    accent: "#d8b4fe",
  },
];

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "480px",
        margin: "0 auto",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Full-screen background photo */}
      <img
        src={heroBg}
        alt="Turistická krajina"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Light gradient overlay — subtle, keeps photo bright */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(10,25,10,0.28) 40%, rgba(10,25,10,0.55) 100%)",
        }}
      />

      {/* Content — sits on top of the photo */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <SunsetBadge />
        {/* Title */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "120px",
            paddingBottom: "8px",
          }}
        >
          <h1
            style={{
              fontSize: "2.1rem",
              fontWeight: 900,
              color: "white",
              letterSpacing: "0.04em",
              textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Rozcestník
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "0.92rem",
              fontWeight: 700,
              marginTop: "4px",
              letterSpacing: "0.05em",
              textShadow: "0 1px 6px rgba(0,0,0,0.6)",
            }}
          >
            Turistická výzva dvojic
          </p>

          {/* Auth badge */}
          <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
            <Show when="signed-out">
              <button
                onClick={() => navigate("/sign-in")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.76rem",
                  cursor: "pointer",
                }}
              >
                <UserCircle size={13} />
                Přihlásit se / Tým
              </button>
            </Show>
            <Show when="signed-in">
              <button
                onClick={() => navigate("/team")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  border: "1px solid rgba(74,222,128,0.4)",
                  background: "rgba(34,197,94,0.15)",
                  backdropFilter: "blur(8px)",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.76rem",
                  cursor: "pointer",
                }}
              >
                <UserCircle size={13} color="#4ade80" />
                Můj tým
              </button>
            </Show>
          </div>
        </div>

        {/* Buttons — centered vertically in remaining space */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            padding: "0 20px",
            flex: 1,
          }}
        >
          {buttons.map(({ label, icon: Icon, path, gradient, border, glow, accent }) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "220px",
                background: gradient,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: `1.5px solid ${border}`,
                borderRadius: "10px",
                padding: "12px 14px",
                minHeight: "52px",
                cursor: "pointer",
                boxShadow: `0 4px 16px 0 ${glow}30, inset 0 1px 0 rgba(255,255,255,0.18)`,
                overflow: "hidden",
              }}
            >
              {/* Wood grain texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.07,
                  pointerEvents: "none",
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)",
                }}
              />
              {/* Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(0,0,0,0.22)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  flexShrink: 0,
                }}
              >
                <Icon size={13} color={accent} strokeWidth={2.3} />
              </div>
              {/* Label */}
              <span
                style={{
                  fontWeight: 800,
                  color: "white",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                {label}
              </span>
              {/* Arrow */}
              <div style={{ marginLeft: "auto", opacity: 0.65 }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M5 3l5 4.5L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Weather */}
        <div style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
          <WeatherWidget />
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", paddingBottom: "20px", paddingTop: "4px" }}>
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.75rem", letterSpacing: "0.02em" }}>
            Vyberte si směr a vydejte se na cestu
          </p>
        </div>
      </div>
    </div>
  );
}
