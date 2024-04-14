"use client";

import { useState } from "react";
import { GradientCard } from "./GradientCard";
import useInterval from "use-interval";
import Link from "next/link";

const nftData = [
  {
    imgURL:
      "https://cdn.pixabay.com/photo/2024/04/05/10/29/ai-generated-8677090_1280.png",
    userName: "Swapnil",
    price: 100,
    className: "",
    userImg: "/swapnil.png",
  },
  {
    imgURL:
      "https://cdn.pixabay.com/photo/2021/07/05/18/12/robot-6389725_960_720.png",
    userName: "Tobey",
    price: 1,
    className: "",
    userImg:
      "https://images.pexels.com/photos/40795/spider-macro-zebra-spider-insect-40795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imgURL:
      "https://cdn.pixabay.com/photo/2022/08/23/11/40/fox-7405603_1280.png",
    userName: "Flash",
    price: 0.5,
    className: "",
    userImg:
      "https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imgURL: "/demo1.png",
    userName: "Stark",
    price: 1.5,
    className: "",
    userImg:
      "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imgURL: "/robot.png",
    userName: "Tony",
    price: 1.6,
    className: "",
    userImg:
      "https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imgURL:
      "https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_1280.png",
    userName: "Kent",
    price: 6.9,
    className: "",
    userImg:
      "https://images.pexels.com/photos/6303535/pexels-photo-6303535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imgURL:
      "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_1280.png",
    userName: "Wayne",
    price: 0.1,
    className: "",
    userImg:
      "https://images.pexels.com/photos/2304123/pexels-photo-2304123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imgURL:
      "https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_1280.png",
    userName: "Bruce",
    price: 0.11,
    className: "",
    userImg:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const NftScroller = () => {
  const [xValue, setxValue] = useState(-160);

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(nftData.length / 2)
  );

  useInterval(() => {
    if (currentIndex > 0) {
      setxValue((prevValue) => prevValue + 316);
      setCurrentIndex((prevValue) => prevValue - 1);
    } else {
      setCurrentIndex(nftData.length - 1);
      setxValue((-317 * (nftData.length - 1)) / 2);
    }
  }, 2500);

  return (
    <Link href="/market" className="w-full flex justify-center gap-5">
      {nftData.map((e, i) => {
        return (
          <GradientCard
            userImg={e.userImg}
            xValue={xValue}
            i={i}
            currentIndex={currentIndex}
            imgURL={e.imgURL}
            userName={e.userName}
            price={e.price}
            ClassName={e.className}
            key={i}
          />
        );
      })}
    </Link>
  );
};

export default NftScroller;
