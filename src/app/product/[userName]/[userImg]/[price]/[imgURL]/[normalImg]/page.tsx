import CodeButton from "@/components/CodeButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

type ParamType = {
  userName: string;
  userImg: string;
  price: number;
  imgURL: string;
  normalImg: boolean;
};

const page = async ({ params }: { params: ParamType }) => {
  return (
    <main className="overflow-x-hidden">
      <AuroraBackground>
        <div className="w-full h-full">
          <Navbar />
          <section className="mt-20 gap-16 md:gap-0 md:mt-0 w-full h-full flex flex-col-reverse md:flex-row items-center justify-center px-7">
            <div className="w-[96%] h-[60%] md:w-[60%] flex-1 relative">
              <Image
                src={decodeURIComponent(params.imgURL)}
                alt={"Image"}
                fill
                className={`absolute ${
                  params.normalImg ? "object-contain" : "object-cover"
                }`}
              />
            </div>
            <div className="flex-1 h-full w-full rounded-3xl md:h-[70%] text-white flex flex-col justify-center items-center">
              <div className="w-full relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 md:w-[400px] mx-auto p-4 bg-gray-700 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                  <img
                    src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
                    className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
                  />
                  <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={decodeURIComponent(params.userImg)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-16 flex flex-col items-center">
                  <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                    {params.userName}
                  </h4>
                  <p className="text-base font-normal text-gray-300">
                    Product Original Seller
                  </p>
                </div>
                <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">
                      17
                    </p>
                    <p className="text-sm font-normal text-gray-300">Posts</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">
                      9.7K
                    </p>
                    <p className="text-sm font-normal text-gray-300">
                      Followers
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">
                      434
                    </p>
                    <p className="text-sm font-normal text-gray-300">
                      Following
                    </p>
                  </div>
                </div>
                <div className="mt-5 w-full">
                  <CodeButton />
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </AuroraBackground>
    </main>
  );
};

export default page;
