import React from "react";
import { cn } from "@/lib/utils"; // cn function for dynamic class names

// INTERNAL IMPORT
import { TMarketItem } from "@/type";
import NFTDetailsImg from "./NFTDetailsImg";
import NFTDescription from "./NFTDescription";

const NFTDetailsPage = ({ nft }: { nft: TMarketItem }) => {
  return (
    <div className={cn("w-full my-20 md:my-8")}>
      <div className={cn(" mx-auto grid md:grid-cols-[1.2fr_1fr] gap-20 grid-cols-1")}>
        <NFTDetailsImg nft={nft} />
        <NFTDescription nft={nft} />
      </div>
    </div>
  );
};

export default NFTDetailsPage;
