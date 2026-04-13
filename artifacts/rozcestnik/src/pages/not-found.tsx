import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1a2a1a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        gap: "16px",
        padding: "24px",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <div style={{ fontSize: "3.5rem" }}>🧭</div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Stránka nenalezena</h1>
      <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
        Zdá se, že jste zabloudili na neznámé cestě.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "12px 28px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          color: "white",
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Zpět na rozcestník
      </button>
    </div>
  );
}
