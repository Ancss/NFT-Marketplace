'use client'
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { cn } from "@/lib/utils";

//INTERNAL IMPORT
import SliderCard from "./SliderCard";
import images from "@/img";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel } from "./ui/carousel";

const Slider = () => {
  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
  ];
  const leftSideRef = useRef<HTMLButtonElement>(null)
  const rightSideRef = useRef<HTMLButtonElement>(null)

  return (
    <div className={cn("w-full")}>
      <div className={cn("w-4/5tt mx-auto p-[0_-4rem_8rem_0] ")}>
        <h2 className={cn("text-6xl leading-none mb-5 md:text-4xl")}>Explore NFTs Video</h2>
        <div className={cn("flex justify-between items-center")}>
          <p>Click on play icon & enjoy NFTs Video</p>
          <div className={cn("flex items-center gap-8 text-4xl")}>
            <div
              className={cn("border border-icons p-2 rounded-full cursor-pointer transition-all duration-300 ease-in hover:bg-icons hover:text-main-bg hover:shadow-custom")}
              onClick={() => leftSideRef.current?.click()}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={cn("border border-icons p-2 rounded-full cursor-pointer transition-all duration-300 ease-in hover:bg-icons hover:text-main-bg hover:shadow-custom")}
              onClick={() => rightSideRef.current?.click()}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full ">
          <CarouselContent className="-ml-4">
            {followingArray.map((el, i) => (
              <CarouselItem className="pl-1  md:basis-1/2 xl:basis-1/3 2xl:basis-1/4" key={i}> <SliderCard key={i} i={i} el={el} /></CarouselItem>
            ))}

          </CarouselContent>
          <CarouselPrevious className=" absolute left-0 invisible" ref={leftSideRef} />
          <CarouselNext className=" absolute left-0 invisible" ref={rightSideRef} />
        </Carousel>

        {/* <motion.div className={cn("w-full overflow-hidden")} ref={dragSlider}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={cn("grid grid-cols-6 gap-4 p-16 cursor-grab md:grid-cols-6 md:gap-2 md:p-16")}
          >

          </motion.div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Slider;
