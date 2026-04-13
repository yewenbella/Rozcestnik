import PageLayout from "@/components/PageLayout";
import { Mountain, Clock, Flame } from "lucide-react";

const trasy = [
  {
    name: "Lesní cesta u potoka",
    distance: "8 km",
    time: "2,5 hod",
    difficulty: "Lehká",
    diffColor: "#4ade80",
    diffBg: "rgba(74,222,128,0.12)",
    elevation: "120 m",
  },
  {
    name: "Horský hřeben Červenohorka",
    distance: "16 km",
    time: "5 hod",
    difficulty: "Střední",
    diffColor: "#fb923c",
    diffBg: "rgba(251,146,60,0.12)",
    elevation: "680 m",
  },
  {
    name: "Výstup na Lysou horu",
    distance: "22 km",
    time: "7 hod",
    difficulty: "Náročná",
    diffColor: "#f87171",
    diffBg: "rgba(248,113,113,0.12)",
    elevation: "1100 m",
  },
  {
    name: "Okruh kolem Máchova jezera",
    distance: "12 km",
    time: "3,5 hod",
    difficulty: "Lehká",
    diffColor: "#4ade80",
    diffBg: "rgba(74,222,128,0.12)",
    elevation: "80 m",
  },
  {
    name: "Přechod Šumavského hřebene",
    distance: "34 km",
    time: "2 dny",
    difficulty: "Náročná",
    diffColor: "#f87171",
    diffBg: "rgba(248,113,113,0.12)",
    elevation: "1450 m",
  },
];

export default function TrasyPage() {
  return (
    <PageLayout title="Trasy" backPath="/">
      <div className="flex flex-col gap-3 py-4 px-4">
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>
          Vyberte trasu pro vaši dvojici
        </p>
        {trasy.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl p-4"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-white font-bold text-base leading-snug flex-1">{t.name}</h3>
              <span
                className="shrink-0 text-xs font-bold px-2 py-1 rounded-full"
                style={{ color: t.diffColor, backgroundColor: t.diffBg }}
              >
                {t.difficulty}
              </span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <Mountain size={14} color="#60a5fa" strokeWidth={2} />
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem" }}>{t.distance}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} color="#a78bfa" strokeWidth={2} />
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem" }}>{t.time}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Flame size={14} color="#fb923c" strokeWidth={2} />
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem" }}>{t.elevation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
