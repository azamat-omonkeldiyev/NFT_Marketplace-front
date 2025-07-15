"use client";
import { EyeIcon } from "@/assets/icons";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const MagicMushrooms = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 59,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: any) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <div className="relative w-full mx-auto h-screen overflow-hidden mb-[100px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/mashroom.svg")',
        }}
      ></div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute bottom-70 left-8 flex items-center space-x-3 z-20 bg-[#3B3B3B] rounded-[20px] py-[15px] px-[20px]">
            <Image
              className="w-[24px] rounded-full h-[24px] object-cover"
              src={`/mashroom.svg`}
              alt="Collection img"
              width={24}
              height={24}
            />
        <span className="text-white font-medium">Shroomie</span>
      </div>
      <div className="absolute bottom-32 left-8 z-20">
        <h1 className="text-5xl font-bold text-white mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text">
          Magic Mashrooms
        </h1>

        <button className="bg-white backdrop-blur-sm border border-white/30 text-black px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300 flex items-center space-x-2">
          <EyeIcon/>
          <span>See NFT</span>
        </button>
      </div>

      <div className="absolute bottom-32 right-8 z-20">
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="text-white/80 text-sm mb-2">Auction ends in:</div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">
                {formatTime(timeLeft.hours)}
              </div>
              <div className="text-white/60 text-xs">Hours</div>
            </div>
            <div className="text-white text-2xl">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">
                {formatTime(timeLeft.minutes)}
              </div>
              <div className="text-white/60 text-xs">Minutes</div>
            </div>
            <div className="text-white text-2xl">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">
                {formatTime(timeLeft.seconds)}
              </div>
              <div className="text-white/60 text-xs">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicMushrooms;
