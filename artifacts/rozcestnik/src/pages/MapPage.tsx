import PageLayout from "@/components/PageLayout";
import { MapPin } from "lucide-react";

export default function MapPage() {
  return (
    <PageLayout title="Mapa" backPath="/">
      <div className="flex flex-col items-center gap-5 py-6 px-4">
        <div
          className="rounded-2xl overflow-hidden w-full"
          style={{
            height: "340px",
            background: "linear-gradient(135deg, #1a3320 0%, #2d5a27 50%, #1a3320 100%)",
            border: "2px solid #3a6b30",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <MapPin size={52} color="#4ade80" strokeWidth={1.5} />
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", textAlign: "center", padding: "0 24px" }}>
            Interaktivní mapa tras bude brzy k dispozici
          </p>
        </div>

        <div className="w-full rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <h2 className="text-white font-bold text-lg mb-3">Oblíbené lokace</h2>
          {[
            { name: "Šumava – Pramenný kraj", km: "42 km", difficulty: "Střední" },
            { name: "Beskydy – Lysá hora", km: "28 km", difficulty: "Náročná" },
            { name: "Krkonoše – Sněžka", km: "35 km", difficulty: "Náročná" },
          ].map((loc) => (
            <div
              key={loc.name}
              className="flex items-center justify-between py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div>
                <p className="text-white font-medium text-sm">{loc.name}</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>{loc.difficulty}</p>
              </div>
              <span
                className="font-bold text-sm"
                style={{
                  color: "#4ade80",
                  background: "rgba(74,222,128,0.12)",
                  padding: "4px 10px",
                  borderRadius: "999px",
                }}
              >
                {loc.km}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
