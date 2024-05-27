"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TMarketItem } from "@/types";
import { useTimer } from "react-timer-hook";
import React, { useState, useEffect, useContext, Suspense } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { LikeOrDislike } from "@/actions/NFT";
import { Like } from "./Like";

const Time = () => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(
      new Date().getTime() + 1000 * (3 * 60 * 60 + 15 * 60 + 20)
    ),
  });
  const formatTime = (num: number) => { return num < 10 ? `0${num}` : num; };
  return (
    <span>
      {`${formatTime(hours)}h : ${formatTime(minutes)}m : ${formatTime(
        seconds
      )}s`}{" "}
    </span>

  );
};

const NFTCard = () => {
  const { checkIfWalletConnected, currentAccount, nfts, setNfts, likes } =
    useContext(NFTMarketplaceContext)!;


  return (
    <div
      className={cn(
        "mx-auto grid gap-12 mb-40 sm:grid-cols-1 md:grid-cols-2 md:gap-6 xl:grid-cols-3"
      )}
    >
      {nfts.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i}>
          <div
            className={cn(
              " h-72 grid grid-cols-4 grid-rows-4 bg-main-bg p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-custom"
            )}
          >
            <div
              className={cn(
                " col-[1/-1] row-[1/-1] overflow-hidden rounded-lg"
              )}
            >
              <Image
                src={el.image}
                width={1024}
                height={768}
                alt="NFT images"
                className={cn(
                  "col-span-full object-fill row-span-full transition-all duration-400 ease-in-out w-full"
                )}
              />
            </div>

            <div
              className={cn(
                " col-[1/-1] row-[1/2] z-9 flex items-start justify-between overflow-hidden"
              )}
            >
              <Like nFTTokenId={el.tokenId!} currentAccount={currentAccount!}></Like>

              <div
                className={cn(
                  " text-primary bg-main-bg skew-x-[45deg] px-8 py-4 text-center  mr-[-2rem] rounded-bl-lg"
                )}
              > <div className={cn("skew-x-[-45deg] bg-main-bg")}>
                  <p className={cn("text-xl font-bold whitespace-nowrap")}>
                    {" "}
                    <Time></Time>
                  </p>
                </div>

              </div>
            </div>

            <div
              className={cn(
                " col-[1/-1] row-[3/-1] overflow-hidden   items-end  pb-0"
              )}
            >
              <div
                className={cn(
                  "bg-main-bg ml-[-3rem]  h-full skew-x-[35deg] overflow-hidden text-ellipsis whitespace-nowrap p-2 w-max  rounded-tr-lg"
                )}
              >
                <div className={cn("pl-12  skew-x-[-35deg]")}>
                  <h4 className={cn("text-2xl mt-2")}>
                    {el.name} # {el.tokenId}
                  </h4>

                  <div
                    className={cn("flex mt-2 justify-start gap-4 items-end")}
                  >
                    <div
                      className={cn(
                        "border border-icons p-1 rounded-sm flex items-center"
                      )}
                    >
                      <small
                        className={cn("bg-icons text-main-bg rounded-sm p-1")}
                      >
                        Current Bid
                      </small>
                      <p className={cn("p-2 font-bold")}>{el.price} ETH</p>
                    </div>
                    <div>
                      <small>61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard;
