// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import blogImg from "../../public/blogImg.jpg";
import homeImg from "../../public/homeImg.jpg";
import residenceImg from "../../public/residenceImg.jpg";
import storeImg from "../../public/storeImg.jpg";
import tourImg from "../../public/tourImg.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/swiper.css";

// import required modules
import { useEffect, useRef, useState } from "react";
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
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Image from "next/image";

const swiperSlides = [
  {
    step: 1,
    description:
      "شما در این قسمت  میتونید تجربیات خود را به اشتراک بزاریم ! و از تجربیات دیگران استفاده کنید .",
    img: (
      <Image
        src={blogImg}
        alt="blogImg"
        className="h-full w-full  object-cover"
      />
    ),
    label: "بلاگ",
    icon: <Document width={25} height={25} />,
  },
  {
    step: 2,
    description:
      "در این قسمت میتوانید اقامت گاه مورد نظر خود را در سراسر ایران وجهان پیدا کنید و یک تعطیلات رویایی رو سپری کنید .",
    img: (
      <Image
        src={residenceImg}
        alt="residenceImg"
        className="h-full w-full  object-cover "
      />
    ),
    label: "اقامت گاه",
    icon: <Location width={25} height={25} />,
  },
  {
    step: 3,
    description:
      "اگر تنبل هستید و دوست دارید کسی برای شما سفرتان را برنامه ریزی کند و برای شما تمام امکانات را فراهم کند پس این قسمت را از دست ندهید .",
    img: (
      <Image
        src={tourImg}
        alt="tourImg"
        className="h-full w-full  object-cover "
      />
    ),
    label: "تور",
    icon: <Info width={25} height={25} />,
  },
  {
    step: 4,
    description:
      "به هر چیزی که نیاز دارید برای تعطیلات و کمپ در طبیعت وهایک میتوانید در این قسمت پیدا کنید و با امکانات کامل از مقصدتان لذت ببرید .",
    img: (
      <Image
        src={storeImg}
        alt="storeImg"
        className="h-full w-full  object-cover"
      />
    ),
    label: "فروشگاه",
    icon: <Cart width={25} height={25} />,
  },
  {
    step: 0,
    description:
      "سلام خوش آمدید ! با ما معنی زندگی را پیدا کنید . و از زندگی تان  لذت ببرید",
    img: (
      <Image
        src={homeImg}
        alt="homeImg"
        className="h-full w-full  object-cover"
      />
    ),
    label: "خانه",
    icon: <Home width={25} height={25} />,
  },
];

const steps = [
  {
    step: 0,
    description:
      "سلام خوش آمدید ! با ما معنی زندگی را پیدا کنید . و از زندگی تان  لذت ببرید",
    img: (
      <Image
        src={homeImg}
        alt="homeImg"
        className="w-full h-full object-cover "
      />
    ),
    label: "خانه",
    icon: <Home width={25} height={25} />,
  },
  {
    step: 1,
    description:
      "شما در این قسمت  میتونید تجربیات خود را به اشتراک بزاریم ! و از تجربیات دیگران استفاده کنید .",
    img: (
      <Image
        src={blogImg}
        alt="blogImg"
        className="w-full h-full object-cover "
      />
    ),
    label: "بلاگ",
    icon: <Document width={25} height={25} />,
  },
  {
    step: 2,
    description:
      "در این قسمت میتوانید اقامت گاه مورد نظر خود را در سراسر ایران وجهان پیدا کنید و یک تعطیلات رویایی رو سپری کنید .",
    img: (
      <Image
        src={residenceImg}
        alt="residenceImg"
        className="w-full h-full object-cover "
      />
    ),
    label: "اقامت گاه",
    icon: <Location width={25} height={25} />,
  },
  {
    step: 3,
    description:
      "اگر تنبل هستید و دوست دارید کسی برای شما سفرتان را برنامه ریزی کند و برای شما تمام امکانات را فراهم کند پس این قسمت را از دست ندهید .",
    img: (
      <Image
        src={tourImg}
        alt="tourImg"
        className="w-full h-full object-cover "
      />
    ),
    label: "تور",
    icon: <Info width={25} height={25} />,
  },
  {
    step: 4,
    description:
      "به هر چیزی که نیاز دارید برای تعطیلات و کمپ در طبیعت وهایک میتوانید در این قسمت پیدا کنید و با امکانات کامل از مقصدتان لذت ببرید .",
    img: (
      <Image
        src={storeImg}
        alt="storeImg"
        className="w-full h-full object-cover"
      />
    ),
    label: "فروشگاه",
    icon: <Cart width={25} height={25} />,
  },
];

export default function Description() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const progressBar = useRef<HTMLDivElement | null>(null);
  const animationImg = useRef<HTMLDivElement | null>(null);

  const handleSlideChange = () => {
    if (progressBar.current) {
      progressBar.current.classList.remove("progress-bar");
      void progressBar.current.offsetWidth;
      progressBar.current.classList.add("progress-bar");
    }
    if (animationImg.current) {
      animationImg.current.classList.remove("animation-img");
      void animationImg.current.offsetWidth;
      animationImg.current.classList.add("animation-img");
    }
  };

  useEffect(() => {
    // setCurrentIndex(0);
    handleSlideChange();
  }, []);

  return (
    <div className="w-screen h-screen  relative">
      {/* {steps.find((step) => step.step === currentIndex)?.img} */}
      <div dir="ltr" className="absolute z-50 top-0 w-full h-1">
        <div
          ref={progressBar}
          className="h-full rounded-r-lg bg-primary-500"
        ></div>
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
            slidesPerView: 1.1,
          },
          640: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={1500}
        modules={[Autoplay]}
        spaceBetween={20}
        onClick={(swiper) => swiper.slideNext()}
        className={`w-40 sm:w-96 lg:w-[35rem] h-52 rounded-xl bottom-[11.5%] right-0 swiper-custom cursor-pointer `}
      >
        {swiperSlides.map((step) => {
          return (
            <SwiperSlide
              dir="rtl"
              key={step.step}
              className={`overflow-hidden rounded-xl   ${
                step.step === currentIndex ? "opacity-0" : "opacity-100"
              }`}
            >
              {step.img}{" "}
              <div className="absolute bottom-0 z-30 text-white w-full p-3 flex flex-col items-start gap-y-2">
                {step.icon}{" "}
                <p className="text-[.7rem]">
                  {step.description.slice(0, 22)} ...
                </p>{" "}
                <p className="font-bold text-2xl ">{step.label}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        ref={animationImg}
        className="w-[8.93rem]  right-[1.05rem] sm:w-[15.6rem]  sm:right-[8.4rem] lg:w-[13.25rem] lg:right-[21.75rem] rounded-xl overflow-hidden h-52 absolute bottom-[11.5%]"
      >
        {steps.find((step) => step.step === currentIndex)?.img}
      </div>
      {swiperInstance && (
        <>
          <div className="absolute  right-[2%]  top-8 flex flex-col items-start text-secondary-50 ">
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
            <span className="font-bold text-primary-500 text-4xl mt-4  mr-1">
              {toPersianNumbers(`0${currentIndex + 1}`)}
            </span>
          </div>
          <div className="absolute  bottom-[12%] right-[50%] flex items-center justify-center gap-x-3 text-secondary-50">
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
