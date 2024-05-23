'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TMarketItem } from '@/types';
import LikeProfile from './LikeProfile';

const NFTCardTwo = ({ NFTs }: { NFTs: TMarketItem[] }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    setLike(!like);
    setLikeInc(like ? likeInc - 1 : likeInc + 1);
  };

  return (
    <div className={cn('mx-auto  grid lg:grid-cols-3 gap-12 mb-56  grid-cols-1 md:w-9/10 md:grid-cols-2')}>
      {NFTs?.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i}>
          <div className={cn('cursor-pointer relative transition-all duration-300 ease-in rounded-lg', 'hover:shadow-[0_0_15px_rgba(93,222,226,1)]')}>
            <div className={cn('absolute w-full p-4 grid-cols-1 z-2')}>
              <div className={cn('flex items-center w-full justify-between')}>
                <BsImage className={cn('text-icons text-4xl')} />
                <p onClick={likeNFT} className={cn('flex items-center gap-4 text-[1.2rem] bg-icons text-main-bg rounded-full px-2 py-1')}>
                  {like ? <AiFillHeart /> : <AiOutlineHeart />}
                  <span>{likeInc}</span>
                </p>
              </div>
            </div>
            <div className={cn('grid-cols-1')}>
              <Image
                src={el.image}
                alt="NFT"
                width={300}
                height={200}
                className={cn('rounded-lg w-full object-cover')}
              />
            </div>
            <div className={cn('flex justify-between p-4')}>
              <div>
                <LikeProfile></LikeProfile>
                <p className=' text-xl'>{el.name}</p>
              </div>
              {/* <small>4{i + 2}</small> */}
            </div>
            <div className={cn('flex justify-between items-end p-4')}>
              <div>
                <small className=' bg-primary text-main-bg py-1 px-2 rounded-sm ml-4'>Current Bid</small>
                <p className={cn('border-[1px] -mt-4 whitespace-nowrap border-icons p-6 text-[1.4rem]  rounded-sm')}>
                  {el.price || i + 4} ETH
                </p>
              </div>
              <p className={cn('flex items-center whitespace-nowrap gap-2 text-[1.1rem]')}>
                <MdTimer /> <span>{i + 1} hours left</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;
