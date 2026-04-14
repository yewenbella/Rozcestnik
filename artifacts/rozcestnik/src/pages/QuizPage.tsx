import { HelpCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function QuizPage() {
  return (
    <PageLayout title="KVÍZ">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
          gap: "16px",
          minHeight: "60vh",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "rgba(251,191,36,0.15)",
            border: "2px solid rgba(251,191,36,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HelpCircle size={36} color="#fbbf24" />
        </div>
        <h2
          style={{
            color: "white",
            fontWeight: 800,
            fontSize: "1.3rem",
            letterSpacing: "0.05em",
            margin: 0,
          }}
        >
          Kvíz
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.95rem",
            textAlign: "center",
            maxWidth: "280px",
            lineHeight: 1.5,
          }}
        >
          Turistický kvíz se připravuje. Brzy zde najdete otázky z přírody, tras a zajímavostí.
        </p>
      </div>
    </PageLayout>
  );
}
