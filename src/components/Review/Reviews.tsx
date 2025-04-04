"use client";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { reviewData, ReviewItemProps } from "@/data/Static/review";
import { useState } from "react";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState<ReviewItemProps>(
    reviewData[0]
  );


  const handlePrevNext = (button: 'prev' | 'next') => {
    if (button === 'prev') {
      if (currentReview.id === 0) {
        setCurrentReview(reviewData[reviewData.length - 1]);
      } else {
        setCurrentReview(reviewData[currentReview.id - 1]);
      }
    }
  
    if (button === 'next') {
      if (currentReview.id === reviewData.length - 1) {
        setCurrentReview(reviewData[0]);
      } else {
        setCurrentReview(reviewData[currentReview.id + 1]);
      }
    }
  };
  

  return (
    <section className="w-full flex flex-col md:flex-row justify-stretch items-stretch bg-hill-bg  mt-40 md:mt-0">
      <div className="w-full md:w-1/2 flex items-center justify-between flex-col gap-2">
        <div className="w-full h-1/4 pt-10 flex items-center justify-center">
          <h1 className="font-karla font-bold text-2xl md:text-4xl text-hill-primary">
            Rólunk mondták
          </h1>
        </div>
        <div className="w-full h-2/4 px-3 md:px-20 text-center font-light font-merrieweather text-md md:text-lg flex flex-col items-center justify-center">
          {/* Star Rating */}
          <div className="flex gap-1 text-yellow-400 pb-6">
            {Array(currentReview.rating)
              .fill(0)
              .map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
              ))}
          </div>
          <p>{currentReview.description}</p>
          <div className="w-full flex justify-end text-base font-light">
            {currentReview.name}
          </div>
          {/* Star Rating */}
        </div>

        <div className="w-full h-1/4 flex justify-center items-center gap-4">
          <div className="w-24 h-24" onClick={() => handlePrevNext('prev')}>
            <div className="relative group m-5">
              <div className="relative text-hill-primary uppercase font-merrieweather-eng flex items-center justify-center overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-2/3 h-1/2 border-t-2 border-l-2 border-hill-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-hill-primary"></div>
                <div className="absolute bottom-0 right-0 w-2/3 h-1/2 border-b-2 border-r-2 border-hill-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-hill-primary"></div>
                <div className="bg-transparent w-full flex justify-center items-center px-3 py-2 transition duration-300 ease-in-out  group-hover:bg-hill-primary group-hover:text-white ">
                  <IoIosArrowBack size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-24 h-24" onClick={() => handlePrevNext('next')}>
            <div className="relative group m-5">
              <div className="relative text-hill-primary uppercase font-merrieweather-eng flex items-center justify-center overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-2/3 h-1/2 border-t-2 border-l-2 border-hill-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-hill-primary"></div>
                <div className="absolute bottom-0 right-0 w-2/3 h-1/2 border-b-2 border-r-2 border-hill-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-hill-primary"></div>
                <div className="bg-transparent w-full flex justify-center items-center px-3 py-2 transition duration-300 ease-in-out  group-hover:bg-hill-primary group-hover:text-white ">
                  <IoIosArrowForward size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 flex">
        <Image
          src="/images/family-reviews.jpg"
          className="h-full w-full object-cover"
          alt="review image"
          width={5900}
          height={3900}
        ></Image>
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 border-b-[8px] border-l-[8px] border-hill-primary"></div>
        <div className="absolute top-0 right-0 w-3/4 h-3/4 border-t-[8px] border-r-[8px] border-hill-primary"></div>
      </div>
    </section>
  );
}
