import React from "react";
import { useLocation } from "wouter";
import { Route, Trophy, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const vyzvaButtons = [
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
    label: "\u017dEBŘ\u00cd\u010cEK",
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
];

function NavBtn({ label, Icon, path, gradient, border, glow, accent, navigate }: {
  label: string; Icon: React.ElementType; path: string; gradient: string;
  border: string; glow: string; accent: string; navigate: (p: string) => void;
}) {
  return (
    <button
      onClick={() => navigate(path)}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "220px",
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
      <span style={{ fontWeight: 800, color: "white", fontSize: "0.78rem", letterSpacing: "0.12em", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
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

export default function VyzvaPage() {
  const [, navigate] = useLocation();

  return (
    <div style={{ minHeight: "100vh", width: "100%", maxWidth: "480px", margin: "0 auto", position: "relative", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <img src={heroBg} alt="Turistická krajina" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(10,25,10,0.28) 40%, rgba(10,25,10,0.55) 100%)" }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          style={{
            position: "absolute", top: "16px", left: "16px",
            display: "flex", alignItems: "center", gap: "6px",
            background: "rgba(0,0,0,0.50)",
            border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px",
            padding: "6px 12px", color: "rgba(255,255,255,0.85)", fontSize: "0.78rem",
            fontWeight: 700, cursor: "pointer", letterSpacing: "0.05em",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
            <path d="M10 3L5 7.5 10 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Zpět
        </button>

        {/* Title */}
        <div style={{ textAlign: "center", paddingTop: "115px", paddingBottom: "8px" }}>
          <h1 style={{ fontSize: "2.1rem", fontWeight: 900, color: "white", letterSpacing: "0.03em", textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)", margin: 0, lineHeight: 1.15 }}>
            {"Turistick\u00e1 v\u00fdzva"}
          </h1>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "0 20px", flex: 1 }}>
          {vyzvaButtons.map(({ label, icon: Icon, path, gradient, border, glow, accent }) => (
            <NavBtn key={label} label={label} Icon={Icon} path={path} gradient={gradient} border={border} glow={glow} accent={accent} navigate={navigate} />
          ))}
        </div>

        <div style={{ textAlign: "center", paddingBottom: "40px" }}>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.72rem", letterSpacing: "0.02em" }}>
            Vyberte si sekci
          </p>
        </div>
      </div>
    </div>
  );
}
