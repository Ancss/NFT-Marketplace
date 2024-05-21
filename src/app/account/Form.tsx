import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// INTERNAL IMPORT

const Form = () => {
  return (
    <div className={cn('w-full')}>
      <div>
        <form>
          <div className={cn('mt-8')}>
            <label htmlFor="name" className={cn('block w-full ml-4 font-bold text-xl')}>Username</label>
            <input
              type="text"
              placeholder="shoaib bhai"
              className={cn('w-full border border-icons p-4 rounded-xl bg-transparent mt-2 outline-none')}
            />
          </div>

          <div className={cn('mt-8')}>
            <label htmlFor="email" className={cn('block w-full ml-4 font-bold text-xl')}>Email</label>
            <div className={cn('w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden')}>
              <div className={cn('text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer')}>
                <HiOutlineMail />
              </div>
              <input type="text" placeholder="Email*" className={cn('w-[90%] bg-transparent border-0 outline-none')} />
            </div>
          </div>

          <div className={cn('mt-8')}>
            <label htmlFor="description" className={cn('block w-full ml-4 font-bold text-xl')}>Description</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              placeholder="something about yourself in few words"
              className={cn('w-full bg-transparent outline-none rounded-xl p-4 border border-icons')}
            ></textarea>
          </div>

          <div className={cn('mt-8')}>
            <label htmlFor="website" className={cn('block w-full ml-4 font-bold text-xl')}>Website</label>
            <div className={cn('w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden')}>
              <div className={cn('text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer')}>
                <MdOutlineHttp className=' text-2xl' />
              </div>
              <input type="text" placeholder="website" className={cn('w-[90%] bg-transparent border-0 outline-none')} />
            </div>
          </div>

          <div className={cn('mt-8 grid gap-4', )}>
            <div className={cn('w-full')}>
              <label htmlFor="facebook" className={cn('block w-full ml-4 font-bold text-xl')}>Facebook</label>
              <div className={cn('w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden')}>
                <div className={cn('text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer')}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="http://shoaib" className={cn('w-[90%] bg-transparent border-0 outline-none')} />
              </div>
            </div>

            <div className={cn('w-full')}>
              <label htmlFor="Twitter" className={cn('block w-full ml-4 font-bold text-xl')}>Twitter</label>
              <div className={cn('w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden')}>
                <div className={cn('text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer')}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="http://shoaib" className={cn('w-[90%] bg-transparent border-0 outline-none')} />
              </div>
            </div>

            <div className={cn('w-full')}>
              <label htmlFor="Instagram" className={cn('block w-full ml-4 font-bold text-xl')}>Instagram</label>
              <div className={cn('w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden')}>
                <div className={cn('text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer')}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="http://shoaib" className={cn('w-[90%] bg-transparent border-0 outline-none')} />
              </div>
            </div>
          </div>

          <div className={cn('mt-8')}>
            <label htmlFor="wallet" className={cn('block w-full ml-4 font-bold text-xl')}>Wallet address</label>
            <div className={cn('w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden')}>
              <div className={cn('text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer')}>
                <MdOutlineHttp className=' text-2xl' />
              </div>
              <input
                type="text"
                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
                className={cn('w-[85%] bg-transparent border-0 outline-none')}
              />
              <div className={cn('text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer')}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={cn('my-16')}>
            <Button
              onClick={() => {}}
              className={cn('w-full flex justify-center text-xl')}
            >Upload profile</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
