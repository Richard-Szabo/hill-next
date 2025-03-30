import Image from "next/image";
import { SliderItemProps } from "@/data/Static/sliderdata";
import SquareButton from "@/components/Shared/Basic/SquareButton";
import Link from "next/link";

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
      <div className="relative w-full h-[24rem] md:h-[40rem]">
        <Image
          src={`/images/hero/${item.image}.${item.extension}`}
          alt="Családi rendelő Győrújbarát"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-600/60 z-10" />
      </div>
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-30 flex justify-center items-center gap-6  px-3 md:px-[40px] flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center md:items-start justify-center flex-col gap-3 md:gap-6">
          <p className="text-center md:text-left text-2xl md:text-4xl text-white font-bold font-karla">
            {item.highlightText}
          </p>
          <p className="text-center md:text-left font-karla text-xl md:text-2xl text-white font-light">
            {item.description}
          </p>
          {item.link && (
            <Link href={item.link}>
              <SquareButton
                label="Tovább olvasok"
                borderSize="sm"
                bgHighlightColor="group-hover:bg-hill-primary"
              />
            </Link>
          )}
        </div>
        <div className="relative p-[10px]  ">
          <Image
            src={`/images/hero/${item.image}.${item.extension}`}
            width="850"
            height="550"
            priority
            className="w-full  min-h-60 max-w-[350px] md:max-w-[600px] lg:max-w-[850px]  lg:min-h-[530px] xl:h-[550px]  object-cover"
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
