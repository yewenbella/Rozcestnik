import React from "react";
import { useLocation } from "wouter";
import { Binoculars } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function VyhlidkyPage() {
  const [, navigate] = useLocation();

  return (
    <div style={{
      minHeight: "100vh", width: "100%", maxWidth: "480px", margin: "0 auto",
      position: "relative", display: "flex", flexDirection: "column", overflow: "hidden",
    }}>
      <img src={heroBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,20,40,0.85) 100%)" }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{ padding: "16px 16px 0" }}>
          <button
            onClick={() => navigate("/tipy-na-vylet")}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "rgba(0,0,0,0.50)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px", padding: "7px 12px", color: "rgba(255,255,255,0.85)",
              fontSize: "0.78rem", fontWeight: 700, cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
              <path d="M10 3L5 7.5 10 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {"Zp\u011bt"}
          </button>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", padding: "40px 24px" }}>
          <div style={{
            width: "80px", height: "80px", borderRadius: "50%",
            background: "rgba(96,165,250,0.15)", border: "2px solid rgba(96,165,250,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Binoculars size={36} color="#93c5fd" />
          </div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "white", fontWeight: 900, fontSize: "1.6rem", margin: "0 0 10px", letterSpacing: "0.04em" }}>
              {"VYHL\u00cdDKY"}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
              {"Sekce se p\u0159ipravuje.\nBrzy zde najdete seznam nejkr\u00e1sn\u011bj\u0161\u00edch vyhl\u00eddek v\u00a0\u010cesk\u00e9 republice."}
            </p>
          </div>
          <div style={{
            background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.3)",
            borderRadius: "12px", padding: "14px 20px",
            color: "#93c5fd", fontSize: "0.82rem", fontWeight: 600, textAlign: "center",
          }}>
            {"🔭 Připravujeme pro vás seznam výhledů a vyhledávačů"}
          </div>
        </div>
      </div>
    </div>
  );
}
