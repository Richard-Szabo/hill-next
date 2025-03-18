"use client";

import { SliderItemProps } from "@/data/Static/sliderdata";
import dynamic from "next/dynamic";

// Lazy load HeroSlider for better performance
const HeroSlider = dynamic(() => import("./HeroSlider"), {
  ssr: false,
  loading: () => <div className="h-[40rem] w-full bg-gray-200 animate-pulse"></div>, // Skeleton placeholder
});

export default function HeroSliderWrapper({ data, time }: { data: SliderItemProps[]; time: number }) {
  return <HeroSlider data={data} time={time} />;
}
