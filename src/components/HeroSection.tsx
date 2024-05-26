'use client'
import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// INTERNAL IMPORT
import images from "@/img"; // Adjust path if needed
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { Button } from "./ui/button";

// SMART CONTRACT IMPORT

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext)!;
  const router = useRouter();

  return (
    <div className="w-4/5tt mx-auto md:my-12  my-4 sm:w-11/12tttt">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-8">
        <div className="pr-8 sm:pr-24">
          <h1 className="text-4xl mt-4 sm:mt-12 font-bold  leading-none sm:text-6xl sm:leading-none">{titleData} 🖼️</h1>
          <p className="my-8">
            Discover the most outstanding NFTs in all topics of life. Create your NFTs and sell them.
          </p>
          <Button
          className=" w-48 text-xl h-12 "
            onClick={() => router.push("/searchPage")}
          >Start your search</Button>
        </div>
        <div>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
            priority // Use this to preload the image if it's in the viewport
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
