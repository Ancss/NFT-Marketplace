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
import { TMarketItem } from "@/types";
import Filter from "@/components/Filter";
import { Suspense } from "react";

const Home = () => {

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
      <Suspense fallback={<Loader />}>
        <NFTCard />
      </Suspense>
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      <Suspense fallback={<Loader />}>
        <FollowerTab />
      </Suspense>


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
