import SquareButton from "@/components/Shared/Basic/SquareButton"
import SquareContainer from "@/components/Shared/Basic/SquareContainer"
import Image from "next/image"
import Link from "next/link"

export default function EsztetikusFogaszat() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className="relative w-full">
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/esztetikus-fogaszat-hero.jpg`}
            width={1500}
            height={1000}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Esztétikus fogászat"
          />
        </div>
        <div className="w-full absolute top-0 left-1/2 -translate-x-1/2 pt-8">
          <h1 className="font-merrieweather text-2xl md:text-4xl text-white font-bold text-center">
            Esztétikus fogászat
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/esztetikus-fogaszat-hero.jpg`}
              width={1500}
              height={1000}
              alt="Esztétikus fogászat illusztráció"
              className="w-full md:w-[700px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            Az esztétikus fogászat új korszakában
          </h1>
          <p>
            A szürke amalgámtömések ideje lejárt! Ma már kizárólag modern, fehér kompozit anyagokból készülő esztétikus töméseket alkalmazunk. Azonban nem mindegy, hogy milyen anyagból és milyen kivitelezéssel készül egy tömés. A hosszútávú siker titka a türelem és a precizitás, amelyet rendelőnk minden kezelés során biztosít.
          </p>
          <p className="mt-4">
            Egy jól kivitelezett tömés nemcsak láthatatlan a szakavatatlan szemek számára, de évekig megőrzi esztétikáját és ellenáll a szuvasodásnak. A megfelelő technológiával és anyaghasználattal készült tömések biztosítják a fog hosszú élettartamát, miközben természetes hatást keltenek.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article id="termeszetes-tomesek" className="w-full max-w-5xl flex flex-col items-start scroll-mt-32">
            <h2 className="text-xl font-semibold font-merrieweather">
              Természetes hatású, tartós fogtömések
            </h2>
            <p className="py-6">
              A Hill Medical rendelőjében minden orvos magas minőségű, biokompatibilis tömőanyagokkal dolgozik, hogy pácienseink a lehető legtartósabb és legtermészetesebb fogtöméseket kapják.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tökéletesen illeszkednek a természetes fogszínhez</li>
              <li>Megőrzik a mosoly természetességét</li>
              <li>Hosszú élettartamot biztosítanak</li>
            </ul>
            <p className="mt-4">
              Egy tökéletes fogtömés kialakításához idő, türelem, precizitás és esztétikai érzék szükséges. Sajnos sok esetben találkozunk olyan tömésekkel, amelyek rossz kivitelezés miatt már egy éven belül alászuvasodnak, kiesnek, vagy esztétikailag nem megfelelőek. Éppen ezért a Hill Medical rendelője minden tömésre egyéves garanciát vállal.
            </p>
          </article>
        </div>

        <article id="hejak-inlay" className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0 scroll-mt-32">
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">
            Héjak és inlay-k – A tökéletes esztétikai megoldások
          </h2>
          <p className="py-6">
            A modern esztétikai fogászat egyik legfontosabb területe a fogászati héjak és inlay-k alkalmazása. Ezek az eljárások kiváló alternatívát nyújtanak a nagy kiterjedésű tömések helyett, vagy amikor maximálisan tökéletes esztétikumra törekszünk.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Héjak:</strong> Vékonyrétegű, porcelánból készült héjak, amelyek a fog elülső felszínére kerülnek, és esztétikailag hibátlan mosolyt eredményeznek.
            </li>
            <li>
              <strong>Inlay-k, onlay-k:</strong> Fogtechnikai laborban készülő, rendkívül tartós betétek, amelyek a nagyobb szuvasodások esetén kiváló alternatívát nyújtanak a hagyományos tömésekkel szemben.
            </li>
          </ul>
          <p className="mt-4">
            A legjobb fogtechnikai laborokkal együttműködve biztosítjuk, hogy pácienseink az elérhető legmagasabb minőségű esztétikai fogászati megoldásokat kapják.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6 font-merrieweather">
              Kérj konzultációt most!
            </h2>
            <p>
              Szeretnéd esztétikusabbá és egészségesebbé tenni mosolyodat? Jelentkezz be hozzánk konzultációra, ahol személyre szabott kezelési tervet és árajánlatot készítünk számodra!
            </p>
            <Link href="/#kapcsolat" className="my-6 w-full flex justify-end">
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
  )
}
