import { Cart, Document, Home, Info, Location } from "@/ui/Icons";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
    icon: <Home width={20} height={20} />,
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
    icon: <Document width={20} height={20} />,
  },
  {
    id: 3,
    children: "فروشگاه",
    path: "/stor",
    icon: <Cart width={20} height={20} />,
  },
  {
    id: 4,
    children: "تور ها",
    path: "/tour",
    icon: <Info width={20} height={20} />,
  },
  {
    id: 5,
    children: "اقامت گاه",
    path: "/hotels",
    icon: <Location width={20} height={20} />,
  },
];
export default navLinks;
