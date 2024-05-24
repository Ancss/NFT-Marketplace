import React, { useState, useEffect } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useDebounce } from "react-use";
const SearchBar = ({
  onHandleSearch,
  onClearSearch,
}: {
  onHandleSearch: (v: string) => void;
  onClearSearch: () => void;
}) => {
  const [searchItem, setSearchItem] = useState("");
  const [_, cancel] = useDebounce(
    () => {
      if (searchItem) {
        onHandleSearch(searchItem);
      } else {
        onClearSearch();
      }
    },
    500,
    [searchItem]
  );

  const searchParams = useSearchParams();
  useEffect(() => {
    setSearchItem(searchParams.get("keyword") || "");
  }, [searchParams]);

  return (
    <div className={cn("w-full")}>
      <div
        className={cn(
          "mx-auto  bg-main-bg text-main-bg flex items-center rounded-full mt-32 mb-12 shadow-custom",
          ""
        )}
      >
        <BsSearch
          className={cn("text-6xl p-2 pl-6 cursor-pointer text-primary")}
        />
        <input
          type="text"
          placeholder="Type your keyword..."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          className={cn(
            " flex-1 text-primary border-none outline-none p-8 bg-main-bg placeholder-primary text-lg sm:text-2xl"
          )}
        />
        <BsArrowRight
          className={cn("text-6xl p-2 pr-6 cursor-pointer text-primary")}
        />
      </div>
    </div>
  );
};

export default SearchBar;
