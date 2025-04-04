import SquareButton from "@/components/Shared/Basic/SquareButton"
import SquareContainer from "@/components/Shared/Basic/SquareContainer"
import Image from "next/image"
import Link from "next/link"

export default function Szajsebeszet() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className="relative w-full">
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/szajsebeszet-hero.jpg`}
            width={1500}
            height={1000}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Szájsebészet Hill Medical"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8 w-full text-center">
          <h1 className="font-merrieweather text-2xl md:text-4xl text-white font-bold">
            Szájsebészet
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/szajsebeszet-hero.jpg`}
              width={1500}
              height={1000}
              alt="Szájsebészet Hill Medical"
              className="w-full md:w-[800px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            Szájsebészet – Profi megoldások a legösszetettebb esetekre
          </h1>
          <h2 className="text-xl font-semibold mt-4 font-merrieweather">A szájsebészet szerepe</h2>
          <p className="mt-4">
            A szájsebészet a fogászat egyik legösszetettebb ága, amely az egyszerű foghúzástól kezdve a
            bonyolultabb implantációs és csontpótlási beavatkozásokig terjed. Egy fogat bárhogyan ki lehet
            húzni, de úgy eltávolítani, hogy a lehető legtöbb csontállomány megmaradjon, már valódi művészet.
          </p>
          <p className="mt-4">
            Rendelőnkben tapasztalt szájsebészeink precíz és kíméletes technikákkal dolgoznak, hogy pácienseink
            gyorsan és szövődménymentesen gyógyuljanak.
          </p>
        </article>

        <div id="bolcsessegfog-eltavolitas" className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0 scroll-mt-32">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold font-merrieweather">Bölcsességfog eltávolítás</h2>
            <p className="py-6">
              A bölcsességfog problémák a legtöbb embernél előbb-utóbb jelentkeznek, és eltávolításuk gyakran
              elkerülhetetlen. Ezek a fogak sokszor részben vagy teljesen csont alatt helyezkednek el, ezért
              eltávolításuk kizárólag szájsebészeti úton történhet.
            </p>
            <h3 className="font-semibold mb-2">A leggyakoribb problémák:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rossz pozícióban növő (például oldalra dőlő) bölcsességfogak</li>
              <li>Félig előtört fogak, amelyeket részben íny borít</li>
              <li>Fokozott szuvasodási kockázat nehéz tisztíthatóság miatt</li>
              <li>A szomszédos fog gyökerének felszívódása</li>
              <li>Fogszabályozás során torlódás megelőzése érdekében</li>
            </ul>
            <p className="mt-4">
              A műtét előtt CB-CT felvételt készítünk, és ha szükséges, fogszabályozó kezeléssel előzetesen
              biztonságos távolságba mozgatjuk a fogat az idegtől.
            </p>
          </article>
        </div>

        <article id="csontpotlas" className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0 scroll-mt-32">
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">Csontpótlás – Az implantáció alapja</h2>
          <p className="py-6">
            A modern szájsebészet egyik legfontosabb területe az implantáció, amelyhez sok esetben elengedhetetlen
            a megfelelő csontállomány biztosítása. Csontpótlást végzünk kisebb és nagyobb beavatkozások esetén is.
          </p>
          <h3 className="font-semibold mb-2">A csontpótlás történhet:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Kisebb mennyiségben az implantációval egy időben</li>
            <li>Nagyobb csontdefektus esetén külön beavatkozásként, 4–6 hónapos gyógyulási idővel</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Leggyakoribb csontpótlási eljárások:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Arcüregemelés (sinus lift) – a felső állcsont hátsó régiójában</li>
            <li>Frontfogak körüli csontpótlás – esztétikus ínykontúr kialakítása érdekében</li>
            <li>Fogeltávolítás utáni csontpótlás – csontveszteség helyreállítása</li>
          </ul>
          <p className="mt-4">
            Minden beavatkozást alapos szakorvosi tervezés előz meg CB-CT felvétel alapján. Így garantáljuk a
            biztonságot és a sikeres végeredményt.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6 font-merrieweather">Bízd magad profi szájsebészeinkre!</h2>
            <p>
              Legyen szó egyszerű foghúzásról, bölcsességfog eltávolításról vagy implantációról, rendelőnkben a
              legmodernebb technológiákkal és fájdalommentes eljárásokkal dolgozunk.
            </p>
            <p className="mt-4">
              Fordulj hozzánk bizalommal, kérj konzultációs időpontot, és tedd fel minden kérdésed szakértő
              csapatunknak!
            </p>
            <Link href="/#kapcsolat" className="my-6 w-full flex justify-end">
              <SquareButton
                label="Konzultáció kérése"
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
