import React from "react";
import { useLocation } from "wouter";
import { Map, Mountain, Landmark, Eye, UserCircle, Gamepad2, HelpCircle } from "lucide-react";
import { Show } from "@clerk/react";
import heroBg from "@/assets/hero-bg.jpg";
import WeatherWidget from "@/components/WeatherWidget";
import SunsetBadge from "@/components/SunsetBadge";

const mainButtons = [
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
    label: "TURISTICK\u00c1 V\u00ddZVA DVOJIC",
    icon: Mountain,
    path: "/vyzva",
    gradient: "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(2,132,199,0.12))",
    border: "rgba(56,189,248,0.40)",
    glow: "#38bdf8",
    accent: "#7dd3fc",
  },
  {
    label: "ROZHLEDNY",
    icon: Eye,
    path: "/rozhledny",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.18), rgba(180,83,9,0.12))",
    border: "rgba(251,146,60,0.40)",
    glow: "#fb923c",
    accent: "#fdba74",
  },
  {
    label: "HRADY A Z\u00c1MKY",
    icon: Landmark,
    path: "/hrady",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.18), rgba(109,40,217,0.12))",
    border: "rgba(167,139,250,0.40)",
    glow: "#a78bfa",
    accent: "#c4b5fd",
  },
];

const extraButtons = [
  {
    label: "MINI HRA",
    icon: Gamepad2,
    path: "/hra",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.18), rgba(126,34,206,0.12))",
    border: "rgba(168,85,247,0.40)",
    glow: "#a855f7",
    accent: "#d8b4fe",
  },
  {
    label: "KVÍZ",
    icon: HelpCircle,
    path: "/kviz",
    gradient: "linear-gradient(135deg, rgba(251,191,36,0.18), rgba(217,119,6,0.12))",
    border: "rgba(251,191,36,0.40)",
    glow: "#fbbf24",
    accent: "#fde68a",
  },
];

function NavBtn({ label, Icon, path, gradient, border, glow, accent, navigate }: {
  label: string; Icon: React.ElementType; path: string; gradient: string;
  border: string; glow: string; accent: string; navigate: (p: string) => void;
}) {
  const fontSize = label.length > 14 ? "0.63rem" : "0.78rem";
  return (
    <button
      onClick={() => navigate(path)}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "min(280px, 100%)",
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
      <div style={{ position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)" }}
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px",
        borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.22)", border: "1px solid rgba(255,255,255,0.22)", flexShrink: 0 }}>
        <Icon size={13} color={accent} strokeWidth={2.3} />
      </div>
      <span style={{ fontWeight: 800, color: "white", fontSize, letterSpacing: label.length > 14 ? "0.07em" : "0.12em", textShadow: "0 1px 3px rgba(0,0,0,0.4)", whiteSpace: "nowrap" }}>
        {label}
      </span>
      <div style={{ marginLeft: "auto", opacity: 0.65 }}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M5 3l5 4.5L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}

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
        {/* Weather — top-left corner */}
        <div style={{ position: "absolute", top: "16px", left: "16px", zIndex: 10 }}>
          <WeatherWidget compact />
        </div>

        {/* Team button — top-center */}
        <div style={{ position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <Show when="signed-out">
            <button
              onClick={() => navigate("/sign-in")}
              style={{
                display: "flex", alignItems: "center", gap: "5px",
                padding: "5px 11px", borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(0,0,0,0.32)",
                backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                color: "rgba(255,255,255,0.82)", fontSize: "0.72rem",
                fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              <UserCircle size={12} color="rgba(255,255,255,0.75)" />
              {"P\u0159ihl\u00e1sit se / T\u00fdm"}
            </button>
          </Show>
          <Show when="signed-in">
            <button
              onClick={() => navigate("/team")}
              style={{
                display: "flex", alignItems: "center", gap: "5px",
                padding: "5px 11px", borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(0,0,0,0.32)",
                backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                color: "rgba(255,255,255,0.82)", fontSize: "0.72rem",
                fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              <UserCircle size={12} color="rgba(255,255,255,0.75)" />
              {"M\u016fj t\u00fdm"}
            </button>
          </Show>
        </div>

        <SunsetBadge />

        {/* Title */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "115px",
            paddingBottom: "8px",
          }}
        >
          <h1
            style={{
              fontSize: "2.9rem",
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
        </div>

        {/* Main buttons — centered in remaining space */}
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
          {mainButtons.map(({ label, icon: Icon, path, gradient, border, glow, accent }) => (
            <NavBtn key={label} label={label} Icon={Icon} path={path} gradient={gradient} border={border} glow={glow} accent={accent} navigate={navigate} />
          ))}
        </div>

        {/* Extra buttons (Mini hra + Kvíz) — bottom */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            padding: "0 20px 90px",
          }}
        >
          <div style={{ width: "220px", height: "1px", background: "rgba(255,255,255,0.11)", marginBottom: "4px" }} />
          {extraButtons.map(({ label, icon: Icon, path, gradient, border, glow, accent }) => (
            <NavBtn key={label} label={label} Icon={Icon} path={path} gradient={gradient} border={border} glow={glow} accent={accent} navigate={navigate} />
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", paddingBottom: "16px", paddingTop: "2px" }}>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.72rem", letterSpacing: "0.02em" }}>
            Vyberte si směr a vydejte se na cestu
          </p>
        </div>
      </div>
    </div>
  );
}
