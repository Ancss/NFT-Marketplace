import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { cn } from '@/lib/utils';
import images from '@/img';

interface FollowerTabCardProps {
  i: number;
  el: {
    background?: string;
    user?: string;
    seller: string;
    total?: number;
  };
}
const FollowerTabCard: React.FC<FollowerTabCardProps> = ({ i, el }) => {

  const [following, setFollowing] = useState(false);

  const followMe = () => {
    setFollowing(!following);
  };

  return (
    <div className={cn('relative bg-main-bg rounded-2xl transition-all duration-200 cursor-pointer hover:shadow-custom')}>
      <div className={cn('absolute z-50 bg-icons text-main-bg text-md p-1 px-2 m-4 rounded-2xl border transition-all duration-300',
        'hover:bg-main-bg hover:text-icons')}>
        <p>#{i + 1} <span>🥇</span></p>
      </div>

      <div className={cn('grid grid-cols-4')}>
        <div className={cn('col-span-full')}>
          <Image
            src={el.background || images[`creatorbackground${i + 1}`]}
            alt="profile background"
            width={500}
            height={300}
            layout="fixed"
            className={cn('rounded-2xl object-fill h-48')}
          />
        </div>

        <div className={cn('col-span-full text-center mt-[-2rem] relative')}>
          <Image
            alt="profile picture"
            width={50}
            height={50}
            src={el.user || images[`user${i + 1}`]!}
            className={cn('rounded-full z-30 h-12 w-12 top-2 absolute  left-1/2 -translate-x-1/2')}
            priority
          />
          <div className={cn('absolute w-20 h-20 bg-main-bg rounded-full top-[-20%] left-1/2 -translate-x-1/2')} />
        </div>

        <div className={cn('col-span-full flex items-center justify-between mt-4 px-4 pb-4')}>
          <div>
            <h4 className="flex items-center">
              {el.seller.slice(0, 9)}{' '}
              <span className="pl-1"><MdVerified /></span>
            </h4>
            <p className="">{el.total || 0} ETH</p>
          </div>
          <a onClick={followMe} className={cn('bg-shadow-dark flex items-center text-primary p-2 px-4 rounded-full  shadow-custom transition-all duration-300',
            'hover:bg-transparent')}>
            {following ? 'Following ' : 'Follow '}<TiTick />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
