import React from "react";

export default function Hero() {
  return (
    <div className="flex my-28 flex-col justify-center items-center md:gap-10 gap-6">
      <div className=" md:text-7xl text-[36px] leading-10 text-black font-extrabold  capitalize">
        Start Crafting your <br />
        <span className="text-[#5f5fec]">Next Great idea</span>
      </div>
      <div className="">
        <p className="text-gray-500 text-base max-w-[400px] mx-auto">
          Simplifying the creation of landing pages, blog pages, application
          pages and so much more!
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <button className="bg-[#5f5fec]  rounded-full py-3 relative px-4 hover:bg-yellow-500 text-white hover:shadow-lg text-sm font-normal">
          Purchase Now
          <button className="absolute bg-[#34d69d] text-white text-[10px] px-1 rounded-full -top-2 -right-4">
            only $15/mo
          </button>
        </button>
        <a href="/" className="text-[#8c8cb3] text-xs hover:underline">
          Learn more
        </a>
      </div>
    </div>
  );
}
