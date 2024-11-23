import Image from "next/image";
import React from "react";

function Embark() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-5 overflow-hidden max-w-[870px] mx-5 md:mx-auto">
      <div className="bg-orange-500 text-white py-8 px-10 text-center rounded-t-xl max-w-[440px] mx-auto">
        <h2 className="text-2xl font-semibold">
          BEGIN YOUR JOURNEY WITH PRIMECARE SOLUTIONS
        </h2>
        <button className="mt-5 bg-white text-orange-500 px-10 py-2 rounded-md font-semibold">
          Get Started
        </button>
      </div>

      <div className="relative  text-white py-8 px-10 text-center rounded-xl max-w-[440px] mx-auto">
        <img
          src="/assets/questions.jpg"
          alt="questions"
          //   layout="fill"
          className="object-cover absolute top-0 left-0 z-[-3] rounded-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-90 z-[-2] rounded-xl  "></div>

        <div className="z-1">
          <h2 className="text-2xl font-semibold">Have Questions? </h2>
          <p className="my-3 text-gray-400">
            There’s nothing holding us back from becoming who we aspire to be.
          </p>
          <p>info@primecaresolutions.com.au</p>
          <button className="mt-5 text-white bg-orange-500 px-10 py-2 rounded-md font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Embark;
