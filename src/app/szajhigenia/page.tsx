import SquareButton from "@/components/Shared/Basic/SquareButton"
import SquareContainer from "@/components/Shared/Basic/SquareContainer"
import Image from "next/image"
import Link from "next/link"

export default function Szajhigienia() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className="relative w-full">
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/szajhigenia-hero.jpg`}
            width={1500}
            height={1000}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Szájhigiénia Hill Medical"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8 w-full text-center">
          <h1 className="font-merrieweather text-2xl md:text-4xl text-white font-bold">
            Szájhigiénia
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/szajhigenia-hero.jpg`}
              width={1500}
              height={1000}
              alt="Szájhigiéniai kezelés Hill Medical"
              className="w-full md:w-[800px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            Miért fontos a szájhigiénia?
          </h1>
          <p>
            A szájüregben több millió baktérium található, köztük jó és rossz baktériumok is. A megfelelő szájhigiénia fenntartása kulcsfontosságú a baktériumegyensúly megőrzésében, a fogszuvasodás megelőzésében és a fogágybetegségek elkerülésében.
          </p>
          <p className="mt-4">
            A szakszerű szájhigiéniai kezeléseket rendelőnkben dentálhigiénikus szakemberek végzik, hogy pácienseink a legmagasabb szintű gondoskodást kapják.
          </p>
        </article>

        <div id="fajdalommentes-fogkoszedes" className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0 scroll-mt-32">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold font-merrieweather">
              Fájdalommentes fogkőeltávolítás (EMS)
            </h2>
            <p className="py-6">
              A fogkő eltávolítása nemcsak esztétikai szempontból fontos, hanem az egészséges fogíny és fogágy megőrzése érdekében is. Rendelőnkben a legmodernebb EMS biofilm-eltávolító rendszert alkalmazzuk.
            </p>
            <p>
              A kezelés során homokfújással távolítjuk el a fogkövet, majd melegített vízsugár és sonikus rezgés segítségével az íny alatti részeket is megtisztítjuk.
            </p>
            <p className="mt-4">
              A kezelés teljesen fájdalommentes, és szájhigiénés tanácsadással egészítjük ki, hogy megtanítsuk a hatékony otthoni ápolás lépéseit. Aki egyszer kipróbálja, nem tér vissza a hagyományos módszerhez!
            </p>
          </article>
        </div>

        <article id="fogapolasi-modszerek" className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0 scroll-mt-32">
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">
            Hatékony fogápolási tippek
          </h2>
          <p className="py-6">
            A megfelelő szájhigiénia érdekében naponta legalább kétszer alaposan meg kell mosni a fogakat. Az alábbi eszközök és módszerek segítenek:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Elektromos fogkefe használata a hatékonyabb lepedékeltávolításért</li>
            <li>Fogselyem vagy fogköztisztító kefék a nehezen elérhető helyekhez</li>
            <li>Antibakteriális szájvíz a friss leheletért és ínyvédelemért</li>
            <li>Személyre szabott szájhigiénés tanácsadás dentálhigiénikustól</li>
          </ul>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6 font-merrieweather">
              Próbáld ki fájdalommentes fogkőeltávolításunkat!
            </h2>
            <p>
              Ne hagyd, hogy a fogkő vagy a helytelen szájápolás veszélyeztesse fogaid egészségét! Jelentkezz be rendelőnkbe fájdalommentes EMS fogkőeltávolításra, és tapasztald meg, milyen egy valóban hatékony és kellemes szájhigiéniai kezelés!
            </p>
            <p className="mt-4">
              Tapasztalt dentálhigiénikusaink segítenek, hogy mosolyod hosszú távon egészséges és ragyogó maradjon!
            </p>
            <Link href="/#kapcsolat" className="my-6 w-full flex justify-end">
              <SquareButton
                label="Időpont foglalása"
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
  )
}
