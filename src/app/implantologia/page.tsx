import SquareButton from "@/components/Shared/Basic/SquareButton"
import SquareContainer from "@/components/Shared/Basic/SquareContainer"
import Image from "next/image"
import Link from "next/link"

export default function Implantologia() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className="relative w-full">
        <div className="w-full bg-gray-500 h-[18rem] md:h-[28rem]">
          <Image
            src={`/images/service/implantologia-hero.jpg`}
            width={1500}
            height={1000}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
            alt="Fogászati implantátum Hill Medical"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-8 w-full text-center">
          <h1 className="font-merrieweather text-2xl md:text-4xl text-white font-bold">
            Fogászati implantátum
          </h1>
        </div>
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/service/implantologia-hero.jpg`}
              width={1500}
              height={1000}
              alt="Fogászati implantáció Hill Medical"
              className="w-full md:w-[800px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>

      <section className="w-full text-justify font-karla flex flex-col items-center">
        <article className="w-full max-w-5xl text-left flex flex-col items-start py-8 px-3 md:px-0">
          <h1 className="text-2xl font-bold mb-4 font-merrieweather">
            Fogászati implantátum – Életre szóló megoldás
          </h1>
          <h2 className="text-xl font-semibold mt-4 font-merrieweather">Miért válaszd a fogászati implantátumot?</h2>
          <p className="mt-4">
            Ha fogimplantátum beültetésén gondolkodsz, érdemes olyan rendelőt választanod, ahol a szakértelem,
            precizitás és a csúcsminőségű implantátumok garantáltak. Győr mellett, a Hill Medical rendelőjében
            mindezeket biztosítjuk számodra.
          </p>
          <p className="mt-4">
            Szakmai hátterünket Dr. Nyárádi Zoltán PhD biztosítja, aki arc-, állcsont- és dento-alveoláris
            szájsebészként világszerte elismert szakember. A doktor úr kizárólag prémium implantációs rendszerekkel
            dolgozik, például Nobel, Bredent és IBS rendszerekkel.
          </p>
          <p className="mt-4">
            Egy fogászati implantátum életre szóló befektetés, amely lehetőséget nyújt akár egyetlen fog pótlására,
            akár teljes állcsont rehabilitációjára az All-on-4 technológiával.
          </p>
        </article>

        <div id="x-guide" className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0 scroll-mt-32">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold font-merrieweather">X-Guide – Precizitás a legmodernebb technológiával</h2>
            <p className="py-6">
              Az X-Guide egy speciális, GPS-alapú navigációs rendszer, amely élőben követi a fogorvos implantációs
              műszerének mozgását a beavatkozás során. Ez lehetővé teszi, hogy az implantátum pontosan az előre
              megtervezett helyre kerüljön a páciens állcsontjában.
            </p>
            <p>
              A beavatkozás előtt CB-CT és orál-szkenner segítségével részletes tervet készítünk, így az X-Guide
              biztosítja, hogy az implantátum a lehető legbiztonságosabb és legprecízebb módon kerüljön beültetésre.
            </p>
            <p className="mt-4">
              Előnyei: minimális komplikációs kockázat, gyorsabb gyógyulás, kevesebb fájdalom, magasabb sikerességi arány.
            </p>
          </article>
        </div>

        <article id="metszesnelkuli-implantacio" className="w-full max-w-5xl flex flex-col items-start py-8 px-3 md:px-0 scroll-mt-32">
          <h2 className="text-xl font-semibold mt-6 font-merrieweather">Minimál invazív implantációs eljárások</h2>
          <p className="py-6">
            A modern technológiának köszönhetően sok esetben nincs szükség nagy kiterjedésű csontpótlásra, ha megfelelő
            technikával dolgozunk. Szájsebész szakorvosunk a lehető legkisebb metszésekkel végzi a beavatkozásokat – sőt,
            bizonyos esetekben akár varratok nélkül is.
          </p>
          <p>
            Ennek köszönhetően a műtét gyors, fájdalommentes, és pácienseink már másnap mosolyogva érkezhetnek a
            kontrollvizsgálatra.
          </p>
        </article>

        <div className="w-full flex justify-center bg-hill-bg py-8 px-3 md:px-0">
          <article className="w-full max-w-5xl flex flex-col items-start">
            <h2 className="text-xl font-semibold my-6 font-merrieweather">Jelentkezz be konzultációra!</h2>
            <p>
              Ha számodra is fontos a szakértelem és a prémium minőségű implantátumok, kérj egyedi árajánlatot és
              konzultációs időpontot rendelőnkben!
            </p>
            <p className="mt-4">
              Segítünk, hogy újra magabiztosan mosolyoghass!
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
