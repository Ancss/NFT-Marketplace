import React from "react";

//INTERNAL IMPORT
import images from "@/img";
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import CollectionProfile from "@/components/CollectionProfile";
import NFTCardTwo from "@/components/NFTCardTwo";
import Slider from "@/components/Slider";
import Filter from "@/components/Filter";
import { TMarketItem } from "@/type";


const collection = () => {
  const collectionArray: TMarketItem[] = [];
  return (
    <div>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTs={collectionArray} />

      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
