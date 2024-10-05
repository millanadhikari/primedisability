import Image from "next/image";
import React from "react";
import { IoIosMail } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";

function Why() {
  return (
    <div className="bg-red relative z-12">
      <span className="">
        <img
          alt="community"
          src="/assets/community.jpg"
          className="relative object-cover h-[1200px] mt-[-20px] w-full "
        />
        <div className="z-10 absolute top-0 py-8 px-4">
          <h2 className="text-4xl font-bold">
            Why Choose PathwayCare Solutions?
          </h2>
          <div className="relative mt-14 ">
            <div className=" absolute  top-[-24px] left-6 bg-white w-[90%] pt-5 rounded-xl font-bold text-xl ">
              <h2 className="border-b px-5 border-gray-200 py-6 cursor-pointer">
                FlexChange Support
              </h2>
              <h2 className="border-b px-5 border-gray-200 py-6 cursor-pointer">
                Priority-Centric Care
              </h2>
              <h2 className="border-b px-5 border-gray-200 py-6 cursor-pointer">
                Swift Support
              </h2>
              <h2 className="border-b px-5 border-gray-200 py-6 cursor-pointer">
                Personal Connections
              </h2>
              <h2 className="border-b px-5 border-gray-200 py-6 cursor-pointer">
                Seasoned Professionals
              </h2>
              <h2 className="px-5  py-6 cursor-pointer">
                Multilingual Support
              </h2>
              <div className="flex items-center cursor-pointer gap-4 py-6 px-5 bg-orange-500 rounded-xl text-gray-100 ">
                <span className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                  <IoIosMail className="text-orange-500 text-2xl" />
                </span>
                <h2>Contact Us</h2>
              </div>
            </div>
            <div className="absolute mt-[600px] py-5 px-5 text-white">
              <h2 className="text-4xl font-bold pb-5">
                Seasoned Professionals
              </h2>
              <p className="pb-5">
                Experience-Driven Support: Our staff brings not only training
                and supervision but also extensive experience across various
                disabilities and conditions. Trust in the expertise of our
                seasoned professionals for comprehensive and effective support.
              </p>
              <div className="flex gap-3 items-center">
                <p>Get Started</p>
                <MdArrowRightAlt />
              </div>
            </div>
            <div className="bg-white z-[-1] h-[900px] absolute top-0 w-full rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 border border-orange-300 "></div>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Why;
