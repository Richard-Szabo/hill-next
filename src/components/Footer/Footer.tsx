
import Link from "next/link";
import SquareButton from "../Shared/Basic/SquareButton"; 

export default function Footer() {

  return (
    <section className="w-full flex justify-center items-center py-10 md:py-20">
      <div className="w-full max-w-6xl flex justify-center items-center flex-col gap-6 px-1 md:px-0">
        <h1 className="font-karla text-2xl md:text-4xl font-medium text-hill-primary text-center">
          Kényelmesen megközelíthető, mindig elérhető
        </h1>
        <div className="w-full flex flex-col md:flex-row  md:justify-between items-start gap-4 md:gap-10">
          {/* Kapcsolatfelvétel */}
          <div className="w-full md:w-2/4 flex flex-col items-center md:items-start gap-10">
            <p className="font-merrieweather leading-8 md:px-2 text-md text-center md:text-left">
              Akár kérdése van rendelőnkkel kapcsolatban, akár konzultáció iránt
              érdeklődik, vagy időpontot szeretne foglalni, barátságos és
              hozzáértő csapatunk örömmel fogadja hívását.
            </p>
            <Link href="/#kapcsolat" >
              <SquareButton
                label="Kapcsolatfelvétel"
                textColor="text-[#576d2c]"
                textHighlightColor="group-hover:text-white"
                borderColor="border-hill-primary"
                bgHighlightColor="group-hover:bg-hill-primary"
                className="min-w-56 h-12"
              />
            </Link >
          </div>
          {/* Elérhetőségek */}
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
            <h1 className="font-merrieweather text-xl md:text-2xl text-hill-primary pb-4">
              Elérhetőségünk
            </h1>
            <div className="flex flex-col font-medium font-merrieweather text-md gap-2 text-center md:text-left">
              <a
                href="#"
                target="_blank"
                className="hover:text-hill-secondary cursor-pointer"
              >
                <h2>9081 Győrújbarát</h2>
                <h2>Dr. Baróti Lajos u. 14/A</h2>
              </a>
              <a
                href="tel:+36202972717"
                target="_blank"
                className="hover:text-hill-secondary cursor-pointer"
              >
                {" "}
                +36 20 297 2717
              </a>
              <a
                href="mailto:hillmedical.info@gmail.com"
                target="_blank"
                className="hover:text-hill-secondary cursor-pointer"
              >
                hillmedical.info@gmail.com
              </a>
            </div>
          </div>
          {/* Nyitvatartás */}
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-6">
            <h1 className="font-merrieweather text-xl md:text-2xl text-hill-primary ">
              Nyitvatartás
            </h1>
            <div className="w-full px-6 md:px-0 flex flex-col font-medium font-merrieweather text-md">
              <div className="w-full flex justify-between items-center">
                <p>Hétfő</p>
                <p>08:00 - 14:00</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>Kedd</p>
                <p>08:00 - 20:00</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>Szerda</p>
                <p>08:00 - 14:00</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>Csütörtök</p>
                <p>08:00 - 20:00</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>Péntek</p>
                <p>08:00 - 14:00</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>Szombat</p>
                <p>Zárva</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>Szombat</p>
                <p>Zárva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
