import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import { cn } from "@/lib/utils";

//INTERNAL IMPORT
import images from "@/img";

const Subscribe = () => {
  return (
    <div className={cn("w-full")}>
      <div className={cn("w-4/5tt mx-auto md:py-12 p-2 grid md:grid-cols-2 items-center md:w-11/12tt grid-cols-1 md:gap-16 lg:grid-cols-2")}>
        <div>
          <h2 className={cn("text-6xl leading-none md:text-4xl font-bold")}>Never miss a drop</h2>
          <p className={cn("text-xl")}>
            Subscribe to our super-exclusive drop list and be the first to know
            about upcoming drops.
          </p>
          <div className={cn("flex items-center gap-4 mt-8")}>
            <span className={cn("bg-icons text-main-bg p-2 rounded-full text-center w-16")}>01</span>
            <small className={cn("text-lg font-bold")}>Get more discount</small>
          </div>

          <div className={cn("flex items-center gap-4 mt-8")}>
            <span className={cn("bg-icons text-main-bg p-2 rounded-full text-center w-16")}>02</span>
            <small className={cn("text-lg font-bold")}>Get premium magazines</small>
          </div>

          <div className={cn("mt-12 p-4 px-8 w-full bg-icons text-main-bg flex items-center rounded-full")}>
            <input
              type="email"
              placeholder="Enter your email"
              className={cn("bg-transparent border-0 outline-none w-full text-xl placeholder-main-bg")}
            />
            <RiSendPlaneFill className={cn("text-4xl")} />
          </div>
        </div>

        <div>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
