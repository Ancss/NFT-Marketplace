'use client'
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

//INTERNAL IMPORT
import images from "@/img";

const Service = () => {
  const [services] = useState([
    { step: "Step 1", title: "Filter & Discover", image: images.service1, desc: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money" },
    { step: "Step 2", title: "Filter & Discover", image: images.service2, desc: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money" },
    { step: "Step 3", title: "Connect Wallet", image: images.service3, desc: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money" },
    { step: "Step 4", title: "Start Trading", image: images.service1, desc: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money" }
  ])
  return (
    <div className={cn("w-4/5tt mx-auto my-32 md:w-11/12tt")}>
      <div className={cn("grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-12")}>
        {services.map((item, index) => (
          <div className="text-center" key={index}>
            <Image src={item.image} className="m-auto" alt={item.title} width={100} height={100} />
            <p className={cn("mt-12 mb-8")}>
              <span className={cn("px-6 py-2 rounded-full bg-icons text-shadow-dark")}>{item.step}</span>
            </p>
            <h3>{item.title}</h3>
            <p className="">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
