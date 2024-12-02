import { Menu } from "@/ui/Icons";

interface MenuButton {
  isOpenMenu: boolean;
  handler: () => void;
}

function MenuButton({ handler, isOpenMenu }: MenuButton) {
  return (
    <button
      onClick={handler}
      className={`h-full w-full  hover:animate-pulse hover:text-primary-400
        flex items-center justify-center  ${
          isOpenMenu
            ? "text-primary-400 glass-effect--high-blur-noColor rounded-full"
            : ""
        }
      `}
    >
      <Menu width={55} height={55} isOpenMenu={isOpenMenu} />
    </button>
  );
}

export default MenuButton;
