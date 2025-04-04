import SquareButton from "@/components/Shared/Basic/SquareButton";
import Link from "next/link";


export default function Visszaigazolas() {
  return (
      <div className={`flex flex-col justify-center items-center w-full  bg-hill-bg py-10  h-[calc(100vh-64px)]`}>
        <div className="w-full pt-8 text-center">
          <h1 className="font-merrieweather text-2xl  font-bold">
            Köszönjük az üzeneteted, hamarosan felvesszük veled a kapcsolatot!
          </h1>
        </div>
        <div className="flex w-full justify-center items-center py-10">
        <Link href="/" className="my-6 w-full flex justify-center">
            <SquareButton
              label="Visszalépés a főoldalra!"
              textColor="text-[#576d2c]"
              textHighlightColor="group-hover:text-white"
              borderColor="border-hill-primary"
              bgHighlightColor="group-hover:bg-hill-primary"
              className="h-12 w-fit"
            />
          </Link>
        </div>
      </div>
  );
}
