import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Navigation, MapPin, Flag, CheckCircle2, Timer, FlaskConical } from "lucide-react";
import { zkusebniSteps } from "@/data/zkusebniSteps";

const STORAGE_KEY = "zkusebni_times";

interface TimeEntry { display: string; ts: number; }
type StoredTimes = Record<string, TimeEntry>;

function nowEntry(): TimeEntry {
  const now = new Date();
  return {
    display: now.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" }),
    ts: now.getTime(),
  };
}

function formatDuration(ms: number): string {
  const totalMin = Math.round(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return `${m} min`;
  return `${h} h ${m} min`;
}

const iconMap = {
  start: Navigation,
  checkpoint: MapPin,
  finish: Flag,
} as const;

const typeColor = {
  start: "#4ade80",
  checkpoint: "#fbbf24",
  finish: "#f87171",
} as const;

export default function ZkusebniTrasaPage() {
  const [times, setTimes] = useState<StoredTimes>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
    catch { return {}; }
  });

  function record(label: string) {
    const entry = nowEntry();
    const next = { ...times, [label]: entry };
    setTimes(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function reset() {
    setTimes({});
    localStorage.removeItem(STORAGE_KEY);
  }

  const startEntry = times["START"];
  const finishEntry = times["CÍL"];
  const totalTimeMs = startEntry && finishEntry ? finishEntry.ts - startEntry.ts : null;

  return (
    <PageLayout title="Zkušební trasa" backPath="/trasy">
      <div style={{ display: "flex", flexDirection: "column", padding: "16px", gap: "16px" }}>

        {/* Info banner */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: "10px",
          padding: "12px 14px", borderRadius: "12px",
          background: "rgba(251,191,36,0.10)",
          border: "1px solid rgba(251,191,36,0.30)",
        }}>
          <FlaskConical size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "1px" }} />
          <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontSize: "0.80rem", lineHeight: 1.55 }}>
            Tato trasa slouží pouze k otestování funkce záznamu času. Klepni postupně na každý bod a ověř, že vše funguje správně. GPS ověření zde není vyžadováno.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {zkusebniSteps.map((step, idx) => {
            const Icon = iconMap[step.type];
            const color = typeColor[step.type];
            const recorded = times[step.label];
            const isLast = idx === zkusebniSteps.length - 1;

            return (
              <div key={step.label} style={{ display: "flex", gap: "12px", alignItems: "stretch" }}>
                {/* Timeline line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "32px", flexShrink: 0 }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "10px", flexShrink: 0,
                    background: recorded ? `${color}22` : "rgba(255,255,255,0.06)",
                    border: `1.5px solid ${recorded ? color + "66" : "rgba(255,255,255,0.12)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s",
                  }}>
                    {recorded
                      ? <CheckCircle2 size={15} color={color} strokeWidth={2} />
                      : <Icon size={15} color={recorded ? color : "rgba(255,255,255,0.4)"} strokeWidth={1.8} />
                    }
                  </div>
                  {!isLast && (
                    <div style={{
                      width: "2px", flex: 1, minHeight: "16px", marginTop: "4px",
                      background: recorded ? `${color}44` : "rgba(255,255,255,0.08)",
                      borderRadius: "1px", transition: "background 0.3s",
                    }} />
                  )}
                </div>

                {/* Card */}
                <div style={{
                  flex: 1, padding: "12px 14px", borderRadius: "14px", marginBottom: isLast ? 0 : "0",
                  background: recorded ? `${color}0d` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${recorded ? color + "33" : "rgba(255,255,255,0.08)"}`,
                  transition: "all 0.3s",
                }}>
                  <div style={{ fontSize: "0.64rem", fontWeight: 800, letterSpacing: "0.10em", textTransform: "uppercase", color: color, marginBottom: "3px" }}>
                    {step.type === "start" ? "Start" : step.type === "finish" ? "Cíl" : "Checkpoint"}
                  </div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", marginBottom: "6px" }}>
                    {step.label}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.77rem", marginBottom: "10px" }}>
                    {step.description}
                  </div>

                  {recorded ? (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "4px 10px", borderRadius: "8px",
                      background: `${color}18`, border: `1px solid ${color}44`,
                    }}>
                      <CheckCircle2 size={12} color={color} />
                      <span style={{ color, fontWeight: 700, fontSize: "0.80rem" }}>{recorded.display}</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => record(step.label)}
                      style={{
                        display: "flex", alignItems: "center", gap: "6px",
                        padding: "7px 14px", borderRadius: "10px",
                        background: `${color}18`, border: `1px solid ${color}44`,
                        color, fontWeight: 700, fontSize: "0.80rem", cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <Timer size={13} />
                      Zapsat čas
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Total time */}
        <div style={{
          padding: "14px 16px", borderRadius: "14px", textAlign: "center",
          background: totalTimeMs ? "rgba(251,191,36,0.10)" : "rgba(255,255,255,0.04)",
          border: `1px dashed ${totalTimeMs ? "rgba(251,191,36,0.45)" : "rgba(255,255,255,0.12)"}`,
        }}>
          {totalTimeMs ? (
            <>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#fbbf24", marginBottom: "4px" }}>
                Celkový čas
              </div>
              <div style={{ color: "white", fontWeight: 800, fontSize: "1.4rem" }}>
                {formatDuration(totalTimeMs)}
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", marginTop: "4px" }}>
                Testování proběhlo úspěšně ✓
              </div>
            </>
          ) : (
            <>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.80rem", fontWeight: 600 }}>
                ⏱ Celkový čas trasy
              </div>
              <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem", marginTop: "3px" }}>
                Zobrazí se po dokončení
              </div>
            </>
          )}
        </div>

        {/* Reset button */}
        {Object.keys(times).length > 0 && (
          <button
            onClick={reset}
            style={{
              padding: "10px", borderRadius: "12px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", cursor: "pointer",
            }}
          >
            Resetovat záznam
          </button>
        )}
      </div>
    </PageLayout>
  );
}
