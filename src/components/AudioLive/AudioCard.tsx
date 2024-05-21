import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

// INTERNAL IMPORT
import images from "@/img";
import LikeProfile from "../LikeProfile";

const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  const likeNft = () => {
    setLike(!like);
  };

  const playMusic = () => {
    setPlay(!play);
  };

  return (
    <div className=" relative grid grid-cols-5 grid-rows-5 gap-4 overflow-hidden transition-all ease-in duration-300 rounded-2xl hover:shadow-custom">
      <div className="col-span-full row-span-1 flex justify-between items-center z-10">
        <div className={`flex items-center gap-2.5 px-6 py-2 rounded-2xl cursor-pointer bg-icons text-shadow-dark m-4 ${like ? "text-main-bg" : ""}`} onClick={likeNft}>
          {like ? <AiFillHeart className="text-2xl"/> : <AiOutlineHeart className="text-2xl"/>}
          <span>24</span>
        </div>
        <div className="relative skew-x-[35deg] mt-[-1rem]  px-12 py-2 mr-[-1.4rem]  bg-main-bg  rounded-bl-lg">
          <div className=" text-center skew-x-[-35deg]" >
            <small className="font-medium">Reaming time</small>
            <h5 className="text-xl whitespace-nowrap">3h : 15m :20s</h5>
          </div>
        </div>
      </div>
      <div className="col-span-full row-[3/4] flex justify-between items-center gap-8 px-12 z-10">
        <Image src={images.musicWave} alt="music" width={200} height={20} layout="responsive" />
        <div className={`p-5 rounded-full bg-icons text-main-bg text-4xl cursor-pointer ${play ? "text-main-bg" : ""}`} onClick={playMusic}>
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
      <div className="col-[1/-1] mr-8  row-[4/-1]  z-10 flex justify-between items-center bg-main-bg p-8 rounded-tr-2xl">
        <div>
          <h4 className="text-lg font-bold whitespace-nowrap">NFT music #1123</h4>
          <div className=" relative border mt-4 border-icons rounded-md p-2 h-12 cursor-pointer">
            <small className=" absolute top-[-1rem] left-2 bg-icons text-main-bg p-1 px-2 rounded-md">Price</small>
            <p className="text-md font-bold mt-2">$3,221.33</p>
          </div>
        </div>
        <div className="text-right">
          <LikeProfile />
          <small className="mt-8">24 in stock</small>
        </div>
      </div>
      <div className="col-span-full row-span-6 absolute w-full h-[80%]">
        <Image src={images.creatorbackground10} alt="background" className=" object-cover object-center"  layout="fill" />
      </div>
    </div>
  );
};

export default AudioCard;
