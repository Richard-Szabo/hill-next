import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full overflow-x-hidden flex justify-center items-center md:items-start pb-20">
      <div className="w-full max-w-6xl px-4 flex flex-col justify-center items-center font-hill2 gap-6">
        <h1 className="text-center text-4xl md:text-5xl text-hill-primary font-bold">
          Üdvözöljük a Hill Medicalnál
        </h1>

        <div className="relative w-full space-y-3 text-md md:text-lg text-justify font-hill">
          {/* Desktop image floated right */}
          <div className="hidden md:block float-right md:h-80 ml-2 mb-2 ">
            <Image
              src="/images/rendelo.jpg"
              alt="Hillmedical épülete"
              width={1000}
              height={667}
              priority
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Mobile image centered */}
          <div className="md:hidden w-full h-64 mx-auto">
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
            <li className="flex flex-col md:flex-row gap-2 items-start ms-3">
              <span className="font-bold">Fogászati implantátumok</span>
              <span>- Tartós és esztétikus megoldások foghiányra</span>
            </li>
            <li className="flex flex-col md:flex-row gap-2 items-start ms-3">
              <span className="font-bold">Fogpótlás és fémmentes cirkónium koronák</span>
              <span>- Természetes hatású, prémium minőség</span>
            </li>
            <li className="flex flex-col md:flex-row gap-2 items-start ms-3">
              <span className="font-bold">Esztétikai fogászat</span>
              <span>- Fehér tömések, fogfehérítés, mosolytervezés</span>
            </li>
            <li className="flex flex-col md:flex-row gap-2 items-start ms-3">
              <span className="font-bold">Fogszabályozás gyermekeknek és felnőtteknek</span>
              <span>- A szép mosolyért</span>
            </li>
            <li className="flex flex-col md:flex-row gap-2 items-start ms-3">
              <span className="font-bold">Sürgősségi fogászati ellátás</span>
              <span>- Gyors segítség fájdalom vagy sérülés esetén</span>
            </li>
          </ul>

          <p className="leading-6 md:leading-8">
            Nálunk a szakértelem, türelem és megbízhatóság az alapértékek közé tartoznak, mert tudjuk, hogy a tökéletes mosolyhoz nemcsak kiváló technológia, hanem emberközpontú hozzáállás is szükséges.
          </p>

          <p className="leading-6 md:leading-8">
            Keress minket Győrújbaráton, pár percre Győrtől! Foglalj időpontot még ma!
          </p>
        </div>
      </div>
    </section>
  );
}
