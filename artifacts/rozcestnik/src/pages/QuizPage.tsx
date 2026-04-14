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
    question: "V kterém roce byl Jan Nepomucký kanonizován?",
    options: ["1721", "1729", "1740"],
    correct: 1,
    hint: "Papežem Benediktem XIII.",
  },
  {
    question: "Z jakého roku pochází Rozhledna Slovanka?",
    options: ["1905", "1921", "1887"],
    correct: 2,
    hint: "Nejstarší železná rozhledna v Čechách.",
  },
  {
    question: "Kolik schodů vede na vyhlídkovou plošinu Slovanky?",
    options: ["45", "56", "72"],
    correct: 1,
    hint: "Plošina je ve výšce 14 metrů.",
  },
  {
    question: "K čemu slouží voda z přehrady Josefův Důl?",
    options: ["K zavlažování", "K výrobě energie", "Jako pitná voda"],
    correct: 2,
    hint: "Vstup k hladině je přísně zakázán.",
  },
  {
    question: "V jaké budově sídlí Motomuzeum Borek pod Troskami?",
    options: ["V bývalém mlýně", "V bývalé sýpce z roku 1935", "V opravené stodole"],
    correct: 1,
    hint: "Budova pochází z doby před 2. světovou válkou.",
  },
  {
    question: "Kdo proslul tím, že vjel na mopedu do rybníku Vidlák?",
    options: ["Tomáš Holý", "Pošťák Fanda", "Vašek"],
    correct: 1,
    hint: "Film: Jak dostat tatínka do polepšovny.",
  },
  {
    question: "Které světové hvězdy natáčely u Podsemínského mostu?",
    options: ["Tom Hanks a Brad Pitt", "Johnny Depp a Orlando Bloom", "Matt Damon a Heath Ledger"],
    correct: 2,
    hint: "Film Kletba bratří Grimmů, rok 2005.",
  },
  {
    question: "Kolik historických motocyklů ukrývá Motomuzeum?",
    options: ["Více než 150", "Přesně 80", "Okolo 30"],
    correct: 0,
    hint: "Najdeš tu i dřevěný motocykl s pískovcovými koly.",
  },
  {
    question: "Co je v aplikaci zakázáno při absolvování tras?",
    options: ["Fotografování", "Odpočívání", "Používání navigace (GPS)"],
    correct: 2,
    hint: "Pravidla fair play — musíte se orientovat sami.",
  },
  {
    question: "Z koho se skládá každý tým v Turistické výzvě?",
    options: ["Z jednotlivce", "Z trojice", "Z dvojice"],
    correct: 2,
    hint: "Podtitul aplikace to prozradí!",
  },
  {
    question: "Jak vysoký je vrch Slovanka v Jizerských horách?",
    options: ["1 012 m n. m.", "819 m n. m.", "654 m n. m."],
    correct: 1,
    hint: "Nachází se v Maxovském hřebeni nad Hraběticemi.",
  },
  {
    question: "Jaký je vstupní poplatek do Semín hradiště?",
    options: ["100 Kč / os.", "220 Kč / os.", "170 Kč / os."],
    correct: 2,
    hint: "Expozice achátů a minerálů.",
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
    if (sc >= 11) return "🏆";
    if (sc >= 8) return "🥈";
    if (sc >= 5) return "🥉";
    return "💪";
  }

  function getMessage(sc: number) {
    if (sc >= 11) return "Naprostý expert na Rozcestník!";
    if (sc >= 8) return "Skvělý výkon, znáš trasy!";
    if (sc >= 5) return "Dobrý základ, jdeš na trasy?";
    return "Ještě trochu procvičit!";
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
    padding: "16px",
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

  if (finished) {
    return (
      <div style={pageStyle}>
        <div style={headerStyle}>
          <button onClick={() => navigate("/")} style={backBtnStyle}>
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>
          <span style={{ color: "white", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "0.04em", textTransform: "uppercase", flex: 1 }}>KVÍZ</span>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", gap: "20px" }}>
          <div style={{ fontSize: "4rem", lineHeight: 1 }}>{getEmoji(score)}</div>

          <div style={{ textAlign: "center" }}>
            <div style={{ color: "white", fontSize: "2.2rem", fontWeight: 900, lineHeight: 1 }}>
              {score} / {questions.length}
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "4px" }}>správných odpovědí</div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "14px 24px", textAlign: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", fontWeight: 600 }}>{getMessage(score)}</span>
          </div>

          <div style={{ width: "100%", maxWidth: "340px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {questions.map((qq, i) => {
              const ans = answers[i];
              const correct = ans === qq.correct;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", borderRadius: "10px", background: correct ? "rgba(74,222,128,0.08)" : "rgba(239,68,68,0.08)", border: `1px solid ${correct ? "rgba(74,222,128,0.2)" : "rgba(239,68,68,0.2)"}` }}>
                  {correct ? <CheckCircle2 size={13} color="#4ade80" /> : <XCircle size={13} color="#f87171" />}
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", flex: 1, lineHeight: 1.3 }}>{qq.question}</span>
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
      <div style={headerStyle}>
        <button onClick={() => navigate("/")} style={backBtnStyle}>
          <ArrowLeft size={18} strokeWidth={2.2} />
        </button>
        <span style={{ color: "white", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "0.04em", textTransform: "uppercase", flex: 1 }}>KVÍZ</span>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", fontWeight: 600 }}>{current + 1} / {questions.length}</span>
      </div>

      <div style={{ height: "3px", background: "rgba(255,255,255,0.08)" }}>
        <div style={{ height: "100%", width: `${((current + (isAnswered ? 1 : 0)) / questions.length) * 100}%`, background: "linear-gradient(90deg, #fbbf24, #f59e0b)", borderRadius: "2px", transition: "width 0.4s ease" }} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "24px 20px", gap: "20px" }}>
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "18px", padding: "22px 18px" }}>
          <div style={{ color: "rgba(251,191,36,0.7)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px" }}>
            OTÁZKA {current + 1}
          </div>
          <div style={{ color: "white", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.45 }}>
            {q.question}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.correct;
            const isSelected = idx === selected;
            let bg = "rgba(255,255,255,0.05)";
            let border = "1px solid rgba(255,255,255,0.12)";
            let labelBg = "rgba(255,255,255,0.10)";
            let labelColor = "rgba(255,255,255,0.6)";
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
                textColor = "rgba(255,255,255,0.7)";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 14px", borderRadius: "14px", background: bg, border, cursor: isAnswered ? "default" : "pointer", textAlign: "left", transition: "all 0.25s", width: "100%" }}
              >
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: labelBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.25s" }}>
                  <span style={{ color: labelColor, fontWeight: 800, fontSize: "0.85rem", transition: "color 0.25s" }}>
                    {OPTION_LABELS[idx]}
                  </span>
                </div>
                <span style={{ color: textColor, fontWeight: 600, fontSize: "0.92rem", lineHeight: 1.35, flex: 1 }}>{opt}</span>
                {isAnswered && isCorrect && <CheckCircle2 size={17} color="#4ade80" style={{ flexShrink: 0 }} />}
                {isAnswered && isSelected && !isCorrect && <XCircle size={17} color="#f87171" style={{ flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div style={{ background: selected === q.correct ? "rgba(74,222,128,0.08)" : "rgba(239,68,68,0.07)", border: `1px solid ${selected === q.correct ? "rgba(74,222,128,0.22)" : "rgba(239,68,68,0.22)"}`, borderRadius: "12px", padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <span style={{ fontSize: "1rem", flexShrink: 0 }}>{selected === q.correct ? "✅" : "❌"}</span>
            <div>
              <div style={{ color: selected === q.correct ? "#4ade80" : "#f87171", fontWeight: 700, fontSize: "0.82rem", marginBottom: "2px" }}>
                {selected === q.correct ? "Správně!" : `Správná odpověď: ${OPTION_LABELS[q.correct]} — ${q.options[q.correct]}`}
              </div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", lineHeight: 1.4 }}>{q.hint}</div>
            </div>
          </div>
        )}

        <div style={{ flex: 1 }} />

        {isAnswered && (
          <button
            onClick={handleNext}
            style={{ padding: "14px", borderRadius: "14px", background: "linear-gradient(135deg, rgba(251,191,36,0.22), rgba(251,191,36,0.10))", border: "1px solid rgba(251,191,36,0.40)", color: "#fbbf24", fontWeight: 800, fontSize: "0.95rem", cursor: "pointer", letterSpacing: "0.05em", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
          >
            {current + 1 >= questions.length ? (
              <><Trophy size={17} /> Zobrazit výsledky</>
            ) : (
              <>Další otázka →</>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
