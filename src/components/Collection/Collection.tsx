'use client'
import React, { useState } from 'react';
import { BsFillAlarmFill, BsFillCalendarDateFill, BsCalendar3 } from 'react-icons/bs';
import DaysComponent from './DaysComponents'; 

type CardData = {
  name: string;
  image: string;
  details: string;
};
import images from "@/img";
import { Button } from '../ui/button';


const Collection: React.FC = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const newsArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };
  return (
    <div className="w-full py-12 pb-40">
      <div className="w-88 mx-auto pb-24 text-center">
        <h2 className="text-3xl text-primary mb-16 font-bold">Top List Creators</h2>
        <div>
          <div className="bg-main-bg py-2 px-4 rounded-full flex justify-around gap-4 items-center text-1.2rem shadow-custom">
            <Button className=" h-12 bg-icons text-main-bg p-4 rounded-full cursor-pointer border-none transition-all duration-300 hover:bg-transparent hover:text-icons"
              onClick={openPopular}>
              <BsFillAlarmFill /> &nbsp;24 hours
            </Button>
            <Button className=" h-12 bg-icons text-main-bg p-4 rounded-full cursor-pointer border-none transition-all duration-300 hover:bg-transparent hover:text-icons"
              onClick={openFollower}>
              <BsCalendar3 /> &nbsp;7 days
            </Button>
            <Button className=" h-12 bg-icons text-main-bg p-4 rounded-full cursor-pointer border-none transition-all duration-300 hover:bg-transparent hover:text-icons"
              onClick={openNews}>
              <BsFillCalendarDateFill /> &nbsp;30 days
            </Button>
          </div>
        </div>
      </div>
      {popular && (
        <div className="w-4/5tt mx-auto grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8">
          {CardArray.map((el, i) => (
            <DaysComponent key={i} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className="w-4/5tt mx-auto grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8">
          {followingArray.map((el, i) => (
            <DaysComponent key={i} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className="w-4/5tt mx-auto grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8">
          {newsArray.map((el, i) => (
            <DaysComponent key={i} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
