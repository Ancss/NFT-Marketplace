import React, { Dispatch, SetStateAction, useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineReportProblem } from 'react-icons/md';

const AuthorTaps = ({
  setCollectiables,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
  currentAccount,
}: {
  setCollectiables: Dispatch<SetStateAction<boolean>>,
  setCreated: Dispatch<SetStateAction<boolean>>,
  setLike: Dispatch<SetStateAction<boolean>>,
  setFollower: Dispatch<SetStateAction<boolean>>,
  setFollowing: Dispatch<SetStateAction<boolean>>,
  currentAccount: string
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState('Most Recent');

  const listArray = [
    'Most Recent',
    'Created By Admin',
    'Most Appreciated',
    'Most Discussed',
    'Most Viewed',
  ];

  const openDropDownList = () => {
    setOpenList(!openList);
  };

  const openTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnText = (e.target as HTMLElement).innerText;
    const mapping: { [key: string]: () => void } = {
      'Listed NFTs': () => { setCollectiables(true); setCreated(false); setFollower(false); setFollowing(false); setLike(false); setActiveBtn(1); },
      'Own NFT': () => { setCollectiables(false); setCreated(true); setFollower(false); setFollowing(false); setLike(false); setActiveBtn(2); },
      'Liked': () => { setCollectiables(false); setCreated(false); setFollower(false); setFollowing(false); setLike(true); setActiveBtn(3); },
      'Following': () => { setCollectiables(false); setCreated(false); setFollower(false); setFollowing(true); setLike(false); setActiveBtn(4); },
      'Followers': () => { setCollectiables(false); setCreated(false); setFollower(true); setFollowing(false); setLike(false); setActiveBtn(5); },
    };
    mapping[btnText]?.();
  };

  return (
    <div className={cn('mt-32 mb-12')}>
      <div className={cn('mx-auto w-4/5tt lg:flex  lg:justify-between', )}>
        <div className={cn('flex gap-8 items-center flex-wrap')}>
          {['Listed NFTs', 'Own NFT', 'Liked', 'Following', 'Followers'].map((btn, idx) => (
            <button
              key={idx}
              onClick={openTab}
              className={cn('border border-icons bg-main-bg text-[1.2rem] whitespace-nowrap rounded-full py-2 px-4 cursor-pointer transition-all duration-300 ease-in text-icons', {
                'bg-icons text-main-bg': activeBtn === idx + 1,
                'hover:border-icons hover:bg-icons hover:text-main-bg': activeBtn !== idx + 1,
              })}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className={cn('relative lg:mt-0 mt-8 z-[999]')}>
          <DropdownMenu onOpenChange={openDropDownList}>
            <DropdownMenuTrigger className="flex border border-icons px-4 py-2 rounded-3xl items-center " >
              <p className={cn('text-xl leading-none whitespace-nowrap mr-2')} onClick={openDropDownList}>{selectedMenu}</p>
              {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </DropdownMenuTrigger >
            <DropdownMenuContent className=" bg-main-bg border border-primary ">
              {/* <DropdownMenuLabel className="mt-4">

              </DropdownMenuLabel> */}
              <DropdownMenuSeparator />
              {listArray.map((el, i) => (
                <DropdownMenuItem key={i} className={cn('bg-main-bg  w-64 left-[-0.75rem]  shadow-custom z-50')}>
                  <div
                    key={i}
                    onClick={() => { setSelectedMenu(el); setOpenList(false); }}
                    className={cn('flex items-center justify-between leading-none pr-4 p-4 cursor-pointer', 'hover:bg-icons hover:text-main-bg hover:rounded-sm')}
                  >
                    <p className={cn('px-4 line-height-1 cursor-pointer')}>{el}</p>
                    <span>{selectedMenu === el && <TiTick />}</span>
                  </div>
                </DropdownMenuItem>

              ))}

            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
