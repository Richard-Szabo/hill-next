import Link from "next/link";
import { IconType } from "react-icons";

export interface ServicesMobileItemProps {
  label: string;
  to: string;
  icon: IconType
}



export default function ServicesMobileItem({label, to, icon: Icon}: ServicesMobileItemProps) {
  return (
    <button className="w-full">
        <Link href={to} className="relative w-full flex justify-between items-center px-[6px] py-[4px] group cursor-pointer hover:bg-hill-primary rounded-lg">
      <div className="absolute top-0 left-0 border-t-[2px] border-l-[2px]  border-hill-primary group-hover:border-hill-secondary w-2/3 h-1/2 group-hover:w-full group-hover:h-full transition-all duration-300 rounded-tl-lg group-hover:rounded-lg"></div>
      <div className="absolute bottom-0 right-0 border-b-[2px] border-r-[2px]  border-hill-primary group-hover:border-hill-secondary w-2/3 h-1/2 group-hover:w-full group-hover:h-full transition-all duration-300 rounded-br-lg group-hover:rounded-lg"></div>
      <div className="w-1/4 flex justify-center ps-4">
        <Icon
          size={45}
          className="text-hill-secondary group-hover:text-white transition-all duration-500"
        />
      </div>
      <div className="grow flex justify-end pe-4 text-xl font-bold text-hill-primary group-hover:text-white transition-all duration-500">
        {label}
      </div>
    </Link>
    </button>
  );
}
