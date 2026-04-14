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
    lat: 50.7280,
    lng: 15.0430,
  },
  {
    label: "Checkpoint 1",
    type: "checkpoint",
    address: "Zastávka Horní Hanychov",
    lat: 50.7268,
    lng: 15.0398,
  },
  {
    label: "Checkpoint 2",
    type: "checkpoint",
    address: "Zastávka Hanychov kostel",
    lat: 50.7284,
    lng: 15.0425,
  },
  {
    label: "CÍL",
    type: "finish",
    address: "Zastávka Dolní Hanychov",
    lat: 50.7303,
    lng: 15.0453,
  },
];
