import { BookOpen, Plus, MapPin, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const mockZaznamy = [
  {
    id: 1,
    datum: "12. 4. 2026",
    misto: "Trosky",
    text: "Dnes jsme zdolali Trosky za kr\u00e1sn\u00e9ho po\u010das\u00ed. V\u00fdhled na \u010cesk\u00fd r\u00e1j byl neskute\u010dn\u00fd!",
  },
  {
    id: 2,
    datum: "5. 4. 2026",
    misto: "Pravick\u00e1 br\u00e1na",
    text: "Dlouh\u00fd v\u00fdstup, ale stoj\u00ed to za to. Br\u00e1na je monumentn\u00ed.",
  },
];

export default function DennikPage() {
  return (
    <PageLayout title={"Cestovn\u00ed den\u00edk"} backPath="/">
      <div style={{ padding: "10px 14px", maxWidth: "480px", margin: "0 auto" }}>

        {/* Add entry button */}
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "13px",
            borderRadius: "12px",
            border: "1.5px dashed rgba(20,184,166,0.5)",
            background: "rgba(10,45,50,0.70)",
            color: "#5eead4",
            fontWeight: 700,
            fontSize: "0.88rem",
            cursor: "pointer",
            marginBottom: "14px",
          }}
        >
          <Plus size={16} />
          {"P\u0159idat z\u00e1znam"}
        </button>

        {/* Entries */}
        {mockZaznamy.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "50px 20px",
            color: "rgba(255,255,255,0.35)",
          }}>
            <BookOpen size={40} style={{ marginBottom: 12, opacity: 0.3 }} />
            <p style={{ fontSize: "0.9rem", margin: 0 }}>{"Den\u00edk je pr\u00e1zdn\u00fd \u2014 p\u0159idej sv\u016fj prvn\u00ed z\u00e1znam!"}</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {mockZaznamy.map((z) => (
              <div
                key={z.id}
                style={{
                  background: "rgba(5,18,5,0.82)",
                  border: "1.5px solid rgba(20,184,166,0.22)",
                  borderRadius: "14px",
                  padding: "14px 16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "8px",
                    background: "rgba(20,184,166,0.15)",
                    border: "1px solid rgba(20,184,166,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <BookOpen size={15} color="#5eead4" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <MapPin size={11} color="rgba(255,255,255,0.4)" />
                      <span style={{ color: "white", fontWeight: 700, fontSize: "0.88rem" }}>{z.misto}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
                      <Calendar size={10} color="rgba(255,255,255,0.3)" />
                      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.70rem" }}>{z.datum}</span>
                    </div>
                  </div>
                </div>
                <p style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.82rem",
                  lineHeight: 1.55,
                  margin: 0,
                }}>
                  {z.text}
                </p>
              </div>
            ))}
          </div>
        )}

        <p style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.22)",
          fontSize: "0.68rem",
          marginTop: "20px",
        }}>
          {"Uk\u00e1zkov\u00e9 z\u00e1znamy \u2014 funkce se dok\u00f3ncuje"}
        </p>
      </div>
    </PageLayout>
  );
}
