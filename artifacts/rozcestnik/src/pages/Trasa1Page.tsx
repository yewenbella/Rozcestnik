import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { MapPin, Flag, Camera, Navigation, Car, Bus, ChevronUp, ChevronDown, ParkingCircle } from "lucide-react";

const steps = [
  {
    type: "start" as const,
    label: "START",
    place: "Socha sv. Nepomuckého",
    proof: "Socha",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.10)",
    border: "rgba(74,222,128,0.28)",
    icon: Navigation,
  },
  {
    type: "checkpoint" as const,
    label: "Checkpoint 1",
    place: "Rozhledna Slovanka",
    proof: "Rozcestník",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.22)",
    icon: MapPin,
  },
  {
    type: "checkpoint" as const,
    label: "Checkpoint 2",
    place: "Karlov",
    proof: "Rozcestník",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.22)",
    icon: MapPin,
  },
  {
    type: "checkpoint" as const,
    label: "Checkpoint 3",
    place: "Přehrada Josefův důl",
    proof: "Rozcestník",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.22)",
    icon: MapPin,
  },
  {
    type: "finish" as const,
    label: "CÍL",
    place: "Socha sv. Nepomuckého",
    proof: "Socha",
    color: "#f97316",
    bg: "rgba(249,115,22,0.10)",
    border: "rgba(249,115,22,0.28)",
    icon: Flag,
  },
];

export default function Trasa1Page() {
  const [busOpen, setBusOpen] = useState(false);
  const [parkOpen, setParkOpen] = useState(false);

  return (
    <PageLayout title="Trasa č.1" backPath="/trasy">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 71px)",
          padding: "16px",
        }}
      >
        {/* Route timeline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={step.label} style={{ display: "flex", gap: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "36px", flexShrink: 0 }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: step.bg,
                      border: `2px solid ${step.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color={step.color} strokeWidth={2} />
                  </div>
                  {!isLast && (
                    <div
                      style={{
                        width: "2px",
                        flex: 1,
                        minHeight: "24px",
                        background: "rgba(255,255,255,0.10)",
                        margin: "4px 0",
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    flex: 1,
                    marginBottom: isLast ? 0 : "8px",
                    padding: "12px 14px",
                    borderRadius: "14px",
                    background: step.bg,
                    border: `1px solid ${step.border}`,
                  }}
                >
                  <div style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", color: step.color, marginBottom: "3px" }}>
                    {step.label}
                  </div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", marginBottom: "6px" }}>
                    {step.place}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
                    <Camera size={12} />
                    <span>{step.proof}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spacer — pushes buttons to bottom */}
        <div style={{ flex: 1 }} />

        {/* Transport section */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setParkOpen((o) => !o)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "13px",
                borderRadius: "14px",
                border: parkOpen ? "1px solid rgba(74,222,128,0.45)" : "1px solid rgba(255,255,255,0.15)",
                background: parkOpen ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <Car size={18} color={parkOpen ? "#4ade80" : "rgba(255,255,255,0.7)"} />
              Parkoviště
              {parkOpen
                ? <ChevronUp size={14} color="rgba(255,255,255,0.5)" />
                : <ChevronDown size={14} color="rgba(255,255,255,0.5)" />
              }
            </button>

            <button
              onClick={() => setBusOpen((o) => !o)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "13px",
                borderRadius: "14px",
                border: busOpen ? "1px solid rgba(96,165,250,0.45)" : "1px solid rgba(255,255,255,0.15)",
                background: busOpen ? "rgba(96,165,250,0.15)" : "rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <Bus size={18} color={busOpen ? "#60a5fa" : "rgba(255,255,255,0.7)"} />
              Autobus
              {busOpen
                ? <ChevronUp size={14} color="rgba(255,255,255,0.5)" />
                : <ChevronDown size={14} color="rgba(255,255,255,0.5)" />
              }
            </button>
          </div>

          {/* Parking info panel */}
          {parkOpen && (
            <div
              style={{
                padding: "12px 14px",
                borderRadius: "12px",
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.22)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <ParkingCircle size={15} color="#4ade80" />
              <div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", marginBottom: "2px" }}>Parkoviště</div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.88rem" }}>Kavárna Mlsné myšky (Janov nad Nisou 518)</div>
              </div>
            </div>
          )}

          {/* Bus info panel */}
          {busOpen && (
            <div
              style={{
                padding: "12px 14px",
                borderRadius: "12px",
                background: "rgba(96,165,250,0.08)",
                border: "1px solid rgba(96,165,250,0.22)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Bus size={15} color="#60a5fa" />
              <div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", marginBottom: "2px" }}>Zastávka</div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.88rem" }}>Janov nad Nisou, pošta</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
