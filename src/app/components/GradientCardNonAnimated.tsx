"use client";

import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import { FaBitcoin } from "react-icons/fa6";

export function GradientCardNA({
  imgURL,
  normalImg,
  userName,
  price,
  ClassName,

  userImg,
}: {
  imgURL: string;
  normalImg: boolean;
  userName: string;
  price: number;
  ClassName: string;

  userImg: string;
}) {
  return (
    <div className={ClassName}>
      <BackgroundGradient
        className={`transition-all relative rounded-[22px] w-72 p-4 sm:p-10 bg-white dark:bg-zinc-900`}
      >
        {normalImg ? (
          <Image
            src={imgURL}
            alt="jordans"
            height="400"
            width="400"
            className="object-cover w-full h-64 rounded-xl"
          />
        ) : (
          <Image
            src={imgURL}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain w-64 h-64"
          />
        )}

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
    </div>
  );
}
