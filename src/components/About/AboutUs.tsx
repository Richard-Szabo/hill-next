import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full overflow-x-hidden flex justify-center items-center md:items-start py-10 md:py-16 bg-hill-bg">
      <div className="w-full max-w-6xl px-4 flex flex-col justify-center items-center font-karla gap-6">
        <h1 className="text-center text-2xl md:text-5xl text-hill-primary font-bold">
        Minőségi egészségügyi megoldások!
        </h1>

        <div className="relative w-full space-y-3 text-md md:text-lg text-justify font-merrieweather">
          {/* Desktop image floated right */}
          <div className="hidden lg:block float-right h-60 lg:h-80 ml-8 lg:w-[28rem]">
            <Image
              src="/images/rendelo.jpg"
              alt="Hillmedical épülete"
              width={1000}
              height={667}
              priority
              className="rounded-lg object-cover w-full h-full ml-8"
            />
          </div>

          {/* Mobile image centered */}
          <div className="lg:hidden w-full h-64 mx-auto">
            <Image
              src="/images/rendelo.jpg"
              alt="Hillmedical épülete"
              width={1000}
              height={667}
              priority
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <p className="leading-6 md:leading-8">
            A Hill Medical fogorvosi rendelő Győrújbaráton, Győr mellett kínál magas színvonalú magán fogászati ellátást. Szakértő fogszakorvosaink, dentálhigiénikusaink és asszisztenseink csapatmunkájának köszönhetően pácienseink mindig biztonságban és jó kezekben érezhetik magukat.
          </p>

          <p className="leading-6 md:leading-8">
            Szolgáltatásaink között megtalálható:
          </p>

          <ul className="space-y-1">
            <li className="flex flex-col gap-2 items-start ms-3">
              <span className="font-bold">Fogászati implantátumok</span>
              <span className="ps-5">Tartós és esztétikus megoldások foghiányra</span>
            </li>
            <li className="flex flex-col gap-2 items-start ms-3">
              <span className="font-bold">Fogpótlás és fémmentes cirkónium koronák</span>
              <span className="ps-5"> Természetes hatású, prémium minőség</span>
            </li>
            <li className="flex flex-col  gap-2 items-start ms-3">
              <span className="font-bold">Esztétikai fogászat</span>
              <span className="ps-5">Fehér tömések, fogfehérítés, mosolytervezés</span>
            </li>
            <li className="flex flex-col  gap-2 items-start ms-3">
              <span className="font-bold">Fogszabályozás gyermekeknek és felnőtteknek</span>
              <span className="ps-5">A szép mosolyért</span>
            </li>
            <li className="flex flex-col  gap-2 items-start ms-3">
              <span className="font-bold">Sürgősségi fogászati ellátás</span>
              <span className="ps-5">Gyors segítség fájdalom vagy sérülés esetén</span>
            </li>
          </ul>

          <p className="leading-6 md:leading-8">
            Nálunk a szakértelem, türelem és megbízhatóság az alapértékek közé tartoznak, mert tudjuk, hogy a tökéletes mosolyhoz nemcsak kiváló technológia, hanem emberközpontú hozzáállás is szükséges.
          </p>

          <p className="leading-6 md:leading-8">
          Pácienseink nemcsak <strong>Győrből</strong> és <strong>Győrújbarátról</strong>, hanem a környező településekről is érkeznek hozzánk, például <strong>Eneséről</strong>, <strong>Csornáról</strong>, <strong>Pannonhalmáról</strong>, <strong>Lébényből</strong> és <strong>Komáromból</strong>. Modern rendelőnk könnyen megközelíthető autóval, így távolabbról érkező vendégeinknek is kényelmes választás.
          </p>
        </div>
      </div>
    </section>
  );
}
