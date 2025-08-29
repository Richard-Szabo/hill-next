


export interface SliderItemProps{
    id: number;
    highlightText: string;
    description?: string;
    link?: string;
    image: string;
    extension: string;
}

export const HeroSliderData : SliderItemProps[] = [
    {
        id: 1,
        highlightText: "Fix fogpótlás mindenkinek!",
        description: "Többé nem kell takargatnod a mosolyod - visszaadjuk az önbizalmad!",
        image: '9060',
        extension: 'jpeg',
        link: '/fogpotlas'
    },
    {
        id: 2,
        highlightText: "Fogszabályozás, várólista nélkül!",
        description: "Fix és láthatatlan fogszabályzók minden korosztálynak!",
        image: 'fogszabalyzas',
        extension: 'jpg',
        link: '/fogszabalyozas'
    },
    {
        id: 3,
        highlightText: "Gyermekfogászat – mosoly félelem nélkül!",
        description: "Játékos, fájdalommentes kezelések és barátságos környezet a legkisebbeknek is.",
        image: "gyermekfogaszat-hero",
        extension: "jpg",
        link: "/gyermekfogaszat"
      }
      
  
]



export interface ServicesSliderItemProps extends SliderItemProps{
    imageMini: string;
    extensionMini: string;
    icon: string;
}

export const ServiceSliderData : ServicesSliderItemProps[] = [
    {
        id: 1,
        highlightText: "Ínybetegségek",
        description: "Az ínygyulladás és a fogágybetegség kezeletlenül fogvesztéshez vezethet. Időben felismerve azonban megelőzhető és kezelhető!",
        image: 'inybetegseg',
        extension: 'jpg',
        imageMini: 'inybetegseg',
        extensionMini: 'jpg',
        icon: 'InybetegsegIcon',
        link: '/inybetegsegek'
    },
    {
        id: 2,
        highlightText: "Fogszabályozás",
        description: "Szabályos, egészséges mosoly minden korosztálynak! Láthatatlan és hagyományos fogszabályozási megoldások felnőtteknek és gyerekeknek.",
        image: 'fogszabalyozas',
        extension: 'jpg',
        imageMini: 'fogszabalyozas',
        extensionMini: 'jpg',
        icon: 'FogszabalyzasIcon',
        link: '/fogszabalyozas'
    },
    {
        id: 3,
        highlightText: "Sürgősségi ellátás",
        description: "Fájdalom, letört fog vagy duzzanat? Ne várj napokig! Gyors és hatékony segítséget nyújtunk sürgős fogászati problémák esetén.",
        image: 'surgosseg',
        extension: 'jpg',
        imageMini: 'surgosseg',
        extensionMini: 'jpg',
        icon: 'SurgossegiIcon',
        link: '/surgossegi-ellatas'
    },
    {
        id: 4,
        highlightText: "Megelőzés",
        description: "A rendszeres fogászati ellenőrzés és professzionális tisztítás segít elkerülni a komolyabb fogászati problémákat. Vigyázz fogaid egészségére!",
        image: 'megelozes',
        extension: 'jpg',
        imageMini: 'megelozes',
        extensionMini: 'jpg',
        icon: 'MegelozesIcon',
        link: '/megelozes'

    },
    {
        id: 4,
        highlightText: "Fix fogpótlások",
        description: "Esztétikus, stabil és kényelmes megoldások hiányzó fogak pótlására. Válaszd a fémmentes cirkónium koronákat vagy implantátumokat!",
        image: 'fogpotlas',
        extension: 'jpg',
        imageMini: 'fogpotlas',
        extensionMini: 'jpg',
        icon: 'FogpotlasIcon',
        link: '/fogpotlas'
    },
]