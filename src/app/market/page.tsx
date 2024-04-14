import Footer from "@/components/Footer";
import { GradientCardNA } from "@/components/GradientCardNonAnimated";
import Navbar from "@/components/Navbar";
import TopSells from "@/components/TopSells";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface nftProps {
  imgURL: string;
  normalImg?: boolean;
  userName: string;
  price: number;
  className: string;
  userImg: string;
}

const page = () => {
  const nftDataPeak = [
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
  ];

  const nftData: nftProps[] = [
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
    {
      imgURL:
        "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      userName: "DJ",
      normalImg: true,
      price: 0.11,
      className: "",
      userImg:
        "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      normalImg: true,
      userName: "Asian",
      price: 0.11,
      className: "",
      userImg:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      normalImg: true,
      userName: "Sukuna",
      price: 0.11,
      className: "",
      userImg:
        "https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <main className="overflow-x-hidden">
      <AuroraBackground>
        <div className="w-full h-full">
          <Navbar />

          <div className="mb-16 mt-36 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Peak <span className="text-purple-600">Collections</span>
          </div>
          <div className="flex justify-center">
            <div className="w-fit flex flex-col md:flex-row justify-center gap-5">
              {nftDataPeak.map((e, i) => {
                return (
                  <GradientCardNA
                    userImg={e.userImg}
                    imgURL={e.imgURL}
                    normalImg={false}
                    userName={e.userName}
                    price={e.price}
                    ClassName={e.className}
                    key={i}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-16 md:mb-16 md:mt-36 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            The <span className="text-purple-600">Market</span>
          </div>

          <section className="md:mt-14 py-24 md:pt-24 relative flex flex-col items-center">
            <div className="w-full mx-auto px-4 md:px-16">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
                  <div className="box rounded-xl   p-6 w-full md:max-w-sm">
                    <h6 className="font-medium text-base leading-7 text-white mb-5">
                      Choose Price
                    </h6>
                    <div className="flex items-center mb-5 gap-1">
                      <div className="relative w-full">
                        <select
                          id="FROM"
                          className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none "
                        >
                          <option selected>Min</option>
                          <option value="option 1">1</option>
                          <option value="option 2">10</option>
                          <option value="option 3">100</option>
                          <option value="option 4">1000</option>
                        </select>
                        <svg
                          className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                            stroke="#111827"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="px-1 font-normal text-sm leading-6 text-gray-600">
                        to
                      </p>
                      <div className="relative w-full">
                        <select
                          id="FROM"
                          className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none "
                        >
                          <option selected>Max</option>
                          <option value="option 1">10</option>
                          <option value="option 2">100</option>
                          <option value="option 3">1000</option>
                          <option value="option 4">10000</option>
                        </select>
                        <svg
                          className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                            stroke="#111827"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-white w-full"
                    >
                      Country Code
                    </label>
                    <div className="relative w-full mb-8">
                      <select
                        id="FROM"
                        className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                      >
                        <option selected>Country</option>
                        <option value="option 1">USA</option>
                        <option value="option 2">England</option>
                        <option value="option 3">Bangladesh</option>
                        <option value="option 4">Japan</option>
                      </select>
                      <svg
                        className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                          stroke="#111827"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <button className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  ">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Search
                    </button>
                  </div>

                  <div className="mt-7 box rounded-xl   p-6 w-full md:max-w-sm">
                    <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                      <p className="font-medium text-base leading-7 text-white ">
                        Filter Plans
                      </p>
                      <p className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                        RESET
                      </p>
                    </div>

                    <div className="w-full mb-7">
                      <div
                        className="accordion-group grid grid-cols-1 gap-5 sm:gap-9"
                        data-accordion="default-accordion"
                      >
                        <div className="accordion " id="category-heading-one">
                          <button
                            className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                            aria-controls="category-collapse-one"
                          >
                            <h5 className="font-medium text-sm text-white">
                              Availability
                            </h5>
                            <svg
                              className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                stroke="currentColor"
                                stroke-width="1.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </button>
                          <div
                            id="category-collapse-one"
                            className="accordion-content w-full px-0 overflow-hidden pr-4 max-h-0 "
                            aria-labelledby="category-heading-one"
                          >
                            <div className="box flex flex-col gap-2 mt-5">
                              <div className="flex items-center mb-2">
                                <input
                                  id="checkbox-option-1"
                                  type="checkbox"
                                  value=""
                                  className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                                />
                                <label
                                  htmlFor="checkbox-option-1"
                                  className="ml-1 font-normal text-xs cursor-pointer  text-gray-600"
                                >
                                  option-1
                                </label>
                              </div>
                              <div className="flex items-center mb-2">
                                <input
                                  id="checkbox-option-2"
                                  type="checkbox"
                                  value=""
                                  className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                                />
                                <label
                                  htmlFor="checkbox-option-2"
                                  className="ml-1 font-normal text-xs cursor-pointer  text-gray-600"
                                >
                                  option-2
                                </label>
                              </div>
                              <div className="flex items-center mb-2">
                                <input
                                  id="checkbox-option-3"
                                  type="checkbox"
                                  value=""
                                  className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-600 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                                />
                                <label
                                  htmlFor="checkbox-option-3"
                                  className="ml-1 font-normal text-xs cursor-pointer  text-gray-600"
                                >
                                  option-3
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <label
                      htmlFor="Offer"
                      className="font-medium text-sm leading-6 text-white mb-1"
                    >
                      Offer
                    </label>
                    <div className="relative w-full mb-7">
                      <select
                        id="Offer"
                        className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                      >
                        <option selected>5% off discount</option>
                        <option value="option 1">10% off discount</option>
                        <option value="option 2">15% off discount</option>
                        <option value="option 3">20% off discount</option>
                        <option value="option 4">30% off discount</option>
                      </select>
                      <svg
                        className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                          stroke="#111827"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-sm leading-6 text-white mb-3">
                      Discount
                    </p>
                    <div className="box flex flex-col gap-2">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-1"
                          type="checkbox"
                          value=""
                          className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                        />
                        <label
                          htmlFor="checkbox-default-1"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          20% or more
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-2"
                          type="checkbox"
                          value=""
                          className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                        />
                        <label
                          htmlFor="checkbox-default-2"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          30% or more
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-3"
                          type="checkbox"
                          value=""
                          className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                        />
                        <label
                          htmlFor="checkbox-default-3"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          50% or more
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <section>
                    <div className="flex justify-center">
                      <div className="w-fit flex flex-col md:flex-row justify-start gap-3 md:gap-1 flex-wrap">
                        {nftData.map((e, i) => {
                          return (
                            <GradientCardNA
                              userImg={e.userImg}
                              imgURL={e.imgURL}
                              normalImg={e.normalImg || false}
                              userName={e.userName}
                              price={e.price}
                              ClassName={e.className}
                              key={i}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <nav aria-label="Page navigation example" className="mt-24">
              <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-3 h-3 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    1
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-3 h-3 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          <Footer />
        </div>
      </AuroraBackground>
    </main>
  );
};

export default page;
