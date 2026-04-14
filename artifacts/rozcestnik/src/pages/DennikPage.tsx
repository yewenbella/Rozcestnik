import { BookOpen, MapPin, Route, Eye, Landmark, Loader2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useDenik, type DennikItem } from "@/hooks/useDenik";

const typeIcon = (type: DennikItem["type"]) => {
  if (type === "trasa") return <Route size={15} color="#38bdf8" />;
  if (type === "rozhledna") return <Eye size={15} color="#fb923c" />;
  return <Landmark size={15} color="#a78bfa" />;
};

const typeLabel = (type: DennikItem["type"]) => {
  if (type === "trasa") return "Trasa";
  if (type === "rozhledna") return "Rozhledna";
  return "Hrad / z\u00e1mek";
};

const typeColor: Record<DennikItem["type"], string> = {
  trasa: "#38bdf8",
  rozhledna: "#fb923c",
  hrad: "#a78bfa",
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("cs-CZ", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

export default function DennikPage() {
  const { items, loading, isSignedIn } = useDenik();

  const grouped: Record<string, DennikItem[]> = { trasa: [], rozhledna: [], hrad: [] };
  for (const item of items) {
    (grouped[item.type] ||= []).push(item);
  }

  const sections = [
    { type: "trasa" as const, label: "Trasy", icon: Route, color: "#38bdf8", bg: "rgba(14,165,233,0.12)", border: "rgba(14,165,233,0.25)" },
    { type: "rozhledna" as const, label: "Rozhledny", icon: Eye, color: "#fb923c", bg: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.25)" },
    { type: "hrad" as const, label: "Hrady a z\u00e1mky", icon: Landmark, color: "#a78bfa", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.25)" },
  ];

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
        ) : items.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "rgba(255,255,255,0.35)" }}>
            <BookOpen size={40} style={{ marginBottom: 12, opacity: 0.3 }} />
            <p style={{ fontSize: "0.9rem", margin: "0 0 6px", fontWeight: 600 }}>{"Den\u00edk je pr\u00e1zdn\u00fd"}</p>
            <p style={{ fontSize: "0.76rem", margin: 0, color: "rgba(255,255,255,0.25)" }}>
              {"Ozna\u010d spln\u011bn\u00e9 trasy nebo rozhledny \u2714 a objev\u00ed se zde"}
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {sections.map(({ type, label, icon: Icon, color, bg, border }) => {
              const sectionItems = grouped[type];
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
                          </div>
                        </div>
                        <span style={{ fontSize: "1rem" }}>✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </PageLayout>
  );
}
