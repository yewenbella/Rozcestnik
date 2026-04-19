import { Info, ExternalLink, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const wikiText =
  "Malá Skála je obec v okrese Jablonec nad Nisou v Libereckém kraji, rozkládající se v romantickém údolí řeky Jizery. Okolí tvoří rozsáhlé skalní město z pískovcových skal, které lákají turisty, horolezce i milovníky přírody po celý rok. Dominantou obce je hrad Vranov, hovorově nazývaný Pantheon, postavený v romantickém slohu v 19. století rodinou Rohanů přímo na skalnatém ostrohu nad Jizerou. Malá Skála je turisticky oblíbenou destinací zejména díky vyhlídce Kde domov můj, která nabízí panoramatický výhled na meandrující Jizeru a zalesněné skalnaté svahy.";

const zajimavosti = [
  {
    emoji: "🏰",
    text: "Hrad Vranov nad Malou Skálou, zvaný Pantheon, byl vybudován v romantickém slohu v 19. století rodinou Rohanů. Stojí přímo na skalnatém ostrohu nad Jizerou a patří k nejmalebněji situovaným šlechtickým sídlům v Čechách.",
  },
  {
    emoji: "🏔",
    text: "Maloskalské skalní město vzniklo ze křídových pískovců a nabízí desítky vyhlídek a skalních soutěsek. Nejznámější vyhlídkou je Kde domov můj s panoramatem meandrující Jizery — název odkazuje na českou státní hymnu.",
  },
  {
    emoji: "🎬",
    text: "Oblast Malé Skály se proslavila ve filmu i literatuře. Krajina inspirovala malíře národního obrození a soutěska Jizery pod skálami je dodnes vyhledávaným místem fotografů i filmařů.",
  },
];

export default function MalaSkalaPage() {
  return (
    <PageLayout title="Malá Skála" backPath="/trasy">
      <div style={{ display: "flex", flexDirection: "column", padding: "10px 12px 16px", gap: "10px", boxSizing: "border-box" }}>

        <div style={{ fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.12em", color: "#38bdf8", textTransform: "uppercase" }}>
          Cílová oblast trasy
        </div>

        <div style={{
          borderRadius: "12px", overflow: "hidden",
          border: "1px solid rgba(14,165,233,0.25)",
          boxShadow: "0 4px 16px rgba(14,165,233,0.15)",
          aspectRatio: "16/7",
        }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mala_skala_zamek.JPG/800px-Mala_skala_zamek.JPG"
            alt="Malá Skála"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div style={{
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "11px 12px",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "7px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Info size={12} color="#38bdf8" />
              <span style={{ color: "#38bdf8", fontWeight: 700, fontSize: "0.73rem", letterSpacing: "0.05em" }}>
                O tomto místě
              </span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.65rem" }}>zdroj: Wikipedie</span>
          </div>

          <p style={{ margin: 0, color: "rgba(255,255,255,0.80)", fontSize: "0.80rem", lineHeight: "1.55" }}>
            {wikiText}
          </p>

          <a
            href="https://cs.wikipedia.org/wiki/Mal%C3%A1_Sk%C3%A1la"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              marginTop: "9px",
              padding: "4px 9px", borderRadius: "7px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.55)", fontSize: "0.70rem", textDecoration: "none",
            }}
          >
            <ExternalLink size={10} />
            Přečíst celý článek na Wikipedii
          </a>
        </div>

        <div style={{
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "11px 12px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "9px" }}>
            <Sparkles size={12} color="#f59e0b" />
            <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.73rem", letterSpacing: "0.05em" }}>
              Zajímavosti
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {zajimavosti.map((z, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0, lineHeight: 1.4 }}>{z.emoji}</span>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontSize: "0.78rem", lineHeight: "1.50" }}>
                  {z.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
