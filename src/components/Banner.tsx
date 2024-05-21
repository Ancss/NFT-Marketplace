import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Banner = ({ bannerImage }:{bannerImage:string}) => {
  return (
    <div className={cn('relative')}>
      <div className={cn('hidden lg:block')}>
        <Image
          src={bannerImage}
          alt="background2"
          width={1600}
          height={100}
          className=' h-24 w-full object-cover'
        />
      </div>

      <div className={cn('block lg:hidden')}>
        <Image
          src={bannerImage}
          alt="background1"
          width={1600}
          height={300}
          className=' h-72 w-full object-cover'
        />
      </div>
    </div>
  );
};

export default Banner;
