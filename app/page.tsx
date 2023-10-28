
import img from "@/public/globe.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        fill
        alt={"background"}
        src={img}
        className="h-screen w-screen object-fill"
      />
      <div className="z-10 w-[400px] h-[300px] bg-opacity-50 bg-white rounded-lg flex items-center justify-center">
        <Link
          className="w-16 h-10 bg-black text-white font-semibold rounded-md text-center pt-2"
          href="/countries"
        >
          HOME
        </Link>
      </div>
    </div>
  );
}
