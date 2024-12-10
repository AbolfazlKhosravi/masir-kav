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
import { Cart, Document, Home, Info, Location } from "@/ui/Icons";
import Image from "next/image";

export const swiperSlides = [
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

export const steps = [
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
