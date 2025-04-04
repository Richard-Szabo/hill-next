import SquareButton from "@/components/Shared/Basic/SquareButton";
import SquareContainer from "@/components/Shared/Basic/SquareContainer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className={`relative w-full`}>
        <div className="w-full  bg-gray-500 h-[18rem] md:h-[32rem]">
          <Image
            src={`/images/about.jpg`}
            width={1200}
            height={800}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Családi rendelő Győrújbarát"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8 ">
          <h1 className="font-merrieweather text-4xl text-white font-bold">
            Rólunk
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3  z-30 flex justify-center items-center gap-6  px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/about.jpg`}
              width={1200}
              height={800}
              alt={`Családi rendelő Győrújbarát`}
              className="w-full md:w-[800px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>
      {/* About us */}
      <section className="w-full flex flex-col-reverse md:flex-row items-start gap-10 md:gap-[60px] justify-center  max-w-6xl py-4 md:py-10 px-2 md:px-0">
        <div className="w-full md:w-1/2">
          <SquareContainer>
            <Image
              src={`/images/office-1.jpg`}
              width={1200}
              height={800}
              alt={`Családi fogorvosi rendelő Győrújbaráton`}
              className="w-full object-cover"
            />
          </SquareContainer>
        </div>
        <div className="w-full md:w-1/2 ">
          <h1 className="font-karla text-2xl md:text-3xl text-hill-primary py-6">
            Rendelőnkről
          </h1>
          <p className="font-merrieweather text-sm md:text-md leading-7 md:leading-8 text-[#353535]">
            Rendelőnk Győrújbarát központi részén található, amely nemcsak a
            település szívében helyezkedik el, hanem könnyedén megközelíthető
            mind autóval, mind tömegközlekedéssel. Az épület elhelyezkedése
            révén a környező utcákból és távolabbi pontokról érkezők számára is
            egyszerűen megtalálható. Ügyfeleink kényelme érdekében a rendelő
            közvetlen közelében mindig biztosított a parkolási lehetőség, így
            akár a forgalmasabb időszakokban is problémamentesen hagyhatják
            autójukat a rendelő mellett vagy annak közvetlen környezetében.
          </p>
        </div>
      </section>
      {/* Patient fokusz  */}
      <section className="w-full flex flex-col-reverse md:flex-row-reverse items-start gap-10 md:gap-[60px] justify-center  max-w-6xl py-4 md:py-10 px-2 md:px-0">
        <div className="w-full md:w-1/2">
          <SquareContainer flip>
            <Image
              src={`/images/patient.jpg`}
              width={1200}
              height={1800}
              alt={`image`}
              className="w-full max-h-[600px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start ">
          <h1 className="font-karla text-2xl md:text-3xl text-hill-primary py-6">
            Páciensekre fókuszálva
          </h1>
          <p className="font-merrieweather text-sm md:text-md leading-7 md:leading-8 text-[#353535]">
            Elkötelezett egészségügyi szolgáltatóként hisszük, hogy a páciensek
            oktatása elengedhetetlen a jó szájhigiénia fenntartásához. A Hill
            Medical-nál időt szánunk arra, hogy pácienseinknek megadjuk a
            szükséges információkat és forrásokat, amelyekkel mosolyukat kiváló
            állapotban tarthatják. Bízhat abban, hogy rendelőnk a megfelelő
            útmutatást és a legjobb kezelési lehetőségeket nyújtja az Ön mosolya
            érdekében.
          </p>
        </div>
      </section>
      <section className="flex flex-row justify-center items-center w-full  py-10 bg-hill-bg">
        <div className="w-full max-w-6xl flex justify-center flex-col items-center text-center">
          <h1 className="w-full font-karla text-3xl text-hill-primary py-2">
            Fizetési lehetőségek
          </h1>
          <p className="w-full text-justify md:text-center  font-merrieweather text-sm md:text-md leading-7 md:leading-8 text-hill-primary py-2 px-4 md:px-0">
            Lehetőség van bankkártyás fizetésre, amely magában foglalja a
            legtöbb elterjedt kártyatípust, valamint készpénzes fizetést is
            elfogadunk. Ezen felül, hogy még rugalmasabb megoldásokat kínáljunk,
            egészségpénztári kártyával történő fizetésre is van mód, így
            pácienseink az egészségük megőrzésére szánt keretüket is könnyedén
            felhasználhatják szolgáltatásainkra.
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row gap-10 md:gap-[60px] justify-center w-full max-w-6xl py-4 md:py-10 px-2 md:px-0">
        <div className="w-full md:w-1/2">
          <SquareContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.5506605322184!2d17.634355476716916!3d47.61218338759147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bc1fd5e3a987f%3A0x56632faee4f8d39b!2sHill%20Medical%20-%20fogorvosi%20rendel%C5%91!5e1!3m2!1shu!2shu!4v1735291449626!5m2!1shu!2shu"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] z-20 relative"
            ></iframe>
          </SquareContainer>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="w-full flex flex-col justify-center items-start">
            <h1 className="font-karla text-2xl  text-hill-primary pb-4">
              Elérhetőségünk
            </h1>
            <div className="w-full flex flex-col font-medium font-merrieweather text-md gap-2 text-center md:text-left">
              <a
                href="#"
                target="_blank"
                className="hover:text-hill-secondary cursor-pointer flex gap-2 w-full justify-center md:justify-start"
              >
                <h2>9081 Győrújbarát,</h2>
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
          <div className="w-full flex flex-col items-center md:items-start gap-3">
            <h1 className="font-karla text-xl md:text-2xl text-hill-primary ">
              Nyitvatartás
            </h1>
            <div className="w-full px-6 md:px-0 flex flex-col font-medium font-merrieweather text-md">
              <div className="w-full flex justify-between items-center">
                <p>Hétfő</p>
                <p>08:00 - 20:00</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>Kedd</p>
                <p>08:00 - 20:00</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>Szerda</p>
                <p>13:00 - 20:00</p>
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
                <p>Vasárnap</p>
                <p>Zárva</p>
              </div>
            </div>
          </div>
          <Link href={"/#kapcsolat"} className="w-full">
            <SquareButton
              label="Kapcsolatfelvétel"
              textColor="text-[#576d2c]"
              textHighlightColor="group-hover:text-white"
              borderColor="border-hill-primary"
              bgHighlightColor="group-hover:bg-hill-primary"
              className="h-12 w-full"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
