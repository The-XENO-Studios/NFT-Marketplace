const ProfilMargin = () => {
  return (
    <div className="px-7 mt-36 w-full flex flex-col items-center">
      <div className="mb-16 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        About Our <span className="text-purple-600">Daily Goals</span>
      </div>
      <div className="w-[90%] md:w-[50%]">
        <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
          Daily Customers
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-yellow-400 h-2.5 rounded-full w-[70%]"></div>
        </div>
        <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
          Daily Transactions
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500 w-[60%]"></div>
        </div>
        <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
          Daily Profit
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-[90%]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilMargin;
