export interface ReviewItemProps {
  id: number;
  name: string;
  description: string;
  rating: number;
  source: string;
}

export const reviewData: ReviewItemProps[] = [
  {
    id: 0,
    name: "Emese Antal",
    description:
      "Csodaszép környezet, mosolygós, profi szakemberek. Fájdalommentes volt a kezelés és tökéletes munkát végzett a dentálhigiénikus Adél, nagyon köszönöm! Abszolút ajánlom a rendelőt!",
    rating: 5,
    source: "Google",
  },
  {
    id: 1,
    name: "Eszter Cimpan",
    description:
      "Nagyon meg vagyok elégedve a fogászattal. Anna doktornő profi, kedves, türelmes, teljesen a beteg igényeit szem előtt tartva dolgozik. Köszönök mindent❤️",
    rating: 5,
    source: "Google",
  },
  {
    id: 2,
    name: "Katalin Tibesz",
    description: `Nagyon nagyon elégedett vagyok a szolgáltatásokkal, a profizmussal és a korszerű, modern berendezéssel.Rendszeresen járok fogkő eltávolításra, és ezentúl CSAK ide fogok. Adél, a dentálhigiénikus EMS fogkő eltávolítást végzett nagyon alapos, és profi módon!Majd a doktornő csodás, fájdalommentes töméseket végzett! Mindenkinek szeretettel ajánlom!`,
    rating: 5,
    source: "Google",
  },
  {
    id: 3,
    name: "Roland Jakab",
    description: `Kedves és Profi csapat ! Igényes környezet ! Modern gépek ! Mióta hozzájuk járok egyáltalán nincs bennem félelem érzet !Mindenkinek ajánlom !`,
    rating: 5,
    source: "Google",
  },
  {
    id: 4,
    name: "Erik Barta",
    description: `Gyermekfogászati problémával mentünk, reggel hívtunk és délután már kedvesen fogadtak, majd a felmerült problémát megoldották. A kislányom mosollyal jött el, ami egy fogászati beavatkozás esetén nem túl gyakori :) Csak ajánlani tudom.`,
    rating: 5,
    source: "Google",
  },
  {
    id: 5,
    name: "Viktoria Horvath",
    description: `Alapbetegségem miatt rettegve mentem a rendelőbe.
Dr Fajzi Nóra doktornő fogadott. Egyszerűen lenyűgözött a tudása. Nagyon profi, ügyes, barátságos. Bátran ajánlom mindenkinek. Ezek mellett még a rendelő is csodás, tiszta és szuper felszerelt. A recepciós hölgy is rendkívűl barátságos és segítőkész. A kihúzásra ítélt fogam megmentették. Hálásan köszönöm. Ezek után máshova nem is mennék fogászatra, kivéve a NyárFa Dent-be, mert a doktornő ott is rendel. Köszönöm :)`,
    rating: 5,
    source: "Google",
  },
  {
    id: 6,
    name: "Renáta Kálóczi",
    description: `Nagyon elégedett vagyok a rendelővel. Jártam fogorvosi kezelésen, fogszabályozáson, fogtisztításon és mindegyik doktornő nagyon szakszerű, segítőkész és kedves volt. A recepción lévő hölgy/ek is nagyon segítőkészek és rendesek volt. Nem tudok rosszat mondani, teljesen elégedett vagyok a szolgáltatással.`,
    rating: 5,
    source: "Google",
  },
  {
    id: 7,
    name: "Zita Péntekné Bagó",
    description: `Profi csapat. Az első fogászat , ahova nem félve megyek.😀
Gyönyörű környezet, modern berendezésekkel.
Csak jót tudok írni Róluk!
Bátran ajánlom Őket mindenkinek!`,
    rating: 5,
    source: "Google",
  },
  {
    id: 8,
    name: "Ákos Burdi",
    description: `Mivel új fogorvost kerestem nem csalódtam bennük mostantól csak ő hozzájuk fogok járni!
Technológiában és tudásban is az élen járnak!`,
    rating: 5,
    source: "Google",
  },
];
