import React from 'react';
import Image from 'next/image';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';
import { cn } from '@/lib/utils';
import images from '@/img';

const CollectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={cn('mt-20')}>
      <div className={cn('mx-auto w-4/5tt grid lg:grid-cols-[1fr_3fr] lg:gap-12 grid-cols-1 lg:p-2 gap-4 items-center bg-main-bg shadow-custom rounded-lg p-4 ')}>
        <div>
          <Image
            src={images.nft_image_1}
            alt="nft image"
            width={800}
            height={800}
            className={cn('rounded-lg')}
          />

          <div className={cn('flex gap-4 text-2xl items-center justify-center mt-2')}>
            <a href="#" className={cn(' text-lg bg-icons text-main-bg border-[1px] border-icons rounded-full grid p-2', 'transition-all duration-300 ease-in', 'hover:bg-main-bg hover:text-icons hover:shadow-custom')}>
              <TiSocialFacebook />
            </a>
            <a href="#" className={cn(' text-lg bg-icons text-main-bg border-[1px] border-icons rounded-full grid p-2', 'transition-all duration-300 ease-in', 'hover:bg-main-bg hover:text-icons hover:shadow-custom')}>
              <TiSocialInstagram />
            </a>
            <a href="#" className={cn(' text-lg bg-icons text-main-bg border-[1px] border-icons rounded-full grid p-2', 'transition-all duration-300 ease-in', 'hover:bg-main-bg hover:text-icons hover:shadow-custom')}>
              <TiSocialLinkedin />
            </a>
            <a href="#" className={cn(' text-lg bg-icons text-main-bg border-[1px] border-icons rounded-full grid p-2', 'transition-all duration-300 ease-in', 'hover:bg-main-bg hover:text-icons hover:shadow-custom')}>
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className={cn('self-start')}>
          <h1 className={cn(' text-4xl font-bold leading-none mt-4')}>Awesome NFTs Collection</h1>
          <p className={cn('leading-snug w-[70%] text-sm mt-8')}>
            Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.
          </p>

          <div className={cn('grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 bg-main-bg mt-6')}>
            {cardArray.map((el, i) => (
              <div
                key={i + 1}
                className={cn('bg-main-bg shadow-[0_0_4px_rgba(93,222,226,1)] py-6 rounded-2xl text-center')}
              >
                <small>Floor price</small>
                <p className={cn('text-4xl')}>${i + 1}95,4683</p>
                <span className={cn('text-icons')}>+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProfile;
