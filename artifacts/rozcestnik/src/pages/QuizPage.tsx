import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "wouter";
import { useClerk } from "@clerk/react";
import { ArrowLeft, RotateCcw, CheckCircle2, XCircle, Trophy, X } from "lucide-react";

interface Question {
  question: string;
  options: [string, string, string];
  correct: 0 | 1 | 2;
  hint: string;
}

const questions: Question[] = [
  { question: "Který hrad je nejnavštěvovanějším hradem v České republice?", options: ["Křivoklát", "Karlštejn", "Bezděz"], correct: 1, hint: "Postaven Karlem IV. roku 1348." },
  { question: "Ve kterém roce byl postaven hrad Karlštejn?", options: ["1278", "1348", "1415"], correct: 1, hint: "Nechal ho postavit Karel IV. jako úschovnu korunních klenotů." },
  { question: "Jak se jmenují dvě věže hradu Trosky?", options: ["Baba a Panna", "Adam a Eva", "Čert a Káča"], correct: 0, hint: "Vyšší věž má 57 m, nižší 45 m." },
  { question: "Ve stylu jakého hradu byl přestavěn zámek Hluboká nad Vltavou?", options: ["Pařížského Louvru", "Buckinghamského paláce", "Windsorského hradu"], correct: 2, hint: "Přestavba proběhla v 19. století rodem Schwarzenbergů." },
  { question: "Kde sídlí letní prezidentská rezidence České republiky?", options: ["Konopiště", "Lány", "Průhonice"], correct: 1, hint: "Sídlo spojené s T. G. Masarykem." },
  { question: "Pražský hrad je považován za:", options: ["Nejstarší hrad Evropy", "Největší hradní komplex světa", "Nejlépe zachovaný gotický hrad"], correct: 1, hint: "Do Guinessovy knihy rekordů byl zapsán díky své rozloze." },
  { question: "V jaké turistické oblasti se nachází hrad Kost?", options: ["Šumava", "Krkonoše", "Český ráj"], correct: 2, hint: "Gotický hrad z 14. století, přezdívaný nejlépe zachovaný v Čechách." },
  { question: "Který arcivévoda proslul sběratelstvím na zámku Konopiště?", options: ["Ferdinand I.", "František Ferdinand d'Este", "Maxmilián I."], correct: 1, hint: "Zastřelen v Sarajevu roku 1914, čímž byl spuštěn 1. světová válka." },
  { question: "Oblast Lednice-Valtice je od roku 1996 zapsána na:", options: ["Seznamu UNESCO světového dědictví", "Seznamu národních přírodních rezervací", "Červené knize ohrožených míst"], correct: 0, hint: "Tzv. 'zahrada Evropy' — největší zahradní kompozice světa." },
  { question: "Hrad Frýdlant je neodmyslitelně spjat s postavou:", options: ["Jana Žižky", "Albrechta z Valdštejna", "Přemysla Otakara II."], correct: 1, hint: "Slavný generalissimus třicetileté války." },
  { question: "Legenda o hradu Houska říká, že stojí nad:", options: ["Zlatým pokladem", "Bránou do pekla", "Pramenem věčného mládí"], correct: 1, hint: "Hrad nebyl nikdy určen k obraně ani k trvalému bydlení." },
  { question: "Na které řece stojí hrad Loket?", options: ["Vltavě", "Berounce", "Ohři"], correct: 2, hint: "Hrad se tyčí na čedičovém ostrohu." },
  { question: "Kdo přestavěl zámek Hluboká do dnešní novogotické podoby?", options: ["Schwarzenbergové", "Lichtenštejnové", "Habsburkové"], correct: 0, hint: "Přestavba probíhala v letech 1841–1871." },
  { question: "Hrad Bouzov vlastní:", options: ["Jihomoravský kraj", "Řád německých rytířů", "Stát"], correct: 1, hint: "Středověký řád rytířů křižáků." },
  { question: "Druhý největší zámek v České republice je:", options: ["Lednice", "Hluboká", "Český Krumlov"], correct: 2, hint: "Zapsán na UNESCO od roku 1992." },
  { question: "Katedrála sv. Víta, Václava a Vojtěcha se nachází v areálu:", options: ["Vyšehradu", "Pražského hradu", "Staré Prahy"], correct: 1, hint: "Stavba byla dokončena až v roce 1929." },
  { question: "V jakém architektonickém slohu byl postaven hrad Karlštejn?", options: ["Románském", "Renesančním", "Gotickém"], correct: 2, hint: "Typické hroty, lomené oblouky a věže." },
  { question: "Hrad Bezděz nechal postavit:", options: ["Karel IV.", "Přemysl Otakar II.", "Václav IV."], correct: 1, hint: "Ve 13. století — hrad je jednou z nejkrásnějších gotických ruin Čech." },
  { question: "Pro kterého českého krále byl postaven hrad Točník?", options: ["Václava IV.", "Karla IV.", "Přemysla Otakara II."], correct: 0, hint: "Hrad z přelomu 14. a 15. století, dnes zřícenina." },
  { question: "Čím je proslulá sbírka na zámku Konopiště?", options: ["Obrazy holandských mistrů", "Loveckými trofejemi a zbraněmi", "Starožitným nábytkem"], correct: 1, hint: "Majitel zámku byl vášnivým lovcem." },
  { question: "Hrad Bítov se nachází v kraji:", options: ["Jihomoravském", "Vysočina", "Jihočeském"], correct: 0, hint: "Leží u přehrady nad řekou Žijí." },
  { question: "Hrad Loket byl ve středověku využíván jako:", options: ["Klášter", "Státní vězení", "Sídlo biskupů"], correct: 1, hint: "Byl zde uvězněn i Goethe — ne, ten ho jen navštívil!" },
  { question: "Hrad Švihov je typem:", options: ["Horského hradu", "Vodního hradu", "Skalního hradu"], correct: 1, hint: "Obklopen vodním příkopem, z 15. století." },
  { question: "Čím je proslulý park u zámku Lednice?", options: ["Minaretem", "Obeliskem", "Gotickým mostem"], correct: 0, hint: "Orientální věž vysoká 62 metrů, postavená roku 1804." },
  { question: "Zámek Valtice je:", options: ["Letním sídlem Lichtenštejnů", "Zimním sídlem Lichtenštejnů", "Obchodním sídlem Schwarzenbergů"], correct: 1, hint: "Reprezentativní barokní zámek, sídlo panujícího rodu." },
  { question: "Nejstarší kamenný hrad v Čechách je:", options: ["Vyšehrad", "Přimda", "Pražský hrad"], correct: 1, hint: "Postaven v první čtvrtině 12. století." },
  { question: "Hrad Veveří leží u:", options: ["Lipna", "Vranovské přehrady", "Brněnské přehrady"], correct: 2, hint: "Gotický hrad zachráněn před zatopením při výstavbě přehrady." },
  { question: "Ve kterém století byl postaven hrad Kost?", options: ["12. století", "14. století", "16. století"], correct: 1, hint: "Gotický hrad z doby Karla IV." },
  { question: "Proč byl hrad Houska postaven na odlehlém místě bez zdroje vody?", options: ["Pro ochranu hranic", "Nikdy nebyl určen k obraně ani obývání — uzavíral díru v zemi", "Jako lovecký zámeček"], correct: 1, hint: "Záhadná stavba z 13. století, jejíž skutečný účel stále není objasněn." },
  { question: "Hrad Pernštejn se nachází v kraji:", options: ["Jihomoravském", "Vysočina", "Olomouckém"], correct: 0, hint: "Gotický hrad v obci Nedvědice." },
  { question: "Který světový spisovatel opakovaně navštěvoval hrad Loket?", options: ["Johann Wolfgang von Goethe", "Friedrich Schiller", "Franz Kafka"], correct: 0, hint: "Navštívil ho během svých pobytů v Karlových Varech." },
  { question: "Hrad Kost je přezdíván:", options: ["Skalní orlí hnízdo", "Nejlépe zachovaný gotický hrad Čech", "Strážce Jizerských hor"], correct: 1, hint: "Díky odolnosti zdí a poloze hrad nikdy nebyl dobyt." },
  { question: "Kde byl zastřelen arcivévoda František Ferdinand d'Este?", options: ["V Sarajevu", "Na zámku Konopiště", "Ve Vídni"], correct: 0, hint: "Atentát v červnu 1914 odstartoval první světovou válku." },
  { question: "V jakém roce bylo historické centrum Prahy zapsáno na UNESCO?", options: ["1979", "1992", "2000"], correct: 1, hint: "Spolu s Českým Krumlovem." },
  { question: "Co je typické pro hrad Frýdlant z architektonického hlediska?", options: ["Visutý most přes rokli", "Dvě části různých slohů — starý hrad a renesanční zámek", "Skleněná střecha"], correct: 1, hint: "Románský hrad doplněn renesančním zámkem Albrechta z Valdštejna." },
  { question: "Jak se jmenuje slavná fontána v parku zámku Lednice?", options: ["Neptunova fontána", "Fontána Hesperia", "Apollónova fontána"], correct: 0, hint: "Sousoší boha moře — oblíbené téma barokních parků." },
  { question: "Lednicko-valtický areál je přezdíván:", options: ["Zahrada Evropy", "Zelené srdce Moravy", "Modrý ráj jihu"], correct: 0, hint: "Krajinářský park o rozloze přes 280 km², největší zahradní kompozice světa." },
  { question: "Hrad Helfštýn se nachází u města:", options: ["Přerov", "Lipník nad Bečvou", "Olomouc"], correct: 1, hint: "Jeden z největších hradů na Moravě." },
  { question: "Hrad Buchlov je typicky:", options: ["Renesanční zámek", "Gotický hrad", "Barokní pevnost"], correct: 1, hint: "Středověký hrad na kopci Buchlov v Chřibech." },
  { question: "Kolik pokojů má zámek Hluboká nad Vltavou?", options: ["84", "144", "208"], correct: 1, hint: "Rozsáhlé interiéry s bohatou sbírkou umění." },
  { question: "Zámek Kratochvíle byl postaven jako:", options: ["Pohraničí pevnost", "Letní rezidenční sídlo šlechty", "Klášter"], correct: 1, hint: "Renesanční zámeček v jižních Čechách, symbol villeggiatura." },
  { question: "V jakém kraji se nachází hrad Bouzov?", options: ["Jihomoravském", "Olomouckém", "Zlínském"], correct: 1, hint: "Impozantní středověký hrad, Řád německých rytířů." },
  { question: "Na které řece leží hrad Křivoklát?", options: ["Ohři", "Berounce", "Vltavě"], correct: 1, hint: "Jeden z nejstarších a nejvýznamnějších přemyslovských hradů." },
  { question: "Ve kterém století byl postaven hrad Přimda?", options: ["12. století", "14. století", "16. století"], correct: 0, hint: "Nejstarší kamenný hrad v Čechách." },
  { question: "Hrad Houska se nachází v kraji:", options: ["Libereckém", "Středočeském", "Ústeckém"], correct: 1, hint: "U obce Houska v okrese Mělník." },
  { question: "Ve kterém okrese leží zámek Hluboká nad Vltavou?", options: ["Písek", "Strakonice", "České Budějovice"], correct: 2, hint: "Jihočeský kraj, poblíž krajského města." },
  { question: "Zámek a zahrady v Kroměříži jsou na UNESCO od roku:", options: ["1992", "1998", "2005"], correct: 1, hint: "Perla moravského baroka." },
  { question: "Hrad Loket je přezdíván také jako:", options: ["Hrad v objetí řeky", "Skalní pevnost Ohře", "Hrad bílé skály"], correct: 0, hint: "Hrad téměř ze tří stran obtéká řeka." },
  { question: "Kolik věží má hrad Trosky celkem?", options: ["Jednu", "Dvě", "Tři"], correct: 1, hint: "Baba a Panna — obě stojí na čedičovém bradlu." },
  { question: "Hrad Kost leží na potoce:", options: ["Mohelka", "Klenice", "Plakánek"], correct: 2, hint: "Romantické údolí Plakánek — malebné skalní útesy." },
  { question: "Ve kterém slohu byl postaven zámek Kratochvíle?", options: ["Gotickém", "Renesančním", "Barokním"], correct: 1, hint: "Stavba z konce 16. století, italský vliv." },
];

const OPTION_LABELS = ["A", "B", "C"];
const MEDALS = ["🥇", "🥈", "🥉"];

interface ScoreEntry { player_name: string; score: number; }

export default function QuizPage() {
  const [, navigate] = useLocation();
  const { session } = useClerk();
  const sessionRef = useRef(session);
  useEffect(() => { sessionRef.current = session; }, [session]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [topScores, setTopScores] = useState<ScoreEntry[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);
  const [pendingScore, setPendingScore] = useState<number | null>(null);
  const [nickname, setNickname] = useState<string | null>(null);

  const q = questions[current];
  const isAnswered = selected !== null;
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  const fetchTop = useCallback(async () => {
    try {
      const res = await fetch("/api/quiz-scores/top");
      if (res.ok) { const d = await res.json(); setTopScores(d.scores || []); }
    } catch {}
  }, []);

  useEffect(() => { fetchTop(); }, [fetchTop]);

  useEffect(() => {
    if (!session) return;
    session.getToken().then((token) => {
      if (!token) return;
      fetch("/api/profile", { headers: { Authorization: `Bearer ${token}` }, credentials: "include" })
        .then((r) => r.ok ? r.json() : null)
        .then((d) => { if (d?.nickname) setNickname(d.nickname); })
        .catch(() => {});
    }).catch(() => {});
  }, [session]);

  const submitScore = useCallback(async (finalScore: number, playerName: string) => {
    setSubmitting(true);
    try {
      const token = await sessionRef.current?.getToken().catch(() => null);
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      await fetch("/api/quiz-scores", {
        method: "POST", headers, credentials: "include",
        body: JSON.stringify({ score: finalScore, playerName }),
      });
      setSubmitted(true);
      fetchTop();
    } catch {} finally {
      setSubmitting(false);
    }
  }, [fetchTop]);

  function handleSelect(idx: number) {
    if (isAnswered) return;
    setSelected(idx);
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      const finalScore = answers.filter((a, i) => a === questions[i].correct).length +
        (selected === questions[current].correct ? 0 : 0);
      const calculatedScore = [...answers];
      calculatedScore[current] = selected;
      const fs = calculatedScore.filter((a, i) => a === questions[i].correct).length;
      setFinished(true);
      const name = nickname || (session?.user?.firstName ? `${session.user.firstName}` : null);
      if (name) {
        submitScore(fs, name);
      } else {
        setPendingScore(fs);
        setShowNameInput(true);
      }
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
    setSubmitted(false);
    setShowNameInput(false);
    setPendingScore(null);
    setGuestName("");
  }

  function getEmoji(sc: number) {
    if (sc >= 45) return "🏆";
    if (sc >= 35) return "🥈";
    if (sc >= 20) return "🥉";
    return "💪";
  }

  function getMessage(sc: number) {
    if (sc >= 45) return "Naprostý expert na hrady a zámky!";
    if (sc >= 35) return "Skvělý výkon, znáš naše hrady!";
    if (sc >= 20) return "Dobrý základ, ještě trochu procvičit!";
    return "Je čas navštívit více hradů!";
  }

  const pageStyle: React.CSSProperties = {
    minHeight: "100vh", backgroundColor: "#1a2a1a", maxWidth: "480px",
    margin: "0 auto", display: "flex", flexDirection: "column",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.25)",
    backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 10,
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
      <button
        onClick={() => setShowLeaderboard(v => !v)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: "38px", height: "38px", borderRadius: "12px",
          background: showLeaderboard ? "rgba(245,158,11,0.25)" : "rgba(255,255,255,0.08)",
          border: `1px solid ${showLeaderboard ? "rgba(245,158,11,0.5)" : "rgba(255,255,255,0.12)"}`,
          color: "white", cursor: "pointer", flexShrink: 0,
        }}
      >
        <Trophy size={18} color={showLeaderboard ? "#f59e0b" : "rgba(255,255,255,0.6)"} />
      </button>
    </div>
  );

  const leaderboardOverlay = showLeaderboard && (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      background: "rgba(6,14,10,0.97)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(251,191,36,0.25)",
      borderRadius: "20px 20px 0 0",
      padding: "18px 20px 32px",
      zIndex: 20,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Trophy size={16} color="#f59e0b" />
          <span style={{ color: "#f59e0b", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.07em" }}>
            TOP 5 ŽEBŘÍČEK
          </span>
        </div>
        <button
          onClick={() => setShowLeaderboard(false)}
          style={{ background: "rgba(255,255,255,0.08)", border: "none", borderRadius: "8px", width: 28, height: 28, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <X size={14} color="rgba(255,255,255,0.6)" />
        </button>
      </div>
      {topScores.length === 0 ? (
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textAlign: "center", margin: "16px 0" }}>
          {"Žebříček je zatím prázdný — buď první!"}
        </p>
      ) : topScores.map((sc, i) => {
        const medals = ["🥇", "🥈", "🥉"];
        const colors = ["#f59e0b", "#9ca3af", "#cd7c34"];
        return (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "28px 1fr auto",
            alignItems: "center",
            gap: "10px",
            padding: "10px 0",
            borderBottom: i < topScores.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}>
            <span style={{ fontSize: "1.1rem", textAlign: "center" }}>{i < 3 ? medals[i] : `${i + 1}.`}</span>
            <span style={{ color: "white", fontSize: "0.92rem", fontWeight: i === 0 ? 700 : 500 }}>{sc.player_name}</span>
            <span style={{ color: i < 3 ? colors[i] : "rgba(255,255,255,0.6)", fontWeight: 800, fontSize: "0.95rem" }}>
              {sc.score} b.
            </span>
          </div>
        );
      })}
    </div>
  );

  if (finished) {
    return (
      <div style={{ ...pageStyle, position: "relative" }}>
        {Header}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Score */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", paddingTop: "8px" }}>
            <div style={{ fontSize: "3.5rem", lineHeight: 1 }}>{getEmoji(score)}</div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "white", fontSize: "2.2rem", fontWeight: 900, lineHeight: 1 }}>{score} / {questions.length}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", marginTop: "3px" }}>správných odpovědí</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.11)", borderRadius: "12px", padding: "10px 18px", textAlign: "center" }}>
              <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.88rem", fontWeight: 600 }}>{getMessage(score)}</span>
            </div>
          </div>

          {/* Guest name input */}
          {showNameInput && !submitted && (
            <div style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.30)", borderRadius: "14px", padding: "14px" }}>
              <div style={{ color: "#fbbf24", fontWeight: 700, fontSize: "0.88rem", marginBottom: "10px" }}>
                Zadej přezdívku pro žebříček:
              </div>
              <input
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                maxLength={30}
                placeholder="Tvoje přezdívka..."
                style={{ width: "100%", padding: "9px 12px", borderRadius: "10px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "white", fontSize: "0.92rem", outline: "none", boxSizing: "border-box" }}
              />
              <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                <button
                  onClick={() => { setShowNameInput(false); fetchTop(); }}
                  style={{ flex: 1, padding: "8px", borderRadius: "10px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", fontWeight: 600, fontSize: "0.82rem", cursor: "pointer" }}
                >
                  Přeskočit
                </button>
                <button
                  disabled={!guestName.trim() || submitting}
                  onClick={() => { if (pendingScore !== null) submitScore(pendingScore, guestName.trim()); setShowNameInput(false); }}
                  style={{ flex: 2, padding: "8px", borderRadius: "10px", background: guestName.trim() ? "rgba(251,191,36,0.2)" : "rgba(255,255,255,0.05)", border: `1px solid ${guestName.trim() ? "rgba(251,191,36,0.45)" : "rgba(255,255,255,0.1)"}`, color: guestName.trim() ? "#fbbf24" : "rgba(255,255,255,0.3)", fontWeight: 700, fontSize: "0.88rem", cursor: guestName.trim() ? "pointer" : "default" }}
                >
                  {submitting ? "Ukládám…" : "Uložit skóre"}
                </button>
              </div>
            </div>
          )}

          {/* Leaderboard */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "16px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <Trophy size={15} color="#fbbf24" />
              <span style={{ color: "white", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.04em" }}>ŽEBŘÍČEK KVÍZU</span>
            </div>
            {topScores.length === 0 ? (
              <div style={{ padding: "16px 14px", color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", textAlign: "center" }}>
                Žebříček je zatím prázdný
              </div>
            ) : (
              topScores.map((entry, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderBottom: i < topScores.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: i === 0 ? "rgba(251,191,36,0.05)" : "transparent" }}>
                  <span style={{ fontSize: "1.1rem", width: "24px", textAlign: "center" }}>
                    {i < 3 ? MEDALS[i] : `${i + 1}.`}
                  </span>
                  <span style={{ flex: 1, color: i === 0 ? "white" : "rgba(255,255,255,0.75)", fontWeight: i === 0 ? 700 : 500, fontSize: "0.88rem" }}>
                    {entry.player_name}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                    <span style={{ color: i === 0 ? "#fbbf24" : "rgba(255,255,255,0.6)", fontWeight: 700, fontSize: "0.95rem" }}>
                      {entry.score}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem" }}>b.</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Answer summary */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "4px" }}>PŘEHLED ODPOVĚDÍ</div>
            {questions.map((qq, i) => {
              const ans = answers[i];
              const correct = ans === qq.correct;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "5px 9px", borderRadius: "9px", background: correct ? "rgba(74,222,128,0.07)" : "rgba(239,68,68,0.07)", border: `1px solid ${correct ? "rgba(74,222,128,0.16)" : "rgba(239,68,68,0.16)"}` }}>
                  {correct ? <CheckCircle2 size={12} color="#4ade80" style={{ flexShrink: 0 }} /> : <XCircle size={12} color="#f87171" style={{ flexShrink: 0 }} />}
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", flex: 1, lineHeight: 1.3 }}>{qq.question}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleRestart}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", padding: "12px", borderRadius: "13px", background: "linear-gradient(135deg, rgba(251,191,36,0.22), rgba(251,191,36,0.10))", border: "1px solid rgba(251,191,36,0.40)", color: "#fbbf24", fontWeight: 800, fontSize: "0.92rem", cursor: "pointer" }}
          >
            <RotateCcw size={15} /> Hrát znovu
          </button>
        </div>
      {leaderboardOverlay}
      </div>
    );
  }

  return (
    <div style={{ ...pageStyle, position: "relative" }}>
      {Header}
      <div style={{ height: "3px", background: "rgba(255,255,255,0.07)" }}>
        <div style={{ height: "100%", width: `${((current + (isAnswered ? 1 : 0)) / questions.length) * 100}%`, background: "linear-gradient(90deg, #fbbf24, #f59e0b)", borderRadius: "2px", transition: "width 0.4s ease" }} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px 16px", gap: "14px" }}>
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "16px", padding: "18px 16px" }}>
          <div style={{ color: "rgba(251,191,36,0.7)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "8px" }}>OTÁZKA {current + 1}</div>
          <div style={{ color: "white", fontSize: "1.02rem", fontWeight: 700, lineHeight: 1.45 }}>{q.question}</div>
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
              if (isCorrect) { bg = "rgba(74,222,128,0.12)"; border = "1px solid rgba(74,222,128,0.45)"; labelBg = "rgba(74,222,128,0.25)"; labelColor = "#4ade80"; textColor = "white"; }
              else if (isSelected) { bg = "rgba(239,68,68,0.10)"; border = "1px solid rgba(239,68,68,0.40)"; labelBg = "rgba(239,68,68,0.22)"; labelColor = "#f87171"; textColor = "rgba(255,255,255,0.65)"; }
            }
            return (
              <button key={idx} onClick={() => handleSelect(idx)} disabled={isAnswered}
                style={{ display: "flex", alignItems: "center", gap: "11px", padding: "12px 13px", borderRadius: "13px", background: bg, border, cursor: isAnswered ? "default" : "pointer", textAlign: "left", transition: "all 0.25s", width: "100%" }}>
                <div style={{ width: "27px", height: "27px", borderRadius: "8px", background: labelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: labelColor, fontWeight: 800, fontSize: "0.82rem" }}>{OPTION_LABELS[idx]}</span>
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
          <button onClick={handleNext}
            style={{ padding: "13px", borderRadius: "13px", background: "linear-gradient(135deg, rgba(251,191,36,0.22), rgba(251,191,36,0.10))", border: "1px solid rgba(251,191,36,0.40)", color: "#fbbf24", fontWeight: 800, fontSize: "0.92rem", cursor: "pointer", letterSpacing: "0.05em", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            {current + 1 >= questions.length ? <><Trophy size={16} /> Zobrazit výsledky</> : <>Další otázka →</>}
          </button>
        )}
      </div>
      {leaderboardOverlay}
    </div>
  );
}
