import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

//INTERNAL IMPORT
import images from "@/img";

const Loader = () => {
  return (
    <div className={cn("w-full my-16")}>
      <div className={cn("w-1/2 mx-auto text-center")}>
        <div
          className={cn(
            " w-fit mx-auto mb-12 mt-[-2rem] animate-[mymove_4s_infinite] origin-center  ease-in-out"
          )}
        >
          <Image
            src={images.loader}
            alt="loader"
            width={200}
            height={200}
            className={cn("rounded-full object-cover")}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;

// Global CSS or Tailwind CSS configuration
// Define keyframes in global.css if needed

