import React from 'react';
import { TiTick } from 'react-icons/ti';
import { cn } from '@/lib/utils';
import { SubscriptionsType } from './page';
import { Button } from '@/components/ui/button';

const Subscription = ({ el }: { el: SubscriptionsType[number] }) => {
  return (
    <div className={cn(' flex flex-col border-[1px] border-icons p-8 rounded-lg relative cursor-pointer transition-all duration-300 ease-in', 'hover:shadow-custom')}>
      <span className={cn('text-4xl font-bold')}>{el.plan}</span>
      {el.popular && <small className={cn('absolute right-12 text-[1.2rem] bg-icons text-main-bg p-2 rounded-sm')}>
        {el.popular}
      </small>}
      <p className={cn('text-6xl leading-none font-bold')}>{el.price}</p>
      <div className={cn('my-16')}>
        {el.service.map((service, index) => (
          <p className={cn('flex items-center gap-8 text-2xl font-medium leading-none', 'sm:text-base')} key={index}>
            <TiTick />
            {service}
          </p>
        ))}
      </div>
      <Button className={cn('w-full text-2xl mb-0 mt-auto')}>Submit</Button>
    </div>
  );
};

export default Subscription;
