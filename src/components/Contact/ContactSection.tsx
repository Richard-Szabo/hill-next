import dynamic from "next/dynamic";
import Image from "next/image";


const ContactClient = dynamic(() => import("./ContactClient"), {
  loading: () => <div className="h-[40rem] w-full bg-gray-200 animate-pulse"></div>, // Skeleton placeholder
});


export default function ContactSection() {
  return (
    <section
      id="contact-form"
      className="w-full flex flex-col justify-start items-center py-14 md:py-20"
    >
      <div className="w-full max-w-7xl px-2 md:px-4 flex flex-col justify-center items-center gap-6 md:gap-10">
        <h1 className="font-hill2 text-2xl md:text-5xl font-bold text-hill-primary text-center">
          Lépjen kapcsolatba velünk még ma!
        </h1>
        <p className="font-hill text-md md:text-2xl text-center font-light text-hill-primary leading-7 md:leading-10">
          Arra bátorítjuk Önt, hogy vegye fel velünk a kapcsolatot, amennyiben
          érdeklődik valamelyik általunk kínált fogászati eljárás vagy
          szolgáltatás iránt.
        </p>

        <div className="relative w-full justify-center items-center md:p-[8px]">
          <Image src="/images/office.jpg" alt="" width={5040} height={3310} />
          <div className="absolute bottom-0 left-0 w-3/4 h-3/4 border-b-[8px] border-l-[8px] border-hill-primary"></div>
          <div className="absolute top-0 right-0 w-3/4 h-3/4 border-t-[8px] border-r-[8px] border-hill-primary"></div>
                    
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 md:px-36 flex flex-col items-center justify-center w-full overflow-hidden">
          <ContactClient />
          </div>
        </div>

        <div className="md:hidden w-full h-[30rem] md:h-[22rem]"></div>
      </div>
    </section>
  );
}
