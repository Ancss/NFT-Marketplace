import React from "react";

//INTERNAL IMPORT
import AudioCard from "./AudioCard";
import AudioCardSmall from "./AudioCardSmall";

const AudioLive = () => {
  return (
    <div className="w-full mt-4">
      <div className="w-11/12tt mx-auto py-8 md:w-4/5tt lg:py-20 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="space-y-14 lg:col-span-2 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          <AudioCard />
          <AudioCard />
        </div>
        <div className="space-y-8 lg:space-y-0 lg:grid lg:gap-8">
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
};

export default AudioLive;
