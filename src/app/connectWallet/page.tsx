'use client'
import React, { useState, useContext } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// IMPORT FROM SMART CONTRACT
import images from "@/img";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";

const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext)!;
  const providerArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "walletConnect",
    },
    {
      provider: images.provider3,
      name: "walletlink",
    },
    {
      provider: images.provider1,
      name: "Formatic",
    },
  ]; // Populate this array with wallet providers as needed

  return (
    <div className={cn("w-full my-20")}>
      <div className={cn("w-1/2 mx-auto")}>
        <h1 className={cn("text-3xl leading-none")}>Connect your wallet</h1>
        <p className={cn("text-xl mt-4 pb-8 border-b border-shadow-dark")}>
          Connect with one of our available wallet providers or create a new one.
        </p>

        <div className={cn("my-20")}>
          {providerArray.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => {
                setActiveBtn(i + 1);
                connectWallet();
              }}
              className={cn(
                "flex items-center gap-8 rounded-lg mt-6 p-4 cursor-pointer transition-all duration-300",
                { "bg-shadow-dark": activeBtn === i + 1 },
                "hover:bg-shadow-dark"
              )}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={cn("rounded-full")}
              />
              <p className={cn("text-1.5xl leading-none")}>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
