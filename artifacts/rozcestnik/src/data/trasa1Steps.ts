export interface TrailStep {
  slug: string;
  type: "start" | "checkpoint" | "finish";
  label: string;
  place: string;
  proof: string;
  info: string;
  color: string;
  bg: string;
  border: string;
  lat: number;
  lng: number;
}

export const trasa1Steps: TrailStep[] = [
  {
    slug: "start",
    type: "start",
    label: "START",
    place: "Sv. Jan Nepomucký",
    proof: "Socha",
    info: "Barokní socha patrona Čech z 18. století. Stojí u historického mostu v centru Jablonce nad Nisou — tradiční místo setkání turistů.",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.10)",
    border: "rgba(74,222,128,0.28)",
    lat: 50.7452,
    lng: 15.1660,
  },
  {
    slug: "checkpoint-1",
    type: "checkpoint",
    label: "Checkpoint 1",
    place: "Rozhledna Slovanka",
    proof: "Rozcestník",
    info: "Dřevěná rozhledna ve výšce 836 m n. m. s panoramatickým výhledem na Jizerské hory a Lužické hory. Za jasného dne jsou vidět i Krkonoše.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.22)",
    lat: 50.7254,
    lng: 15.1470,
  },
  {
    slug: "checkpoint-2",
    type: "checkpoint",
    label: "Checkpoint 2",
    place: "Karlov",
    proof: "Rozcestník",
    info: "Malebná osada na náhorní plošině obklopená lesy. Oblíbené místo odpočinku s lavičkami a výhledem do údolí Černé Nisy.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.22)",
    lat: 50.7400,
    lng: 15.1480,
  },
  {
    slug: "checkpoint-3",
    type: "checkpoint",
    label: "Checkpoint 3",
    place: "Přehrada Josefův důl",
    proof: "Rozcestník",
    info: "Vodní nádrž z roku 1906 obklopená smrkovými lesy. Zásobárna pitné vody pro Liberecký kraj — klidné místo s příjemnou atmosférou.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.22)",
    lat: 50.7553,
    lng: 15.1762,
  },
  {
    slug: "cil",
    type: "finish",
    label: "CÍL",
    place: "Sv. Jan Nepomucký",
    proof: "Socha",
    info: "Zpět u sochy sv. Jana Nepomuckého — konec okruhu. Gratulujeme k dokončení trasy! Nezapomeňte zapsat čas pro platný výsledek.",
    color: "#f97316",
    bg: "rgba(249,115,22,0.10)",
    border: "rgba(249,115,22,0.28)",
    lat: 50.7452,
    lng: 15.1660,
  },
];
