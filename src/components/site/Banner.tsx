import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[500px] ">
      <Image
        src="/assets/hand.jpg"
        alt="banner"
        layout="fill"
        className="object-cover mt-[-80px]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 mt-[-80px] "></div>
      <div className="relative">
        <div className="container mx-auto absolute  inset-0  text-white px-5 md:px-[80px] lg:px-[140px] xl:px-[300px]  ">
          <h2 className="text-lg font-bold border-4 border-orange-500 px-6 py-3 inset-0 bg-gray-400 bg-opacity-30 w-[300px] ">
            Our Vision to Grow Better
          </h2>
          <h1 className="text-5xl mt-5">Get Started</h1>
          <h1 className="text-5xl">Today</h1>
          <p className="mt-6 max-w-[450px] md:text-[1.1rem] lg:text-[1.2rem] leading-8 ">
            Start your journey toward personalized care and empowerment.
            Discover how to get started with PrimeCare Solutions.
          </p>
          <button className="bg-orange-500 text-white mt-10 py-3 px-8 text-lg cursor-pointer hover:bg-orange-400">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
