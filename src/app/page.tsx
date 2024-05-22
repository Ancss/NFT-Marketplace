"use client"

import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import BigNFTSilder from "@/components/BigNFTSilder";
import Brand from "@/components/Brand";
import Category from "@/components/Category";
import Collection from "@/components/Collection/Collection";
import FollowerTab from "@/components/FollowerTab";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import NFTCard from "@/components/NTFCard";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
import Subscribe from "@/components/Subscribe";
import Title from "@/components/Title";
import Video from "@/components/Video";
import AudioLive from "@/components/AudioLive/AudioLive";
import { getTopCreators } from "@/lib/getTopCreators";
import { TMarketItem } from "@/type";
import React, { useState, useEffect, useContext } from "react";
import Filter from "@/components/Filter";

const Home = () => {
  const { checkIfWalletConnected, currentAccount, fetchNFTs } = useContext(
    NFTMarketplaceContext
  )!;
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const [nfts, setNfts] = useState<TMarketItem[]>([]);

  useEffect(() => {
    // if (currentAccount) {
    fetchNFTs().then((items: TMarketItem[]) => {
      console.log(nfts);
      setNfts(items?.reverse());
    });
    // }
  }, []);

  //CREATOR LIST

  const creators = getTopCreators(nfts);
  // console.log(creators);

  return (
    <div >
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
       {creators.length == 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )}

      <Slider />
      <Collection />
     

      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
