import Image from "next/image";
import icon from "../../../public/icon.svg";
import {
  Arrows,
  Bag,
  Cart,
  Document,
  Home,
  Info,
  Location,
  User,
} from "@/ui/Icons";
import NavLink from "../NavLink";

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

function DesktopHeader() {

  return (
    <div className="h-auto  px-4 pt-4  flex  items-center justify-between">
      <div className="w-11 h-11  flex items-center justify-center bg-white rounded-3xl">
        <Image src={icon} alt="icon site" />
      </div>
      <nav>
        <ul className="flex items-center justify-end gap-x-3">
          <div className="flex items-center justify-between glass-effect--low-blur  h-10 w-auto rounded-3xl  px-2  gap-x-9">
            <div className="flex items-center justify-between  gap-x-2">
              {navLinks.map((navLink) => {
                return (
                  <li
                    className="glass-effect--high-blur  rounded-3xl w-28 h-7 flex items-center justify-center"
                    key={navLink.id}
                  >
                    <NavLink path={navLink.path} icon={navLink.icon}>
                      <p>{navLink.children}</p>
                    </NavLink>
                  </li>
                );
              })}
            </div>
            <li className="  rounded-3xl w-auto  px-4 h-7 flex items-center justify-center">
              <NavLink path={"/service"}>
                {" "}
                <span className="-rotate-90">
                  <Arrows width={20} height={20} />
                </span>
                <p>راهنمای سفر</p>
              </NavLink>
            </li>
          </div>
          <li className="w-10 h-10 flex items-center justify-center glass-effect--high-blur rounded-full">
            <NavLink path="/card">
              <Bag width={30} height={30} />
            </NavLink>
          </li>
          <li className="w-10 h-10  flex items-center justify-center glass-effect--high-blur rounded-full">
            <NavLink path="/profile">
              <User width={30} height={30} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DesktopHeader;
