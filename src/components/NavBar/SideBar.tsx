// React imports
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Icons
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
} from "react-icons/ti";
import { DiAws } from "react-icons/di";

// Internal imports
import images from "@/img"; // Updated to use absolute path
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

// TypeScript Props
interface SideBarProps {
  setOpenSideMenu: (open: boolean) => void;
  currentAccount: string;
  connectWallet: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const router = useRouter();

  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "uploadNFT",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  //------HELP CNTEER
  const helpCenter = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign Up",
      link: "signUp",
    },
    {
      name: "LogIn",
      link: "login",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <div className={cn("absolute top-0 left-0 w-full h-full bg-main-bg z-50")}>
      <GrClose
        className={cn("absolute top-12 right-12 cursor-pointer transition duration-200 ease-in-out text-icons hover:rotate-45")}
        onClick={() => setOpenSideMenu(false)}
      />
      <div className={cn("p-8 pt-0 pb-2 border-b border-icons-light bg-main-bg")}>
        <Link href={{ pathname: '/' }}>
          <DiAws className={cn("text-5xl my-8")} />
        </Link>

        <p>
          Discover the most outstanding articles on all topics of NFT & write your own stories and share them.
        </p>
        <div className={cn("flex gap-5 text-xl items-center")}>
          <a href="#" className={cn("p-1 rounded-full transition-all duration-300 grid hover:bg-icons hover:text-shadow-dark")}>
            <TiSocialFacebook />
          </a>
          <a href="#" className={cn("p-1 rounded-full transition-all duration-300 grid hover:bg-icons hover:text-shadow-dark")}>
            <TiSocialLinkedin />
          </a>
          <a href="#" className={cn("p-1 rounded-full transition-all duration-300 grid hover:bg-icons hover:text-shadow-dark")}>
            <TiSocialTwitter />
          </a>
          <a href="#" className={cn("p-1 rounded-full transition-all duration-300 grid hover:bg-icons hover:text-shadow-dark")}>
            <TiSocialYoutube />
          </a>
          <a href="#" className={cn("p-1 rounded-full transition-all duration-300 grid hover:bg-icons hover:text-shadow-dark")}>
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={cn("px-8 py-4 uppercase font-medium border-b border-icons-light")}>

        <div>
          <div onClick={() => setOpenHelp(prev => !prev)} className={cn("flex justify-between text-md items-center cursor-pointer")}>
            <p className="font-bold mb-2">Discover</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={cn("pl-4")}>
              {helpCenter.map((el, i) => (
                <p key={i} className="mb-2">
                  <Link href={el.link}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div onClick={() => setOpenDiscover(prev => !prev)} className={cn("flex justify-between text-md items-center cursor-pointer")}>
            <p className="font-bold">Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={cn("pl-4 ")}>
              {discover.map((el, i) => (
                <p key={i} className="mb-2">
                  <Link href={el.link}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

      </div>
      <div className={cn("p-8 flex round items-center justify-between")}>
        {currentAccount === "" ? (
          <Button onClick={connectWallet} >connect</Button>
        ) : (
          <Button onClick={() => router.push("/uploadNFT")} >Create</Button>
        )}
        <Button onClick={() => { }} >Connect Wallet</Button>
      </div>
    </div>
  );
};

export default SideBar;
