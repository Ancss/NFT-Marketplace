import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TMarketItem } from "@/type";

const NFTCard = ({ NFTData }: { NFTData: TMarketItem[] }) => {
  const [like, setLike] = useState(true);
  []
  const likeNft = () => {
    setLike(!like);
  };

  return (
    <div className={cn("w-4/5tt mx-auto grid gap-12 mb-40 md:w-11/12tt lg:grid-cols-2 lg:gap-6 xl:grid-cols-3")}>
      {NFTData.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i}>
          <div className={cn("bg-main-bg p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-custom")}>
            <div className={cn("grid grid-cols-4 grid-rows-4 overflow-hidden rounded-lg")}>
              <Image
                src={el.image}
                alt="NFT images"
                className={cn("col-span-full row-span-full transition-all duration-400 ease-in-out object-contain w-full hover:scale-105")}
              />
            </div>

            <div className={cn("grid grid-cols-4 grid-rows-4 col-span-full row-start-1 row-end-4 z-50 flex items-start justify-between overflow-hidden")}>
              <div className={cn("bg-icons p-2 rounded-full m-4 text-main-bg flex items-center gap-2 text-xl")}>
                <div onClick={() => likeNft()}>
                  {like ? <AiOutlineHeart /> : <AiFillHeart className={cn("text-main-bg")} />}
                  22
                </div>
              </div>

              <div className={cn("bg-main-bg p-20 text-center skew-x-45 mr-[-2rem] rounded-bl-lg")}>
                <div className={cn("skew-x-[-45deg] bg-main-bg")}>
                  <p className={cn("text-xl font-bold")}>3h : 15m : 20s</p>
                </div>
              </div>
            </div>

            <div className={cn("col-span-full row-start-3 row-end-5 z-50 grid grid-cols-[1.5fr_1fr] overflow-hidden items-end")}>
              <div className={cn("bg-main-bg ml-[-3rem] p-[0_0_0.5rem_0] skew-x-45 rounded-tr-lg")}>
                <div className={cn("pl-12 skew-x-[-45deg]")}>
                  <h4 className={cn("text-2xl")}>
                    {el.name} #{el.tokenId}
                  </h4>

                  <div className={cn("flex justify-between items-end")}>
                    <div className={cn("border border-icons p-1 rounded-sm flex items-center")}>
                      <small className={cn("bg-icons text-main-bg rounded-sm p-1")}>Current Bid</small>
                      <p className={cn("p-2 font-bold")}>{el.price} ETH</p>
                    </div>
                    <div>
                      <small>61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cn("text-end text-icons text-2xl m-6")}>
                <BsImages />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard;
