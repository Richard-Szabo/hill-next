import SquareButton from "@/components/Shared/Basic/SquareButton";
import SquareContainer from "@/components/Shared/Basic/SquareContainer";
import Image from "next/image";
import Link from "next/link";

export default function DigitalisTechnologiak() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className={`relative w-full`}>
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/digitalis-technologiak-hero.jpg`}
            width={1000}
            height={649}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Digitális fogászati technológia"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8">
          <h1 className="font-merrieweather text-4xl text-white font-bold">
            Digitális technológiák
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/digitalis-technologiak-hero.jpg`}
              width={1000}
              height={649}
              alt={`Digitális fogászati technológia`} 
              className="w-full md:w-[700px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            Modern technológiák a precizitás és kényelem jegyében
          </h1>
          <p>
            A legújabb fogászati technológiák alkalmazásával célunk, hogy pácienseink számára maximálisan precíz és kényelmes kezeléseket biztosítsunk. Modern eszközparkunkban megtalálható az orálszkenner, a soft lézer és számos egyéb digitális eszköz, amelyek segítségével fájdalommentes, biztonságos és professzionális kezelést nyújtunk. Az innovatív eljárásoknak köszönhetően pácienseink teljes biztonságban érezhetik magukat a kezelések alatt.
          </p>
        </article>

        <div id="oral-scan" className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article  className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold font-merrieweather">
              Oral Scan – Digitális lenyomatvétel a kényelemért
            </h2>
            <p className="py-6">
              Az Oral Scan technológia lehetővé teszi, hogy a hagyományos, kellemetlen lenyomatvétel helyett gyors, pontos és kényelmes digitális lenyomatot készítsünk pácienseinkről. Az orálkamera segítségével néhány perc alatt, érintkezésmentesen tudjuk rögzíteni a fogak és az állkapocs pontos anatómiáját.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ideális fogszabályozás és fogpótlás tervezéshez</li>
              <li>Gyermekek és felnőttek számára egyaránt alkalmazható</li>
              <li>Gyors, pontos és fájdalommentes eljárás</li>
            </ul>
          </article>
        </div>

        <article id="cbct" className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0">
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">
            3D CBCT – A modern diagnosztika alapja
          </h2>
          <p className="py-6">
            A fogászati 3D CBCT felvételek nélkülözhetetlenek a precíz diagnosztikához és tervezéshez. Ez a technológia lehetővé teszi, hogy háromdimenziós képen elemezzük az állkapcsok állapotát, így a legapróbb elváltozások is észlelhetővé válnak.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Implantációs kezelések pontos tervezése</li>
            <li>Góckutatás rejtett gyulladások feltérképezésére</li>
            <li>Alacsony sugárterhelés – célzott felvétel kizárólag az állkapocs területéről</li>
          </ul>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6 font-merrieweather">
              További modern technológiák
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Soft lézer – gyulladáscsökkentés és sebgyógyulás támogatása</li>
              <li>Gépi gyökérkezelés – gyorsabb, pontosabb és hatékonyabb beavatkozás</li>
              <li>EMS technológia – fájdalommentes biofilm és fogkő eltávolítás</li>
            </ul>
            <p className="mt-4">
              Ha szeretnéd megtapasztalni a modern fogászati technológiák előnyeit, foglalj időpontot konzultációra! Tapasztalt szakembereink segítenek a számodra legmegfelelőbb megoldás kiválasztásában, legyen szó digitális lenyomatvételről, 3D diagnosztikáról vagy fájdalommentes kezelésekről.
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
  );
}