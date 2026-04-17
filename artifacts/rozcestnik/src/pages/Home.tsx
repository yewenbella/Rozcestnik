import React from "react";
import { useLocation } from "wouter";
import { Map, Mountain, Compass, UserCircle, Gamepad2, HelpCircle } from "lucide-react";
import { useUser } from "@clerk/react";
import heroBg from "@/assets/hero-bg.jpg";
import WeatherWidget from "@/components/WeatherWidget";
import SunsetBadge from "@/components/SunsetBadge";

const mainButtons = [
  {
    label: "MAPA",
    icon: Map,
    path: "/mapa",
    gradient: "linear-gradient(135deg, rgba(20,60,30,0.82), rgba(34,197,94,0.28))",
    border: "rgba(34,197,94,0.55)",
    glow: "#22c55e",
    accent: "#4ade80",
  },
  {
    label: "TURISTICK\u00c1 V\u00ddZVA DVOJIC",
    icon: Mountain,
    path: "/vyzva",
    gradient: "linear-gradient(135deg, rgba(10,40,65,0.82), rgba(56,189,248,0.28))",
    border: "rgba(56,189,248,0.55)",
    glow: "#38bdf8",
    accent: "#7dd3fc",
  },
  {
    label: "TIPY NA V\u00ddLET",
    icon: Compass,
    path: "/tipy-na-vylet",
    gradient: "linear-gradient(135deg, rgba(40,20,10,0.82), rgba(251,191,36,0.28))",
    border: "rgba(251,191,36,0.55)",
    glow: "#fbbf24",
    accent: "#fde68a",
  },
];

const extraButtons = [
  {
    label: "MINI HRA",
    icon: Gamepad2,
    path: "/hra",
    gradient: "linear-gradient(135deg, rgba(20,60,30,0.82), rgba(34,197,94,0.28))",
    border: "rgba(34,197,94,0.55)",
    glow: "#22c55e",
    accent: "#4ade80",
  },
  {
    label: "KV\u00cdZ",
    icon: HelpCircle,
    path: "/kviz",
    gradient: "linear-gradient(135deg, rgba(65,45,10,0.82), rgba(251,191,36,0.28))",
    border: "rgba(251,191,36,0.55)",
    glow: "#fbbf24",
    accent: "#fde68a",
  },
];

function NavBtn({ label, Icon, path, gradient, border, glow, accent, navigate }: {
  label: string; Icon: React.ElementType; path: string; gradient: string;
  border: string; glow: string; accent: string; navigate: (p: string) => void;
}) {
  const fontSize = "0.72rem";
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
      <span style={{ fontWeight: 800, color: "white", fontSize, letterSpacing: "0.09em", textShadow: "0 1px 3px rgba(0,0,0,0.4)", whiteSpace: "nowrap" }}>
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
  const { isSignedIn } = useUser();

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
        {/* Top bar — 3 tiles in a row */}
        <div style={{ display: "flex", gap: "7px", padding: "12px 12px 0", zIndex: 10 }}>
          {/* Počasí tile */}
          <div style={{
            flex: 1, minWidth: 0,
            background: "linear-gradient(160deg, rgba(60,70,60,0.72) 0%, rgba(20,28,20,0.82) 100%)",
            borderRadius: "10px",
            height: "60px", padding: "6px 9px", boxSizing: "border-box",
            pointerEvents: "none", userSelect: "none",
            boxShadow: "0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.5) inset, 0 3px 8px rgba(0,0,0,0.45), 1px 0 0 rgba(255,255,255,0.08) inset",
            border: "1px solid rgba(100,110,100,0.45)",
          }}>
            <WeatherWidget tile />
          </div>

          {/* Můj tým tile — center */}
          <div style={{ flex: 1, minWidth: 0, height: "60px", boxSizing: "border-box" }}>
            <button
              onClick={() => navigate(isSignedIn ? "/team" : "/sign-in")}
              style={{
                width: "100%", height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                background: "linear-gradient(160deg, rgba(60,70,60,0.72) 0%, rgba(20,28,20,0.82) 100%)",
                border: "1px solid rgba(100,110,100,0.45)", borderRadius: "10px",
                cursor: "pointer", boxSizing: "border-box",
                boxShadow: "0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.5) inset, 0 3px 8px rgba(0,0,0,0.45), 1px 0 0 rgba(255,255,255,0.08) inset",
              }}
            >
              <UserCircle size={13} color="rgba(255,255,255,0.85)" />
              {isSignedIn ? (
                <span style={{ color: "white", fontSize: "0.62rem", fontWeight: 800 }}>{"M\u016fj t\u00fdm"}</span>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.25 }}>
                  <span style={{ color: "white", fontSize: "0.60rem", fontWeight: 800 }}>{"P\u0159ihl\u00e1sit"}</span>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.53rem", fontWeight: 600 }}>{"M\u016fj t\u00fdm"}</span>
                </div>
              )}
            </button>
          </div>

          {/* Západ slunce tile */}
          <div style={{
            flex: 1, minWidth: 0,
            background: "linear-gradient(160deg, rgba(60,70,60,0.72) 0%, rgba(20,28,20,0.82) 100%)",
            borderRadius: "10px",
            height: "60px", padding: "6px 9px", boxSizing: "border-box",
            pointerEvents: "none", userSelect: "none",
            boxShadow: "0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.5) inset, 0 3px 8px rgba(0,0,0,0.45), 1px 0 0 rgba(255,255,255,0.08) inset",
            border: "1px solid rgba(100,110,100,0.45)",
          }}>
            <SunsetBadge tile />
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "60px",
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
