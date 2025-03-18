import HeroSliderWrapper from "@/components/Slider/Hero/HeroSliderWrapper";
import ServicesSliderWrapper from "@/components/Slider/Services/ServicesSliderWrapper";
import { HeroSliderData, ServiceSliderData } from "@/data/Static/sliderdata";
import Image from "next/image";



export default function Home() {
  return (
    <>
      {/* Hero slider */}
      <div className="relative w-full h-[550px] md:h-[806px] overflow-hidden">
        <HeroSliderWrapper data={HeroSliderData} time={2500} />
      </div>
      {/* About us */}
      <section className="w-full flex justify-center items-start pb-20">
        <div className="w-full  max-w-6xl px-3 md:px-4 flex flex-col justify-center items-center font-hill2 gap-6">
          <h1 className="text-center text-4xl md:text-5xl text-hill-primary font-bold">
            Üdvözöljük a Hill Medicalnál
          </h1>
          <div className="space-y-3 text-md md:text-lg  text-justify font-hill ">
            <div className="hidden md:block float-right w-80 h-80 mt-4 ml-4">
              <Image
                src="/images/employees/drfajzianna.jpg"
                alt="Descriptive text"
                width={1012} // Set large width for high-res screens
                height={1024} // Height to maintain aspect ratio
                priority
                className="rounded-lg block "
                style={{ width: "100%", height: "100%" }} 
              />
            </div>
            <div className="md:hidden w-80 h-28 mx-auto">
              <Image
                src="/images/employees/drfajzianna.jpg"
                alt="Descriptive text"
                width={1012} // Set large width for high-res screens
                height={1024} // Height to maintain aspect ratio
                priority
                className="rounded-lg block "
                style={{ width: "100%", height: "100%" }} 
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
      {/* Services slider  */}
      <ServicesSliderWrapper data={ServiceSliderData} />
      {/* XXXx */}
      <div>sdad</div>
    </>
  );
}
