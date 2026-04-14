export interface ZkusebniStep {
  label: string;
  type: "start" | "checkpoint" | "finish";
  description: string;
  address: string;
  lat: number;
  lng: number;
}

export const zkusebniSteps: ZkusebniStep[] = [
  {
    label: "START",
    type: "start",
    description: "Ještědská 46, Liberec 8",
    address: "Ještědská 46, Liberec 8, 46008",
    lat: 50.7280,
    lng: 15.0430,
  },
  {
    label: "Kontrolní bod",
    type: "checkpoint",
    description: "Kontrolní bod trasy",
    address: "",
    lat: 0,
    lng: 0,
  },
  {
    label: "CÍL",
    type: "finish",
    description: "Cíl trasy",
    address: "",
    lat: 0,
    lng: 0,
  },
];
