import SquareButton from "@/components/Shared/Basic/SquareButton";
import SquareContainer from "@/components/Shared/Basic/SquareContainer";
import Image from "next/image";
import Link from "next/link";

export default function Fogpotlas() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className={`relative w-full`}>
        <div className="w-full  bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/fogpotlas-hero.jpg`}
            width={2400}
            height={1600}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Családi rendelő Győrújbarát"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8 ">
          <h1 className="font-merrieweather text-4xl text-white font-bold">
            Fogpótlás
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3  z-30 flex justify-center items-center gap-6  px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/fogpotlas-hero.jpg`}
              width={2400}
              height={1600}
              alt={`Családi rendelő Győrújbarát`}
              className="w-full md:w-[600px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      {/* Content goes under here */}
      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            A fogpótlás célja
          </h1>
          <p>
            A foghiány nemcsak esztétikai probléma, hanem a rágási funkciót is
            befolyásolja. Célunk, hogy pácienseink számára esztétikailag
            tökéletes, fix fogpótlásokat biztosítsunk, minimálinvazív
            beavatkozásokkal, fájdalommentesen.
          </p>
          <p>
            A modern technológiáknak köszönhetően lehetőség van implantátumok
            beültetésére, illetve klasszikus koronák és hidak alkalmazására.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0 ">
          <article
            id="implantatum"
            className="w-full max-w-5xl flex flex-col items-start scroll-mt-32"
          >
            <h2 className="text-xl font-semibold font-merrieweather">
              Implantátumok - A legmodernebb megoldás
            </h2>
            <p className="py-6">
            Rendelőnk az implantátumok beültetését egy magasabb szintre emelte, hiszen teljesen digitális tervezéssel és minimálinvazív technikákkal dolgozunk. 
            </p>
            <p className="pb-1 font-semibold">A fogimplantátum készítés folyamata:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fogpótlástan konzultáció</li>
              <li>CBCT felvétel és digitális tervezés</li>
              <li>Metszés nélküli implantátum-beültetés (ha lehet)</li>
              <li>Ideiglenes korona a gyógyulásig</li>
              <li>Gyógyulási idő: 4-6 hónap</li>
              <li>Végleges fogpótlás elkészítése</li>
            </ul>
            <p className="pt-6">
              Előnye: nincs fogcsiszolás, természetes rágás és életre szóló
              megoldás.
            </p>
          </article>
        </div>

        <article
          id="koronak-hidak"
          className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0 scroll-mt-32"
        >
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">
            Esztétikus koronák és hidak
          </h2>
          <p className="py-6">
          A fogkoronák és hidak kiváló megoldást jelenthetnek, ha egy vagy több fogat szeretnénk pótolni, illetve ha a meglévő fogak elszíneződtek, többszörösen tömöttek, és esztétikailag nem megfelelőek. Rendelőnkben a legmodernebb cirkónium kerámia és mono-cirkónium koronák elérhetőek, melyek kiváló esztétikai és funkcionalitási eredményt biztosítanak.
          </p>
          <p className="pb-1 font-semibold">A koronák és hidak előnyei:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gyors kivitelezés</li>
            <li>Esztétikus megjelenés</li>
            <li>Kedvezőbb ár az implantátumhoz képest</li>
          </ul>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6">
              Kérj időpontot konzultációra!
            </h2>
            <p>
              A fogpótlás minden esetben egyedi tervezést igényel, hogy az adott
              páciens számára a legjobb megoldást biztosítsuk. Fogpótlástan
              szakorvosaink segítenek megtalálni a számodra tökéletes megoldást,
              legyen szó implantátumokról, koronákról vagy hídról. Foglalj
              időpontot már ma, és tedd meg az első lépést az egészséges és
              gyönyörű mosoly felé!
            </p>
            <Link href={"/#kapcsolat"} className="my-6 w-full flex justify-end">
              <SquareButton
                label="Kapcsolatfelvétel"
                textColor="text-[#576d2c]"
                textHighlightColor="group-hover:text-white"
                borderColor="border-hill-primary"
                bgHighlightColor="group-hover:bg-hill-primary"
                className="h-12 w-fit"
              />
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
