"use client";

import useScrollDirection from "@/hooks/useScrollDirection";
import BottomNavigation from "./BottomNavigation";
import DesktopHeader from "./DesktopHeader";

function ScrollableHeader() {
  const scrollingDown = useScrollDirection();

  return (
    <>
      <header
        className={`
      transition-all ease-in-out duration-300 fixed top-0 bg-red-500 w-full hidden lg:block
      ${scrollingDown ? "-translate-y-32" : "translate-y-0"}
    `}
      >
        <DesktopHeader />
      </header>
      <nav
        className={`
      transition-all ease-in-out duration-300 fixed bottom-5 bg-red-500 w-[calc(100vw-50px)] block lg:hidden
      ${scrollingDown ? "translate-y-32" : "translate-y-0"}
    `}
      >
        <BottomNavigation />
      </nav>
    </>
  );
}

export default ScrollableHeader;
