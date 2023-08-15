import react from "react";
import Navbar from "../navbar/page";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="ml-9 flex flex-row">
        <div className="w-1/2">
          <p className="text-6xl mt-[10.4rem] font-handjet tracking-wider font-bold">
            Introducing SoundSculpt...
          </p>
          <p className="text-green-600 mt-2 font-handjet text-2xl">
            Shaping Knowledge, Crafting Experience.
          </p>
          <div className="text-green-400 mt-[3rem] leading-7 font-handjet text-xl">
            Dive into a realm of limitless possibilities with our groundbreaking
            app. Seamlessly extracting <br></br> YouTube video transcripts, it
            conjures succinct summaries and crafts audio magic for both.{" "}
            <br></br>Behold, as words come alive in 3D, and knowledge transforms
            into immersive experiences. <br></br>Experience video and audio
            synthesis like never before, opening doors to enriched <br></br>{" "}
            understanding and captivating learning.
          </div>
          <div className="mt-[5rem] flex flex-row gap-16 font-handjet text-2xl">
            <button className="btn">Get Started</button>
            <button className="btn">Know More</button>
          </div>
        </div>
        <div className="mt-[6rem] w-1/2">
          <Image
            className="w-[49rem] h-fit"
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
