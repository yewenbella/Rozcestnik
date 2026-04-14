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
    lat: 50.7355,
    lng: 15.0085,
  },
  {
    label: "Checkpoint 1",
    type: "checkpoint",
    address: "Zastávka Horní Hanychov",
    lat: 50.7382,
    lng: 15.0121,
  },
  {
    label: "Checkpoint 2",
    type: "checkpoint",
    address: "Zastávka Hanychov kostel",
    lat: 50.7420,
    lng: 15.0213,
  },
  {
    label: "CÍL",
    type: "finish",
    address: "Zastávka Dolní Hanychov",
    lat: 50.7476,
    lng: 15.0280,
  },
];
