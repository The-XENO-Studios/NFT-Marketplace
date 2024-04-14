"use client";

import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import { FaBitcoin } from "react-icons/fa6";
import { motion } from "framer-motion";

export function GradientCard({
  imgURL,
  userName,
  price,
  ClassName,

  xValue,
  i,
  currentIndex,
  userImg,
}: {
  imgURL: string;
  userName: string;
  price: number;
  ClassName: string;

  xValue: number;
  i: number;
  currentIndex: number;
  userImg: string;
}) {
  const middle = currentIndex == i;

  const diff = Math.abs(currentIndex - i);

  const isMobile = global.window && window.innerWidth < 768;

  return (
    <motion.div
      transition={{ ease: "easeInOut", duration: 1 }}
      animate={{
        x: xValue,
        scale: middle ? (isMobile ? 1.25 : 1.5) : 1 / diff + 0.13,
        opacity: diff == 1 ? 0.76 : diff == 0 ? 1 : 0,
      }}
      className={ClassName + " " + "hover:cursor-pointer"}
    >
      <BackgroundGradient
        className={`transition-all relative rounded-[22px] w-72 p-4 sm:p-10 bg-white dark:bg-zinc-900`}
      >
        <Image
          src={imgURL}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain w-64 h-64"
        />

        <div className="w-full mt-5 flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <BackgroundGradient className="rounded-full bg-white dark:bg-zinc-900">
              <Image
                src={userImg}
                alt={"User"}
                width={256}
                height={256}
                className="rounded-full w-10 h-10 object-cover"
              />
            </BackgroundGradient>

            <h1 className="text-white">{userName}</h1>
          </div>

          <div className="flex items-center gap-3 text-white">
            <p>{price}</p>
            <FaBitcoin className="w-7 h-7" />
          </div>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
}
