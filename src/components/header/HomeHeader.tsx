import BottomNavigation from "./BottomNavigation";
import DesktopHeader from "./DesktopHeader";

function HomeHeader() {
  return (
    <>
      <header className={`fixed top-0 bg-red-500 w-full hidden lg:block`}>
        <DesktopHeader />
      </header>
      <nav
        className={`fixed bottom-5 bg-red-500 w-[calc(100vw-50px)] block lg:hidden`}
      >
        <BottomNavigation />
      </nav>
    </>
  );
}

export default HomeHeader;
