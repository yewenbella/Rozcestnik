import PageLayout from "@/components/PageLayout";
import { Users, CheckCircle } from "lucide-react";

const sections = [
  {
    icon: Users,
    iconColor: "#60a5fa",
    title: "Jak hrát",
    items: [
      "Každý tým tvoří dvojice",
      "Společně vybíráte a absolvujete trasy",
      "Zapisujte výsledky po každé trase",
      "Zákaz používání navigace (GPS)",
    ],
  },
  {
    icon: CheckCircle,
    iconColor: "#4ade80",
    title: "Pravidla fair play",
    items: [
      "Respektujte přírodu a turistické značení",
      "Každou trasu můžete započítat jen jednou",
      "Rozhoduje záznam v aplikaci",
    ],
  },
];

export default function PravidlaPage() {
  return (
    <PageLayout title="Pravidla" backPath="/">
      <div className="flex flex-col gap-4 py-4 px-4">
        <div
          className="rounded-2xl p-4"
          style={{
            background: "linear-gradient(135deg, rgba(74,222,128,0.12) 0%, rgba(74,222,128,0.04) 100%)",
            border: "1px solid rgba(74,222,128,0.25)",
          }}
        >
          <p className="text-white font-medium text-sm leading-relaxed">
            Turistická výzva dvojic je soutěž pro páry, rodiny i kamarády. Cílem je společně
            prozkoumávat českou přírodu a absolvovat trasy.
          </p>
        </div>

        {sections.map(({ icon: Icon, iconColor, title, items }) => (
          <div
            key={title}
            className="rounded-2xl p-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Icon size={18} color={iconColor} strokeWidth={2} />
              <h3 className="text-white font-bold text-base">{title}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="shrink-0 mt-1 rounded-full"
                    style={{ width: "6px", height: "6px", background: iconColor, marginTop: "6px" }}
                  />
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: "1.5" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
