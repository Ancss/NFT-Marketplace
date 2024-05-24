import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import images from '@/img';

const LikeProfile = () => {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className="flex items-start">
      {imageArray.map((el, i) => (
        <div key={i + 1} className="border-2 border-icons rounded-full m-1">
          <Image
            src={el}
            width={15}
            height={15}
            key={i + 1}
            alt="like profile"
            className="rounded-full min-w-4 h-4"
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
