import SquareButton from "@/components/Shared/Basic/SquareButton";
import SquareContainer from "@/components/Shared/Basic/SquareContainer";
import Image from "next/image";
import Link from "next/link";

export default function Fogszabalyozas() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className={`relative w-full`}>
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/fogszabalyozas-hero.jpg`}
            width={1500}
            height={1000}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Fogszabályozás Hill Medical"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8">
          <h1 className="font-merrieweather text-4xl text-white font-bold">
            Fogszabályozás
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/fogszabalyozas-hero.jpg`}
              width={1500}
              height={1000}
              alt={`Fogszabályozás Hill Medical`}
              className="w-full md:w-[800px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            Fogszabályozás felnőtteknek és gyermekeknek
          </h1>
          <p>
            A szép és szabályos mosoly önbizalmat adhat, javíthatja a beszédet, a rágást és az általános szájhigiéniát. Rendelőnkben modern, személyre szabott fogszabályozási kezeléseket kínálunk minden korosztály számára – legyen szó gyermekekről vagy felnőttekről.
          </p>
          <p className="mt-4">
            A kezelési terv minden esetben digitális tervezésen alapul, amely során pontos lenyomatot készítünk a páciens fogairól, és ennek alapján megalkotjuk a legideálisabb megoldást. A kezelések átlagos időtartama 12–18 hónap, rendszeres kontrollvizsgálatok mellett.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article id="lathatatlan" className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold font-merrieweather">
              Láthatatlan fogszabályozás – Diszkrét és hatékony megoldás
            </h2>
            <p className="py-6">
              A láthatatlan fogszabályozó sínek átlátszó, kivehető megoldást kínálnak azoknak, akik esztétikus és kényelmes kezelést keresnek. Felnőttek és fiatalok körében egyaránt népszerű.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Szinte észrevehetetlen</li>
              <li>Kivehető, így könnyen tisztítható</li>
              <li>Rövidebb kezelési idő, kevesebb kontroll</li>
              <li>Digitális tervezés alapján készül</li>
            </ul>
          </article>
        </div>

        <article id="rogzitett" className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0">
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">
            Rögzített fogszabályozás – Klasszikus, de modern köntösben
          </h2>
          <p className="py-6">
            A rögzített készülékek – legyenek fém vagy esztétikus kerámia változatok – a leggyakrabban alkalmazott fogszabályozási eszközök. Ma már kényelmesebbek és diszkrétebbek, mint valaha.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Hatékony eredmény még súlyosabb eltérések esetén is</li>
            <li>Folyamatos erőhatás – gyorsabb és stabilabb mozgás</li>
            <li>Felnőtteknek és gyerekeknek egyaránt alkalmas</li>
            <li>6–8 hetente szükséges kontroll</li>
          </ul>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6 font-merrieweather">
              Személyre szabott kezelési terv
            </h2>
            <p>
              Minden páciensünk számára részletes kezelési tervet és árajánlatot készítünk, figyelembe véve az egyéni adottságokat, életkort és igényeket. Részletfizetési lehetőségekkel, modern készülékekkel és tapasztalt szakorvosokkal várunk mindenkit.
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
  );
}
