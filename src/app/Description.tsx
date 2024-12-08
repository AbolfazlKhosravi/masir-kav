// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/swiper.css";

// import required modules
import {  useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Cart,
  Document,
  Home,
  Info,
  Line,
  Location,
  Square,
} from "@/ui/Icons";

export default function Description() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const progressBar = useRef<HTMLDivElement | null>(null);
 
  const handleSlideChange = () => {
    if (progressBar.current) {
      progressBar.current.classList.remove("progress-bar");
      void progressBar.current.offsetWidth; 
      progressBar.current.classList.add("progress-bar");
    }
  };

  const steps = [
    { step: 0, label: "خانه", icon: <Home width={25} height={25} /> },
    { step: 1, label: "بلاگ", icon: <Document width={25} height={25} /> },
    { step: 2, label: "اقامت گاه", icon: <Location width={25} height={25} /> },
    { step: 3, label: "تور", icon: <Info width={25} height={25} /> },
    { step: 4, label: "فروشگاه", icon: <Cart width={25} height={25} /> },
  ];

  return (
    <div className="w-screen h-screen bg-red-500 relative">
      <div dir="ltr" className="sticky top-0 w-full h-1 ">
        <div ref={progressBar} className="h-full bg-primary-500"></div>
      </div>
      <Swiper
        dir="ltr"
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
          handleSlideChange();
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.3,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={30}
        slideToClickedSlide={true}
        className={`w-[60%] h-60 bg-red-100 absolute bottom-[12%] right-0 swiper-custom `}
      >
        <SwiperSlide className="bg-blue-600">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-blue-600">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-blue-600">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-blue-600">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-blue-600">Slide 5</SwiperSlide>
      </Swiper>
      {swiperInstance && (
        <>
          <div className="absolute  right-[2%]  top-[10%] flex flex-col text-slate-800">
            {steps.map(({ step, icon }) => (
              <div
                key={step}
                className={`${
                  currentIndex === step ? "text-blue-500" : ""
                }  cursor-pointer flex  items-end justify-start gap-x-1 `}
              >
                <div className="flex flex-col items-center justify-center ">
                  {step !== 0 && (
                    <span className="text-slate-800">
                      <Line width={50} height={20} />
                    </span>
                  )}
                  <Square width={18} height={18} />
                </div>
                <span className="translate-y-1">{icon}</span>
              </div>
            ))}
          </div>
          <div className="absolute  bottom-[12%] right-[65%] flex items-center justify-center gap-x-3 text-slate-800">
            <button
              className="  hover:animate-pulse overflow-hidden"
              onClick={() => swiperInstance?.slideNext()}
            >
              <ArrowRight width={50} height={50} />
            </button>
            <button
              className="  hover:animate-pulse overflow-hidden"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <ArrowLeft width={50} height={50} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
