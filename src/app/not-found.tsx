import SquareContainer from "@/components/Shared/Basic/SquareContainer";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <section className="relative w-full">
        <div className="w-full bg-gray-500 h-[24rem] md:h-[28rem]">
          <Image
            src={`/images/rendelo.jpg`}
            width={1500}
            height={1000}
            className="blur-sm opacity-50 object-cover w-full max-h-full h-[24rem] md:h-[32rem]"
            alt="Esztétikus fogászat"
          />
        </div>
        <div className="w-full absolute top-0 left-1/2 -translate-x-1/2 pt-8 flex flex-col justify-center items-center">
          <h1 className="font-merrieweather text-2xl text-white font-bold text-center">
            Sajnáljuk
          </h1>
          <span className="text-3xl text-white">404</span>
          <h1 className="font-merrieweather text-2xl text-white font-bold text-center">
            A keresett oldal nem található!
          </h1>
        </div>
        <div className="absolute w-full top-2/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-30 flex justify-center items-center gap-6 px-3 md:px-[40px] flex-col lg:flex-row">
          <SquareContainer>
            <Image
              src={`/images/rendelo.jpg`}
              width={1500}
              height={1000}
              alt="Esztétikus fogászat illusztráció"
              className="w-full md:w-[700px] max-h-[400px] object-cover"
            />
          </SquareContainer>
        </div>
        <div className="min-h-16 md:min-h-40"></div>
      </section>
    </div>
  );
}
