import Image from "next/image";
import BottomNavigation from "./BottomNavigation";
import DesktopHeader from "./DesktopHeader";
import icon from "../../../public/icon.svg";
import DarkModeToggle from "@/ui/DarkModeToggle";

function HomeHeader() {
  return (
    <>
      <header className={`z-50 fixed top-0  w-full `}>
        <DesktopHeader />
      </header>
      <div className="z-50 fixed top-2 left-1 lg:hidden h-auto  flex flex-col  items-center justify-between text-secondary-100 gap-y-2">
          <div className="w-12 h-12 bg-white  flex items-center justify-center  rounded-3xl">
            <Image src={icon} alt="icon site" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center  rounded-full glass-effect--high-blur">
            <DarkModeToggle />
          </div>
        </div>
      <nav
        className={`z-50 flex items-center fixed bottom-3  w-[calc(100vw-30px)] max-w-[25rem] lg:hidden`}
      >
        <BottomNavigation />
      </nav>
    </>
  );
}

export default HomeHeader;
