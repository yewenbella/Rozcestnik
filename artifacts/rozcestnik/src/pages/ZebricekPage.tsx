import PageLayout from "@/components/PageLayout";
import { Trophy } from "lucide-react";

export default function ZebricekPage() {
  return (
    <PageLayout title="Žebříček" backPath="/">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
          gap: "16px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "20px",
            background: "rgba(245,158,11,0.12)",
            border: "1.5px solid rgba(245,158,11,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Trophy size={28} color="#f59e0b" strokeWidth={1.8} />
        </div>
        <h2 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>
          Žebříček je prázdný
        </h2>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
          Výsledky se zobrazí, jakmile dvojice začnou plnit trasy.
        </p>
      </div>
    </PageLayout>
  );
}
