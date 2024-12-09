"use client";

import { Bag, Home, User } from "@/ui/Icons";
import NavLink from "../NavLink";
import { useState } from "react";
import MenuButton from "./MenuButton";
import navLinks from "@/constants/menoHeader";
function BottomNavigation() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const classSingleLi =
    "w-14 h-14 flex items-center justify-center rounded-full";

  return (
    <ul
      className={` w-full h-auto flex flex-col items-start  rounded-[1.75rem] glass-effect--high-blur-noColor text-secondary-50`}
    >
      <div className={`flex flex-col items-start  w-full overflow-hidden transition-all ease-in-out duration-500 ${isOpenMenu?"max-h-80 pt-1":"max-h-0"}`}>
        {navLinks.map((navLink) => {
          return (
            <li
              className="w-full h-12 flex items-center justify-start px-4 "
              key={navLink.id}
            >
              <NavLink path={navLink.path}>
                <div className="flex items-center justify-start  w-full h-full gap-x-3">
                  {navLink.icon}
                  <p>{navLink.children}</p>
                </div>
              </NavLink>
            </li>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-x-3  w-full  h-16 px-4 ">
        <li className={`${classSingleLi}`}>
          <MenuButton
            isOpenMenu={isOpenMenu}
            handler={() => setIsOpenMenu((prev) => !prev)}
          />
        </li>
        <li className={`${classSingleLi}`}>
          <NavLink path="/profile" isMobile={isOpenMenu ? false : true}>
            <User width={30} height={30} />
          </NavLink>
        </li>
        <li className={`${classSingleLi}`}>
          <NavLink path="/card" isMobile={isOpenMenu ? false : true}>
            <Bag width={30} height={30} />
          </NavLink>
        </li>
        <li className={`${classSingleLi}`}>
          <NavLink path="/" isMobile={isOpenMenu ? false : true}>
            <Home width={30} height={30} />
          </NavLink>
        </li>
      </div>
    </ul>
  );
}

export default BottomNavigation;
