import SquareButton from "@/components/Shared/Basic/SquareButton"
import SquareContainer from "@/components/Shared/Basic/SquareContainer"
import Image from "next/image"
import Link from "next/link"

export default function SurgossegiFogaszat() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className={`relative w-full`}>
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/surgossegi-hero.jpg`}
            width={1500}
            height={1000}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Sürgősségi fogászat Hill Medical"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8 w-full text-center">
          <h1 className="font-merrieweather text-2xl md:text-4xl text-white font-bold">
            Sürgősségi fogászat
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/surgossegi-hero.jpg`}
              width={1500}
              height={1000}
              alt="Sürgősségi fogászat Hill Medical"
              className="w-full md:w-[800px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            Sürgősségi fogászat – Azonnali segítség fogfájás esetén
          </h1>
          <p>
            A fogfájás sosem jön jókor! Az elsődleges cél mindig a megelőzés, de ha már kialakult a probléma, azonnali segítséget nyújtanak rendelőnk szakemberei.
          </p>
          <p className="mt-4">
            A fogfájás gyakran akkor jelentkezik, amikor a fogszuvasodás eléri az idegkamrát, ahol a baktériumok gyulladást okoznak. Ez a feszítő, lüktető érzés különösen éjszaka erősödhet fel, sok esetben pedig a hagyományos fájdalomcsillapítók sem nyújtanak enyhülést.
          </p>
          <p className="mt-4">
            Ilyenkor elengedhetetlen, hogy minél hamarabb fogorvoshoz fordulj! A megfelelő kezeléssel a fájdalom már az első alkalommal jelentősen csökkenthető, sőt, teljesen meg is szüntethető.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold font-merrieweather">
              Gyökérkezelés – A fogmegtartás kulcsa
            </h2>
            <p className="py-6">
              A fogfájás leggyakoribb kezelési módja a gyökérkezelés, amelyet rendelőnkben mindig a legmodernebb eszközökkel, teljesen fájdalommentesen végzünk:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gépi gyökérkezelés – Precízebb, gyorsabb, mint a hagyományos módszerek</li>
              <li>Ultrahangos folyadékaktivátor – Hatékonyabban tisztítja meg a gyökércsatornát</li>
              <li>Lézeres csatorna-fertőtlenítés – Segít a baktériumok teljes eltávolításában</li>
            </ul>
            <p className="mt-4">
              Ezekkel az innovatív technológiákkal nagyobb eséllyel menthető meg a fog, miközben a páciens fájdalma gyorsan enyhül.
            </p>
          </article>
        </div>

        <article className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0">
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">
            Duzzanat, gennyzacskó, elhalt fogak kezelése
          </h2>
          <p className="py-6">
            Nemcsak élő fogak, hanem már korábban idegkezelt fogak is okozhatnak fájdalmat. Ha gyulladás alakul ki egy elhalt fog gyökere körül, gyakran duzzanat is jelentkezik.
          </p>
          <p>
            Ilyen esetekben az azonnali beavatkozás elengedhetetlen a fájdalom csökkentése és a fertőzés terjedésének megakadályozása érdekében.
          </p>
          <p className="mt-4">
            Ne halogasd a fogfájás kezelését! Fogorvosaink minden esetben a lehető legjobb megoldást nyújtják, hogy a fájdalmad múljon, és fogad megmenthető legyen.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6 font-merrieweather">
              Azonnali segítségre van szükséged?
            </h2>
            <p>
              Ha sürgős problémád van, fordulj hozzánk bizalommal, hogy gyors és hatékony kezelésben részesülj! Tapasztalt szakorvosaink és modern technológiáink gondoskodnak róla, hogy a fájdalom megszűnjön, és mosolyod újra gondtalan legyen.
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
