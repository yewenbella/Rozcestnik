import PageLayout from "@/components/PageLayout";
import { Route } from "lucide-react";

export default function TrasyPage() {
  return (
    <PageLayout title="Trasy" backPath="/">
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
            background: "rgba(14,165,233,0.12)",
            border: "1.5px solid rgba(14,165,233,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Route size={28} color="#38bdf8" strokeWidth={1.8} />
        </div>
        <h2 style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>
          Žádné trasy zatím
        </h2>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
          Trasy budou přidány brzy.
        </p>
      </div>
    </PageLayout>
  );
}
