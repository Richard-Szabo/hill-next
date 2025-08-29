import SquareButton from "@/components/Shared/Basic/SquareButton";
import SquareContainer from "@/components/Shared/Basic/SquareContainer";
import Image from "next/image";
import Link from "next/link";

export default function Gyermekfogaszat() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      {/* Hero */}
      <section className={`relative w-full`}>
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/gyermekfogaszat-hero.jpg`}
            width={2400}
            height={1600}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Gyermekfogászat - Hill Medical, Győrújbarát"
            priority
          />
        </div>
        <div className="w-full absolute top-0 left-1/2 -translate-x-1/2 pt-8 text-center">
          <h1 className="font-merrieweather text-2xl md:text-4xl text-white font-bold">
            Gyermekfogászat Győr mellett
          </h1>
          <p className="text-white/90 mt-2 px-3 max-w-3xl mx-auto font-karla">
            Kedves, nyugodt környezet - ahová a kicsik szívesen visszatérnek
          </p>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/gyermekfogaszat-hero.jpg`}
              width={2400}
              height={1600}
              alt={`Gyermekbarát rendelő - Hill Medical`}
              className="w-full md:w-[600px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      {/* Intro */}
      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h2 className="text-2xl font-bold mb-4 font-merrieweather">
            Ahol a kicsik mosolya a legfontosabb
          </h2>
          <p className="mb-3">
            A fogorvoslás nem csak szakma, hanem hivatás - különösen igaz ez, ha
            kisgyermekekről van szó. A Hill Medical rendelőben Győrújbarátban
            szeretettel és türelemmel fogadjuk a legkisebb pácienseket is.
          </p>
          <p>
            Célunk, hogy pozitív élménnyé tegyük a fogászati látogatást, így már
            gyermekkorban kialakuljon a bizalom és a megfelelő szájápolási
            rutin.
          </p>
        </article>

        {/* Empátia és élmény */}
        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article
            id="megerto-orvosok"
            className="w-full max-w-5xl flex flex-col md:flex-row gap-4  items-start scroll-mt-32"
          >
            <div className="w-full md:w-1/2">
              <SquareContainer flip>
                <Image
                  src={`/images/service/fogorvos-munka-kozben.JPG`}
                  width={1200}
                  height={1600}
                  alt={`Gyerekfogászat!`}
                  className="w-full max-h-[500px] object-cover"
                />
              </SquareContainer>
            </div>
            <div className="flex flex-col items-start w-full md:w-3/4 md:ps-10">
              <h3 className="text-xl font-semibold font-merrieweather">
                Megértő gyerekfogorvosaink segítenek a félelem leküzdésében
              </h3>
              <p className="py-6">
                Tudjuk, hogy sok kisgyermek fél az ismeretlentől. Ezért nálunk
                nincs sietség, nincs erőltetés - van viszont megértés, türelem
                és játékos hangulat. A kezelés mindig a gyermek tempójához
                igazodik, sok-sok magyarázattal és biztatással.
              </p>
              <p>
                Gyermekfogorvosaink a kicsik nyelvén kommunikálnak, és mindig
                figyelnek arra, hogy a gyermek biztonságban érezze magát - akkor
                is, ha csak egy megelőző vizsgálatról van szó.
              </p>
            </div>
          </article>
        </div>

        {/* Gyerekbarát rendelő, modern technika */}
          <article
            id="gyerekbarat-rendelo"
            className="w-full max-w-5xl flex flex-col md:flex-row-reverse gap-4  items-start scroll-mt-32 py-8 px-3 md:px-0"
          >
            <div className="w-full md:w-1/2">
              <SquareContainer >
                <Image
                  src={`/images/service/baratsagos-hangulat-fogorvos.jpg`}
                  width={1200}
                  height={1600}
                  alt={`Barátságos hangulat a rendelőben!`}
                  className="w-full max-h-[480px] object-cover"
                />
              </SquareContainer>
            </div>
            <div className="flex flex-col items-start w-full md:w-3/4 md:ps-10">
              <h3 className="text-xl font-semibold mt-2 font-merrieweather">
                Gyerekbarát rendelő, modern anyagokkal és technikával
              </h3>
              <ul className="list-disc pl-5 space-y-2 py-6">
                <li>Fájdalommentes tejfogtömések</li>
                <li>
                  Modern, színben igazodó tömőanyagok - hogy a gyerekek is
                  büszkék legyenek a mosolyukra
                </li>
                <li>Gyors, kíméletes kezelések</li>
                <li>Egyéni szájhigiéniás tanácsadás - a szülők bevonásával</li>
              </ul>
              <p>
                A legújabb tömőanyagokat és eszközöket használjuk, melyek
                biztonságosak, tartósak és esztétikusak - a gyerekek számára is.
              </p>
            </div>
          </article>
        {/* Megelőzés első */}
        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article
            className="w-full max-w-5xl flex flex-col md:flex-row gap-4  items-start scroll-mt-32"
          >
            <div className="w-full md:w-1/2">
              <SquareContainer flip>
                <Image
                  src={`/images/service/szajhigenia-gyerekek.jpg`}
                  width={1200}
                  height={707}
                  alt={`Szajhigénia fontos a gyerekeknek`}
                  className="w-full max-h-[500px] object-cover"
                />
              </SquareContainer>
            </div>
            <div className="flex flex-col items-start w-full md:w-3/4 md:ps-10">
            <h3 className="text-xl font-semibold font-merrieweather">
              A megelőzés az első lépés - barázdazárás, tanácsadás, ellenőrzés
            </h3>
            <ul className="list-none py-6 space-y-3">
              <li className="flex gap-2">
                <span>✅</span>
                <span>
                  <strong>Barázdazárás Győr közelében</strong> - fájdalommentes,
                  gyors beavatkozás, amely segít megelőzni a rágófogak
                  szuvasodását.
                </span>
              </li>
              <li className="flex gap-2">
                <span>✅</span>
                <span>
                  <strong>Rendszeres kontrollvizsgálatok</strong> - hogy időben
                  észrevegyük az elváltozásokat.
                </span>
              </li>
              <li className="flex gap-2">
                <span>✅</span>
                <span>
                  <strong>Gyermekre szabott szájhigiéniás tanácsadás</strong> -
                  játékosan, érthetően.
                </span>
              </li>
              <li className="flex gap-2">
                <span>✅</span>
                <span>
                  <strong>Tanítás, nem fenyítés</strong> - nálunk nincs szidás,
                  csak biztatás és pozitív visszacsatolás.
                </span>
              </li>
            </ul>
            </div>
          </article>
        </div>
 

        {/* Szülőkkel együtt */}
        <article
          id="szulokkel-egyutt"
          className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0 scroll-mt-32"
        >
          <h3 className="text-xl font-semibold mt-2 font-merrieweather">
            Együtt a szülőkkel - bizalom, közös döntések
          </h3>
          <p className="py-6">
            Számunkra a szülők is partnerek: minden lépést egyeztetünk,
            elmagyarázunk, és együtt döntünk arról, mi a legjobb megoldás.
            Nálunk nincsenek meglepetések - csak átlátható, őszinte
            kommunikáció, gyerek- és szülőbarát hozzáállással.
          </p>
        </article>

        {/* Lokáció és előnyök */}
        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article
            id="helyszin"
            className="w-full max-w-5xl flex flex-col items-start scroll-mt-32"
          >
            <h3 className="text-xl font-semibold font-merrieweather">
              Gyermekfogászat Győr mellett - várunk szeretettel Győrújbarátban
            </h3>
            <p className="py-6">
              Ha gyerekbarát, türelmes és valóban szakértő fogorvost keresel a
              környéken, várunk szeretettel rendelőnkben!
            </p>
            <ul className="list-none space-y-2">
              <li className="flex gap-2">
                <span>✅</span>
                <span>Könnyű parkolás</span>
              </li>
              <li className="flex gap-2">
                <span>✅</span>
                <span>Rugalmas időpontok</span>
              </li>
              <li className="flex gap-2">
                <span>✅</span>
                <span>Családias, nyugodt hangulat</span>
              </li>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <article className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0">
          <h3 className="text-xl font-semibold my-6 font-merrieweather">
            Foglalj időpontot most - mert a gyerekmosoly a legfontosabb
          </h3>
          <p>
            Hill Medical - ahol a fogorvostól nem félni, hanem mosolyogni jönnek
            a gyerekek.
          </p>
          <Link href={"/#kapcsolat"} className="my-6 w-full flex justify-end">
            <SquareButton
              label="Online bejelentkezés"
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
  );
}
