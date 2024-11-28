import Image from "next/image";
import icone from "../../../public/icon.svg";

function DesktopHeader() {
  return (
    <div className="h-auto bg-red-600  px-4 py-2 flex  items-center justify-between">
      <Image src={icone} alt="icon site" width={60} height={60} />
      <nav>this is DesktopHeader</nav>
    </div>
  );
}

export default DesktopHeader;
