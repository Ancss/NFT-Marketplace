import React, { useState } from 'react';
import { RiUserFollowFill, RiUserUnfollowFill, RiAwardLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';
import FollowerTabCard from '@/components/FollowerTabCard';
import images from '@/img';

interface FollowerTabProps {
  TopCreator: Array<any>;
}

const FollowerTab: React.FC<FollowerTabProps> = ({ TopCreator }) => {
  const [tab, setTab] = useState('popular');
  const FollowingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
  ];
  const NewsArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
  ];
  return (
    <div className={cn('w-full relative pb-52 padding-6 padding-0 sm:pb-24')}>
      <div className={cn('w-96 mx-auto pb-24 text-center sm:w-full')}>
        <h2 className={cn('text-3rem mb-16 sm:text-2rem')}>Top Creators List..</h2>
        <div className={cn('bg-main-bg p-2 rounded-full flex justify-around gap-4 items-center text-1.2rem shadow-custom sm:text-1rem')}>
          <button
            className={cn('bg-icons text-main-bg p-4 rounded-full cursor-pointer border-none', tab === 'popular' ? 'border' : 'border-transparent')}
            onClick={() => setTab('popular')}
          >
            <RiUserFollowFill /> Popular
          </button>
          <button
            className={cn('bg-icons text-main-bg p-4 rounded-full cursor-pointer border-none', tab === 'following' ? 'border' : 'border-transparent')}
            onClick={() => setTab('following')}
          >
            <RiUserFollowFill /> Following
          </button>
          <button
            className={cn('bg-icons text-main-bg p-4 rounded-full cursor-pointer border-none', tab === 'news' ? 'border' : 'border-transparent')}
            onClick={() => setTab('news')}
          >
            <RiAwardLine /> NoteWorthy
          </button>
        </div>
      </div>

      {tab === 'popular' && (
        <div className={cn('w-4/5tt mx-auto grid grid-cols-4 gap-8 sm:grid-cols-1 md:grid-cols-2')}>
          {TopCreator.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div>
      )}

      {tab === 'following' && (
        <div className={cn('w-4/5tt mx-auto grid grid-cols-4 gap-8 sm:grid-cols-1 md:grid-cols-2')}>
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}        </div>
      )}

      {tab === 'news' && (
        <div className={cn('w-4/5tt mx-auto grid grid-cols-4 gap-8 sm:grid-cols-1 md:grid-cols-2')}>
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}        </div>
      )}

      <div className={cn('text-center')}>
        <div className={cn('mx-auto p-28')}>
          <a className={cn('bg-transparent text-icons transition-all mx-6 p-4 rounded-full border sm:font-0.8rem sm:p-2')} href="#">
            Show me more
          </a>
          <a className={cn('bg-icons mx-6 p-4 text-main-bg rounded-full border shadow-custom text-1.3rem sm:text-0.8rem sm:p-2')} href="#">
            Become an author
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
