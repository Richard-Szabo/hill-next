"use client";

import HeroSliderItem from "./HeroSliderItem";
import { SliderItemProps } from "@/data/Static/sliderdata";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="hidden md:flex absolute right-0 top-0 h-[40rem] hover:bg-gray-800/20 w-10 z-20 group cursor-pointer justify-center items-center"
    onClick={onClick}
  >
    <button
      className=" text-hill-primary group-hover:text-hill-secondary "
      aria-label="Previous"
    >
      <FaChevronRight className="w-6 h-6" />
    </button>
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="hidden md:flex absolute left-0 top-0 h-[40rem] hover:bg-gray-800/20 w-10 z-20 group cursor-pointer justify-center items-center"
    onClick={onClick}
  >
    <button
      className=" text-hill-primary group-hover:text-hill-secondary "
      aria-label="Previous"
    >
      <FaChevronLeft className="w-6 h-6" />
    </button>
  </div>
);

export default function HeroSlider({
  data,
  time = 5000,
}: {
  data: SliderItemProps[];
  time?: number;
}) {
  // Framer Motion Variants
  const settings: Settings = {
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    swipeToSlide: false, // Enables swipe-to-slide functionality
    centerMode: false,
    initialSlide: 0, // Set the starting slide index
    autoplay: true,
    lazyLoad: "progressive",
    autoplaySpeed: time,
    pauseOnHover: false,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-600"></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "0%",
          height: "50px",
          transform: "translateX(-50%), translateY(-50%)",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {dots}
      </div>
    ),
  };

  return (
    <div className="relative max-w-full mx-auto overflow-hidden ">
      <div className="carousel-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="">
              <HeroSliderItem item={item} className="w-full shrink-0" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
