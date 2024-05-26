'use client'
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import images from "@/img";
import { Button } from "./ui/button";

const BigNFTSilder = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Daulat Hussain",
      collection: "GYm",
      price: "00664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Shoaib Hussain",
      collection: "Home",
      price: "0000004 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "0000064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "4664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className="mt-16 mb-36 md:mb-12 mx-auto w-4/5tt">
      <div className="grid grid-cols-1 grid-rows-12 md:grid-cols-12 md:grid-rows-12 gap-8 items-center h-[80vh]">
        <div className=" md:h-full row-[6/-1] col-span-full md:col-[1_/7] border border-primary md:row-span-full bg-main-bg shadow-custom rounded-lg p-8 relative z-10">
          <h2 className="text-3xl mb-4">{sliderData[idNumber].title}</h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-full overflow-hidden w-12 h-12">
                <Image src={sliderData[idNumber].image} alt="profile image" width={50} height={50} />
              </div>
              <div>
                <p>Creator</p>
                <h4 className="flex items-center">{sliderData[idNumber].name} <MdVerified /></h4>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <AiFillFire className="text-4xl" />
              <div>
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="border-4 h-24 border-shadow-dark rounded-md my-8 px-12 ">
              <small className=" bg-shadow-dark py-6 px-8 rounded-lg text-lg whitespace-nowrap">Current Bid</small>
              <p className="mt-8">{sliderData[idNumber].price} <span>$221,21</span></p>
            </div>
            <div className="flex items-center gap-4">
              <MdTimer className="text-2xl" />
              <span>Auction ending in</span>
            </div>
            <div className="flex items-center gap-8 mt-4 pb-12 border-b border-shadow-dark text-center">
              <div><p className="text-2xl font-bold">{sliderData[idNumber].time.days}</p><span>Days</span></div>
              <div><p className="text-2xl font-bold">{sliderData[idNumber].time.hours}</p><span>Hours</span></div>
              <div><p className="text-2xl font-bold">{sliderData[idNumber].time.minutes}</p><span>mins</span></div>
              <div><p className="text-2xl font-bold">{sliderData[idNumber].time.seconds}</p><span>secs</span></div>
            </div>
            <div className="flex justify-center gap-16 py-8">
              <Button onClick={() => { }} >Place</Button>
              <Button onClick={() => { }} >View</Button>
            </div>
          </div>
          <div className="flex justify-center gap-8 mt-8 select-none">
            <TbArrowBigLeftLines className="cursor-pointer text-3xl" onClick={dec} />
            <TbArrowBigRightLine className="cursor-pointer text-3xl" onClick={inc} />
          </div>
        </div>
        <div className="h-[100vh] md:h-[unset]  row-[1/-1] w-10/12 mx-auto col-span-full md:col-[5_/_-1] md:row-span-full border border-primary  bg-main-bg shadow-custom rounded-2xl p-4 relative">
          <div className=" w-full h-full clip-path-content rounded-lg" style={{
          }}>
            <Image src={sliderData[idNumber].nftImage} alt="NFT IMAGE"
              layout="responsive" 
              width={50}
              height={50}
              className="rounded-2xl" />
            <div className="absolute top-12 right-12 flex items-center gap-4 bg-icons text-shadow-dark p-2 rounded-full">
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSilder;
