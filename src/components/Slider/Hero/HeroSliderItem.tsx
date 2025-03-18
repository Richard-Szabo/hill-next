import Image from "next/image";
import { SliderItemProps } from "@/data/Static/sliderdata"; 

interface SliderItemComponentProps {
  item: SliderItemProps;
  className?: string;
}

export default function HeroSliderItem({
  item,
  className,
}: SliderItemComponentProps) {
  return (
    <section className={`relative ${className} `}>
      <div className="relative w-full bg-gray-500 h-[24rem] md:h-[40rem]">
        <Image
          src={`/images/hero/${item.image}.${item.extension}`}
          fill
          className="blur-sm opacity-20 object-cover w-full h-full"
          priority
          alt="Családi rendelő Győrújbarát"
        />
      </div>
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-30 flex justify-center items-center gap-6  px-3 md:px-[40px] flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center md:items-start justify-center flex-col gap-6">
          <p className="text-center md:text-left text-3xl md:text-4xl text-white font-bold font-hill2">
            {item.highlightText}
          </p>
          <p className="text-center md:text-left font-hill2 text-xl md:text-2xl text-white font-light">
            {item.description}
          </p>
          <div>
            {/* <SquareButton  label="Új páciensek" borderSize="sm" bgHighlightColor="group-hover:bg-hill-primary" /> */}
          </div>
        </div>
        <div className="relative p-[10px]  ">
          <Image
            src={`/images/hero/${item.image}.${item.extension}`}
            width='850'
            height='550'
            priority
            className="w-full  min-h-60 max-w-[850px] xl:h-[550px] lg:min-h-[530px] object-cover"
            alt="Családi rendelő Győrújbarát"
            
          />
          <div className="absolute bottom-0 left-0 w-2/3 h-1/2 border-b-[10px] border-l-[10px] border-hill-primary"></div>
          <div className="absolute top-0 right-0 w-2/3 h-1/2 border-t-[10px] border-r-[10px] border-hill-primary"></div>
        </div>
      </div>
      <div className="min-h-40"></div>
    </section>
  );
}
