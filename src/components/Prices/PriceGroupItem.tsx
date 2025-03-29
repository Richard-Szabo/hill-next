import { formatCurrency } from "@/app/utils/format";
import { PricesData } from "@/data/Static/price";

export default function PriceGroupItem({ data }: { data: PricesData }) {
    return (
      <div className="w-full md:w-1/2 px-1 md:px-6 pb-2 pt-6 md:pb-0 ">
        <h1 className="font-merrieweather font-bold text-lg truncate md:text-2xl text-hill-primary pb-3">
          {data.group_name}
        </h1>
        <div className="flex flex-col font-karla text-md md:text-lg gap-2">
          {data.items &&
            data.items.map((item, index) => {
              return (
                <div key={index} className="w-full flex justify-between">
                  <p className="flex flex-col w-2/4 md:w-fit"><span className="">{item.name}</span> <span className="font-light text-sm">{item.description}</span></p>
                  <p className="grow border-b border-dotted border-hill-primary/30 "></p>
                  <p className={`flex flex-col justify-end items-start w-2/5`}> {!item.priceMax && item.description && <span className="text-white">-</span>} <span>{formatCurrency(item.price)}</span> {item.priceMax && formatCurrency(item.priceMax)}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }