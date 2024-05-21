import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// INTERNAL IMPORT
import images from '@/img';
import FollowerTabCard from '@/components/FollowerTabCard';
import NFTCardTwo from '@/components/NFTCardTwo';
import { TMarketItem } from '@/type';

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
  nfts,
  myNFTs,
}: {
  collectiables: boolean,
  created: boolean,
  like: boolean,
  follower: boolean,
  following: boolean,
  nfts: TMarketItem[],
  myNFTs: TMarketItem[]
}) => {
  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
  ];

  return (
    <div className={cn('w-full mb-[14rem]')}>
      {collectiables && <NFTCardTwo NFTs={nfts} />}
      {created && <NFTCardTwo NFTs={myNFTs} />}
      {like && <NFTCardTwo NFTs={nfts} />}
      {follower && (
        <div className={cn(' mx-auto grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1', )}>
          {followerArray.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={cn('mx-auto grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1', )}>
          {followingArray.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
