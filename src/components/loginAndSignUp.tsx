'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import images from '@/img'
const LoginAndSignUp = ({ }) => {
  const [activeBtn, setActiveBtn] = useState(1);

  const socialImage = [
    {
      social: images.facebook,
      name: 'Continue with Facebook',
    },
    {
      social: images.twitter,
      name: 'Continue with Twitter',
    },
    {
      social: images.facebook,
      name: 'Continue with Facebook',
    },
  ];

  return (
    <div className={cn('')}>
      <div className={cn('')}>
        {socialImage.map((el, i) => (
          <div
            key={i}
            onClick={() => setActiveBtn(i + 1)}
            className={cn('flex items-center gap-8 mt-6 border-2 border-shadow-dark p-4 rounded-lg text-[1.2rem] cursor-pointer transition-all duration-300 ease-in', {
              'shadow-custom': activeBtn === i + 1,
            }, 'hover:shadow-custom')}
          >
            <Image
              src={el.social}
              alt={el.name}
              width={30}
              height={30}
            />
            <span>{el.name}</span>
          </div>
        ))}
        <div className={cn('text-center mt-8 relative')}>
          <span>OR</span>
          <div className={cn('absolute w-1/2 left-0 top-2 border-t-1 border-shadow-dark')} />
          <div className={cn('absolute w-1/2 right-0 top-2 border-t-1 border-shadow-dark')} />
        </div>
        <div className={cn('mt-12')}>
          <div className={cn('mb-4')}>
            <label className={cn('flex justify-between items-center')}>
              Email address
              <input type="email" placeholder="example@example.com" className={cn('p-4 rounded-lg mt-2 outline-0 border-1 border-shadow-dark bg-transparent')} />
            </label>
          </div>
          <div>
            <label className={cn('flex justify-between items-center text-[1.2rem] font-bold')}>
              Password
              <a href="#">Forget password</a>
            </label>
            <input type="password" className={cn('p-4 rounded-lg mt-2 outline-0 border-1 border-shadow-dark bg-transparent')} />
          </div>
        </div>
        <div className={cn('w-full mt-12 flex justify-center')}>
          <button className={cn('text-[1.2rem]')}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
