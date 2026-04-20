import { useState } from "react";
import { BookOpen, MapPin, Route, Eye, Landmark, Loader2, CheckCircle2, PawPrint } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useDenik, type DennikItem } from "@/hooks/useDenik";
import { useRatings } from "@/hooks/useRatings";

type FilterType = "vse" | "trasa" | "rozhledna" | "hrad" | "zoo";

const SECTIONS = [
  { type: "trasa" as const,     label: "Trasy",              icon: Route,     color: "#38bdf8", bg: "rgba(14,165,233,0.13)",  border: "rgba(14,165,233,0.30)" },
  { type: "rozhledna" as const, label: "Rozhledny",          icon: Eye,       color: "#fb923c", bg: "rgba(251,146,60,0.13)",  border: "rgba(251,146,60,0.30)" },
  { type: "hrad" as const,      label: "Hrady a z\u00e1mky", icon: Landmark,  color: "#a78bfa", bg: "rgba(167,139,250,0.13)", border: "rgba(167,139,250,0.30)" },
  { type: "zoo" as const,       label: "Zoologick\u00e9 zahrady", icon: PawPrint, color: "#34d399", bg: "rgba(52,211,153,0.13)",  border: "rgba(52,211,153,0.30)" },
];

function typeIcon(type: DennikItem["type"]) {
  if (type === "trasa")     return <Route    size={15} color="#38bdf8" />;
  if (type === "rozhledna") return <Eye      size={15} color="#fb923c" />;
  if (type === "zoo")       return <PawPrint size={15} color="#34d399" />;
  return                           <Landmark size={15} color="#a78bfa" />;
}

function typeLabel(type: DennikItem["type"]) {
  if (type === "trasa")     return "Trasa";
  if (type === "rozhledna") return "Rozhledna";
  if (type === "zoo")       return "Zoo";
  return "Hrad / z\u00e1mek";
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("cs-CZ", { day: "numeric", month: "long", year: "numeric" });
  } catch { return iso; }
}

export default function DennikPage() {
  const { items, loading, isSignedIn } = useDenik();
  const { getRating } = useRatings();
  const [filter, setFilter] = useState<FilterType>("vse");

  const grouped: Record<string, DennikItem[]> = { trasa: [], rozhledna: [], hrad: [], zoo: [] };
  for (const item of items) (grouped[item.type] ||= []).push(item);

  const visibleSections = SECTIONS.filter(s => filter === "vse" || s.type === filter);
  const hasAny = items.length > 0;
  const hasInFilter = visibleSections.some(s => grouped[s.type]?.length > 0);

  return (
    <PageLayout title={"Cestovn\u00ed den\u00edk"} backPath="/team">
      <div style={{ padding: "10px 14px", maxWidth: "480px", margin: "0 auto" }}>

        {!isSignedIn ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "rgba(255,255,255,0.4)" }}>
            <BookOpen size={38} style={{ marginBottom: 12, opacity: 0.3 }} />
            <p style={{ fontSize: "0.88rem", margin: 0 }}>{"P\u0159ihla\u0161 se pro zobrazen\u00ed den\u00edku"}</p>
          </div>
        ) : loading ? (
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 60 }}>
            <Loader2 size={28} color="rgba(255,255,255,0.3)" style={{ animation: "spin 1s linear infinite" }} />
          </div>
        ) : (
          <>
            <div style={{
              display: "flex", gap: "7px", flexWrap: "wrap",
              marginBottom: "16px",
            }}>
              {([
                { key: "vse", label: "V\u0161e", color: "rgba(255,255,255,0.7)", activeBg: "rgba(255,255,255,0.14)", activeBorder: "rgba(255,255,255,0.35)" },
                { key: "trasa",     label: "Trasy",              color: "#38bdf8", activeBg: "rgba(14,165,233,0.18)",  activeBorder: "rgba(14,165,233,0.55)" },
                { key: "rozhledna", label: "Rozhledny",          color: "#fb923c", activeBg: "rgba(251,146,60,0.18)",  activeBorder: "rgba(251,146,60,0.55)" },
                { key: "hrad",      label: "Hrady a z\u00e1mky",      color: "#a78bfa", activeBg: "rgba(167,139,250,0.18)", activeBorder: "rgba(167,139,250,0.55)" },
                { key: "zoo",       label: "Zoo",                     color: "#34d399", activeBg: "rgba(52,211,153,0.18)",  activeBorder: "rgba(52,211,153,0.55)" },
              ] as { key: FilterType; label: string; color: string; activeBg: string; activeBorder: string }[]).map(btn => {
                const active = filter === btn.key;
                const count = btn.key === "vse" ? items.length : grouped[btn.key]?.length ?? 0;
                return (
                  <button
                    key={btn.key}
                    onClick={() => setFilter(btn.key)}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "5px",
                      padding: "5px 12px", borderRadius: "20px",
                      border: active ? `1.5px solid ${btn.activeBorder}` : "1.5px solid rgba(255,255,255,0.12)",
                      background: active ? btn.activeBg : "rgba(255,255,255,0.05)",
                      color: active ? btn.color : "rgba(255,255,255,0.45)",
                      fontSize: "0.75rem", fontWeight: 700,
                      cursor: "pointer", transition: "all 0.15s",
                    }}
                  >
                    {btn.label}
                    {count > 0 && (
                      <span style={{
                        background: active ? btn.activeBorder : "rgba(255,255,255,0.08)",
                        color: active ? btn.color : "rgba(255,255,255,0.4)",
                        borderRadius: "10px", padding: "0 5px",
                        fontSize: "0.65rem", fontWeight: 700,
                      }}>{count}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {!hasAny ? (
              <div style={{ textAlign: "center", padding: "50px 20px", color: "rgba(255,255,255,0.35)" }}>
                <BookOpen size={40} style={{ marginBottom: 12, opacity: 0.3 }} />
                <p style={{ fontSize: "0.9rem", margin: "0 0 6px", fontWeight: 600 }}>{"Den\u00edk je pr\u00e1zdn\u00fd"}</p>
                <p style={{ fontSize: "0.76rem", margin: 0, color: "rgba(255,255,255,0.25)" }}>
                  {"Spl\u0148 trasu nebo ozna\u010d rozhlednu \u2714 a objev\u00ed se zde"}
                </p>
              </div>
            ) : !hasInFilter ? (
              <div style={{ textAlign: "center", padding: "50px 20px", color: "rgba(255,255,255,0.35)" }}>
                <p style={{ fontSize: "0.85rem", margin: 0 }}>{"V t\u00e9to kategorii zat\u00edm nic nem\u00e1\u0161"}</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {visibleSections.map(({ type, label, icon: Icon, color, bg, border }) => {
                  const sectionItems = grouped[type] ?? [];
                  if (!sectionItems.length) return null;
                  return (
                    <div key={type}>
                      <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "8px" }}>
                        <Icon size={14} color={color} />
                        <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          {label}
                        </span>
                        <span style={{
                          background: bg, border: `1px solid ${border}`,
                          borderRadius: "20px", padding: "1px 7px",
                          color, fontSize: "0.65rem", fontWeight: 700,
                        }}>{sectionItems.length}</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {sectionItems.map((item) => (
                          <div key={item.id} style={{
                            background: "rgba(5,18,5,0.82)",
                            border: `1.5px solid ${border}`,
                            borderRadius: "12px",
                            padding: "12px 14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}>
                            <div style={{
                              width: 32, height: 32, borderRadius: "8px",
                              background: bg, border: `1px solid ${border}`,
                              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                            }}>
                              {typeIcon(item.type)}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ color: "white", fontWeight: 700, fontSize: "0.88rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {item.itemName}
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
                                <MapPin size={9} color="rgba(255,255,255,0.3)" />
                                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.68rem" }}>
                                  {typeLabel(item.type)} &bull; {formatDate(item.completedAt)}
                                </span>
                              {item.type === "rozhledna" && getRating(item.itemId) > 0 && (
                                <span style={{ fontSize: "0.68rem", marginLeft: "2px" }}>
                                  {"⭐".repeat(getRating(item.itemId))}
                                </span>
                              )}
                              </div>
                            </div>
                            <CheckCircle2 size={16} color={color} style={{ flexShrink: 0, opacity: 0.85 }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </PageLayout>
  );
}
