import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { IconType } from "react-icons/lib";

const NFTTabs = ({ dataTab, icon }: { dataTab: string[], icon?: React.ReactNode}) => {
  return (
    <div className={cn("flex flex-col gap-[1rem]")}>
      {dataTab.map((el, index) => (
        <div key={index} className={cn("flex items-center gap-[1rem] line-height-[0] py-[1rem] border-b-[1px] border-shadow-dark")}>
          <Image
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className={cn("rounded-full")}
          />
          <div className={cn("grid self-start line-height-[1] mt-[6px]")}>
            <span className={cn("font-bold flex items-center")}>
              Offer by $770 by <span>User</span>
              {icon}
            </span>
            <small className={cn("mt-[0.2rem]")}>Jun 14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
