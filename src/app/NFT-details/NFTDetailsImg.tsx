import { cn } from "@/lib/utils";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import React, { useState } from "react";
import { TMarketItem } from "@/types";
import { useSearchParams } from "next/navigation";

const NFTDetailsImg = ({ nft }: { nft: TMarketItem }) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const toggleDescription = () => setDescription(!description);
  const toggleDetails = () => setDetails(!details);
  const toggleLike = () => setLike(!like);
  const searchParams = useSearchParams()

  return (
    <div className={cn("w-full")}>
      <div>
        <div className={cn("grid")}>
          <div className={cn("grid grid-cols-[1fr] grid-rows-[auto_auto] z-[11] self-start p-[2rem]")}>
            <div className={cn("flex items-center justify-between")}>
              <BsImages className={cn("text-[1.4rem]")} />
              <p onClick={toggleLike} className={cn("bg-icons p-[0.2rem_1rem] text-main-bg flex items-center gap-[0.5rem] rounded-[2rem] cursor-pointer")}>
                {like ? <AiOutlineHeart className={cn("text-[1.4rem]")} /> : <AiFillHeart className={cn("text-[1.4rem]")} />}
                <span>23</span>
              </p>
            </div>
            <div>
              <Image src={nft.image} alt="NFT image" width={500} height={500} className={cn("rounded-[1rem] w-full object-cover")} />
            </div>
          </div>
        </div>

        <div className={cn("flex items-center justify-between bg-icons-bg p-[1rem] rounded-[0.5rem] cursor-pointer mt-[1rem] text-shadow-dark")} onClick={toggleDescription}>
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={cn("p-[0.1rem_1rem] mt-2 text-[1rem]")}>
            <p>{nft.description}</p>
          </div>
        )}

        <div className={cn("flex items-center justify-between bg-icons-bg p-[1rem] rounded-[0.5rem] cursor-pointer mt-[1rem] text-shadow-dark")} onClick={toggleDetails}>
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={cn("p-[0.1rem_1rem] mt-2 text-[1rem]")}>
            <small>2000 x 2000 px. IMAGE (685KB)</small>
            <p>
              <small>Seller Address</small>
              <br />
              {nft.seller}
            </p>
            <p>
              <small>Token ID</small>
              &nbsp;&nbsp;{nft.tokenId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
