import React, { useEffect, useState, useContext } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import Brand from "@/components/Brand";
import Category from "@/components/Category";
import NFTDetailsPage from "./NFTDetailsPage";
import { TMarketItem } from "@/types";


const NFTDetails = () => {
  const searchParams = useSearchParams();

  return (
    <div>
      <NFTDetailsPage nft={{
        image: searchParams.get('image') || "",
        tokenId: searchParams.get('tokenId') || "",
        tokenURI: searchParams.get('tokenURI') || "",
        name: searchParams.get('name') || "",
        owner: searchParams.get('owner') || "",
        price: searchParams.get('price') || "",
        seller: searchParams.get('seller') || "",
        description: searchParams.get('description') || "",
      }} />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
