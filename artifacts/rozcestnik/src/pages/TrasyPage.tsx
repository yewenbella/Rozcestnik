import PageLayout from "@/components/PageLayout";
import { Route, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";

const trasy = [
  { id: 1, label: "Trasa č.1" },
];

export default function TrasyPage() {
  const [, navigate] = useLocation();

  return (
    <PageLayout title="Trasy" backPath="/">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
        {trasy.map((trasa) => (
          <button
            key={trasa.id}
            onClick={() => navigate(`/trasy/${trasa.id}`)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "16px 18px",
              borderRadius: "16px",
              border: "1px solid rgba(14,165,233,0.30)",
              background: "rgba(14,165,233,0.10)",
              backdropFilter: "blur(12px)",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "12px",
                  background: "rgba(14,165,233,0.15)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Route size={18} color="#38bdf8" strokeWidth={1.8} />
              </div>
              <span style={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>
                {trasa.label}
              </span>
            </div>
            <ChevronRight size={18} color="rgba(255,255,255,0.4)" />
          </button>
        ))}
      </div>
    </PageLayout>
  );
}
