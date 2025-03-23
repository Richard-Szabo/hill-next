import Image from "next/image";

export default function AboutUs(){
    return (
        <section className="w-full overflow-x-hidden flex justify-center items-center md:items-start pb-20">
        <div className="w-full max-w-6xl px-4 flex flex-col justify-center items-center font-hill2 gap-6">
          <h1 className="text-center text-4xl md:text-5xl text-hill-primary font-bold">
            Üdvözöljük a Hill Medicalnál
          </h1>

          <div className="relative w-full  space-y-3 text-md md:text-lg text-justify font-hill">
            {/* Desktop image floated right */}
            <div className="hidden md:block float-right md:w-80 md:h-80 ml-2 mb-2">
              <Image
                src="/images/employees/drfajzianna.jpg"
                alt="Dr. Fajzi Anna"
                width={1012}
                height={1024}
                priority
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* Mobile image centered */}
            <div className="md:hidden w-64 h-64 mx-auto">
              <Image
                src="/images/employees/drfajzianna.jpg"
                alt="Dr. Fajzi Anna"
                width={1012}
                height={1024}
                priority
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <p className="leading-6 md:leading-8">
              Dr. Fajzi Anna és a NyárFa Dent közös erővel hozta létre a Hill
              Medicalt, egy olyan magánfogászati központot, ahol a precizitás,
              minőség, kedvesség és bizalom találkozik.
            </p>
            <p className="leading-6 md:leading-8">
              Célunk egy olyan családias légkörű fogászati szolgáltatás
              kialakítása, ahol a pácienseink minden pillanatban érzik, hogy
              számukra fontosak és figyelünk rájuk. Dr. Fajzi Anna szakmai
              tudása és empátiája iránytűként szolgál mindannyiunknak, és
              elkötelezettek vagyunk abban, hogy a legmagasabb színvonalú
              ellátást nyújtsuk.
            </p>
            <p className="leading-6 md:leading-8">
              Szakterületünk fókuszában a fogpótlástan áll, beleértve az
              implantológiát és a fix fogpótlásokat. A Hill Medical csapatában
              kerámia, cirkónium és monocirkon esztétikai fogpótlásokat
              kínálunk, amelyek precízen illeszkednek és természetes megjelenést
              kölcsönöznek.
            </p>
            <p className="leading-6 md:leading-8">
              Az általunk alkalmazott anyagok csúcsminőségűek és
              biokompatibilisek, hogy biztosítsuk azt, hogy pácienseink mindig a
              legjobb kezekben érezzék magukat. Célunk, hogy a Hill Medical ne
              csak egy fogászati központ legyen, hanem egy hely, ahova
              bizalommal lehet fordulni problémáinkkal. Az ellátás nem csak
              feladataink közé tartozik, hanem hivatásunk része is.
            </p>
            <p className="leading-6 md:leading-8">
              Köszönjük, hogy a Hill Medicalt választotta, és várjuk Önt a
              mosolyának átalakítására és megőrzésére!
            </p>
          </div>
        </div>
      </section>
    )
}