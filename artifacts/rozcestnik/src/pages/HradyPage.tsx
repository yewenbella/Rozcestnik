import React from "react";
import { useLocation } from "wouter";
import heroBg from "@/assets/hero-bg.jpg";

export default function HradyPage() {
  const [, navigate] = useLocation();

  return (
    <div style={{ minHeight: "100vh", width: "100%", maxWidth: "480px", margin: "0 auto", position: "relative", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <img src={heroBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(10,25,10,0.28) 40%, rgba(10,25,10,0.62) 100%)" }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            position: "absolute", top: "16px", left: "16px",
            display: "flex", alignItems: "center", gap: "6px",
            background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px",
            padding: "6px 12px", color: "rgba(255,255,255,0.85)", fontSize: "0.78rem",
            fontWeight: 700, cursor: "pointer",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
            <path d="M10 3L5 7.5 10 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {"Zp\u011bt"}
        </button>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px 40px" }}>
          <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🏰</div>
          <h1 style={{ fontSize: "1.6rem", fontWeight: 900, color: "white", textAlign: "center", margin: "0 0 8px", textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}>
            {"Hrady a z\u00e1mky"}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", textAlign: "center", margin: 0, textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
            {"Sekce se p\u0159ipravuje\u2026"}
          </p>
        </div>
      </div>
    </div>
  );
}
