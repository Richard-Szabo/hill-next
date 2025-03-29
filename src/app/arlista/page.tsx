import Image from "next/image";
import { prices } from "@/data/Static/price";
import PriceGroupItem from "@/components/Prices/PriceGroupItem";


export default function Prices() {
    return (
        <section className={`relative w-full  bg-white flex flex-col justify-start items-center`}>
          <div className="absolute -top-3 w-full h-[18rem] md:h-[32rem]">
            <Image
              src={`/images/about.jpg`}
              fill
              className="blur-xs opacity-70 object-cover w-full max-h-full h-[18rem] md:h-[32rem]"
              alt="Családi rendelő Győrújbarát"
            />
          </div>
          <div className="relative pt-6 text-center">
            <h1 className="font-merrieweather text-4xl md:text-5xl text-white font-bold text-shadow-lg ">
              Áraink
            </h1>
          </div>
          <div className="w-full max-w-7xl mt-10 md:mt-32 relative z-30 flex justify-center items-center gap-6  px-3 md:px-[40px] flex-col lg:flex-row">
            <div className="relative w-full  bg-white p-6 flex flex-wrap border rounded border-hill-secondary/20 mb-6 select-none">
             {prices && prices.map((item, index) =>{
              return <PriceGroupItem data={item} key={index}/>
             })}
            </div>
          </div>
        </section>
    )
}