import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

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
        backgroundColor: "#1a2a1a",
        maxWidth: "480px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
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

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
    </div>
  );
}
