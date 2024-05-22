import React, { useState, useEffect } from 'react';
import { BsSearch, BsArrowRight } from 'react-icons/bs';
import { cn } from '@/lib/utils';

const SearchBar = ({ onHandleSearch, onClearSearch }: { onHandleSearch: (v: string) => void, onClearSearch: () => void }) => {
  const [search, setSearch] = useState('');
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchItem);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className={cn('w-full')}>
      <div className={cn('mx-auto  bg-main-bg text-main-bg flex items-center rounded-full mt-32 mb-12 shadow-custom', '')}>
        <BsSearch className={cn('text-6xl p-2 pl-6 cursor-pointer text-primary')} />
        <input
          type="text"
          placeholder="Type your keyword..."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          className={cn(' flex-1 text-primary border-none outline-none p-8 bg-main-bg placeholder-primary text-2xl')}
        />
        <BsArrowRight className={cn('text-6xl p-2 pr-6 cursor-pointer text-primary')} />
      </div>
    </div>
  );
};

export default SearchBar;
