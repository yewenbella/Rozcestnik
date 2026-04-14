import React, { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, RotateCcw, CheckCircle2, XCircle, Trophy } from "lucide-react";

interface Question {
  question: string;
  options: [string, string, string];
  correct: 0 | 1 | 2;
  hint: string;
}

const questions: Question[] = [
  {
    question: "Který hrad je nejnavštěvovanějším hradem v České republice?",
    options: ["Křivoklát", "Karlštejn", "Bezděz"],
    correct: 1,
    hint: "Postaven Karlem IV. roku 1348.",
  },
  {
    question: "Ve kterém roce byl postaven hrad Karlštejn?",
    options: ["1278", "1348", "1415"],
    correct: 1,
    hint: "Nechal ho postavit Karel IV. jako úschovnu korunních klenotů.",
  },
  {
    question: "Jak se jmenují dvě věže hradu Trosky?",
    options: ["Baba a Panna", "Adam a Eva", "Čert a Káča"],
    correct: 0,
    hint: "Vyšší věž má 57 m, nižší 45 m.",
  },
  {
    question: "Ve stylu jakého hradu byl přestavěn zámek Hluboká nad Vltavou?",
    options: ["Pařížského Louvru", "Buckinghamského paláce", "Windsorského hradu"],
    correct: 2,
    hint: "Přestavba proběhla v 19. století rodem Schwarzenbergů.",
  },
  {
    question: "Kde sídlí letní prezidentská rezidence České republiky?",
    options: ["Konopiště", "Lány", "Průhonice"],
    correct: 1,
    hint: "Sídlo spojené s T. G. Masarykem.",
  },
  {
    question: "Pražský hrad je považován za:",
    options: ["Nejstarší hrad Evropy", "Největší hradní komplex světa", "Nejlépe zachovaný gotický hrad"],
    correct: 1,
    hint: "Do Guinessovy knihy rekordů byl zapsán díky své rozloze.",
  },
  {
    question: "V jaké turistické oblasti se nachází hrad Kost?",
    options: ["Šumava", "Krkonoše", "Český ráj"],
    correct: 2,
    hint: "Gotický hrad z 14. století, přezdívaný nejlépe zachovaný v Čechách.",
  },
  {
    question: "Který arcivévoda proslul sběratelstvím na zámku Konopiště?",
    options: ["Ferdinand I.", "František Ferdinand d'Este", "Maxmilián I."],
    correct: 1,
    hint: "Zastřelen v Sarajevu roku 1914, čímž byl spuštěn 1. světová válka.",
  },
  {
    question: "Oblast Lednice-Valtice je od roku 1996 zapsána na:",
    options: ["Seznamu UNESCO světového dědictví", "Seznamu národních přírodních rezervací", "Červené knize ohrožených míst"],
    correct: 0,
    hint: "Tzv. 'zahrada Evropy' — největší zahradní kompozice světa.",
  },
  {
    question: "Hrad Frýdlant je neodmyslitelně spjat s postavou:",
    options: ["Jana Žižky", "Albrechta z Valdštejna", "Přemysla Otakara II."],
    correct: 1,
    hint: "Slavný generalissimus třicetileté války.",
  },
  {
    question: "Legenda o hradu Houska říká, že stojí nad:",
    options: ["Zlatým pokladem", "Bránou do pekla", "Pramenem věčného mládí"],
    correct: 1,
    hint: "Hrad nebyl nikdy určen k obraně ani k trvalému bydlení.",
  },
  {
    question: "Na které řece stojí hrad Loket?",
    options: ["Vltavě", "Berounce", "Ohři"],
    correct: 2,
    hint: "Hrad se tyčí na čedičovém ostrohu.",
  },
  {
    question: "Kdo přestavěl zámek Hluboká do dnešní novogotické podoby?",
    options: ["Schwarzenbergové", "Lichtenštejnové", "Habsburkové"],
    correct: 0,
    hint: "Přestavba probíhala v letech 1841–1871.",
  },
  {
    question: "Hrad Bouzov vlastní:",
    options: ["Jihomoravský kraj", "Řád německých rytířů", "Stát"],
    correct: 1,
    hint: "Středověký řád rytířů křižáků.",
  },
  {
    question: "Druhý největší zámek v České republice je:",
    options: ["Lednice", "Hluboká", "Český Krumlov"],
    correct: 2,
    hint: "Zapsán na UNESCO od roku 1992.",
  },
  {
    question: "Katedrála sv. Víta, Václava a Vojtěcha se nachází v areálu:",
    options: ["Vyšehradu", "Pražského hradu", "Staré Prahy"],
    correct: 1,
    hint: "Stavba byla dokončena až v roce 1929.",
  },
  {
    question: "V jakém architektonickém slohu byl postaven hrad Karlštejn?",
    options: ["Románském", "Renesančním", "Gotickém"],
    correct: 2,
    hint: "Typické hroty, lomené oblouky a věže.",
  },
  {
    question: "Hrad Bezděz nechal postavit:",
    options: ["Karel IV.", "Přemysl Otakar II.", "Václav IV."],
    correct: 1,
    hint: "Ve 13. století — hrad je jednou z nejkrásnějších gotických ruin Čech.",
  },
  {
    question: "Pro kterého českého krále byl postaven hrad Točník?",
    options: ["Václava IV.", "Karla IV.", "Přemysla Otakara II."],
    correct: 0,
    hint: "Hrad z přelomu 14. a 15. století, dnes zřícenina.",
  },
  {
    question: "Čím je proslulá sbírka na zámku Konopiště?",
    options: ["Obrazy holandských mistrů", "Loveckými trofejemi a zbraněmi", "Starožitným nábytkem"],
    correct: 1,
    hint: "Majitel zámku byl vášnivým lovcem.",
  },
  {
    question: "Hrad Bítov se nachází v kraji:",
    options: ["Jihomoravském", "Vysočina", "Jihočeském"],
    correct: 0,
    hint: "Leží u přehrady nad řekou Žijí.",
  },
  {
    question: "Hrad Loket byl ve středověku využíván jako:",
    options: ["Klášter", "Státní vězení", "Sídlo biskupů"],
    correct: 1,
    hint: "Byl zde uvězněn i Goethe — ne, ten ho jen navštívil!",
  },
  {
    question: "Hrad Švihov je typem:",
    options: ["Horského hradu", "Vodního hradu", "Skalního hradu"],
    correct: 1,
    hint: "Obklopen vodním příkopem, z 15. století.",
  },
  {
    question: "Čím je proslulý park u zámku Lednice?",
    options: ["Minaretem", "Obeliskem", "Gotickým mostem"],
    correct: 0,
    hint: "Orientální věž vysoká 62 metrů, postavená roku 1804.",
  },
  {
    question: "Zámek Valtice je:",
    options: ["Letním sídlem Lichtenštejnů", "Zimním sídlem Lichtenštejnů", "Obchodním sídlem Schwarzenbergů"],
    correct: 1,
    hint: "Reprezentativní barokní zámek, sídlo panujícího rodu.",
  },
  {
    question: "Nejstarší kamenný hrad v Čechách je:",
    options: ["Vyšehrad", "Přimda", "Pražský hrad"],
    correct: 1,
    hint: "Postaven v první čtvrtině 12. století.",
  },
  {
    question: "Hrad Veveří leží u:",
    options: ["Lipna", "Vranovské přehrady", "Brněnské přehrady"],
    correct: 2,
    hint: "Gotický hrad, který byl zachráněn před zatopením při výstavbě Brněnské přehrady.",
  },
  {
    question: "Ve kterém století byl postaven hrad Kost?",
    options: ["12. století", "14. století", "16. století"],
    correct: 1,
    hint: "Gotický hrad z doby Karla IV.",
  },
  {
    question: "Proč byl hrad Houska postaven na odlehlém místě bez zdroje vody?",
    options: ["Pro ochranu hranic", "Nikdy nebyl určen k obraně ani obývání — uzavíral díru v zemi", "Jako lovecký zámeček"],
    correct: 1,
    hint: "Záhadná stavba z 13. století, jejíž skutečný účel stále není objasněn.",
  },
  {
    question: "Hrad Pernštejn se nachází v kraji:",
    options: ["Jihomoravském", "Vysočina", "Olomouckém"],
    correct: 0,
    hint: "Gotický hrad v obci Nedvědice.",
  },
  {
    question: "Který světový spisovatel opakovaně navštěvoval hrad Loket?",
    options: ["Johann Wolfgang von Goethe", "Friedrich Schiller", "Franz Kafka"],
    correct: 0,
    hint: "Navštívil ho během svých pobytů v Karlových Varech.",
  },
  {
    question: "Hrad Kost je přezdíván:",
    options: ["Skalní orlí hnízdo", "Nejlépe zachovaný gotický hrad Čech", "Strážce Jizerských hor"],
    correct: 1,
    hint: "Díky odolnosti zdí a poloze hrad nikdy nebyl dobyt.",
  },
  {
    question: "Kde byl zastřelen arcivévoda František Ferdinand d'Este?",
    options: ["V Sarajevu", "Na zámku Konopiště", "Ve Vídni"],
    correct: 0,
    hint: "Atentát v červnu 1914 odstartoval první světovou válku.",
  },
  {
    question: "V jakém roce bylo historické centrum Prahy (vč. Pražského hradu) zapsáno na UNESCO?",
    options: ["1979", "1992", "2000"],
    correct: 1,
    hint: "Spolu s Českým Krumlovem.",
  },
  {
    question: "Co je typické pro hrad Frýdlant z architektonického hlediska?",
    options: ["Visutý most přes rokli", "Dvě části různých slohů — starý hrad a renesanční zámek", "Skleněná střecha"],
    correct: 1,
    hint: "Románský hrad doplněn renesančním zámkem Albrechta z Valdštejna.",
  },
  {
    question: "Jak se jmenuje slavná fontána v parku zámku Lednice?",
    options: ["Neptunova fontána", "Fontána Hesperia", "Apollónova fontána"],
    correct: 0,
    hint: "Sousoší boha moře — oblíbené téma barokních parků.",
  },
  {
    question: "Lednicko-valtický areál je přezdíván:",
    options: ["Zahrada Evropy", "Zelené srdce Moravy", "Modrý ráj jihu"],
    correct: 0,
    hint: "Krajinářský park o rozloze přes 280 km², největší zahradní kompozice světa.",
  },
  {
    question: "Hrad Helfštýn se nachází u města:",
    options: ["Přerov", "Lipník nad Bečvou", "Olomouc"],
    correct: 1,
    hint: "Jeden z největších hradů na Moravě.",
  },
  {
    question: "Hrad Buchlov je typicky:",
    options: ["Renesanční zámek", "Gotický hrad", "Barokní pevnost"],
    correct: 1,
    hint: "Středověký hrad na kopci Buchlov v Chřibech.",
  },
  {
    question: "Kolik pokojů má zámek Hluboká nad Vltavou?",
    options: ["84", "144", "208"],
    correct: 1,
    hint: "Rozsáhlé interiéry s bohatou sbírkou umění.",
  },
  {
    question: "Zámek Kratochvíle byl postaven jako:",
    options: ["Pohraničí pevnost", "Letní rezidenční sídlo šlechty", "Klášter"],
    correct: 1,
    hint: "Renesanční zámeček v jižních Čechách, symbol villeggiatura.",
  },
  {
    question: "V jakém kraji se nachází hrad Bouzov?",
    options: ["Jihomoravském", "Olomouckém", "Zlínském"],
    correct: 1,
    hint: "Impozantní středověký hrad, Řád německých rytířů.",
  },
  {
    question: "Na které řece leží hrad Křivoklát?",
    options: ["Ohři", "Berounce", "Vltavě"],
    correct: 1,
    hint: "Jeden z nejstarších a nejvýznamnějších přemyslovských hradů.",
  },
  {
    question: "Ve kterém století byl postaven hrad Přimda?",
    options: ["12. století", "14. století", "16. století"],
    correct: 0,
    hint: "Nejstarší kamenný hrad v Čechách.",
  },
  {
    question: "Hrad Houska se nachází v kraji:",
    options: ["Libereckém", "Středočeském", "Ústeckém"],
    correct: 1,
    hint: "U obce Houska v okrese Mělník.",
  },
  {
    question: "Ve kterém okrese leží zámek Hluboká nad Vltavou?",
    options: ["Písek", "Strakonice", "České Budějovice"],
    correct: 2,
    hint: "Jihočeský kraj, poblíž krajského města.",
  },
  {
    question: "Arcibiskupský palác a zahrady v Kroměříži jsou na UNESCO od roku:",
    options: ["1992", "1998", "2005"],
    correct: 1,
    hint: "Perla moravského baroka.",
  },
  {
    question: "Hrad Loket je přezdíván také jako:",
    options: ["Hrad v objetí řeky", "Skalní pevnost Ohře", "Hrad bílé skály"],
    correct: 0,
    hint: "Hrad téměř ze tří stran obtéká řeka.",
  },
  {
    question: "Kolik věží má hrad Trosky celkem?",
    options: ["Jednu", "Dvě", "Tři"],
    correct: 1,
    hint: "Baba a Panna — obě stojí na čedičovém bradlu.",
  },
  {
    question: "Hrad Kost leží na potoce:",
    options: ["Mohelka", "Klenice", "Plakánek"],
    correct: 2,
    hint: "Romantické údolí Plakánek — malebné skalní útesy.",
  },
  {
    question: "Ve kterém slohu byl postaven zámek Kratochvíle?",
    options: ["Gotickém", "Renesančním", "Barokním"],
    correct: 1,
    hint: "Stavba z konce 16. století, italský vliv.",
  },
];

const OPTION_LABELS = ["A", "B", "C"];

export default function QuizPage() {
  const [, navigate] = useLocation();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const isAnswered = selected !== null;
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  function handleSelect(idx: number) {
    if (isAnswered) return;
    setSelected(idx);
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(questions.length).fill(null));
    setFinished(false);
  }

  function getEmoji(sc: number) {
    if (sc >= 45) return "🏆";
    if (sc >= 35) return "🥈";
    if (sc >= 20) return "🥉";
    return "💪";
  }

  function getMessage(sc: number) {
    if (sc >= 45) return "Absolutní expert na hrady a zámky!";
    if (sc >= 35) return "Skvělý výkon, znáš naše hrady!";
    if (sc >= 20) return "Dobrý základ, ještě trochu procvičit!";
    return "Je čas navštívit více hradů!";
  }

  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: "#1a2a1a",
    maxWidth: "480px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(0,0,0,0.25)",
    backdropFilter: "blur(12px)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  };

  const backBtnStyle: React.CSSProperties = {
    display: "flex", alignItems: "center", justifyContent: "center",
    width: "38px", height: "38px", borderRadius: "12px",
    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
    color: "white", cursor: "pointer", flexShrink: 0,
  };

  const Header = (
    <div style={headerStyle}>
      <button onClick={() => navigate("/")} style={backBtnStyle}>
        <ArrowLeft size={18} strokeWidth={2.2} />
      </button>
      <div style={{ flex: 1 }}>
        <div style={{ color: "white", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.1 }}>
          KVÍZ
        </div>
        <div style={{ color: "rgba(251,191,36,0.75)", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "1px" }}>
          Hrady a zámky
        </div>
      </div>
      {!finished && (
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", fontWeight: 600 }}>
          {current + 1} / {questions.length}
        </span>
      )}
    </div>
  );

  if (finished) {
    return (
      <div style={pageStyle}>
        {Header}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px 20px", gap: "18px" }}>
          <div style={{ fontSize: "4rem", lineHeight: 1 }}>{getEmoji(score)}</div>

          <div style={{ textAlign: "center" }}>
            <div style={{ color: "white", fontSize: "2.4rem", fontWeight: 900, lineHeight: 1 }}>
              {score} / {questions.length}
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "4px" }}>správných odpovědí</div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "12px 20px", textAlign: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.92rem", fontWeight: 600 }}>{getMessage(score)}</span>
          </div>

          <div style={{ width: "100%", maxWidth: "360px", display: "flex", flexDirection: "column", gap: "5px", maxHeight: "320px", overflowY: "auto" }}>
            {questions.map((qq, i) => {
              const ans = answers[i];
              const correct = ans === qq.correct;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", borderRadius: "10px", background: correct ? "rgba(74,222,128,0.08)" : "rgba(239,68,68,0.08)", border: `1px solid ${correct ? "rgba(74,222,128,0.18)" : "rgba(239,68,68,0.18)"}` }}>
                  {correct ? <CheckCircle2 size={13} color="#4ade80" style={{ flexShrink: 0 }} /> : <XCircle size={13} color="#f87171" style={{ flexShrink: 0 }} />}
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.72rem", flex: 1, lineHeight: 1.3 }}>{qq.question}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleRestart}
            style={{ display: "flex", alignItems: "center", gap: "7px", padding: "12px 28px", borderRadius: "14px", background: "linear-gradient(135deg, rgba(251,191,36,0.25), rgba(251,191,36,0.12))", border: "1px solid rgba(251,191,36,0.45)", color: "#fbbf24", fontWeight: 800, fontSize: "0.95rem", cursor: "pointer", letterSpacing: "0.05em" }}
          >
            <RotateCcw size={16} /> Hrát znovu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      {Header}

      <div style={{ height: "3px", background: "rgba(255,255,255,0.07)" }}>
        <div style={{ height: "100%", width: `${((current + (isAnswered ? 1 : 0)) / questions.length) * 100}%`, background: "linear-gradient(90deg, #fbbf24, #f59e0b)", borderRadius: "2px", transition: "width 0.4s ease" }} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px 16px", gap: "14px" }}>
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "16px", padding: "18px 16px" }}>
          <div style={{ color: "rgba(251,191,36,0.7)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "8px" }}>
            OTÁZKA {current + 1}
          </div>
          <div style={{ color: "white", fontSize: "1.02rem", fontWeight: 700, lineHeight: 1.45 }}>
            {q.question}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.correct;
            const isSelected = idx === selected;
            let bg = "rgba(255,255,255,0.05)";
            let border = "1px solid rgba(255,255,255,0.11)";
            let labelBg = "rgba(255,255,255,0.09)";
            let labelColor = "rgba(255,255,255,0.55)";
            let textColor = "rgba(255,255,255,0.85)";

            if (isAnswered) {
              if (isCorrect) {
                bg = "rgba(74,222,128,0.12)";
                border = "1px solid rgba(74,222,128,0.45)";
                labelBg = "rgba(74,222,128,0.25)";
                labelColor = "#4ade80";
                textColor = "white";
              } else if (isSelected && !isCorrect) {
                bg = "rgba(239,68,68,0.10)";
                border = "1px solid rgba(239,68,68,0.40)";
                labelBg = "rgba(239,68,68,0.22)";
                labelColor = "#f87171";
                textColor = "rgba(255,255,255,0.65)";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                style={{ display: "flex", alignItems: "center", gap: "11px", padding: "12px 13px", borderRadius: "13px", background: bg, border, cursor: isAnswered ? "default" : "pointer", textAlign: "left", transition: "all 0.25s", width: "100%" }}
              >
                <div style={{ width: "27px", height: "27px", borderRadius: "8px", background: labelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.25s" }}>
                  <span style={{ color: labelColor, fontWeight: 800, fontSize: "0.82rem" }}>
                    {OPTION_LABELS[idx]}
                  </span>
                </div>
                <span style={{ color: textColor, fontWeight: 600, fontSize: "0.90rem", lineHeight: 1.35, flex: 1 }}>{opt}</span>
                {isAnswered && isCorrect && <CheckCircle2 size={16} color="#4ade80" style={{ flexShrink: 0 }} />}
                {isAnswered && isSelected && !isCorrect && <XCircle size={16} color="#f87171" style={{ flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div style={{ background: selected === q.correct ? "rgba(74,222,128,0.08)" : "rgba(239,68,68,0.07)", border: `1px solid ${selected === q.correct ? "rgba(74,222,128,0.22)" : "rgba(239,68,68,0.22)"}`, borderRadius: "12px", padding: "10px 13px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <span style={{ fontSize: "0.95rem", flexShrink: 0 }}>{selected === q.correct ? "✅" : "❌"}</span>
            <div>
              <div style={{ color: selected === q.correct ? "#4ade80" : "#f87171", fontWeight: 700, fontSize: "0.80rem", marginBottom: "2px" }}>
                {selected === q.correct ? "Správně!" : `Správně: ${OPTION_LABELS[q.correct]}) ${q.options[q.correct]}`}
              </div>
              <div style={{ color: "rgba(255,255,255,0.52)", fontSize: "0.76rem", lineHeight: 1.4 }}>{q.hint}</div>
            </div>
          </div>
        )}

        <div style={{ flex: 1 }} />

        {isAnswered && (
          <button
            onClick={handleNext}
            style={{ padding: "13px", borderRadius: "13px", background: "linear-gradient(135deg, rgba(251,191,36,0.22), rgba(251,191,36,0.10))", border: "1px solid rgba(251,191,36,0.40)", color: "#fbbf24", fontWeight: 800, fontSize: "0.92rem", cursor: "pointer", letterSpacing: "0.05em", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
          >
            {current + 1 >= questions.length ? (
              <><Trophy size={16} /> Zobrazit výsledky</>
            ) : (
              <>Další otázka →</>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
