import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

//INTERNAL IMPORT
import images from "@/img";

interface SliderCardProps {
  el: {
    background: string;
  };
  i: number;
}

const SliderCard: React.FC<SliderCardProps> = ({ el, i }) => {
  return (
    <div className={cn("p-4")}>
      <div className={cn("transition-all duration-300 ease-in rounded-2xl pb-4 hover:shadow-custom")}>
        <div className={cn("rounded-2xl overflow-hidden h-48")}>
          <Image
            src={el.background}
            alt="slider profile"
            width={500}
            height={300}
            className={cn("rounded-2xl object-cover w-full h-full")}
          />
        </div>
        <div className={cn("flex items-center justify-between gap-4 px-8")}>
          <p className={cn("text-xl leading-none font-bold my-4 whitespace-nowrap")}>NFT Video #{i + 1}</p>
          <div className={cn("flex items-center gap-2")}>
            {/* <LikeProfile /> */}
            <small className=" whitespace-nowrap">{i + 4} of 100</small>
          </div>
        </div>

        <div className={cn("flex justify-between px-8 mt-4")}>
          <div className={cn("border relative border-icons p-2 rounded-sm")}>
            <small className={cn("bg-icons px-2 py-1 rounded-sm text-main-bg absolute top-[-1rem] left-4")}>Current Bid</small>
            <p className={cn("text-lg font-bold mt-2 whitespace-nowrap")}>{(i + 2).toFixed(3)} ETH</p>
          </div>

          <div className={cn("flex flex-col justify-end items-end   text-right")}>
            <small>Remaining time</small>
            <p className={cn("text-lg font-bold whitespace-nowrap")}>
              {i + 1}h : 15m : {i + 4}0s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
