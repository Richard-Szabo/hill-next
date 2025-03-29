export interface ReviewItemProps{
    id: number;
    name: string;
    description: string;
    rating: number;
    source: string;
    
}

export const reviewData : ReviewItemProps[] = [
    {
        id: 0,
        name: 'Emese Antal',
        description: 'Csodaszép környezet, mosolygós, profi szakemberek. Fájdalommentes volt a kezelés és tökéletes munkát végzett a dentálhigiénikus Adél, nagyon köszönöm! Abszolút ajánlom a rendelőt!',
        rating: 5,
        source: 'Google'
    },
    {
        id: 1,
        name: 'Eszter Cimpan',
        description: 'Nagyon meg vagyok elégedve a fogászattal. Anna doktornő profi, kedves, türelmes, teljesen a beteg igényeit szem előtt tartva dolgozik. Köszönök mindent❤️',
        rating: 5,
        source: 'Google'
    },
    {
        id: 2,
        name: 'Katalin Tibesz',
        description: `Nagyon nagyon elégedett vagyok a szolgáltatásokkal, a profizmussal és a korszerű, modern berendezéssel.Rendszeresen járok fogkő eltávolításra, és ezentúl CSAK ide fogok. Adél, a dentálhigiénikus EMS fogkő eltávolítást végzett nagyon alapos, és profi módon!Majd a doktornő csodás, fájdalommentes töméseket végzett! Mindenkinek szeretettel ajánlom!`,
        rating: 5,
        source: 'Google'
    },
    {
        id: 3,
        name: 'Roland Jakab',
        description: `Kedves és Profi csapat ! Igényes környezet ! Modern gépek ! Mióta hozzájuk járok egyáltalán nincs bennem félelem érzet !Mindenkinek ajánlom !`,
        rating: 5,
        source: 'Google'
    },
    {
        id: 4,
        name: 'Erik Barta',
        description: `Gyermekfogászati problémával mentünk, reggel hívtunk és délután már kedvesen fogadtak, majd a felmerült problémát megoldották. A kislányom mosollyal jött el, ami egy fogászati beavatkozás esetén nem túl gyakori :) Csak ajánlani tudom.`,
        rating: 5,        
        source: 'Google'
    }
]        