import React, { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

const DropDown = ({
  className,
  text,
  children,
  label,
  items
}: {
  className?: string,
  children?: ReactNode,
  text?: string | ReactNode,
  label?: string | ReactNode,
  items: { name: string | ReactNode, link: string }[]
}) => {


  return (
    <div className={cn(className)}>
      <DropdownMenu >
        <DropdownMenuTrigger className="" >
          {text || children}
        </DropdownMenuTrigger >
        <DropdownMenuContent className=" bg-main-bg border border-primary">
          {label && <DropdownMenuLabel className="mt-4">
            {label}
          </DropdownMenuLabel>}
          <DropdownMenuSeparator />
          {items.map((item, index) => (
            <DropdownMenuItem key={index}>
              <div key={index} className={cn(" w-full h-full  ")}>
                <Link className=" w-full h-full block p-2  transition-all duration-300 hover:bg-icons hover:text-shadow-dark hover:rounded-sm" href={item.link}>{item.name}</Link>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
