export interface Rozhledna {
  id: number;
  name: string;
  slug: string;
  url: string;
  kraj: string[];
  photo?: string;
  desc?: string;
}

export const rozhledny: Rozhledna[] = [
  {
    "id": 860,
    "name": "Alexandrova rozhledna",
    "slug": "alexandrova-rozhledna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/alexandrova-rozhledna/",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/alexandrova-rozhledna/P1040372.jpg",
    "desc": "Téměř sedmnáctimetrová kamenná věž z roku 1887, která byla do současné velikosti navýšena po rozsáhlé rekonstrukci v roce 2009. Půlkruhový výhled z otevřeného ochozu ve výšce 13 metrů jihozápadním směrem (Adamov, Brno, Pavlovské vrchy, údolí Svitavy)"
  },
  {
    "id": 4005,
    "name": "Allainova věž",
    "slug": "allainova-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/allainova-vez/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/allainova-vez/dscf3534.jpg",
    "desc": "Jedenáctimetrová kamenná osmiboká věž, která byla postavena v roce 1862 a sloužila jako honosný lovecký posed. V roce 2014 byla značně zdevastovaná stavba opravena. Doporučuji spojit s návštěvou Táborské/Tichánkové rozhledny která se nachází hned u parkoviště."
  },
  {
    "id": 15881,
    "name": "Amálka",
    "slug": "amalka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/amalka/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/amalka/DSCF6858.JPG",
    "desc": "Desetimetrová kovová nástavba na dřevěném altánu skibaru stojí od roku 2020 u konečné stanice lyžařského vleku na severním úbočí vrchu Adam na východě Orlických hor. Z&nbsp;otevřené plošiny ve výšce 5 metrů se obhlédne celý severní obzor od západu k&"
  },
  {
    "id": 12014,
    "name": "Andělská hora",
    "slug": "andelska-hora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/andelska-hora/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/andelska-hora/DSCF1284.JPG",
    "desc": "Gotický hrad z&nbsp;přelomu 14. a 15. století je vystavěn na vysoké čedičové homoli, která vysoko převyšuje okolní terén. Na nejvyšším bodě skály pak stojí čtyřboká obytná věž s železným světelným majákem uprostřed, která je od roku 2018 upravena na "
  },
  {
    "id": 1684,
    "name": "Andrlův chlum",
    "slug": "andrluv-chlum",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/andrluv-chlum/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/andrluv-chlum/IMGP0317.JPG",
    "desc": "Dvaapadesátimetrová ocelová telekomunikační věž z roku 1996. Kruhový výhled z otevřené plošiny ve výšce 35 metrů (Krkonoše, Orlické hory, Králický Sněžník, Praděd, Českomoravská vrchovina, Železné hory, Zvičina, elektrárny Opatovice a Chvaletice). Z "
  },
  {
    "id": 14249,
    "name": "Anenský vrch",
    "slug": "anensky-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/anensky-vrch/",
    "kraj": ["Moravskoslezský kraj",
      "Opava"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/anensky-vrch/DSCF3408.JPG",
    "desc": "Pětadvacetimetrová celodřevěná rozhledna stojí od roku 2018 na vysokém Anenském vrchu jižně nad obcí Sosnová. Zastřešená vyhlídková plošina ve výšce 22 metrů poskytuje hezké výhledy na hlavní hřeben Jeseníků s Pradědem a Vysokou holí, na opačné stran"
  },
  {
    "id": 2749,
    "name": "Anička",
    "slug": "anicka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/anicka/",
    "kraj": ["Jihomoravský kraj",
      "Znojmo"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/anicka/DSCF2276.JPG",
    "desc": "Desetimetrová dřevěná rozhledna z&nbsp;roku 2011 s&nbsp;točitým schodištěm. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 8 metrů nabízí pohledy jen do nejbližšího okolí Jiřic. Obec Jiřice se nachází jihovýchodně od Moravských Budějovic stranou vš"
  },
  {
    "id": 2495,
    "name": "Anna",
    "slug": "anna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/anna/",
    "kraj": ["Královéhradecký kraj",
      "Rychnov nad Kněžnou"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/anna/DSCF1768.JPG",
    "desc": "Sedmnáctimetrová dřevěná rozhledna z&nbsp;roku 2010 se železným točitým schodištěm. Kruhový výhled ze zastřešeného ochozu ve výšce 12 metrů (hřeben Orlických hor, Králický Sněžník, Suchý vrch). K&nbsp;výjezdu na Anenský vrch doporučuji při cestě naho"
  },
  {
    "id": 13866,
    "name": "Apollonův chrám",
    "slug": "apollonuv-chram",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/apollonuv-chram/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/apollonuv-chram/DSCF3005.JPG",
    "desc": "Empírový chrám s&nbsp;nepřehlédnutelnými osmi dórskými sloupy v&nbsp;průčelí a dvěma v&nbsp;pozadí se tyčí od roku 1819 na jižním svahu Mlýnského rybníka. Jedná se o jednu z&nbsp;mnoha podobných staveb v&nbsp;rozsáhlém parku Lednicko – Valtického are"
  },
  {
    "id": 1960,
    "name": "Babí lom",
    "slug": "babi-lom",
    "url": "https://turistickamapa.cz/rozhledna-babi-lom/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-babi-lom-2023_20_10-105804.jpg",
    "desc": "Patnáctimetrová válcová betonová věž z roku 1961. Kruhový výhled ze zastřešeného ochozu ve výšce 12 metrů (Drahanská vrchovina, Brno, Pavlovské vrchy). K rozhledně se lze přiblížit buď z Lelekovic po značené cyklistické cestě v délce 3 kilometry po h"
  },
  {
    "id": 4093,
    "name": "Babina",
    "slug": "babina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/babina/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/babina/DSCF4034.JPG",
    "desc": "Devítimetrová dřevěná rozhledna z&nbsp;roku 2015. Půlkruhový výhled ze zastřešené plošiny ve výšce šest metrů je možný pouze severním směrem na město Tábor. K&nbsp;rozhledně vedou dvě přístupové cesty. První je od severozápadu z&nbsp;Čelkovic. Z&nbsp"
  },
  {
    "id": 5219,
    "name": "Babka",
    "slug": "babka",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-babka",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-babka/rozhledna-babka-16668-v5.jpg",
    "desc": "Osmadvacetimetrová šestiúhelníková stavba z&nbsp;roku 2015. Až do druhého patra spočívá na ocelových stojinách, které jsou šikovně zakryté dřevěnými latěmi. Dále ke střeše pak konstrukce pokračuje mohutnými loupanými smrkovými kulatinami. Kruhový výh"
  },
  {
    "id": 1836,
    "name": "Babylon",
    "slug": "babylon-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/babylon-2/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/babylon-2/img_9862.jpg",
    "desc": "Sedmimetrová dřevěná rozhledna z roku 2005. Dokonalému výhledu za zastřešené plošiny brání jižním směrem vzrostlý borový les. (Žďárské vrchy, Horní les, Sýkoř). Výstup k rozhledně Babylon začíná v obci Zahrada, ležící vpravo od hlavní silnice z Tišno"
  },
  {
    "id": 1838,
    "name": "Babylon",
    "slug": "babylon",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/babylon/",
    "kraj": ["Třebíč",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/babylon/img_0156.jpg",
    "desc": "Masivní zděná původně čtyřicetimetrová věž z roku 1831 byla vystavěna k zeměměřičským účelům. V průběhu prusko-rakouských válek v roce 1866 byla údajně poškozena, snížena o jedno dřevěné patro na současnou pětadvacetimetrovou výšku, aby se posléze zm"
  },
  {
    "id": 1962,
    "name": "Babylon",
    "slug": "babylon-3",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/babylon-3/",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/babylon-3/291.jpg",
    "desc": "Dvaačtyřicetimetrová ocelová roura s vnějším vinutým schodištěm z roku 2001. Omezený výhled z otevřené plošiny ve výšce 24 metrů (Českomoravská vrchovina &#8211; v rozhledu jihovýchodním směrem brání vysoký les). K rozhledně vedou dvě cesty. Pohodlně"
  },
  {
    "id": 25344,
    "name": "Babylon Nebušice",
    "slug": "babylon-nebusice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/babylon-nebusice/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/babylon-nebusice/20250521_123042aa.jpg",
    "desc": "Téměř osmimetrová rozhledna byla dokončena v roce 2025. Základním materiálem a nosným prvkem je dutý betonový sloup, kolem něhož je uchyceno vinuté dřevěné schodiště s dřevěným zábradlím. V soutěži o rozhlednu roku 2025 pořádané Klubem přátel rozhled"
  },
  {
    "id": 14388,
    "name": "Bára",
    "slug": "bara",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bara/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/bara/DSC00657m.jpg",
    "desc": "Třicetimetrová trojboká dutá hráň složená z modřínových prken s vnitřním točitým dubovým schodištěm z roku 2008. Protože se věž nacházela v letištním koridoru, na její vrchol bylo umístěné signalizační světlo. Kruhovému výhledu z otevřené plošiny ve "
  },
  {
    "id": 1687,
    "name": "Bára II",
    "slug": "bara-ii",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bara-ii/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/bara-ii/Bara%20II%20%282%29.jpg",
    "desc": "Šestadvacetimetrová trojboká dutá hráň složená z modřínových prken s vnitřním točitým dubovým schodištěm z roku 2009. Kruhovému výhledu z otevřené plošiny ve výšce 15 metrů brání jihovýchodním směrem stromy vyššího kopce (Chrudim, Pardubice, Železné "
  },
  {
    "id": 1689,
    "name": "Barborka",
    "slug": "barborka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/barborka/",
    "kraj": ["Pardubice",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/barborka/P1010045.JPG",
    "desc": "Původně čtrnáctimetrová dřevěná rozhledna z roku 2004 prošla kvůli špatnému technickému stavu v roce 2013 velkou obnovou, kdy dřevěná konstrukce byla nahrazena kovovou. Protože byly zachovány původní prvky schodiště, zábradlí a střechy a po obnově po"
  },
  {
    "id": 278,
    "name": "Barrandovské terasy",
    "slug": "barrandovske-terasy",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/barrandovske-terasy/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/barrandovske-terasy/P1400583.JPG",
    "desc": "Patnáctimetrová zděná vyhlídková věž s&nbsp;kavárnou a restaurací z&nbsp;roku 1929. Z&nbsp;otevřeného ochozu je nádherný výhled na Prahu, Vltavu a silně frekventovaný Barrandovský most. Pouze jihozápadním směrem brání ve výhledu vrchol vyššího zalesn"
  },
  {
    "id": 16975,
    "name": "Bečov",
    "slug": "becov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/becov/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/becov/DSCF6210.JPG",
    "desc": "Středověký gotický hrad z&nbsp;poloviny 14. století se společně s&nbsp;barokním zámkem a renesančním palácem tyčí čtyřicet metrů nad říčkou Teplou, která ho od severozápadu postupně celý obtéká. Původnímu hradu dominovala vysoká obranná věž, která tí"
  },
  {
    "id": 14207,
    "name": "Bedřichova vyhlídka",
    "slug": "bedrichova-vyhlidka",
    "url": "https://turistickamapa.cz/bedrichova-vyhlidka/",
    "kraj": ["Kolín",
      "Středočeský kraj"],
    "photo": "https://www.hrady.cz/data_g/14361/195002.800.jpg",
    "desc": "Čtrnáctimetrová dřevěná rozhledna s&nbsp;kovovým točitým schodištěm stojí od roku 2018 na Novoveském vrchu na místě Prusko – Rakouské bitvy z&nbsp;roku 1757, po bitvě nazývaném mezi prostým lidem Bedřichov. Kruhový výhled z&nbsp;otevřeného ochozu ve "
  },
  {
    "id": 3960,
    "name": "Besedná",
    "slug": "besedna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/besedna/",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/besedna/dscf3620.jpg",
    "desc": "Pětadvacetimetrová dřevěná věž z roku 2015. Kruhový výhled ze zastřešeného ochozu ve výšce 21 metrů (Veselý vrch, Drahoušek, slapská přehradní nádrž, Cukrák, Studený vrch a Písek v Brdech, Dobříš). K rozhledně vedou dvě přístupové cesty. První od sev"
  },
  {
    "id": 9754,
    "name": "Bezděz",
    "slug": "bezdez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bezdez/",
    "kraj": ["Česká Lípa",
      "Liberecký kraj"],
    "photo": "https://www.hrad-bezdez.cz/pamatky/bezdez/fotogalerie/image-thumb__20680__OgTagImage/hrad_s_obci.webp",
    "desc": "Čtyřicetimetrová válcová věž s&nbsp;cimbuřím z&nbsp;poloviny 13. století. Fantastický kruhový výhled z&nbsp;otevřené plošiny (Ještěd, Ralsko, Lužické hory, Vrátenská hora, elektrárna Mělník, Říp, hrad Houska). Do stejnojmenné obce se nejsnáze dostane"
  },
  {
    "id": 3298,
    "name": "Bezručova vyhlídka",
    "slug": "bezrucova-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bezrucova-vyhlidka/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/bezrucova-vyhlidka/dscf0783.jpg",
    "desc": "Třináctimetrová dřevěná rozhledna z&nbsp;roku 2012. Výhled ze zastřešeného ochozu ve výšce 10 metrů omezen pouze severozápadním směrem (Kopřivnice s&nbsp;továrnou Tatra, rozhledna Bílá hora, vápencový lom Kotouč ve Štramberku, Oderské vrchy). Cestu k"
  },
  {
    "id": 1907,
    "name": "Bílá hora",
    "slug": "bila-hora",
    "url": "https://turistickamapa.cz/rozhledna-bila-hora/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-bila-hora-2022_15_10-122942.jpg",
    "desc": "Třiačtyřicetimetrová vysoká betonová telekomunikační věž z roku 2000, obtočená vnějšim spirálovitě stoupajícím schodištěm. Kruhový výhled ze zastřešené plošiny ve výšce 26 metrů (Beskydy, Jeseníky, Kopřivnice, Ostrava). Na Bílou horu vede z nedalekéh"
  },
  {
    "id": 1910,
    "name": "Bílov",
    "slug": "bilov",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-u-lidusky-bilovice-nad-svitavou",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://navyletcz.b-cdn.net/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MjI4MjksInB1ciI6ImJsb2JfaWQifX0=--1ecf6cd5076483b8a306f434c0fe77d93e67efdd/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJhdmlmIiwicmVzaXplX3RvX2ZpbGwiOlsxMTA4LDYyOCx7ImNyb3AiOiJhdHRlbnRpb24ifV0sImNvbnZlcnQiOiJhdmlmIiwic2F2ZXIiOnsicXVhbGl0eSI6NTAsInN0cmlwIjp0cnVlfX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--2c0dc3baef0db673b1dd65b35cb3eb5f1cf0d957/photo.avif",
    "desc": "Dvaašedesátimetrový železobetonový tubus s vnějším točitým schodištěm z roku 2006. Kruhový výhled ze zastřešeného ochozu ve výšce 26 metrů (Beskydy, Hostýnské vrchy, Ostrava, Studénka). Východištěm ke zdolání rozhledny&nbsp; je obec Bílov, ležící vpr"
  },
  {
    "id": 15129,
    "name": "Biskoupecká rozhledna",
    "slug": "biskoupecka-rozhledna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/biskoupecka-rozhledna/",
    "kraj": ["Plzeňský kraj",
      "Rokycany"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/biskoupecka-rozhledna/DSCF4435.JPG",
    "desc": "Třináctimetrová železná „trojnožka“ byla na okraji obce Biskoupky vztyčena v&nbsp;roce 2019. Jedná se o vyřazenou konstrukci z majetku hasičského záchranného sboru. Také na novém stanovišti bude kromě rozhledny pro turisty plnit funkci protipožární p"
  },
  {
    "id": 1771,
    "name": "Biskupská kupa",
    "slug": "biskupska-kupa",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/biskupska-kupa/",
    "kraj": ["Jeseník",
      "Olomoucký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/tabor-3/biskupska-kupa_0.jpg",
    "desc": "Mohutná devatenáctimetrová zděná válcová věž z roku 1898. Nádherný kruhový výhled z otevřeného ochozu ve výšce 18 metrů (Jeseníky s Pradědem, Orlíkem, Šerákem, a Keprníkem, Zlatý Chlum, Zlaté Hory, Polsko, za dobré viditelnosti Sněžka, Králický Sněžn"
  },
  {
    "id": 16506,
    "name": "Blahutovice",
    "slug": "blahutovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/blahutovice/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/blahutovice/DSCF5875.JPG",
    "desc": "Sedmadvacetimetrový ocelový sloup s vřetenovým schodištěm z&nbsp;roku 2021 vyztužený osmi svislými dřevěnými lepenými panely. Kruhový výhled z&nbsp;otevřené plošiny ve výšce 15 metrů (Oderské vrchy s rozhlednou Veselský vrch, Beskydy s&nbsp;Velkým Ja"
  },
  {
    "id": 13366,
    "name": "Blansko",
    "slug": "blansko",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/blansko/",
    "kraj": ["Ústecký kraj",
      "Ústí nad Labem"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/blansko/DSCF2628.JPG",
    "desc": "Hrad byl pravděpodobně vystavěn počátkem 15. století na vrcholu vysokého stejnojmenného kopce. Po opadání listů dvou dubů se nám z&nbsp;otevřené šestimetrové plošiny torza věže nabídne krásný kruhový výhled na údolí Labe s&nbsp;krajským městem, České"
  },
  {
    "id": 389,
    "name": "Blatenský vrch",
    "slug": "blatensky-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/blatensky-vrch/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/blatensky-vrch/2013-06-18-blatensky-vrch-u-horni-blatne-rozhledna-02.jpg",
    "desc": "Kamenná 21 metrová válcová věž z roku 1913. Kruhovému výhledu z prosklené plošiny ve výšce 18 metrů brání v současné době jihovýchodním směrem vzrostlý les (západní Krušné hory s rozhlednami na Klínovci, Auersberg a Fichtelberg na opačné straně hrani"
  },
  {
    "id": 374,
    "name": "Bohdanka",
    "slug": "bohdanka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bohdanka/",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/bohdanka/DSCF1215.JPG",
    "desc": "Dvaapadesátimetrová, zcela originální stavba z kulatiny a speciálních ocelových spojů z roku 2011. Jedná o nejvyšší dřevěnou stavbu tohoto typu nejenom na našem území, ale prim drží rovněž v celé Evropě. Kruhový výhled ze zastřešené plošiny ve výšce "
  },
  {
    "id": 2967,
    "name": "Bohumín",
    "slug": "bohumin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bohumin/",
    "kraj": ["Karviná",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/bohumin/DSCF2451.JPG",
    "desc": "Osmipatrový devětatřicetimetrový železobetonový vodojem z&nbsp;roku 1935, který byl v&nbsp;roce 2006 přestavěn na penzion, restauraci a rozhlednu. Kruhový výhled z&nbsp;proskleného ochozu v&nbsp;7 patře ve výšce 31 metrů (Bohumín, Polsko, elektrárna "
  },
  {
    "id": 1692,
    "name": "Boika",
    "slug": "boika",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/boika/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/boika/P1010039.JPG",
    "desc": "Patnáctimetrová dřevená rozhledna z roku 2006. Panoramatický výhled z kryté plošiny ve výšce 11 metrů. (Krkonoše, Orlické hory, Králický Sněžník, Jeseníky, Kunětická hora, vysílač Krásný, Chrudim, Pardubice). Tato zajímavě řešená rozhledna se nachází"
  },
  {
    "id": 49,
    "name": "Bolfánek",
    "slug": "bolfanek",
    "url": "https://turistickamapa.cz/rozhledna-bolfanek/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2024/rozhledna-bolfanek-2024_28_5-115031.jpg",
    "desc": "Zděná věž bývalého kostela svatého Wolfganga dostavěná v roce 1845 do výšky 45 metrů. Kruhový výhled ze zastřešeného ochozu ve výšce 25 metrů (Šumava s Ostrým, Javorem a Jezerní horu, Český les s Čerchovem, Starým Herštejnem, Lysou, Velkým Zvonem a P"
  },
  {
    "id": 5827,
    "name": "Bolt Tower",
    "slug": "bolt-tower",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bolt-tower/",
    "kraj": ["Moravskoslezský kraj",
      "Ostrava město"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/bolt-tower/DSCF5499.JPG",
    "desc": "Původně 64 metrů vysoká pec č. 1 z&nbsp;roku 1911, která svému účelu sloužila až do roku 1998, byla v&nbsp;letech 2014 – 2015 navýšena do výšky téměř 78 metrů. Prosklená nástavba v&nbsp;sobě ukrývá prezentační prostory, kavárnu a klub a ve výšce 71 m"
  },
  {
    "id": 12288,
    "name": "Bor",
    "slug": "bor",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bor/",
    "kraj": ["Plzeňský kraj",
      "Tachov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/bor/DSCF1756.JPG",
    "desc": "Původní hrad byl založen k&nbsp;v&nbsp;polovině 13. století jako vodní pevnost s&nbsp;mohutnou válcovou věží. Pozdně gotickou přestavbou z 16. století se hrad výrazně proměnil a věž byla navýšena o špičatou cihlovou helmici na padesát metrů. K posled"
  },
  {
    "id": 1694,
    "name": "Borůvka",
    "slug": "boruvka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/boruvka/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/boruvka/P1010028.JPG",
    "desc": "Osmnáctimetrová atypická&nbsp; dřevěná věž z roku 2005 s kovovým schodištěm. Kruhový výhled z kryté plošiny ve výšce 15 metrů&nbsp; (Toulovcovy Maštale, Orlické a Železné hory, Českomoravská vrchovina, Kunětická hora, elektrárna Opatovice, vyjímečně "
  },
  {
    "id": 1773,
    "name": "Borůvková hora",
    "slug": "boruvkova-hora",
    "url": "https://turistickamapa.cz/rozhledna-boruvkova-hora/",
    "kraj": ["Jeseník",
      "Olomoucký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-boruvkova-hora-2021_15_4-152501.jpg",
    "desc": "Šestadvacetimetrová&nbsp; ocelová věž z roku 2006 pobitá silnými smrkovými prkny. Kruhový výhled ze zastřešené plošiny ve výšce 24 metrů ( Rychlebské hory, Jeseníky – Šerák s Pradědem, Králický Sněžník, za dobré viditelnosti i Krkonoše, v Polsku pak "
  },
  {
    "id": 787,
    "name": "Boubín",
    "slug": "boubin",
    "url": "https://turistickamapa.cz/rozhledna-boubin/",
    "kraj": ["Jihočeský kraj",
      "Prachatice"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-boubin-2021_7_7-163454.jpg",
    "desc": "Masivní dřevěná jedenadvacetimetrová rozhledna z roku 2005. Ochoz rozhledny převyšuje vrchol Plechého o 5 metrů a stává se tak nejvýše položeným pevným bodem tohoto pohoří na české straně Šumavy. Fantastický kruhový výhled z otevřené plošiny ve výšce"
  },
  {
    "id": 10971,
    "name": "Bouzov",
    "slug": "bouzov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bouzov/",
    "kraj": ["Olomouc",
      "Olomoucký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/bouzov/DSCF0319.JPG",
    "desc": "Romantický hrad z&nbsp;přelomu 13. a 14. století s&nbsp;nezaměnitelnou siluetou je postaven vysoko nad říčkou Třebůvkou a dominuje mu jedenašedesátimetrová válcová věž, která je zpřístupněna od&nbsp;roku 1912. Kruhový výhled ze zastřešeného ochozu ve"
  },
  {
    "id": 14567,
    "name": "Boží vyhlídka",
    "slug": "bozi-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bozi-vyhlidka/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/bozi-vyhlidka/DSCF3615.JPG",
    "desc": "Bezmála osmimetrová dřevěná rozhledna z&nbsp;roku 2019 je celá pobita ocelovými deskami. Kruhovému výhledu ze zastřešené plošiny ve výšce pět metrů brání nepochopitelným způsobem dvě kratší zabedněné stěny vyhlídky (Boží Dar, Klínovec, Plešivec, Boži"
  },
  {
    "id": 1775,
    "name": "Božka",
    "slug": "bozka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bozka/",
    "kraj": ["Olomouc",
      "Olomoucký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/olomoucky-kraj/bozka/1.jpg",
    "desc": "Jednadvacetimetrová zděná věž z roku 2009&nbsp; s vnějším železným schodištěm. Stavba je součástí sportovního areálu s restaurací. Kruhový výhled ze zastřešeného ochozu ve výšce 17 metrů (Olomouc, Svatý Kopeček, tanková střelnice ve vojenském prostor"
  },
  {
    "id": 903,
    "name": "Bramberk",
    "slug": "bramberk",
    "url": "https://turistickamapa.cz/rozhledna-bramberk/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-bramberk-2023_13_7-132540.jpg",
    "desc": "Masivní kamenná jedenadvaceti metrová vysoká věž z roku 1912. Kruhový výhled z kryté místnosti ve výšce 18 metrů je severním směrem částečně omezen vzrostlým lesem na hřebeni vyššího kopce (Jizerské hory, Krkonoše, Ještědský hřbet, Jablonec, Liberec,"
  },
  {
    "id": 1965,
    "name": "Bratčice",
    "slug": "bratcice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bratcice/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/bratcice/2009-2013-1498.jpg",
    "desc": "Šestimetrový zděný vodojem z roku 2003 s vnějším točitým schodištěm. Kruhový výhled z ploché střechy na Bratčice a okolí, jihovýchodním směrem vévodí obzoru Pálava a Bílé Karpaty. Tento vodojem je postaven jen pár metrů vlevo od silnice na mírném náv"
  },
  {
    "id": 1859,
    "name": "Bražiska",
    "slug": "braziska",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/braziska/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/braziska/Braziska-JS.JPG",
    "desc": "Čtrnáctimetrová dřevěná rozhledna z roku 2009 se čtyřmi strmými dřevěnými schodišti připomínajícími spíše než schody žebřík. Při sestupu je proto dobré jít čelem k žebříku. Výhled z jedenáctimetrové kryté plošiny je kvůli vrcholku vyššího kopce omeze"
  },
  {
    "id": 1861,
    "name": "Brdo",
    "slug": "brdo",
    "url": "https://turistickamapa.cz/rozhledna-brdo/",
    "kraj": ["Kroměříž",
      "Zlínský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-brdo-2020_6_6-145214.jpg",
    "desc": "Čtyřiadvacetimetrová kamenná věž z roku 2004. Kruhový výhled z prosklené místnosti ve výšce 20 metrů (Chřiby, Hostýnské vrchy, Bílé Karpaty, věže Velehradu, Buchlov, Uherské Hradiště, Zlín, Kroměříž, Pálava, za dobré viditelnosti Beskydy, Jeseníky, M"
  },
  {
    "id": 1967,
    "name": "Brněnské výstaviště",
    "slug": "brnenske-vystaviste",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/brnenske-vystaviste/",
    "kraj": ["Brno - město",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/brnenske-vystaviste/brnenske-vystaviste-2.jpg",
    "desc": "Železobetonová funkcionalistická věž z roku 1928 s vnějším skleněným pláštěm, vysoká 45 metrů. Kruhový výhled z otevřeného ochozu ve výšce 42 emtrů (areál výstaviště, Špilberk, kostel sv. Petra a Pavla). Tato rozhledna se nachází téměř uprostřed výst"
  },
  {
    "id": 16374,
    "name": "Brno-Stará radnice",
    "slug": "brno-stara-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/brno-stara-radnice/",
    "kraj": ["Brno - město",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/brno-stara-radnice/DSCF5699.JPG",
    "desc": "Třiašedesátimetrová věž Staré radnice stojí v Radnické ulici, necelých padesát metrů severně od Zelného trhu. Od tramvajové zastávky Zelný trh v Masarykově ulici je vzdálena pouhých sto metrů prudkým stoupáním skrz Průchodní ulici. Kruhový výhled z&n"
  },
  {
    "id": 6712,
    "name": "Brodek",
    "slug": "brodek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/brodek/",
    "kraj": ["Olomoucký kraj",
      "Přerov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/brodek/Brodek-JS1.JPG",
    "desc": "Osmimetrová dřevěná rozhledna z roku 2010. Kruhový výhled ze zastřešeného vyhlídkového ochozu ve výšce pěti metrů (Beskydy, Hostýnské, Vizovické a Oderské vrchy, Jeseníky, Přerov). Soukromá dřevěná rozhledna je postavena na malém návrší za obcí ve sm"
  },
  {
    "id": 11717,
    "name": "Brumov",
    "slug": "brumov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/brumov/",
    "kraj": ["Zlín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/brumov/DSCF1133.JPG",
    "desc": "Hrad byl založen v&nbsp;první polovině 13. století, aby střežil důležitou cestu Vlárským průsmykem z&nbsp;Moravy do Uher. Tyčí se na vysokém návrší v západní části stejnojmenné obce, ale ze všech stran je obklopen vyššími kopci Bílých Karpat. Výhled "
  },
  {
    "id": 5281,
    "name": "Brusná",
    "slug": "brusna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/brusna/",
    "kraj": ["Olomoucký kraj",
      "Šumperk"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/brusna/DSCF5284.JPG",
    "desc": "Atypická dřevěná rozhledna s&nbsp;ocelovým schodištěm z&nbsp;roku 2015. I se dvěma&nbsp;hromosvody měří necelých třináct metrů. Hezký kruhový výhled ze zastřešené plošiny ve výšce 6 metrů (hlavní hřeben Jeseníků s dominantním Pradědem, Dlouhé Stráně,"
  },
  {
    "id": 13823,
    "name": "Břeclav",
    "slug": "breclav",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/breclav/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/breclav/DSCF2973.JPG",
    "desc": "Na místě dnešního zámku stával pohraniční dřevěný hrad, který měl chránit vstup do země proti válečným výpravám z Uher. K první přestavbě na zámek došlo ve druhé polovině 13. století a v první polovině 16. století je objekt přestavěn v renesančním sl"
  },
  {
    "id": 292,
    "name": "Březina",
    "slug": "brezina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/brezina/",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/brezina/DSCF1247.JPG",
    "desc": "Pětačtyřicetimetrový ocelový telekomunikační stožár z roku 2001. Kruhový výhled z otevřené plošiny ve výšce 25 metrů (východní část Prahy, Polabí, Železné hory, Krkonoše, Bezděz, Milešovka). Rozhledna se nachází na nevýrazném kopci nad obcí Žandov, l"
  },
  {
    "id": 65,
    "name": "Březinka",
    "slug": "brezinka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/brezinka/",
    "kraj": ["Plzeňský kraj",
      "Tachov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/brezinka/brezinka1.jpg",
    "desc": "Devětačtyřicetimetrový ocelový stožár z roku 2001, který byl turistům zpřístupněn až v roce 2003. Kruhový výhled z otevřené vyhlídkové plošiny ve výšce 33 metrů. (Přimda, Velký Zvon, Dyleň, Slavkovský les, Mariánské Lázně, Sedmihoří, Koráb, Šumava, H"
  },
  {
    "id": 391,
    "name": "Bučina",
    "slug": "bucina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bucina/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/karlovarsky-kraj/bucina/bu-008.jpg",
    "desc": "Třináctimetrová válcová kamenná věž z roku 1880. Po důkladné rekonstrukci objektu a vykácení okolních vysokých stromů v roce 2016 se z krytého ochozu ve výšce 10 metrů otevírá nádherný výhled od severozápadu až po jihozápad. Pouze lepšímu výhledu na "
  },
  {
    "id": 10835,
    "name": "Buchlov",
    "slug": "buchlov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/buchlov/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/buchlov/DSCF0174.JPG",
    "desc": "Zdaleka viditelný a majestátný královský hrad z&nbsp;poloviny 13. století byl vystavěn na stejnojmenném kopci v&nbsp;Chřibech. Z otevřeného ochozu jeho mohutné čtyřboké 26 metrové věže je nádherný kruhový výhled na pásmo Chřibů s Brdem, zámek Buchlov"
  },
  {
    "id": 1969,
    "name": "Bukovanský mlýn",
    "slug": "bukovansky-mlyn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/bukovansky-mlyn/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/bukovansky-mlyn/254.jpg",
    "desc": "Replika šestnáctimetrového zděného větrného mlýna z roku 2004. Kruhový výhled ze zastřešeného ochozu ve výšce 12 metrů (Bílé Karpaty, Ždánický les, Chřiby, Kyjov). Obec Bukovany leží severně od Kyjova na silnici do Ždánice. Na samém vrcholu prudkého "
  },
  {
    "id": 6689,
    "name": "Bukovka",
    "slug": "bukovka",
    "url": "https://turistickamapa.cz/rozhledna-bukovka/",
    "kraj": ["Olomoucký kraj",
      "Šumperk"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-bukovka-u-rapotina-2022_17_3-110825.jpg",
    "desc": "Masivní dřevěná jedenadvacetimetrová věž z roku 2016 spočívající na betonové podezdívce. V anketě o Rozhlednu roku 2016, pořádané Klubem přátel rozhleden, obsadila 1. místo. Nádherný kruhový výhled ze zastřešené plošiny ve 18 výšce metrů (Jeseníky od"
  },
  {
    "id": 1864,
    "name": "Búřov",
    "slug": "burov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/burov/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/burov/1.jpg",
    "desc": "Šestimetrová dřevěná rozhledna z roku 2005. Kruhový výhled ze zastřešené plošiny ve výšce 4 metry je jihozápadním směrem omezen vyšším kopcem (hřeben Beskyd s Radhoštěm, část Vsetínských vrchů). Už samotný výjezd do obce Valašská Bystřice od Rožnova "
  },
  {
    "id": 17360,
    "name": "Centrum setkávání Dolní Poustevna",
    "slug": "centrum-setkavani-dolni-poustevna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/centrum-setkavani-dolni-poustevna/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/centrum-setkavani-dolni-poustevna/DSCF6926.JPG",
    "desc": "Šestnácti metrová jehlanová věž nedokončeného kostela. Zastřešená vyhlídková místnost ve výšce necelých deseti metrů umožňuje výhledy na celé město a jižním směrem i na domy a kopce nad městem Sebnitz. Pouze severovýchodním směrem brání lepšímu výhle"
  },
  {
    "id": 3941,
    "name": "Cibulka",
    "slug": "cibulka-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cibulka-2/",
    "kraj": ["Karlovarský kraj",
      "Sokolov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/cibulka_1/p1260630.jpg",
    "desc": "Třicetimetrová ocelová věž z&nbsp;roku 2014 tvarem ochozu s&nbsp;kupolí záměrně připomínající cibuli. V anketě pořádané Klubem přátel rozhleden o rozhlednu roku 2014 obsadila spolu s Čápem 2. místo. Kruhový výhled ze zastřešeného ochozu ve výšce 26 m"
  },
  {
    "id": 296,
    "name": "Cibulka",
    "slug": "cibulka",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-cibulka-praha",
    "kraj": ["Praha"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-cibulka-praha/rozhledna-cibulka-praha-61267-v5.jpg",
    "desc": "Třináctimetrová romantická kamenná vyhlídková věž v podobě hradní zříceniny z 20. let 19. století. Z dvanáctimetrové otevřené plošiny je výhled pouze severovýchodním směrem ( Motol, Petřínská rozhledna, Strahov ). Rozhledna se nachází na nejvyšším bo"
  },
  {
    "id": 14743,
    "name": "Cihelka",
    "slug": "libcice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/libcice/",
    "kraj": ["Praha - západ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/libcice/DSCF3924.JPG",
    "desc": "Osmimetrová dřevěná rozhledna s&nbsp;kovovým točitým schodištěm z&nbsp;roku 2019. Půlkruhový výhled z&nbsp;otevřeného ochozu ve výšce 5 metrů je možný pouze na městečko Libčice s&nbsp;areálem šroubárny, protější skalnatý břeh Vltavy s&nbsp;obcí Větru"
  },
  {
    "id": 910,
    "name": "Císařský kámen",
    "slug": "cisarsky-kamen",
    "url": "https://lesycr.cz/casopis-clanek/rozhledna-cisarsky-kamen/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://lesycr.cz/wp-content/uploads/2016/12/rozhledna-510.jpg",
    "desc": "Dvacetimetrová dřevěná rozhledna z roku 2009. Kruhový výhled z otevřeného ochozu ve výšce 19 metrů (Ještěd, Javorník, Liberec, Jablonec, Jizerské hory, západní Krkonoše a Trosky v Českém ráji). Východištěm ke zdolání této dřevěné rozhledny je obec Mi"
  },
  {
    "id": 14173,
    "name": "Císařský kámen II",
    "slug": "cisarsky-kamen-ii",
    "url": "https://turistickamapa.cz/rozhledna-cisarsky-kamen/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2024/rozhledna-cisarsky-kamen-2024_18_8-153546.jpg",
    "desc": "Původní dvacetimetrová dřevěná rozhledna z&nbsp;roku 2009 byla kvůli nutným opravám v&nbsp;roce 2017 uzavřena. Záhy se ale ukázalo, že působení povětrnostních vlivů ji poškodilo natolik, že byla v&nbsp;následujícím roce demontována. V&nbsp;roce 2018 "
  },
  {
    "id": 1912,
    "name": "Cvilín",
    "slug": "cvilin",
    "url": "https://turistickamapa.cz/rozhledna-cvilin/",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2024/rozhledna-cvilin-2024_11_11-103122.jpg",
    "desc": "Původně pětatřicetimetrová, nyní devětadvacetimetrová kamenná válcová věž z roku 1903. Kruhový výhled z otevřeného ochozu ve výšce 25 metrů (Krnov, Opava, Jeseníky, Beskydy, Hraniční vrch, Polsko). Značená cesta k rozhledně odbočuje z hlavní silnice "
  },
  {
    "id": 3850,
    "name": "Čáp",
    "slug": "cap",
    "url": "https://turistickamapa.cz/rozhledna-cap/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-cap-2022_25_6-104250.jpg",
    "desc": "Jedenáctimetrová dřevěná rozhledna s&nbsp;ocelovým točitým schodištěm z&nbsp;roku 2014, která jako jedna z&nbsp;mála u nás byla postavena pomocí vrtulníku. V anketě o rozhlednu roku 2014, vyhlášenou Klubem přátel rozhleden, obsadila spolu s Cibulkou "
  },
  {
    "id": 1867,
    "name": "Čartak",
    "slug": "cartak",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cartak/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/cartak/img_3861.jpg",
    "desc": "Třicetimetrová betonová telekomunikační věž z roku 1998, stylově opláštěná smrkovými prkny. Krytá vyhlídková plošina ve výšce 26 metrů nabízí panoramatický výhled na Beskydy, Javorníky, ale i na vzdálenější Malou Fatru a Roháče na Slovensku. Odbočka "
  },
  {
    "id": 1971,
    "name": "Čebínka",
    "slug": "cebinka",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-cebinka",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-cebinka/rozhledna-cebinka-552-v5.jpg",
    "desc": "Osmatřicetimetrová ocelová telekomunikační věž z roku 2002. Kruhový výhled z otevřené plošiny ve výšce 30 metrů (Tišnov, Kuřim, Brno, Pavlovské vrchy). Rozhledna se nachází na vysokém, částečně již vytěženém vápencovém kopci, severně od stejnojmenné "
  },
  {
    "id": 1777,
    "name": "Čechy pod Kosířem",
    "slug": "cechy-pod-kosirem",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cechy-pod-kosirem/",
    "kraj": ["Olomoucký kraj",
      "Prostějov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/olomoucky-kraj/cechy-pod-kosirem/vezka1.jpg",
    "desc": "Šestnáctimetrová osmiboká cihlová věž z roku 1843. V roce 2015&nbsp; se započalo s velkou rekonstrukcí věže, která byla dokončena o rok později. Kruhový výhled z otevřeného ochozu ve výšce 15 metrů omezen jen na nejbližší okolí (Čechy p. Kosířem, zám"
  },
  {
    "id": 307,
    "name": "Čerchov",
    "slug": "cerchov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cerchov/",
    "kraj": ["Domažlice",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/cerchov/DSCF1803.JPG",
    "desc": "Dvacetimetrová kamenná Kurzova věž z roku 1905 stojí na vrcholu společně s vojenskou radarovou věží z osmdesátých let. Nádherný kruhový výhled z otevřeného ochozu ve výšce 17 metrů (západní Šumava, Hoher Bogen, Český a Slavkovský les, Doupovské hory,"
  },
  {
    "id": 789,
    "name": "Čermákův vrch",
    "slug": "cermakuv-vrch",
    "url": "https://turistickamapa.cz/rozhledna-cermakuv-vrch/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-cermakuv-vrch-2022_4_5-153412.jpg",
    "desc": "Dvacetimetrová příhradová ocelová věž z roku 2001. Kruhový výhled z kryté prosklené buňky ve výšce 14 metrů nebo z otevřené plošiny ve výšce 17 metrů. (Tábor, Šumava, Kleť, Novohradské hory, Temelín). Přestože Čermákův vrch je na první pohled snadno "
  },
  {
    "id": 1575,
    "name": "Černá hora",
    "slug": "cerna-hora",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-panorama-cerna-hora-v-krkonosich",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-panorama-cerna-hora-v-krkonosich/rozhledna-panorama-cerna-hora-v-krkonosich-83002-v5.jpg",
    "desc": "Šestadvacetimetrový železný podpěrný sloup č. 8 bývalé kabinové lanové dráhy z roku 1928 přestavěný na rozhlednu v roce 1998. Nádherný kruhový výhled z otevřené plošiny ve výšce 21 metrů (Krkonoše, Orlické hory, Jeseníky, Králický Sněžník, České stře"
  },
  {
    "id": 916,
    "name": "Černá studnice",
    "slug": "cerna-studnice",
    "url": "https://turistickamapa.cz/rozhledna-cerna-studnice/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-cerna-studnice-2023_31_1-172856.jpg",
    "desc": "Mohutná šestadvacetimetrová kamenná rozhledna z roku 1905 s horskou chatou a velkou restaurací. Nádherný kruhový výhled ze čtyř kamenných balkonů ve výšce 21 metrů (Jizerské hory, Ještěd, Krkonoše, Jablonec, Liberec, Kozákov, Trosky, Bezděz ). Odbočk"
  },
  {
    "id": 1579,
    "name": "Černohorská rašelina",
    "slug": "cernohorska-raselina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cernohorska-raselina/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/cernohorska-raselina/1190.jpg",
    "desc": "Pětimetrová dřevěná vyhlídka z roku 1978. Výhledu z kryté plošiny ve výšce 3 metrů brání západním směrem vzrostlý les, takže pouze na východě můžeme přehlédnout nejcennější část rašeliniště a v dáli pak vrchol Světlé hory. Černohorská rašelina se roz"
  },
  {
    "id": 1581,
    "name": "Čeřovka",
    "slug": "cerovka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cerovka/",
    "kraj": ["Jičín",
      "Královéhradecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/cerovka/DSCF1178.JPG",
    "desc": "Osmimetrová kamenná vyhlídková věž z roku 1843. Výhled z otevřené plošiny ve výšce 7 metrů je omezen pouze jihozápadním směrem ( Jičín ). Rozhledna se nachází na vrcholu bývalého čedičového lomu na severním okraji Jičína. Z náměstí k ní vede modrá tu"
  },
  {
    "id": 15936,
    "name": "České Budějovice-Černá věž",
    "slug": "ceske-budejovice-cerna-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ceske-budejovice-cerna-vez/",
    "kraj": ["České Budějovice",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/ceske-budejovice-cerna-vez/DSCF4706.JPG",
    "desc": "Stavba 72 metrů vysoké strážné a hlásné věže a zvonice probíhala v&nbsp;letech 1549-1577. Kvůli nepříznivým hydrologickým poměrům podloží musely být pod základy zatlučeny dubové piloty. Věž má čtvercový půdorys o délce strany 11,6 metrů, šířka zdí u "
  },
  {
    "id": 13968,
    "name": "Český Krumlov",
    "slug": "cesky-krumlov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cesky-krumlov/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/cesky-krumlov/DSCF3166.JPG",
    "desc": "Po Pražském hradě se jedná o druhý největší hradní a zámecký komplex u nás. Od roku 1992 je zapsán na seznam Světového dědictví UNESCO. Původní hrad, stojící na vysokém a strmém skalním ostrohu nad Vltavou a říčkou Polečnicí, byl založen ve 13. stole"
  },
  {
    "id": 12550,
    "name": "Český Rudolec",
    "slug": "cesky-rudolec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cesky-rudolec/",
    "kraj": ["Jihočeský kraj",
      "Jindřichův Hradec"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/cesky-rudolec/DSCF2064.JPG",
    "desc": "Původní gotická vodní tvrz z&nbsp;poloviny 14. století byla postavena v&nbsp;podmáčené rovinaté krajině na dubových pilotech. Na renesanční zámek byla přestavěna v&nbsp;17. století a v&nbsp;okolí vznikl park se skleníky. Ještě koncem&nbsp;téhož stole"
  },
  {
    "id": 10116,
    "name": "Český Šternberk",
    "slug": "cesky-sternberk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cesky-sternberk/",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/cesky-sternberk/DSCF9257.JPG",
    "desc": "Gotický hrad z&nbsp;poloviny 13. století, který byl postupně přestavěn na zámek se tyčí na vysokém skalním ostrohu na levém břehu Sázavy. Jižní část hradu chránila takzvaná bateriová věž s&nbsp;ostrým břitem otočeným k&nbsp;jihu. Výhled z&nbsp;otevře"
  },
  {
    "id": 791,
    "name": "Čestice",
    "slug": "cestice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cestice/",
    "kraj": ["Jihočeský kraj",
      "Strakonice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/cestice/DSCF1444.JPG",
    "desc": "Ocelový telekomunikační stožár z roku 1999. Kruhový výhled z otevřené boční plošiny ve výšce 7 metrů (střední Šumava, Strakonicko). Obec Čestice leží na vedlejší silnici mezi Volyní a Vacovem. Na rozhlednu se odbočuje z náměstí do prudkého kopce kole"
  },
  {
    "id": 4007,
    "name": "Čížovka",
    "slug": "cizovka",
    "url": "https://turistickamapa.cz/rozhledna-cizovka/",
    "kraj": ["Mladá Boleslav",
      "Středočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-cizovka-2021_29_6-115713.jpg",
    "desc": "Třicet devět metrů vysoká dřevěná jehlanová věž s ocelovým točitým schodištěm, postavená v roce 2013 na mohutné betonové podstavě, která je obložena pískovcovým kamenem.&nbsp; Nádherný kruhový výhled z plošiny ve výšce 29 metrů (Mladá Boleslav, Bezdě"
  },
  {
    "id": 1869,
    "name": "Čubův kopec",
    "slug": "cubuv-kopec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cubuv-kopec/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/cubuv-kopec/kopec.jpg",
    "desc": "Osmnáctimetrová čtyřpatrová jehlanová trámová věž z roku 2004. Kruhový výhled z kryté plošiny ve výšce 15 metrů (Javorníky, Vizovické vrchy, Bílé Karpaty, Súlovské skály). Na vrchol vedou celkem 3 cesty. V celé délce je však sjízdná pouze jediná. Zač"
  },
  {
    "id": 2896,
    "name": "Dalibor",
    "slug": "dalibor",
    "url": "https://turistickamapa.cz/rozhledna-dalibor/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-dalibor-2022_25_5-202346.jpg",
    "desc": "Jedenáctimetrová zděná rozhledna z roku 2012 postavená na zalesněném vrcholku Kalvárie nad penzionem Vinařství U Kapličky v&nbsp;Zaječí. Kruhový výhled ze zastřešeného ochozu ve výšce 8 metrů (Pálava, Novomlýnské nádrže, Lednicko-valtický areál, Břec"
  },
  {
    "id": 16248,
    "name": "Dalimilova rozhledna",
    "slug": "dalimilova-rozhledna",
    "url": "https://turistickamapa.cz/dalimilova-rozhledna/",
    "kraj": ["Olomoucký kraj",
      "Šumperk"],
    "photo": "https://turistickamapa.cz/data_fotos/dalimilova-rozhledna-2021_22_9-162001.jpg",
    "desc": "Věrná replika mohutné kamenné rozhledny, která stála od roku 1899 na nejvyšším vrcholu Králického Sněžníku na území tehdejšího Pruska. Kvůli zanedbané péči a havarijnímu stavu byla 11. října 1973 odstřelena polskými ženisty. Nová čtyřiatřicetimetrová"
  },
  {
    "id": 1183,
    "name": "Děčínský Sněžník",
    "slug": "decinsky-sneznik",
    "url": "https://turistickamapa.cz/rozhledna-decinsky-sneznik/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-decinsky-sneznik-2020_21_8-155712.jpg",
    "desc": "Bohatě zdobená válcová pískovcová věž z roku 1864 byla postavena za účelem zeměměřičských prací. Jedinečný kruhový výhled z otevřeného ochozu ve výšce 33 metrů (Labské pískovce, Lužické hory, České středohoří, Krušné hory, Děčín, Drážďany). Jediná ce"
  },
  {
    "id": 376,
    "name": "Děd",
    "slug": "ded",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ded/",
    "kraj": ["Beroun",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/ded/ded1.jpg",
    "desc": "Dvanáctimetrová zděná válcová věž s cimbuřím, postavená z bílých králodvorských cihel v roce 1893. Výhled z otevřeného ochozu ve výšce 10 metrů je po vykácení lesa umožněn severovýchodním a jihovýchodním směrem (České středohoří, Křivoklátské lesy a "
  },
  {
    "id": 393,
    "name": "Diana",
    "slug": "diana",
    "url": "https://turistickamapa.cz/rozhledna-diana/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-diana-2023_19_10-170730.jpg",
    "desc": "Elegantní 35 metrová zděná věž z roku 1914. Kruhový výhled ze zastřešeného dřevěného ochozu ve výšce 30 metrů (Karlovy Vary, Krušné a Doupovské hory, Slavkovský les). Nejznámější karlovarská rozhledna se nachazí na Výšině přátelství, kam nás od říčky"
  },
  {
    "id": 13336,
    "name": "Dneboh",
    "slug": "dneboh",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/dneboh/",
    "kraj": ["Mladá Boleslav",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/dneboh/DSCF2672.JPG",
    "desc": "Jedenáctimetrová zděná rozhledna vznikla v&nbsp;roce 2012 přestavbou nevyužívané trafostanice. Výhled z&nbsp;otevřené vyhlídkové plošiny ve výšce 10 metrů je možný především západním směrem na Mnichovo Hradiště, Ještěd a Bezděz. Východní obzor překrý"
  },
  {
    "id": 16798,
    "name": "Dobrá Voda",
    "slug": "dobra-voda",
    "url": "https://turistickamapa.cz/rozhledna-dobra-voda/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-dobra-voda-2023_23_8-180919.jpg",
    "desc": "Šestatřicetimetrová masivní železná rozhledna, spočívající na čtyřech mírně rozkročených stojinách, stojí od roku 2021 na vrcholu stejnojmenného kopce severně od Horní Plané. Kruhový výhled ze zastřešeného ochozu ve výšce 33 metrů (hraniční vrcholky "
  },
  {
    "id": 10363,
    "name": "Dobronice",
    "slug": "dobronice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/dobronice/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/dobronice/DSCF9508.JPG",
    "desc": "Gotický hrad Dobronice byl postaven začátkem 14. století na vysokém skalnatém ostrohu nad řekou Lužnicí, přesto vrchol jeho věže leží pod úrovní okolní zvlněné krajiny. Kruhový výhled z&nbsp;mohutné 21 metrů vysoké válcové věže je možný pouze na male"
  },
  {
    "id": 1584,
    "name": "Dobrošov",
    "slug": "dobrosov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/dobrosov/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/dobrosov/IMGP0339.JPG",
    "desc": "Jiráskova chata z roku 1923 s 24 metrů vysokou kamennou rozhlednou. Kruhový výhled z otevřeného ochozu ve výšce 15 metrů (Náchod a nedaleké pevnosti v Dobrošově, Krkonoše, Orlické hory, Kunětická hora, přehrada Rozkoš a Česká Skalice, v Polsku pak St"
  },
  {
    "id": 1696,
    "name": "Dobře ukrytá rozhledna Járy Cimrmana",
    "slug": "brezova",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/brezova/",
    "kraj": ["Pardubický kraj",
      "Svitavy"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/brezova/476-roz.-J.-Cimrmana.jpg",
    "desc": "Dvacetimetrová dřevěná rozhledna Járy Cimrmana z roku 2007, vyztužená ocelovými táhly. Téměř kruhovému výhledu z otevřené plošiny ve výšce 15 metrů brání vrcholky některých vysokých smrků (Březová, údolí Svitavy). Městečko Březová nad Svitavou leží v"
  },
  {
    "id": 25867,
    "name": "Domažlice-městská věž",
    "slug": "domazlice-mestska-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/domazlice-mestska-vez/",
    "kraj": ["Domažlice",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/domazlice-mestska-vez/DSCF8585.JPG",
    "desc": "Válcová městská hláska se tyčí do výšky 60 metrů a je neodmyslitelnou dominantou Domažlic. Její vznik není spolehlivě doložen, ale nejspíš to bylo v&nbsp;první polovině 16. století. Původně sloužila jako městská hláska stojící samostatně, časem zcela"
  },
  {
    "id": 1873,
    "name": "Doubrava",
    "slug": "doubrava",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/doubrava/",
    "kraj": ["Zlín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/doubrava/doubrava-1.jpg",
    "desc": "Pětapadesátimetrová ocelová telekomunikační věž z roku 2003. Kruhový výhled z otevřené plošiny ve výšce 33 metrů. (Bílé Karpaty s Velkou Javořinou a Velkým Lopeníkem, Vizovické vrchy s Vartovnou, Hostýnské vrchy se Sv. H"
  },
  {
    "id": 12518,
    "name": "Doubravka",
    "slug": "doubravka-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/doubravka-2/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/doubravka-1/DSCF2077.JPG",
    "desc": "Třiadvacetimetrová atypická rozhledna stojí od roku 2018 na třech mohutných pylonech z&nbsp;akátových větví, uprostřed je doplněná vnitřním dřevěným točitým schodištěm. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 19"
  },
  {
    "id": 1186,
    "name": "Doubravka",
    "slug": "doubravka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/doubravka/",
    "kraj": ["Teplice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/doubravka/2013-04-01-doubravka-teplice-07.jpg",
    "desc": "Dvacetimetrová kamenná věž pozdně gotického hradu z 15. století, která byla v roce 1885 upravena na rozhlednu a po požáru v roce 1896 znovu adaptována. Také nyní je vyhlídková plošina pro veřejnost uzavřena a upravuje se. Kruhový výhled z ploché stře"
  },
  {
    "id": 396,
    "name": "Doubská hora",
    "slug": "doubska-hora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/doubska-hora/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/doubska-hora/2013-05-05-aberg-na-doubske-hore-u-karlovych-varu-01.jpg",
    "desc": "Zděná, 22 metrů vysoká, modernistická věž z roku 1905 s luxusním hotelem. Kruhový výhled z prosklené místnosti ve výšce 18 metrů vybavené ústředním topením a kobercem (Krušné hory, Slavkovský les, Doupovské hory, Sokolov"
  },
  {
    "id": 13447,
    "name": "Drahanovice",
    "slug": "drahanovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/drahanovice/",
    "kraj": ["Olomouc",
      "Olomoucký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/drahanovice/1_DSCF2836.JPG",
    "desc": "Drahanovická gotická tvrz pochází z&nbsp;poloviny 14. století, kdy byla vystavěna její hlavní část – čtyřboká věžovitá stavba. Od úrovně příjezdové komunikace měří 28 metrů. Je ojedinělým dokladem stavební činnosti nižší"
  },
  {
    "id": 2036,
    "name": "Drahoušek",
    "slug": "drahousek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/drahousek/",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/drahousek/047.jpg",
    "desc": "Osmačtyřicetimetrová betonová telekomunikační věž z roku 2003. Kruhový výhled z kryté plošiny ve výšce 32 metrů. (Brdy, Sedlčany, Žižkovský vysílač v Praze). Odbočka k rozhledně se nachází hned za obcí Osečany při jízdě po hlavní silnici ze Sedlčan s"
  },
  {
    "id": 1975,
    "name": "Drahy",
    "slug": "drahy",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/drahy/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/drahy/Drahy1.JPG",
    "desc": "Devatenáctimetrová dřevěná rozhledna z roku 2009, v rozích ukotvená ocelovými lany. Společně se dvěma velmi podobnými slovenskými rozhlednami Turá lúka u Myjavy a Poĺana u Brestovce byla vystavěna v rámci programu přeshraniční spolupráce. Vzhledem k "
  },
  {
    "id": 22449,
    "name": "Drnovická vyhlídka",
    "slug": "drnovicka-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/drnovicka-vyhlidka/",
    "kraj": ["Zlín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/drnovicka-vyhlidka/DSCF7728.JPG",
    "desc": "Sedm metrů vysoká dřevěná stavba z&nbsp;roku 2023 s&nbsp;točitým železným schodištěm. Lepšímu kruhovému výhledu z kryté vyhlídkové plošiny ve výšce přes tři metry brání severním směrem vrcholky vyšších kopců Klášťov, Hůr"
  },
  {
    "id": 13160,
    "name": "Dřevohostice",
    "slug": "drevohostice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/drevohostice/",
    "kraj": ["Olomoucký kraj",
      "Přerov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/drevohostice/DSCF2458.JPG",
    "desc": "Renesanční čtyřkřídlý zámek z 16. století byl postaven na místě vodní tvrze ze 14. století. Původně čtyřhranné opevnění ztratilo počátkem 19. století svůj obranný význam a bylo ubouráno, takže se dochovalo pouze jižní kř"
  },
  {
    "id": 923,
    "name": "Dubecko",
    "slug": "dubecko",
    "url": "https://turistickamapa.cz/rozhledna-dubecko/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-dubecko-2023_6_7-104503.jpg",
    "desc": "Padesátimetrový trubková ocelový stožár opatřený vnějším vinutým schodištěm z roku 2002. Kruhový výhled ze zastřešené, dřevem obložené vyhlídkové plošiny ve výšce 33 metrů (Kozákov, Trosky, Ještěd, Bezděz, Ralsko, Černá "
  },
  {
    "id": 398,
    "name": "Dyleň",
    "slug": "dylen",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/dylen/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/dylen/betonova.jpg",
    "desc": "Mohutná betonová věž ze 70.let 20. století, od roku 1999 částečně otevřená pro veřejnost. Kruhový výhled z otevřeného ochozu plného antén (Šumava, Český les, Slavkovský les, Krušné hory, Smrčiny, Chebsko, Německo, výjimečně i Alpy). Na Dyleň vede něk"
  },
  {
    "id": 1190,
    "name": "Dymník",
    "slug": "dymnik",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-dymnik",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/dymnik/dymnik2.jpg",
    "desc": "Patnáctimetrová Augustova cihlová věž z roku 1896 na pískovcové podstavě. Kruhový výhled z prosklené plošiny ve výšce 12 metrů (Rumburk, Lužické a Jizerské hory, České středohoří, Německo). Na Dymník vedou dvě cesty. Jed"
  },
  {
    "id": 3937,
    "name": "Eliška",
    "slug": "eliska",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/eliska/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/eliska/dscf3474.jpg",
    "desc": "Masivní pětadvacetimetrová dřevěná rozhledna s&nbsp;ocelovým točitým schodištěm z&nbsp;roku 2014. Kruhový výhled ze zastřešené plošiny ve výšce 21 metrů (Vraní hory s&nbsp;dominantním Královeckým Špičákem, Jestřebí, Orli"
  },
  {
    "id": 1193,
    "name": "Erbenova vyhlídka",
    "slug": "erbenova-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/erbenova-vyhlidka/",
    "kraj": ["Ústecký kraj",
      "Ústí nad Labem"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/erbenova-vyhlidka/erb1.jpg",
    "desc": "Původně osmimetrová kamenná čtyřboká věž z roku 1933. Na podzim roku 2006 zdařilou přístavbou zvýšena o dvojnásobek. Kruhový výhled ze zastřešeného ochozu ve výšce 12 metrů (Krušné hory, České středohoří, Ústí nad Labem,"
  },
  {
    "id": 5471,
    "name": "Fajtův kopec",
    "slug": "fajtuv-kopec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/fajtuv-kopec/",
    "kraj": ["Vysočina",
      "Žďár nad Sázavou"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/fajtuv-kopec/DSCF5451.JPG",
    "desc": "Železná šestatřicetimetrová šroubovice z&nbsp;roku 2015. V&nbsp;anketě pořádané Klubem přátel rozhleden o rozhlednu roku 2015 obsadila první místo. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 32 metrů (Velké Meziříč"
  },
  {
    "id": 15594,
    "name": "Feistův kopec",
    "slug": "feistuv-kopec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/feistuv-kopec/",
    "kraj": ["Královéhradecký kraj",
      "Rychnov nad Kněžnou"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/feistuv-kopec/DSCF4810.JPG",
    "desc": "Třicetimetrová ocelová konstrukce z&nbsp;roku 2020 hojně doplněná dřevěnými latěmi na zábradlí. Kruhový výhled z&nbsp;otevřené plošiny ve výšce 29 metrů (západní vrcholky Orlických hor s&nbsp;poslední tisícovkou Vrchmezí"
  },
  {
    "id": 3834,
    "name": "Floriánka",
    "slug": "florianka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/florianka/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/florianka/dscf2485.jpg",
    "desc": "Dvaadvacetimetrová dřevěná rozhledna s&nbsp;točitým ocelovým schodištěm, od&nbsp;roku 2014 sloužící veřejnosti. Kruhový výhled ze zastřešené plošiny ve výšce 18 metrů (Buchlov, Bílé Karpaty s&nbsp;V. Javořinou a V. Lopen"
  },
  {
    "id": 16043,
    "name": "Frenštát pod Radhoštěm-radnice",
    "slug": "frenstat-pod-radhostem",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/frenstat-pod-radhostem/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/frenstat-pod-radhostem/DSCF4600.JPG",
    "desc": "Nová dvoupatrová budova radnice byla dokončena v&nbsp;roce 1891 ve stylu italské novorenesance s&nbsp;podloubím a hranolovou sedmadvacetimetrovou věží. Nahradila tak původní nevyhovující radniční budovu z&nbsp;roku 1796."
  },
  {
    "id": 11931,
    "name": "Freudenstein",
    "slug": "freudenstein",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/freudenstein/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/freudenstein/DSCF1250.JPG",
    "desc": "Hrad byl postaven v&nbsp;roce 1517 na vysoké stráni nad Jáchymovem a sloužil jako ochrana města a stříbrných dolů. Jedná se o nejmladší hrad na našem území. Do současné doby se z hradu dochovaly pouze dvě nárožní věže. D"
  },
  {
    "id": 13286,
    "name": "Frýdlant",
    "slug": "frydlant",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/frydlant/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/frydlant/DSCF2745.JPG",
    "desc": "Středověký hrad byl vybudován na mohutné čedičové skále nad řekou Smědá v&nbsp;polovině 13. století a nadále se postupně rozšiřoval. V&nbsp;16. století doznal dvě renesanční úpravy a&nbsp;na přelomu 17. století byl posta"
  },
  {
    "id": 15954,
    "name": "Frýdlant-radnice",
    "slug": "frydlant-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/frydlant-radnice/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/frydlant-radnice/DSCF4738.JPG",
    "desc": "Druhou dominantou města je, samozřejmě kromě zámku, rozprostírajícího se na výrazné výšině, také novorenesanční budova radnice. Byla vystavěná v letech 1893-1896 podle projektu vídeňského architekta Franze Neumanna, kter"
  },
  {
    "id": 926,
    "name": "Frýdlantská výšina",
    "slug": "frydlantska-vysina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/frydlantska-vysina/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/fydlantska-vysina/DSCF3113.JPG",
    "desc": "Jedenadvacetimetrová cihlová věž z roku 1907. Kruhový výhled z otevřeného ochozu ve výšce 18 metrů (Jizerské a Lužické hory, Ještěd, Frýdlant, v Polsku pak elektrárna Turoszow a mohutné haldy vytěžené hlušiny). Rozhledna"
  },
  {
    "id": 23375,
    "name": "Gloriet Průhonice",
    "slug": "gloriet-pruhonice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/gloriet-pruhonice/",
    "kraj": ["Praha - západ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/gloriet-pruhonice/Pruhonice-P1160610a.JPG",
    "desc": "Téměř devítimetrový zděný vyhlídkový Gloriet najdeme na nejvyšším bodě Průhonického parku nad meandrem Botiče. Vystavěn byl kolem roku 1830. V&nbsp;pozdější době velmi chátral a byl dokonce považován z&nbsp;umělou zřícen"
  },
  {
    "id": 400,
    "name": "Goethova vyhlídka",
    "slug": "goethova-vyhlidka",
    "url": "https://turistickamapa.cz/goethova-vyhlidka/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/goethova-vyhlidka-2023_31_1-161746.jpg",
    "desc": "Dvaačtyřicetimetrová cihlová novogotická věž se stylovou výletní restaurací z roku 1889. Kruhovému výhledu z otevřeného ochozu ve výšce 34 metrů částečně brání severovýchodním směrem vysoké stromy (Krušné hory s Klínovce"
  },
  {
    "id": 11757,
    "name": "Grabštejn",
    "slug": "grabstejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/grabstejn/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/grabstejn/DSCF1166.JPG",
    "desc": "Původně gotický hrad ze 13. století byl v&nbsp;16. století přestavěn na výstavný renesanční zámek. Od roku 1954 celý areál vlastnila Československá armáda, která jej využívala až do roku 1970, kdy byl celý objekt předán "
  },
  {
    "id": 794,
    "name": "Granátník",
    "slug": "granatnik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/granatnik/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/granatnik/dscf0240.jpg",
    "desc": "Pětimetrová dřevěná rozhledna z roku 2003. Výhled z otevřené plošiny ve výšce 4 metry je pouze severovýchodním směrem (Hluboká, České Budějovice, Novohradské hory). Na Granátník vede 3800 metrů dlouhá hrubá asfaltová sil"
  },
  {
    "id": 4085,
    "name": "Háčkovaná",
    "slug": "hackovana",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hackovana/",
    "kraj": ["Plzeň - město",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hackovana/dscf3985.jpg",
    "desc": "Patnáctimetrová a patnáctitunová ocelová rozhledna svařená z vyřazených ocelových nádrží z dílny sochaře Čestmíra Sušky. Tato monumentální rozhledna je součástí výstavy Restart v prostorách bývalé vozovny dopravního podn"
  },
  {
    "id": 1779,
    "name": "Háj",
    "slug": "haj-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/haj-2/",
    "kraj": ["Olomoucký kraj",
      "Šumperk"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/olomoucky-kraj/haj-2/631.jpg",
    "desc": "Devětadvacetimetrová čtyřboká trámová obedněná věž z roku 1996 stojící na mohutné kamenné podstavě. Kruhový výhled z prosklené plošiny ve výšce 24 metrů (Jeseníky, Rychlebské hory, Králický Sněžník, Šumperk, Hornomoravský úval). Odbočka k rozhledně s"
  },
  {
    "id": 402,
    "name": "Háj",
    "slug": "haj",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-haj",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-haj-sumperk/rozhledna-haj-sumperk-83895-v5.jpg",
    "desc": "Mohutná kamenná 34 metry vysoká věž z roku 1904 &#8211; naše nejzápadnější rozhledna. Postupně kruhový výhled ze čtyř otevřených galerií v rozích rozhledny&nbsp; (Smrčiny, Český a Slavkovský les, Krušné a Doupovské hory,"
  },
  {
    "id": 17136,
    "name": "Háječek",
    "slug": "hajecek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hajecek/",
    "kraj": ["Olomoucký kraj",
      "Šumperk"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hajecek/DSCF6661.JPG",
    "desc": "Třicetimetrová železná konstrukce ve tvaru hyperbolického paraboloidu stojí od roku 2022 na vrcholu kopce Háječek na konci lyžařského vleku z obce Zborov. V anketě o Rozhlednu roku 2022 obsadila první místo. Zastřešená plošina ve výšce 27 metrů posky"
  },
  {
    "id": 16504,
    "name": "Halaška",
    "slug": "halaska",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/halaska/",
    "kraj": ["Moravskoslezský kraj",
      "Opava"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/halaska/DSCF5846.JPG",
    "desc": "Devětadvacetimetrová kovová rozhledna stojící na čtyřech mohutných pylonech byla dokončená v&nbsp;roce 2021. Podle zvoleného materiálu a konstrukce, která v&nbsp;půdoryse tvoří pravoúhlý kříž, se jedná o jednu z&nbsp;nejpevnějších konstrukcí rozhlede"
  },
  {
    "id": 404,
    "name": "Hamelika",
    "slug": "hamelika",
    "url": "https://turistickamapa.cz/rozhledna-hamelika/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2024/rozhledna-hamelika-2024_6_4-151831.jpg",
    "desc": "Jedenadvacetimetrová válcová kamenná věž v podobě hradní zříceniny z roku 1876. Kvůli vysokému lesu je z otevřeného ochozu ve výšce 20 metrů pouze půlkruhový výhled jihozápadním směrem. V roce 2006 při celkové rekonstruk"
  },
  {
    "id": 22564,
    "name": "Hamštejn",
    "slug": "hamstejn",
    "url": "https://turistickamapa.cz/rozhledna-hamstejn/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2024/rozhledna-hamstejn-2024_18_8-152525.jpg",
    "desc": "Pětadvacetimetrový ocelový sloup z roku 2023 s točitým schodištěm, zpevněný třemi prohnutými dřevěnými podpěrami ve tvaru kalicha. Rozhledna Hamštejn je nováčkem mezi vyhlídkovými místy, přesto se ale může pyšnit vítězstvím v anketě Rozhledna roku 2023. Doporučuji spojit s návštěvou rozhledny Kozákov po červené turistické stezce necelé 4 km."
  },
  {
    "id": 14946,
    "name": "Haniperk",
    "slug": "haniperk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/haniperk/",
    "kraj": ["Jihočeský kraj",
      "Strakonice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/haniperk/20191028_14.jpg",
    "desc": "Bezmála pětadvacetimetrová dřevěná věž z&nbsp;roku 2019 je věrnou kopií rozhledny na nedalekém Boubíně jen s&nbsp;jedním rozdílem, a tím je zastřešení vyhlídkové plošiny, stejně jako je tomu na středočeské rozhledně Besedná. Nádherný kruhový výhled z"
  },
  {
    "id": 410,
    "name": "Hard",
    "slug": "hard",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hard/",
    "kraj": ["Karlovarský kraj",
      "Sokolov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hard/dscf0110.jpg",
    "desc": "Osmnáctimetrová zděná věž z roku 1908. Kruhový výhled ze dvou prosklených pater (Krušné hory, Slavkovský les, Sokolovská pánev). Rozhledna na Hardu se nachází téměř v centru Sokolova. Za první republiky zanikla a v roce "
  },
  {
    "id": 2374,
    "name": "Hartenštejn",
    "slug": "hartenstejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hartenstejn/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/karlovarsky-kraj/hartenstejn/DSCF1730.JPG",
    "desc": "Hrad z druhé poloviny 15. století byl již po sto letech uváděn jako zpustlý. Přesto byl ještě částečně opraven, ale po připojení k&nbsp;nedaleké Andělské hoře začátkem 17. století zpustl definitivně. Od 20. století byl p"
  },
  {
    "id": 1197,
    "name": "Hasištejn",
    "slug": "hasistejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hasistejn/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hasistejn/Hasi%C5%A1tejn1.JPG",
    "desc": "Gotický hrad z&nbsp;počátku 14. století byl vystavěn na oválné ploše strmého svahu v údolí Prunéřovského potoka. V&nbsp;17. století byl hrad opuštěný a chátral. Teprve na začátku&nbsp;18. století Emanuel Karsch začal hra"
  },
  {
    "id": 1978,
    "name": "Hatě",
    "slug": "hate",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hate/",
    "kraj": ["Jihomoravský kraj",
      "Znojmo"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hate/hate-9-13.jpg",
    "desc": "Patnáctimetrová železná rozhledna s vnějším, spirálovitě točitým schodištěm z roku 2001, která kryje komíny vzduchotechniky. Kruhový výhled ze zastřešeného ochozu ve výšce asi 10 metrů (areál zábavného parku Excalibur Ci"
  },
  {
    "id": 10229,
    "name": "Hauenštejn",
    "slug": "hauenstejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hauenstejn/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hauenstejn/DSCF9337.JPG",
    "desc": "Gotický strážní hrad z druhé poloviny 13. století byl od začátku 17. století postupně přestavěn na honosný renesanční zámek s&nbsp;romanticky laděným přírodně krajinářským parkem s&nbsp;terasovou zahradou a oranžerií. Bě"
  },
  {
    "id": 135,
    "name": "Havran",
    "slug": "havran",
    "url": "https://turistickamapa.cz/rozhledna-havran/",
    "kraj": ["Plzeňský kraj",
      "Tachov"],
    "photo": "https://turistickamapa.cz/data_fotos/2024/rozhledna-havran-2024_23_2-171322.jpg",
    "desc": "Bývalá vojenská ocelová věž z 80. let 20. století vybudovaná za účelem radiového odposlechu, podobně, jako čtyři další stavby na Dyleni, Velkém Zvonu, Čerchově a Poledníku. V roce 2011 byla značně zchátralá a k demolici odsouzená stavba převedena na "
  },
  {
    "id": 8150,
    "name": "Hazmburk",
    "slug": "hazmburk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hazmburk/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hazmburk/DSCF7095.JPG",
    "desc": "Nepřehlédnutelná zřícenina gotického hradu z&nbsp;poloviny 14. století s&nbsp;Bílou a Černou věží je postavena vysoko nad obcí Klapý na kraji Českého středohoří. Jedinečný kruhový výhled z&nbsp;Bílé věže ve výšce 26 metr"
  },
  {
    "id": 15075,
    "name": "Helfenburk – Bergfrit",
    "slug": "helfenburk-bergfrit",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/helfenburk-bergfrit/",
    "kraj": ["Jihočeský kraj",
      "Strakonice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/helfenburk-bergfrit/DSCN9369.JPG",
    "desc": "Kromě Východní věže se v areálu hradu nachází ještě nižší a v současné době nepřístupná věž &#8211; Bergfrit. Kruhový výhled z otevřeného ochozu (Šumavské vrcholy Libín, Boubín, Bobík, Chlum, Javorník, JE Temelín, rozhle"
  },
  {
    "id": 10213,
    "name": "Helfenburk – Hrádek",
    "slug": "helfenburk-hradek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/helfenburk-hradek/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/helfenburk-hradek/DSCF9267.JPG",
    "desc": "Hrad z&nbsp;první poloviny 14. století je vystavěn na vysoké pískovcové skále a dominuje mu mohutná sedmnáctimetrová čtyřboká věž s&nbsp;cimbuřím. Výhled z&nbsp;otevřené plošiny, na kterou se vystoupá úzkým točitým schodištěm je však, kromě celého ar"
  },
  {
    "id": 796,
    "name": "Helfenburk Okrouhlá věž",
    "slug": "helfenburk",
    "url": "https://turistickamapa.cz/helfenburk/",
    "kraj": ["Jihočeský kraj",
      "Strakonice"],
    "photo": "https://turistickamapa.cz/data_fotos/helfenburk-2021_11_3-113054.jpg",
    "desc": "Mohutná hradní Okrouhlá (Východní) věž ze 14. století byla rekonstruovaná v 60. a 70. letech 20. století a znovu zpřístupněná roce 1977. Kromě této věže se v areálu hradu nachází ještě nižší a v současné době nepřístupná věž &#8211; Bergfrit. Kruhový"
  },
  {
    "id": 10747,
    "name": "Helfštýn",
    "slug": "helfstyn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/helfstyn/",
    "kraj": ["Olomoucký kraj",
      "Přerov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/helfstyn/DSCF0007.JPG",
    "desc": "Hrad ze 14. století patří k&nbsp;nejrozsáhlejším hradním komplexům nejen u nás, ale dokonce i v&nbsp;celé Evropě. Má čtyři nádvoří, šest bran a množství bašt a věží. Nejvýše položená šestnáctimetrová pak slouží od roku 2"
  },
  {
    "id": 5775,
    "name": "Hemberk",
    "slug": "hemberk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hemberk/",
    "kraj": ["Jeseník",
      "Olomoucký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hemberk/DSCF5950.JPG",
    "desc": "Osmimetrová dřevěná stavba z&nbsp;roku 2009, která však byla slavnostně pokřtěna až po kolaudaci v&nbsp;roce 2011. Jednostranný výhled severovýchodním směrem na dominantní vrcholy Biskupskou kupu a Příčnou a daleko do po"
  },
  {
    "id": 3040,
    "name": "Heřmanice",
    "slug": "hermanice",
    "url": "https://turistickamapa.cz/rozhledna-hermanice/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-hermanice-2023_22_1-121944.jpg",
    "desc": "Originální čtyřiadvacetimetrová dřevěná rozhledna z&nbsp;roku 2012. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 23 metrů (Jizerské hory s dominantním Smrkem, Lužické hory se všemi nejznámějšími vrcholy Hvozdem, Luží"
  },
  {
    "id": 2533,
    "name": "Heřmanova Huť",
    "slug": "hermanova-hut",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hermanova-hut/",
    "kraj": ["Plzeň - sever",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/hermanova-hut/DSCF1865.JPG",
    "desc": "Šestnáctimetrová betonová vodárenská věž z roku 1908, která v šedesátých letech přestala být využívána a pomalu chátrala. V roce 2011 byla opravena, doplněna vnějším točitým schodištěm a na podzim téhož roku také zpřístu"
  },
  {
    "id": 1915,
    "name": "Hladnov",
    "slug": "hladnov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hladnov/",
    "kraj": ["Moravskoslezský kraj",
      "Ostrava město"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hladnov/DSCF7602.JPG",
    "desc": "Devatenáctimetrová secesní věž bývalé vodárny z roku 1909. V šedesátých letech vodárna ztratila svůj význam osazením nedalekých nových zásobníků vody. V roce 1973 byla přestavba nevyužívané stavby završena otevřením vyhl"
  },
  {
    "id": 5271,
    "name": "Hláska (Kypuš)",
    "slug": "hlaska-kypus",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hlaska-kypus/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hlaska-kypus/DSCF5270.JPG",
    "desc": "Osmimetrová kamenná rozhledna s&nbsp;dřevěnou nástavbou z&nbsp;roku 2015, které „stála předlohou“ rozhledna Na Chlumu u Slatiňan. Výhled ze zastřešeného ochozu ve výšce 4 metrů je omezen pouze severovýchodním směrem (Lan"
  },
  {
    "id": 1980,
    "name": "Hlinský kopec",
    "slug": "hlinsky-kopec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hlinsky-kopec/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hlinsky-kopec/obraz0172.jpg",
    "desc": "Dvaadvacetimetrová dřevěná rozhledna z roku 2007. Kruhový výhled z kryté místnosti ve výšce 18 metrů (Pálava, JE Dukovany, Bílé Karpaty). Rozhledna Vladimíra Menšíka je postavena 50 metrů od silnice z Neslovic do Moravsk"
  },
  {
    "id": 12446,
    "name": "Hluboká",
    "slug": "hluboka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hluboka/",
    "kraj": ["České Budějovice",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hluboka/DSCF1951.JPG",
    "desc": "Původní gotický hrad by založen už v&nbsp;polovině 13. století. V&nbsp;polovině 16. století jej noví majitelé nechali přestavět na renesanční zámek. Dalšími, tentokráte barokními úpravami, prošel zámek počátkem 18. stole"
  },
  {
    "id": 1592,
    "name": "Hnědý vrch",
    "slug": "hnedy-vrch",
    "url": "https://turistickamapa.cz/rozhledna-hnedy-vrch/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-hnedy-vrch-2021_10_10-104115.jpg",
    "desc": "Masivní jednatřicetimetrová dřevěná věž z roku 2009 s ocelovým schodištěm, vyhlídkovými plošinami a výztuhami. Kruhový výhled znemožňuje severozápadním směrem hlavní vrchol Liščí hory. Přesto je z horní zastřešené plošin"
  },
  {
    "id": 1201,
    "name": "Hněvín",
    "slug": "hnevin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hnevin/",
    "kraj": ["Most",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/hnevin/hnevin1.jpg",
    "desc": "Kamenná válcová věž, vysoká 34 metrů, s honosnou restaurací z roku 1900. Kruhový výhled z kryté dřevěné nástavby ve výšce 21 metrů (Mostecká pánev, Krušné hory, České středohoří, Doupovské hory). Rozhledna se nachází na "
  },
  {
    "id": 16309,
    "name": "Holedná",
    "slug": "holedna",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-holedna-brno",
    "kraj": ["Brno - město",
      "Jihomoravský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-holedna-brno/rozhledna-holedna-brno-1627-v5.jpg",
    "desc": "Štíhlá pětatřicetimetrová kovová rozhledna z&nbsp;roku 2020 s&nbsp;točitým schodištěm je vzhledem k&nbsp;úzké základně vyztužena překříženými ocelovými táhly, které mají imitovat drsnou kůru dubových kmenů, což jsou nejč"
  },
  {
    "id": 1982,
    "name": "Holý kopec",
    "slug": "holy-kopec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/holy-kopec/",
    "kraj": ["Jihomoravský kraj",
      "Vyškov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/holy-kopec/329.jpg",
    "desc": "Kovový šestimetrový ochoz postavený na střeše bohdalického vodojemu. Kruhový výhled z otevřeného ochozu (Ždánický les, Drahanská vrchovina, Chřiby, vysílač Kojál) Bohdalický vodojem je postaven na vrcholu prudkého stoupá"
  },
  {
    "id": 6552,
    "name": "Holý vrch",
    "slug": "holy-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/holy-vrch/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/holy-vrch/DSCF7046.JPG",
    "desc": "Šestimetrová dřevěná rozhledna z&nbsp;roku 2015. Kruhový výhled ze zastřešené plošiny ve výšce necelých čtyř metrů (Bílé Karpaty, Chřiby, Pálava, Ždánický les, rozhledna Travičná, Strážnice). Holý vrch je skutečně nezale"
  },
  {
    "id": 1207,
    "name": "Hora Svaté Kateřiny",
    "slug": "hora-svate-kateriny",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hora-svate-kateriny/",
    "kraj": ["Most",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/hora-svate-kateriny/hora_sv_k1.jpg",
    "desc": "Devatenáctimetrová kamenná válcová věž z roku 1902. Kruhový výhled ze zastřešené dřevěné nástavby ve výšce 16 metrů (Krušné hory, Německo). Na Růžový vrch vedou dvě silnice. První je z Brandova do Hory Svaté Kateřiny, kd"
  },
  {
    "id": 12473,
    "name": "Horažďovice",
    "slug": "horazdovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/horazdovice/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/horazdovice/DSCF2036.JPG",
    "desc": "Počátky hradu se datují do druhé poloviny 13. století, kdy severní a západní hradby obranného hradu navazovaly na městské opevnění. V&nbsp;průběhu 16. století hrad doznal značné přeměny na renesanční zámek. V&nbsp;posled"
  },
  {
    "id": 25868,
    "name": "Horní Blatná-věž kostela sv. Vavřince",
    "slug": "horni-blatna-vez-kostela-sv-vavrince",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/horni-blatna-vez-kostela-sv-vavrince/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/horni-blatna/DSCF5254.JPG",
    "desc": "Samotný kostel byl postaven ve druhé polovině 16. století ve stylu saské renesance. Nahradil původní pozdně gotickou dřevěnou svatyni. V roce 1754 byl barokně přestavěn. V letech 1605-1607 byla ke kostelu přistavěna šest"
  },
  {
    "id": 1841,
    "name": "Horní les",
    "slug": "horni-les",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/horni-les/",
    "kraj": ["Vysočina",
      "Žďár nad Sázavou"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/vysocina/horni-les/774.jpg",
    "desc": "Osmapadesátimetrová ocelová telekomunikační konstrukce z roku 2002. Nádherný kruhový výhled z otevřené vyhlídkové plošiny ve výšce 38 metrů (Českomoravská vrchovina, Jeseníky, Králický Sněžník, Krkonoše, Orlické hory, Žď"
  },
  {
    "id": 17288,
    "name": "Horník",
    "slug": "hornik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hornik/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hornik/DSCF6894.JPG",
    "desc": "Desetimetrová kovová rozhledna opláštěná dubovými fošnami, stojí spolu s dalšími třemi nižšími stavbami Liškou, Medvědem a Ovcí od roku 2021 na severním okraji vrchu Stráž nad Rokytnicí nad Jizerou, na jejímž městském zn"
  },
  {
    "id": 1595,
    "name": "Hořický Chlum",
    "slug": "horicky-chlum",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-horicky-chlum",
    "kraj": ["Jičín",
      "Královéhradecký kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-horicky-chlum/rozhledna-horicky-chlum-68074-v5.jpg",
    "desc": "Dvaačtyřicetimetrová&nbsp; ocelová telekomunikační věž z roku 1998. Kruhový výhled z otevřeného ochozu ve výšce 27 metrů (Krkonoše, Orlické hory, Zvičina, Hořice). Odbočka k rozhledně se nachází na vrcholu prudkého stoup"
  },
  {
    "id": 1210,
    "name": "Hořidla",
    "slug": "horidla",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/horidla/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/horidla/DSCF1114.JPG",
    "desc": "Čtrnáctimetrový ocelový tubus s vnějším vinutým schodištěm z roku 2008. Kruhový výhled z otevřeného ochozu ve výšce 13 metrů (České Středohoří s nedalekým Sedlem, v dálce Milešovka, Lovoš, Kletečná, Říp, Ronov a Vlhošť, "
  },
  {
    "id": 798,
    "name": "Hoslovice",
    "slug": "hoslovice",
    "url": "https://turistickamapa.cz/rozhledna-hoslovice/",
    "kraj": ["Jihočeský kraj",
      "Strakonice"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-hoslovice-2023_11_9-140454.jpg",
    "desc": "Padesátimetrový ocelový telekomunikační stožár z roku 2005. Kruhový výhled z otevřené plošiny ve výšce 30 metrů. (Šumava s vévodícím Boubínem a Bobíkem, Javorník, JE Temelín). Obec Hoslovice, nad níž se tyčí tato nepřehl"
  },
  {
    "id": 1875,
    "name": "Hostýn",
    "slug": "hostyn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hostyn/",
    "kraj": ["Kroměříž",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/hostyn/host.jpg",
    "desc": "Do jediného objektu spojená rozhledna a kaple Svatého kříže z roku 1897. V současné době stojí již jen patnáctimetrová kamenná věž bez původní dřevěné nadstavby, která byla vlivem nepříznivých povětrnostních podmínek poš"
  },
  {
    "id": 3321,
    "name": "Hošťálkovice",
    "slug": "hostalkovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hostalkovice/",
    "kraj": ["Moravskoslezský kraj",
      "Ostrava město"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hostalkovice/dscf0732.jpg",
    "desc": "Dřevěná osmimetrová rozhledna z&nbsp;roku 2011. Půlkruhový výhled ze zastřešené plošiny ve výšce 5 metrů jižním směrem (Ostrava se všemi důležitými průmyslovými podniky, elektrárna Třebovice, panoráma Beskyd od Lysé hory"
  },
  {
    "id": 2891,
    "name": "Hraběcí",
    "slug": "hrabeci",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hrabeci/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://cdn.kudyznudy.cz/files/77/77995c5b-e11a-4d06-9993-3723954069c4.jpg?v=20251227031056",
    "desc": "Třináctimetrová dřevěná rozhledna z&nbsp;roku 2011, postavená společně s&nbsp;dalšími pěti rozhlednami na uherskobrodsku podle stejných plánů. Dokonalému výhledu ze zastřešené plošiny ve výšce 10 metrů brání severním smě"
  },
  {
    "id": 1917,
    "name": "Hrad Dona Quijota",
    "slug": "hrad-dona-quijota",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hrad-dona-quijota/",
    "kraj": ["Frýdek - Místek",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/moravskoslezsky-kraj/hrad-dona-quijota/1.jpg",
    "desc": "Šestadvacetimetrová zděná věž, která po rekonstrukci z let 2003 – 2005 slouží od ledna 2005 také jako rozhledna. Výhled ze sedmnáct metrů vysoko položené místnosti je severním směrem omezen výčepem. Vyhlídkový prostor totiž slouží zároveň jako malá r"
  },
  {
    "id": 25869,
    "name": "Hradec Králové-Bílá věž",
    "slug": "hradec-kralove-bila-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hradec-kralove-bila-vez/",
    "kraj": ["Hradec Králové",
      "Královéhradecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hradec-kralove-bila-vez/DSCF8968.JPG",
    "desc": "Renesanční zvonice byla dostavěna až po krov v roce 1589 a sloužila městu zároveň jako strážní a požární věž. Spolu s vedle stojící katedrálou sv. Ducha tvoří dvě nepřehlédnutelné dominanty Hradce Králové. Její původní název byl Nová věž, teprve v po"
  },
  {
    "id": 13196,
    "name": "Hradec nad Moravicí – Bílá věž",
    "slug": "hradec-nad-moravici-bila-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hradec-nad-moravici-bila-vez/",
    "kraj": ["Moravskoslezský kraj",
      "Opava"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hradec-nad-moravici-bila-vez/DSCF2504.JPG",
    "desc": "Původně pohraniční pevnost a později gotický hrad ze 13. století se dvěma věžemi v&nbsp;16. století vyhořel. K&nbsp;přestavbě na renesanční sídlo došlo až v&nbsp;17. století. Na konci 18. století zámek opět vyhořel a tep"
  },
  {
    "id": 14121,
    "name": "Hradec nad Moravicí – Hodinová věž",
    "slug": "hradec-nad-moravici-hodinova-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hradec-nad-moravici-hodinova-vez/",
    "kraj": ["Moravskoslezský kraj",
      "Opava"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hradec-nad-moravici-hodinova-vez-1/DSCF2521.JPG",
    "desc": "Původně pohraniční pevnost a později gotický hrad ze 13. století se dvěma věžemi v&nbsp;16. století vyhořel. K&nbsp;přestavbě na renesanční sídlo došlo až v&nbsp;17. století. Na konci 18. století zámek opět vyhořel a tep"
  },
  {
    "id": 1213,
    "name": "Hrádek",
    "slug": "hradek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hradek/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/hradek/hradek1.jpg",
    "desc": "Honosná vyhlídková restaurace s 29 metrů vysokou rozhlednou z roku 1904. Kruhový výhled z kryté místnosti ve výšce 20 metrů (Lužické a Jizerské hory, Krkonoše, Varnsdorf, Německo). Tato majestátní stavba leží na severním okraji Varnsdorfu na hranici "
  },
  {
    "id": 12785,
    "name": "Hrádek u Nechanic",
    "slug": "hradek-u-nechanic",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hradek-u-nechanic/",
    "kraj": ["Hradec Králové",
      "Královéhradecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hradek-u-nechanic/DSCF2268.JPG",
    "desc": "Novogotický zámek ve tvaru otevřeného písmene V byl postaven až v letech 1839 – 1854 ve stylu tzv. Tudorovské gotiky a jako jeden z mála našich zámků nevznikl přestavbou bývalého hradu nebo tvrze. Když byla 3. července 1"
  },
  {
    "id": 298,
    "name": "Hradišť",
    "slug": "hradist",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hradist/",
    "kraj": ["Mělník",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/hradist/vh-017.jpg",
    "desc": "Devatenáctimetrová čtyřboká dřevená věž s kamennou podezdívkou z roku 2006. Kruhový výhled ze zastřešené plošiny ve výšce 15 metrů (Vrátenská hora, Říp, Ještěd, Bezděz, Ralsko, Kozákov,České středohoří, Jizerské hory, Kr"
  },
  {
    "id": 17632,
    "name": "Hradiště",
    "slug": "hradiste",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hradiste/",
    "kraj": ["Jihočeský kraj",
      "Písek"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hradiste/DSCF7309.JPG",
    "desc": "Bezmála šestimetrová dřevěná rozhledna z roku 2023 postavená z kroucených akátových kmenů. Výhled z&nbsp;otevřené plošiny ve výšce 4 metry (Jarník, Vysoký Kamýk, pára z&nbsp;chladicích věží elektrárny Temelín, Kbíl, Šuma"
  },
  {
    "id": 14258,
    "name": "Hradišťský vrch",
    "slug": "hradistsky-vrch",
    "url": "https://turistickamapa.cz/rozhledna-hradistsky-vrch/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-hradistsky-vrch-2020_4_7-131935.jpg",
    "desc": "Osmadvacetimetrová dřevěná rozhledna s točitým schodištěm stojí od roku 2019 na vrcholu Hradišťského vrchu. Nádherný kruhový výhled z otevřené vyhlídkové plošiny ve výšce 27 metrů (Kleť, Poluška, Kohout, Slepice, rozhled"
  },
  {
    "id": 3035,
    "name": "Hraniční vrch",
    "slug": "hranicni-vrch",
    "url": "https://turistickamapa.cz/rozhledna-hranicni-vrch/",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-hranicni-vrch-2021_29_10-150855.jpg",
    "desc": "Tato originální osmadvacetimetrová dvourozhledna vznikla v&nbsp;roce 2011 spojením dvou již nevyužívaných ocelových příhradových konstrukcí, které od roku 1980 sloužily pro přenos bezdrátového telefonního spojení. K&nbsp"
  },
  {
    "id": 13268,
    "name": "Hrubá Skála",
    "slug": "hruba-skala",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hruba-skala/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hruba-skala/DSCF2698.JPG",
    "desc": "Zámek je postaven jihovýchodně od Turnova na skupině pískovcových skalních věží a vznikl přestavbou hradu Skála z poloviny 14. století. Od 16. století prošel postupně renesančními, barokními, romantickými a novogotickými"
  },
  {
    "id": 10789,
    "name": "Hukvaldy",
    "slug": "hukvaldy",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hukvaldy/",
    "kraj": ["Frýdek - Místek",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hukvaldy/DSCF0088.JPG",
    "desc": "Jeden z&nbsp;nejrozsáhlejších moravských hradů byl vybudován na dlouhém hřebenu nad říčkou Ondřejnicí ve druhé polovině 13. století. Výhled z mohutné hranolové věže bývalého hradního paláce znemožňuje jižním směrem vrch "
  },
  {
    "id": 13256,
    "name": "Humprecht",
    "slug": "humprecht",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/humprecht/",
    "kraj": ["Jičín",
      "Královéhradecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/humprecht/DSCF2689.JPG",
    "desc": "Dvaatřicetimetrová věž loveckého zámku z&nbsp;druhé poloviny 17. století má zcela unikátní elipsovitý půdorys, inspirovaný italskými stavbami raného baroka. Deset let po dokončení zámek po zásahu bleskem vyhořel, byl zno"
  },
  {
    "id": 2861,
    "name": "Hustopečská rozhledna",
    "slug": "hustopecska-rozhledna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hustopecska-rozhledna/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/hustopecska-rozhledna/DSCF2324.JPG",
    "desc": "Sedmnáctimetrová dřevěná rozhledna se železným točitým schodištěm z&nbsp;roku 2012. Kruhový výhled z&nbsp;kryté plošiny ve výšce 13 metrů (Pálava, Novomlýnské nádrže, Hustopeče, dálnice D1, Bílé Karpaty, JE Dukovany). Z&"
  },
  {
    "id": 800,
    "name": "Hýlačka",
    "slug": "hylacka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hylacka/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hylacka/hylacka-01a.jpg",
    "desc": "Dřevěná osmnáctimetrová stavba ve tvaru husitské hlásky z roku 1920. Tvarově je téměř identická s východočeskou Rozálkou. Ze čtrnáctimetrové kryté místnosti je přes vysoké stromy značně omezený výhled, pouze severním smě"
  },
  {
    "id": 4596,
    "name": "Hýlačka II",
    "slug": "hylacka-ii",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/hylacka-ii/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/hylacka-ii/Hylacka-P5.JPG",
    "desc": "Původní dřevěná osmnáctimetrová stavba ve tvaru husitské hlásky z&nbsp;roku 1920 podlehla na Nový rok 2012 ničivému požáru a do základů vyhořela. V roce 2015 ji nahradila nová šestatřicetimetrová ocelová věž. Je postaven"
  },
  {
    "id": 15155,
    "name": "Chalupská Štěpánka",
    "slug": "chalupska-stepanka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chalupska-stepanka/",
    "kraj": ["Plzeň - jih",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/chalupska-stepanka/DSCF3545.JPG",
    "desc": "Téměř čtrnáctimetrová soukromá zděná věž, vystavěná jako replika obranné věže se základními znaky římských hraničních opevnění, stojí od roku 2017 na nezalesněném návrší Na Prantu (z německého Brand – spálený les, zde ve"
  },
  {
    "id": 22431,
    "name": "Charvatce",
    "slug": "charvatce",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/charvatce/",
    "kraj": ["Mladá Boleslav",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/charvatce/DSCF7782.JPG",
    "desc": "Čtrnáctimetrová kovová rozhledna z roku 2020 je kompletně obložena modřínovými prkny. Vybudována byla na místě staré zbourané hasičské zbrojnice jako sušárna hadic. Na ochoz ve výšce 12 metrů stoupá točité kovové schodiš"
  },
  {
    "id": 10198,
    "name": "Cheb",
    "slug": "cheb",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/cheb/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/cheb/DSCF9315.JPG",
    "desc": "Do dnešní doby se z&nbsp;původně románského hradu z&nbsp;počátku 12. století dochovala pouze mohutná Černá věž, zbytky honosného hradního paláce a unikátní románskogotická kaple. Devatenáctimetrová útočištná věž byla pos"
  },
  {
    "id": 139,
    "name": "Chlum",
    "slug": "chlum",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chlum/",
    "kraj": ["Plzeň - město",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/chlum/DSCF1752.JPG",
    "desc": "Čtyřboká zděná věž vyrostla v roce 1926 pro nedostatek financí pouze do třetinové výše, zato s kompletně vybavenou turistickou Pikovo chatou. Věž pak byla dostavěná do dnešní podoby 25 metrů o tři roky později. Turistická chata však byla v roce 1998 "
  },
  {
    "id": 412,
    "name": "Chlum Svaté Máří",
    "slug": "chlum-svate-mari",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chlum-svate-mari/",
    "kraj": ["Karlovarský kraj",
      "Sokolov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/chlum-svate-mari/0101_chlum-sv-mari_.jpg",
    "desc": "Dvacetimetrová cihlová věž z roku 1904 se zvláštní asymetrickou věžičkou. Kruhový výhled z otevřeného ochozu ve výšce 16 metrů&nbsp; (Krušné hory, Slavkovský a Český les, Sokolovská pánev). Chlum sv. Máří je poutní měste"
  },
  {
    "id": 1598,
    "name": "Chlum u Hradce Králové",
    "slug": "chlum-u-hradce-kralove",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chlum-u-hradce-kralove/",
    "kraj": ["Hradec Králové",
      "Královéhradecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/chlum-u-hradce-kralove/IMGP0716.JPG",
    "desc": "Ocelová, 52 metrů vysoká telekomunikační věž z roku 1999, postavená na místě bývalé pětadvacetimetrové železné věže z roku 1899. Kruhový výhled z otevřeného ochozu ve výšce 34 metrů (Krkonoše, Orlické hory, Železné hory,"
  },
  {
    "id": 237,
    "name": "Chlum u Chanovic",
    "slug": "chlum-u-chanovic",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chlum-u-chanovic/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/chlum-u-chanovic/DSCF1772.JPG",
    "desc": "Osmadvacetimetrová zděná věž z&nbsp;betonových cihel z&nbsp;roku 2010 s&nbsp;dřevěnou osmibokou nástavbou. Kruhový výhled z&nbsp;kryté vyhlídkové plošiny ve výšce 25 metrů (panorama Šumavy, Blatná, Písek, Brdy) Obec Chanovice leží na silnici Oselce –"
  },
  {
    "id": 1217,
    "name": "Chmelový maják",
    "slug": "chmelovy-majak",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chmelovy-majak/",
    "kraj": ["Louny",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/chmelovy-majak/1.jpg",
    "desc": "Čtyřicetimetrová čtyřboká ocelová věž z roku 2010 s vnějším schodištěm a výtahem uprostřed. Zakončení této stavby tvoří 7 ocelových tubusů, které symbolicky znázorňují chmelnici. Z otevřeného ochozu věže ve výšce 36 metrů je nádherný kruhový výhled n"
  },
  {
    "id": 11310,
    "name": "Chodský hrad",
    "slug": "chodsky-hrad",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chodsky-hrad/",
    "kraj": ["Domažlice",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/chodsky-hrad/DSCF0767.JPG",
    "desc": "Hrad byl založen v polovině 13. století jako sídlo královských purkrabí spravujících záležitosti Chodů, kteří střežili státní hranici. V šestnáctém století hrad dvakrát vyhořel a změnil se na ruinu. V osmnáctém století b"
  },
  {
    "id": 1984,
    "name": "Chocholík",
    "slug": "chocholik",
    "url": "https://turistickamapa.cz/rozhledna-chocholik/",
    "kraj": ["Jihomoravský kraj",
      "Vyškov"],
    "photo": "https://turistickamapa.cz/data_fotos/2020_2-3-120625-cover.jpg",
    "desc": "Mohutná šestadvacetimetrová ocelová věž s točitým schodištěm z roku 2011. Kruhový výhled ze zastřešené plošiny ve výšce 23 metrů (Ždánický les, Vyškov, zámek Račice, Chřiby, Hostýnské vrchy, Pálava, při dobré viditelnost"
  },
  {
    "id": 17000,
    "name": "Chomutov-Hvězdářská věž",
    "slug": "chomutov-hvezdarska-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chomutov-hvezdarska-vez/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/chomutov-hvezdarska-vez/IMG_2488.jpg",
    "desc": "Věž je ve svém základu pravděpodobně jednou z nejstarších staveb ve městě. Byla postavena v roce 1591 jako strážní věž městského opevnění v objektu jezuitského chudobince pro nemajetné studenty. V roce 1598 byl krov budo"
  },
  {
    "id": 25871,
    "name": "Chotěbuz-hlásná věž",
    "slug": "chotebuz-hlasna-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chotebuz-hlasna-vez/",
    "kraj": ["Karviná",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/chotebuz-hlasna-vez/DSCF7460.JPG",
    "desc": "Kamenná sedmnácti metrová věž z&nbsp;přelomu 12. a 13. století u Chotěbuzského zámku, která pravděpodobně kdysi sloužila jako hlásná věž původního opevnění. V&nbsp;letech 2003-2006 prošla rekonstrukcí a byla zpřístupněna veřejnosti. Kruhový výhled z&"
  },
  {
    "id": 802,
    "name": "Choustník",
    "slug": "choustnik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/choustnik/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/choustnik/P1010006.JPG",
    "desc": "Masivní osmnáctimetrová čtyřboká kamenná věž gotického hradu ze 13. století, která byla po roce 1926 upravena na rozhlednu. Choustník je cennou ukázkou hradu tvořeného více jádry, ve kterých sídlilo několik různých majitelů. Panoramatický pohled z&nb"
  },
  {
    "id": 10936,
    "name": "Chrast",
    "slug": "chrast",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chrast/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/chrast/DSCF0306.JPG",
    "desc": "Sedmadvacetimetrová vodárenská věž z opukového kamene z roku 1662, která v&nbsp;roce 1978 přestala sloužit svému účelu. Od roku 2010 proběhly ve věži stavební úpravy a vybudováním nového schodiště byla v&nbsp;roce 2012 v"
  },
  {
    "id": 26081,
    "name": "Chrudim-Mydlářovský dům",
    "slug": "chrudim-mydlarovsky-dum",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/chrudim-mydlarovsky-dum/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/chrudim-mydlarovsky-dum/DSCF8942.JPG",
    "desc": "Mydlářovský dům získal pojmenování po svém majiteli Matěji Mydláři, zámožném svíčkaři a výrobci mýdla. Inspirován svými cestami po Itálii nechal původní gotickou stavbu v letech 1573–1577 velkoryse přestavět v&nbsp;renes"
  },
  {
    "id": 18464,
    "name": "Jablonec nad Nisou-Nová radnice",
    "slug": "jablonec-nad-nisou-nova-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jablonec-nad-nisou-nova-radnice/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jablonec-nad-nisou-nova-radnice/DSCF0589.JPG",
    "desc": "Funkcionalistická stavba Nové radnice na Mírovém náměstí nahradila původní budovu Staré radnice na Dolním náměstí z&nbsp;roku 1869. Výraznou dominantou pětipatrové stavby z&nbsp;roku 1933 je jedenapadesátimetrová hranolo"
  },
  {
    "id": 9818,
    "name": "Jablonné v Podještědí",
    "slug": "jablonne-v-podjestedi",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jablonne-v-podjestedi/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jablonne-v-podjestedi/DSCF8783.JPG",
    "desc": "Bývalý farní kostel sv. Kříže byl vystavěn už ve druhé polovině 13. století. 11. května 1788 však vyhořel. Téměř po osmdesáti letech byla ruina přestavěna na pivovar a po II. světové válce zde byla zřízena škola. Od roku"
  },
  {
    "id": 1698,
    "name": "Jahůdka",
    "slug": "jahudka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jahudka/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/jahudka/Jahudka%20%282%29.jpg",
    "desc": "Dvanáctimetrová soukromá dřevěná třípatrová rozhledna z roku 2008. Výhled je vzhledem k vzrostlým stromům omezen pouze jihovýchodním směrem na Luže s dominantním poutním kostelem. Severozápadní směr nabízí přes Dobrkovsk"
  },
  {
    "id": 3804,
    "name": "Janov",
    "slug": "janov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/janov/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/janov/dscf2287.jpg",
    "desc": "Čtyřicetimetrová ocelová věž mobilního operátora s vnitřním točitým schodištěm z roku 2013. Adrenalinový kruhový výhled ze zastřešeného ochozu ve výšce 33 metrů  (Děčínský Sněžník, Křídelní stěna, v Sasku Zirkelstein, Ka"
  },
  {
    "id": 23858,
    "name": "Janovský mokřad",
    "slug": "janovsky-mokrad",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/janovsky-mokrad/",
    "kraj": ["Plzeň - sever",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/janovsky-mokrad/DSCF8547.JPG",
    "desc": "Bezmála devítimetrová rozhledna stojí na rozhraní borového remízku a pastviny od roku 2023 a slouží veřejnosti jako nekontaktní pozorovatelna zvěře. Janovský mokřad byl vyhlášen plzeňským krajem za přírodní rezervaci na "
  },
  {
    "id": 804,
    "name": "Jarník",
    "slug": "jarnik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jarnik/",
    "kraj": ["Jihočeský kraj",
      "Písek"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jarnik/0107_jarnik.jpg",
    "desc": "Devětapadesátimetrová ocelová telekomunikační věž z roku 1997. Kruhový výhled z otevřené plošiny ve výšce 35 metrů (jižní Šumava, Novohradské hory, Kleť, Písecko, Brdy). Překvapivě z ní nejsou vidět věže Temelína, ale po"
  },
  {
    "id": 1700,
    "name": "Jarošov",
    "slug": "jarosov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jarosov/",
    "kraj": ["Pardubický kraj",
      "Svitavy"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/jarosov/539.jpg",
    "desc": "Patnáctimetrová dřevěná Toulovcova rozhledna z roku 2002. Kruhový výhled ze zastřešené plošiny ve výšce 12 metrů (Žďárské vrchy, Krkonoše, Orlické hory, Králický Sněžník, Jeseníky, Železné hory, Toulovcovy maštale). Rozh"
  },
  {
    "id": 806,
    "name": "Javorník",
    "slug": "javornik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/javornik/",
    "kraj": ["Jihočeský kraj",
      "Prachatice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/javornik/P1010001.jpg",
    "desc": "Původně 25 metrů vysoká kamenná Klostermannova rozhledna z roku 1938. Ze starého proskleného ochozu pro vzrostlý les nebyl prakticky žádný výhled. Proto byla k původní věži přistavena (podle mého názoru dost necitlivě) a"
  },
  {
    "id": 1222,
    "name": "Jedlová",
    "slug": "jedlova",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jedlova/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/jedlova/jedlova1.jpg",
    "desc": "Devětadvacetimetrová&nbsp; masivní válcová kamenná věž z roku 1891. Jedinečný kruhový výhled z otevřeného ochozu ve výšce 23 metrů (Lužické a Jizerské hory, Krkonoše, Ještěd, Trosky, Bezděz, Krušné hory, České středohoří"
  },
  {
    "id": 25264,
    "name": "Jehla",
    "slug": "jehla",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jehla/",
    "kraj": ["Kladno",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jehla/DSCF9273.JPG",
    "desc": "Sedmimetrová dřevěná rozhledna stojí od roku 2025 na severním úbočí Vinařické hory. Výhled z otevřené vyhlídkové plošiny z výšky téměř šest metrů je značně omezen mohutným masivem Vinařické hory, která zakrývá celý jižní"
  },
  {
    "id": 9734,
    "name": "Jenštejn",
    "slug": "jenstejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jenstejn/",
    "kraj": ["Praha - východ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jenstejn/DSCF8504.JPG",
    "desc": "Dvaadvacetimetrová kamenná válcová věž z&nbsp;první poloviny 14. století. V&nbsp;současné době prochází celkovou rekonstrukcí pláště a celá je zahalena lešením. Kruhový výhled z&nbsp;otevřené plošiny (České středohoří s&"
  },
  {
    "id": 1226,
    "name": "Jeřabina",
    "slug": "jerabina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jerabina/",
    "kraj": ["Most",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/jerabina/jerabina2.jpg",
    "desc": "Šestimetrová dřevěná rozhledna na kamenné podstavě z roku 1884, která v roce 2009 opět získala podobu z 20. let minulého století. Kruhový výhled ze zastřešené plošiny ve výšce 2 metry&nbsp; (Krušné hory, České středohoří"
  },
  {
    "id": 929,
    "name": "Ještěd",
    "slug": "jested",
    "url": "https://turistickamapa.cz/rozhledna-jested/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2019_3-11-185708-tmp.jpg",
    "desc": "Třiadevadesátimetrová&nbsp; konstrukce ve tvaru rotačního hyperboloidu z roku 1973 (stavba probíhala od roku 1966).V roce 1969 za ni architekt Hubáček získal prestižní Perretovu cenu Mezinárodní unie architektů. Fantasti"
  },
  {
    "id": 809,
    "name": "Jezerní slať",
    "slug": "jezerni-slat",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jezerni-slat/",
    "kraj": ["Jihočeský kraj",
      "Prachatice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/jezerni-slat/P1010025.jpg",
    "desc": "Dvoupodlažní dřevěná trámová vyhlídka z roku 1997. Výhled z horního patra ve výšce 6 metrů omezuje východním směrem vzrostlý les (Jezerní slať, Sokol). Výchozím bodem k návštěvě Jezerní slati je parkoviště u silnice z Kv"
  },
  {
    "id": 6420,
    "name": "Jezerní vyhlídka",
    "slug": "jezerni-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jezerni-vyhlidka/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jezerni-vyhlidka/Jezerni-vyhlidka-1.JPG",
    "desc": "Masivní devítimetrová dřevěná stavba z&nbsp;roku 2016. Kruhový výhled ze zastřešené vyhlídkové plošiny ve výšce 5 metrů (vodní nádrž Lipno, Horní Planá, Vítkův kámen, Smrčina, Hraničník, Plechý, rozhledna Dobrá Voda). Ro"
  },
  {
    "id": 16047,
    "name": "Jičín-Valdická brána",
    "slug": "jicin-valdicka-brana",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jicin-valdicka-brana/",
    "kraj": ["Jičín",
      "Královéhradecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jicin-valdicka-brana/DSCF4778.JPG",
    "desc": "Součástí opevnění města byly původně tři věže, z&nbsp;nichž se do dnešních dnů dochovala pouze Valdická brána. Stavba renesanční věže probíhala v letech 1568-1578. Roku 1589 věž vyhořela a následně byla zvýšena o třetí p"
  },
  {
    "id": 17861,
    "name": "Jihlava-Brána Matky Boží",
    "slug": "jihlava-brana-matky-bozi",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jihlava-brana-matky-bozi/",
    "kraj": ["Jihlava",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jihlava-brana-matky-bozi/DSCF6007.JPG",
    "desc": "Z&nbsp;původních pěti středověkých bran zůstala Brána Matky Boží jedinou dochovanou středověkou branou ve městě. Brány vznikly v&nbsp;době výstavby města a ochranného hradebního systému na počátku druhé poloviny 13. stol"
  },
  {
    "id": 9528,
    "name": "Jindřichův Hradec",
    "slug": "jindrichuv-hradec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jindrichuv-hradec/",
    "kraj": ["Jihočeský kraj",
      "Jindřichův Hradec"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jindrichuv-hradec/DSCF8309.JPG",
    "desc": "Původně gotický hrad ze 13. století byl postupně přestavěn na zámek, který je v současné době po Pražském hradu a zámku v Českém Krumlově třetím nejrozsáhlejším komplexem v Čechách. Kruhový výhled z&nbsp;masivní kamenné "
  },
  {
    "id": 26083,
    "name": "Jindřichův Hradec-Městská věž kostela Nanebevzetí Panny Marie",
    "slug": "jindrichuv-hradec-mestska-vez-kostela-nanebevzeti-panny-marie",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jindrichuv-hradec-mestska-vez-kostela-nanebevzeti-panny-marie/",
    "kraj": ["Jihočeský kraj",
      "Jindřichův Hradec"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jindrichuv-hradec-mestska-vez/DSCF7985.JPG",
    "desc": "Proboštský kostel Nanebevzetí Panny Marie&nbsp;pochází asi z 60.–70. let 14. století. Věž u kostela je zdaleka viditelnou dominantou města. Její celková výška je 68 metrů, z toho báň má téměř 24 metrů. Koule na vrcholu m"
  },
  {
    "id": 26090,
    "name": "Jirkov-městská věž při kostele sv. Jiljí",
    "slug": "jirkov-mestska-vez-pri-kostele-sv-jilji",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/jirkov-mestska-vez-pri-kostele-sv-jilji/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/jirkov-mestska-vez/DSCF6257.JPG",
    "desc": "Výstavba devětadvaceti metrové pětipodlažní věže, která byla přistavěna ke kostelu sv. Jiljí, probíhala od&nbsp;roku 1540&nbsp;do roku 1545 a zpřístupněna byla v&nbsp;roce 1582.&nbsp;Věž měla od&nbsp;počátku obranný a&nb"
  },
  {
    "id": 1986,
    "name": "Johanka",
    "slug": "johanka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/johanka/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/johanka/2012-07-10-hysly-rozhledna-johanka-01.jpg",
    "desc": "Jedenáctimetrová dřevěná rozhledna z roku 2006. Půlkruhový výhled z krytého ochozu ve výšce 7 metrů (Ždánický les, Chřiby a hrad Buchlov). Odbočka k rozhledně se nachází na konci obce Hýsly, ležící východně od Kyjova na "
  },
  {
    "id": 2812,
    "name": "Jurkovičova rozhledna",
    "slug": "jurkovicova-rozhledna",
    "url": "https://turistickamapa.cz/jurkovicova-rozhledna/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/jurkovicova-rozhledna-2020_20_6-110406.jpg",
    "desc": "Stylová 31 metrů vysoká dřevěná (dub, jedle, smrk) rozhledna z&nbsp;roku 2012, postavená podle nákresů slovenského architekta Dušana Jurkoviče z&nbsp;roku 1896 (známý především svými lidově-secesními stavbami v&nbsp;Luha"
  },
  {
    "id": 1919,
    "name": "Kabátice",
    "slug": "kabatice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kabatice/",
    "kraj": ["Frýdek - Místek",
      "Moravskoslezský kraj"],
    "photo": "https://cdn.kudyznudy.cz/files/f1/f182dd17-5357-4373-b2cf-933874ef40c8.jpg?v=20260205122815",
    "desc": "Dvaadvacet metrů vysoká ocelová věž z roku 2001. Půlkruhový výhled na severovýchod z nižší zastřešené plošiny ve výšce 15 metrů (Frýdek -Místek, Ostrava, Beskydy). Po projetí celé obce Chlebovice začíná na jejím horním k"
  },
  {
    "id": 17252,
    "name": "Kalamajka",
    "slug": "kalamajka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kalamajka/",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kalamajka/DSCF6866.JPG",
    "desc": "Štíhlá šestadvacetimetrová rozhledna stojí na vrcholu Javornické hůry od roku 2021. Kombinovaná stavba z&nbsp;betonu a oceli je v&nbsp;horní polovině stylově zakryta dřevěnými palubkami. Kruhový výhled z uzavřené místnos"
  },
  {
    "id": 6568,
    "name": "Kamenný vrch",
    "slug": "kamenny-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kamenny-vrch/",
    "kraj": ["Brno - město",
      "Jihomoravský kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Kr%C3%A1sensk%C3%A1_rozhledna_%C4%8Dervenec_2019_%282%29.jpg/960px-Kr%C3%A1sensk%C3%A1_rozhledna_%C4%8Dervenec_2019_%282%29.jpg",
    "desc": "Téměř sedmimetrová betonová rozhledna z&nbsp;roku 1928, která prošla v&nbsp;roce 2011 celkovou rekonstrukcí. Výhled ze čtyř metrů vysoké otevřené plošiny zatím stále znemožňují vzrostlé stromy, po opadání listí je výhled"
  },
  {
    "id": 514,
    "name": "Kamzík",
    "slug": "kamzik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kamzik/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kamzik/0117_kamzik.jpg",
    "desc": "Zděná, 25 metrů vysoká rozhledna s restaurací z roku 1895. Půlkruhový výhled ze zastřešeného ochozu ve výšce 17 metrů je pouze jihozápadním směrem (Mariánské Lázně, Český les). Pří výjezdu z Mariánských Lázní směrem na Z"
  },
  {
    "id": 3191,
    "name": "Kaňk",
    "slug": "kank",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-kank-havirska-bouda",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-kank/rozhledna-kank-16627-v5.jpg",
    "desc": "Třicetimetrová mohutná zděná věž z roku 2013 s vnitřním výtahem je celá obložená kyklopským zdivem. Kruhový výhled z kryté vyhlídkové plošiny ve výšce 26 metů, která slouží zároveň i jako malá kavárna (Kutná Hora, Čáslav"
  },
  {
    "id": 1843,
    "name": "Karasín",
    "slug": "karasin",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-karasin",
    "kraj": ["Vysočina",
      "Žďár nad Sázavou"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-karasin/rozhledna-karasin-549-v5.jpg",
    "desc": "Třicetimetrová rozhledna z betonových tvárnic z roku 2002, postavená na vrcholu sjezdovky. Kruhový výhled z kryté místnosti ve výšce 24 metrů (Českomoravská vrchovina, Bystřice nad Pernštejnem, Žďárské vrchy, rozhledna H"
  },
  {
    "id": 771,
    "name": "Karlova vyhlídka",
    "slug": "karlova-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/karlova-vyhlidka/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/karlova-vyhlidka/2013-05-05-vyhlidka-karla-iv-v-karlovych-varech-01.jpg",
    "desc": "Patnáctimetrová pseudogotická cihlová věž z roku 1876 se dvěma vyhlídkovými patry &#8211; napodobenina rozhledny v německém Schleswigu. Vzhledem k vzrostlým stromům je výhled omezen pouze severním směrem na lázeňskou čás"
  },
  {
    "id": 11470,
    "name": "Karlštejn",
    "slug": "karlstejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/karlstejn/",
    "kraj": ["Beroun",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/karlstejn/DSCF1031.JPG",
    "desc": "Jeden z&nbsp;našich nejznámějších a nejnavštěvovanějších hradů z&nbsp;první poloviny 14. století je vystavěn na vysokém skalním výběžku nad Budňanským potokem. Hradu vévodí téměř šedesátimetrová hranolová Velká věž. Nejv"
  },
  {
    "id": 17713,
    "name": "Karviná – Lipiny",
    "slug": "karvina-lipiny",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/karvina-lipiny/",
    "kraj": ["Karviná",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/karvina-lipiny/DSCF7474.JPG",
    "desc": "Devítimetrová železná rozhledna je vlastně zmenšenou kopií těžní věže. Byla postavena na okraji golfového hřiště v roce 2011 a v&nbsp;následujícím roce zpřístupněna veřejnosti. Půlkruhový výhled z&nbsp;otevřené plošiny v"
  },
  {
    "id": 8146,
    "name": "Kašperk",
    "slug": "kasperk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kasperk/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kasperk/DSCF6827.JPG",
    "desc": "Gotický hrad založený Karlem IV. v&nbsp;roce 1356 se dvěma typickými věžemi je postaven na severozápadním výběžku tisícimetrové hory Ždánov. Fantastický kruhový výhled z&nbsp;malých vikýřů hradních věží &#8211; Východní "
  },
  {
    "id": 811,
    "name": "Kbíl",
    "slug": "kbil",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kbil/",
    "kraj": ["Jihočeský kraj",
      "Strakonice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/kbil/DSCF1437.JPG",
    "desc": "Dvaačtyřicetimetrová ocelová telekomunikační věž z roku 2008. Kruhový výhled z otevřeného ochozu ve výšce 30 metrů (Strakonice, Šumava s Boubínem a Bobíkem, Libín, Kleť, Brdy, JE Temelín). Nejsnadnější přístupovou cestou"
  },
  {
    "id": 5438,
    "name": "Kelčský Javorník",
    "slug": "kelcsky-javornik",
    "url": "https://turistickamapa.cz/rozhledna-kelcsky-javornik/",
    "kraj": ["Kroměříž",
      "Zlínský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2025/rozhledna-kelcsky-javornik-2025_13_4-114958.jpg",
    "desc": "Šestatřicetimetrová dřevěná rozhledna s ocelovými výztužnými prvky a točitým schodištěm z&nbsp;roku 2015. Fantastický kruhový výhled z&nbsp;otevřené plošiny ve výšce 30 metrů téměř na celou Moravu (Hostýnské vrchy se sv."
  },
  {
    "id": 6396,
    "name": "Kladruby nad Labem",
    "slug": "kladruby-nad-labem",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kladruby-nad-labem/",
    "kraj": ["Pardubice",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kladruby-nad-labem/DSCF6936.JPG",
    "desc": "Dvaadvacetimetrový železobetonový vodojem z dvacátých let minulého století ztratil vybudováním nového vodovodu v 70. letech svoji funkci. Nevyužívaný objekt byl po vzoru vodojemu v Heřmanově Huti v roce 2015 přestavěn na"
  },
  {
    "id": 13198,
    "name": "Klášterec nad Ohří",
    "slug": "klasterec-nad-ohri",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/klasterec-nad-ohri/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/klasterec-nad-ohri/DSCF2566.JPG",
    "desc": "Původní renesanční zámek vznikl přestavbou středověké tvrze. Během třicetileté války byl vydrancován a vypálen. Poté byl přestavěn v&nbsp;barokním stylu, ovšem poslední přestavby se dočkal po požáru v&nbsp;roce 1856, kdy"
  },
  {
    "id": 145,
    "name": "Klatovská Hůrka",
    "slug": "klatovska-hurka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/klatovska-hurka/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/klatovska-hurka/P1010030.JPG",
    "desc": "Patnáctimetrová zděná vyhlídková nástavba vestavěná v roce 1969 do obvodových zdí bývalé kaple sv. Anny. Kruhový výhled z prosklené vyhlídkové nástavby v současné době znemožňují vrcholky vzrostlých listnatých stromů. Př"
  },
  {
    "id": 26117,
    "name": "Klatovy-Černá věž",
    "slug": "klatovy-cerna-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/klatovy-cerna-vez/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/klatovy-cerna-vez/DSCF5221.JPG",
    "desc": "Téměř dvaaosmdesát metrů vysoká pozdně gotická devítipatrová hodinová věž a zvonice z&nbsp;roku 1557, sousedící s&nbsp;renesanční radnicí, je nepřehlédnutelnou dominantou Klatov. V roce 1758 město zachvátil velký požár, "
  },
  {
    "id": 9536,
    "name": "Klenová",
    "slug": "klenova",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/klenova/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/klenova/DSCF8343.JPG",
    "desc": "První záznamy o hradu pocházejí z druhé poloviny 13. století. Z té doby se na jihozápadní straně zachovala mohutná Hranolová věž s&nbsp;hladomornou. Kruhovému výhledu z&nbsp;otevřeného ochozu brání severovýchodním směrem"
  },
  {
    "id": 2378,
    "name": "Klepáč",
    "slug": "klepac",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-klepac",
    "kraj": ["Příhraničí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/klepac/klepy2011-23.jpg",
    "desc": "Pětadvacetimetrová dřevěná rozhledna z&nbsp;roku 2009. Nádherný kruhový výhled ze zastřešené plošiny ve výšce 22 metrů (Králický Sněžník, Stezka v oblacích, Orlické hory, Suchý vrch, Jeseníky, Krkonoše, Jeřáb, Polsko).&n"
  },
  {
    "id": 813,
    "name": "Kleť",
    "slug": "klet",
    "url": "https://turistickamapa.cz/rozhledna-klet/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Rozhledna_Kle%C5%A5_2.JPG",
    "desc": "Kamenná, válcová věž s címbuřím z roku 1825. Nádherný kruhový výhled z otevřeného ochozu ve výšce 18 metrů (jižní a centrální Šumava, Novohradské hory, jihočeská pánev, JE Temelín, Hluboká a za dobré viditelností rakousk"
  },
  {
    "id": 723,
    "name": "Klínovec",
    "slug": "klinovec",
    "url": "https://turistickamapa.cz/rozhledna-klinovec/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://turistickamapa.cz/data_fotos/vysilac-na-klinovci-2021_15_1-201902.jpg",
    "desc": "17 metrů vysoká zděná věž z roku 1884. Kvůli havarijnímu stavu byla po dlouhých průtazích v roce 2012 původní věž zcela demontována a&nbsp; zahájena výstavba nové rozhledny. Ta pak byla slavnostně otevřena 28. 10 2013. F"
  },
  {
    "id": 1988,
    "name": "Klucanina",
    "slug": "klucanina",
    "url": "https://turistickamapa.cz/rozhledna-klucanina/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-klucanina-2021_8_12-183022.jpg",
    "desc": "Osmadvacetimetrová věž z betonových tvárnic, postavená na původní kamenné podstavě rozhledny z roku 1934. Kruhový výhled ze dvou vyhlídkových ochozů &#8211; v úrovni podezdívky a ve výšce 21 metrů, nebo ze zastřešené plo"
  },
  {
    "id": 2989,
    "name": "Knížecí stolec",
    "slug": "knizeci-stolec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/knizeci-stolec/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/knizeci-stolec/DSCF2920.JPG",
    "desc": "Masivní osmimetrová dřevěná rozhledna z&nbsp;roku 2012. Fantastický kruhový výhled ze zastřešené plošiny ve výšce 4 metry (vojenský prostor Boletice s&nbsp;vrcholy Lysá, Chlum, Špičák, Šumava se Smrčinou, Plechým, Luzným"
  },
  {
    "id": 1229,
    "name": "Kohout",
    "slug": "kohout",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kohout/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/kohout/Kohout-1.jpg",
    "desc": "Železná nástavba připevněná na kamenném podstavci z roku 1908. V roce 2010 prošla celkovou rekonstrukcí, včetně částečného vykácení okolního porostu. Dokonalému výhledu z otevřeného ochozu ve výšce 12 metrů brání vzrostl"
  },
  {
    "id": 9892,
    "name": "Kokořín",
    "slug": "kokorin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kokorin/",
    "kraj": ["Mělník",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kokorin/DSCF8730.JPG",
    "desc": "Hrad Kokořín byl vystavěn v&nbsp;první polovině 14. století na vysokém ostrohu uprostřed Kokořínského dolu, tvořeného kvádrovými pískovci. Přestože převyšuje dno dolu téměř o sto metrů, je z&nbsp;větší části stále skryt "
  },
  {
    "id": 26124,
    "name": "Kolín-zvonice",
    "slug": "kolin-zvonice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kolin-zvonice/",
    "kraj": ["Kolín",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kolin-zvonice/DSCF8105.JPG",
    "desc": "Účelem zvonice, která byla postavena v roce 1504 bylo umístění dvou středověkých zvonů, které dříve svým pohybem narušovaly stabilitu severní chrámové věže. Ve své původní podobě byla ukončena jehlancovou střechou s drob"
  },
  {
    "id": 1232,
    "name": "Komáří vížka",
    "slug": "komari-vizka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/komari-vizka/",
    "kraj": ["Teplice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/komari-vizka/komari-vizka1.jpg",
    "desc": "Horský hotel s patnácimetrovou rozhlednou z roku 1857. Po adaptaci byla vyhlídková okna věže zaslepena, čímž věž ztratila funkci rozhledny. Naštěstí okolní terén poskytuje výborný výhled na Krušné hory, České středohoří,"
  },
  {
    "id": 3970,
    "name": "Komec",
    "slug": "komec",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-komec",
    "kraj": ["Brno - město",
      "Jihomoravský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-komec/rozhledna-komec-79182-v5.jpg",
    "desc": "Pětadvacetimetrový komín bývalé kotelny sloužící k&nbsp;vytápění skleníků, který byl v&nbsp;roce 2014 obestavěn ocelovým točitým schodištěm. Kruhový výhled z&nbsp;otevřené plošiny ve výšce 25 metrů (jižní část Brna a nej"
  },
  {
    "id": 932,
    "name": "Kopanina",
    "slug": "kopanina",
    "url": "https://turistickamapa.cz/rozhledna-kopanina/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-kopanina-2023_22_1-122257.jpg",
    "desc": "Jedenadvacetimetrová cihlová válcová věž z roku 1894. Kruhový výhled z prosklené dřevěné nástavby ve výšce 18 metrů (Jizerské hory, Krkonoše, Ještědský hřbet, Český ráj s Kozákovem, Trosky, Bezděz, Milešovka). Osada Kopa"
  },
  {
    "id": 13416,
    "name": "Kopaninka",
    "slug": "kopaninka",
    "url": "https://turistickamapa.cz/rozhledna-kopaninka/",
    "kraj": ["Olomoucký kraj",
      "Prostějov"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-kopaninka-2022_28_1-124749.jpg",
    "desc": "Dvaadvacetimetrová dřevěná šestiboká věž z roku 2018 s kovovým točitým schodištěm. V anketě o rozhlednu roku 2018, pořádané Klubem přátel rozhleden, obsadila 3. místo. Kruhový výhled ze zastřešeného ochozu ve výšce 19 me"
  },
  {
    "id": 1991,
    "name": "Kopaniny",
    "slug": "kopaniny",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kopaniny/",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/kopaniny/P1010020.JPG",
    "desc": "Devítimetrová dřevěná rozhledna z roku 2007. Výhled ze zastřešeného ochozu ve výšce šest metrů je omezen pouze východním směrem na Olešnici a západním na vrchol stejnojmenného kopce. Rozhledna na Kopaninách se nachází na"
  },
  {
    "id": 157,
    "name": "Koráb",
    "slug": "korab",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/korab/",
    "kraj": ["Domažlice",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/korab/DSCF2482.JPG",
    "desc": "Padesátimetrová ocelová věž z roku 1992. Kruhový výhled z kryté vyhlídkové gondoly ve výšce 29 metrů (Český les, Šumava, vnitrozemí až k Plzni, za dobré viditelnosti i Alpy). Na rozcestí pod Korábem vedou tři silnice. Ne"
  },
  {
    "id": 17107,
    "name": "Korunka",
    "slug": "korunka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/korunka/",
    "kraj": ["Praha - západ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/korunka/014.jpg",
    "desc": "Originální třicetimetrová vyosená kovová rozhledna, sestávající se ze dvou nakloněných mimoběžných křižujících se rotačních hyperboloidů, kterými prochází točité schodiště, stojí od roku 2022 na vrcholu příkrého zalesněn"
  },
  {
    "id": 11261,
    "name": "Kosice",
    "slug": "kosice",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-kosice",
    "kraj": ["Hradec Králové",
      "Královéhradecký kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-kosice/rozhledna-kosice-58737-v5.jpg",
    "desc": "Osmimetrová dřevěná rozhledna z&nbsp;roku 2017 je postavena na uměle vytvořeném kopci, který vznikl navršením materiálu z&nbsp;vybagrovaného rybníka. Ten leží na severním okraji rozsáhlého volně přístupného soukromého př"
  },
  {
    "id": 10858,
    "name": "Kostelany",
    "slug": "kostelany",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kostelany/",
    "kraj": ["Kroměříž",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kostelany/DSCF0237.JPG",
    "desc": "Jednoduchá dvoupatrová pětimetrová dřevěná stavba z&nbsp;roku 2014. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 4 metry (Hostýnské vrchy s Hostýnem a Kelčským Javorníkem, areál ranče, vrcholky Chřibů, rovina Hornomo"
  },
  {
    "id": 5890,
    "name": "Kostelíček",
    "slug": "kostelicek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kostelicek/",
    "kraj": ["Třebíč",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kostelicek/DSCF5469.JPG",
    "desc": "Zděný jedenadvacetimetrový vodojem z&nbsp;roku 1938, který byl v&nbsp;roce 2015 upraven na rozhlednu. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 18 metrů (celá Třebíč, rozhledna Pekelný vrch, Českomoravská vrchovin"
  },
  {
    "id": 2691,
    "name": "Kostelní Hlavno",
    "slug": "kostelni-hlavno",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kostelni-hlavno/",
    "kraj": ["Praha - východ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/kostelni-hlavno/DSCF2246.JPG",
    "desc": "Jedenáctimetrová železná vojenská strážní věž, která byla převezena ze Slánské hory u Slaného a v&nbsp;roce 2011 znovu postavena na severním okraji obce nad opuštěným opukovým lomem. Kruhový výhled z&nbsp;otevřeného ocho"
  },
  {
    "id": 10432,
    "name": "Kostomlaty",
    "slug": "kostomlaty",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kostomlaty/",
    "kraj": ["Teplice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kostomlaty/DSCF9569.JPG",
    "desc": "Zřícenina šlechtického hradu z poloviny 14. století s dominantní třicetimetrovou válcovou věží, od roku 2014 upravenou na rozhlednu. Nádherný půlkruhový výhled z otevřeného ochozu ve výšce 25 metrů je možný především záp"
  },
  {
    "id": 3698,
    "name": "Kotel",
    "slug": "kotel",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kotel/",
    "kraj": ["Plzeňský kraj",
      "Rokycany"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kotel/dscf1285.jpg",
    "desc": "Osmadvacetimetrová ocelová věž z roku 2014, svými rozkročenými stojinami vzdáleně připomínající pražský Petřín a nebo ještě troufaleji pařížskou Eifelovku. Nádherný kruhový výhled ze zastřešeného ochozu ve výšce 25 metrů"
  },
  {
    "id": 10340,
    "name": "Kotnov",
    "slug": "kotnov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kotnov/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kotnov/DSCF7617.JPG",
    "desc": "Hrad byl založen ve druhé polovině 13. století jako součást bývalého města Hradiště. Z&nbsp;původních čtyř věží se zachovala pouze tzv. Bateriová věž na jihozápadní straně hradu. Kruhový výhled z&nbsp;otevřeného ochozu v"
  },
  {
    "id": 2697,
    "name": "Kovářka",
    "slug": "kovarka",
    "url": "https://turistickamapa.cz/rozhledna-kovarka/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-kovarka-2022_21_2-160016.jpg",
    "desc": "Třináctimetrová kamenná soukromá rozhledna z roku 2012 s&nbsp;vnitřním točitým kovovým schodištěm. Kruhový výhled z&nbsp;kryté dřevěné nástavby ve výšce 10 metrů (Blaník, stará měřící věž a vysílač Mezivrata). Nádherně p"
  },
  {
    "id": 937,
    "name": "Kozákov",
    "slug": "kozakov",
    "url": "https://turistickamapa.cz/rozhledna-kozakov/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-kozakov-2023_6_7-182614.jpg",
    "desc": "Padesátimetrová ocelová vojenská věž z roku 1995. Fantastický kruhový výhled z otevřené plošiny ve výšce 24 metrů. Doporučuji spojit s návštěvou rozhledny Hamštejn po červené turistické stezce necelé 4 km."
  },
  {
    "id": 11197,
    "name": "Kozí Hrádek",
    "slug": "kozi-hradek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kozi-hradek/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kozi-hradek/DSCF0655.JPG",
    "desc": "Na vrcholu vápencového vrchu nad Mikulovem byla v&nbsp;15. století postavena dělostřelecká věž na zlepšení obrany města, střežícího důležitou obchodní stezku z&nbsp;Brna do Vídně. V&nbsp;devadesátých letech 20. století b"
  },
  {
    "id": 1702,
    "name": "Kozlovský kopec (Kozinec)",
    "slug": "kozlovsky-kopec",
    "url": "https://turistickamapa.cz/rozhledna-kozlovsky-kopec/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-kozlovsky-kopec-2020_6_6-153102.jpg",
    "desc": "Pětapadesátimetrová ocelová telekomunikační věž z roku 2001. Kruhový výhled z otevřeného ochozu ve výšce 32 metrů (Krkonoše, Orlické hory, Jeseníky, Králický Sněžník, Českomoravská vrchovina). Na Kozlovský kopec vede pěk"
  },
  {
    "id": 1921,
    "name": "Kozubová",
    "slug": "kozubova",
    "url": "https://turistickamapa.cz/rozhledna-kozubova/",
    "kraj": ["Frýdek - Místek",
      "Moravskoslezský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-kozubova-2023_18_2-134804.jpg",
    "desc": "Osmnáctimetrová kamenná kaple sv. Anny s vyhlídkovou věžičkou z roku 1936. Lesem částečně omezený výhled jižním směrem ze zastřešené místnosti ve výšce 15 metrů. Opačným směrem lze shlédnout Beskydy s Velkou Kyčerou, Ost"
  },
  {
    "id": 159,
    "name": "Kožich",
    "slug": "kozich",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kozich/",
    "kraj": ["Plzeň - jih",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/kozich/kozich1.jpg",
    "desc": "Pětatřicetimetrová ocelová telekomunikační věž z roku 2007. Nádherný kruhový výhled z otevřené plošiny ve výšce 20 metrů (panorama Šumavy od Boubína, přes Poledník, Plesnou, Jezerní horu až po Ostrý, Český les od Čerchov"
  },
  {
    "id": 2032,
    "name": "Kožova hora",
    "slug": "kozova-hora",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-kozova-hora",
    "kraj": ["Kladno",
      "Středočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-kozova-hora/rozhledna-kozova-hora-71959-v5.jpg",
    "desc": "Pětatřicetimetrová železobetonová věž, dozděná bílými struskovými cihlami z roku 1930. Kruhový výhled ze zaskleného ochozu ve výšce 31 metrů (Praha a letiště Ruzyně, Kladno, České středohoří, Říp, Brdy, Krušné, Lužické a"
  },
  {
    "id": 2887,
    "name": "Králov",
    "slug": "kralov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kralov/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/kralov/DSCF2376.JPG",
    "desc": "Třináctimetrová dřevěná rozhledna z&nbsp;roku 2011, postavená společně s&nbsp;dalšími pěti rozhlednami na uherskobrodsku podle stejných plánů. Kruhový výhled ze zastřešené plošiny ve výšce 10 metrů (Uherský Brod, Bánov, "
  },
  {
    "id": 1877,
    "name": "Královec",
    "slug": "kralovec",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-kralovec",
    "kraj": ["Zlín",
      "Zlínský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-kralovec/rozhledna-kralovec-23654-v5.jpg",
    "desc": "Dvaadvacetimetrová dřevěná rozhledna z roku 2006. Kruhový výhled ze zastřešené plošiny ve výšce metrů19 metrů (Vizovické vrchy, Bílé Karpaty, Valašské Klobouky). Odbočka ke stejnojmennému rekreačnímu středisku se nachází"
  },
  {
    "id": 1061,
    "name": "Královka",
    "slug": "kralovka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kralovka/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/kralovka/IMG_3502.jpg",
    "desc": "Kamenná, 24 metrů vysoká věž z roku 1907 s horskou chatou, kterou doplnily v poslední době nové ubytovací objekty. Nádherný kruhový výhled z kryté vyhlídkové plošiny a visutých balkonů ve výšce 20 metrů (Jizerské hory, J"
  },
  {
    "id": 725,
    "name": "Krásenský vrch",
    "slug": "krasensky-vrch",
    "url": "https://turistickamapa.cz/rozhledna-krasensky-vrch/",
    "kraj": ["Karlovarský kraj",
      "Sokolov"],
    "photo": "https://turistickamapa.cz/data_fotos/2019_18-10-154110-tmp.jpg",
    "desc": "Na naše poměry zcela originální válcová kamenná věž z roku 1935 se spirálovitě vinutým vnějším schodištěm. Kruhový rozhled z otevřeného ochozu ve výšce 25 metrů (vrcholky Slavkovského lesa, panorama Krušných hor se všemi"
  },
  {
    "id": 1248,
    "name": "Krásný Dvůr",
    "slug": "krasny-dvur",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krasny-dvur/",
    "kraj": ["Louny",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/krasny-dvur/kd1.jpg",
    "desc": "Dvacetimetrový novogotický templ z roku 1796 s venkovním točitým schodištěm. Jedná se o naši nejstarší rozhlednu. Výhled z otevřeného ochozu&nbsp; ve výšce 12 metrů je značně omezen vzrostlými stromy. Po opadání listů je"
  },
  {
    "id": 1251,
    "name": "Kratochvílova rozhledna",
    "slug": "kratochvilova-rozhledna",
    "url": "https://turistickamapa.cz/kratochvilova-rozhledna/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/kratochvilova-rozhledna-2021_9_7-190931.jpg",
    "desc": "Třináctimetrová betonová rozhledna z roku 1935. Kruhovému výhledu z kryté plošiny ve výšce 9 metrů brání jižním směrem vzrostlé stromy (České středohoří s dominantními vrcholky Milešovkou, Lovošem, Kletečnou, Hazmburkem,"
  },
  {
    "id": 1993,
    "name": "Kraví hora",
    "slug": "kravi-hora-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kravi-hora-2/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/kravi-hora-2/P1010009.JPG",
    "desc": "Patnáctimetrová dřevěná věž z roku 2006. Kruhový výhled ze zastřešeného ochozu (jihovýchodním směrem Pálava a Bílé Karpaty, severním směrem brání vzdálenějšímu výhledu o 50 metrů vyšší vrchol). Nejjednodušší cesta k rozh"
  },
  {
    "id": 815,
    "name": "Kraví hora",
    "slug": "kravi-hora",
    "url": "https://turistickamapa.cz/rozhledna-kravi-hora/",
    "kraj": ["České Budějovice",
      "Jihočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2019_18-10-131030-tmp.jpg",
    "desc": "Původně vojenská čtyřicetimetrová ocelová hláska z osmdesátých let 20. století. V roce 2001 byly železné žebříky nahrazeny točitým schodištěm a věž byla zesílena šikmými opěrami. Kruhový výhled z otevřené plošiny ve výšc"
  },
  {
    "id": 169,
    "name": "Krkavec",
    "slug": "krkavec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krkavec/",
    "kraj": ["Plzeň - sever",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/krkavec/DSCF1755.JPG",
    "desc": "Osmnáctimetrová kamenná a cihlová Simlova věž z roku 1901. Kruhový výhled z otevřeného ochozu ve výšce 16 metrů (Plzeňsko, Šumava, Český les, Brdy, Doupovské hory, Slavkovský les, Radyně, rozhledna Chlum a Sylván). Cesta"
  },
  {
    "id": 13101,
    "name": "Kroměříž",
    "slug": "kromeriz",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kromeriz/",
    "kraj": ["Kroměříž",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kromeriz/DSCF2362.JPG",
    "desc": "Město Kroměříž, jinak též přezdívané Hanácké Atény, leží v&nbsp;rovinatém jižním okraji úrodné Hané. Počátky založení reprezentativního sídla olomouckých biskupů sahají už do 13. století. Dominantou zámku je 84 metrů vys"
  },
  {
    "id": 728,
    "name": "Krudum",
    "slug": "krudum",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krudum/",
    "kraj": ["Karlovarský kraj",
      "Sokolov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/karlovarsky-kraj/krudum/P1010014.JPG",
    "desc": "Šedesátimetrová ocelová telekomunikační věž z roku 2008. Kruhový výhled z otevřeného ochozu ve výšce 30 metrů (Sokolov, Karlovy Vary, Krušné hory, Slavkovský les, Doupovské hory, Český les). Jediná solidní přístupová ces"
  },
  {
    "id": 11667,
    "name": "Krupka",
    "slug": "krupka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krupka/",
    "kraj": ["Teplice",
      "Ústecký kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lu%C4%8Dany_nad_Nisou_2019-06_07.jpg/960px-Lu%C4%8Dany_nad_Nisou_2019-06_07.jpg",
    "desc": "Zřícenina hradu z počátku 14. století se nachází na vrcholu ostrožny naproti mohutnému kostelu Nanebevzetí Panny Marie ve stejnojmenné obci. Půlkruhový výhled z otevřené plošiny ve výšce téměř sedm metrů je možný převážn"
  },
  {
    "id": 1254,
    "name": "Kryry",
    "slug": "kryry",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kryry/",
    "kraj": ["Louny",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/kryry/P1010001.JPG",
    "desc": "Sedmadvacetimetrová cihlová věž z roku 1906 se třemi vyhlídkovými patry. Kruhový výhled z otevřeného ochozu ve výšce 22 metrů (Krušné hory, Doupovské hory, České středohoří). Rozhledna se nachází na strmém kopci východní"
  },
  {
    "id": 1845,
    "name": "Křemešník",
    "slug": "kremesnik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kremesnik/",
    "kraj": ["Pelhřimov",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/vysocina/kremesnik/P1010027.JPG",
    "desc": "Dvaapadesátimetrová ocelová vojensko-telekomunikační věž z roku 1993. Kruhový výhled z otevřené plošiny ve výšce 44 metrů (Českomoravská vrchovina, Čeřínek, Javořice, &nbsp;Žďárské vrchy, Novohradské hory). Na známé pout"
  },
  {
    "id": 22438,
    "name": "Křepice",
    "slug": "krepice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krepice/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/krepice/DSCF7709.JPG",
    "desc": "V&nbsp;roce 1984 bylo rozhodnuto o vybudování monumentálního památníku na počest Bratislavsko-brněnské operace z&nbsp;dubna roku 1945. Na mohutném betonovém základě pak vyrostla železná konstrukce o průměru deseti metrů."
  },
  {
    "id": 15105,
    "name": "Křivoklát – Huderka",
    "slug": "krivoklat-huderka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krivoklat-huderka/",
    "kraj": ["Rakovník",
      "Středočeský kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hrad_K%C5%99ivokl%C3%A1t_-_z%C3%A1b%C4%9Br_od_pomn%C3%ADku_Karla_Egona_II._z_F%C3%BCrstenberka_crop.jpg/1280px-Hrad_K%C5%99ivokl%C3%A1t_-_z%C3%A1b%C4%9Br_od_pomn%C3%ADku_Karla_Egona_II._z_F%C3%BCrstenberka_crop.jpg",
    "desc": "Křivoklát je jedním z&nbsp;našich nejstarších a nejrozsáhlejších středověkých hradů. Založen byl v&nbsp;první polovině 13. století na vysokém skalním ostrohu, který obtéká ze tří stran Rakovnický potok. Hradu vévodí tři "
  },
  {
    "id": 11421,
    "name": "Křivoklát – Velká věž",
    "slug": "krivoklat-velka-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krivoklat-velka-vez/",
    "kraj": ["Rakovník",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/krivoklat/DSCF0926.JPG",
    "desc": "Křivoklát je jedním z&nbsp;našich nejstarších a nejrozsáhlejších středověkých hradů. Založen byl v&nbsp;první polovině 13. století na vysokém skalním ostrohu, který obtéká ze tří stran Rakovnický potok. Hradu vévodí tři "
  },
  {
    "id": 1847,
    "name": "Křivoš",
    "slug": "krivos",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krivos/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/vysocina/krivos/P1010019.JPG",
    "desc": "Sedmimetrová dřevěná rozhledna z roku 2004. Půlkruhový výhled ze zastřešeného ochozu ve výšce 5 metrů. (Tišnov, Čebínka, železniční viadukt Dolní Loučky). Rozhledna se nachází vpravo od hlavní silnice z Tišnova do Dolní "
  },
  {
    "id": 1704,
    "name": "Křížová hora",
    "slug": "krizova-hora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krizova-hora/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/krizova-hora/krizova-hora-9-11.jpg",
    "desc": "Pětadvacetimetrový železobetonový tubus z roku 2006 vyztužený osmi svislými žebry. Celá věž je pak obložena smrkovými palubkami. Kruhový výhled z uzavřené místnosti ve výšce 22 metrů&nbsp; (Orlické hory s Bukovou horou a"
  },
  {
    "id": 164,
    "name": "Křížový vrch",
    "slug": "krizovy-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/krizovy-vrch/",
    "kraj": ["Plzeň - jih",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/krizovy-vrch/DSCF1249.JPG",
    "desc": "Poutní kostelík z roku 1862, k němuž byla v roce 1931 přistavěna třiadvacetimetrová věž, sloužící jako rozhledna. Kruhovému výhledu z krytého ochozu ve výšce 13 metrů brání místy ještě přerostlé stromy, i když část jich "
  },
  {
    "id": 13326,
    "name": "Kumburk",
    "slug": "kumburk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kumburk/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kumburk/DSCF2726.JPG",
    "desc": "Šestimetrová dřevěná rozhledna z&nbsp;roku 2018 je osazena do objektu bývalé hradní věže a nahradila téměř totožnou původní rozhlednu z&nbsp;roku 2003. Fantastický kruhový výhled z&nbsp;otevřené plošiny ve výšce 5 metrů "
  },
  {
    "id": 10644,
    "name": "Kunětická hora",
    "slug": "kuneticka-hora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kuneticka-hora/",
    "kraj": ["Pardubice",
      "Pardubický kraj"],
    "photo": "https://www.hrad-kunetickahora.cz/pamatky/kuneticka-hora/fotogalerie/galerie-na-web/Exteriery/image-thumb__139558__OgTagImage/hrad%20celek.webp",
    "desc": "Hrad z&nbsp;počátku 15. století byl vystavěn na osamoceném skalnatém vrchu, převyšující o 80 metrů okolní krajinu. Celek tak vytváří výraznou dominantu jinak rovinatého Polabí. Postupně kruhový výhled z&nbsp;malých okéne"
  },
  {
    "id": 2034,
    "name": "Kuníček",
    "slug": "kunicek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kunicek/",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/kunicek/061.jpg",
    "desc": "Šestapadesátimetrová ocelová konstrukce vyrůstající z mohutné kamenné podstavy z roku 2003. Kruhový výhled z kryté plošiny ve výšce 36 metrů. (Příbramsko, Sedlčansko, Táborsko, Šumava). Odbočka k rozhledně se nachází v o"
  },
  {
    "id": 2803,
    "name": "Kunovická hůrka",
    "slug": "kunovicka-hurka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kunovicka-hurka/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/kunovicka-hurka/DSCF2440.JPG",
    "desc": "Šestimetrová dřevěná rozhledna z&nbsp;roku 2010. Výhledu jižním směrem z&nbsp;třímetrové zastřešené plošiny brání vysoký les na vrcholu Kunovické hůrky (Kunovice, Hostýnské a v&nbsp;dálce pak Oderské vrchy a Beskydy s&nb"
  },
  {
    "id": 14792,
    "name": "Kunovická hůrka II",
    "slug": "kunovicka-hurka-ii",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kunovicka-hurka-ii/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kunovicka-hurka-ii/DSCN2159.jpg",
    "desc": "Šestimetrovou dřevěnou rozhlednu z roku 2010 asi po šesti letech pohltil okolní les a její ochoz ve výšce 3 metry neposkytoval žádný výhled. Proto byla v roce 2017 rozebrána a znovu postavena o 200 metrů východně, blíže "
  },
  {
    "id": 817,
    "name": "Kupa",
    "slug": "kupa",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/kupa/",
    "kraj": ["Jihočeský kraj",
      "Písek"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/kupa/jestrebice1.jpg",
    "desc": "Třináctimetrová dřevěná rozhledna z roku 2009. Kruhový výhled ze zastřešené plošiny ve výšce 10 metrů (nevýrazná krajina středního Povltaví, jižním směrem se ale nedají přehlédnout mohutné chladící věže JE Temelín, za do"
  },
  {
    "id": 378,
    "name": "Ládví",
    "slug": "ladvi",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ladvi/",
    "kraj": ["Praha - východ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/ladvi/DSCF1180.JPG",
    "desc": "Pětačtyřicetimetrový ocelový telekomunikační tubus s vnějším točitým schodištěm z roku 2009. Výhled z otevřeného ochozu ve výšce 25 metrů je možný pouze východním směrem na nevýraznou kopcovitou krajinu středního Posázav"
  },
  {
    "id": 301,
    "name": "Lahovický most",
    "slug": "lahovicky-most",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lahovicky-most/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/hlavni-mesto-praha/lahovicky-most/IMG_4436.JPG",
    "desc": "Dvojice zcela identických devítimetrových ocelových věží stojících na levém břehu mostu přes Berounku v Lahovicích na jižním okraji Prahy. Otevřeny byly postupně s dokončením mostu v roce 2003 a 2004. Kruhový výhled z ot"
  },
  {
    "id": 1923,
    "name": "Landek",
    "slug": "landek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/landek/",
    "kraj": ["Moravskoslezský kraj",
      "Ostrava město"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/landek/landek-1.jpg",
    "desc": "Jednoduchá osmimetrová dřevěná věž z roku 1998. Lesem omezený výhled ze zastřešené plošiny ve výšce 5 metrů pouze jihovýchodním směrem (Ostrava, Beskydy). Rozhledna na Landeku se nachází na jižním svahu parkového areálu "
  },
  {
    "id": 2381,
    "name": "Landštejn",
    "slug": "landstejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/landstejn/",
    "kraj": ["Jihočeský kraj",
      "Jindřichův Hradec"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/landstejn/SAM_1371.JPG",
    "desc": "Rozsáhlý středověký hrad z&nbsp;1. poloviny 13. století. Po zabezpečovacích úpravách, které probíhaly od roku 1972 byl hrad v&nbsp;roce 1990 zpřístupněn veřejnosti. Nádherný kruhový výhled z&nbsp;otevřeného ochozu masivn"
  },
  {
    "id": 1707,
    "name": "Lanšperk",
    "slug": "lansperk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lansperk/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/lansperk/P1010022.JPG",
    "desc": "Osmimetrová kovová konstrukce z roku 2007, sestavená z pozinkovaného lešení. Kruhový výhled z otevřené plošiny přes hradby hradu z poloviny 13. století (údolí Tiché Orlice, Andrlův chlum, Orlické hory). Tato stavba je um"
  },
  {
    "id": 1710,
    "name": "Lázek",
    "slug": "lazek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lazek/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/lazek/714.jpg",
    "desc": "Čtyřboká dřevěná věž, krytá šindelem, s Reichlovo chatou z roku 1933. Kruhový výhled ze zastřešené místnosti ve výšce 20 metrů (Jeseníky, Králický Sněžník, Orlické hory, Železné hory, Českomoravská vrchovina). Lázek je p"
  },
  {
    "id": 6584,
    "name": "Lebedov",
    "slug": "lebedov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lebedov/",
    "kraj": ["Kroměříž",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lebedov/DSCF7014.JPG",
    "desc": "Devítimetrová dřevěná rozhledna z&nbsp;roku 2015 je symbolicky doplněná lopatkami větrného mlýna, které na Kroměřížsku kdysi stávaly v&nbsp;hojném počtu. Vzhledem k&nbsp;tomu, že stavba je situována na úbočí kopce, výhle"
  },
  {
    "id": 10558,
    "name": "Ledeč nad Sázavou",
    "slug": "ledec-nad-sazavou",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ledec-nad-sazavou/",
    "kraj": ["Havlíčkův Brod",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/ledec-nad-sazavou/DSCF9694.JPG",
    "desc": "Hrad se od 12. století vypíná na mohutné vápencové skále nad řekou Sázavou a zdaleka mu vévodí štíhlá 32 metrová věž. Ze 4 zasklených okének v&nbsp;podkrovní místnosti je nádherný výhled na město, řeku Sázavu a údolím pr"
  },
  {
    "id": 11221,
    "name": "Lednice – kolonáda",
    "slug": "lednice-kolonada",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lednice-kolonada/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lednice-kolonada/DSCF0679.JPG",
    "desc": "Šestimetrový kovový sloup se spirálovitě vinutým schodištěm z&nbsp;roku 2014 je celý zakrytý svislými dřevěnými latěmi. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 5 metrů (zámek Lednice, Janův hrad, Lovecký zámeček"
  },
  {
    "id": 13304,
    "name": "Lemberk",
    "slug": "lemberk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lemberk/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lemberk/DSCF2765.JPG",
    "desc": "Strážní hrad z&nbsp;poloviny 13. století byl v&nbsp;roce 1550 přestaven na renesanční sídlo. Z původních zdí se dochovala jen část okrouhlé šestadvacetimetrové věže, která dominuje celému objektu do dnešních dnů. Po zříc"
  },
  {
    "id": 6738,
    "name": "Lenka",
    "slug": "lenka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lenka/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lenka/DSCF2620.JPG",
    "desc": "Jedenáctimetrový dřevěný myslivecký posed z roku 2009, který zároveň slouží ukázněným turistům jako rozhledna. Kruhový výhled ze zastřešené plošiny ve výšce 8 metrů (Adršpašsko-teplické skály, Ostaš, Broumovské stěny, Or"
  },
  {
    "id": 1257,
    "name": "Letná",
    "slug": "letna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/letna/",
    "kraj": ["Teplice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/letna/IMG_1997.jpg",
    "desc": "Třicetimetrová kamenná věž z roku 1897. Kruhový výhled z otevřeného ochozu (Teplice, Doubravka, Krušné hory, České středohoří). Na vrchol Letné, ležící na jižním okraji Teplic se z města dostaneme Rooseweltovo ulicí. Na "
  },
  {
    "id": 1880,
    "name": "Lhotka",
    "slug": "lhotka-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lhotka-2/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lhotka_1/dsc_0105.jpg",
    "desc": "Pětatřicetimetrová ocelová telekomunikační věž z roku 2001. Otevřená plošina ve výšce 18 metrů sice nabízí kruhový výhled do blízkého okolí, ale většímu rozhledu severovýchodním směrem brání vyšší Prakšická vrchovina (Bí"
  },
  {
    "id": 316,
    "name": "Lhotka",
    "slug": "lhotka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lhotka/",
    "kraj": ["Beroun",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lhotka/2013-05-10-lhotka-u-berouna-rozhledna-02.jpg",
    "desc": "Pětačtyřicetimetrový ocelový telekomunikační stožár z roku 2006. Kruhový výhled z otevřené plošiny ve výšce 25 metrů  (Brdy, Cukrák, letiště Ruzyně, Beroun, Kladno). Odbočka k obci Lhotka, nad níž se tyčí tato rozhledna,"
  },
  {
    "id": 12770,
    "name": "Libá",
    "slug": "liba",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/liba/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/liba/DSCF2213.JPG",
    "desc": "Raně gotický hrad byl založen v&nbsp;polovině 13. století. V&nbsp;průběhu18. století byl goticko-renesanční hrad přestavěn na pohodlný reprezentativní barokní zámek. Po skončení II. světové války byl objekt zkonfiskován "
  },
  {
    "id": 26130,
    "name": "Liberec-Severočeské muzeum",
    "slug": "liberec-severoceske-muzeum",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/liberec-severoceske-muzeum/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/liberec-severoceske-muzeum/DSCF6618.JPG",
    "desc": "Kamenná 41metrová věž je přesnou kopií renesanční radniční věže, zbourané v&nbsp;roce 1893. V&nbsp;budově sídlí Severočeské muzeum, které je naše nejstarší uměleckoprůmyslové muzeum. Bylo založeno v&nbsp;roce 1873. S&nbs"
  },
  {
    "id": 1064,
    "name": "Liberecká výšina",
    "slug": "liberecka-vysina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/liberecka-vysina/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/liberecka-vysina/P1010013.JPG",
    "desc": "Pětadvacetimetrová kamenná rozhledna v podobě středověkého hradu z roku 1901. Kruhový výhled ze zastřešené vyhlídkové místnosti ve výšce 21 metrů (Jizerské hory, Ještědský hřbet, Javorník, Liberec, Jablonec). Z Lidových "
  },
  {
    "id": 819,
    "name": "Libín",
    "slug": "libin",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-libin",
    "kraj": ["Jihočeský kraj",
      "Prachatice"],
    "photo": "https://cdn.kudyznudy.cz/files/71/7157f52b-a036-4137-9b50-dbad6559139b.jpg?v=20241204042144",
    "desc": "Sedmadvacetimetrová kamenná válcová věž z roku 1883. Nádherný kruhový výhled z otevřeného ochozu ve výšce 26 metrů (centrální a jižní Šumava, Prachaticko, Kleť, Novohradské hory, JE Temelín, Brdy, za dobré viditelnosti A"
  },
  {
    "id": 1603,
    "name": "Libníkovice",
    "slug": "libnikovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/libnikovice/",
    "kraj": ["Hradec Králové",
      "Královéhradecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/libnikovice/311.jpg",
    "desc": "Patnáctimetrová železná rozhledna z roku 1930, postavená na místě památné Národní lípy. Výhledu z otevřeného ochozu brání vzrostlé listnaté stromy. Pouze v zimních měsících po opadání listí je omezený výhled severozápadn"
  },
  {
    "id": 1068,
    "name": "Lidové sady",
    "slug": "lidove-sady",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lidove-sady/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lidove-sady-2/031-lidove-sady.jpg",
    "desc": "Dvaatřicetimetrová zděná věž z roku 1901. Půlkruhový výhled z místnosti v hrázděné nástavbě věže ve výšce 25 metrů (Liberec, Ještědský hřbet). Snadno dostupná rozhledna s honosným kulturně-společenským a výletním objekte"
  },
  {
    "id": 10523,
    "name": "Lipnice nad Sázavou",
    "slug": "lipnice-nad-sazavou",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lipnice-nad-sazavou/",
    "kraj": ["Havlíčkův Brod",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lipnice-nad-sazavou/DSCF9718.JPG",
    "desc": "Jeden z&nbsp;našich nejmohutnějších hradů z&nbsp;počátku 14. století je vystavěný na vysokém návrší kolem stejnojmenné obce. Hradu dominuje torzo masivní Velké věže. Ta utrpěla značnou škodu za třicetileté války v&nbsp;r"
  },
  {
    "id": 318,
    "name": "Líský",
    "slug": "lisky",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lisky/",
    "kraj": ["Kladno",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/lisky/IMG_1982.jpg",
    "desc": "Pětačtyřicetimetrový ocelový tubus s vnějším točitým schodištěm z roku 2008. Kruhový výhled z otevřeného ochozu ve výšce 25 metrů (České středohoří, Říp, Ještěd, Džbán, hřebeny Krušných hor). Lepšímu výhledu na západ ale"
  },
  {
    "id": 10272,
    "name": "Litice nad Orlicí",
    "slug": "litice-nad-orlici",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/litice-nad-orlici/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/litice-nad-orlici/DSCF9458.JPG",
    "desc": "Částečně zrekonstruovaná zřícenina hradu z&nbsp;konce 13. století s&nbsp;dominantní 35 metrovou věží. Daleké výhledy ze zastřešené vyhlídkové místnosti ve výšce 25 metrů znemožňují vrcholky okolních zalesněných kopců. Kr"
  },
  {
    "id": 26138,
    "name": "Litoměřice-dům Kalich",
    "slug": "litomerice-dum-kalich",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/litomerice-dum-kalich/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/litomerice-dum-kalich/DSCF7885.JPG",
    "desc": "Původně pozdně gotický dům z&nbsp;první poloviny 16. století byl v&nbsp;letech 1570-1580 renesančně přestavěn do dnešní podoby pro rodinu Mrázů z&nbsp;Milešovky, kteří zde zastávali úřad radních a perkmistrů hor viničnýc"
  },
  {
    "id": 26149,
    "name": "Litomyšl-Červená věž",
    "slug": "litomysl-cervena-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/litomysl-cervena-vez/",
    "kraj": ["Pardubický kraj",
      "Svitavy"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/litomysl-cervena-vez/DSCF8867.JPG",
    "desc": "Červená věž z přelomu 15. a 16. století je jediným viditelně dochovaným pozůstatkem pozdně gotického opevnění Horního města. Jméno Červená věž získala díky silně ohořelému zbarvení zdiva při četných požárech Horního Měst"
  },
  {
    "id": 11033,
    "name": "Loket",
    "slug": "loket",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/loket/",
    "kraj": ["Karlovarský kraj",
      "Sokolov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/loket/DSCF0480.JPG",
    "desc": "Goticko-románský hrad z&nbsp;první poloviny 13. století je vystavěn na vysokém skalním ostrohu, který ze tří obtéká řeka Ohře. Vévodí mu čtyřboká 26 metrů vysoká věž. Výhled ze čtyř podkrovních okének je vzhledem k&nbsp;"
  },
  {
    "id": 22957,
    "name": "Lom Kurovice",
    "slug": "lom-kurovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lom-kurovice/",
    "kraj": ["Kroměříž",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lom-kurovice/DSCF8693.JPG",
    "desc": "Devatenáctimetrová ocelová věž vyrůstá uprostřed zděné budovy, kde sídlí centrum ekologické výchovy, společně s kavárnou a třemi stylovými apartmány. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 18 metrů (Kroměříž, H"
  },
  {
    "id": 1260,
    "name": "Lovoš",
    "slug": "lovos",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lovos/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lovo%C5%A1_s_d%C3%A1lnic%C3%AD.jpg/1280px-Lovo%C5%A1_s_d%C3%A1lnic%C3%AD.jpg",
    "desc": "Čtyřmetrová kamenná podstava a turistická chata s plochou střechou z roku 1892. Nádherný kruhový výhled ze střechy chaty (České středohoří, Krušné hory, Děčínský Sněžník, Ještěd, Říp, Lovosice, Litoměřice, elektrárna Měl"
  },
  {
    "id": 15583,
    "name": "Lucemburkův kopec",
    "slug": "lucemburkuv-kopec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lucemburkuv-kopec/",
    "kraj": ["Ústecký kraj",
      "Ústí nad Labem"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lucemburkuv-kopec/DSCF4713.JPG",
    "desc": "Čtrnáctimetrová dřevěná rozhledna z&nbsp;roku 2020. Dokonalému výhledu ze zastřešené plošiny ve výšce 11 metrů brání západním směrem vrchol o 110 metrů vyššího kopce Kukla (Buková hora s&nbsp;nejvyšším betonovým vysílače"
  },
  {
    "id": 11897,
    "name": "Lukov",
    "slug": "lukov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/lukov/",
    "kraj": ["Zlín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/lukov/DSCF1227.JPG",
    "desc": "Jeden z nejrozsáhlejších hradů na Moravě pochází pravděpodobně z první poloviny 13. století. Od roku 1983 zde probíhá nepřetržitý archeologický výzkum. Díky iniciativě Spolku přátel hradu Lukova a hnutí Brontosaurus se h"
  },
  {
    "id": 321,
    "name": "Mackova hora",
    "slug": "mackova-hora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/mackova-hora/",
    "kraj": ["Rakovník",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/mackova-hora/IMG_5668.jpg",
    "desc": "Šestatřicetimetrový ocelový tubus s vnějším točitým schodištěm z roku 2000. Kruhový výhled z otevřené plošiny ve výšce jednadvacet metrů (Křivoklátská vrchovina, České středohoří). Odbočka ke věži se nachází na vrcholu p"
  },
  {
    "id": 3370,
    "name": "Maják",
    "slug": "majak-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/majak-2/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/majak-2/dscf0929.jpg",
    "desc": "Bezmála osmimetrová dřevěná rozhledna z&nbsp;roku 2012. Nádherný kruhový výhled z&nbsp;otevřeného ochozu ve výšce 5 metrů (Krušné hory od Klínovce až po Bouřňák s&nbsp;dominantním vysílačem na Jedlové, zámek Jezeří, Česk"
  },
  {
    "id": 2893,
    "name": "Maják",
    "slug": "majak",
    "url": "https://turistickamapa.cz/rozhledna-majak/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-majak-2022_28_5-115439.jpg",
    "desc": "Osmadvacetimetrová dřevěná věž s&nbsp;železným točitým schodištěm z&nbsp;roku 2012. Nádherný kruhový výhled ze zastřešeného ochozu ve výšce 21 metrů (Pálava, Svatý Kopeček, Novomlýnské nádrže, Bílé Karpaty s&nbsp;Velkou "
  },
  {
    "id": 3333,
    "name": "Maják Járy Cimrmana",
    "slug": "majak-jary-cimrmana",
    "url": "https://turistickamapa.cz/rozhledna-majak-jary-cimrmana/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-majak-jary-cimrmana-2023_2_4-134759.jpg",
    "desc": "Čtyřiadvacetimetrová dřevěná rozhledna z&nbsp;roku 2013. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 17 metrů (Jizerské hory, Ještěd, Tanvaldský Špičák, Černá Studnice, Štěpánka, Kozákov, Bezděz). Lyžařské středisko"
  },
  {
    "id": 10806,
    "name": "Malenovice",
    "slug": "malenovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/malenovice/",
    "kraj": ["Zlín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/malenovice/DSCF0151.JPG",
    "desc": "Hrad Malenovice byl vystavěn na západním úbočí Tlusté hory ve druhé polovině 14. století v gotickém slohu. Postupem doby byl přestavěn na renesanční sídlo zámeckého typu, později ještě barokně upravené. Hradu dominuje 33"
  },
  {
    "id": 1995,
    "name": "Malý Chlum",
    "slug": "maly-chlum",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/maly-chlum/",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/kozlovsky-kopec-2/Mal%C3%BD-chlum.JPG",
    "desc": "Devítimetrová dvoupodlažní dřevěná rozhledna z roku 2005. Kruhový výhled ze zastřešeného ochozu ve výšce 7 metrů (Boskovice, Blansko, Velký Chlum, rozhledny Čebínka, Podvrší a Babylon, za dobré viditelnosti také Jeseníky"
  },
  {
    "id": 4232,
    "name": "Máminka",
    "slug": "maminka",
    "url": "https://turistickamapa.cz/rozhledna-maminka/",
    "kraj": ["Beroun",
      "Středočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-maminka-2023_20_10-170409.jpg",
    "desc": "Třiatřicetimetrová dřevěná jehlanová věž s&nbsp;dubovým točitým schodištěm z&nbsp;roku 2015. Nádherný kruhový výhled z plošiny ve výšce 21 metrů, zastřešené originálním plastovým štítem &nbsp;(České středohoří s&nbsp;Mil"
  },
  {
    "id": 380,
    "name": "Mandava",
    "slug": "mandava",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/mandava/",
    "kraj": ["Praha - východ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/mandava/13-mandava-u-sulic.jpg",
    "desc": "Betonový památník s dvanáctimetrovou rozhlednou byl v roce 1931 vztyčen na místě velkého shromáždění husitských stoupenců (1419) pod vedením Václava Korandy.&nbsp; Výhledu ze čtyř zasklených okének ve výšce 10 metrů brán"
  },
  {
    "id": 3952,
    "name": "Mariánka",
    "slug": "marianka",
    "url": "https://turistickamapa.cz/rozhledna-marianka/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-marianka-2023_11_11-150852.jpg",
    "desc": "Třiadvacetimetrová dřevěná rozhledna z&nbsp;roku 2014 s&nbsp;ocelovým točitým schodištěm. Kruhový výhled ze zastřešeného ochozu ve výšce 19 metrů (Orlické hory, Suchý vrch, Buková hora, Lázek, Jeseníky, Krkonoše, Českotř"
  },
  {
    "id": 3671,
    "name": "Markéta",
    "slug": "marketa",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/marketa/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/marketa/dscf1145.jpg",
    "desc": "Pětadvacetimetrová kovová rozhledna s ocelovým točitým schodištěm, slavnostně otevřená na Nový rok 2014. Ocelové stojiny jsou pečlivě zakryty dřevěnými latěmi, což s dřevěnou výztuží na první pohled působí, že stavba je "
  },
  {
    "id": 3842,
    "name": "Maruška",
    "slug": "maruska",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/maruska/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/maruska/dscf2502.jpg",
    "desc": "Krásně řemeslně provedená šestnáctimetrová dřevěná stavba z&nbsp;roku 2014 postavená ve valašském stylu. Kruhový výhled ze zastřešeného ochozu ve výšce 12 metrů (Beskydy, Hostýnské a Vsetínské vrchy, Javorníky, Hošťálkov"
  },
  {
    "id": 3254,
    "name": "Mařenka",
    "slug": "marenka",
    "url": "https://turistickamapa.cz/rozhledna-marenka/",
    "kraj": ["Třebíč",
      "Vysočina"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-marenka-2021_6_6-135530.jpg",
    "desc": "Třiatřicetimetrová dřevěná rozhledna ve tvaru sférického trojúhelníku s&nbsp;ocelovými spojovacími a nosnými prvky postavená v&nbsp;roce 2012 na betonové podstavě obložené kameny. Kruhový výhled z&nbsp;kryté vyhlídkové p"
  },
  {
    "id": 821,
    "name": "Mařský vrch",
    "slug": "marsky-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/marsky-vrch/",
    "kraj": ["Jihočeský kraj",
      "Prachatice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/marsky-vrch/DSCF1458.JPG",
    "desc": "12 metrů vysoká zděná věž s kaplí sv. Václava ve tvaru románské rotundy z roku 1936. Výhled z betonového ochozu ve výšce 8 metrů omezen přes kamenné moře pouze severním směrem (Bohumilice, Čkyně, Šumavské podhůří). K roz"
  },
  {
    "id": 323,
    "name": "Městská hora",
    "slug": "mestska-hora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/mestska-hora/",
    "kraj": ["Beroun",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/mestska-hora/mestskahora.jpg",
    "desc": "Čtrnáctimetrová betonová nadstavba městského vodojemu z roku 1936. Kruhový výhled ze zastřešeného ochozu ve výšce 11 metrů (Beroun, Český kras). K rozhledně vede množství parkových cest. Na kole je nejlépe sjízdná ta, kt"
  },
  {
    "id": 8907,
    "name": "Michalovice",
    "slug": "michalovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/michalovice/",
    "kraj": ["Mladá Boleslav",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/michalovice/DSCF7818.JPG",
    "desc": "Hrad z druhé poloviny 13. století se známou věží Putna se nachází severozápadně od Mladé Boleslavi. Nezaměnitelný 7,5 % náklon věže údajně způsobili hledači pokladů jejím podkopáním v&nbsp;19. století. Podle nejnovějších"
  },
  {
    "id": 3989,
    "name": "Mikulčice",
    "slug": "mikulcice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/mikulcice/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/mikulcice/dscf3679.jpg",
    "desc": "Třicetimetrová ocelová věž z&nbsp;roku 2015, která je součástí nového pavilonu expozice Slovanského hradiště. Nejrozsáhlejší slovanské archeologické naleziště na našem území je vyhlášeno národní kulturní památkou. V&nbsp"
  },
  {
    "id": 13846,
    "name": "Mikulov",
    "slug": "mikulov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/mikulov/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/mikulov/DSCF3041.JPG",
    "desc": "Původní románský hrad byl postupně ve 13. století přeměněn do gotické podoby a od druhé poloviny 16. století byl přestavován na renesanční zámek. V&nbsp;roce 1719 zámek do základů vyhořel, ale byl znovu a ještě velkoryse"
  },
  {
    "id": 9941,
    "name": "Milada",
    "slug": "milada-krchov",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-milada",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-milada/rozhledna-milada-61713-v5.jpg",
    "desc": "Masivní třicetimetrová soukromá rozhledna byla postavená bez dotací v roce 2017. Tyčí se těsně pod vrcholem kopce Krchov nad hrází Orlické přehrady.&nbsp; V anketě o rozhlednu roku 2017, pořádané Klubem přátel rozhleden,"
  },
  {
    "id": 9394,
    "name": "Milada",
    "slug": "milada-lichnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/milada-lichnice/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/milada-lichnice/DSCN8928.JPG",
    "desc": "Desetimetrové ocelové točité schodiště z roku 2017 uchycené na třech nosných sloupech ukotvených do základu. S obvodovou stěnou torza věže hradu Lichnice z poloviny 13. století není nikterak spojeno. Kruhovému výhledu z "
  },
  {
    "id": 1997,
    "name": "Milenka",
    "slug": "milenka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/milenka/",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/milenka/Milenka-u-Kunstatu.jpg",
    "desc": "Osmnáctimetrová Burianova kamenná rozhledna z roku 1931. Kruhový výhled z kryté dřevěné nástavby ve výšce 15 metrů je jihovýchodním směrem z části omezen vzrostlými stromy&nbsp; (Českomoravská a Drahanská vrchovina). Opl"
  },
  {
    "id": 1263,
    "name": "Milešovka",
    "slug": "milesovka",
    "url": "https://turistickamapa.cz/milesovka/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-na-vrcholu-milesovky-2022_26_9-174242.jpg",
    "desc": "Meteorologická observatoř s devatenáctimetrovou zděnou vyhlídkovou věží z roku 1904. Fantastický kruhový výhled z nižšího ochozu ve výšce 10 metrů (České středohoří, Krušné hory, Děčínský Sněžník, Lužické a Jizerské hory"
  },
  {
    "id": 3800,
    "name": "Milíř",
    "slug": "milir",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/milir/",
    "kraj": ["Hradec Králové",
      "Královéhradecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/milir/dscf2154.jpg",
    "desc": "Jedenatřicetimetrová dřevěná věž z ocelovým točitým schodištěm z roku 2013. Kruhový výhled z kryté vyhlídkové plošiny ve výšce 27 metrů (Pardubice, nejvyšší stavby Hradce Králové, Kunětická hora, elektrárny Opatovice a C"
  },
  {
    "id": 172,
    "name": "Milíře",
    "slug": "milire",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/milire/",
    "kraj": ["Plzeňský kraj",
      "Tachov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/milire/img_9168.jpg",
    "desc": "Pětatřicetimetrová ocelová telekomunikační věž z roku 2001. Kruhový výhled z otevřené plošiny ve výšce 25 metrů je východním směrem částečně znemožněn vyšším zalesněným kopcem (Rozvadov, Český les s výraznými vrcholy Při"
  },
  {
    "id": 3327,
    "name": "Miloňová",
    "slug": "milonova",
    "url": "https://turistickamapa.cz/rozhledna-milonova/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-milonova-2023_7_7-102743.jpg",
    "desc": "Mohutná čtyřiadvacetimetrová dřevěná rozhledna z&nbsp;roku 2012. Kruhový výhled ze zastřešené plošiny ve výšce 20 metrů (Radhošť, Čartak, Vysoká, Velké Karlovice). Pokud projedeme Velké Karlovice ve směru na hraniční pře"
  },
  {
    "id": 1999,
    "name": "Minaret",
    "slug": "minaret",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/minaret/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/minaret/DSCF2720.JPG",
    "desc": "Štíhlá šedesátimetrová věž z roku 1802. Tato stavba měla i dvě nej. Jedná se údajně o nejvyšší minaret v neislámských zemích a donedávna byla i nejníže položenou rozhlednou u nás. V roce 2015 ji však o 15 metrů předhonil"
  },
  {
    "id": 1882,
    "name": "Modrá",
    "slug": "modra",
    "url": "https://turistickamapa.cz/rozhledna-modra/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2019_30-10-124207-tmp.jpg",
    "desc": "Původně dvoupatrová dřevěná rozhledna z roku 1999, byla zvýšena v roce 2003 o jedno poschodí do výše jedenácti&nbsp; metrů. Na rozhledně se však podepsal zub času a proto byl v roce 2011 z bezpečnostních důvodů odebrán s"
  },
  {
    "id": 325,
    "name": "Modřany – Dům dětí a mládeže",
    "slug": "modrany-dum-deti-a-mladeze",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/modrany-dum-deti-a-mladeze/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/modrany-dum-deti-a-mladeze/0185_modrany.jpg",
    "desc": "Patnáctimetrový betonový komín plynové kotelny z roku 2004 obestavěný vnějším točitým schodištěm s otevřeným ochozem ve výšce 12 metrů (výhled je možný na údolí soutoku Vltavy s Berounkou, Modřany a nedaleký Cukrák). Jed"
  },
  {
    "id": 6602,
    "name": "Mokrá",
    "slug": "mokra",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/mokra/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/mokra/DSCF7055.JPG",
    "desc": "Desetimetrová železná rozhledna s točitým schodištěm z roku 2015. V anketě o rozhlednu roku 2016, pořádané Klubem přátel rozhleden, obsadila 3. místo. Výhled z&nbsp;otevřené plošiny ve výšce necelých osmi metrů je severn"
  },
  {
    "id": 1266,
    "name": "Mostka",
    "slug": "mostka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/mostka/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/mostka/2013-04-07-mostna-hora-v-litomericich-01.jpg",
    "desc": "Dvacetimetrová čtyřboká kamenná věž z roku 1910 s přilehlou restaurací, která kromě rozhledu měla sloužit i jako požární hláska, vojenská pozorovatelna a meteorologická stanice 1. kategorie. Kruhový výhled z prosklené mí"
  },
  {
    "id": 6808,
    "name": "Muzeum Metoděje Vlacha",
    "slug": "muzeum-metodeje-vlacha",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/muzeum-metodeje-vlacha/",
    "kraj": ["Mladá Boleslav",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/muzeum-metodeje-vlacha/DSCF7290.JPG",
    "desc": "Dvaadvacetimetrová betonová věž s&nbsp;ocelovým schodištěm a ohrazením z&nbsp;roku 2015 Kruhový výhled z&nbsp;otevřené plošiny ve výšce 14 metrů (Mladá Boleslav, Český ráj, Jizerské hory). Areál letiště je dobře viditeln"
  },
  {
    "id": 11359,
    "name": "Na Horách",
    "slug": "na-horach",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-horach/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-horach/DSCF0815.JPG",
    "desc": "Jednoduchá čtyřmetrová dřevěná rozhledna z&nbsp;roku 2011, stojící na kruhovém betonovém základu bývalého letového naváděcího radaru. Přestože se nejedná o žádný architektonický výkřik je z&nbsp;otevřené plošiny ve výšce"
  },
  {
    "id": 3694,
    "name": "Na Chlumu",
    "slug": "na-chlumu",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-chlumu/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-chlumu/dscf1238.jpg",
    "desc": "Sedmimetrová válcová kamenná rozhledna s dřevěnou nástavbou z přelomu 19. a 20. století, která původně sloužila jako požární hláska a časem se změnila v torzo. Původní vzhled věži navrátila zdařilá rekonstrukce v roce 20"
  },
  {
    "id": 22398,
    "name": "Na Janečku",
    "slug": "na-janecku",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-janecku/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-janecku/DSCF7802.JPG",
    "desc": "Nevyužívaná trafostanice z&nbsp;roku 1946 prošla v&nbsp;letech 2020-22 kompletní rekonstrukcí a v&nbsp;roce 2023 byla otevřena veřejnosti jako devítimetrová rozhledna a minimuzeum. Z&nbsp;ploché střechy ve výšce 8 metrů "
  },
  {
    "id": 3802,
    "name": "Na Kopečku",
    "slug": "na-kopecku",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-kopecku/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-kopecku/dscf2184.jpg",
    "desc": "Desetimetrová soukromá dřevěná rozhledna na kamenné podezdívce z roku 2007. Půlkruhový výhled z malých okének pod střechu objektu ve výšce 7 metrů (Čáslav, Kutná hora, Žleby). Obec Licoměřice leží na úpatí Železných hor "
  },
  {
    "id": 16690,
    "name": "Na Křížku",
    "slug": "na-krizku",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-krizku/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-krizku/DSCF5967.JPG",
    "desc": "Zděný vodojem s&nbsp;plochou vyhlídkovou střechou z&nbsp;roku 1989 je postavený na hraně prudkého kopce nad Albrechticemi. Teprve úpravou sedlové střechy na plochou a dostavbou vnějšího železného schodiště a rampy, zde k"
  },
  {
    "id": 22591,
    "name": "Na Pasece",
    "slug": "na-pasece",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-pasece/",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-pasece/IMG_20231211_130057.jpg",
    "desc": "Jedenatřicetimetrová kovová rozhledna s&nbsp;točitým schodištěm z&nbsp;konce roku 2023. Kruhový výhled z otevřené vyhlídkové plošiny ve výšce 29 metrů (rozhledna Velký Blaník, Kalamajka, Babka, Špulka, přehradní nádrž Že"
  },
  {
    "id": 2001,
    "name": "Na Podluží",
    "slug": "na-podluzi",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-podluzi/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/na-podluzi/DSCF1194.JPG",
    "desc": "Třicetimetrová ocelová věž z roku 2010, která svojí konstrukcí záměrně připomíná ropnou těžní věž. Kruhový výhled z otevřeného ochozu ve výšce 28 metrů (Dolnomoravský úval, Malé a Bílé Karpaty, Chřiby, Pálava, Lednicko- "
  },
  {
    "id": 25364,
    "name": "Na Rozvazech",
    "slug": "na-rozvazech",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-rozvazech/",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-rozvazech/DSCF9335.JPG",
    "desc": "Šestimetrový betonový vodojem stojí od roku 2025 na severním úbočí stejnojmenného kopce východně od Bystřice u Benešova. Otevřená vyhlídková plošina ve výšce pěti metrů umožňuje pohledy především severním směrem na nedal"
  },
  {
    "id": 3935,
    "name": "Na Signálu",
    "slug": "na-signalu",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-signalu/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-signalu/dscf3453_0.jpg",
    "desc": "Devětadvacetimetrová dřevěná rozhledna s&nbsp;ocelovým točitým schodištěm z&nbsp;roku 2014. Nádherný kruhový výhled z&nbsp;kryté vyhlídkové plošiny ve výšce 25 metrů (Krkonoše, Orlické, Javoří, Jestřebí a Stolové hory, T"
  },
  {
    "id": 2805,
    "name": "Na skalce",
    "slug": "na-skalce",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-skalce/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/na-skalce/DSCF2336.JPG",
    "desc": "Desetimetrová dřevěná rozhledna z&nbsp;roku 2011 ležící na kraji lesa. Půlkruhový výhled z&nbsp;kryté plošiny ve výšce 8 metrů je kvůli vysokému lesu omezen pouze západním směrem (Bojkovice, Chřiby, Bílé Karpaty s&nbsp;V"
  },
  {
    "id": 3982,
    "name": "Na Skalce",
    "slug": "na-skalce-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-skalce-2/",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-skalce-holcovice/dscf3756-1.jpg",
    "desc": "Dvacetimetrová dřevěná rozhledna z roku 2013 je kopií původní rozhledny na Smrku v Jizerských horách a věrnou sestrou rozhledny Obora v pražské ZOO. Nádherný výhled z otevřeného ochozu ve výšce 17 metrů je severním směre"
  },
  {
    "id": 174,
    "name": "Na Skále",
    "slug": "na-skale",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-skale/",
    "kraj": ["Plzeň - jih",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/na-skale/DSCF1257.JPG",
    "desc": "Jedenačtyřicetimetrová ocelová telekomunikační věž z roku 2001. Nádherný kruhový výhled z vyhlídkového ochozu ve výšce 25 metrů (Brdy s Třemšínem a Maráskem, panorama Šumavy od Blanského lesa s Kletí, Libín, Bobík, Boubí"
  },
  {
    "id": 2755,
    "name": "Na stráži",
    "slug": "na-strazi",
    "url": "https://turistickamapa.cz/rozhledna-na-strazi/",
    "kraj": ["Česká Lípa",
      "Liberecký kraj"],
    "photo": "https://foto.turistika.cz/foto/234316/111552/lrg_p1030599.jpg",
    "desc": "Třiatřicetimetrový ocelový tubus mobilního operátora z&nbsp;roku 2011 s&nbsp;vnějším vinutým kovovým schodištěm je celý opláštěn smrkovými prkny, takže v&nbsp;okolní krajině působí velmi přirozeně. Kruhovému výhledu z&nb"
  },
  {
    "id": 3373,
    "name": "Na Strážné",
    "slug": "na-strazne",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-strazne/",
    "kraj": ["Zlín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-strazne/dscf0872.jpg",
    "desc": "Čtrnáctimetrová dřevěná rozhledna z roku 2013 postavená na kamenné podstavě. Kruhový výhled ze zastřešené vyhlídkové plošiny ve výšce 11 metrů (vysílač Tlustá hora u Zlína, Otrokovice, Bílé Karpaty, Chřiby s Buchlovem, H"
  },
  {
    "id": 15604,
    "name": "Na Větrné horce",
    "slug": "na-vetrne-horce",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-vetrne-horce/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-vetrne-horce/DSCF4831.JPG",
    "desc": "Osmnáctimetrová kovová rozhledna z&nbsp;roku 2020 s nadvakrát vzájemně překříženými stojinami, které jsou osazeny borovicovými latěmi. Díky nim pak celá rozhledna působí dojmem dřevěné stavby a velice dobře zapadá do oko"
  },
  {
    "id": 3380,
    "name": "Na vinici",
    "slug": "na-vinici",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-vinici/",
    "kraj": ["Praha - východ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-vinici/dscf0864.jpg",
    "desc": "Jedenatřicetimetrový ocelový telekomunikační stožár s vnitřním vinutým schodištěm z roku 2013. Nádherný kruhový výhled z&nbsp;otevřeného ochozu ve výšce 21 metrů (Říp, Bezděz, Krkonoše, Ještěd, Ralsko, Žižkovský vysílač,"
  },
  {
    "id": 16536,
    "name": "Na vodojemu Kunovice",
    "slug": "na-vodojemu-kunovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-vodojemu-kunovice/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-vodojemu-kunovice/DSCF5893.JPG",
    "desc": "Téměř čtrnáctimetrová rozhledna byla vybudovaná v&nbsp;roce 2021 na střeše zděného vodojemu nad obcí Kunovice. Kruhový výhled ze zastřešené vyhlídkové plošiny ve výšce 8 metrů (Hostýnské vrchy s Kelčským Javorníkem a Hos"
  },
  {
    "id": 3261,
    "name": "Na Vrších",
    "slug": "brasy",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/brasy/",
    "kraj": ["Plzeňský kraj",
      "Rokycany"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/brasy/dscf0301.jpg",
    "desc": "Patnáctimetrová dřevěná rozhledna z&nbsp;roku 2013, v&nbsp;novodobé historii první v&nbsp;rokycanském okrese, která zároveň slouží jako přenašeč dat bezpečnostních kamerových systémů. Kruhový výhled z&nbsp;uzavřené místn"
  },
  {
    "id": 12856,
    "name": "Náchod",
    "slug": "nachod",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/nachod/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/nachod/DSCF2320.JPG",
    "desc": "Raně gotický hrad byl založen v&nbsp;polovině 13. století na nejvyšším místě příkrého táhlého ostrohu nad zemskou obchodní stezkou z&nbsp;Kladska. Na přelomu 16. a 17. století byl hrad přeměněn na pohodlné renesanční síd"
  },
  {
    "id": 2003,
    "name": "Nedánov",
    "slug": "nedanov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/nedanov/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/nedanov/Nedanov%20%282%29.jpg",
    "desc": "Šestadvacetimetrová dřevěná věž z roku 2009 s ocelovými nosnými prvky a schodištěm. Kruhovému výhledu ze zastřešené plošiny ve výšce 22 metrů brání severovýchodním směrem hustý les na vrcholu plochého kopce (Pálava, Drah"
  },
  {
    "id": 327,
    "name": "Neštětická hora",
    "slug": "nesteticka-hora",
    "url": "https://turistickamapa.cz/rozhledna-nesteticka-hora/",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nesteticka_hora.jpg/960px-Nesteticka_hora.jpg",
    "desc": "Šestnáctimetrová půlkruhová betonová věž z roku 1927, která vznikla jako památník selského povstání před třemi sty lety. V roce 1627 vzplanula vzpoura vedená Adamem Hodějovským a Matoušem Ulickým proti utiskovateli místn"
  },
  {
    "id": 14238,
    "name": "Neuberg",
    "slug": "neuberg",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/neuberg/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/neuberg/DSCF3372.JPG",
    "desc": "Hrad byl založen začátkem 13. století, opakovaně byl vážně poškozen, ale vždy opraven. Roku 1610 hrad zcela vyhořel a zůstala z něho zachována pouze 22 metrů vysoká věž. Tyčí se na bezmála třicetimetrové skále nad silnic"
  },
  {
    "id": 1071,
    "name": "Nisanka",
    "slug": "nisanka",
    "url": "https://turistickamapa.cz/rozhledna-nisanka/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://foto.turistika.cz/foto/14143/24002/full_052a50_f_normalFile1-p7279717.jpg",
    "desc": "Pětatřicetimetrový ocelový tubus s vnějším točitým schodištěm z roku 2007. Kruhový výhled z otevřené plošiny ve výšce 24 metrů (Černá Studnice, Ještěd, Jizerské hory, Krkonoše). Kilometrové stoupání k rozhledně začíná u "
  },
  {
    "id": 3984,
    "name": "Nová Ves",
    "slug": "nova-ves",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/nova-ves/",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/nova-ves/dscf3798.jpg",
    "desc": "Dřevem obložený jedenatřicetimetrový osmiboký železobetonový tubus z&nbsp;roku 2014. V&nbsp;přízemní místnosti je kromě infocentra, dětského koutku a malého muzea také sociální zařízení a uzamykatelná úschovna lyží a kol"
  },
  {
    "id": 12840,
    "name": "Nové Město nad Metují",
    "slug": "nove-mesto-nad-metuji",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/nove-mesto-nad-metuji/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/nove-mesto-nad-metuji/DSCF2296.JPG",
    "desc": "Zámek stojí na místě starší tvrze na vysokém opukovém ostrohu, který ze tří stran obtéká řeka Metuje. Při svém založení byl součástí opevnění města, ale je od něho oddělen výrazným příkopem. V&nbsp;17. století byl barokn"
  },
  {
    "id": 16278,
    "name": "Novomlýnská vodárenská věž",
    "slug": "novomlynska-vodarenska-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/novomlynska-vodarenska-vez/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/novomlynska-vodarenska-vez/DSCF5640.JPG",
    "desc": "Dvaačtyřicetimetrová kamenná věž byla postavena v&nbsp;barokním slohu&nbsp;v roce 1660 na místě svojí předchůdkyně z&nbsp;původních kvádrů. Renesanční stavbu v&nbsp;roce 1655 totiž vážně poničila povodeň. Nové Město záso"
  },
  {
    "id": 10261,
    "name": "Nový hrad",
    "slug": "novy-hrad",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/novy-hrad/",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/novy-hrad/DSCF0564.JPG",
    "desc": "Strážní hrad z&nbsp;konce 14. století byl vybudován na vysokém skalním ostrohu nad řekou Svitavou. Pod ním prochází hlavní koridorová železniční trať z&nbsp;České Třebové do Brna. Kvůli obavám ze zřícení při otřesech na "
  },
  {
    "id": 12378,
    "name": "Nový Hrad",
    "slug": "novy-hrad-jimlin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/novy-hrad-jimlin/",
    "kraj": ["Louny",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/novy-hrad-jimlin/DSCF1851.JPG",
    "desc": "Původní hrad byl založen v 15. století. Po četných renesančních a barokních přestavbách v 17. století si přesto zachoval půdorys původního hradu. Objektu dominuje 37 metrů vysoká věž, z&nbsp;jejíhož ochozu ve výšce 19 me"
  },
  {
    "id": 3976,
    "name": "Nový rybník",
    "slug": "novy-rybnik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/novy-rybnik/",
    "kraj": ["Plzeň - sever",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/novy-rybnik/Novy-rybnik-u-Lini-08.jpg",
    "desc": "Osmimetrová dřevěná rozhledna z&nbsp;roku 2011, sloužící jako pozorovatelna vodního ptactva. Kruhový výhled z&nbsp;krytého ochozu ve výšce 5 metrů (věž úherského kostela, odvalová halda vytěžené hlušiny z&nbsp;bývalého č"
  },
  {
    "id": 13139,
    "name": "Nový Světlov",
    "slug": "novy-svetlov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/novy-svetlov/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/novy-svetlov/DSCF2429.JPG",
    "desc": "Původní pohraniční hrad Starý Světlov bránil území východní Moravy před loupeživými výpady z Uher a případné ohrožení signalizoval do vnitrozemí ohněm. Hrad v historii utrpěl značné škody, ale nikdy nebyl dobyt, i když m"
  },
  {
    "id": 12332,
    "name": "Nový zámek u Lanškrouna",
    "slug": "novy-zamek-u-lanskrouna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/novy-zamek-u-lanskrouna/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/novy-zamek-u-lanskrouna/DSCF1821.JPG",
    "desc": "Původní podoba kdysi jednoho s&nbsp;největších a nejvýstavnějších zámků ve střední Evropě měla tvar písmene H. Zámek byl předán vrchnosti v&nbsp;roce 1712, ale již o dva roky později při opravách částečně vyhořel. Druhý "
  },
  {
    "id": 2879,
    "name": "Obecnice",
    "slug": "obecnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/obecnice/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.slovacko.cz/wp-content/uploads/2019/07/2019_Korytná_rozhledna_Salle.jpg",
    "desc": "Třináctimetrová dřevěná rozhledna z&nbsp;roku 2011, postavená společně s&nbsp;dalšími pěti rozhlednami na uherskobrodsku podle stejných plánů. Výhledu ze zastřešené plošiny ve výšce 10 metrů brání jižním směrem vysoký le"
  },
  {
    "id": 384,
    "name": "Obora",
    "slug": "obora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/obora/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/hlavni-mesto-praha/obora/DSCF1102.JPG",
    "desc": "Devatenáctimetrová trámová rozhledna z roku 2009. Jedná se o repliku původní dřevěné rozhledny na Smrku v Jizerských horách. Kruhový výhled z otevřeného ochozu ve výšce 18 metrů (areál ZOO s údolím Vltavy, celkem solidní"
  },
  {
    "id": 1849,
    "name": "Ocmanice",
    "slug": "ocmanice",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-ocmanice",
    "kraj": ["Třebíč",
      "Vysočina"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-ocmanice/rozhledna-ocmanice-31157-v5.jpg",
    "desc": "Patnáctimetrová dřevěná konstrukce ve tvaru osmibokého jehlanu z roku 2004 s vnitřním kovovým točitým schodištěm. Kruhový výhled z otevřené plošiny ve výšce 6 metrů (Ocmanice, zámek v Náměšti n. O a startující letouny z "
  },
  {
    "id": 15041,
    "name": "Ohrazenice",
    "slug": "ohrazenice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ohrazenice/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/ohrazenice/P1710942aa.JPG",
    "desc": "Originálně řešený betonový osmadvacetimetrový vodojem byl dokončen v&nbsp;roce 2019. Svým tvarem připomíná fotbalový pohár FIFA nebo také může znázorňovat míček, tančící na tryskajících pramíncích vody. Kruhový výhled z&"
  },
  {
    "id": 17567,
    "name": "Okounov",
    "slug": "okounov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/okounov/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/okounov/DSCF7223.JPG",
    "desc": "Osmimetrová dřevěná rozhledna s&nbsp;kovovým točitým schodištěm byla postavena v&nbsp;roce 2023 z&nbsp;kroucených akátových kmínků, které byly vytěženy na Holém vrchu. Nečekaně hezký výhled z&nbsp;otevřené plošiny ve výš"
  },
  {
    "id": 1925,
    "name": "Okrouhlá",
    "slug": "okrouhla",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/okrouhla/",
    "kraj": ["Frýdek - Místek",
      "Moravskoslezský kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sta%C5%99%C3%AD%C4%8D_-_rozhledna_na_vrchu_Okrouhl%C3%A1.jpg/960px-Sta%C5%99%C3%AD%C4%8D_-_rozhledna_na_vrchu_Okrouhl%C3%A1.jpg",
    "desc": "Pětapadesátimetrový ocelový telekomunikačni tubus s bočními podpěrami z roku 2003. Kruhový výhled z otevřeného ochozu ve výšce 30 metrů (rozhledny Kabátice a Bílá hora, panorama Beskyd, Jeseníky, Frýdek &#8211; Místek, O"
  },
  {
    "id": 18473,
    "name": "Olomouc-radnice",
    "slug": "olomouc-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/olomouc-radnice/",
    "kraj": ["Olomouc",
      "Olomoucký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/olomouc-radnice/DSCF5391.JPG",
    "desc": "Původní dřevěná radnice z&nbsp;konce 14. století zanikla po roce 1417. Nahradila ji nová gotická kamenná budova, která přecházela v&nbsp;patře do cihel. Dominantní hranolová věž byla dokončena v&nbsp;roce 1444. Ve své pů"
  },
  {
    "id": 730,
    "name": "Olověný vrch",
    "slug": "oloveny-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/oloveny-vrch/",
    "kraj": ["Karlovarský kraj",
      "Sokolov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/oloveny-vrch/dscf0117.jpg",
    "desc": "Horská chata s 16 metrů vysokou dřevěnou rozhlednou z roku 1933. Kruhový výhled z prosklené místnosti ve výšce 13 metrů už v současné době znemožňují vrcholky vzrostlých smrků, takže výhled je možný pouze severním směrem"
  },
  {
    "id": 329,
    "name": "Onen svět",
    "slug": "onen-svet",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/onen-svet/",
    "kraj": ["Jihočeský kraj",
      "Písek"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/onen-svet/onen-svet1.jpg",
    "desc": "Čtrnáctimetrová dřevěná Langova rozhledna z roku 2001. Kruhovému výhledu z kryté plošiny ve výšce 11 metrů brání východním směrem vrchol zalesněného kopce. (JE Temelín, zámek Orlík a část vodní plochy stejnojmenného přeh"
  },
  {
    "id": 3991,
    "name": "Orlík",
    "slug": "orlik",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-orlik",
    "kraj": ["Pelhřimov",
      "Vysočina"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Orl%C3%ADk_n_Vltavou_1.jpg/1280px-Orl%C3%ADk_n_Vltavou_1.jpg",
    "desc": "Hrad byl vystavěn v&nbsp;poslední třetině 14. století. Od&nbsp;18. století však pustne, upadá v&nbsp;zapomnění a je postupně rozebírán na stavební kámen. V&nbsp;první polovině 19. století se zřítila část nárožní věže a z"
  },
  {
    "id": 1607,
    "name": "Osičina",
    "slug": "osicina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/osicina/",
    "kraj": ["Královéhradecký kraj",
      "Rychnov nad Kněžnou"],
    "photo": "https://lesycr.cz/wp-content/uploads/2016/12/rozhledna-osicina.jpg",
    "desc": "Čtyřiapadesátimetrový ocelový telekomunikační stožár z roku 2002. Kruhový výhled z otevřené plošiny ve výšce 32 metrů (Orlické hory, Krkonoše, Železné hory, Králický Sněžník, Kunětická hora, Broumovská vrchovina a Stolov"
  },
  {
    "id": 1851,
    "name": "Oslednice",
    "slug": "oslednice",
    "url": "https://turistickamapa.cz/rozhledna-oslednice/",
    "kraj": ["Jihlava",
      "Vysočina"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-oslednice-2022_18_4-102234.jpg",
    "desc": "Čtyřiatřicetimetrová ocelová telekomunikační věž z roku 2000. Kruhový výhled z otevřené plošiny ve výšce 31 metrů (Českomoravská vrchovina, Javořice, Telč). Rozhledna se nachází na východním okraji starobylé Telče a cest"
  },
  {
    "id": 2005,
    "name": "Ostrá Horka",
    "slug": "ostra-horka",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-ostra-horka",
    "kraj": ["Brno - město",
      "Jihomoravský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-ostra-horka/rozhledna-ostra-horka-1616-v5.jpg",
    "desc": "Devatenáctimetrová ocelová věž z roku 2008. Kruhový výhled z otevřeného ochozu ve výšce 16 metrů (Brno, Pavlovské vrchy, Drahanská vrchovina, Babí lom). K rozhledně se nejlépe dostaneme po hlavní silnici z brněnského síd"
  },
  {
    "id": 1927,
    "name": "Ostrava-Nová radnice",
    "slug": "ostrava-nova-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ostrava-nova-radnice/",
    "kraj": ["Moravskoslezský kraj",
      "Ostrava město"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/ostrava-nova-radnice/dscf0741.jpg",
    "desc": "Osmdesát šest metrů vysoká věž z ocele, betonu a skla stojí od roku 1930 na Prokešovo náměstí pár metrů od řeky Ostravice. Jedná se o nejvyšší radniční věž v&nbsp;Česku. Celý funkcionalistický objekt patří zároveň k nejv"
  },
  {
    "id": 22827,
    "name": "Oznička",
    "slug": "oznicka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/oznicka/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/oznicka/DSCF8178.JPG",
    "desc": "Téměř osmimetrová soukromá dřevěná rozhledna stojí od roku 2019 v Hostýnských vrších nad obcí Oznice. Vyhlídková plošina však byla zpřístupněna veřejnosti až v roce 2023. Výhled ze zastřešené plošiny ve výšce 5 metrů je "
  },
  {
    "id": 16345,
    "name": "Paluba Hamburk Plzeň",
    "slug": "paluba-hamburk-plzen",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/paluba-hamburk-plzen/",
    "kraj": ["Plzeň - město",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/paluba-hamburk/DSCF5551.JPG",
    "desc": "Vyhlídková dvanáctimetrová věž spolu s&nbsp;infocentrem a občerstvením vznikla v&nbsp;roce 2021 u bočního vchodu do plzeňského hlavního vlakového a autobusového nádraží ze Šumavské ulice. Kruhový výhled ze čtvrtého otevř"
  },
  {
    "id": 222,
    "name": "Pancíř",
    "slug": "pancir",
    "url": "https://turistickamapa.cz/rozhledna-pancir/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Panc%C3%AD%C5%99_%28%C5%BDelezn%C3%A1_Ruda%29%2C_horsk%C3%A1_chata_%282%29.jpg/960px-Panc%C3%AD%C5%99_%28%C5%BDelezn%C3%A1_Ruda%29%2C_horsk%C3%A1_chata_%282%29.jpg",
    "desc": "Mattušova zděná turistická chata s osmnáctimetrovou rozhlednou z roku 1923. Kruhovému výhledu z prosklené plošiny ve výšce 15 metrů brání severním směrem řídký les (západní Šumava s vévodícím Velkým Javorem, Jezerní horo"
  },
  {
    "id": 752,
    "name": "Panský vrch",
    "slug": "pansky-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pansky-vrch/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/karlovarsky-kraj/pansky-vrch/P1010021.JPG",
    "desc": "Pětapadesátimetrová ocelová telekomunikační věž z roku 2008. Kruhový výhled ze zastřešeného ochozu ve výšce 40 metrů. Výstup na tuto štíhlou a vysokou rozhlednu je, zvláště za větrného počasí, dosti adrenalinový. Odměnou"
  },
  {
    "id": 13552,
    "name": "Pardubice",
    "slug": "pardubice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pardubice/",
    "kraj": ["Pardubice",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/pardubice/DSCF2911.JPG",
    "desc": "Na místě dnešního zámku stál od 13. století vodní hrad, který byl po husitských válkách přestavěn a obehnán masivní kamennou hradbou s nárožními věžemi a střílnami. Koncem 15. století byl hrad přestavěn na čtyřkřídlý ren"
  },
  {
    "id": 1714,
    "name": "Pastýřka",
    "slug": "pastyrka",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-pastyrka",
    "kraj": ["Pardubický kraj",
      "Svitavy"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-pastyrka/rozhledna-pastyrka-20547-v5.jpg",
    "desc": "Sedmaadvacetimetrová dřevěná rozhledna s ocelovým schodištěm a nosnými spojovacími prvky z roku 2009. Kruhový výhled ze zastřešené plošiny ve výšce 25 metrů (Moravská Třebová, Hřebečský masiv, Orlické hory, Králický Sněž"
  },
  {
    "id": 1269,
    "name": "Pastýřská stěna",
    "slug": "pastyrska-stena",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pastyrska-stena/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/pastyrska-stena/pastyrska1.jpg",
    "desc": "Kamenná restaurace v podobě středověkého hrádku z roku 1905 s osmnáctimetrovou věží. Kruhový výhled z otevřeného ochozu ve výšce 13 metrů (Děčín, Labské pískovce, Lužické hory, České středohoří)Cesta na vrchol je shodná "
  },
  {
    "id": 4010,
    "name": "Pavlíkov",
    "slug": "pavlikov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pavlikov/",
    "kraj": ["Rakovník",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/pavlikov/dscf3999.jpg",
    "desc": "Dvaadvacetimetrová dřevěná rozhledna z roku 2015, která je zasazena doprostřed betonového soklu, který svým horním zakončením tvoří první vyhlídkový ochoz ve výšce 8 metrů. Nádherný kruhový výhled z druhého zastřešeného "
  },
  {
    "id": 3993,
    "name": "Pekelný kopec",
    "slug": "pekelny-kopec",
    "url": "https://turistickamapa.cz/rozhledna-pekelny-kopec/",
    "kraj": ["Třebíč",
      "Vysočina"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-na-pekelnem-kopci-u-trebice-2023_2_5-104138.jpg",
    "desc": "Originální šestadvacetimetrová ocelová konstrukce z&nbsp;roku 2014 vyztužená příčnými dřevenými trámy. Kruhový výhled z&nbsp;otevřené plošiny ve výšce 23 metrů (Třebíč, rozhledna Babylon u Kozárova, Mařenka, hrad Sádek, "
  },
  {
    "id": 22376,
    "name": "Pelhřimov-Dolní brána",
    "slug": "pelhrimov-dolni-brana",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pelhrimov-dolni-brana/",
    "kraj": ["Pelhřimov",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/pelhrimov/DSCF5343.JPG",
    "desc": "Mohutná šestatřicetimetrová kamenná pětipatrová brána byla vybudována v&nbsp;16. století jako součást městského opevnění, spolu s&nbsp;dalšími třemi branami, z&nbsp;nichž se do dnešních dnů zachovala ještě Horní (Rynárec"
  },
  {
    "id": 331,
    "name": "Pepř",
    "slug": "pepr",
    "url": "https://turistickamapa.cz/rozhledna-pepr/",
    "kraj": ["Praha - západ",
      "Středočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-pepr-2020_30_8-114449.jpg",
    "desc": "Třicetimetrová ocelová telekomunikační věž z roku 2007. Kruhový výhled z otevřeného ochozu ve výšce 18 metrů (Praha s Žižkovským vysílačem a Petřínem a za nimi Říp, Cukrák, Veselý vrch, Brdy, Hřebeny). K rozhledně vedou "
  },
  {
    "id": 11868,
    "name": "Pernštejn",
    "slug": "pernstejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pernstejn/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/pernstejn/DSCF1191.JPG",
    "desc": "Mohutný hrad z bílého nedvědického mramoru byl vystavěn ve druhé polovině 13. století na vysokém skalním útesu západně od obce Nedvědice. Původní jednoduchá gotická dispozice hradu se ztrácí ve spleti pozdějších renesanč"
  },
  {
    "id": 823,
    "name": "Pětnice-rozhledna Christiana Battaglii",
    "slug": "petnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/petnice/",
    "kraj": ["Jihočeský kraj",
      "Strakonice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/petnice/P%C4%9Btnice-1.JPG",
    "desc": "Pětatřicetimetrový ocelový telekomunikační sloup z roku 2001, který je obtočen roštovým schodištěm. Nádherné panorama jižní Šumavy s dominantním Boubínem a Bobíkem, Javorník, Libín, Kleť, na severní straně Brdy s Třemšín"
  },
  {
    "id": 335,
    "name": "Petrovice II",
    "slug": "petrovice-ii",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/petrovice-ii/",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/petrovice-ii/DSCF1246.JPG",
    "desc": "Pětačtyřicetimetrová ocelová telekomunikační věž s točitým schodištěm z roku 2004. Kruhový výhled z otevřeného ochozu ve výšce 30 metrů. Výstup, zvláště za silného větru, patří k těm adrenalinovým, neboť schodiště je umí"
  },
  {
    "id": 1074,
    "name": "Petřín",
    "slug": "petrin-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/petrin-2/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/petrin/IMG_3655.jpg",
    "desc": "Zděná dvacetimetrová věž vestavěná do hotelu s restaurací z roku 1906. Kruhový výhled z otevřeného ochozu ve výšce patnácti metrů (Jablonec, Jizerské hory, Ještědský hřbet, Český ráj, Černá Studnice). Rozhledna stojí na "
  },
  {
    "id": 333,
    "name": "Petřín",
    "slug": "petrin",
    "url": "https://www.dnesvyletujeme.cz/petrinska-rozhledna",
    "kraj": ["Praha"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/petrinska-rozhledna/petrinska-rozhledna-58375-v5.jpg",
    "desc": "Šedesátimetrová železná věž z roku 1891 ( s anténním nástavcem 72 metrů vysoká).&nbsp; Fantastický kruhový výhled z prosklené vyhlídkové plošiny ve výšce 51 metrů (Praha, střední Čechy, ale i vzdálené Krkonoše, Lužické a"
  },
  {
    "id": 17229,
    "name": "Pivovar Bernard",
    "slug": "pivovar-bernard",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pivovar-bernard/",
    "kraj": ["Pelhřimov",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/pivovar-bernard/CIMG5489.jpg",
    "desc": "Okolo cihlového komína pivovaru Bernard se od roku 2021 tyčí sedmatřicetimetrová železná konstrukce s točitým schodištěm. Protože konstrukce rozhledny není s masivním komínem pevně spojena, dochází při silném větru k zaj"
  },
  {
    "id": 756,
    "name": "Plešivec",
    "slug": "plesivec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/plesivec/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/plesivec/2013-06-18-plesivec-u-abertam-rozhledna-03.jpg",
    "desc": "Horský hotel s devatenáctimetrovou kamennou věží z roku 1895. Kruhový výhled z vnějšího ochozu ve výšce 16 metrů (západní Krušné hory s rozhlednami Klínovec, Blatenský a Tisovský vrch, Fichtelberg a Auersberg, Doupovské "
  },
  {
    "id": 4087,
    "name": "Pletená",
    "slug": "pletena",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pletena/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/pletena/dscf3982.jpg",
    "desc": "Sedmimetrová pětitunová ocelová rozhledna z&nbsp;vyřazené ocelové nádrže z&nbsp;dílny sochaře Čestmíra Sušky. Tato rozhledna byla součástí výstavy Restart v prostorách bývalé vozovny dopravního podniku města Plzně, nazva"
  },
  {
    "id": 1272,
    "name": "Ploučnická vyhlídka",
    "slug": "ploucnicka-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ploucnicka-vyhlidka/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/ploucnicka-vyhlidka/pv1.jpg",
    "desc": "Desetimetrový zděný altán s vyhlídkovým ochozem z roku 1902 přístupný po železném žebříku. Omezený výhled z otevřeného ochozu ve výšce 7 metrů pouze severním směrem (Benešov nad Ploučnicí). Rozhledna se nachází na jižním"
  },
  {
    "id": 2882,
    "name": "Pod Vojanskú",
    "slug": "pod-vojansku",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pod-vojansku/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://foto.turistika.cz/foto/38986/121874/dsc07871.jpg",
    "desc": "Třináctimetrová dřevěná rozhledna z&nbsp;roku 2011, postavená společně s&nbsp;dalšími pěti rozhlednami na uherskobrodsku podle stejných plánů. Výhled z&nbsp;krytého ochozu ve výšce 10 metrů je východním směrem kvůli vyso"
  },
  {
    "id": 2008,
    "name": "Podvrší",
    "slug": "podvrsi",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/podvrsi/",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/podvrsi/032.jpg",
    "desc": "Osmačtyřicetimetrová železobetonová telekomunikační věž z roku 2001. Kruhový výhled ze zastřešeného ochozu ve výšce 32 metrů (vysílač Kojál a Sýkoř, radar Skalky, Horní les, Pavlovské vrchy, za dobré viditelnosti JETE Du"
  },
  {
    "id": 3979,
    "name": "Pohoř – Olšová",
    "slug": "pohor-olsova",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pohor-olsova/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/pohor-olsova/dscf3733.jpg",
    "desc": "Sedmnáctimetrová dřevěná věž z&nbsp;roku 2014 je postavena na mohutné podezdívce. Tvar věže záměrně připomíná strážní věž, kterou má město Odry ve znaku. Nádherný kruhový výhled ze zastřešeného ochozu ve výšce 13 metrů ("
  },
  {
    "id": 226,
    "name": "Poledník",
    "slug": "polednik",
    "url": "https://turistickamapa.cz/rozhledna-polednik/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-polednik-2022_28_9-125613.jpg",
    "desc": "Devětatřicetimetrová bývalá vojenská betonová radarová věž ze 70. let dvacátého století, pro veřejnost přístupná od roku 1998. Nádherný kruhový výhled z otevřené plošiny ve výšce 37 metrů (celé panorama Šumavy včetně vni"
  },
  {
    "id": 12731,
    "name": "Police",
    "slug": "police",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/police/",
    "kraj": ["Třebíč",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/police/DSCF2180.JPG",
    "desc": "Goticko – renesanční zámek vznikl přestavbou původní tvrze ze 14. století. Renesanční podobu dostal v&nbsp;polovině 16. století. Po válce došlo k&nbsp;zestátnění a objekt využívala obec, místní zemědělské družstvo a škol"
  },
  {
    "id": 6422,
    "name": "Polní Chrčice",
    "slug": "polni-chrcice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/polni-chrcice/",
    "kraj": ["Kolín",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/polni-chrcice/DSCF6970.JPG",
    "desc": "Jednoduchá osmimetrová dřevěná konstrukce z&nbsp;roku 2013, vyztužená ocelovými táhly. Půlkruhový výhled z&nbsp;otevřené plošiny ve výšce metrů je kvůli vyššímu kopci Stráň vymezen pouze jihozápadním směrem (Polní Chrčic"
  },
  {
    "id": 1929,
    "name": "Praděd",
    "slug": "praded",
    "url": "https://turistickamapa.cz/praded/",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/praded-2021_29_7-134302.jpg",
    "desc": "Betonový vysílač z roku 1980 je 162 metrů vysoký. Praděd je zároveň naše nejvýše položená rozhledna. Špička antény je dokonce nejvyšším bodem v republice, neboť o 50 metrů převyšuje vrchol Sněžky. Fantastický kruhový výh"
  },
  {
    "id": 18401,
    "name": "Praha-Jindřišská věž",
    "slug": "praha-jindrisska-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/praha-jindrisska-vez/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/praha-jindrisska-vez/DSCF7095.JPG",
    "desc": "Jindřišská věž je původní gotická zvonice kostela sv. Jindřicha a sv. Kunhuty. Byla postavena v&nbsp;letech 1472-1476. O sto let později byla opatřena hodinami. Při švédském obléhání města v&nbsp;roce 1648, kdy sloužila "
  },
  {
    "id": 18132,
    "name": "Praha-Malostranská mostecká věž",
    "slug": "praha-malostranska-mostecka-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/praha-malostranska-mostecka-vez/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/praha-malostranska-mostecka-vez/DSCF5600.JPG",
    "desc": "Malostranské mostecké věže jsou dvě levobřežní, nestejně vysoké a stylově odlišné mostní věže propojené branou, kterou se vcházelo na Karlův most z Malé Strany. Nižší Juditina věž střežila vstup na tehdejší Juditin most,"
  },
  {
    "id": 17908,
    "name": "Praha-Prašná brána",
    "slug": "praha-prasna-brana",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/praha-prasna-brana/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/praha-prasna-brana/DSCF5558.JPG",
    "desc": "Masivní čtyřboká gotická brána, jeden ze symbolů Prahy, vznikla roku 1475 poté, co nahradila již nepotřebnou Bránu sv. Ambrože. Její původní název zněl Nová brána. V&nbsp;18. století v&nbsp;jejích útrobách nacházelo skla"
  },
  {
    "id": 18251,
    "name": "Praha-Staroměstská mostecká věž",
    "slug": "praha-staromestska-mostecka-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/praha-staromestska-mostecka-vez/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/praha-staromestska-mostecka-vez/DSCF5588.JPG",
    "desc": "Gotická fortifikační věž z&nbsp;pískovcových kvádrů nad prvním mostním pilířem tvoří pravobřežní vstup na Karlův most, s&nbsp;nímž byla i společně stavěna. Má tvar mohutného hranolu s&nbsp;cimbuřím a vysokou stanovou stř"
  },
  {
    "id": 16916,
    "name": "Praha-Staroměstská radnice",
    "slug": "praha-staromestska-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/praha-staromestska-radnice/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/praha-staromestska-radnice/DSCF5571.JPG",
    "desc": "Staroměstská radnice byla založena roku 1338 jako první v&nbsp;Čechách. Tvoří ji komplex několika sousedících domů, které byly postupně připojovány do jednoho správního celku. Historicky první dům je raně gotický nárožní"
  },
  {
    "id": 18423,
    "name": "Praha-Svatomikulášská zvonice",
    "slug": "praha-svatomikulasska-zvonice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/praha-svatomikulasska-zvonice/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/praha-svatomikulasska-zvonice/DSCF5623.JPG",
    "desc": "Štíhlá barokní zvonice z&nbsp;let 1739-1755 sloužila zároveň jako požární hláska a hodinová věž. Svoje „nejslavnější“ období ale zažila od 60. let minulého století, kdy byla využívána Státní bezpečností jako tajná pozoro"
  },
  {
    "id": 11620,
    "name": "Práchovna",
    "slug": "prachovna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/prachovna/",
    "kraj": ["Kolín",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/prachovna/DSCF5260.JPG",
    "desc": "Samostatně stojící gotická věž byla postavena v první polovině 15. století na Zálabské skále jako předsunuté opevnění Kolínského hradu. Později sloužila jako strážní věž, vodárna a nakonec i jako sklad střelného prachu. "
  },
  {
    "id": 1932,
    "name": "Prašivá",
    "slug": "prasiva",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/prasiva/",
    "kraj": ["Frýdek - Místek",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/prasiva/Pra%C5%A1iv%C3%A1.JPG",
    "desc": "Dřevěná turistická chata se čtrnáctimetrovou střešní nástavbou z roku 1921. Omezený výhled z krytého ochozu ve výšce 11 metrů (pro vysoké stromy kolem celé chaty je vidět pouze blízké okolí s nedalekým dřevěným kostelíke"
  },
  {
    "id": 1077,
    "name": "Prosečský hřeben",
    "slug": "prosecsky-hreben",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/prosecsky-hreben/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/prosecsky-hreben/ph.jpg",
    "desc": "Masívní kamenná čtyřiadvacetimetrová věž z roku 1932. Kruhový výhled z otevřeného ochozu ve výšce 20 metrů (Jizerské hory, Lužické hory, Ještěd, Štěpánka, Tanvaldský Špičák, Bramberk, Javorník, Liberec, Jablonec). Ze sil"
  },
  {
    "id": 1782,
    "name": "Předina",
    "slug": "predina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/predina/",
    "kraj": ["Olomoucký kraj",
      "Prostějov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/predina/predina-01-js.jpg",
    "desc": "Desetimetrová dřevěná trámová stavba z roku 2000. Výhledu ze zastřešené plošiny ve výšce 8 metrů brání jižním směrem vysoký les (Nízký a Hrubý Jeseník, Oderské a Hostýnské vrchy, Drahanská vrchovina, Prostějov, Přerov). "
  },
  {
    "id": 13180,
    "name": "Přerov",
    "slug": "prerov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/prerov/",
    "kraj": ["Olomoucký kraj",
      "Přerov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/prerov/DSCF2485.JPG",
    "desc": "Na místě původního hradu z&nbsp;12. století vznikl v&nbsp;polovině 17. století tříkřídlý novorenesanční zámek, který byl až ve dvacátých letech 20. století dostavěn o čtvrté křídlo. Současná podoba sedmačtyřicetimetrové "
  },
  {
    "id": 22699,
    "name": "Přístav Hlušovice",
    "slug": "pristav-hlusovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/pristav-hlusovice/",
    "kraj": ["Olomouc",
      "Olomoucký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/pristav-hlusovice/DSCF8074.JPG",
    "desc": "Šestnáctimetrová montovaná stavba ve tvaru majáku stojí od roku 2023 na severozápadním okraji obce Hlušovice, ležící čtyři kilometry severně od Olomouce. Do ukončení kolaudačního řízení v&nbsp;roce 2024 byla věž veřejnos"
  },
  {
    "id": 8143,
    "name": "Rabí",
    "slug": "rabi",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rabi/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://hrad-rabi.cz/pamatky/rabi/fotogalerie/image-thumb__190437__OgTagImage/jarni-od-jana.webp",
    "desc": "Počátky založení hradu na skalním ostrohu nad Otavou se datují do první poloviny 14. století pány z&nbsp;Rýzmberka. V&nbsp;současné době je národní kulturní památka Rabí nejrozsáhlejší hradní zříceninou v&nbsp;Čechách. M"
  },
  {
    "id": 1275,
    "name": "Radejčín",
    "slug": "radejcin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/radejcin/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/radejcin/DSCF1116.JPG",
    "desc": "Třicetimetrová ocelová telekomunikační věž z roku 2010. Kruhový výhled ze zastřešené plošiny ve výšce 20 metrů (České středohoří s nedalekou Kletečnou, hřeben Krušných hor s Komáří vížkou, Teplice s Doubravkou, Labe a tě"
  },
  {
    "id": 825,
    "name": "Radětice",
    "slug": "radetice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/radetice/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/radetice/2013-04-19-radetice-u-bechyne-rozhledna-01.jpg",
    "desc": "Třináctimetrová dřevěná rozhledna z roku 2004. Půlkruhový výhled ze zastřešeného ochozu ve výšce 11 metrů pouze východním směrem na mírně zvlněnou krajinu kolem Lužnice. Na jihovýchodě dominuje pouze větší Bechyně se zám"
  },
  {
    "id": 3377,
    "name": "Radost",
    "slug": "radost",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/radost/",
    "kraj": ["Plzeň - sever",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/radost/dscf0845.jpg",
    "desc": "Velmi atypická devítimetrová dřevěná rozhledna s&nbsp;jedenáctimetrovým bočním schodištěm. Půlkruhový výhled jihovýchodním směrem z&nbsp;kryté plošiny ve výšce 7 metrů (Radeč, Radyně, Šumava, Brdy, Kaceřov) Tato soukromá"
  },
  {
    "id": 3836,
    "name": "Radošov",
    "slug": "radosov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/radosov/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/radosov/dscf2475.jpg",
    "desc": "Šestnáctimetrová dřevěná rozhledna s&nbsp;vnitřním ocelovým vinutým schodištěm z&nbsp;roku 2014, která svým tvarem záměrně připomíná číši vína. Kruhový výhled z&nbsp;otevřené plošiny ve výšce 15 metrů (V. Javořina, Buchl"
  },
  {
    "id": 14194,
    "name": "Radovič",
    "slug": "radovic",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/radovic/",
    "kraj": ["Kladno",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/radovic/DSCF3305.JPG",
    "desc": "Téměř pětimetrová rozhledna je postavena jižně od Velvar na výrazném holém na návrší. Kruhový výhled z&nbsp;otevřené plošiny vybavené stolkem a lavicemi z&nbsp;výšky necelých čtyř metrů (České středohoří s&nbsp;Milešovko"
  },
  {
    "id": 228,
    "name": "Radyně",
    "slug": "radyne",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/radyne/",
    "kraj": ["Plzeň - město",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/radyne/IMG_4443.JPG",
    "desc": "Mohutná třiadvacetimetrová kamenná věž hradu postaveného ve 14. století za císaře Karla IV., která v současné době slouží i jako rozhledna. Kruhový výhled z otevřeného ochozu ve výšce 22 metrů&nbsp; (Přimda, Šumava, Brdy"
  },
  {
    "id": 1081,
    "name": "Rašovka",
    "slug": "rasovka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rasovka/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/rasovka/P1010036.JPG",
    "desc": "Téměř dvacetimetrová zděná rozhledna z roku 2006. Krytá vyhlídková místnost poskytuje nádherný výhled na Jizerské hory, Krkonoše, Černou Studnici, Javorník, Kozákov, Bezděz a Ralsko. Pouze severozápadním směrem brání výh"
  },
  {
    "id": 13884,
    "name": "Reistna",
    "slug": "reistna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/reistna/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/reistna/DSCF3019.JPG",
    "desc": "Romanticko- klasicistní kolonáda Reistna je nejvýše položenou stavbou Lednicko – Valtického areálu, zapsaného od roku 1996 na seznamu světového kulturního dědictví UNESCO. Stavba byla dokončena v&nbsp;roce 1823 a stála n"
  },
  {
    "id": 2010,
    "name": "Réna",
    "slug": "rena",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rena/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rena/rena-a-muchy-9-13.jpg",
    "desc": "Betonová čtyřmetrová stavba z roku 1930, která byl dlouhou dobu naší nejnižší rozhlednou. Pro vysoké stromy je výhled z třímetrové otevřené plošiny omezen pouze severním směrem na Ivančice a komíny JE Dukovany. Na Rénu v"
  },
  {
    "id": 10608,
    "name": "Rokštejn",
    "slug": "rokstejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rokstejn/",
    "kraj": ["Jihlava",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rokstejn/DSCF9848.JPG",
    "desc": "Mohutná zřícenina hradu z&nbsp;druhé poloviny 13. století postaveného na skále nad říčkou Brtnicí. Hradu vévodí 17 metrů vysoká hranolová věž, z&nbsp;jehož otevřeného ochozu však kromě areálu hradu, úzkého údolí Brtnice "
  },
  {
    "id": 337,
    "name": "Romanka",
    "slug": "romanka",
    "url": "https://turistickamapa.cz/rozhledna-romanka/",
    "kraj": ["Nymburk",
      "Středočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-romanka-2020_10_7-160133.jpg",
    "desc": "Padesátimetrový betonový sloup z roku 2003 zakrytý do poloviny výšky kovovou konstrukcí rozhledny trojúhelníkového půdorysu. Ocelová konstrukce je navíc opláštěná dřevem. Celá stavba je postavena na umělém návrší, v jeho"
  },
  {
    "id": 1853,
    "name": "Rosička",
    "slug": "rosicka",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-rosicka",
    "kraj": ["Vysočina",
      "Žďár nad Sázavou"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-rosicka/rozhledna-rosicka-24347-v5.jpg",
    "desc": "Čtyřicetimetrový ocelový telekomunikační tubus s vnějším vinutým schodištěm z roku 2001. Kruhový výhled z otevřeného ochozu ve výšce 24 metrů (Českomoravská vrchovina, Žďár nad Sázavou). Odbočka k rozhledně se nachází na"
  },
  {
    "id": 10582,
    "name": "Roštejn",
    "slug": "rostejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rostejn/",
    "kraj": ["Jihlava",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rostejn/DSCF9797.JPG",
    "desc": "Pozdně gotický hrad z&nbsp;první poloviny 14. století, kterému dominuje pětačtyřicetimetrová sedmiboká věž, která je postavena na mohutném skalisku, které prorůstá do spodních pater hradu. Postupně kruhový výhled ze tří "
  },
  {
    "id": 1885,
    "name": "Rovnina",
    "slug": "rovnina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rovnina/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rovnina/img_9861.jpg",
    "desc": "Padesátimetrová ocelová telekomunikační věž z roku 2003. Kruhový výhled z dřevem obložené plošiny ve výšce 24 metrů (Bílé Karpaty, Chřiby, Hostýnské vrchy, Uherské Hradiště ale také Nízký Jeseník a Pavlovské vrchy). Cest"
  },
  {
    "id": 1717,
    "name": "Rozálka",
    "slug": "rozalka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rozalka/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/rozalka/DSCF1761.JPG",
    "desc": "Dvacetimetrová dřevěná rozhledna ve tvaru husitské hlásky z roku 1932. Tvarově téměř shodná s dnes již shořelou jihočeskou Hýlačkou. Půlkruhový výhled z uzavřené místnosti ve výšce šestnáci metrů pouze jihozápadním směre"
  },
  {
    "id": 15010,
    "name": "Rožmberk – Anglická věž",
    "slug": "rozmberk-anglicka-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rozmberk-anglicka-vez/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rozmberk-anglicka-vez/DSCF9051.JPG",
    "desc": "Hrad z&nbsp;poloviny 13. století se&nbsp;dělí na Horní a Dolní hrad. Staršímu Hornímu hradu vévodí kamenná válcová věž Jakobínka, ve které v&nbsp;současné době probíhá rekonstrukce a je obehnána dřevěným lešením. Dolnímu"
  },
  {
    "id": 15012,
    "name": "Rožmberk – Jakobínka",
    "slug": "rozmberk-jakobinka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rozmberk-jakobinka/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rozmberk-jakobinka/DSCF9089.JPG",
    "desc": "Hrad z&nbsp;poloviny 13. století se&nbsp;dělí na Horní a Dolní hrad. Staršímu Hornímu hradu vévodí kamenná válcová věž Jakobínka, ve které v&nbsp;současné době probíhá rekonstrukce a je obehnána dřevěným lešením. Dolnímu"
  },
  {
    "id": 12833,
    "name": "Rožmitál",
    "slug": "rozmital",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-rozmital-pod-tremsinem",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-rozmital-pod-tremsinem/rozhledna-rozmital-pod-tremsinem-57147-v5.jpg",
    "desc": "Dvanáctimetrová vyhlídková věž je vlastně upravená trafostanice, která stála v&nbsp;bývalé továrně Agrostroje. Přebudováním celého areálu v&nbsp;roce 2010 zde vzniklo Podbrdské muzeum s&nbsp;expozicí historických automob"
  },
  {
    "id": 1610,
    "name": "Rtyně",
    "slug": "rtyne",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rtyne/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/rtyne/1.jpg",
    "desc": "Osmimetrová trámová rozhledna z roku 2002. Dokonalému výhledu ze zastřešené plošiny ve výšce 5 metrů brání jihozápadním směrem vysoký zalesněný kopec (Krkonoše, Jestřebí hory, Rtyně). Přestože se tato malá stavba nachází"
  },
  {
    "id": 1855,
    "name": "Rubačka",
    "slug": "rubacka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rubacka/",
    "kraj": ["Vysočina",
      "Žďár nad Sázavou"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/vysocina/rubacka/DSCF1148.JPG",
    "desc": "Dvanáctimetrová kovová rozhledna z roku 2009, postavená nad střechou vodojemu. Výhled z otevřeného ochozu ve výšce 7 metrů je omezen pouze severovýchodním směrem (Velké Meziříčí se známým dálničním mostem). Cesta k rozhl"
  },
  {
    "id": 13526,
    "name": "Rubín",
    "slug": "rubin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rubin/",
    "kraj": ["Louny",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rubin/DSCF2856.JPG",
    "desc": "Dřevěná sedmimetrová rozhledna ve tvaru strážní věže je postavena na místě pravěkého slovanského hradiště. V anketě o rozhlednu roku 2018, pořádané Klubem přátel rozhleden, obsadila 2. místo. Nádherný výhled ze zastřešen"
  },
  {
    "id": 23377,
    "name": "Rudíkov",
    "slug": "rudikov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rudikov/",
    "kraj": ["Třebíč",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rudikov/DSCF8720.JPG",
    "desc": "Původní téměř třímetrová vyhlídková plošina z kamene, oceli a dřeva byla postavena na okraji obce v roce 2014. O deset let později byla přistavena ocelová věž do výšky třinácti metrů. Spirálové schodiště nás dovede na kr"
  },
  {
    "id": 14436,
    "name": "Rudolfka",
    "slug": "rudolfka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rudolfka/",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rudolfka/DSCF3664.JPG",
    "desc": "Mohutná 38 metrová železobetonová těžní věž Dolu generála Štefánika, později přejmenovaného na Důl 25. února je jedinou stavbou tohoto druhu v&nbsp;Evropě a pravděpodobně i na celém světě. V&nbsp;roce 1949 nahradila půvo"
  },
  {
    "id": 2012,
    "name": "Rumburak",
    "slug": "rumburak",
    "url": "https://turistickamapa.cz/rozhledna-rumburak/",
    "kraj": ["Jihomoravský kraj",
      "Znojmo"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-rumburak-2023_2_5-152742.jpg",
    "desc": "Třicetimetrová zděná věž z roku 2009, která je součástí stejnojmenného penzionu. Kruhový výhled ze zastřešeného ochozu ve výšce 26 metrů (obec Bítov a Vranovská přehrada, hrad Cornštejn, Javořice, JE Dukovany, za dobré v"
  },
  {
    "id": 1612,
    "name": "Ruprechtický Špičák",
    "slug": "ruprechticky-spicak",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ruprechticky-spicak/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/ruprechticky-spicak/0234_ruprechticky-spicak.jpg",
    "desc": "Třicetimetrová ocelová telekomunikační věž z roku 2002. Kruhový výhled z otevřeného ochozu ve výšce 24 metrů&nbsp; (pro mne dost nezvyklý pohled na Orlické hory a Krkonoše ze severu, jako by z Polska, Broumovské stěny, R"
  },
  {
    "id": 12170,
    "name": "Růženka",
    "slug": "ruzenka",
    "url": "https://turistickamapa.cz/rozhledna-ruzenka/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-ruzenka-2020_10_8-190811.jpg",
    "desc": "Šestimetrová betonová kupole z roku 2018 s kruhovými průzory, záměrně připomínající nedaleké vojenské bunkry nebo odvážný projekt národní knihovny architekta Kaplického. V anketě o rozhlednu roku 2018, pořádanou Klubem p"
  },
  {
    "id": 4316,
    "name": "Rýdův kopec",
    "slug": "ryduv-kopec",
    "url": "https://turistickamapa.cz/rozhledna-ryduv-kopec/",
    "kraj": ["Jihočeský kraj",
      "Jindřichův Hradec"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-ryduv-kopec-2020_27_12-161952.jpg",
    "desc": "Nepřehlédnutelná třiatřicetimetrová kombinovaná stavba převážně ze dřeva z&nbsp;roku 2015 spočívá na mohutné, kamenem obložené betonové podezdívce. Nosnou konstrukci pak tvoří tři dřevěné stojiny a tři ocelové sloupy. Na"
  },
  {
    "id": 10883,
    "name": "Rychmburk",
    "slug": "rychmburk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rychmburk/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rychmburk/DSCF0266.JPG",
    "desc": "Středověký hrad ze 13. století se tyčí na strmém ostrohu nad údolím říčky Krounky a Lešanského potoka. Později byl renesančně a barokně přestavěn. V&nbsp;současné době zde sídlí sociální pobytové zařízení pro osoby s&nbs"
  },
  {
    "id": 231,
    "name": "Rýzmberk",
    "slug": "ryzmberk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ryzmberk/",
    "kraj": ["Domažlice",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/ryzmberk/P1010050.JPG",
    "desc": "Z kdysi rozlehlého hradu, založeného ve druhé polovině 13. století a složeného ze tří nad sebou umístěných nádvoří, se do dnešních dnů dochovaly pouze části hradeb, příkopy a zbytky paláce se sklepeními. Od roku 1676 je "
  },
  {
    "id": 3857,
    "name": "Řimbaba",
    "slug": "rimbaba",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rimbaba/",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/rimbaba/dscf2390.jpg",
    "desc": "Patnáctimetrová ocelová věž bývalého dolu Řimbaba z&nbsp;roku 1964, přestavená v&nbsp;roce 2013 na rozhlednu. Kruhový výhled z&nbsp;otevřené plošiny ve výšce 11 metrů je možný jen do nejbližšího okolí, v&nbsp;dálce jsou "
  },
  {
    "id": 23327,
    "name": "Římská věž",
    "slug": "rimska-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/rimska-vez/",
    "kraj": ["Olomoucký kraj",
      "Přerov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/tucin/DSCF8733.JPG",
    "desc": "Patnáctimetrová rozhledna z&nbsp;roku 2024 byla postavena na plochém návrší Na kopci východně od obce Tučín. Je z&nbsp;betonových tvárnic, které byly následně obloženy kamenem. Vyhlídka je odkazem na pobyt římských vojsk"
  },
  {
    "id": 5342,
    "name": "Salaš",
    "slug": "salas",
    "url": "https://turistickamapa.cz/rozhledna-salas/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-salas-2023_22_1-125150.jpg",
    "desc": "Futuristicky pojatá jedenadvacetimetrová ocelová rozhledna z&nbsp;roku 2015 ve tvaru hasáku nebo dvou proti sobě zakleslých sedmiček, částečně obložená modřínovými lamelami. V anketě o rozhlednu roku 2015, vyhlášenou Klu"
  },
  {
    "id": 761,
    "name": "Salingburg",
    "slug": "salingburg",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/salingburg/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/karlovarsky-kraj/salingburg/Salingburg.JPG",
    "desc": "Malá kamenná věž v podobě romantické hradní zříceniny z roku 1906. Z otevřeného ochozu ve výšce deset metrů není pro vysoké stromy téměř žádný rozhled. Při jízdě z Chebu do Františkových Lázní se podjede obchvat a vzápět"
  },
  {
    "id": 252,
    "name": "Sedlo",
    "slug": "sedlo",
    "url": "https://turistickamapa.cz/rozhledna-sedlo/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-na-sedle-2023_5_11-102330.jpg",
    "desc": "Osmadvacetimetrová dřevěná sedmiboká rozhledna z&nbsp;roku 2009. Kruhový výhled z&nbsp;krytého ochozu ve výšce 24 metrů (celé panorama Šumavy od Javoru a Jezerní hory, přes Ždánidla, Poledník, Huťskou horu a Roklan včetn"
  },
  {
    "id": 827,
    "name": "Semenec",
    "slug": "semenec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/semenec/",
    "kraj": ["České Budějovice",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/semenec/2013-05-11-semenec-u-tyna-nad-vltavou-rozhledna-03.jpg",
    "desc": "Jednopatrová sedmimetrová betonová rozhledna z roku 1930.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &n"
  },
  {
    "id": 9914,
    "name": "Semtěš",
    "slug": "semtes",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/semtes/",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/semtes/Semt%C4%9B%C5%A1-1.JPG",
    "desc": "Dvaadvacetimetrová hranolová věž bývalé gotické tvrze z&nbsp;poloviny 14. století. Půlkruhový výhled z otevřeného ochozu je možný pouze jihozápadním směrem, opačný obzor zakrývá hradba Železných hor (Čáslav, Kutná Hora s"
  },
  {
    "id": 2780,
    "name": "Skalka",
    "slug": "skalka",
    "url": "https://turistickamapa.cz/rozhledna-skalka/",
    "kraj": ["Praha - východ",
      "Středočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-skalka-vyzlovka-2021_12_9-135024.jpg",
    "desc": "Pětadvacetimetrová dřevěná rozhledna z&nbsp;roku 2011 se železným točitým schodištěm. Kruhový výhled ze zastřešené plošiny ve výšce 21 metrů (Krkonoše, Orlické hory, České středohoří, Bezděz, Ralsko, Říp, Ještěd, Milešov"
  },
  {
    "id": 2620,
    "name": "Skřivánčí vrch",
    "slug": "skrivanci-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/skrivanci-vrch/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/skrivanci-vrch/skrivanci1.jpg",
    "desc": "Šestnáctimetrová ocelová rozhledna z roku 2011. Kruhový výhled z otevřeného ochozu ve výšce 15 metrů (Krušné hory s Klínovcem, větrné elektrárny u Rusové, elektrárny Prunéřov a Tušimice, Doupovské hory). Obec Zelené, nad"
  },
  {
    "id": 1615,
    "name": "Skuhrov",
    "slug": "skuhrov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/skuhrov/",
    "kraj": ["Královéhradecký kraj",
      "Rychnov nad Kněžnou"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/skuhrov/2.jpg",
    "desc": "Jedenáctimetrová dřevěná rozhledna z roku 2011 se třemi vyhlídkovými plošinami. Výhled z krytého ochozu ve výšce 8 metrů je pro vysoké stromy omezen pouze severovýchodním směrem (Skuhrov, údolí říčky Bělé, hřebeny Orlick"
  },
  {
    "id": 3893,
    "name": "Skulptura",
    "slug": "skulptura",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/skulptura/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/troja/dscf3233.jpg",
    "desc": "Vyřazená desetimetrová železná nádrž na palivo s vnitřním schodištěm, z níž akademický sochař Čestmír Suška vytvořil v roce 2012 umělecké dílo s názvem Skulptura. Od roku 2014 je společně s dalšími kovovými sochami umíst"
  },
  {
    "id": 829,
    "name": "Slabošovka",
    "slug": "slabosovka",
    "url": "https://turistickamapa.cz/rozhledna-slabosovka/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2019_17-10-123548-tmp.jpg",
    "desc": "Šestatřicet metrů vysoká ocelová telekomunikační věž z roku 2002. Kruhový výhled z otevřené plošiny ve výšce 24 metrů (Slepičí hory s Kohoutem a Slepicí,&nbsp; Novohradské hory s Vysokou, Hradišťský vrch s rozhlednou, Šu"
  },
  {
    "id": 14253,
    "name": "Slatina",
    "slug": "slatina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/slatina/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/slatina/DSCF3437.JPG",
    "desc": "Celodřevěná 18 metrová rozhledna z&nbsp;roku 2019 spočívá na šesti masivních smrkových kmenech. Dřevěně točité schodiště je pak neseno na stejně silném středovém pilíři. Kruhový výhled ze zastřešené plošiny ve výšce 12 m"
  },
  {
    "id": 12805,
    "name": "Slatiňany",
    "slug": "slatinany",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/slatinany/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/slatinany/DSCF2284.JPG",
    "desc": "Předchůdkyní zámku byla středověká tvrz ze 14. století, na jejíchž základech byl koncem 16. století postaven renesanční zámek. Koncem 19. století zámek získal současnou novogotickou podobu a jeho interiéry byly vybaveny "
  },
  {
    "id": 3853,
    "name": "Slavětínská rozhledna",
    "slug": "slavetinska-rozhledna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/slavetinska-rozhledna/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/slavetinska-rozhledna/dscf2595.jpg",
    "desc": "Dvaadvacetimetrová dřevěná rozhledna z&nbsp;roku 2014 s&nbsp;ocelovým točitým schodištěm. Kruhový výhled ze zastřešené plošiny ve výšce 18 metrů (Krkonoše, Rýchory, Vraní a Javoří hory, Trutnov, elektrárna Poříčí, přehra"
  },
  {
    "id": 339,
    "name": "Slavín",
    "slug": "slavin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/slavin/",
    "kraj": ["Mělník",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/slavin/Slav%C3%ADn-dv8.jpg",
    "desc": "Třicetimetrová kamenná zámecká věž v maurském slohu s bohatě zdobeným ochozem z roku 1840,&nbsp; která od roku 1873 do&nbsp; roku 1946 sloužila veřejnosti jako rozhledna. Celý objekt měl původně sloužit jako památník nár"
  },
  {
    "id": 23374,
    "name": "Slavkov u Brna",
    "slug": "slavkov-u-brna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/slavkov-u-brna/",
    "kraj": ["Jihomoravský kraj",
      "Vyškov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/slavkov-u-brna/slavkov4-ve-velke-velikosti.jpeg",
    "desc": "Dlouho nevyužívaná devítimetrová zděná věžová stavba bývalé vodárny, zásobující kdysi vodou přilehlý zámek a hospodářské budovy, byla v roce 1997 přestavěna na vyhlídkovou věž na okraji golfového areálu. Poslední dobou v"
  },
  {
    "id": 3920,
    "name": "Slovácký dvůr",
    "slug": "slovacky-dvur",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/slovacky-dvur/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/slovacky-dvur/dscf3371.jpg",
    "desc": "Jedenáctimetrová dřevěná rozhledna z&nbsp;roku 2014. Půlkruhový výhled ze zastřešeného ochozu ve výšce 8 metrů je omezen pouze západním směrem (pohoří Chřiby s&nbsp;hradem Buchlov, částečně jsou mezi stromy vidět i Bílé "
  },
  {
    "id": 1084,
    "name": "Slovanka",
    "slug": "slovanka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/slovanka/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/slovanka/IMG_3531.jpg",
    "desc": "Nejstarší železná rozhledna u nás byla postavena v roce 1887. Vzhledem ke svému stáří, klimatickým podmínkám a také vinou špatné údržby rozhledna chátrala. Ke konci devadesátých let byla dokonce uzavřena a hrozila jí dem"
  },
  {
    "id": 2015,
    "name": "Slunečná",
    "slug": "slunecna",
    "url": "https://turistickamapa.cz/rozhledna-slunecna/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-slunecna-2022_20_5-105743.jpg",
    "desc": "Velmi atypická devatenáctimetrová dřevěná rozhledna z roku 2009 s točitým ocelovým schodištěm (nezapře podobný rukopis s východočeskou rozhlednou Borůvka od stejného architekta Antonína Olšiny). Kruhový výhled z částečně"
  },
  {
    "id": 13800,
    "name": "Smečno",
    "slug": "smecno",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/smecno/",
    "kraj": ["Kladno",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/smecno/DSCF3101.JPG",
    "desc": "Původní tvrz a pozdější gotický hrad byl ve druhé polovině&nbsp;16. století přestavěn na zámek, kterému vévodí dvě věže. Nejstarší částí zámku je východní 28 metrů vysoká věž s&nbsp;gotickou kaplí sv. Anny. V&nbsp;součas"
  },
  {
    "id": 1089,
    "name": "Smrk",
    "slug": "smrk",
    "url": "https://turistickamapa.cz/rozhledna-smrk/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-smrk-2020_14_7-111514.jpg",
    "desc": "Dva zalomené dvacetimetrové ocelové sloupy nesoucí dvě vyhlídkové plošiny z roku 2003. Nádherný kruhový výhled ze dvou otevřených plošin ve výšce 10 a 17 metrů (Jizerské a Lužické hory, Krkonoše, Ještěd, Bezděz, Říp, Pol"
  },
  {
    "id": 11638,
    "name": "Soběslav",
    "slug": "sobeslav",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sobeslav/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/sobeslav/DSCF1053-1.JPG",
    "desc": "Počátky výstavby hradu se datují již do 13. Století. Třicetimetrová válcová obranná věž s&nbsp;břitem však byla postavena až &nbsp;počátkem 16. století a stala se součástí městského opevnění. Při příležitosti dostavby mo"
  },
  {
    "id": 1935,
    "name": "Soběšovice",
    "slug": "sobesovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sobesovice/",
    "kraj": ["Frýdek - Místek",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/moravskoslezsky-kraj/sobesovice/Lucky%201.jpg",
    "desc": "Dřevem opláštěná sedmnáctimetrová ocelová konstrukce z roku 2004 s vnitřním ocelovým schodištěm, která je součástí obecního úřadu. Kruhový výhled ze zastřešeného ochozu ve výšce 13 metrů (Moravskoslezské Beskydy s domina"
  },
  {
    "id": 23385,
    "name": "Sofie",
    "slug": "sofie",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sofie/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/sofie/DSCF8045.JPG",
    "desc": "Jednoduchá dvanáctimetrová železná konstrukce stála bez užitku od osmdesátých let minulého století na Sofijském náměstí. Teprve v&nbsp;roce 2020 se dočkala celkové rekonstrukce a byla přestavena na rozhlednu. Výhled z&nb"
  },
  {
    "id": 1278,
    "name": "Sokolí vrch",
    "slug": "sokoli-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sokoli-vrch/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/sokoli-vrch/IMG_0835.jpg",
    "desc": "Padesátimetrový železobetonový tubus s vnějším točitým schodištěm z roku 2003. Fantastický kruhový výhled z krytého ochozu ve výšce 32 metrů (Lužické hory, Ještěd, Děčín a Děčínské stěny seSněžníkem, Krušné hory). Půlkil"
  },
  {
    "id": 2995,
    "name": "Soumarské rašeliniště",
    "slug": "soumarske-raseliniste",
    "url": "https://turistickamapa.cz/soumarske-raseliniste/",
    "kraj": ["Jihočeský kraj",
      "Prachatice"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Nau%C4%8Dn%C3%A1_stezka_Soumarsk%C3%A9_ra%C5%A1elini%C5%A1t%C4%9B_%2822%29.jpg/960px-Nau%C4%8Dn%C3%A1_stezka_Soumarsk%C3%A9_ra%C5%A1elini%C5%A1t%C4%9B_%2822%29.jpg",
    "desc": "Devítimetrová dřevěná rozhledna z roku 2011 je postavená na nejvyšším místě, do roku 2000 průmyslově využívaného rašeliniště. Kruhový výhled ze zastřešeného ochozu ve výšce 6 metrů (Stožec, hřeben Boubínu, Želnavská paho"
  },
  {
    "id": 10914,
    "name": "Sovinec",
    "slug": "sovinec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sovinec/",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://31f874cb21.clvaw-cdnwnd.com/488ac10d3317129aaa193b21b85ff28d/200000087-2de3c2fda4/700/full%20final-9092.jpg?ph=31f874cb21",
    "desc": "Gotický hrad z konce 13. století byl v pozdějších letech renesančně a barokně přestavován. V prvních dnech osvobození roku 1945 byl zapálen a značně poškozen. Hradu vévodí dvacetimetrová válcová věž. Přestože hrad leží v"
  },
  {
    "id": 3288,
    "name": "Spešov",
    "slug": "spesov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/spesov/",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/spesov/dscf0656.jpg",
    "desc": "Osmimetrová dřevěná rozhledna z&nbsp;roku 2012. Půlkruhový výhled ze zastřešeného ochozu ve výšce 5 metrů (Blansko, Spešov, zámek v&nbsp;Rájci, Jestřebí, rozhledny Veselice a Malý Chlum). Přestože tato rozhledna stojí po"
  },
  {
    "id": 18482,
    "name": "Staré Město-radnice",
    "slug": "stare-mesto-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stare-mesto-radnice/",
    "kraj": ["Olomoucký kraj",
      "Šumperk"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/stare-mesto-radnice/DSCF5502.JPG",
    "desc": "Památkově chráněná, pozdně renesanční radnice z roku 1619 se štíhlou 35metrovou věží, je spolu s kostelem svaté Anny dominantou Starého Města. Současná podoba pochází z roku 1895, kdy byla věž několikrát přestavována kvů"
  },
  {
    "id": 15825,
    "name": "Starý Herštejn",
    "slug": "stary-herstejn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stary-herstejn/",
    "kraj": ["Domažlice",
      "Plzeňský kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Stary_Herstejn_3.JPG/1280px-Stary_Herstejn_3.JPG",
    "desc": "Vrchol hřebene, na kterém hrad od druhé poloviny 13. století stojí, tvoří hlavní Evropské rozvodí Labe – Dunaj. Sloužil jako pomezní hrad k&nbsp;obraně Řezenské obchodní stezky mezi Prahou, Plzní, Řeznem a&nbsp;Mnichovem"
  },
  {
    "id": 10769,
    "name": "Starý Jičín",
    "slug": "stary-jicin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stary-jicin/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/stary-jicin/DSCF0052.JPG",
    "desc": "Rozsáhlá zřícenina středověkého pohraničního hradu z&nbsp;přelomu 12. a 13. století střežícího cestu do Polska. Od příjezdové cesty mu vévodí nově zrekonstruovaná a od roku 1996 zpřístupněná dvacetimetrová čtyřboká věž. "
  },
  {
    "id": 11025,
    "name": "Stezka korunami stromů – Krkonoše",
    "slug": "stezka-korunami-stromu-krkonose",
    "url": "https://turistickamapa.cz/stezka-korunami-stromu-krkonose/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://turistickamapa.cz/data_fotos/stezka-korunami-stromu-krkonose-2021_6_7-113302.jpg",
    "desc": "Masivní dvanáctiboká dřevěná věž z&nbsp;roku 2017 se tyčí do výšky necelých 46 metrů. Po Stezce korunami stromů na Lipně (2012) a Stezce v oblacích v Dolní Moravě (2015) je Stezka v Krkonoších v pořadí již třetí podobnou"
  },
  {
    "id": 2979,
    "name": "Stezka korunami stromů – Lipno",
    "slug": "kramolin",
    "url": "https://www.dnesvyletujeme.cz/stezka-korunami-stromu-lipno",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/stezka-korunami-stromu-lipno/stezka-korunami-stromu-lipno-12037-v5.jpg",
    "desc": "Masivní čtyřicetimetrová devítiboká dřevěná věž z&nbsp;roku 2012. Nádherný kruhový výhled z&nbsp;otevřeného ochozu ve výšce 36 metrů (Lipenské jezero, jižní Šumava, vojenský prostor Boletice, Novohradské hory, Kleť, Alpy"
  },
  {
    "id": 13779,
    "name": "Stezka nad vinohrady",
    "slug": "stezka-nad-vinohrady",
    "url": "https://turistickamapa.cz/stezka-nad-vinohrady/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/stezka-nad-vinohrady-2023_4_1-163533.jpg",
    "desc": "Na naše poměry velice neobvykle pojatá ocelová spirálová konstrukce bez jediného schodu, na jejíž konec ve výšce necelých 8 metrů lze dojet na vozíku či s&nbsp;kočárkem. Kruhový výhled z&nbsp;libovolného místa chodníčku "
  },
  {
    "id": 5845,
    "name": "Stezka v oblacích",
    "slug": "stezka-v-oblacich",
    "url": "https://www.dnesvyletujeme.cz/stezka-v-oblacich-dolni-morava",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/stezka-v-oblacich-dolni-morava/stezka-v-oblacich-dolni-morava-1641-v5.jpg",
    "desc": "Velice atypická rozložitá dřevěná pětapadesátimetrová stavba s&nbsp;ocelovými spojovacími prvky vážícími 380 tun, vnitřním točitým schodištěm a téměř stometrovým tobogánem z&nbsp;roku 2015 (druhá rozhledna, po jejímž och"
  },
  {
    "id": 14276,
    "name": "Stezka Valaška",
    "slug": "stezka-valaska",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stezka-valaska/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/stezka-valaska/DSCF3498.JPG",
    "desc": "Dvaadvacetimetrová stezka&nbsp;korunami stromů z&nbsp;roku 2019 je po lipenské a krkonošské a Stezky v&nbsp;oblacích na Dolní Moravě již čtvrtou podobnou atrakcí u nás. Oproti předchozím však vyhlídková věž stojí až na k"
  },
  {
    "id": 1281,
    "name": "Stradonka",
    "slug": "stradonka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stradonka/",
    "kraj": ["Louny",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/stradonka/1.jpg",
    "desc": "Šestimetrová dřevěná vyhlídka z roku 2009. Kruhový výhled ze zastřešené plošiny ve výšce necelých tří metrů (nádherné panorama Českého středohoří s nejznámějšími vrcholy jako je Milešovka, Lovoš, Sedlo, Hradišťany, Košťá"
  },
  {
    "id": 10078,
    "name": "Strakonice",
    "slug": "strakonice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/strakonice/",
    "kraj": ["Jihočeský kraj",
      "Strakonice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/strakonice/DSCF9170.JPG",
    "desc": "Gotický hrad z&nbsp;první poloviny 13. století je postaven na břehu Otavy při soutoku s&nbsp;Volyňkou. Kruhový výhled z&nbsp;otevřeného ochozu pětatřicetimetrové věže Rumpál (Strakonice, rozhledna Kbíl, Šumava s&nbsp;Bou"
  },
  {
    "id": 13234,
    "name": "Stránov",
    "slug": "stranov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stranov/",
    "kraj": ["Mladá Boleslav",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/stranov/DSCF2642.JPG",
    "desc": "Na místě dnešního zámku stála dřevěná tvrz, která byla v&nbsp;polovině 15. století přestavěna na gotický hrad. Koncem 16. století prošel renesanční přestavbou. Svojí dnešní romantickou podobu doznal při novorenesanční př"
  },
  {
    "id": 3324,
    "name": "Stráž u Aše",
    "slug": "straz-u-ase",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/straz-u-ase/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/straz-u-ase/dscf0805.jpg",
    "desc": "Jedenáctimetrová velmi zkorodovaná železná rozhledna. Jedná se o bývalou vojenskou strážní věž pravděpodobně ze 70. let minulého století – identická s&nbsp;naopak velmi zachovalou&nbsp;rozhlednou v&nbsp;Kostelním Hlavně."
  },
  {
    "id": 1284,
    "name": "Strážiště",
    "slug": "straziste",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/straziste/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/straziste/Str%C3%A1%C5%BEi%C5%A1t%C4%9B-hotel-Partyz%C3%A1n-5.jpg",
    "desc": "Horský hotel Partyzán s mohutnou dvacetimetrovou kamennou věží z roku 1931. Kruhový výhled z prosklené plošiny ve výšce 17 metrů (Krušné hory, České středohoří, Říp, Chomutov). Z Chomutova je třeba vyjet po silnici směre"
  },
  {
    "id": 1937,
    "name": "Strážiště",
    "slug": "straziste-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/straziste-2/",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/straziste/018-kudlichova-rozhledna-straziste.jpg",
    "desc": "Žulový památník Hanse Kudlicha v podobě dvaadvacetimetrové rozhledny z roku 1913. Kruhový výhled je možný pouze z horního vyhlídkového ochozu ve výšce 18 metrů (Opava, polské roviny, Jeseníky s Pradědem a Vysokou Holí, B"
  },
  {
    "id": 25358,
    "name": "Strážná",
    "slug": "strazna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/strazna/",
    "kraj": ["Olomoucký kraj",
      "Prostějov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/strazna/Rozhkedna-Strazna.jpg",
    "desc": "Dvanáctimetrová dřevěná rozhledna z roku 2025. Kvůli nepříznivému podzimnímu počasí a absenci babího léta se mně tuto rozhlednu zatím nepodařilo zmapovat (viz článek Ach to babí léto v Aktualitách). Věřím, že brzy na jař"
  },
  {
    "id": 22950,
    "name": "Strážnice",
    "slug": "straznice-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/straznice-2/",
    "kraj": ["Mělník",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/strazniceii/DSCF8649.JPG",
    "desc": "Osmimetrová soukromá dřevěná stavba z roku 2024, připomínající spíš lepší myslivecký posed. Dokonalému kruhovému výhledu za zastřešeného ochozu ve výšce 5 metrů brání jihovýchodním směrem vrchol plochého návrší nad obcí "
  },
  {
    "id": 1939,
    "name": "Strážnice",
    "slug": "straznice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/straznice/",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/moravskoslezsky-kraj/straznice/IMG_0499.jpg",
    "desc": "Devítimetrová dřevená trámová věž z roku 2003. Výhled značně omezují vzrostlé stromy; pouze severním směrem je vidět město Prudnik v Polsku, Osoblažsko, částečně i Jeseníky. Odbočka k rozhledně se nachází na vrcholu stou"
  },
  {
    "id": 1720,
    "name": "Strážný vrch",
    "slug": "strazny-vrch-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/strazny-vrch-2/",
    "kraj": ["Pardubický kraj",
      "Svitavy"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/strazny-vrch-2/DSCF1125.JPG",
    "desc": "Atypická sedmnáctimetrová dřevěná rozhledna z roku 2010, který svým tvarem symbolizuje výztuhu hornické štoly. Je součástí naučné hřebečské důlní stezky, která seznamuje návštěvníky se zaniklou těžbou lupku a postupně je"
  },
  {
    "id": 1287,
    "name": "Strážný vrch",
    "slug": "strazny-vrch",
    "url": "https://turistickamapa.cz/rozhledna-strazny-vrch/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-strazny-vrch-2022_20_5-162527.jpg",
    "desc": "Dvanáctimetrová dřevěná rozhledna z roku 2006. Kruhový výhled z kryté plošiny ve výšce 9 metrů&nbsp; (Buková, Děčínský Sněžník, České středohoří, Lužické hory, Česká Lípa). Z obce Velká Javorská stoupá od kapličky po dob"
  },
  {
    "id": 10453,
    "name": "Střekov",
    "slug": "strekov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/strekov/",
    "kraj": ["Ústecký kraj",
      "Ústí nad Labem"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/strekov/DSCF9646.JPG",
    "desc": "Hrad Střekov byl postaven začátkem 14. století na těžko přístupné stometrové znělcové skále nad řekou na jižním okraji Ústí nad Labem. Nádherný půlkruhový výhled západním směrem ze 4 okének zastřešeného posledního patra "
  },
  {
    "id": 1295,
    "name": "Střekovská vyhlídka",
    "slug": "strekovska-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/strekovska-vyhlidka/",
    "kraj": ["Ústecký kraj",
      "Ústí nad Labem"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/strekovska-vyhlidka/DSCF1093.JPG",
    "desc": "Osmimetrová kamenná rozhledna s vnějším dřevěným točitým schodištěm z roku 2010. Severovýchodním směrem brání ve výhledu z otevřeného ochozu ve výšce 7 metrů vrcholky vzrostlých stromů (Ústí nad Labem s rozhlednami Větru"
  },
  {
    "id": 22864,
    "name": "Stříbrná věž",
    "slug": "stribrna-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stribrna-vez/",
    "kraj": ["Moravskoslezský kraj",
      "Ostrava město"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/stribrna-vez/DSCF8492.JPG",
    "desc": "Téměř dvanáctimetrová rozhledna z&nbsp;pozinkovaných trubek je součástí visutého chodníku nad ohradami se zvířaty. Od roku 2021 stojí na nejvyšším bodě v pravé části areálu, společně s minizoo. Volnočasový Skalka Family "
  },
  {
    "id": 1299,
    "name": "Stříbrník",
    "slug": "stribrnik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stribrnik/",
    "kraj": ["Louny",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/stribrnik/P1010020.JPG",
    "desc": "Dvanáctimetrová dřevěná nástavba Ejemovo chaty z roku 1911. Kruhový výhled z Frotzelovy vyhlídkové vížky ve výšce 8 metrů (České středohoří, Krušné a Doupovské hory, Louny). Odbočka k chatě vede z hlavní silnice Louny- M"
  },
  {
    "id": 1309,
    "name": "Studenec",
    "slug": "studenec",
    "url": "https://turistickamapa.cz/rozhledna-studenec/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-na-studenci-2021_26_10-131500.jpg",
    "desc": "Sedmnáctimetrová železná věž z roku 1888. Po jizerskohorské Slovance druhá naše nejstarší kovová rozhledna. Dokonalému kruhovému výhledu z otevřené plošiny brání vrcholky listnatých stromů (Lužické a Jizerské hory, Krkon"
  },
  {
    "id": 341,
    "name": "Studený vrch",
    "slug": "studeny-vrch",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-studeny-vrch",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-studeny-vrch/rozhledna-studeny-vrch-77231-v5.jpg",
    "desc": "Osmnáctimetrová sedmiboká, bývalá měřičská kamenná věž z roku 1940. Na začátku nového milénia se začaly na věži dělat nutné úpravy a opravy k vytváření turistického zázemí. Od roku 2005 je věž přístupná turistické veřejn"
  },
  {
    "id": 1722,
    "name": "Suchý vrch",
    "slug": "suchy-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/suchy-vrch/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/suchy-vrch/klepy2011-05.jpg",
    "desc": "Mohutná, dvaatřicetimetrová betonová vodárenská věž z roku 1932, spojená s Kramářovo turistickou chatou. Kruhový výhled z proskleného ochozu (Orlické hory, Králický Sněžník, Jeseníky, v Polsku pak Soví hory). Odbočka k r"
  },
  {
    "id": 17208,
    "name": "Súsedská",
    "slug": "susedska",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/susedska/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://cdn.kudyznudy.cz/files/26/26cd568b-635b-4160-81d6-44e57b4793c5.jpg?v=20250304010751",
    "desc": "Jedenadvacetimetrová tříboká celobetonová rozhledna z&nbsp;roku 2021 s vnějším schodištěm. Trojúhelník, triquetra, jako nedílné spojení tří prvků, má symbolizovat svazek tří obcí Hýsly, Ježov a Žádovice, které se spolupo"
  },
  {
    "id": 17534,
    "name": "Sušice-radnice",
    "slug": "susice-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/susice-radnice/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/susice-radnice/DSCF6070.JPG",
    "desc": "Renesanční radnice stojí uprostřed obdélníkového náměstí Svobody. Vznikla jako velkolepý palác po požáru v&nbsp;roce 1592 i když dokončena byla až v&nbsp;roce 1619. O necelých sto let později v&nbsp;roce 1707 ji poničil "
  },
  {
    "id": 3924,
    "name": "Svákov",
    "slug": "svakov",
    "url": "https://turistickamapa.cz/rozhledna-svakov/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/1-Rozhledna.jpg/960px-1-Rozhledna.jpg",
    "desc": "Čtrnáctimetrová dřevěná rozhledna z&nbsp;roku 2014. Půlkruhový výhled ze zastřešeného ochozu ve výšce 10 metrů je pouze východním směrem (Soběslav, údolí Lužnice, hrad Choustník). K&nbsp;rozhledně vedou 3 přístupové cest"
  },
  {
    "id": 304,
    "name": "Svatobor",
    "slug": "svatobor",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/svatobor/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/svatobor/P1010031.JPG",
    "desc": "Původní rozhledna s turistickou útulnou stávala na vrcholu hory od roku 1900. Po několika letech provozu se však věž vinou nesourodého podloží začala naklánět k severovýchodu. Když vychýlení dosáhlo více než 1 metr a ve "
  },
  {
    "id": 1784,
    "name": "Svatý Kopeček",
    "slug": "svaty-kopecek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/svaty-kopecek/",
    "kraj": ["Olomouc",
      "Olomoucký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/svaty-kopecek/P1330677bb.JPG",
    "desc": "Dvaatřicetimetrová tříboká ocelová věž z roku 1975. Kruhový výhled z krytého ochozu ve výšce 27 metrů. (Olomouc, Haná, Nízký Jeseník, Oderské a Hostýnské vrchy, Chřiby). Rozhledna se nachází uprostřed areálu zoologické z"
  },
  {
    "id": 1314,
    "name": "Svatý vrch",
    "slug": "svaty-vrch",
    "url": "https://turistickamapa.cz/rozhledna-svaty-vrch/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-svaty-vrch-2023_30_7-102009.jpg",
    "desc": "Původně osmiboký gloriet z přelomu 19. a 20. století, dostavěný v roce 2003 do podoby patnáctimetrové rozhledny. Kruhový výhled z kryté plošiny ve výšce 9 metrů. (Krušné hory s Klínovcem, Doupovské hory, Kadaň, elektrárn"
  },
  {
    "id": 16571,
    "name": "Světlý vrch",
    "slug": "svetly-vrch",
    "url": "https://turistickamapa.cz/rozhledna-svetly-vrch/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2024/rozhledna-svetly-vrch-2024_16_1-171817.jpg",
    "desc": "Dvaadvacetimetrová dřevěná rozhledna s&nbsp;kovovým točitým schodištěm stojí od konce roku 2020 na stejnojmenném kopci severovýchodně od Albrechtic. Otevřena byla na Nový rok 2021 a z&nbsp;otevřené vyhlídkové plošiny ve "
  },
  {
    "id": 10712,
    "name": "Svojanov",
    "slug": "svojanov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/svojanov/",
    "kraj": ["Pardubický kraj",
      "Svitavy"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/svojanov/DSCF9926.JPG",
    "desc": "Gotický hrad z&nbsp;poloviny 13. století byl vystavěn k&nbsp;ochraně zemské obchodní stezky mezi Brnem a Litomyšlí na vysokém skalním ostrohu nad říčkou Křetínkou. Po požáru v&nbsp;roce 1842 byl empírově přestavěn, takže"
  },
  {
    "id": 266,
    "name": "Sylvánský vrch",
    "slug": "sylvansky-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sylvansky-vrch/",
    "kraj": ["Plzeň - město",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/sylvansky-vrch/DSCF1748.JPG",
    "desc": "68 metrů vysoká ocelová telekomunikační věž z roku 2001. Kruhový výhled z vyhlídkového ochozu ve výšce 23 metrů (Plzeň, Šumava, Český les, Radyně, Krkavec, Chlum). K rozhledně se lze dostat třemi způsoby. Buď vyšlapat pr"
  },
  {
    "id": 1941,
    "name": "Šance",
    "slug": "sance",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sance/",
    "kraj": ["Moravskoslezský kraj",
      "Opava"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/moravskoslezsky-kraj/sance/IMG_0420.jpg",
    "desc": "Patnáctimetrová dřevěná rozhledna z roku 2005, stojící na čtyřech kamenných pilířích. Kruhový výhled ze zastřešené plošiny ve výšce 13 metrů (Beskydy, Jeseníky, Opava, Ostrava). Přístupová cesta k rozhledně odbočuje z hl"
  },
  {
    "id": 831,
    "name": "Šelmberk",
    "slug": "selmberk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/selmberk/",
    "kraj": ["Jihočeský kraj",
      "Tábor"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihocesky-kraj/selmberk/DSCF2257.JPG",
    "desc": "Kamenná válcová věž hradu ze 14. století, která byla ve dvacátých letech 19. století upravena Leopoldem z&nbsp;Kuenburgu v&nbsp;romantizujícím slohu na rozhlednu a okolí upraveno na anglický park. Součástí hradu je Histo"
  },
  {
    "id": 14255,
    "name": "Šibenice",
    "slug": "sibenice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sibenice/",
    "kraj": ["Moravskoslezský kraj",
      "Opava"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/sibenice/DSCF3419.JPG",
    "desc": "Celobetonová třináctimetrová rozhledna z roku 2019 se nachází v ose velice hustého uskupení vojenských bunkrů a pěchotních srubů, táhnoucí se v padesátikilometrovém pásmu od Opavy až k Vrbnu pod Pradědem v Jeseníkách. Kr"
  },
  {
    "id": 260,
    "name": "Šibeniční vrch",
    "slug": "sibenicni-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sibenicni-vrch/",
    "kraj": ["Plzeňský kraj",
      "Tachov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/sibenicni-vrch/dscf0091.jpg",
    "desc": "Jednadvacetimetrová zděná věž z bílých cihel z roku 1909. Kruhový výhled ze zastřešené plošiny ve výšce 18 metrů (Český les s Dylení a Přimdou, Slavkovský les, Mariánské Lázně, Planá). Bohušuv vrch se zvedá na východním "
  },
  {
    "id": 233,
    "name": "Šibeniční vrch",
    "slug": "sibenicni-vrch-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sibenicni-vrch-2/",
    "kraj": ["Domažlice",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/sibenicni-vrch-2/foto%20%282%29.jpg",
    "desc": "Jednadvacetimetrová trámová rozhledna z&nbsp;roku 2010 v&nbsp;jednom z rohů ozdobená dřevěným křížem. Kruhový výhled z&nbsp; kryté vyhlídkové plošiny ve výšce třinácti metrů (nádherné panoráma Českého lesa od Přimdy, pře"
  },
  {
    "id": 16418,
    "name": "Šibeník u Nového Hrádku",
    "slug": "sibenik-u-n-hradku",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sibenik-u-n-hradku/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/sibenik-u-noveho-hradku/DSCF5770.JPG",
    "desc": "Sedmačtyřicetimetrová ocelová rozhledna s vnějším točitým schodištěm vznikla v roce 2020 přestavbou bývalé větrné elektrárny. Provozní budova v sousedství věže byla přeměněna v příjemné turistické informační centrum s vn"
  },
  {
    "id": 14756,
    "name": "Šibeník v Mostě",
    "slug": "sibenik-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sibenik-2/",
    "kraj": ["Most",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/sibenik-1/DSCF3932.JPG",
    "desc": "Pětadvacetimetrová dřevěná věž s kovovými spojovacími prvky a točitým schodištěm z roku 2019. V anketě pořádané Klubem přátel rozhleden o rozhlednu roku 2019 obsadila 2. místo. Nádherný kruhový výhled z&nbsp;otevřeného o"
  },
  {
    "id": 1617,
    "name": "Šibeník v Trutnově",
    "slug": "sibenik",
    "url": "https://turistickamapa.cz/rozhledna-sibenik/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-sibenik-2021_4_8-163326.jpg",
    "desc": "Sedmnáctimetrový Gablenzův památník ve formě litinového obelisku z roku 1868. Výhled z vrcholu dutého obelisku je pouze severovýchodním směrem (Krkonoše, Trutnov). K památníku, stojícímu na jižním okraji Trutnova, vede z"
  },
  {
    "id": 3715,
    "name": "Šiklův mlýn",
    "slug": "sikluv-mlyn",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sikluv-mlyn/",
    "kraj": ["Vysočina",
      "Žďár nad Sázavou"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/sikluv-mlyn/sikluv-m.jpg",
    "desc": "Třináctimetrová dřevěná rozhledna z&nbsp;roku 2012, stojící v&nbsp;zábavním westernovém areálu Šiklův mlýn. Výhled ze zastřešené plošiny ve výšce 10 metrů je omezen pouze na areál zábavního parku, na severním obzoru lze "
  },
  {
    "id": 17513,
    "name": "Šiška",
    "slug": "siska",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/siska/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/siska/DSCF7146.JPG",
    "desc": "Téměř dvanáctimetrová kovová stavba vznikla stejně, jako podobná díla architekta Čestmíra Sušky, ze staré vyřazené cisterny ornamentálním vyřezáním pláště a dosazením kovového točitého schodiště. Výhled z&nbsp;bývalého n"
  },
  {
    "id": 3819,
    "name": "Špičák",
    "slug": "spicak-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/spicak-2/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/spicak-2/dscf2352.jpg",
    "desc": "Sedmaadvacetimetrová štíhlá ocelová věž z roku 2014, která díky dřevěnému opláštění velmi dobře zapadá do okolní krajiny. Nádherný kruhový výhled z&nbsp;kryté vyhlídkové plošiny ve výšce 24 metrů a nebo ze čtyř nižších a"
  },
  {
    "id": 1092,
    "name": "Špičák",
    "slug": "spicak",
    "url": "https://turistickamapa.cz/rozhledna-spicak/",
    "kraj": ["Česká Lípa",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-spicak-2020_10_7-110950.jpg",
    "desc": "Čtrnáctimetrová cihlová věž z roku 1885 se doslova ztrácí v množství různých telekomunikačních antén. Kruhový výhled z otevřeného ochozu (Lužické hory, České středohoří, Bezděz, Česká Lípa). Odbočka ke věži se nachází na"
  },
  {
    "id": 16557,
    "name": "Špička",
    "slug": "spicka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/spicka/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/spicka/DSCF5941.JPG",
    "desc": "Sedmimetrová kovová rozhledna ve tvaru závodního bobu stojí od konce roku 2020 na vrcholovém skalisku Malého Špičáku na třech kovových stojinách, jen pár metrů od začátku někdejší tanvaldské bobové dráhy. Nejvýraznějším "
  },
  {
    "id": 11293,
    "name": "Špilberk",
    "slug": "spilberk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/spilberk/",
    "kraj": ["Brno - město",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/spilberk/DSCF0791.JPG",
    "desc": "Původně gotický hrad z&nbsp;druhé poloviny 13. století byl v&nbsp;polovině 17. století postupně přestavěn na mohutnou barokní pevnost, která byla několikrát bez úspěchu dobývána. Na rozdíl od ostatních hradů jeho devětad"
  },
  {
    "id": 3762,
    "name": "Špulka",
    "slug": "spulka",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-spulka",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-spulka/rozhledna-spulka-564-v5.jpg",
    "desc": "Zcela obyčejný osmatřicetimetrový ocelový tubus s vnějším vinutým schodištěm z roku 2014, který však díky vertikálnímu opláštění smrkovými a modřínovými trámy získal velice atraktivní vzhled. V anketě pořádané Klubem přá"
  },
  {
    "id": 1887,
    "name": "Šrotík",
    "slug": "srotik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/srotik/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/srotik/DSCF2333.JPG",
    "desc": "Dokonalá replika sedmadvacetimetrového železného majáku z roku 2008. Kruhový výhled z otevřeného ochozu (Uherské Hradiště, Chřiby s Buchlovem a Brdem, Bílé Karpaty s Velkou Javořinou a Velkým Lopeníkem, Hostýnské vrchy)."
  },
  {
    "id": 14371,
    "name": "Šťastná věž",
    "slug": "stastna-vez",
    "url": "https://turistickamapa.cz/rozhledna-stastna-vez/",
    "kraj": ["Plzeň - jih",
      "Plzeňský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-stastna-vez-2023_17_5-151028.jpg",
    "desc": "Původní zděné silo na piliny ztratilo po zániku nábytkářské firmy svůj účel a v roce 2019 bylo pomocí čtyř rohových dřevných stojin navýšeno téměř o dvojnásobek na 22 metrů. Rozhledna s přízemní hospodou a venkovním pose"
  },
  {
    "id": 1101,
    "name": "Štěpánka",
    "slug": "stepanka",
    "url": "https://turistickamapa.cz/rozhledna-stepanka/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-stepanka-2020_16_6-121454.jpg",
    "desc": "Čtyřiadvacetimetrová osmiboká cihlová věž na kamenné podstavě. Základy postaveny v roce 1847, ale dokončena byla až v roce 1892. Kruhový výhled ze zastřešené dřevěné nástavby (Krkonoše, Jizerské hory, Kozákov, Ještěd, Be"
  },
  {
    "id": 1943,
    "name": "Štramberská Trúba",
    "slug": "stramberska-truba",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stramberska-truba/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Stramberk-2.jpg/960px-Stramberk-2.jpg",
    "desc": "Kamenná strážní věž bývalého hradu ze 13. století, rekonstruovaná v roce 1903 do podoby pětatřicetimetrové rozhledny. Kruhový výhled z krytého dřevěného ochozu ve výšce 17 metrů nebo z okének nad ochozem (Štramberk, Bílá"
  },
  {
    "id": 4089,
    "name": "Štrykovaná",
    "slug": "strykovana",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/strykovana/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/strykovana/dscf3978.jpg",
    "desc": "Sedmimetrová pětitunová ocelová rozhledna z&nbsp;vyřazené ocelové nádrže z&nbsp;dílny sochaře Čestmíra Sušky. Tato rozhledna byla součástí výstavy Restart v prostorách bývalé vozovny dopravního podniku města Plzně, nazva"
  },
  {
    "id": 14230,
    "name": "Štvanice",
    "slug": "stvanice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/stvanice/",
    "kraj": ["Olomoucký kraj",
      "Šumperk"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/stvanice/DSCF3324.JPG",
    "desc": "Jedenatřicetimetrová dřevěná rozhledna z&nbsp;roku 2018 s točitým schodištěm je k&nbsp;zemi upevněna několika svazky ocelových lan. Kruhový výhled z prosklené plošiny ve výšce 28 metrů (západní část Jeseníků se Šerákem, "
  },
  {
    "id": 17553,
    "name": "Šumperk-radnice",
    "slug": "sumperk-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/sumperk-radnice/",
    "kraj": ["Olomoucký kraj",
      "Šumperk"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/sumperk-radnice/DSCF5420.JPG",
    "desc": "Původní radnice vystavěná v&nbsp;gotickém slohu stála v&nbsp;Šumperku již v&nbsp;roce 1475, ale po necelých čtyřiceti letech byla zničena požárem. V&nbsp;roce 1562 ji nahradila renesanční budova, kterou v&nbsp;roce 1669 "
  },
  {
    "id": 12350,
    "name": "Švamberk",
    "slug": "svamberk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/svamberk/",
    "kraj": ["Plzeňský kraj",
      "Tachov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/svamberk/DSCF1599.JPG",
    "desc": "Gotický hrad z&nbsp;poloviny 13. století se rozkládá na vrchu Krasíkov západně od Konstantinových Lázní. Po požáru a následných bojích v&nbsp;roce 1647 již nikdy nebyl opraven a chátrá. V&nbsp;roce 2012 byla na zbytku ku"
  },
  {
    "id": 9534,
    "name": "Švihov",
    "slug": "svihov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/svihov/",
    "kraj": ["Klatovy",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/svihov/DSCF8378.JPG",
    "desc": "Gotický vodní hrad ze 14. století je postaven na jižním okraji stejnojmenného městečka, ležícího na hlavní silnici z&nbsp;Plzně do Klatov. Hrad je chráněn vodním příkopem, dnes již částečně zasypaným. Uprostřed komplexu "
  },
  {
    "id": 1104,
    "name": "Tichánkova/Táborská rozhledna",
    "slug": "tabor",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/tabor/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/tabor/074-tabor.jpg",
    "desc": "Mohutná pětatřicetimetrová cihlová Tichánkova věž z roku 1911. Nádherný kruhový výhled z otevřeného ochozu ve výšce 26 metrů (Krkonoše, Jizerské a Orlické hory, Český ráj a České středohoří, Říp, Ještěd, Kunětická hora, Bezděz). Doporučuji spojit s návštěvou Allainovy rozhledny, necelé 2 km po modré turistické stezce."
  },
  {
    "id": 1318,
    "name": "Tanečnice",
    "slug": "tanecnice",
    "url": "https://turistickamapa.cz/rozhledna-tanecnice/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-tanecnice-2020_16_6-142006.jpg",
    "desc": "Masivní šestadvacetimetrová cihlová osmiboká věž na žulové podezdívce z roku 1905, zpevněná vnějšími ocelovými pásy &#8211; naše nejsevernější rozhledna. Kruhový výhled ze zastřešené terasy ve výšce 22 metrů (Labské písk"
  },
  {
    "id": 1107,
    "name": "Tanvaldský Špičák",
    "slug": "tanvaldsky-spicak",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/tanvaldsky-spicak/",
    "kraj": ["Jablonec nad Nisou",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/tanvaldsky-spicak/P1010050.JPG",
    "desc": "Původně osamocená osmnáctimetrová kamenná věž z roku 1909, postupně obestavěná horským hotelem a množstvím antén a parabol. Kruhový výhled z otevřeného ochozu ve výšce 14 metrů (Krkonoše, Jizerské hory, Kozákov, Ještěd, "
  },
  {
    "id": 12123,
    "name": "Těchanovická vyhlídka",
    "slug": "stare-techanovice",
    "url": "https://turistickamapa.cz/rozhledna-stare-techanovice/",
    "kraj": ["Moravskoslezský kraj",
      "Opava"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-stare-techanovice-2021_27_3-174558.jpg",
    "desc": "Dvanáctimetrová třípodlažní dřevěná rozhledna se od roku 2017 tyčí nad obcí Staré Těchanovice východně od Kružberské přehradní nádrže. Výhled ze zastřešené plošiny ve výšce 9 metrů omezuje jižním směrem hřeben vyššího ko"
  },
  {
    "id": 1726,
    "name": "Terezka",
    "slug": "terezka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/terezka/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/terezka/P1010025.JPG",
    "desc": "Sedmadvacetimetrová dřevěná rozhledna, vyztužená ocelovými prvky z roku 2004. Kruhový výhled z hlavní vyhlídkové plošiny ve výšce 25 metrů. (Toulovcovy Maštale, Orlické a Železné hory, Českomoravská vrchovina, Krkonoše, "
  },
  {
    "id": 2809,
    "name": "Tetřev",
    "slug": "tetrev",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/tetrev/",
    "kraj": ["Frýdek - Místek",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/moravskoslezsky-kraj/tetrev/DSCF2458.JPG",
    "desc": "Zděná desetimetrová rozhledna z roku 2011. Výhled z kryté místnosti ve výšce 7 metrů je možný převážně jihovýchodním směrem (nedaleká chata Severka, část východních Beskyd a slovenské Kysuce, v dálce pak Roháče a Malá Fa"
  },
  {
    "id": 11919,
    "name": "Tichá",
    "slug": "ticha",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ticha/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/ticha/DSCF1304.JPG",
    "desc": "Tvrz Tichá byla založena již koncem 13. století. Původně měla 2 věže, z&nbsp;nichž se do dnešních dnů zachovala pouze hranolová třináctimetrová stavba. Vstupovalo se do ní portálem v&nbsp;prvním patře. Koncem 18. století"
  },
  {
    "id": 17094,
    "name": "Tichá II",
    "slug": "ticha-ii",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/ticha-ii/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/ticha-ii/DSCF6601.JPG",
    "desc": "Tvrz Tichá byla založena již koncem 13. století. Původně měla 2 věže, z&nbsp;nichž se do dnešních dnů zachovala pouze větší hranolová stavba, která byla v&nbsp;roce 2022 navýšena dřevěným středověkým patrem do výšky 28 m"
  },
  {
    "id": 763,
    "name": "Tisovský vrch",
    "slug": "tisovsky-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/tisovsky-vrch/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/tisovsky-vrch/2013-06-18-pajndl-na-tisovskem-vrchu-u-nejdku-rozhledna-03.jpg",
    "desc": "Čtyřiadvacetimetrová věž z mohutných žulových kvádrů z roku 1897. Kruhový výhled z otevřeného ochozu ve výšce 18 metrů opatřeného masivním litinovým zábradlím (Krušné hory s Klínovcem, Plešivcem a Fichtelbergem, Doupovsk"
  },
  {
    "id": 344,
    "name": "Tobiášův vrch",
    "slug": "tobiasuv-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/tobiasuv-vrch/",
    "kraj": ["Rakovník",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/tobiasuv-vrch/Tobiasuv%20vrch%20%282%29.jpg",
    "desc": "Osmačtyřicetimetrová ocelová telekomunikační věž z roku 1999. Otevřená plošina ve výšce 25 metrů nabízí krásné výhledy na České středohoří, Krušné a Doupovské hory, pohoří Džbán, elektrárny Prunéřov, Tušimice a Počerady,"
  },
  {
    "id": 13085,
    "name": "Tovačov",
    "slug": "tovacov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/tovacov/",
    "kraj": ["Olomoucký kraj",
      "Přerov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/tovacov/DSCF2342.JPG",
    "desc": "Původní gotická vodní tvrz byla založena ve 14. století v bažinatém terénu na východním okraji města. V 16. století doznal objekt největší změny na novorenesanční pevnost, ale v následujícím století byl dobyt a vydrancov"
  },
  {
    "id": 2017,
    "name": "Travičná",
    "slug": "travicna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/travicna/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/travicna/DSCN9046.JPG",
    "desc": "Třiapadesátimetrová ocelová telekomunikační věž z roku 2001. Kruhový výhled z otevřené plošiny chráněné dřevěným bedněním ve výšce 31 metrů. (Bílé Karpaty, Chřiby, Ždánický les, Hostýnské a Vizovické vrchy, Pálava). Odbo"
  },
  {
    "id": 1110,
    "name": "Trosky",
    "slug": "trosky",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/trosky/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.cesky-raj.info/sites/default/files/images/2024-08/Trosky%20uprava%202.jpg",
    "desc": "Nezaměnitelná silueta hradu Trosky, postaveného na konci 14. století, se zdvíhá z&nbsp;mírně zvlněné roviny východně od Českého ráje. Hradu dominují dvě věže. Vyšší východnější Panna s&nbsp;relativní výškou 57 metrů je v"
  },
  {
    "id": 765,
    "name": "Třasák",
    "slug": "trasak",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/trasak/",
    "kraj": ["Karlovarský kraj",
      "Karlovy Vary"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/trasak/trasak1.jpg",
    "desc": "Třináctimetrová třípodlažní dřevěná soukromá rozhledna postavená na kamenné podezdívce. Kruhový výhled ze zastřešeného ochozu ve výšce 10 metrů (Třebouňský vrch, Útvina a blízké okolí). Osobně se domnívám, že tak hezká r"
  },
  {
    "id": 17061,
    "name": "Třeboň-Stará radnice",
    "slug": "trebon-stara-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/trebon-stara-radnice/",
    "kraj": ["Jihočeský kraj",
      "Jindřichův Hradec"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/trebon-stara-radnice/DSCF6494.JPG",
    "desc": "Stará radnice byla postavena v&nbsp;roce 1566 na místě dvou vyhořelých domů. K&nbsp;ní pak byla v&nbsp;roce 1638 přistavěna čtyřboká masivní 31 metrová věž. V&nbsp;roce 1742 bylo průčelí vyzdobeno freskami s&nbsp;městský"
  },
  {
    "id": 347,
    "name": "Třemšín",
    "slug": "tremsin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/tremsin/",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/tremsin/DSCF1259.JPG",
    "desc": "Dvanáctimetrová dřevěná trámová věž ze sedmdesátých let 20. století, která původně sloužila armádě. Z otevřeného ochozu ve výšce 9 metrů není pro vysoké listnaté stromy v létě téměř žádný výhled, v zimních měsících po op"
  },
  {
    "id": 349,
    "name": "Třenická hora",
    "slug": "trenicka-hora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/trenicka-hora/",
    "kraj": ["Beroun",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/trenicka-hora/P1010001.JPG",
    "desc": "Třicetimetrová ocelová telekomunikační věž z roku 2007 s obvodovým schodištěm vně půdorysu rozhledny. Kruhovému výhledu z otevřené plošiny ve výšce 20 metrů brání severozápadním směrem vrchol Třenické hory (Hořovice, Cer"
  },
  {
    "id": 26416,
    "name": "Turnov-radnice",
    "slug": "turnov-radnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/turnov-radnice/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/turnov-radnice/DSCF9411.JPG",
    "desc": "Renesanční radnice&nbsp;z roku&nbsp;1526&nbsp;tvoří&nbsp;dominantu&nbsp;jižní strany&nbsp;náměstí Českého ráje. V polovině&nbsp;17. století byla&nbsp;přestavěna v pozdně renesančním slohu. Ani Turnovu se nevyhnuly ničivé"
  },
  {
    "id": 10105,
    "name": "Týnec nad Sázavou",
    "slug": "tynec-nad-sazavou",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/tynec-nad-sazavou/",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/tynec-nad-sazavou/DSCF9226.JPG",
    "desc": "Kamenná dvacetimetrová gotická věž s&nbsp;románskou rotundou z&nbsp;první poloviny 13. století se vypíná na návrší na levém břehu Sázavy v&nbsp;jižní části města. Kruhový výhled ze čtyř malých okének v&nbsp;podkroví věže"
  },
  {
    "id": 1113,
    "name": "U borovice",
    "slug": "u-borovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-borovice/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/u-borovice/DSCF1161.JPG",
    "desc": "Osmnáctimetrová kamenná věž z roku 2009. Na stavbu byly použity kvádry z bývalé řeznické ledárny ve Starých Hamrech. Nádherný kruhový výhled ze zastřešeného ochozu ve výšce 13 metrů (panorama Krkonoš, Orlické hory, Ještě"
  },
  {
    "id": 3846,
    "name": "U Holáňů",
    "slug": "u-holanu",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-holanu/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/u-holanu/dscf2522.jpg",
    "desc": "Čtrnáctimetrová dřevěná věž z&nbsp;roku 2013 je součástí hostince U Holáňů. Výhled ze zastřešené vyhlídkové plošiny ve výšce 12 metrů je omezen pouze jihovýchodním směrem na Vsetín, Vsetínské vrchy a Javorníky. Obec Pržn"
  },
  {
    "id": 3258,
    "name": "U Jakuba",
    "slug": "u-jakuba",
    "url": "https://turistickamapa.cz/rozhledna-u-jakuba/",
    "kraj": ["Jihočeský kraj",
      "Jindřichův Hradec"],
    "photo": "https://turistickamapa.cz/data_fotos/2019_8-10-164323-tmp.jpg",
    "desc": "Mohutná pětačtyřicetimetrová dřevěná věž s&nbsp;ocelovými spojovacími a nosnými prvky z&nbsp;roku 2013 postavená na mohutné betonové podstavě, kde se nachází celé zázemí rozhledny. Kruhový výhled ze zastřešené plošiny ve"
  },
  {
    "id": 2898,
    "name": "U křížku",
    "slug": "u-krizku-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-krizku-2/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/u-krizku-2/DSCF2703.JPG",
    "desc": "Jedenáctimetrová dřevěná rozhledna z&nbsp;roku 2012 s&nbsp;železným točitým schodištěm. Kruhový výhled z&nbsp;otevřeného ochozu ve výšce 10 metrů (Pálava, horní Novomlýnská nádrž, zámek Drnholec, Hrušovany, Rakousko). Ob"
  },
  {
    "id": 2884,
    "name": "U křížku",
    "slug": "u-krizku",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-u-krizku",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://cdn.kudyznudy.cz/files/e9/e9d42369-c2ee-4bdb-bbc7-5d3e02501acc.jpg?v=20250304071509",
    "desc": "Třináctimetrová dřevěná rozhledna z&nbsp;roku 2011, postavená společně s&nbsp;dalšími pěti rozhlednami na uherskobrodsku podle stejných plánů. Dokonalému výhledu ze zastřešené plošiny ve výšce 10 metrů brání severozápadn"
  },
  {
    "id": 17193,
    "name": "U Lidušky",
    "slug": "u-lidusky",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-lidusky/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/u-lidusky/U-Lidusky-01-js.JPG",
    "desc": "Třicetimetrová kovová rozhledna se tyčí od roku 2021 na vrcholu plochého kopce jižně od města Bílovice nad Svitavou. Svojí konstrukcí a rozměry je velmi podobná rozhledně Feistův kopec v&nbsp;Orlických horách a rozhledně"
  },
  {
    "id": 15879,
    "name": "U Marešů",
    "slug": "u-maresu",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-maresu/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/u-maresu/DSCF5360.JPG",
    "desc": "Téměř třináctimetrová zděná vyhlídková věž je součástí stejnojmenné restaurace. Dokončena byla v&nbsp;roce 2020. Vzhledem k&nbsp;tomu, že rozhledna je postavena na kraji lesa, výhled ze zastřešené místnosti ve výšce 9 me"
  },
  {
    "id": 2021,
    "name": "U Obrázku",
    "slug": "u-obrazku",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-obrazku/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/u-obrazku/DSCF2730.JPG",
    "desc": "Sedmimetrová dřevěná rozhledna z roku 2007. Kruhovému výhledu ze zastřešené plošiny ve výšce 3 metry brání severním směrem oblý kopec s vinicemi (Bílé Karpaty s Velkou Javořinou, Pavlovské vrchy, Minaret v Lednici, Valti"
  },
  {
    "id": 15885,
    "name": "U Obrázku II",
    "slug": "u-obrazku-ii",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-obrazku-ii/",
    "kraj": ["Břeclav",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/u-obrazku-ii/20201208_112114.jpg",
    "desc": "Svoji o něco jednodušší předchůdkyni z let 2007–2019 nahradila v závěru roku 2020 nová osmimetrová dřevěná rozhledna s točitým kovovým schodištěm. K ní navíc přibyl i jednoduchý přístřešek s&nbsp;posezením. Kruhovému výh"
  },
  {
    "id": 767,
    "name": "U Strejců",
    "slug": "u-strejcu",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-strejcu/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/u-strejcu/U-Strejcu-P4.JPG",
    "desc": "Mohutná dvaadvacetimetrová trámová věž z roku 2005. Kruhový výhled z částečně zastřešeného ochozu (Slavkovský les, Dyleň v Českém lese, Zelená hora, Kapellenberg, Luby s golfovým areálem, částečně i začátek západních Kru"
  },
  {
    "id": 3986,
    "name": "U Tetřeví chaty",
    "slug": "u-tetrevi-chaty",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-u-tetrevi-chaty",
    "kraj": ["Olomoucký kraj",
      "Šumperk"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rozhledna_Tet%C5%99ev.jpg/960px-Rozhledna_Tet%C5%99ev.jpg",
    "desc": "Osmnáctimetrová ocelová stavba z&nbsp;roku 2014, která je zvenčí celá opláštěná svislými dřevěnými prkny. Kruhovému výhledu ze zastřešené plošiny ve výšce 15 metrů brání jižním směrem vrchol vyššího Kamence. Přesto je z&"
  },
  {
    "id": 2889,
    "name": "U Trojice",
    "slug": "u-trojice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-trojice/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.regiontourist.cz/uploads/what_to_do/1381/rozhledna-u-trojice-nivnice1206.jpg",
    "desc": "Třináctimetrová dřevěná rozhledna z&nbsp;roku 2011, postavená společně s&nbsp;dalšími pěti rozhlednami na uherskobrodsku podle stejných plánů. Kruhový výhled ze zastřešené plošiny ve výšce 10 metrů trochu znepříjemňují k"
  },
  {
    "id": 14557,
    "name": "U Zámečku",
    "slug": "u-zamecku",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/u-zamecku/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/u-zamecku/DSCF3705.JPG",
    "desc": "Sedmimetrová stavba z roku 2019 ve tvaru rotačního hyperboloidu s vnitřním železným točitým schodištěm je tvořena čtyřiceti téměř dvanáctimetrovými dřevěnými kůly zasazenými do betonového základu. Jedná se o naši nejníže"
  },
  {
    "id": 4494,
    "name": "Uherčice",
    "slug": "uhercice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/uhercice/",
    "kraj": ["Jihomoravský kraj",
      "Znojmo"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/uhercice/1000.jpg",
    "desc": "Desetimetrová kamenná rozhledna postavená v zámeckém parku kolem roku 1801 záměrně jako umělá hradní zřícenina. Jedná se druhou nejstarší rozhlednu na našem území. V roce 2022 bylo chybějící schodiště nahrazeno novým, vč"
  },
  {
    "id": 13121,
    "name": "Uherský Ostroh",
    "slug": "uhersky-ostroh",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/uhersky-ostroh/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/uhersky-ostroh/DSCF2383.JPG",
    "desc": "Gotický hrad z druhé poloviny 13. století byl v&nbsp;16. století přestavěn na renesanční zámek. Pro malý vnitřní prostor však byly nové budovy přistavovány z&nbsp;vnější strany. V&nbsp;současné době v&nbsp;prostorách zám"
  },
  {
    "id": 1116,
    "name": "V Popelkách",
    "slug": "v-popelkach-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/v-popelkach-2/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/liberecky-kraj/v-popelkach/DSCF1173.JPG",
    "desc": "Atypická devětadvacetimetrová ocelová rozhledna z roku 2007 ve tvaru kalicha, která je součástí skokanského můstku K 70. Nádherný výhled z otevřeného ochozu ve výšce 28 metrů (panorama Krkonoš, Jizerské, Lužické a Orlick"
  },
  {
    "id": 3855,
    "name": "Vachatovo rozhledna",
    "slug": "vachatovo-rozhledna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vachatovo-rozhledna/",
    "kraj": ["Domažlice",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vachatovo-rozhledna/dscf2463.jpg",
    "desc": "Jednoduchá sedmimetrová původně dřevěná konstrukce z roku 2012. Výhled z otevřené plošiny ve výšce 5 metrů je kvůli vysokým stromům vymezen pouze jižním směrem (panorama západní Šumavy se známým dvojvrcholkem Ostrého a p"
  },
  {
    "id": 1728,
    "name": "Val",
    "slug": "val",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/val/",
    "kraj": ["Pardubický kraj",
      "Ústí nad Orlicí"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/val/788.jpg",
    "desc": "Čtyřiatřicetimetrová ocelová telekomunikační věž z roku 2003. Nádherný kruhový výhled z otevřeného ochozu ve výšce 22 metrů (Orlické hory &#8211; Suchý vrch, Buková hora, Králický Sněžník, Klepý, Stezka v oblacích, Hrubý"
  },
  {
    "id": 1322,
    "name": "Varhošť",
    "slug": "varhost",
    "url": "https://turistickamapa.cz/rozhledna-varhost/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-varhost-2020_10_8-204955.jpg",
    "desc": "Patnáctimetrová třípatrová ocelová věž z roku 1973 postavená na původní kamenné podezdívce. Kruhový výhled z otevřených ochozů, z nichž nejvyšší se nachází ve výšce 12 metrů. (České středohoří, Říp, Litoměřice, Ústí nad "
  },
  {
    "id": 1620,
    "name": "Varta",
    "slug": "varta",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/varta/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/varta/varta1.jpg",
    "desc": "Padesátimetrový ocelový telekomunikační stožár z roku 2009. Nádherný kruhový výhled z otevřeného ochozu ve výšce 28 metrů (Krkonoše, Orlické hory, mezi nimi pak Stolové hory v Polsku, Česká Skalice s přehradou Rozkoš, Do"
  },
  {
    "id": 1889,
    "name": "Vartovna",
    "slug": "vartovna",
    "url": "https://turistickamapa.cz/rozhledna-vartovna/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-vartovna-2023_1_2-171928.jpg",
    "desc": "Impozantní sedmatřicetimetrová ocelová konstrukce na kamenné podstavě z roku 2009 se širokým točitým schodištěm. Nádherný kruhový výhled ze zastřešené vyhlídkové plošiny ve výšce 35 metrů (Beskydy, Chřiby, Javorníky, Vse"
  },
  {
    "id": 769,
    "name": "Vávrova lávka",
    "slug": "vavrova-lavka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vavrova-lavka/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/karlovarsky-kraj/vavrova-lavka/DSCF2152.JPG",
    "desc": "Desetimetrová ocelová, dřevem opláštěná hranolová stavba z roku 2006, která pomocí dvou napínacích závěsů drží pětačtyřicetimetrovou lávku přes řeku Ohři v Chebu. Výhled z otevřené plošiny je omezen pouze severovýchodním"
  },
  {
    "id": 1891,
    "name": "Vážany",
    "slug": "vazany",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vazany/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/zlinsky-kraj/vazany/va-01.jpg",
    "desc": "Osmimetrová dřevěná rozhledna z roku 2006&nbsp; s kovovým vřetenovitým schodištěm. Kruhový výhled z krytého ochozu ve výšce 5 metrů (Chřiby s hradem Buchlovem, Pálava, Bílé Karpaty, Hostýnské vrchy, Veselí nad Moravou). "
  },
  {
    "id": 23376,
    "name": "Vážany II",
    "slug": "vazany-ii",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vazany-ii/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vazany-ii/IMG_8365.JPG",
    "desc": "Původní dřevěná osmimetrová rozhledna z roku 2006 byla kvůli špatnému stavu dřevěné konstrukce v roce 2023 uzavřena a v následujícím roce zbourána. Téměř vzápětí pak byla nahrazena velmi podobnou kovovou konstrukcí s vře"
  },
  {
    "id": 382,
    "name": "Velká Buková",
    "slug": "velka-bukova",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-velka-bukova",
    "kraj": ["Rakovník",
      "Středočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-velka-bukova/rozhledna-velka-bukova-43435-v5.jpg",
    "desc": "Patnáctimetrová dřevěná rozhledna s ocelovým schodištěm z roku 2009 postavená na kamenné podezdívce. Kruhový výhled z otevřené plošiny ve výšce 14 metrů (údolí Berounky, obec Křivoklát a okolní husté lesy, v úzkém průzor"
  },
  {
    "id": 1945,
    "name": "Velká Čantoryje",
    "slug": "velka-cantoryje",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/velka-cantoryje/",
    "kraj": ["Frýdek - Místek",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/velka-cantoryje/velka-cantoryje.JPG",
    "desc": "Osmadvacetimetrová ocelová věž stojí od roku 2002 na mohutné kamenné podstavě. Jedinečný panoramatický výhled ze zastřešené plošiny ve výšce 22 metrů (Velký Rozsutec, Stoh a Velký Kriváň v Malé Fatře, Velká Fatra, Vysoké"
  },
  {
    "id": 14916,
    "name": "Velká Deštná",
    "slug": "velka-destna",
    "url": "https://turistickamapa.cz/rozhledna-velka-destna/",
    "kraj": ["Královéhradecký kraj",
      "Rychnov nad Kněžnou"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-velka-destna-2023_4_1-161718.jpg",
    "desc": "Železná, téměř devatenáctimetrová (se stožárem dvaadvacetimetrová) rozhledna z roku 2019 ve tvaru nepravidelného pětiúhelníku je z vnější strany pobita šikmými modřínovými hranoly, symbolizující dešťové kapky ve větru, t"
  },
  {
    "id": 13220,
    "name": "Velké Březno",
    "slug": "velke-brezno",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/velke-brezno/",
    "kraj": ["Ústecký kraj",
      "Ústí nad Labem"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/velke-brezno/DSCF2599.JPG",
    "desc": "Empírový zámek s&nbsp;32 metrů vysokou věží stojí od roku 1845 na pravém břehu Labe na Zámeckém vrchu na okraji stejnojmenné obce. Společně s&nbsp;Hrádkem u Nechanic patří k&nbsp;našim zámeckým „novostavbám“. Na přelomu "
  },
  {
    "id": 353,
    "name": "Velký Blaník",
    "slug": "velky-blanik",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/velky-blanik/",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/velky-blanik/P1010011.JPG",
    "desc": "Dřevěná, šindelem krytá, téměř třicetimetrová věž ve tvaru husitské hlásky z roku 1941. Kruhový výhled ze zastřešené místnosti ve výšce 24 metrů (Vlašim, Šumava, Cukrák, Temelín). K vrcholu vedou dvě cesty. Kratší, ale n"
  },
  {
    "id": 1325,
    "name": "Velký Chlum",
    "slug": "velky-chlum",
    "url": "https://turistickamapa.cz/rozhledna-velky-chlum/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2024/rozhledna-velky-chlum-2024_3_11-113530.jpg",
    "desc": "Devatenáctimetrová rozhledna z betonových tvárnic na kamenné podstavě z roku 1930. Půlkruhový výhled ze zastřešené plošiny ve výšce 16 metrů pouze severozápadním směrem (Děčín, Labské pískovce). Cesta k rozhledně začíná "
  },
  {
    "id": 3330,
    "name": "Velký Javorník",
    "slug": "velky-javornik",
    "url": "https://turistickamapa.cz/rozhledna-velky-javornik/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-velky-javornik-2020_26_12-121848.jpg",
    "desc": "Precizně řemeslně ztvárněná dřevěná šestadvacetimetrová rozhledna z roku 2013. Jedinečný kruhový výhled ze zastřešené plošiny ve výšce 20 metrů (hlavní hřeben Beskyd od Lysé hory, přes Smrk, Kněhyni, Pustevny až po Radho"
  },
  {
    "id": 833,
    "name": "Velký Kamýk",
    "slug": "velky-kamyk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/velky-kamyk/",
    "kraj": ["Jihočeský kraj",
      "Písek"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/velky-kamyk/2013-05-11-velky-kamyk-u-pisku-rozhledna-02.jpg",
    "desc": "Pětapadesátimetrový ocelový tubus z roku 2002, vyztužený čtyřmi hyperbolickými podpěrami. Dokonalému výhledu z 31 metrů vysoké plošiny brání západním směrem vzrostlý les na vrcholu kopce. (Písek s Jarníkem, Kleť, Šumava "
  },
  {
    "id": 3338,
    "name": "Velký Kosíř",
    "slug": "velky-kosir",
    "url": "https://turistickamapa.cz/rozhledna-velky-kosir/",
    "kraj": ["Olomoucký kraj",
      "Prostějov"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-velky-kosir-2020_6_6-135954.jpg",
    "desc": "Originálně řešená osmadvacetimetrová dřevěná rozhledna postavená na masivní kamenné podstavě s vnějším vinutým a zakrytým schodištěm z&nbsp;roku 2013. Nádherný kruhový výhled ze zastřešeného ochozu ve výšce 25 metrů (Olo"
  },
  {
    "id": 1893,
    "name": "Velký Lopeník",
    "slug": "velky-lopenik",
    "url": "https://turistickamapa.cz/rozhledna-velky-lopenik/",
    "kraj": ["Uherské Hradiště",
      "Zlínský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-velky-lopenik-2020_27_6-155831.jpg",
    "desc": "Tato mohutná dvaadvacetimetrová rozhledna z tvrdého dřeva z roku 2006 stojí přímo na česko &#8211; slovenské hranici, takže z jejího vrcholu vlají na každou stranu jiné státní vlajky. Kruhový výhled ze zastřešeného ochoz"
  },
  {
    "id": 1947,
    "name": "Velký Roudný",
    "slug": "velky-roudny",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-velky-roudny",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-velky-roudny/rozhledna-velky-roudny-30374-v5.jpg",
    "desc": "Dvacetimetrová modřínová trámová věž z roku 2007, spočívající na mohutných kamenných stojinách. Dokonalému výhledu z kryté vyhlídkové plošiny ve výšce 17 metrů brání severovýchodním a jihovýchodním směrem vysoké stromy. "
  },
  {
    "id": 235,
    "name": "Velký Zvon",
    "slug": "velky-zvon",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/velky-zvon/",
    "kraj": ["Domažlice",
      "Plzeňský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/plzensky-kraj/velky-zvon/P1010030.JPG",
    "desc": "Mohutná čtyřicetimetrová betonová vojenská věž z roku 1976. Postupně kruhový výhled z 8. patra z jednotlivých oken ubytovacích místností nebo výjimečně z malého ochozu na střeše objektu (Český les – Čechov, Havran, Přimd"
  },
  {
    "id": 3826,
    "name": "Veselov",
    "slug": "veselov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/veselov/",
    "kraj": ["Kladno",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/veselov/dscf2439.jpg",
    "desc": "Jednoduchá dvanáctimetrová jehlanová dřevěná konstrukce z roku 2014. Kruhový výhled z otevřené plošiny ve výšce sedmi metrů (věžáky v Kladně &#8211; Rozdělově, výsypka bývalého dolu Tuchlovice, Družec a Velká Dobrá, rych"
  },
  {
    "id": 14251,
    "name": "Veselská rozhledna",
    "slug": "veselska-rozhledna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/veselska-rozhledna/",
    "kraj": ["Moravskoslezský kraj",
      "Nový Jičín"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/veselska-rozhledna/DSCF3427.JPG",
    "desc": "Celodřevěná masivní čtrnáctimetrová věž z&nbsp;dubového dřeva a ocelovými výztužemi z&nbsp;roku 2019 je postavena na zhruba čtyřmetrovém betonovém soklu, který je obsypán úlomky břidlice do tvaru umělého návrší. Díky tom"
  },
  {
    "id": 356,
    "name": "Veselý vrch",
    "slug": "vesely-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vesely-vrch/",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vesely-vrch/dscf3632.jpg",
    "desc": "Dvaačtyřicetimetrová ocelová telekomunikační věž z roku 1999. Kruhový výhled z otevřené plošiny ve výšce 25 metrů. (Brdy, Slapská přehrada, Žižkovský vysílač, Cukrák, Šumava, Kleť, Drahoušek, Besedná). Na rozhlednu je mo"
  },
  {
    "id": 6448,
    "name": "Vestec",
    "slug": "vestec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vestec/",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vestec/DSCF6987.JPG",
    "desc": "Osmimetrová dřevěná rozhledna z&nbsp;roku 2012 vyztužená ocelovými táhly se nachází jižně od obce Vestec, ležící ve dvou třetinách příkrého stoupání z&nbsp;Chocerad do Vodsliv. Protože vyhlídka je postavena na okraji les"
  },
  {
    "id": 1329,
    "name": "Větruše",
    "slug": "vetruse",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vetruse/",
    "kraj": ["Ústecký kraj",
      "Ústí nad Labem"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/vetruse/P1010008.JPG",
    "desc": "Třicetimetrová zděná věž s honosnou restaurací z roku 1897 . Kruhový výhled z prosklené místnosti ve výšce 22 metrů (Ústí nad Labem, hrad Střekov,&nbsp; Krušné hory, České středohoří). Od hlavního nádraží v Ústí nad Labe"
  },
  {
    "id": 1623,
    "name": "Věž samostatnosti",
    "slug": "vez-samostatnosti",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vez-samostatnosti/",
    "kraj": ["Jičín",
      "Královéhradecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/vez-samostatnosti/P7310047.JPG",
    "desc": "Velkorysá pamětní Síň Československých legií s původně plánovanou čtyticetimetrovou kamennou Masarykovou věží z roku 1924. Pro finanční potíže však byla dostavěna pouze do výšky 20 metrů. Téměř kruhovému výhledu z otevře"
  },
  {
    "id": 16964,
    "name": "Vikletice",
    "slug": "vikletice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vikletice/",
    "kraj": ["Chomutov",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vikletice/DSCF6244.JPG",
    "desc": "Nevyužívaná věž starého hospodářského křídla přiléhajícího k&nbsp;novému penzionu Holiday Centrum byla v&nbsp;roce 2018 navýšena na čtrnáct metrů a zprovozněna jako vyhlídková věž. Z otevřeného ochozu ve výšce téměř 9 me"
  },
  {
    "id": 1786,
    "name": "Vitčice",
    "slug": "vitcice",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-vitcice",
    "kraj": ["Olomoucký kraj",
      "Prostějov"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-vitcice/rozhledna-vitcice-87761-v5.jpg",
    "desc": "Osmimetrová dřevěná trámová věž z roku 2001. Výhled ze dvou vyhlídkových pater, z nichž vyšší se nachází 6 metrů nad zemí je omezen pouze jihozápadním směrem (Haná, Drahanská vrchovina, Chřiby). Přístupová cesta k rozhle"
  },
  {
    "id": 835,
    "name": "Vítkův Hrádek",
    "slug": "vitkuv-hradek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vitkuv-hradek/",
    "kraj": ["Český Krumlov",
      "Jihočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vitkuv-hradek/vitkuv-hradek-foto.jpg",
    "desc": "Devatenáctimetrová hranolová věž nejvýše položeného hradu na našem území z poloviny 13. století. Do roku 1990 hrad ležel v přísně střeženém a nepřístupném pohraničním pásmu. V roce 1998 vzniklo občanské sdružení, které h"
  },
  {
    "id": 1332,
    "name": "Víťova vyhlídka",
    "slug": "vitova-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vitova-vyhlidka/",
    "kraj": ["Litoměřice",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/vitova-vyhlidka/nackovice-1.jpg",
    "desc": "Jedenadvacet metrů vysoká železná osmiboká konstrukce z roku 2004, která je obložena dřevem a je postavena na žulové podezdívce.&nbsp; Kruhový výhled z uzavřené místnosti ve výšce 9 metrů (České středohoří, Krušné, Jizer"
  },
  {
    "id": 12264,
    "name": "Vlašim",
    "slug": "vlasim",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vlasim/",
    "kraj": ["Benešov",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vlasim/DSCF1649.JPG",
    "desc": "Dnešní podoba zámku Vlašim vznikala postupnou přestavbou gotického hradu z&nbsp;počátku 14. století. 32 metrů vysoká věž umožňuje postupně kruhový výhled ze tří oken&nbsp;hodinové místnosti (celé město Vlašim, na severov"
  },
  {
    "id": 1335,
    "name": "Vlčí hora",
    "slug": "vlci-hora-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vlci-hora-2/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/vlci-hora-2/vlci-hora-ii-1.jpg",
    "desc": "Původně dvanáctimetrová čtyřboká cihlová věž pobitá šindelem z roku 1889 je nejstarší rozhlednou ve Šluknovském výběžku. Svůj vzhled změnila v roce 1908, kdy byla zastřešena a navýšena do výšky devatenácti metrů. Kruhový"
  },
  {
    "id": 1338,
    "name": "Vlčí hora",
    "slug": "vlci-hora",
    "url": "https://turistickamapa.cz/rozhledna-vlci-hora/",
    "kraj": ["Teplice",
      "Ústecký kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-vlci-hora-2021_13_12-171021.jpg",
    "desc": "Devětačtyřicetimetrový ocelový monitorovací stožár z roku 2005. Kruhový výhled z otevřeného ochozu ve výšce 16 metrů (hřebeny Krušných hor, České středohoří, Most, Litvínov, Záluží a část Teplic). Samotný výjezd z osady "
  },
  {
    "id": 359,
    "name": "Vlková",
    "slug": "vlkova",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-vlkova-vez-znojmo",
    "kraj": ["Praha - východ",
      "Středočeský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-vlkova-vez-ve-znojme/rozhledna-vlkova-vez-ve-znojme-52228-v5.jpg",
    "desc": "Stylový, nepřístupný lovecký pavilon s patnáctimetrovou dřevěnou věží z roku 1924, postavený na místě bývalého vyhlídkového altánu z 19. století. Výhledu z uzavřené místnosti ve výšce 11 metrů brání vzrostlý les, který j"
  },
  {
    "id": 5245,
    "name": "Vodárna Kolín",
    "slug": "vodarna-kolin",
    "url": "https://turistickamapa.cz/rozhledna-vodarna-kolin/",
    "kraj": ["Kolín",
      "Středočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-vodarna-kolin-2022_12_11-134330.jpg",
    "desc": "Pětačtyřicetimetrový zděný vodojem z let 1928 -1929, který začal sloužit veřejnosti od 7. srpna 1930. &nbsp;Provoz vodárny byl ukončen v roce 1977 a objekt začal pomalu chátrat. V roce 2010 byl věžový vodojem prohlášen k"
  },
  {
    "id": 1345,
    "name": "Vochlice",
    "slug": "vochlice",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-vochlice",
    "kraj": ["Louny",
      "Ústecký kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Rozhledna_Vochlice.JPG/960px-Rozhledna_Vochlice.JPG",
    "desc": "Patnáctimetrová zděná rozhledna z cihel a kamenů z roku 1881, která prochází od roku 2007 rozsáhlou rekonstrukcí za pomoci Sdružení pro záchranu kostela Sv. Jiljí. V roce 2010 byla po náročné opravě otevřena pro širokou "
  },
  {
    "id": 361,
    "name": "Vojna",
    "slug": "vojna",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vojna/",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/vojna/1-2035.jpg",
    "desc": "Šestnáctimetrová betonová věž památníku Vojna z roku 2005. Tábor Vojna byl pojmenován po nedalekém stejnojmenném kopci a fungoval od roku 1947 jako tábor pro německé válečné zajatce. Počínaje rokem 1949 začal sloužil jak"
  },
  {
    "id": 1731,
    "name": "Vojtěchov",
    "slug": "vojtechov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vojtechov/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/vojtechov/Vojtechov.jpg",
    "desc": "Velmi originálně řešená konstrukce rozhledny, kde z kamenobetonové základny vyrůstá ocelová konstrukce se železným točitým schodištěm, dřevěnými podlahami a střechou. Měří téměř 17 metrů a dokončena byla v roce 2010. Kru"
  },
  {
    "id": 16035,
    "name": "Vracov-radnice",
    "slug": "vracov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vracov/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vracov/DSCF4584.JPG",
    "desc": "Jednoposchoďová budova radnice zakončená sedmnáctimetrovou věží s&nbsp;jehlanovou střechou byla postavena v&nbsp;letech 1948-1950 podle návrhu architekta Jiřího Jeřábka. Neodmyslitelnou součástí čelní zdi nad balkonem je"
  },
  {
    "id": 17051,
    "name": "Vranov nad Dyjí",
    "slug": "vranov-nad-dyji",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vranov-nad-dyji/",
    "kraj": ["Jihomoravský kraj",
      "Znojmo"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vranov-nad-dyji/DSCF6415.JPG",
    "desc": "Původně románskogotický hrad podyjské obranné soustavy při jižní hranici je zmiňován již ve 12. století. Čtyřiadvacetimetrová hranolová strážní věž z&nbsp;počátku 14. století bránila jedinému možnému vstupu do předhradí."
  },
  {
    "id": 363,
    "name": "Vrátenská hora",
    "slug": "vratenska-hora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vratenska-hora/",
    "kraj": ["Mělník",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/vratenska-hora/vh-007.jpg",
    "desc": "Tříboká opláštěná 47 metrů vysoká ocelová telekomunikační věž z roku 1999. Kruhový výhled z krytého ochozu ve výšce 25 metrů (Bezděz, Ještěd, Říp, České středohoří, Praha). Na Vrátenskou horu vedou dvě přístupové cesty. "
  },
  {
    "id": 1625,
    "name": "Vrbice",
    "slug": "vrbice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vrbice/",
    "kraj": ["Královéhradecký kraj",
      "Rychnov nad Kněžnou"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/vrbice/IMGP0329.JPG",
    "desc": "Třicetimetrová dřevená rozhledna s ocelovým točitým schodištěm z roku 2005. Nádherný kruhový výhled ze zastřešené plošiny ve výšce 11 a 26 metrů ( Ještěd, Kozákov, Kunětická hora, Krkonoše, Orlické hory, Železné hory, Če"
  },
  {
    "id": 4012,
    "name": "Vrchbělá",
    "slug": "vrchbela",
    "url": "https://turistickamapa.cz/rozhledna-vrchbela/",
    "kraj": ["Mladá Boleslav",
      "Středočeský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2023/rozhledna-areal-vrchbela-2023_28_2-133155.jpg",
    "desc": "Šestadvacetimetrová dřevěná rozhledna z&nbsp;roku 2013 s&nbsp;železným točitým schodištěm stojí na nejvyšším bodě stejnojmenného sportovního areálu. Vzhledem k&nbsp;několikrát posunuté kolaudaci celého objektu však byla "
  },
  {
    "id": 8888,
    "name": "Vrchovina",
    "slug": "vrchovina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vrchovina/",
    "kraj": ["Liberec",
      "Liberecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vrchovina/DSCF7853.JPG",
    "desc": "Šestimetrová dřevěná rozhledna z&nbsp;roku 2016. Překvapivě zajímavý kruhový výhled z&nbsp;otevřené vyhlídkové plošiny ve výšce 5 metrů (Ještěd, Javorník, Trosky, Bezděz, Český ráj). Rozhledna je postavena na okraji obce"
  },
  {
    "id": 3817,
    "name": "Vrškamýk",
    "slug": "vrskamyk",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vrskamyk/",
    "kraj": ["Příbram",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vrskamyk/dscf2396.jpg",
    "desc": "Jedenáctimetrová dřevěná rozhledna z&nbsp;roku 2010, která je součástí odpočinkového areálu pod hradem Kamýk. Výhled z&nbsp;kryté plošiny ve výšce 8 metrů je omezen pouze jihovýchodním směrem na obec Kamýk nad Vltavou a "
  },
  {
    "id": 13998,
    "name": "Vsetín",
    "slug": "vsetin",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vsetin/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vsetin/DSCF3218.JPG",
    "desc": "Vsetínský zámek ze 17. století je nejstarší stavbou ve městě. Byl vystavěn na vysoké stráni na pravém břehu Vsetínské Bečvy na základech středověké tvrze z 15. století. Renesanční stavba začátkem 18. století vyhořela, al"
  },
  {
    "id": 25334,
    "name": "Výhledna Bořanovice",
    "slug": "vyhledna-boranovice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vyhledna-boranovice/",
    "kraj": ["Praha - východ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vyhledna-boranovice/20250512_133724aa.jpg",
    "desc": "Železná rozhledna z&nbsp;roku 2025 připomíná loď ukotvenou na břehu „českého moře“-Polabí. Patnáctimetrová stavba se skládá ze tří podlaží. Nejprostornější ve výšce 4,2 metry je paluba se stolem a lavicemi, nad ní ve výš"
  },
  {
    "id": 24044,
    "name": "VýhledNa Litomyšl",
    "slug": "vyhled-na-litomysl",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vyhled-na-litomysl/",
    "kraj": ["Pardubický kraj",
      "Svitavy"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vyhledna-litomysl/DSCF8858.JPG",
    "desc": "Bezmála patnáctimetrová rozhledna vyrostla v&nbsp;roce 2025 na severním okraji města u silnice z&nbsp;Litomyšle do Kornic. Je sestavena ze dvou vzájemně propojených vyřazených lodních kontejnerů. Horizontálním kontejnere"
  },
  {
    "id": 1950,
    "name": "Vyhlídka",
    "slug": "vyhlidka-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vyhlidka-2/",
    "kraj": ["Bruntál",
      "Moravskoslezský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vyhlidka-2/vyhlid-jeznik-9-12.jpg",
    "desc": "Sedmnáctimetrová dřevěná trámová věž z roku 2001. Kruhový výhled z otevřeného ochozu ve výšce 13 metrů (Krnov, Albrechtice, Jeseníky, Beskydy, polské roviny). Na konci obce Ježník, téměř na vrcholu prudkého kopce, se nac"
  },
  {
    "id": 837,
    "name": "Vyhlídka",
    "slug": "vyhlidka",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-techanovicka-vyhlidka",
    "kraj": ["Jihočeský kraj",
      "Prachatice"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-techanovicka-vyhlidka/rozhledna-techanovicka-vyhlidka-99954-v5.jpg",
    "desc": "Desetimetrová dřevěná dvoupodlažní vyhlídková stavba z roku 1997. Výhled ze zastřešené plošiny ve výšce asi 7 metrů pouze severovýchodním směrem (Borová Lada, Chaupská slať). Na konci Borové Lady ve směru na Kvildu je u "
  },
  {
    "id": 1952,
    "name": "Vyhlídka Petra Bezruče",
    "slug": "vyhlidka-petra-bezruce",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vyhlidka-petra-bezruce/",
    "kraj": ["Moravskoslezský kraj",
      "Opava"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/moravskoslezsky-kraj/vyhlidka-petra-bezruce/IMG_0450.jpg",
    "desc": "Osmimetrová jednopatrová dřevěná nástavba z roku 1890 umístěná na čtyřech kamenných sloupech. Výhled ze zastřešené plošiny ve výšce 4 metrů je možný pouze severním směrem na zámecký park se zámkem a jeho dvěma věžemi, Hr"
  },
  {
    "id": 16763,
    "name": "Vyhlídka v parku Gustava Mahlera",
    "slug": "vyhlidka-v-parku-gustava-mahlera",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vyhlidka-v-parku-gustava-mahlera/",
    "kraj": ["Jihlava",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vyhlidka-v-parku-gustava-mahlera/1_DSCF6021.JPG",
    "desc": "Osmimetrová ocelová věž s&nbsp;točitým schodištěm vkusně zasazená do torza bývalé bašty městského opevnění Jihlavy. Půlkruhový výhled z&nbsp;otevřené plošiny ve výšce sedmi metrů je možný pouze jihozápadním směrem na par"
  },
  {
    "id": 2024,
    "name": "Výhon",
    "slug": "vyhon",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vyhon/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/vyhon/vyhon%20%282%29.jpg",
    "desc": "Originálně pojatá šestnáctimetrová dřevěná rozhledna z akátového dřeva (dovezeného až z jižního Slovenska) z roku 2009. Kruhový výhled z otevřené plošiny ve výšce 14 metrů, kam se dostaneme po vnitřním točitém ocelovém s"
  },
  {
    "id": 3848,
    "name": "Vysoká",
    "slug": "vysoka-2",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vysoka-2/",
    "kraj": ["Plzeňský kraj",
      "Tachov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vysoka/dscf2579.jpg",
    "desc": "Devětadvacetimetrový ocelový tubus s&nbsp;vnějším vinutým schodištěm z roku 2014. Celá stavba je pak zpevněná svislými a vzájemně překříženými ocelovými lany. V anketě o rozhlednu roku 2014, vyhlášenou Klubem přátel rozh"
  },
  {
    "id": 365,
    "name": "Vysoká",
    "slug": "vysoka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vysoka/",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/vysoka/IMG_0579.jpg",
    "desc": "Dvaatřicetimetrová osmiboká ocelová telekomunikační věž z roku 2001. Kruhový výhled z otevřené plošiny ve výšce 25 metrů (Říp, Bezděz, Ještěd, Krkonoše, Železné hory, Polabí, Jizerské hory, Orlické hory, Kunětická hora)."
  },
  {
    "id": 22450,
    "name": "Vysoké Pole",
    "slug": "vysoke-pole",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vysoke-pole/",
    "kraj": ["Zlín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vysoke-pole/DSCF7750.JPG",
    "desc": "Patnáctimetrová dřevěná rozhledna z roku 2023 je postavená na solidním betonovém základě. Kruhový výhled z&nbsp;kryté plošiny ve výšce necelých 13 metrů (pohraniční hřeben Bílých Karpat s&nbsp;dominantními vrcholky V. Ja"
  },
  {
    "id": 2680,
    "name": "Vysoký Kamýk",
    "slug": "vysoky-kamyk",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-vysoky-kamyk",
    "kraj": ["České Budějovice",
      "Jihočeský kraj"],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Kamyk_LT_CZ_castle_ruin_127.jpg/960px-Kamyk_LT_CZ_castle_ruin_127.jpg",
    "desc": "Šestačtyřicetimetrová ocelová věž z&nbsp;roku 2011, která obepíná původní zděnou šestnáctimetrovou zeměměřičskou věž z&nbsp;roku 1941 (velmi podobná další měřičské věži – rozhledně na Studeném vrchu v Brdech). Ve střední"
  },
  {
    "id": 367,
    "name": "Vysoký vrch",
    "slug": "vysoky-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vysoky-vrch/",
    "kraj": ["Kladno",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/stredocesky-kraj/vysoky-vrch/P1010006.JPG",
    "desc": "Desetimetrová jehlanová trámová konstrukce z roku 2007. Téměř kruhový výhled z otevřené plošiny ve výšce asi 7 metrů &#8211; severovýchodním směrem brání výhledu zalesněný vrchol Vysokého vrchu (Říp, Milešovka, Krušné a "
  },
  {
    "id": 12152,
    "name": "Vyšicko",
    "slug": "vysicko",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/vysicko/",
    "kraj": ["Hodonín",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/vysicko/DSCF1486.JPG",
    "desc": "Nosnou konstrukci z&nbsp;roku 2018 tvoří tři kovové sloupy, které se kvůli zeštíhlení naklánějí oproti základně o 10 stupňů a dosahují výšky 12 metrů. Kruhový výhled ze zastřešené plošiny ve výšce 9 metrů (malebné a veli"
  },
  {
    "id": 4209,
    "name": "Zadov",
    "slug": "zadov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zadov/",
    "kraj": ["Jihočeský kraj",
      "Prachatice"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zadov/DSCF4529.JPG",
    "desc": "Třiatřicetimetrová ocelová konstrukce skokanského můstku z&nbsp;roku 1978, na němž náš skokan Pavel Ploc vytvořil rekord v&nbsp;délce 95 metrů. Od roku 1993 byla věž bez větších úprav s&nbsp;přestávkami využívána turisty"
  },
  {
    "id": 1349,
    "name": "Zámecký vrch",
    "slug": "zamecky-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zamecky-vrch/",
    "kraj": ["Děčín",
      "Ústecký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/ustecky-kraj/zamecky-vrch/zamv.jpg",
    "desc": "Staronová šestnáctimetrová dřevěná rozhledna z roku 1998, postavená v ruinách bývalého hradu ze třináctého století. Kruhový výhled z kryté místnosti ve výšce 12 metrů (Česká Kamenice, Lužické hory, Labské pískovce, České"
  },
  {
    "id": 773,
    "name": "Zámeček",
    "slug": "zamecek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zamecek/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zamecek/dscf0817.jpg",
    "desc": "Zděná cukrárna s dvanáctimetrovou rozhlednou z roku 1916. Rozhledu z kryté vyhlídkové místnosti ve výšce 9 metrů brání vzrostlé stromy (v době vzniku bylo možné spatřit Krušné hory, Slavkovský les, Smrčiny se Zelenou hor"
  },
  {
    "id": 16660,
    "name": "Zašová",
    "slug": "zasova",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zasova/",
    "kraj": ["Vsetín",
      "Zlínský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zasova/DSCF5912.JPG",
    "desc": "Sedmimetrová dřevěná rozhledna stojí od roku 2010 na konci nově vysazeného parkového areálu mezi zašovským hřbitovem a školním atletickým areálem. Kruhový výhled ze zastřešené plošiny ve výšce 3 metry je možný především "
  },
  {
    "id": 16832,
    "name": "Závist",
    "slug": "na-zavisti",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/na-zavisti/",
    "kraj": ["Praha - západ",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/na-zavisti/DSCF6127.JPG",
    "desc": "Dvaatřicetimetrová dřevěná rozhledna vyztužená kovovými táhly se tyčí od konce roku 2021 na plochém vrcholu Hradiště, 200 metrů nad úrovní hladiny Vltavy na místě bývalého keltského oppida. Kruhový výhled z&nbsp;otevřené"
  },
  {
    "id": 12626,
    "name": "Zbiroh",
    "slug": "zbiroh",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zbiroh/",
    "kraj": ["Plzeňský kraj",
      "Rokycany"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zbiroh/DSCF2137.JPG",
    "desc": "Zámek vznikl postupnou přestavbou&nbsp;původního hradu z počátku 13. století. Ve druhé polovině 19. století naposledy prošel razantní novorenesanční přestavbou. V&nbsp;posledních třech letech II. světové války byl sídlem"
  },
  {
    "id": 2807,
    "name": "Zdenička",
    "slug": "zdenicka",
    "url": "https://turistickamapa.cz/rozhledna-zdenicka/",
    "kraj": ["Kroměříž",
      "Zlínský kraj"],
    "photo": "https://turistickamapa.cz/data_fotos/2020_17-2-140656-cover.jpg",
    "desc": "Patnáctimetrová dřevěná rozhledna z&nbsp;roku 2012, ležící na nejvyšším bodě &nbsp;areálu hipodromu Gruntu Galatík. Kruhový výhled ze zastřešené plošiny ve výšce 12 metrů (Chřiby s&nbsp;kamennou rozhlednou na Brdu, Hostý"
  },
  {
    "id": 775,
    "name": "Zelená hora",
    "slug": "zelena-hora",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zelena-hora/",
    "kraj": ["Cheb",
      "Karlovarský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/karlovarsky-kraj/zelena-hora/zelena1.jpg",
    "desc": "Mohutná osmnáctimetrová kamenná věž z roku 1909. Z otevřeného ochozu ve výšce 15 metrů je po vykácení okolních vysokých stromů již docela solidní výhled na Chebsko, Slavkovský a Český les, Krušné hory, Smrčiny a do Němec"
  },
  {
    "id": 2027,
    "name": "Zelenkův kopec",
    "slug": "zelenkuv-kopec",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zelenkuv-kopec/",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/zelenkuv-kopec/346.jpg",
    "desc": "Devítimetrová dřevěná rozhledna z roku 2006. Jedná se o téměř shodnou rozhlednu s nedalekou Kopaninou u Olešnice. Kruhový výhled z kryté plošiny ve výšce 6 metrů (Olešnice, rozhledna Horní les, Drahanská vrchovina, Jesen"
  },
  {
    "id": 23366,
    "name": "Zítkova rozhledna Horka",
    "slug": "zitkova-rozhledna-horka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zitkova-rozhledna-horka/",
    "kraj": ["Vysočina",
      "Žďár nad Sázavou"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zitkova-rozhledna-horka/DSCF8750.JPG",
    "desc": "Soukromá dřevěná osmimetrová rozhledna stojí od roku 2022 na západ od obce Domanín na nevýrazném návrší, místními zvaném Horka. Kruhový výhled ze zastřešené plošiny necelé čtyři metry nad zemí, nad níž je ještě v&nbsp;ma"
  },
  {
    "id": 1630,
    "name": "Zlatá vyhlídka",
    "slug": "zlata-vyhlidka",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zlata-vyhlidka/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/kralovehradecky-kraj/zlata-vyhlidka/zlata-vyhlidka1.jpg",
    "desc": "Masivní jednadvacetimetrová&nbsp; ocelová věž z roku 2008. Kruhový výhled z otevřeného ochozu ve výšce 18 metrů (celý severní obzor zakrývá v dálce mohutný masiv blízké Černé hory, z Krkonoš lze spatřit západním směrem u"
  },
  {
    "id": 1788,
    "name": "Zlatý Chlum",
    "slug": "zlaty-chlum",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zlaty-chlum/",
    "kraj": ["Jeseník",
      "Olomoucký kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zlaty-chlum/zlaty-chlum-9-12.jpg",
    "desc": "Kamenná třiceticetimetrová věž z roku 1899. Kruhový výhled z otevřeného ochozu ve výšce 26 metrů (Jeseníky, Rychlebské hory, Králický Sněžník, město Jeseník, v Polsku pak Otmuchovské jezero). Dobrá asfaltová silnice ke v"
  },
  {
    "id": 2030,
    "name": "Zlobice",
    "slug": "zlobice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zlobice/",
    "kraj": ["Brno - venkov",
      "Jihomoravský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/jihomoravsky-kraj/zlobice/DSCF1155.JPG",
    "desc": "Původně vojenská betonová třináctimetrová pozorovací věž z roku 1972, přestavená v roce 2009 na rozhlednu. Vyhlídkový ochoz ze tří stran rozhledny se nachází ve výšce 9 metrů. Výhled severovýchodním směrem je omezen lese"
  },
  {
    "id": 12276,
    "name": "Zruč nad Sázavou",
    "slug": "zruc-nad-sazavou-zamek",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zruc-nad-sazavou-zamek/",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zruc-nad-sazavou-zamek/DSCF1660.JPG",
    "desc": "Zámek nad stejnojmenným městem se tyčí na pravém břehu Sázavy. V&nbsp;roce 1547 byl původní gotický hrad ze 14. století přestavěn na zámek. Zámku vévodí čtyřhranná čtyřiačtyřicetimetrová věž. Z&nbsp;proskleného ochozu ve"
  },
  {
    "id": 8148,
    "name": "Zruč nad Sázavou-Kolowratská věž",
    "slug": "zruc-nad-sazavou",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zruc-nad-sazavou/",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zruc-nad-sazavou/DSCF5176.JPG",
    "desc": "Kolowratská věž je bývalá hradní hláska, která sloužila také jako skladiště zbraní. Je postavena v parku za hlavní zámeckou budovou ve Zruči nad Sázavou. Po důkladné sanaci zdiva a obnově dřevěného schodiště byla zpřístu"
  },
  {
    "id": 1733,
    "name": "Zuberský vrch",
    "slug": "zubersky-vrch",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zubersky-vrch/",
    "kraj": ["Chrudim",
      "Pardubický kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/pardubicky-kraj/zubersky-vrch/P1010033.JPG",
    "desc": "Pětapadesátimetrový ocelový telekomunikační stožár z roku 2003, dřevem opláštěný do výšky 17 metrů. Kruhový výhled z otevřené plošiny ve výšce 38 metrů ( Železné hory, Žďárské vrchy ). Výstup na rozhlednu, zvláště za sil"
  },
  {
    "id": 1632,
    "name": "Zvičina",
    "slug": "zvicina",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zvicina/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zvicina/zvicina-9-11.jpg",
    "desc": "Raisova chata s desetimetrovou věžovitou otáčivou nástavbou z roku 1925. Věž&nbsp; po dlouhodobém uzavření byla v roce 2010 opět zpřístupněna. Kruhovému výhledu z prosklené nástavby ve výšce 7 metrů brání severním směrem"
  },
  {
    "id": 9978,
    "name": "Zvíkov Hláska",
    "slug": "zvikov-hlaska",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zvikov-hlaska/",
    "kraj": ["Jihočeský kraj",
      "Písek"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zvikov-hlaska/DSCF8984.JPG",
    "desc": "Hrad Zvíkov ze 13. století se odjakživa vypínal na vysokém skalním ostrohu nad soutokem Vltavy s&nbsp;Otavou. Napuštěním Orlické přehrady však byla skála z&nbsp;větší části zatopena, takže hned pod hradbami se nachází př"
  },
  {
    "id": 15055,
    "name": "Zvíkov Hlízová věž",
    "slug": "zvikov-hlizova-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zvikov-hlizova-vez/",
    "kraj": ["Jihočeský kraj",
      "Písek"],
    "photo": "https://www.hrad-zvikov.cz/pamatky/zvikov/uvodni%20strana/image-thumb__95175__OgTagImage/06-kaple-svateho-vaclava.webp",
    "desc": "Hrad Zvíkov ze 13. století se odjakživa vypínal na vysokém skalním ostrohu nad soutokem Vltavy s&nbsp;Otavou. Napuštěním Orlické přehrady však byla skála z&nbsp;větší části zatopena, takže hned pod hradbami se nachází př"
  },
  {
    "id": 8909,
    "name": "Zvířetice",
    "slug": "zviretice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zviretice/",
    "kraj": ["Mladá Boleslav",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zviretice/DSCF7822.JPG",
    "desc": "Rozsáhlá hradní zřícenina z&nbsp;počátku 14. století byla později přestavěná na renesanční zámek. Dvaačtyřicetimetrová válcová, od přelomu 19. a 20. století napůl rozbořená věž, byla ve 30. letech minulého století uprave"
  },
  {
    "id": 1634,
    "name": "Žaltman",
    "slug": "zaltman",
    "url": "https://turistickamapa.cz/rozhledna-zaltman/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://turistickamapa.cz/data_fotos/rozhledna-zaltman-2022_25_6-114230.jpg",
    "desc": "Patnáctimetrová železná vyhlídková věž z roku 1967 . Kruhový výhled z otevřeného ochozu ve výšce dvanáct metrů (Krkonoše, Orlické hory, Teplicko-adršpašské skály, Králický Sněžník). Odbočka k rozhledně se nachází těsně p"
  },
  {
    "id": 15784,
    "name": "Žaltman II",
    "slug": "zaltman-ii",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zaltman-ii/",
    "kraj": ["Královéhradecký kraj",
      "Trutnov"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zaltman-ii/PL-1178.jpg",
    "desc": "Třiadvacetimetrová kovová konstrukce stojí od roku 2020 na nejvyšším vrcholu Jestřebích hor. Jednotlivé díly po částech přenesl na vrchol vrtulník, kde pak byly následně zkompletovány. Po roce tak nahradila původní rozhl"
  },
  {
    "id": 1636,
    "name": "Žalý",
    "slug": "zaly",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zaly/",
    "kraj": ["Liberecký kraj",
      "Semily"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zaly/zaly-7-08.jpg",
    "desc": "Masivní osmnáctimetrová a jediná kamenná věž v Krkonoších z roku 1892. Impozantní kruhový výhled z otevřeného ochozu&nbsp; (panorama Krkonoš, Orlické a Jizerské hory, Ještěd, Trosky). Z Vrchlabí vede pod rozhlednu kvalit"
  },
  {
    "id": 9554,
    "name": "Žebrák",
    "slug": "zebrak",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zebrak/",
    "kraj": ["Beroun",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zebrak/DSCF8461.JPG",
    "desc": "Mohutná dvacetimetrová válcová věž z druhé poloviny 13. století. V&nbsp;osmdesátých letech dvacátého století byl hrad opraven, věž byla zabezpečena před sesutím a začala být využívána jako rozhledna. Kruhový výhled z ote"
  },
  {
    "id": 3933,
    "name": "Žernov",
    "slug": "zernov",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zernov/",
    "kraj": ["Královéhradecký kraj",
      "Náchod"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zernov/dscf3440.jpg",
    "desc": "Masivní čtyřiadvacetimetrová dřevěná rozhledna s&nbsp;ocelovým točitým schodištěm z&nbsp;roku 2014. Kruhový výhled z krytého ochozu ve výšce 18 metrů (Krkonoše &#8211; Sněžka, Studniční, Světlá a Černá hora, Orlické hory"
  },
  {
    "id": 3974,
    "name": "Žernovník",
    "slug": "zernovnik",
    "url": "https://www.dnesvyletujeme.cz/rozhledna-zernovnik",
    "kraj": ["Blansko",
      "Jihomoravský kraj"],
    "photo": "https://www.dnesvyletujeme.cz/photogallery/rozhledna-zernovnik/rozhledna-zernovnik-46083-v5.jpg",
    "desc": "Masivní patnáctimetrová dřevěná rozhledna postavená v roce 2014 na místě vysloužilého vodojemu. Kruhový výhled ze zastřešeného ochozu ve výšce 12 metrů (zámek Černá Hora, Boskovický hrad, rozhledny Podvrší, Babylon, Malý"
  },
  {
    "id": 12568,
    "name": "Žirovnice",
    "slug": "zirovnice",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zirovnice/",
    "kraj": ["Pelhřimov",
      "Vysočina"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zirovnice/DSCF2051.JPG",
    "desc": "Usuzuje se, že k&nbsp;založení hradu došlo v&nbsp;polovině 13. století. V&nbsp;17. století se postupnými přestavbami hrad měnil v&nbsp;zámek. V&nbsp;závěru 17. století se začalo s&nbsp;opravou značně poničeného zámku z&n"
  },
  {
    "id": 369,
    "name": "Žižkovská televizní věž",
    "slug": "zizkovska-televizni-vez",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zizkovska-televizni-vez/",
    "kraj": ["Praha"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/hlavni-mesto-praha/zizkovska-televizni-vez/DSCF1106.JPG",
    "desc": "Třítubusová 216 metrů vysoká železobetonová věž z roku 1991. Naše nejvyšší rozhlednová stavba. Postupně kruhový výhled ze tří propojených gondol ve výšce 93 metrů, kam nás pohodlně vyveze rychlovýtah (celá Praha jakoby z"
  },
  {
    "id": 12584,
    "name": "Žleby",
    "slug": "zleby",
    "url": "https://www.rozhlednovymrajem.cz/rozhledny/zleby/",
    "kraj": ["Kutná Hora",
      "Středočeský kraj"],
    "photo": "https://www.rozhlednovymrajem.cz/wp-content/gallery/netridene/zleby/DSCF2110.JPG",
    "desc": "Gotický hrad Žleby byl vystavěn již ve 13. století. Teprve v&nbsp;polovině 19. století hrad prodělal razantní přestavbu na současný novogotický zámek. Zámku vévodí 60 metrová Velká obytná věž, která byla vystavěna až v&n"
  },
];

export const krajeList = [
  "Jihočeský kraj",
  "Jihomoravský kraj",
  "Karlovarský kraj",
  "Královéhradecký kraj",
  "Liberecký kraj",
  "Moravskoslezský kraj",
  "Olomoucký kraj",
  "Pardubický kraj",
  "Plzeňský kraj",
  "Praha",
  "P\u0159\u00edhrani\u010d\u00ed",
  "St\u0159edo\u010desk\u00fd kraj",
  "\u00dasteck\u00fd kraj",
  "Vyso\u010dina",
  "Zl\u00ednsk\u00fd kraj"
];
