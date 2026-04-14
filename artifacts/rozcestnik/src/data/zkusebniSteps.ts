export interface ZkusebniStep {
  label: string;
  type: "start" | "checkpoint" | "finish";
  description: string;
}

export const zkusebniSteps: ZkusebniStep[] = [
  {
    label: "START",
    type: "start",
    description: "Klepni na tlačítko a zapiš čas startu.",
  },
  {
    label: "Kontrolní bod",
    type: "checkpoint",
    description: "Klepni na tlačítko a zapiš čas průchodu kontrolním bodem.",
  },
  {
    label: "CÍL",
    type: "finish",
    description: "Klepni na tlačítko a zapiš čas cíle. Celkový čas se zobrazí automaticky.",
  },
];
