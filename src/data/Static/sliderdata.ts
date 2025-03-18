export interface SliderItemProps{
    id: number;
    highlightText: string;
    description: string;
    link?: string;
    image: string;
    extension: string;
}

export const HeroSliderData : SliderItemProps[] = [
    {
        id: 1,
        highlightText: "Üdvözöljük a Hill Medicalnál!",
        description: "Rendelőnk kihozza a mosolyodból a legjobbat! ",
        image: '930',
        extension: 'jpg'
    },
    {
        id: 2,
        highlightText: "Üdvözöljük a Hill Medicalnál!",
        description: "Rendelőnk kihozza a mosolyodból a legjobbat! Új pácienseineket mindig szívesen fogadunk.",
        image: '9060',
        extension: 'jpeg'
    }
]



export interface ServicesSliderItemProps extends SliderItemProps{
    imageMini: string;
    extensionMini: string;
}

export const ServiceSliderData : ServicesSliderItemProps[] = [
    {
        id: 1,
        highlightText: "Fogszabályzás",
        description: "Rendelőnk kihozza a mosolyodból a legjobbat! Új pácienseineket mindig szívesen fogadunk.",
        image: 'kid-1',
        extension: 'jpg',
        imageMini: 'kid-1',
        extensionMini: 'jpg'
    },
    {
        id: 2,
        highlightText: "Gyerekfogászat",
        description: "Rendelőnk kihozza a mosolyodból a legjobbat! Új pácienseineket mindig szívesen fogadunk.",
        image: 'kid-2',
        extension: 'jpg',
        imageMini: 'kid-1',
        extensionMini: 'jpg'
    },
    {
        id: 3,
        highlightText: "Sürgősségi ellátás",
        description: "Rendelőnk kihozza a mosolyodból a legjobbat! Új pácienseineket mindig szívesen fogadunk.",
        image: 'kid-1',
        extension: 'jpg',
        imageMini: 'kid-1',
        extensionMini: 'jpg'
    },
    {
        id: 4,
        highlightText: "Megelőzés",
        description: "Rendelőnk kihozza a mosolyodból a legjobbat! Új pácienseineket mindig szívesen fogadunk.",
        image: 'kid-1',
        extension: 'jpg',
        imageMini: 'kid-1',
        extensionMini: 'jpg'
    },
    {
        id: 4,
        highlightText: "Paradontológia",
        description: "Rendelőnk kihozza a mosolyodból a legjobbat! Új pácienseineket mindig szívesen fogadunk.",
        image: 'kid-1',
        extension: 'jpg',
        imageMini: 'kid-1',
        extensionMini: 'jpg'
    }
]