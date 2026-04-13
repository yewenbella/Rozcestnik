import PageLayout from "@/components/PageLayout";
import { MapPin, Flag, Camera, Navigation } from "lucide-react";

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
  return (
    <PageLayout title="Trasa č.1" backPath="/trasy">
      <div style={{ display: "flex", flexDirection: "column", gap: "0", padding: "16px" }}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;
          return (
            <div key={step.label} style={{ display: "flex", gap: "12px" }}>
              {/* Left timeline */}
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

              {/* Card */}
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
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    color: step.color,
                    marginBottom: "3px",
                  }}
                >
                  {step.label}
                </div>
                <div
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "6px",
                  }}
                >
                  {step.place}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.78rem",
                  }}
                >
                  <Camera size={12} />
                  <span>{step.proof}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}
