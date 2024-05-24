import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { cn } from "@/lib/utils";
import images from "@/img";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { AccountType } from "@/Context/AccountProvider";
import Link from "next/link";

const AuthorProfileCard = ({
  currentAccount,
  account,
}: {
  currentAccount: string;
  account: AccountType;
}) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput") as HTMLInputElement;
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    setShare(!share);
    setReport(false);
  };

  const openReport = () => {
    setReport(!report);
    setShare(false);
  };

  return (
    <div className={cn("relative z-9 mt-20 ")}>
      <div
        className={cn(
          "mx-auto w-4/5tt grid grid-cols-1 justify-self-center items-center bg-main-bg p-2 rounded-lg shadow-custom gap-12",
          "lg:w-11/12tt lg:grid-cols-[1fr_4fr_1.3fr] lg:p-10 lg:gap-4",
          "md:grid-cols-[1fr_2fr] md:gap-4"
        )}
      >
        <div className={cn("rounded-lg text-center mx-auto ")}>
          <Image
            src={images.nft_image_1}
            alt="NFT IMAGES"
            width={220}
            height={220}
            className={cn("rounded-lg ")}
          />
        </div>
        <div className={cn("ml-6")}>
          <h2 className={cn("text-4xl flex leading-none ")}>
            {account.username} <MdVerified />
          </h2>
          <div className={cn("mt-[1rem] flex items-center")}>
            <input
              type="text"
              value={currentAccount}
              onChange={() => {}}
              id="myInput"
              className={cn(
                "outline-none w-1/3 text-ellipsis whitespace-nowrap overflow-hidden text-lg border-none bg-transparent"
              )}
            />
            <FiCopy
              onClick={copyAddress}
              className={cn(
                " ml-2 transition-all duration-300 ease-in",
                "hover:shadow-custom hover:cursor-pointer hover:text-icons"
              )}
            />
          </div>
          <p className={cn("text-md leading-none w-[90%]  ")}>
            Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
            Contributing to @ether_cards, an NFT Monetization Platform.
          </p>
          <div className={cn("flex items-center gap-4 text-2xl mt-4 ")}>
            <Link
              href={account.facebook || "#"}
              className={cn(
                "bg-icons text-main-bg rounded-full grid p-2 border-[1px] border-icons",
                "transition-all duration-300 ease-in cursor-pointer",
                "hover:shadow-custom hover:bg-main-bg hover:border-icons hover:text-icons"
              )}
            >
              <TiSocialFacebook />
            </Link>
            <Link
              href={account.instagram || "#"}
              className={cn(
                "bg-icons text-main-bg rounded-full grid p-2 border-[1px] border-icons",
                "transition-all duration-300 ease-in cursor-pointer",
                "hover:shadow-custom hover:bg-main-bg hover:border-icons hover:text-icons"
              )}
            >
              <TiSocialInstagram />
            </Link>
            <Link
              href={"#"}
              className={cn(
                "bg-icons text-main-bg rounded-full grid p-2 border-[1px] border-icons",
                "transition-all duration-300 ease-in cursor-pointer",
                "hover:shadow-custom hover:bg-main-bg hover:border-icons hover:text-icons"
              )}
            >
              <TiSocialLinkedin />
            </Link>
            <Link
              href={"#"}
              className={cn(
                "bg-icons text-main-bg rounded-full grid p-2 border-[1px] border-icons",
                "transition-all duration-300 ease-in cursor-pointer",
                "hover:shadow-custom hover:bg-main-bg hover:border-icons hover:text-icons"
              )}
            >
              <TiSocialYoutube />
            </Link>
          </div>
        </div>
        <div className={cn("flex justify-around items-center gap-8")}>
          {currentAccount !== account.accountAddress && (
            <Button onClick={() => {}}>Follow</Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger className="">
              <MdCloudUpload className={cn("text-4xl cursor-pointer")} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-main-bg border border-primary">
              {/* <DropdownMenuLabel className="mt-4">

              </DropdownMenuLabel> */}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <p
                  className={cn(
                    "flex items-center gap-4 cursor-pointer transition-all duration-300 ease-in p-[0.3rem_0.5rem] rounded-sm",
                    "hover:bg-icons hover:text-main-bg"
                  )}
                >
                  <TiSocialFacebook /> Facebook
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p
                  className={cn(
                    "flex items-center gap-4 cursor-pointer transition-all duration-300 ease-in p-[0.3rem_0.5rem] rounded-sm",
                    "hover:bg-icons hover:text-main-bg"
                  )}
                >
                  <TiSocialInstagram /> Instagram
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p
                  className={cn(
                    "flex items-center gap-4 cursor-pointer transition-all duration-300 ease-in p-[0.3rem_0.5rem] rounded-sm",
                    "hover:bg-icons hover:text-main-bg"
                  )}
                >
                  <TiSocialLinkedin /> LinkedIn
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p
                  className={cn(
                    "flex items-center gap-4 cursor-pointer transition-all duration-300 ease-in p-[0.3rem_0.5rem] rounded-sm",
                    "hover:bg-icons hover:text-main-bg"
                  )}
                >
                  <TiSocialYoutube /> YouTube
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="">
              <BsThreeDots
                onClick={openReport}
                className={cn("text-4xl cursor-pointer")}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-main-bg border border-primary">
              {/* <DropdownMenuLabel className="mt-4">

              </DropdownMenuLabel> */}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <p
                  className={cn(
                    "flex items-center gap-8  px-4 py-2 cursor-pointer hover:bg-icons hover:text-main-bg"
                  )}
                >
                  <MdOutlineReportProblem /> Report abuse
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
