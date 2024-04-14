import { EvervaultCardComponent } from "./EverVaultCard";

const TopSells = () => {
  return (
    <div className="mt-60 md:mt-80 w-full flex flex-col items-center">
      <div className="mb-16 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Market's <span className="text-purple-600">Top Sellers</span>
      </div>

      <div className="mt-5 flex flex-col md:flex-row gap-5">
        <EvervaultCardComponent
          name={"Bruce Wayne"}
          imgURL={
            "https://images.pexels.com/photos/2304123/pexels-photo-2304123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          desc={"I am a millionaire bat. I AM BATMAN..."}
        />
        <EvervaultCardComponent
          name={"Tony Stark"}
          imgURL={
            "https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          desc={"Millionaire, Genius, ____, Philanthropist"}
        />
        <EvervaultCardComponent
          name={"Steve Rogers"}
          imgURL={
            "https://images.pexels.com/photos/16574645/pexels-photo-16574645/free-photo-of-little-boy-in-captain-america-costume.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          desc={"I go back in time and get that person"}
        />
      </div>
    </div>
  );
};

export default TopSells;
