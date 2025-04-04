"use client";
import { ServicesSliderItemProps } from "@/data/Static/sliderdata";
import ServicesSliderItem from "./ServicesSliderItem";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ServicesSlider = ({ data }: { data: ServicesSliderItemProps[] }) => {
  const settings : Settings = {
    infinite: true, // Infinite loop
    speed: 100, // Transition speed
    slidesToShow: 4, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    swipeToSlide: true, // Enables swipe-to-slide functionality
    centerMode:true,
    initialSlide: 1, // Set the starting slide index
    autoplay: true,
    lazyLoad: 'progressive',
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
          centerMode: false,

        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3, // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
    ],
    dots: true,
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-600 "></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0%",
          height: '30px',
          transform: "translateX(-50%), translateY(50%)",
          display: "flex",
          gap: "10px",
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {dots}
      </div>),
  };

  return (
    <div className="relative max-w-full mx-auto overflow-hidden">
      <div className="carousel-container ">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="p-4">
              <ServicesSliderItem item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSlider;
