'use client'
import React, { useContext } from "react";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { cn } from "@/lib/utils";
import UploadNFT from "./UloadNFT";

const UploadNFTComponent = () => {
  const { createNFT, uploadToPinata } = useContext(NFTMarketplaceContext)!;

  return (
    <div className={cn("w-full my-32")}>
      <div className={cn("xl:w-3/5 lg:w-4/5 w-full mx-auto")}>
        <div className={cn("border-b border-shadow-dark")}>
          <h1 className={cn("text-4xl leading-none")}>Create New NFT</h1>
          <p className={cn("text-lg leading-snug w-7/10 py-4")}>
            You can set preferred display name, create your profile URL and manage other personal settings.
          </p>
        </div>

        <div className={cn("border-b border-shadow-dark mt-8")}>
          <h2 className={cn("text-3xl leading-none")}>Image, Video, Audio, or 3D Model</h2>
          <p className={cn("text-lg font-medium py-4")}>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
          </p>
        </div>

        <div>
          {/* uploadToIPFS={uploadToIPFS} */}
          <UploadNFT
            createNFT={createNFT}
            uploadToPinata={uploadToPinata}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFTComponent;
