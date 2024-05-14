import React from "react";
import Image from "next/image";
import { DiAws } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className="w-full relative">
      <div className="w-4/5 mx-[auto] my-[0] grid grid-cols-[1.3fr_repeat(2,_1fr)_2fr] items-start justify-between gap-12">
        <div className="footer_box_social">
          {/* <Image src={images.logo} alt="footer logo" height={100} width={100} /> */}
          <a href="/">
            <DiAws className="text-[5rem]" />
          </a>
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className="flex gap-[1.3rem] text-[1.5rem] items-center">
            <a href="#" className="p-[.5rem] rounded-[50%] [transition:all_.3s_ease-in] grid hover:[box-shadow:var(--box-shadow)]">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className="footer_box_discover">
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className="footer_box_help">
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className="subscribe">
          <h3>Subscribe</h3>

          <div className="w-full flex justify-between items-center px-8 py-6 rounded-[5rem] mt-12">
            <input type="email" className="bg-transparent border-none outline-[none] w-[90%] " placeholder="Enter your email *" />
            <RiSendPlaneFill className="cursor-pointer text-[2rem]" />
          </div>
          <div className="px-8 py-4">
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              world first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
