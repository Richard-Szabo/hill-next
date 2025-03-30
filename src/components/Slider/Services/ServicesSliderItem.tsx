"use client";
import { motion } from "framer-motion";
import { ServicesSliderItemProps } from "@/data/Static/sliderdata"; 
import { IoIosArrowDropright } from "react-icons/io";
import Image from "next/image";

interface ServiceSliderItemProps {
  item: ServicesSliderItemProps;
}

export default function ServicesSliderItem({
  item,
}: ServiceSliderItemProps) {
  return (
    <div className="px-6 basis-full  w-[400px] h-[480px] lg:w-[430px] lg:h-[520px] relative  pt-4">
      {/* Background Block */}
      <div className="relative w-full h-full p-[8px] ">
        
        <Image 
         src={`/images/service/${item.image}.${item.extension}`}
         className="h-full w-full object-cover"
         alt={`${item.highlightText} image`}
         loading="lazy"
         fill
        />
        <div className="absolute bottom-8 md:bottom-24 right-0 mr-[8px] flex flex-col items-end gap-3">
          <span className="font-bold tracking-wider font-karla md:text-2xl text-hill-primary bg-gray-300/80  px-6 py-2">
            {item.highlightText}
          </span>
          
          <motion.button className="md:hidden px-3 py-1 bg-hill-secondary rounded-xl text-white mr-3">Részletek</motion.button>
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-2/3 border-b-[8px] border-l-[8px] border-hill-primary"></div>
        <div className="absolute top-0 right-0 w-1/2 h-2/3 border-t-[8px] border-r-[8px] border-hill-primary"></div>
      </div>

      {/* Overlay */}
      <motion.div
        className="hidden md:flex absolute  py-[8px] px-[24px] top-2 left-0 w-full h-full bg-transparent flex-col items-start"
        initial="hidden"
        whileHover="visible"
        variants={{
          hidden: { opacity: 0, y: 100 }, // Early visibility with reduced offset
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              opacity: { duration: 0.3, ease: "easeOut" },
              y: { duration: 0.8, ease: "linear" },
            },
          },
        }}
      >
        {/* Mini Image */}
        <motion.img
          src={`/images/service/${item.imageMini}.${item.extensionMini}`}
          className="h-1/2 w-full object-cover"
          loading="lazy"
          alt={`${item.highlightText} image small`}
          variants={{
            hidden: { opacity: 0, y: 40 }, // Semi-visible initially
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        />

        {/* Content Overlay */}
        <motion.div
          className="flex bg-white h-1/2 w-full p-4 flex-col justify-start items-start font-karla space-y-8"
          variants={{
            hidden: { opacity: 0, y: 40 }, // Semi-visible with less offset
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <h1 className="text-2xl text-hill-primary font-bold">
            {item.highlightText}
          </h1>
          <p className="font-light text-lg text-left max-h-20 text-ellipsis overflow-hidden">
            {item.description}
          </p>
          <p className="font-light text-lg flex flex-row items-center gap-2 text-hill-highlight">
            Részletek <IoIosArrowDropright />
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
