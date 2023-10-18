import react from "react";
import Navbar from "./components/navbar/page";
import Image from "next/image";
import Link from "next/link";
export default function Dashboard() {
  return (
    <div>
      <div className="lg:ml-9 flex lg:flex-row sm:justify-center max-sm:pl-5">
        <div className="w-1/2 max-sm:space-y-16">
          <div className="lg:mt-[10.4rem] max-sm:mt-10">
            <p className="text-6xl font-handjet tracking-wider font-bold text-white ">
              Introducing SoundSculpt...
            </p>
            <p className="text-green-600 mt-2 font-handjet lg:text-2xl max-sm:w-64">
              Shaping Knowledge, Crafting Experience.
            </p>
          </div>
          <div className="text-green-400 mt-[3rem] leading-7 font-handjet text-xl max-sm:w-screen max-sm:pr-5">
            Dive into a realm of limitless possibilities with our groundbreaking
            app. Seamlessly extracting <br></br> YouTube video transcripts, it
            conjures succinct summaries and crafts audio magic for both.{" "}
            <br></br>Behold, as words come alive in 3D, and knowledge transforms
            into immersive experiences. <br></br>Experience video and audio
            synthesis like never before, opening doors to enriched <br></br>{" "}
            understanding and captivating learning.
          </div>
          <div className="lg:mt-[5rem] flex flex-row lg:gap-16 font-handjet text-2xl">
            <Link href={"/components/transcript"}><button className="btn max-sm:w-full">Get Started</button></Link>
            <button className="btn">Know More</button>
          </div>
        </div>
        <div className="lg:mt-[6rem] lg:w-1/2 max-sm:hidden">
          <Image
            className="lg:w-[49rem] h-fit max-sm:w-screen"
            src={"/new-vector.svg"}
            width={100}
            height={100}
            alt="image"
          />
        </div>
      </div>

    </div>
  );
}
