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
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Line, Square } from "@/ui/Icons";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { steps, swiperSlides } from "@/constants/descriptionData";

export default function Description() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const progressBar = useRef<HTMLDivElement | null>(null);
  const animationImg = useRef<HTMLDivElement | null>(null);
  const animationImgTurnBack = useRef<HTMLDivElement | null>(null);
  const [isTurnBack, setIsTurnBack] = useState<boolean>(false);

  const handlePrgressBar = () => {
    if (progressBar.current) {
      progressBar.current.classList.remove("progress-bar");
      void progressBar.current.offsetWidth;
      progressBar.current.classList.add("progress-bar");
    }
  };
  const handleAnimationImg = () => {
    if (animationImg.current) {
      animationImg.current.classList.remove("animation-img-firstLoad");
      animationImg.current.classList.remove("animation-img");
      void animationImg.current.offsetWidth;
      animationImg.current.classList.add("animation-img");
    }
  };
  const handleAnimationImgFirstLoad = () => {
    if (animationImg.current) {
      animationImg.current.classList.add("animation-img-firstLoad");
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
    handleAnimationImgFirstLoad();
  }, []);

  return (
    <div className="w-screen h-screen  relative">
      <ProgressBar progressBar={progressBar} />
      <SwiperCustom
        setSwiperInstance={setSwiperInstance}
        setIsTurnBack={setIsTurnBack}
        setCurrentIndex={setCurrentIndex}
        isTurnBack={isTurnBack}
        handlePrgressBar={handlePrgressBar}
        currentIndex={currentIndex}
        handleAnimationImg={handleAnimationImg}
        handleAnimationImgTurnBack={handleAnimationImgTurnBack}
      />
      <ActiveSlide animationImg={animationImg} currentIndex={currentIndex} />
      <PreSlide currentIndex={currentIndex} />
      <TurnBackSlide
        isTurnBack={isTurnBack}
        currentIndex={currentIndex}
        animationImgTurnBack={animationImgTurnBack}
      />
      {swiperInstance && (
        <>
          <Status currentIndex={currentIndex} />
          <Navigation swiperInstance={swiperInstance} />
        </>
      )}
    </div>
  );
}

function ProgressBar({
  progressBar,
}: {
  progressBar: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div dir="ltr" className="absolute z-50 top-0 w-full h-1">
      <div
        ref={progressBar}
        className="h-full rounded-r-lg bg-primary-400"
      ></div>
    </div>
  );
}

interface SwiperCustomType {
  setSwiperInstance: Dispatch<SetStateAction<SwiperType | null>>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  handlePrgressBar: () => void;
  setIsTurnBack: Dispatch<SetStateAction<boolean>>;
  handleAnimationImg: () => void;
  handleAnimationImgTurnBack: () => void;
  currentIndex: number;
  isTurnBack: boolean;
}

function SwiperCustom({
  setSwiperInstance,
  setCurrentIndex,
  handlePrgressBar,
  setIsTurnBack,
  handleAnimationImg,
  handleAnimationImgTurnBack,
  currentIndex,
  isTurnBack,
}: SwiperCustomType) {
  return (
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
          ${isTurnBack && step.step === currentIndex + 1 ? "opacity-0" : ""}
              ${
                isTurnBack && currentIndex === 4 && step.step === 0
                  ? "opacity-0"
                  : ""
              }
          `}
          >
            {step.img} <LabelSwiperSlide step={step} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

interface ActiveSliceType {
  currentIndex: number;
  animationImg: React.RefObject<HTMLDivElement>;
}

function ActiveSlide({ animationImg, currentIndex }: ActiveSliceType) {
  return (
    <div
      ref={animationImg}
      className="z-10 w-[8.93rem]  right-[1.05rem] sm:w-[15.6rem]  sm:right-[8.4rem] lg:w-[13.25rem] lg:right-[21.75rem] rounded-xl overflow-hidden h-52 absolute bottom-[11.5%]"
    >
      {steps
        .filter((step) => step.step === currentIndex)
        .map((step) => {
          return <SlideInfo key={step.step} step={step} activeSlice={true} />;
        })}
    </div>
  );
}

function PreSlide({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="z-0 w-screen  h-screen  absolute  top-0">
      {steps
        .filter((step) =>
          currentIndex === 0 ? step.step === 4 : step.step === currentIndex - 1
        )
        .map((step) => {
          return <SlideInfo key={step.step} step={step} activeSlice={false} />;
        })}
    </div>
  );
}

interface TurnBackSlideType {
  isTurnBack: boolean;
  currentIndex: number;
  animationImgTurnBack: React.RefObject<HTMLDivElement>;
}

function TurnBackSlide({
  animationImgTurnBack,
  currentIndex,
  isTurnBack,
}: TurnBackSlideType) {
  return (
    <div
      ref={animationImgTurnBack}
      className={`${
        isTurnBack ? "z-20 animation-img-turn-back " : "-z-50"
      }  w-screen rounded-none  h-screen  absolute  right-0 bottom-0`}
    >
      {steps
        .filter((step) =>
          currentIndex === 4 ? step.step === 0 : step.step === currentIndex + 1
        )
        .map((step) => {
          return (
            <div
              key={step.step}
              className="w-full h-full overflow-hidden rounded-xl  "
            >
              {step.img}{" "}
              <LabelSwiperSlide step={step} isTurnBack={isTurnBack} />
            </div>
          );
        })}
    </div>
  );
}

interface LabelSwiperSlideType {
  step: {
    step: number;
    description: string;
    img: JSX.Element;
    label: string;
    icon: JSX.Element;
    them: string;
  };
  isTurnBack?: boolean;
}

function LabelSwiperSlide({ step, isTurnBack }: LabelSwiperSlideType) {
  return (
    <div
      className={`${
        isTurnBack && "animation-text-opacity opacity-0"
      } absolute bottom-0 z-30 w-full p-3 flex flex-col items-start gap-y-2 ${
        step.them === "dark" ? "text-white" : "text-white"
      }`}
    >
      {step.icon}{" "}
      <p className="text-[.7rem]">{step.description.slice(0, 20)} ...</p>{" "}
      <p className="font-bold text-2xl">{step.label}</p>
    </div>
  );
}

interface SlideInfo {
  activeSlice?: boolean;
  step: {
    step: number;
    description: string;
    img: JSX.Element;
    label: string;
    icon: JSX.Element;
    linkSrc: string;
    linkLabel: string;
    them: string;
    images: StaticImageData[];
    text: string;
  };
}

function SlideInfo({ step, activeSlice }: SlideInfo) {
  return (
    <div className="w-full h-full">
      {step.img}
      <div className="absolute top-[5%] lg:top-[8%] right-[18%] lg:right-[12%] gap-y-4 flex flex-col items-start ">
        <h2
          className={`${
            activeSlice && "animation-text opacity-0 translate-y-[12rem]"
          } font-black text-[3.5rem]  sm:text-[4rem]  ${
            step.them === "dark" ? "text-blue-900" : "text-blue-950"
          }`}
        >
          {step.label}
        </h2>
        <p
          className={`${
            activeSlice && "animation-text opacity-0 translate-y-[12rem]"
          } ml-12  rounded-2xl text-lg font-normal drop-shadow-sm  max-w-72 ${
            step.them === "dark" ? "text-slate-200" : "text-slate-700"
          }`}
        >
          {step.description}
        </p>
        <Link
          href={step.linkSrc}
          className={`${
            activeSlice && "animation-text opacity-0 translate-y-[12rem]"
          }   flex items-start justify-between w-auto  h-auto  gap-2 gap-y-4 flex-wrap`}
        >
          <div className="bg-primary-500 text-white font-bold text-lg rounded-2xl flex items-center justify-center p-2 px-4 ml-2 text-center h-12 w-auto">
            {step.linkLabel}
          </div>

          <div className="flex flex-col items-start  gap-4 relative flex-wrap ">
            <p
              className={`${
                step.them === "dark" ? "text-slate-200" : "text-slate-700"
              } font-bold`}
            >
              {step.text}
            </p>
            <div className="flex items-center  relative">
              {step.images.map((src, index) => {
                return (
                  <Image
                    key={index}
                    src={src}
                    alt={`image ${index + 1}`}
                    className={`w-11 h-11 object-cover rounded-full ring-2 ring-primary-400 p-[.1rem] transition-all duration-700 hover:ring-red-500`}
                    style={{
                      transform: `translateX(${index * 20}px)`,
                      zIndex: step.images.length - index,
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
}

function Status({ currentIndex }: { currentIndex: number }) {
  return (
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
  );
}

function Navigation({ swiperInstance }: { swiperInstance: SwiperType }) {
  return (
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
  );
}
