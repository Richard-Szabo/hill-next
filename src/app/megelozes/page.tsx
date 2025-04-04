import SquareButton from "@/components/Shared/Basic/SquareButton"
import SquareContainer from "@/components/Shared/Basic/SquareContainer"
import Image from "next/image"
import Link from "next/link"

export default function Megelozes() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className={`relative w-full`}>
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/megelozes-hero.jpg`}
            width={1500}
            height={1000}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Megelőzés Hill Medical"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8 w-full text-center">
          <h1 className="font-merrieweather text-2xl md:text-4xl text-white font-bold">
            Megelőzés és kezelés
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/megelozes-hero.jpg`}
              width={1500}
              height={1000}
              alt="Megelőzés és kezelés Hill Medical"
              className="w-full md:w-[800px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            Megelőzés és kezelés a Hill Medicalnál
          </h1>
          <p>
            A legjobb védekezés az ínybetegségek ellen a megelőzés. Rendelőnkben professzionális fogkő-eltávolítással és szakszerű tanácsadással segítünk a pácienseinknek az egészséges íny fenntartásában.
          </p>
          <p className="mt-4">
            A kezelés magában foglalhatja:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>EMS biofilm eltávolítás</li>
            <li>Mélytisztító kürettálás a fogíny alatti fogkő eltávolítására</li>
            <li>Lézeres kezelés az íny gyorsabb regenerációjáért</li>
          </ul>
          <p className="mt-4">
            Ne várd meg, amíg komolyabb problémák alakulnak ki! Ha ínyvérzést vagy fogínysorvadás tüneteit tapasztalod, jelentkezz be rendelőnkbe egy állapotfelmérésre és személyre szabott kezelésre.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold font-merrieweather">
              Miért fontos a szájhigiénia?
            </h2>
            <p className="py-6">
              A szájüregben több millió baktérium található, köztük jó és rossz baktériumok is. A megfelelő szájhigiénia fenntartása kulcsfontosságú a jó és rossz baktériumok egyensúlyának megőrzésében, a fogszuvasodás megelőzésében és a fogágybetegségek kialakulásának elkerülésében.
            </p>
            <p>
              A szakszerű szájhigiéniai kezeléseket rendelőnkben dentálhigiénikus szakemberek végzik, hogy biztosítsák pácienseink számára a legmagasabb szintű gondoskodást.
            </p>
          </article>
        </div>

        <article className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0">
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">
            Fájdalommentes fogkőeltávolítás (EMS)
          </h2>
          <p className="py-6">
            A fogkő eltávolítása nemcsak esztétikai szempontból fontos, hanem az egészséges fogíny és fogágy megőrzése érdekében is elengedhetetlen. Rendelőnkben a legmodernebb EMS biofilm-eltávolító rendszert alkalmazzuk, amely egy speciális protokoll segítségével homokfújással távolítja el a felhalmozódott fogkövet és biofilmet.
          </p>
          <p>
            A kezelés teljesen fájdalommentes: a homokfújás után egy sonikus rezgéssel működő, melegített vízsugár segítségével az íny alatti fogkövet is eltávolítjuk. A kezelést minden esetben szájhigiénés tanácsadással egészítjük ki, így pácienseink megtanulhatják a hatékony szájápolás lépéseit.
          </p>
          <p className="mt-4">
            Aki egyszer kipróbálja ezt a módszert, többé nem akar visszatérni a hagyományos fogkőeltávolításhoz!
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6 font-merrieweather">
              Hatékony fogápolási tippek
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Elektromos fogkefe használata a hatékonyabb lepedékeltávolítás érdekében</li>
              <li>Fogselyem vagy fogköztisztító kefék alkalmazása a nehezen elérhető területeken</li>
              <li>Antibakteriális szájvíz használata a friss lehelet és az íny egészségének megőrzésére</li>
              <li>
                Egyéni szájhigiénés tanácsadás dentálhigiénikus szakembereinktől, akik segítenek kiválasztani a számodra legmegfelelőbb eszközöket és módszereket
              </li>
            </ul>
          </article>
        </div>

        <article className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0">
          <h2 className="text-xl font-semibold my-6 font-merrieweather">
            Próbáld ki fájdalommentes fogkőeltávolításunkat!
          </h2>
          <p>
            Ne hagyd, hogy a fogkő és a nem megfelelő szájápolás veszélyeztesse fogaid egészségét! Jelentkezz be rendelőnkbe egy fájdalommentes EMS fogkőeltávolításra, és tapasztald meg, milyen egy valóban hatékony és kellemes szájhigiéniai kezelés.
          </p>
          <p className="mt-4">
            Szakértő dentálhigiénikusaink segítenek, hogy mosolyod hosszú távon egészséges és ragyogó maradjon!
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
      </section>
    </div>
  )
}
