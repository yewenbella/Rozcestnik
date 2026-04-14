export interface ZkusebniStep {
  label: string;
  type: "start" | "checkpoint" | "finish";
  address: string;
  lat: number;
  lng: number;
}

export const zkusebniSteps: ZkusebniStep[] = [
  {
    label: "START",
    type: "start",
    address: "Ještědská 46, Liberec 8, 46008",
    lat: 50.73722,
    lng: 15.00660,
  },
  {
    label: "Checkpoint 1",
    type: "checkpoint",
    address: "Zastávka Horní Hanychov",
    lat: 50.7381875,
    lng: 15.0119375,
  },
  {
    label: "Checkpoint 2",
    type: "checkpoint",
    address: "Zastávka Hanychov kostel",
    lat: 50.7414375,
    lng: 15.0211875,
  },
  {
    label: "C\u00CDL",
    type: "finish",
    address: "Zast\u00e1vka Doln\u00ed Hanychov",
    lat: 50.74825,
    lng: 15.02969,
  },
];
