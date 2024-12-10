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
import Link from "next/link";

const swiperSlides = [
  {
    step: 1,
    description:
      "شما در این اینجا  میتونید تجربیات خود را به اشتراک بزاریم ! و از تجربیات دیگران استفاده کنید.",
    img: (
      <Image
        src={blogImg}
        alt="blogImg"
        className="h-full w-full  object-cover"
      />
    ),
    label: "بلاگ",
    icon: <Document width={25} height={25} />,
    them:"dark"
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
    them:"light"
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
    them:"light"
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
    them:"dark"
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
    them:"dark"
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
    linkSrc: "/login",
    linkLabel: "به ما بپیوندید .🥳",
    them:"dark",
  },
  {
    step: 1,
    description:
      "شما در این اینجا  میتونید تجربیات خود را به اشتراک بزاریم ! و از تجربیات دیگران استفاده کنید .",
    img: (
      <Image
        src={blogImg}
        alt="blogImg"
        className="w-full h-full object-cover "
      />
    ),
    label: "بلاگ",
    icon: <Document width={25} height={25} />,
    linkSrc: "/blog",
    linkLabel: "کسب تجربه 🤓",
    them:"dark"
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
    linkSrc: "/residence",
    linkLabel: "اینجا منتظرته ! 😎",
    them:"light"
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
    linkSrc: "/tour",
    linkLabel: "ماجراجویی 🥳",
    them:"light"
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
    linkSrc: "/stor",
    linkLabel: "دست خالی نری 😁",
    them:"dark"
  },
];

export default function Description() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const progressBar = useRef<HTMLDivElement | null>(null);
  const animationImg = useRef<HTMLDivElement | null>(null);

  const handlePrgressBar = () => {
    if (progressBar.current) {
      progressBar.current.classList.remove("progress-bar");
      void progressBar.current.offsetWidth;
      progressBar.current.classList.add("progress-bar");
    }
  };
  const handleAnimationImg = () => {
    if (animationImg.current) {
      animationImg.current.classList.remove("animation-img");
      void animationImg.current.offsetWidth;
      animationImg.current.classList.add("animation-img");
    }
  };

  useEffect(() => {
    handlePrgressBar();
    handleAnimationImg();
  }, []);


  return (
    <div className="w-screen h-screen  relative">
      <div dir="ltr" className="absolute z-50 top-0 w-full h-1">
        <div
          ref={progressBar}
          className="h-full rounded-r-lg bg-primary-400"
        ></div>
      </div>
      <Swiper
        dir="ltr"
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
        }}
        onSlideChangeTransitionEnd={() => {
          handlePrgressBar();
        }}
        onSlideNextTransitionStart={() => {
          handleAnimationImg();
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
          delay: 9000,
          disableOnInteraction: false,
        }}
        speed={600}
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
              <div className={`absolute bottom-0 z-30 w-full p-3 flex flex-col items-start gap-y-2 ${step.them==="dark"?"text-white":"text-white"}`}>
                {step.icon}{" "}
                <p className="text-[.7rem]">
                  {step.description.slice(0, 24)} ...
                </p>{" "}
                <p className="font-bold text-2xl">{step.label}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        ref={animationImg}
        className="w-[8.93rem]  right-[1.05rem] sm:w-[15.6rem]  sm:right-[8.4rem] lg:w-[13.25rem] lg:right-[21.75rem] rounded-xl overflow-hidden h-52 absolute bottom-[11.5%]"
      >
        {steps
          .filter((step) => step.step === currentIndex)
          .map((step) => {
            return (
              <div key={step.step} className="w-full h-full">
                {step.img}
                <div className="absolute top-[15%] right-[21%] gap-y-4 flex flex-col items-start">
                  <h2 className={`animation-text opacity-0 translate-y-[12rem] font-black text-[3.5rem]   ${step.them==="dark"?"text-blue-900":"text-blue-950"}`}>
                    {step.label}
                  </h2>
                  <p className={`animation-text opacity-0 translate-y-[12rem] ml-12  rounded-2xl text-lg font-normal drop-shadow-sm  max-w-72 ${step.them==="dark"?"text-slate-200":"text-slate-700"}`}>
                    {step.description}
                  </p>
                  <Link
                    href={step.linkSrc}
                    className="animation-text opacity-0 translate-y-[12rem]  font-bold text-lg glass-effect--high-blur rounded-2xl flex items-center justify-center w-auto p-4 h-12 text-center"
                  >
                    {step.linkLabel}
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      {swiperInstance && (
        <>
          <div className="absolute  right-[1%] lg:right-1 top-8 lg:top-20 lg:flex-row flex flex-col items-start text-secondary-50 ">
           <div>
           {steps.map(({ step, icon }) => (
              <div
                key={step}
                className={`${
                  currentIndex === step ? "text-primary-500" : ""
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
            <span className="font-bold text-primary-500 text-4xl mt-4  mr-1 lg:mt-1 lg:mr-2 ">
              {toPersianNumbers(`0${currentIndex + 1}`)}
            </span>
          </div>
          <div className="absolute  bottom-[12%] right-[50%] mr-4 flex items-center justify-center gap-x-3 text-secondary-50">
            <button
              className="  hover:animate-pulse overflow-hidden"
              onClick={() => {
                swiperInstance?.slideNext(600);
              }}
            >
              <ArrowRight width={50} height={50} />
            </button>
            <button
              className="  hover:animate-pulse overflow-hidden"
              onClick={() => {
                swiperInstance?.slidePrev(300);
              }}
            >
              <ArrowLeft width={50} height={50} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
