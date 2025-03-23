import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Reviews(){
    return (
        <section className="w-full flex flex-col md:flex-row justify-stretch items-stretch bg-hill-bg  ">
        <div className="w-full md:w-1/2 flex items-center justify-between flex-col gap-6">
          <div className="w-full h-1/4 pt-10 flex items-center justify-center">
            <h1 className="font-hill2 font-bold text-2xl md:text-4xl text-hill-primary">
              Rólunk mondták
            </h1>
          </div>
          <div className="w-full h-2/4 px-3 md:px-20 text-center font-light font-hill text-md md:text-lg flex items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            labore, eum accusantium corrupti quod odio quasi dolorum quos
            sapiente magnam officiis vel blanditiis earum corporis dignissimos
            dolore quia excepturi asperiores!
          </div>
          <div className="w-full h-1/4 flex justify-center items-center gap-4">
            <div className="w-24 h-24">
              <div className="relative group m-5">
                <div className="relative text-hill-primary uppercase font-hill-eng flex items-center justify-center overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 w-2/3 h-1/2 border-t-2 border-l-2 border-hill-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-hill-primary"></div>
                  <div className="absolute bottom-0 right-0 w-2/3 h-1/2 border-b-2 border-r-2 border-hill-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-hill-primary"></div>
                  <div className="bg-transparent w-full flex justify-center items-center px-3 py-2 transition duration-300 ease-in-out  group-hover:bg-hill-primary group-hover:text-white ">
                    <IoIosArrowBack size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-24 h-24">
              <div className="relative group m-5">
                <div className="relative text-hill-primary uppercase font-hill-eng flex items-center justify-center overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 w-2/3 h-1/2 border-t-2 border-l-2 border-hill-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-hill-primary"></div>
                  <div className="absolute bottom-0 right-0 w-2/3 h-1/2 border-b-2 border-r-2 border-hill-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-hill-primary"></div>
                  <div className="bg-transparent w-full flex justify-center items-center px-3 py-2 transition duration-300 ease-in-out  group-hover:bg-hill-primary group-hover:text-white ">
                    <IoIosArrowForward size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex">
          <Image src="/images/family-reviews.jpg" className="h-full w-full object-cover" alt="review image" width={5900} height={3900} ></Image>
          <div className="absolute bottom-0 left-0 w-3/4 h-3/4 border-b-[8px] border-l-[8px] border-hill-primary"></div>
          <div className="absolute top-0 right-0 w-3/4 h-3/4 border-t-[8px] border-r-[8px] border-hill-primary"></div>
        </div>
      </section>
    )
}