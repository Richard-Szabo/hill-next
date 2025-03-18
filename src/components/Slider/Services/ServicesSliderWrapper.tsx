"use client";
import { ServicesSliderItemProps } from "@/data/Static/sliderdata";
import { AiFillStar } from "react-icons/ai";
import dynamic from "next/dynamic";

const ServicesSlider = dynamic(() => import("./ServicesSlider"), {
  ssr: false,
  loading: () => <div className="h-[558px] w-full bg-gray-200 animate-pulse"></div>, // Skeleton placeholder
});

export default function ServicesSliderWrapper({
  data,
}: {
  data: ServicesSliderItemProps[];
}) {
  return (
    <section className="flex w-full flex-col justify-start items-center bg-hill-bg py-14 md:py-20 gap-4">
      {/* Static Text */}
      <div className="w-full max-w-7xl px-2 md:px-4 flex flex-col justify-center items-center font-hill2 text-hill-primary gap-3 md:gap-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center ">
          Ön a legjobb kezekben lesz nálunk
        </h1>
        <p className="font-light texl-lg md:text-2xl text-center font-hill tracking-wider py-3 md:py-6 leading-7 md:leading-10">
          A legmodernebb fogászati technológiákat alkalmazzuk, hogy a
          legkorszerűbb és leghatékonyabb kezeléseket nyújthassuk Önnek.
        </p>
      </div>

      {/*  Layout */}
      <div className="hidden md:flex relative overflow-hidden max-w-full mx-auto ">
        <ServicesSlider data={data} />
      </div>
      <div className="flex md:hidden relative w-full justify-center items-center flex-col gap-2 px-4">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="relative w-full sm:w-auto pl-16 pr-8 py-3 text-lg font-bold text-white rounded-full 
                bg-gradient-to-br from-hill-primary via-hill-primary/80 to-hill-primary/40
                hover:from-hill-secondary  hover:to-hill-primary
                shadow-lg transform transition-all duration-300 
                active:scale-95 focus:ring-4 focus:ring-hill-highlight
                focus:outline-none flex items-center"
              >
                <div className="absolute -left-2 w-14 h-14  bg-hill-secondary rounded-full flex items-center justify-center shadow-md">
                  <AiFillStar className="text-white text-2xl h-full" />
                </div>
                {item.highlightText}
              </div>
            );
          })}
      </div>
      
    </section>
  );
}
