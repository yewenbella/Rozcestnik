import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface PageLayoutProps {
  title: string;
  backPath: string;
  children: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export default function PageLayout({ title, backPath, children, rightSlot }: PageLayoutProps) {
  const [, navigate] = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: "480px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background photo — same as Home, no transform, no fixed */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(5,15,5,0.72) 0%, rgba(5,15,5,0.88) 100%)",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(5,15,5,0.80)",
        }}
      >
        <button
          onClick={() => navigate(backPath)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "38px",
            height: "38px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <ArrowLeft size={18} strokeWidth={2.2} />
        </button>
        <h1
          style={{
            color: "white",
            fontWeight: 800,
            fontSize: "1.3rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            margin: 0,
            flex: 1,
          }}
        >
          {title}
        </h1>
        {rightSlot && (
          <div style={{ flexShrink: 0 }}>{rightSlot}</div>
        )}
      </div>

      {/* Content — scrollable, above background */}
      <div style={{ flex: 1, overflowY: "auto", position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
