"use client"

import React, { useState, useContext } from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Notification from '@/components/NavBar/Notification'
import Error from '@/components/Error'
import images from "@/img";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
import Profile from "./Profile";
import SideBar from "./SideBar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const router = useRouter();
  console.log(useContext(NFTMarketplaceContext), NFTMarketplaceContext)
  const { currentAccount, connectWallet, openError } = useContext(NFTMarketplaceContext)!;

  return (
    <div className="relative  z-50  mx-auto mt-8 mb-12">
      <div className="grid grid-cols-[1fr_3fr] md:grid-cols-2 sm:grid-cols-[1fr_4fr] gap-4 items-center">
        <div className="grid grid-cols-[1fr_2fr] items-center gap-4">
          <DiJqueryLogo className="text-icons text-6xl cursor-pointer" onClick={() => router.push("/")} />
          <div className=" items-center w-3/5  border-2 border-icons rounded-full p-2 hidden md:flex">
            <input className="w-full placeholder:text-primary bg-transparent outline-none px-2" type="text" placeholder="Search NFT" />
            <BsSearch className="text-2xl cursor-pointer mr-4" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr] md:grid-cols-[1fr_1fr_0.5fr_1fr_0.5fr]  gap-4 items-center justify-items-center">
          <p className="cursor-pointer text-lg md:block hidden" onClick={() => setDiscover(!discover)}>Discover</p>
          <p className="cursor-pointer text-lg md:block hidden whitespace-nowrap" onClick={() => setHelp(!help)}>Help Center</p>
          <div className="relative cursor-pointer">
            <MdNotifications className="text-3xl" onClick={() => setNotification(!notification)} />
            {notification && <Notification />}
          </div>
          {currentAccount === "" ? (
            <Button className=" w-10/12" onClick={connectWallet} >Connect</Button>
          ) : (
            <Button className="w-10/12" onClick={() => router.push("/uploadNFT")} >Create</Button>
          )}
          <div className="relative cursor-pointer">
            <Image src={images.user1} alt="Profile" width={40} height={40} className="rounded-full" onClick={() => setProfile(!profile)} />
            {profile && <Profile currentAccount={currentAccount!} />}
          </div>
          <div className="relative cursor-pointer md:hidden">
            <CgMenuRight
              className={cn('text-3xl')}
              onClick={() => setOpenSideMenu(true)}
            />
          </div>
        </div>
      </div>

      {openSideMenu && (
        <div className="fixed left-0 top-0 w-9/12 bg-main-bg shadow-custom z-40 h-screen overflow-y-auto">
          <SideBar setOpenSideMenu={() => setOpenSideMenu(false)} currentAccount={currentAccount!} connectWallet={connectWallet} />
        </div>
      )}
      {openError && <Error />}
    </div>
  );
};

export default NavBar;
