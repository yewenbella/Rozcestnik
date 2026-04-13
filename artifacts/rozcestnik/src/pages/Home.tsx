import { useLocation } from "wouter";
import { Map, Route, Trophy, BookOpen } from "lucide-react";
import mountainBg from "@assets/Snímek_obrazovky_2026-04-13_185556_1776100605253.png";

const buttons = [
  {
    label: "MAPA",
    icon: Map,
    path: "/mapa",
    color: "from-emerald-500 to-emerald-600",
    border: "border-emerald-700",
    glow: "#10b981",
  },
  {
    label: "TRASY",
    icon: Route,
    path: "/trasy",
    color: "from-sky-500 to-sky-600",
    border: "border-sky-700",
    glow: "#0ea5e9",
  },
  {
    label: "ŽEBŘÍČEK",
    icon: Trophy,
    path: "/zebricek",
    color: "from-amber-500 to-orange-500",
    border: "border-amber-700",
    glow: "#f59e0b",
  },
  {
    label: "PRAVIDLA",
    icon: BookOpen,
    path: "/pravidla",
    color: "from-emerald-500 to-emerald-600",
    border: "border-emerald-700",
    glow: "#10b981",
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
      {/* Hero image — fills edge to edge, no border, no text overlay */}
      <div style={{ width: "100%", position: "relative", flexShrink: 0 }}>
        <img
          src={mountainBg}
          alt="Turistická krajina"
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
        {/* Only bottom fade to blend into dark background */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background: "linear-gradient(to bottom, transparent, #1a2a1a)",
          }}
        />
      </div>

      {/* Divider */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "4px", marginBottom: "4px" }}>
        <div
          style={{
            width: "64px",
            height: "3px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #ca8a04, #f59e0b)",
          }}
        />
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px 20px",
          flex: 1,
        }}
      >
        {buttons.map(({ label, icon: Icon, path, color, border, glow }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`relative flex items-center gap-3 w-full bg-gradient-to-r ${color} border-2 ${border} rounded-xl active:scale-[0.97] transition-all duration-150 group overflow-hidden`}
            style={{
              boxShadow: `0 3px 14px 0 ${glow}44, 0 1px 4px rgba(0,0,0,0.35)`,
              padding: "10px 14px",
              minHeight: "52px",
            }}
          >
            {/* Wood grain overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.08,
                pointerEvents: "none",
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 4px)",
              }}
            />
            {/* Icon box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "9px",
                backgroundColor: "rgba(0,0,0,0.2)",
                border: "1.5px solid rgba(255,255,255,0.22)",
                flexShrink: 0,
              }}
            >
              <Icon size={18} color="white" strokeWidth={2.2} />
            </div>
            {/* Label */}
            <span
              style={{
                fontWeight: 800,
                color: "white",
                fontSize: "0.95rem",
                letterSpacing: "0.11em",
                textShadow: "0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              {label}
            </span>
            {/* Arrow */}
            <div style={{ marginLeft: "auto", opacity: 0.7 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5 3l6 5-6 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Footer tagline */}
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "20px", paddingTop: "8px" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", letterSpacing: "0.02em" }}>
          Vyberte si směr a vydejte se na cestu
        </p>
      </div>
    </div>
  );
}
