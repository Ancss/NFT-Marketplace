import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import images from "@/img";
import LikeProfile from "../LikeProfile";

const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    setPlay(!play);
  };

  return (
    <div className="cursor-pointer transition-all duration-300 ease-in rounded-lg bg-bg-shadow-dark p-2 h-32 hover:shadow-custom">
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-5 justify-self-center items-center">
        <Image
          src={images.creatorbackground1}
          alt="music"
          width={80}
          height={100}
          className=" rounded-md m-auto"
        />

        <div>
          <h4 className="text-lg whitespace-nowrap">NFT music #1142</h4>
          <div className="flex gap-4 mt-4">
            <LikeProfile />
            <div className=" relative border border-icons rounded-sm p-1 w-2/5 font-semibold text-sm">
              <small className=" absolute top-[-0.5rem] left-2 bg-icons text-main-bg rounded-sm px-1">Price</small>
              <p className="mt-4 text-xs whitespace-nowrap">1.00 ETH</p>
            </div>
          </div>
        </div>

        <div
          className="text-2xl m-auto w-fit rounded-full bg-icons text-main-bg p-4 cursor-pointer"
          onClick={playMusic}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;
