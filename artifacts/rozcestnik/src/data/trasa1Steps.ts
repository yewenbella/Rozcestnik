export interface TrailStep {
  slug: string;
  type: "start" | "checkpoint" | "finish";
  label: string;
  place: string;
  proof: string;
  info: string;
  wikiUrl?: string;
  imageUrl?: string;
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
    info: "Jan Nepomucký byl mučedník katolické církve a jeden z českých zemských patronů. Narozen kolem roku 1340 v Pomuku (dnešní Nepomuk), zemřel 20. března 1393 v Praze, když byl svržen do Vltavy z Karlova mostu. Blahořečen roku 1721 a kanonizován roku 1729 papežem Benediktem XIII. Jeho sochy zdobí mosty a náměstí po celé střední Evropě.",
    wikiUrl: "https://cs.wikipedia.org/wiki/Jan_Nepomuck%C3%BD",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Head_of_statue_of_John_of_Nepomuk_in_T%C5%99eb%C3%AD%C4%8D%2C_T%C5%99eb%C3%AD%C4%8D_District.jpg/500px-Head_of_statue_of_John_of_Nepomuk_in_T%C5%99eb%C3%AD%C4%8D%2C_T%C5%99eb%C3%AD%C4%8D_District.jpg",
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
    info: "Slovanka je 819 m vysoký zalesněný vrch v Maxovském hřebeni Jizerských hor nad Hraběticemi, nedaleko lyžařského střediska Severák. Kopec se dříve jmenoval Seibtův vrch — jméno Slovanka nese po podnikové chatě, která na jeho vrcholu stávala. Od roku 1887 stojí na vrcholu nejstarší železná rozhledna v Česku o celkové výšce 14 m.",
    wikiUrl: "https://cs.wikipedia.org/wiki/Slovanka_(Jizersk%C3%A9_hory)",
    imageUrl: `${import.meta.env.BASE_URL}slovanka.jpg`,
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
    info: "Karlov je vesnice a část obce Josefův Důl v okrese Jablonec nad Nisou. Nachází se asi 1,5 km jihozápadně od Josefova Dolu v katastrálním území o rozloze 4,15 km². První písemná zmínka o obci pochází z roku 1701. Protéká tudy Tichá říčka, přítok Kamenice.",
    wikiUrl: "https://cs.wikipedia.org/wiki/Karlov_(Josef%C5%AFv_D%C5%AFl)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Karlov_%28Josef%C5%AFv_D%C5%AFl%29%2C_d%C5%AFm_III.jpg/500px-Karlov_%28Josef%C5%AFv_D%C5%AFl%29%2C_d%C5%AFm_III.jpg",
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
    info: "Přehrada Josefův Důl se nachází v Jizerských horách v severních Čechách a byla vystavěna v letech 1976–1980. Řadí se k nejmladším přehradám vybudovaným v Česku. Přehradní jezero má rozlohu 1,38 km² a průměrnou hloubku 10 m. Celkový objem nádrže dosahuje 22,6 milionu m³.",
    wikiUrl: "https://cs.wikipedia.org/wiki/Josef%C5%AFv_D%C5%AFl_(p%C5%99ehrada)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Josdul.jpg/500px-Josdul.jpg",
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
    info: "Jan Nepomucký byl mučedník katolické církve a jeden z českých zemských patronů. Narozen kolem roku 1340 v Pomuku (dnešní Nepomuk), zemřel 20. března 1393 v Praze, když byl svržen do Vltavy z Karlova mostu. Blahořečen roku 1721 a kanonizován roku 1729 papežem Benediktem XIII.",
    wikiUrl: "https://cs.wikipedia.org/wiki/Jan_Nepomuck%C3%BD",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Head_of_statue_of_John_of_Nepomuk_in_T%C5%99eb%C3%AD%C4%8D%2C_T%C5%99eb%C3%AD%C4%8D_District.jpg/500px-Head_of_statue_of_John_of_Nepomuk_in_T%C5%99eb%C3%AD%C4%8D%2C_T%C5%99eb%C3%AD%C4%8D_District.jpg",
    color: "#f97316",
    bg: "rgba(249,115,22,0.10)",
    border: "rgba(249,115,22,0.28)",
    lat: 50.7452,
    lng: 15.1660,
  },
];
