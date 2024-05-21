import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// INTERNAL IMPORT
import images from "@/img";

const Video = () => {
  return (
    <div className={cn("w-full mt-56 mb-20")}>
      <div className={cn("w-4/5tt mx-auto md:w-9/10")}>
        <h1 className={cn("text-6xl leading-tight md:text-4xl")}>
          <span role="img" aria-label="Video Camera">🎬</span> The Videos
        </h1>
        <p className={cn("text-xl md:w-2/5 leading-snug w-full")}>
          Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.
        </p>

        <div className={cn("grid grid-cols-8 gap-4 md:p-20 mt-24 p-0")}>
          <div className={cn("col-[1/-2] row-span-full z-10 ")}>
            <Image
              src={images.NFTVideo}
              alt="Video image"
              width={1920}
              height={1080}
              className={cn("rounded-lg object-cover")}
            />
          </div>

          <div className={cn("col-[4/-1] bg-icons rounded-lg row-span-full p-12 mt-12 shadow-custom md:mt-[-2rem]")}>
            Hey
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
