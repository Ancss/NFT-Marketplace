import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HelpCenter: React.FC = () => {
  const helpItems = [
    { name: "About", link: "aboutus" },
    { name: "Contact Us", link: "contactus" },
    { name: "Sign Up", link: "signUp" },
    { name: "LogIn", link: "login" },
    { name: "Subscription", link: "subscription" },
  ];

  return (
    <div className={cn("flex flex-col")}>
      {helpItems.map((item, index) => (
        <div key={index} className={cn("p-2 my-1 transition-all duration-300 hover:bg-icons hover:text-shadow-dark hover:rounded-sm")}>
          <Link href={item.link}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
