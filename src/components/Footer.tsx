import React from 'react';
import { DiAws  } from 'react-icons/di';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';
import Discover from './NavBar/Discover';
import HelpCenter from './NavBar/HelpCenter';

const Footer = () => {
  return (
    <div className="w-full py-6 relative">
      <div className="w-4/5tt mx-auto grid grid-cols-2 gap-12 items-start justify-between md:grid-cols-[1fr_1fr_1fr_2fr] sm:grid-cols-2">
        <div className='col-span-full md:col-span-1'>
          <a href="/">
            <DiAws  className="text-5xl" />
          </a>
          <p className='my-4'>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className="flex gap-5 text-xl items-cente r">
            <a href="#" className="p-2 rounded-full grid hover:bg-icons hover:text-shadow-dark hover:shadow-custom">
              <TiSocialFacebook />
            </a>
            <a href="#" className="p-2 rounded-full grid hover:bg-icons hover:text-shadow-dark hover:shadow-custom">
              <TiSocialLinkedin />
            </a>
            <a href="#" className="p-2 rounded-full grid hover:bg-icons hover:text-shadow-dark hover:shadow-custom">
              <TiSocialTwitter />
            </a>
            <a href="#" className="p-2 rounded-full grid hover:bg-icons hover:text-shadow-dark hover:shadow-custom">
              <TiSocialYoutube />
            </a>
            <a href="#" className="p-2 rounded-full grid hover:bg-icons hover:text-shadow-dark hover:shadow-custom">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-bold'>Discover</h3>
          <Discover />
        </div>

        <div>
          <h3 className='text-xl font-bold'>Help Center</h3>
          <HelpCenter />
        </div>

        <div className=" md:col-span-1 col-span-full sm:col-span-full">
          <h3 className='text-xl font-bold'>Subscribe</h3>
          <div className="w-full flex justify-between items-center px-8 py-4 bg-icons text-shadow-dark rounded-full mt-12">
            <input type="email" placeholder="Enter your email *" className="bg-transparent border-none outline-none placeholder:text-primary-foreground w-full text-shadow-dark placeholder-text-shadow-dark" />
            <RiSendPlaneFill className="cursor-pointer text-4xl" />
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
