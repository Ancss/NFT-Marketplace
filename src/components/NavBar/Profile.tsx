import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";
import { cn } from "@/lib/utils";
import images from "@/img"; // Assuming images is a valid import path

interface ProfileProps {
  currentAccount: string;
}

const Profile: React.FC<ProfileProps> = ({ currentAccount }) => {
  return (
    <div className={cn("flex flex-col items-center p-4 bg-main-bg rounded-lg shadow-shadow-dark")}>
      <div className={cn("flex items-center mb-4")}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={cn("rounded-full")}
        />
        <div className={cn("ml-4")}>
          <p>Shoaib Bhai</p>
          <small>{currentAccount.slice(0, 18)}..</small>
        </div>
      </div>
      <div className={cn("flex flex-col")}>
        <div className={cn("flex items-center text-icons")}>
          <FaUserAlt />
          <p><Link href="/author">My Profile</Link></p>
        </div>
        {/* More items */}
      </div>
    </div>
  );
};

export default Profile;
