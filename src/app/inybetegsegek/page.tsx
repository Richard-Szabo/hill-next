import SquareButton from "@/components/Shared/Basic/SquareButton"
import SquareContainer from "@/components/Shared/Basic/SquareContainer"
import Image from "next/image"
import Link from "next/link"

export default function Inybetegsegek() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className="relative w-full">
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/inybetegsegek-hero.jpg`}
            width={1500}
            height={1000}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Ínybetegségek Hill Medical"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8 w-full text-center">
          <h1 className="font-merrieweather text-2xl md:text-4xl text-white font-bold">
            Ínybetegségek és megelőzésük
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/inybetegsegek-hero.jpg`}
              width={1500}
              height={1000}
              alt="Ínybetegségek kezelése Hill Medical"
              className="w-full md:w-[700px] max-h-[450px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            Az ínybetegségek és megelőzésük
          </h1>
          <p>
            Magyarországon a fogágy sorvadása – köznyelven ínysorvadás – sajnos népbetegségnek számít. A probléma kezdetben fogínyvérzéssel jelentkezik, majd a fogak mozgathatósága is kialakulhat.
          </p>
          <p className="mt-4">
            Bár előfordulhat genetikai hajlam, a legtöbb esetben az ínybetegség megelőzhető. A lepedék és fogkő baktériumai állandó gyulladást okoznak, amely hosszú távon csontpusztuláshoz, majd fogvesztéshez vezethet.
          </p>
        </article>

        <div id="verzo-foginy" className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0 scroll-mt-32">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold font-merrieweather">
              Fogínyvérzés – Az első figyelmeztető jel
            </h2>
            <p className="py-6">
              A fogínyvérzés egy figyelmeztető tünet, amelyet sokan figyelmen kívül hagynak. Rendszerint fogmosás vagy fogselyem használata során jelentkezik.
            </p>
            <h3 className="font-semibold mb-2">Leggyakoribb okai:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>A lepedék és fogkő felhalmozódása</li>
              <li>Nem megfelelő szájhigiénia</li>
              <li>Nem illeszkedő tömések, pótlások</li>
              <li>Hormonális változások (pl. terhesség, menopauza)</li>
            </ul>
            <p className="mt-4">
              A fogínyvérzés nemcsak kellemetlen, hanem egyértelmű jele annak, hogy az íny gyulladásban van. Kezeletlenül a gyulladás mélyebbre terjedhet, károsítva a fogágyat.
            </p>
          </article>
        </div>

        <article id="mozgo-fogak" className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0 scroll-mt-32">
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">
            Mozgó fogak – A fogágybetegség előrehaladott állapota
          </h2>
          <p className="py-6">
            Ha az ínygyulladás hosszabb időn keresztül fennáll, az íny visszahúzódhat, és a fogakat tartó csontállomány is leépülhet.
          </p>
          <h3 className="font-semibold mb-2">Jellemző tünetek:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>A fogak hosszabbnak tűnnek a visszahúzódott íny miatt</li>
            <li>A fogak mozgathatóvá válnak</li>
            <li>Rossz lehelet, kellemetlen szájíz</li>
          </ul>
          <p className="mt-4">
            Kezelés nélkül a fogágybetegség fogvesztéshez vezethet, ezért a rendszeres fogorvosi ellenőrzés és a korai felismerés kulcsfontosságú.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6 font-merrieweather">Előzd meg a bajt!</h2>
            <p>
              Ne várd meg, hogy a tünetek súlyosbodjanak! Ha fogínyvérzést, kellemetlen szájszagot vagy mozgó fogakat tapasztalsz, jelentkezz be vizsgálatra.
            </p>
            <p className="mt-4">
              Tapasztalt szakembereink személyre szabott kezelési tervvel segítenek megelőzni a fogágybetegségek kialakulását vagy megállítani azok előrehaladását.
            </p>
            <Link href="/#kapcsolat" className="my-6 w-full flex justify-end">
              <SquareButton
                label="Jelentkezem vizsgálatra"
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
