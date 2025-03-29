import { ReactNode } from "react";

interface SquareContainerProps {
  flip?: boolean;
  children?: ReactNode;
}

export default function SquareContainer({
  flip = false,
  children,
}: SquareContainerProps) {
  const borderTopClass = flip
    ? "right-0 border-r-[8px]"
    : "left-0 border-l-[8px]";
  const borderBottomClass = flip
    ? "left-0 border-l-[8px]"
    : "right-0 border-r-[8px]";

  return (
    <div className="relative  p-[8px]">
      {children}
      <div
        className={`absolute bottom-0 ${borderBottomClass} w-2/3 h-1/2 border-b-[8px] border-hill-primary`}
      ></div>
      <div
        className={`absolute top-0 ${borderTopClass} w-2/3 h-1/2 border-t-[8px]  border-hill-primary`}
      ></div>
    </div>
  );
}
