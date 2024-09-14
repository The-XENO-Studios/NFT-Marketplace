"use client";

import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[76%] mt-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className="mb-4 text-4xl font-extrabold tracking-tight md:leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white leading-10">
            Discover the domain of <Highlight>NFTs</Highlight>
          </div>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Here at XENFT, we focus on your preferences so that you can find the
            perfect NFT that suits your personality. A futuristic marketplace
            possessing futuristic goods
          </p>
          <div className="my-6 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href="/market"
              className="group inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Explore now
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180 transition-all group-hover:translate-x-5 group-hover:opacity-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <button
              onClick={async () => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-900 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
            >
              Learn more
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
