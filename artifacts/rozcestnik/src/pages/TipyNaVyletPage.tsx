import React from "react";
import { useLocation } from "wouter";
import { Eye, Landmark, PawPrint, Binoculars } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const tipyButtons = [
  {
    label: "ROZHLEDNY",
    icon: Eye,
    path: "/rozhledny",
    gradient: "linear-gradient(135deg, rgba(65,30,10,0.82), rgba(251,146,60,0.28))",
    border: "rgba(251,146,60,0.55)",
    glow: "#fb923c",
    accent: "#fdba74",
  },
  {
    label: "HRADY A Z\u00c1MKY",
    icon: Landmark,
    path: "/hrady",
    gradient: "linear-gradient(135deg, rgba(40,20,65,0.82), rgba(167,139,250,0.28))",
    border: "rgba(167,139,250,0.55)",
    glow: "#a78bfa",
    accent: "#c4b5fd",
  },
  {
    label: "ZOOLOGICK\u00c9 ZAHRADY",
    icon: PawPrint,
    path: "/zoo",
    gradient: "linear-gradient(135deg, rgba(10,40,30,0.82), rgba(20,184,166,0.28))",
    border: "rgba(20,184,166,0.55)",
    glow: "#14b8a6",
    accent: "#5eead4",
  },
  {
    label: "VYHL\u00cdDKY",
    icon: Binoculars,
    path: "/vyhlidky",
    gradient: "linear-gradient(135deg, rgba(10,30,60,0.82), rgba(96,165,250,0.28))",
    border: "rgba(96,165,250,0.55)",
    glow: "#60a5fa",
    accent: "#93c5fd",
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
      <div style={{
        position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)",
      }} />
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "24px", height: "24px", borderRadius: "6px",
        backgroundColor: "rgba(0,0,0,0.22)", border: "1px solid rgba(255,255,255,0.22)", flexShrink: 0,
      }}>
        <Icon size={13} color={accent} strokeWidth={2.3} />
      </div>
      <span style={{
        fontWeight: 800, color: "white", fontSize: "0.72rem",
        letterSpacing: "0.09em", textShadow: "0 1px 3px rgba(0,0,0,0.4)", whiteSpace: "nowrap",
      }}>
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

export default function TipyNaVyletPage() {
  const [, navigate] = useLocation();

  return (
    <div style={{
      minHeight: "100vh", width: "100%", maxWidth: "480px", margin: "0 auto",
      position: "relative", display: "flex", flexDirection: "column", overflow: "hidden",
    }}>
      <img src={heroBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(10,25,10,0.60) 100%)" }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        {/* Header */}
        <div style={{ padding: "16px 16px 0", display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "rgba(0,0,0,0.50)",
              border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px",
              padding: "7px 12px", color: "rgba(255,255,255,0.85)", fontSize: "0.78rem",
              fontWeight: 700, cursor: "pointer", flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
              <path d="M10 3L5 7.5 10 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {"Zp\u011bt"}
          </button>
        </div>

        {/* Title */}
        <div style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "8px" }}>
          <h1 style={{
            fontSize: "2.2rem", fontWeight: 900, color: "white",
            letterSpacing: "0.04em",
            textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)",
            margin: 0, lineHeight: 1.1,
          }}>
            {"Tipy na v\u00fdlet"}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", marginTop: "8px", fontWeight: 500 }}>
            {"Kam se dnes vydat?"}
          </p>
        </div>

        {/* Buttons */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          alignItems: "center", gap: "10px", padding: "0 20px", flex: 1,
        }}>
          {tipyButtons.map(({ label, icon: Icon, path, gradient, border, glow, accent }) => (
            <NavBtn key={label} label={label} Icon={Icon} path={path} gradient={gradient} border={border} glow={glow} accent={accent} navigate={navigate} />
          ))}
        </div>

        <div style={{ textAlign: "center", paddingBottom: "40px", paddingTop: "2px" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem", letterSpacing: "0.02em" }}>
            {"Vyberte kategorii"}
          </p>
        </div>
      </div>
    </div>
  );
}
