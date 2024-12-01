import Image from "next/image";
import bg from "../../public/bg.jpg"

export default function Home() {
  return <Image src={bg} alt="bg" className="h-screen  object-cover" />;
}
