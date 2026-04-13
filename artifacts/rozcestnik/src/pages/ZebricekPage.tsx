import PageLayout from "@/components/PageLayout";
import { Medal } from "lucide-react";

const teams = [
  { rank: 1, name: "Radka & Tomáš", points: 2840, trasy: 12, badge: "🥇" },
  { rank: 2, name: "Lucie & Martin", points: 2510, trasy: 10, badge: "🥈" },
  { rank: 3, name: "Eva & Petr", points: 2190, trasy: 9, badge: "🥉" },
  { rank: 4, name: "Jana & Ondra", points: 1870, trasy: 8, badge: null },
  { rank: 5, name: "Veronika & Filip", points: 1650, trasy: 7, badge: null },
  { rank: 6, name: "Klára & Jakub", points: 1410, trasy: 6, badge: null },
  { rank: 7, name: "Monika & Lukáš", points: 1200, trasy: 5, badge: null },
];

export default function ZebricekPage() {
  return (
    <PageLayout title="Žebříček" backPath="/">
      <div className="flex flex-col gap-3 py-4 px-4">
        <div
          className="rounded-2xl p-4 mb-1"
          style={{
            background: "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)",
            border: "1px solid rgba(245,158,11,0.3)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Medal size={18} color="#f59e0b" />
            <span className="text-white font-bold text-sm">Sezóna 2026</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem" }}>
            Body se získávají za splněné trasy a výzvy
          </p>
        </div>

        {teams.map((t) => (
          <div
            key={t.rank}
            className="flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: t.rank <= 3 ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)",
              border: t.rank === 1 ? "1px solid rgba(245,158,11,0.4)" : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="flex items-center justify-center font-black text-lg shrink-0"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background:
                  t.rank === 1
                    ? "linear-gradient(135deg, #f59e0b, #d97706)"
                    : t.rank === 2
                    ? "linear-gradient(135deg, #94a3b8, #64748b)"
                    : t.rank === 3
                    ? "linear-gradient(135deg, #a16207, #78350f)"
                    : "rgba(255,255,255,0.1)",
                color: t.rank <= 3 ? "white" : "rgba(255,255,255,0.6)",
                fontSize: "0.85rem",
              }}
            >
              {t.badge ? t.badge : `#${t.rank}`}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm truncate">{t.name}</p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.73rem" }}>
                {t.trasy} tras
              </p>
            </div>
            <div className="text-right shrink-0">
              <p
                className="font-extrabold text-base"
                style={{ color: t.rank === 1 ? "#f59e0b" : t.rank === 2 ? "#94a3b8" : t.rank === 3 ? "#cd7c41" : "#60a5fa" }}
              >
                {t.points.toLocaleString("cs")}
              </p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.68rem" }}>bodů</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
