import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

function NeedHelp() {
  return (
    <div className="py-10 pb-14 px-6 text-center bg-[#3a474f] text-white">
      <h1 className="text-3xl font-bold">Need Some Help?</h1>
      <p className="py-4">
        Whether you're stuck or just want some tips on where to start, hit up
        our experts anytime.
      </p>
      <div className="flex text-md items-center justify-center gap-2 my-5 mb-7 bg-orange-500 text-white rounded-full py-3 w-44 cursor-pointer mx-auto hover:bg-orange-400">
        <p>Contact Us</p>
        <span>
          <FaArrowRight />
        </span>
      </div>
      <div className="flex justify-center items-center gap-4 ">
        <div className="text-3xl border-4 border-dotted p-2 rounded-full">
          <MdOutlinePhoneInTalk />
        </div>
        <div className="flex flex-col text-left gap-1 ">
          <h2 className="text-orange-500 font-semibold">Call Us On </h2>
          <p>1300 292 123</p>
        </div>
      </div>
    </div>
  );
}

export default NeedHelp;
