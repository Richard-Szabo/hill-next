


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
        image: 'kid-1',
        extension: 'jpg',
        imageMini: 'kid-1',
        extensionMini: 'jpg',
        icon: 'InybetegsegIcon'
    },
    {
        id: 2,
        highlightText: "Fogszabályozás",
        description: "Szabályos, egészséges mosoly minden korosztálynak! Láthatatlan és hagyományos fogszabályozási megoldások felnőtteknek és gyerekeknek.",
        image: 'fogszabalyozas-hero',
        extension: 'jpg',
        imageMini: 'fogszabalyozas-hero',
        extensionMini: 'jpg',
        icon: 'FogszabalyzasIcon',
        link: '/fogszabalyozas'
    },
    {
        id: 3,
        highlightText: "Sürgősségi ellátás",
        description: "Fájdalom, letört fog vagy duzzanat? Ne várj napokig! Gyors és hatékony segítséget nyújtunk sürgős fogászati problémák esetén.",
        image: 'kid-1',
        extension: 'jpg',
        imageMini: 'kid-1',
        extensionMini: 'jpg',
        icon: 'SurgossegiIcon'
    },
    {
        id: 4,
        highlightText: "Megelőzés",
        description: "A rendszeres fogászati ellenőrzés és professzionális tisztítás segít elkerülni a komolyabb fogászati problémákat. Vigyázz fogaid egészségére!",
        image: 'kid-1',
        extension: 'jpg',
        imageMini: 'kid-1',
        extensionMini: 'jpg',
        icon: 'MegelozesIcon'
    },
    {
        id: 4,
        highlightText: "Fix fogpótlások",
        description: "Esztétikus, stabil és kényelmes megoldások hiányzó fogak pótlására. Válaszd a fémmentes cirkónium koronákat vagy implantátumokat!",
        image: 'fogpotlas-hero',
        extension: 'jpg',
        imageMini: 'fogpotlas-hero',
        extensionMini: 'jpg',
        icon: 'FogpotlasIcon',
        link: '/fogpotlas'
    }
]