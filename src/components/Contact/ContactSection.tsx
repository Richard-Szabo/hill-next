import dynamic from "next/dynamic";
import Image from "next/image";


const ContactClient = dynamic(() => import("./ContactClient"), {
  loading: () => <div className="h-[40rem] w-full bg-gray-200 animate-pulse"></div>, // Skeleton placeholder
});


export default function ContactSection() {
  return (
    <section
      id="kapcsolat"
      className="w-full flex flex-col justify-start items-center py-14 lg:py-20"
    >
      <div className="w-full max-w-7xl px-2 lg:px-4 flex flex-col justify-center items-center gap-6 lg:gap-10">
        <h1 className="font-karla text-2xl lg:text-5xl font-bold text-hill-primary text-center">
          Lépjen kapcsolatba velünk még ma!
        </h1>
        <p className="font-merrieweather text-md lg:text-2xl text-center font-light text-hill-primary leading-7 lg:leading-10">
          Arra bátorítjuk Önt, hogy vegye fel velünk a kapcsolatot, amennyiben
          érdeklődik valamelyik általunk kínált fogászati eljárás vagy
          szolgáltatás iránt.
        </p>

        <div className="relative w-full justify-center items-center lg:p-[8px]">
          <Image src="/images/office.jpg" alt="" width={1500} height={1000} />
          <div className="absolute bottom-0 left-0 w-3/4 h-3/4 border-b-[8px] border-l-[8px] border-hill-primary"></div>
          <div className="absolute top-0 right-0 w-3/4 h-3/4 border-t-[8px] border-r-[8px] border-hill-primary"></div>
                    
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 lg:px-36 flex flex-col items-center justify-center w-full overflow-hidden">
          <ContactClient />
          </div>
        </div>

        <div className="lg:hidden w-full h-[30rem] lg:h-[22rem]"></div>
      </div>
    </section>
  );
}
