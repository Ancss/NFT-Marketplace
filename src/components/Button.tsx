import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  btnName: string;
  handleClick: () => void;
  icon?: JSX.Element;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ btnName, handleClick, icon, className }) => {
  return (
    <div className="box">
      <button
        className={cn(
          "bg-icons border-icons border p-4 rounded-full text-lg text-shadow-light cursor-pointer transition-all duration-200 ease-in hover:bg-main-bg hover:border-icons hover:text-icons",
          className
        )}
        onClick={handleClick}
      >
        {icon} {btnName}
      </button>
    </div>
  );
};

export default Button;
