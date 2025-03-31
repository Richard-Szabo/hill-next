"use client";
import { ServicesSliderItemProps } from "@/data/Static/sliderdata";
import dynamic from "next/dynamic";
import ServicesMobileItem from "./ServicesMobileItem";
import { IconType } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import FogszabalyzasIcon from "@/components/Shared/Icons/FogszabalyzasIcon";
import InybetegsegIcon from "@/components/Shared/Icons/InybetegsegIcon";
import SurgossegiIcon from "@/components/Shared/Icons/SurgossegiIcon";
import MegelozesIcon from "@/components/Shared/Icons/MegelozesIcon";
import FogpotlasIcon from "@/components/Shared/Icons/FogpotlasIcon";


const iconMap: Record<string, IconType> = {
  AiFillStar,
  FogszabalyzasIcon,
  InybetegsegIcon,
  SurgossegiIcon,
  MegelozesIcon,
  FogpotlasIcon
}

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
    <section className="flex w-full flex-col-reverse md:flex-col justify-start items-center  pb-6 md:pb-20 gap-4">
      {/* Static Text */}
      <div className="w-full max-w-7xl px-2 md:px-4 flex flex-col justify-center items-center font-karla text-hill-primary gap-3 md:gap-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center ">
          Bízd a mosolyod a szakorvosainkra!
        </h1>
        <p className="font-light text-sm md:text-2xl text-center font-merrieweather tracking-wider py-3 md:py-6 leading-7 md:leading-10">
          A legmodernebb fogászati technológiákat alkalmazzuk, hogy a
          legkorszerűbb és leghatékonyabb kezeléseket nyújthassuk Neked.
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
             <ServicesMobileItem key={index} label={item.highlightText} to={item.link ?? "#"} icon={iconMap[item.icon] ?? AiFillStar} />
            );
          })}
      </div>
      
    </section>
  );
}
