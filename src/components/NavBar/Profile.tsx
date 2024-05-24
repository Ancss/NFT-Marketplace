import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";
import { cn } from "@/lib/utils";
import images from "@/img"; // Assuming images is a valid import path
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropDown from "../DropDown";
import { AccountType } from "@/Context/AccountProvider";

interface ProfileProps {
  currentAccount: string;
  account: AccountType;
}
const profileItems = [
  {
    link: "/author",
    name: "My Profile",
  },
  {
    link: "/account",
    name: "Edit Profile",
  },
  {
    link: "/contactus",
    name: "Help",
  },
  {
    link: "/aboutus",
    name: "About Us",
  },
];
const Profile: React.FC<ProfileProps> = ({ currentAccount, account }) => {
  console.log(currentAccount);
  return (
    <DropDown
      label={
        <div className={cn("flex items-center mb-4")}>
          <Image
            src={account.avatar || images.user1}
            alt="user profile"
            width={50}
            height={50}
            className={cn("rounded-full")}
          />
          <div className={cn("ml-4")}>
            <p>{account.username || "User"}</p>
            <small>{currentAccount.slice(0, 18)}..</small>
          </div>
        </div>
      }
      items={profileItems}
    >
      <Image
        src={account.avatar || images.user1}
        alt="Profile"
        width={40}
        height={40}
        className="rounded-full min-w-10"
      />
    </DropDown>
  );
};

export default Profile;
