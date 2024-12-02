import Image from "next/image";
import icon from "../../../public/icon.svg";
import { Bag, User } from "@/ui/Icons";
import NavLink from "../NavLink";
import DarkModeToggle from "@/ui/DarkModeToggle";
import navLinks from "@/constants/menoHeader";

function DesktopHeader() {
  const classSingleLi =
    "w-10 h-10 flex items-center justify-center  rounded-full";

  return (
    <nav className="hidden lg:flex h-auto  px-4 pt-2   items-center justify-between gap-x-4 text-secondary-100">
      <div className="w-11 h-11 bg-white  flex items-center justify-center  rounded-3xl">
        <Image src={icon} alt="icon site" />
      </div>
      <ul className="flex items-center justify-end gap-x-3 ">
        {navLinks.map((navLink) => {
          return (
            <li
              className="rounded-3xl w-28 h-7 flex items-center justify-center"
              key={navLink.id}
            >
              <NavLink path={navLink.path} icon={navLink.icon}>
                <p>{navLink.children}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className=" flex items-center gap-x-3 ">
        <div className={`${classSingleLi}`}>
          <DarkModeToggle />
        </div>
        <div className={`${classSingleLi}`}>
          <NavLink path="/card">
            <Bag width={30} height={30} />
          </NavLink>
        </div>
        <div className={`${classSingleLi}`}>
          <NavLink path="/profile">
            <User width={30} height={30} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default DesktopHeader;
