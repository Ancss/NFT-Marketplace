import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button'
const contactus = () => {
  return (
    <div className={cn("w-full")}>
      <div className={cn("lg:w-3/5 w-full mx-auto")}>
        <h1 className={cn("text-center text-4xl font-bold")}>Contact</h1>
        <div className={cn("grid lg:grid-cols-[1fr_2fr] lg:gap-20 items-center self-start mb-40 grid-cols-1 gap-4")}>
          <div>
            <div>
              <h3 className=" font-bold">🗺 ADDRESS</h3>
              <p className={cn("text-base mt-2 leading-relaxed w-4/5tt")}>
                Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
              </p>
            </div>
            <div>
              <h3 className=" font-bold mt-4">💌 EMAIL</h3>
              <p className={cn("text-base mt-2")}>nc.example@example.com</p>
            </div>
            <div>
              <h3 className=" font-bold mt-4">☎ PHONE</h3>
              <p className={cn("text-base mt-2")}>000-123-456-7890</p>
            </div>
            <div>
              <h3 className=" font-bold mt-4">🌏 SOCIALS</h3>
              <div className="flex items-center mt-2">
                <a href="#" className={cn("text-xl rounded-full p-2")}>
                  <TiSocialFacebook />
                </a>
                <a href="#" className={cn("text-xl rounded-full p-2")}>
                  <TiSocialLinkedin />
                </a>
                <a href="#" className={cn("text-xl rounded-full p-2")}>
                  <TiSocialInstagram />
                </a>
                <a href="#" className={cn("text-xl rounded-full p-2")}>
                  <TiSocialYoutube />
                </a>
                <a href="#" className={cn("text-xl rounded-full p-2")}>
                  <TiSocialTwitter />
                </a>
              </div>
            </div>
          </div>
          <div>
            <form>
              <div className={cn('mt-8')}>
                <label htmlFor="name" className={cn('block w-full ml-4 font-bold text-xl')}>Full Name</label>
                <input
                  type="text"
                  placeholder="User"
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
              <Button
                className={cn("mt-8")}
              >Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactus;
