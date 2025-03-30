"use client";

import { SliderItemProps } from "@/data/Static/sliderdata";
import dynamic from "next/dynamic";
import HeroSliderItem from "./HeroSliderItem";
import { HeroSliderData } from "@/data/Static/sliderdata";

// Lazy load HeroSlider for better performance
const HeroSlider = dynamic(() => import("./HeroSlider"), {
  ssr: false,
  loading: () => <HeroSliderItem  item={HeroSliderData[0]}></HeroSliderItem>, // Skeleton placeholder
});

export default function HeroSliderWrapper({ data, time }: { data: SliderItemProps[]; time: number }) {
  return <HeroSlider data={data} time={time} />;
}
