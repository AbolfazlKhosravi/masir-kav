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
import person1 from "../../public/person/1.jpg";
import person2 from "../../public/person/2.jpg";
import person3 from "../../public/person/3.jpg";
import person4 from "../../public/person/4.jpg";
import person5 from "../../public/person/5.jpg";
import blog1 from "../../public/blog/1.jpg";
import blog2 from "../../public/blog/2.jpg";
import blog3 from "../../public/blog/3.jpg";
import blog4 from "../../public/blog/4.jpg";
import blog5 from "../../public/blog/5.jpg";
import tour1 from "../../public/tour/1.jpg";
import tour2 from "../../public/tour/2.jpg";
import tour3 from "../../public/tour/3.jpg";
import tour4 from "../../public/tour/4.jpg";
import tour5 from "../../public/tour/5.jpg";
import stor1 from "../../public/stor/1.jpg";
import stor2 from "../../public/stor/2.jpg";
import stor3 from "../../public/stor/3.jpg";
import stor4 from "../../public/stor/4.jpg";
import stor5 from "../../public/stor/5.jpg";
import residence1 from "../../public/residence/1.jpg";
import residence2 from "../../public/residence/2.jpg";
import residence3 from "../../public/residence/3.jpg";
import residence4 from "../../public/residence/4.jpg";
import residence5 from "../../public/residence/5.jpg";

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
    them: "dark",
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
    them: "light",
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
    them: "light",
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
    them: "dark",
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
    them: "dark",
  },
];

const steps = [
  {
    step: 0,
    description:
      "سلام خوش آمدید ! با ما معنی زندگی را پیدا کنید . و از زندگی تان  لذت ببرید و طبیعت را فراموش نکنید !",
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
    them: "dark",
    images: [person1, person2, person3, person4, person5],
    text: "با بیش از 10 هزار عضو",
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
    them: "dark",
    images: [blog1, blog2, blog3, blog4, blog5],
    text: "با بیش از 1 هزار بلاگ",
  },
  {
    step: 2,
    description:
      "در این قسمت اقامت گاه مورد نظر خود را در سراسر ایران وجهان پیدا کنید و یک تعطیلات رویایی رو سپری کنید .",
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
    them: "light",
    images: [residence1, residence2, residence3, residence4, residence5],
    text: "با بیش از 2 هزار اقامتگاه",
  },
  {
    step: 3,
    description:
      "اگر تنبلید و دوست دارید کسی برای شما سفرتان را برنامه ریزی کند  پس این قسمت را از دست ندهید .",
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
    them: "light",
    images: [tour1, tour2, tour3, tour4, tour5],
    text: "با بیش از 500 تا تور",
  },
  {
    step: 4,
    description:
      " تجهیرات سفر و کمپ و هایک خود را در اینجا با اصل بودن کالا و با قیمت مناسب خرید گنید .",
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
    them: "dark",
    images: [stor1, stor2, stor3, stor4, stor5],
    text: "با بیش از 3 هزار محصول",
  },
];

export default function Description() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const progressBar = useRef<HTMLDivElement | null>(null);
  const animationImg = useRef<HTMLDivElement | null>(null);
  const animationImgTurnBack = useRef<HTMLDivElement | null>(null);
  const [isTurnBack, setIsTurnBack] = useState<boolean>(false);
  console.log(currentIndex);

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
  const handleAnimationImgTurnBack = () => {
    if (animationImgTurnBack.current) {
      animationImgTurnBack.current.classList.remove("animation-img-turn-back");
      void animationImgTurnBack.current.offsetWidth;
      animationImgTurnBack.current.classList.add("animation-img-turn-back");
      setIsTurnBack(true);
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
          setIsTurnBack(false);
          handleAnimationImg();
        }}
        onSlidePrevTransitionStart={() => {
          setIsTurnBack(true);
          handleAnimationImgTurnBack();
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
        className={` w-40 sm:w-96 lg:w-[35rem] h-52 rounded-xl bottom-[11.5%] right-0 swiper-custom cursor-pointer `}
      >
        {swiperSlides.map((step) => {
          return (
            <SwiperSlide
              dir="rtl"
              key={step.step}
              className={`overflow-hidden rounded-xl   ${
                step.step === currentIndex ? "opacity-0" : ""
              }
                ${
                  isTurnBack && step.step === currentIndex + 1
                    ? "opacity-0"
                    : ""
                }
                    ${
                      isTurnBack && currentIndex === 4 && step.step === 0
                        ? "opacity-0"
                        : ""
                    }
                `}
            >
              {step.img}{" "}
              <div
                className={`absolute bottom-0 z-30 w-full p-3 flex flex-col items-start gap-y-2 ${
                  step.them === "dark" ? "text-white" : "text-white"
                }`}
              >
                {step.icon}{" "}
                <p className="text-[.7rem]">
                  {step.description.slice(0, 20)} ...
                </p>{" "}
                <p className="font-bold text-2xl">{step.label}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        ref={animationImg}
        className="z-10 w-[8.93rem]  right-[1.05rem] sm:w-[15.6rem]  sm:right-[8.4rem] lg:w-[13.25rem] lg:right-[21.75rem] rounded-xl overflow-hidden h-52 absolute bottom-[11.5%]"
      >
        {steps
          .filter((step) => step.step === currentIndex)
          .map((step) => {
            return (
              <div key={step.step} className="w-full h-full">
                {step.img}
                <div className="absolute top-[5%] lg:top-[8%] right-[18%] lg:right-[12%] gap-y-4 flex flex-col items-start ">
                  <h2
                    className={`animation-text opacity-0 translate-y-[12rem] font-black text-[3.5rem]  sm:text-[4rem]  ${
                      step.them === "dark" ? "text-blue-900" : "text-blue-950"
                    }`}
                  >
                    {step.label}
                  </h2>
                  <p
                    className={`animation-text opacity-0 translate-y-[12rem] ml-12  rounded-2xl text-lg font-normal drop-shadow-sm  max-w-72 ${
                      step.them === "dark" ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {step.description}
                  </p>
                  <Link
                    href={step.linkSrc}
                    className="animation-text opacity-0 translate-y-[12rem]   flex items-start justify-between w-auto  h-auto  gap-2 gap-y-4 flex-wrap"
                  >
                    <div className="bg-primary-500 text-white font-bold text-lg rounded-2xl flex items-center justify-center p-2 px-4 ml-2 text-center h-12 w-auto">
                      {step.linkLabel}
                    </div>

                    <div className="flex flex-col items-start  gap-4 relative flex-wrap ">
                      <p className={`${step.them === "dark" ? "text-slate-200" : "text-slate-700"} font-bold`}>{step.text}</p>
                      <div className="flex items-center  relative">
                        {step.images.map((src, index) => {
                          return (
                            <Image
                              key={index}
                              src={src}
                              alt={`image ${index + 1}`}
                              className={`w-11 h-11 object-cover rounded-full ring-2 ring-primary-400 p-[.1rem] `}
                              style={{
                                transform: `translateX(${index * 25}px)`, // تنظیم هم‌پوشانی
                                zIndex: step.images.length - index, // ترتیب لایه‌ها
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <div className="z-0 w-screen  h-screen  absolute  top-0">
        {steps
          .filter((step) =>
            currentIndex === 0
              ? step.step === 4
              : step.step === currentIndex - 1
          )
          .map((step) => {
            return (
              <div key={step.step} className="w-full h-full">
                {step.img}
                <div className="absolute top-[5%] lg:top-[8%] right-[18%] lg:right-[12%] gap-y-4 flex flex-col items-start ">
                  <h2
                    className={`font-black text-[3.5rem]  sm:text-[4rem]  ${
                      step.them === "dark" ? "text-blue-900" : "text-blue-950"
                    }`}
                  >
                    {step.label}
                  </h2>
                  <p
                    className={`ml-12  rounded-2xl text-lg font-normal drop-shadow-sm  max-w-72 ${
                      step.them === "dark" ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {step.description}
                  </p>
                  <Link
                    href={step.linkSrc}
                    className="  flex items-start justify-between w-auto  h-auto  gap-2 gap-y-4 flex-wrap"
                  >
                    <div className="bg-primary-500 text-white font-bold text-lg rounded-2xl flex items-center justify-center p-2 px-4 ml-2 text-center h-12 w-auto">
                      {step.linkLabel}
                    </div>

                    <div className="flex flex-col items-start  gap-4 relative flex-wrap ">
                    <p className={`${step.them === "dark" ? "text-slate-200" : "text-slate-700"} font-bold`}>{step.text}</p>
                      <div className="flex items-center  relative">
                        {step.images.map((src, index) => {
                          return (
                            <Image
                              key={index}
                              src={src}
                              alt={`image ${index + 1}`}
                              className={`w-11 h-11 object-cover rounded-full ring-2 ring-primary-400 p-[.1rem] `}
                              style={{
                                transform: `translateX(${index * 25}px)`, // تنظیم هم‌پوشانی
                                zIndex: step.images.length - index, // ترتیب لایه‌ها
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <div
        ref={animationImgTurnBack}
        className={`${
          isTurnBack ? "z-20 animation-img-turn-back " : "-z-50"
        }  w-screen rounded-none  h-screen  absolute  right-0 bottom-0`}
      >
        {steps
          .filter((step) =>
            currentIndex === 4
              ? step.step === 0
              : step.step === currentIndex + 1
          )
          .map((step) => {
            return (
              <div
                key={step.step}
                className="w-full h-full overflow-hidden rounded-xl  "
              >
                {step.img}{" "}
                <div
                  className={`animation-text-opacity opacity-0 absolute bottom-0 z-30 w-full p-3 flex flex-col items-start gap-y-2 ${
                    step.them === "dark" ? "text-white" : "text-white"
                  }`}
                >
                  {step.icon}{" "}
                  <p className="text-[.7rem]">
                    {step.description.slice(0, 20)} ...
                  </p>{" "}
                  <p className="font-bold text-2xl">{step.label}</p>
                </div>
              </div>
            );
          })}
      </div>
      {swiperInstance && (
        <>
          <div className="z-40 absolute  right-[1%] lg:right-1 top-8 lg:top-20 lg:flex-row flex flex-col items-start text-secondary-50 ">
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
          <div className="z-40 absolute  bottom-[12%] right-[50%]  flex items-center justify-center gap-x-3 text-secondary-50">
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
                swiperInstance?.slidePrev(600);
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
