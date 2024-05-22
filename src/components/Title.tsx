import React from "react";
import { cn } from "@/lib/utils";

interface TitleProps {
  heading: string;
  paragraph: string;
}

const Title: React.FC<TitleProps> = ({ heading, paragraph }) => {
  return (
    <div className={cn("w-full")}>
      <div className={cn("w-4/5tt mx-auto md:w-9/10")}>
        <h2 className={cn("md:text-6xl leading-none text-3xl")}>{heading}</h2>
        <p className="mt-2">{paragraph}</p>
      </div>
    </div>
  );
};

export default Title;
