export interface PricesDataItem{
    name: string;
    description?: string;
    price: number;
    priceMax?: number;
}

export interface PricesData{
    group_name:string;
    items: PricesDataItem[];
}


// export const prices : PricesData[] = [
//     {
//         group_name: 'Diagnosztika', 
//         items: [
//             {
//                 name: 'Konzultáció',
//                 price: 15000
//             },
//             {
//                 name: 'Röntgen',
//                 description: 'panoráma',
//                 price: 14000
//             },
//             {
//                 name: 'Röntgen',
//                 description: 'periapicális (kicsi)',
//                 price: 7000
//             }
//         ]
//     },
//     {
//         group_name: 'Szájhigéniai kezelések', 
//         items: [
//             {
//                 name: 'Fogkőeltávoítás',
//                 description: 'EMS készülékkel állcsontonként',
//                 price: 21000
//             },
//             {
//                 name: 'Fogkőeltávolítás',
//                 description: 'állcsontonként',
//                 price: 19000
//             },
//             {
//                 name: 'Szájhigénia tanácsadás',
//                 price: 14000
//             },
//             {
//                 name: 'Fogékszer',
//                 price: 28000
//             },
//             {
//                 name: 'Fogfehérítés',
//                 description: 'Rendelői, 1 fog',
//                 price: 25000
//             },
//             {
//                 name: 'Fogfehérítés',
//                 description: 'Rendelői, 1 fogív',
//                 price: 50000
//             },
//             {
//                 name: 'Sín',
//                 description: 'fogcsikorgatás ellen',
//                 price: 30000
//             },
//         ]
//     },
//     {
//         group_name: 'Esztétikus tömés/ inlay', 
//         items: [
//             {
//                 name: 'Esztétikus fogtömés',
//                 description:'tól-ig',
//                 price: 27000,
//                 priceMax: 45000
//             },
//             {
//                 name: 'Röntgen',
//                 description: 'panoráma',
//                 price: 10000
//             },
//             {
//                 name: 'Röntgen',
//                 description: 'periapicális',
//                 price: 7000
//             }
//         ]
//     },
// ]

  
  export const prices: PricesData[] = [
    {
      group_name: "DIAGNOSZTIKA",
      items: [
        { name: "Konzultáció", price: 15000 },
        { name: "Kis röntgen", price: 7000 },
        { name: "Panoráma röntgen", price: 14000 }
      ]
    },
    {
      group_name: "ESZTÉTIKAI KEZELÉSEK",
      items: [
        { name: "Esztétikus tömések", price: 30000, priceMax: 55000, description: "tól-ig" },
        { name: "Fogfelépítés", price: 45000, description: "élpótlás" },
        { name: "Direkt héj", price: 55000 },
        { name: "Kerámia héj", price: 150000 },
        { name: "Inlay, onlay", price: 99000,  },
        { name: "Csapok", price: 37000 }
      ]
    },
    {
      group_name: "SZÁJHIGIÉNIAI KEZELÉSEK",
      items: [
        { name: "Fogkőeltávolítás", price: 21000, description: "EMS / állcsont" },
        { name: "Fogkőeltávolítás", price: 19000, description: "Hagyományos / állcsont" },
        { name: "Szájhigiéniás tanácsadás", price: 14000 },
        { name: "Fogfehérítés", price: 100000 , description: "Rendelői" }
      ]
    },
    {
      group_name: "FOGMEGTARTÓ KEZELÉSEK",
      items: [
        { name: "Barázdazárás", price: 25000 },
        { name: "Gyökérkezelés", price: 40000, priceMax: 60000, description: "csatornaszámtól függően, tól-ig" },
        { name: "Gyökértömés", price: 30000, priceMax: 40000, description: "csatornaszámtól függően, tól-ig" },
        { name: "Gyógyszeres átöblítés", price: 20000 },
        { name: "Kofferdam", price: 4000, description: "izolálás felhelyezése, szükség esetén" },
        { name: "Tejfog tömés", price: 25000 },
        { name: "Tejfog pulpotómia", price: 25000 }
      ]
    },
    {
      group_name: "FOGPÓTLÁSOK",
      items: [
        { name: "Korona", price: 89000, description: "Fém-kerámia" },
        { name: "Korona", price: 109000, description: "Cirkónium " },
        { name: "Korona", price: 89000, description: "Teleszkóp" },
        { name: "Fogsor", price: 229000, description: "Teljes kivehető / állcsont" },
        { name: "Fogsor", price: 175000, description: "Ideiglenes teljes / állcsont" },
        { name: "Fogsor", price: 309000, description: "Fémlemezes kivehető  /állcsont" }
      ]
    },
    {
      group_name: "FOGSZABÁLYOZÁS",
      items: [
        { name: "Konzultáció", price: 18000 },
        { name: "Tervezési díj", price: 35000, description: "lenyomat, fotó, kiértékelés" },
        { name: "Készülék ragasztása", price: 19000 },
        { name: "Láthatatlan fogszabályozó", price: 860000, description: "Clear Correct /-tól" },
        { name: "Önligírozó készülék", price: 289000, priceMax: 359000, description: "Rögzített fém/ kerámia / fogív" },
        { name: "Gumis készülék", price: 249000, description: "Rögzített fém / fogív" },
        { name: "Kivehető készülék", price: 58000, description: "állcsont" },
        { name: "Aktiválás / ívcsere", price: 10000, priceMax: 15000 }
      ]
    },
    {
      group_name: "FOGELTÁVOLÍTÁS",
      items: [
        { name: "Fogeltávolítás", price: 45000 },
        { name: "Varrat+kollagén behelyezése", price: 15000 },
        { name: "Bölcsességfog eltávolítás", price: 65000 }
      ]
    }
  ];
  