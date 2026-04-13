import { useLocation } from "wouter";
import { Map, Route, Trophy, BookOpen } from "lucide-react";
import mountainBg from "@assets/Snímek_obrazovky_2026-04-13_185556_1776100605253.png";

const buttons = [
  {
    label: "MAPA",
    icon: Map,
    path: "/mapa",
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    border: "#15803d",
    glow: "#22c55e",
  },
  {
    label: "TRASY",
    icon: Route,
    path: "/trasy",
    gradient: "linear-gradient(135deg, #38bdf8, #0284c7)",
    border: "#0369a1",
    glow: "#38bdf8",
  },
  {
    label: "ŽEBŘÍČEK",
    icon: Trophy,
    path: "/zebricek",
    gradient: "linear-gradient(135deg, #fb923c, #ea580c)",
    border: "#c2410c",
    glow: "#fb923c",
  },
  {
    label: "PRAVIDLA",
    icon: BookOpen,
    path: "/pravidla",
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    border: "#15803d",
    glow: "#22c55e",
  },
];

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1a2a1a",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      {/* Hero: only show the top scenic/title part of the mockup image, crop the rest */}
      <div
        style={{
          width: "100%",
          height: "230px",
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <img
          src={mountainBg}
          alt="Turistická krajina"
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
        {/* Fade bottom so it blends into dark background */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "70px",
            background: "linear-gradient(to bottom, transparent, #1a2a1a)",
          }}
        />
      </div>

      {/* HTML buttons — the real interactive ones */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          padding: "8px 18px 0 18px",
          flex: 1,
        }}
      >
        {buttons.map(({ label, icon: Icon, path, gradient, border, glow }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "100%",
              background: gradient,
              border: `2px solid ${border}`,
              borderRadius: "14px",
              padding: "9px 13px",
              minHeight: "48px",
              cursor: "pointer",
              boxShadow: `0 3px 12px 0 ${glow}40, 0 1px 3px rgba(0,0,0,0.3)`,
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
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                backgroundColor: "rgba(0,0,0,0.2)",
                border: "1.5px solid rgba(255,255,255,0.2)",
                flexShrink: 0,
              }}
            >
              <Icon size={16} color="white" strokeWidth={2.3} />
            </div>
            {/* Label */}
            <span
              style={{
                fontWeight: 800,
                color: "white",
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                textShadow: "0 1px 3px rgba(0,0,0,0.35)",
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

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "18px", paddingTop: "10px" }}>
        <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.75rem", letterSpacing: "0.02em" }}>
          Vyberte si směr a vydejte se na cestu
        </p>
      </div>
    </div>
  );
}
