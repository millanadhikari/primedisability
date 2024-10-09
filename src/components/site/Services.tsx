import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  LiaHandshakeSolid,
  LiaPeopleCarrySolid,
  LiaUserNurseSolid,
} from "react-icons/lia";
import { PiHospital } from "react-icons/pi";

function Services() {
  return (
    <div className="bg-[#e4e1dc] py-8">
      <div className="max-w-[1200px] mx-auto px-4 ">
        <h2 className="text-3xl md:text-3xl font-bold">Services</h2>
        <div className="lg:flex gap-6">
          <p className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] max-w-[600px]">
            Prime disability Agency is committed to delivering outstanding
            services through Mobile Allied Health, Disability Support & NDIS
            assistance, Home Care, and Agency Staffing, creating a route to
            improved well-being and autonomy for our clients.
          </p>
          <button className="lg:ml-20 my-4 border h-[50px] py-2 px-6 text-white bg-orange-500 font-semibold cursor-pointer hover:bg-orange-400">
            Get Started
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          <div className="bg-white rounded-xl py-3 px-3 md:max-w-[300px]">
            <img
              src="/assets/mobileallied.jpg"
              className="rounded-xl h-44 w-full object-cover"
            />
            <div className="relative mt-5 ">
              <div className=" absolute  w-[65px] bg-[#e4e1dc] h-[65px] rounded-md top-2 left-2"></div>
              <div className="my-4 absolute bg-orange-500 text-white w-[65px] flex items-center py-3 px-3 justify-center rounded-md text-4xl">
                <LiaPeopleCarrySolid />
              </div>
            </div>
            <div className="mt-[110px]">
              <h2 className="text-2xl font-bold">Mobile Allied Health</h2>
              <p className="my-5">
                On-the-go health care services that bring allied health
                profeesional to your location
              </p>
              <div className="flex gap-3 text-orange-500 cursor-pointer hover:text-orange-400">
                <p className="font-bold">Discover More</p>
                <div className="flex items-center">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl py-3 px-3 md:max-w-[300px]">
            <img
              src="/assets/disable.jpg"
              className="rounded-xl h-44 w-full object-cover"
            />
            <div className="relative mt-5 ">
              <div className=" absolute  w-[65px] bg-[#e4e1dc] h-[65px] rounded-md top-2 left-2"></div>
              <div className="my-4 absolute bg-orange-500 text-white w-[65px] flex items-center py-3 px-3 justify-center rounded-md text-4xl">
                <LiaHandshakeSolid />
              </div>
            </div>
            <div className="mt-[110px]">
              <h2 className="text-2xl font-bold">Disability & NDIS</h2>
              <p className="my-5">
                Specialised NDIS and support services catering to indiciduals
                with disabilities.
              </p>
              <div className="flex gap-3 text-orange-500 cursor-pointer hover:text-orange-400">
                <p className="font-bold">Discover More</p>
                <div className="flex items-center">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl py-3 px-3 md:max-w-[300px]">
            <img
              src="/assets/home.jpg"
              className="rounded-xl h-44 w-full object-cover"
            />
            <div className="relative mt-5 ">
              <div className=" absolute  w-[65px] bg-[#e4e1dc] h-[65px] rounded-md top-2 left-2"></div>
              <div className="my-4 absolute bg-orange-500 text-white w-[65px] flex items-center py-3 px-3 justify-center rounded-md text-4xl">
                <PiHospital />
              </div>
            </div>
            <div className="mt-[110px]">
              <h2 className="text-2xl font-bold">Home Care</h2>
              <p className="my-5">
                Personalised services delivered in comfort of your home
                enhanching overall quality of your life
              </p>
              <div className="flex gap-3 text-orange-500 cursor-pointer hover:text-orange-400">
                <p className="font-bold">Discover More</p>
                <div className="flex items-center">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>

            <div className=" bg-white rounded-xl py-3 px-3 md:max-w-[300px] ">
              <img
                src="/assets/agency.jpg"
                className="rounded-xl h-44 w-full object-cover"
              />
              <div className="relative mt-5 ">
                <div className=" absolute  w-[65px] bg-[#e4e1dc] h-[65px] rounded-md top-2 left-2"></div>
                <div className="my-4 absolute bg-orange-500 text-white w-[65px] flex items-center py-3 px-3 justify-center rounded-md text-4xl">
                  <LiaUserNurseSolid />
                </div>
              </div>
              <div className="mt-[110px]">
                <h2 className="text-2xl font-bold">Agency Staffing</h2>
                <p className="my-5">
                  Comprehensive staffing solutions tailored to your needs
                  ensuring skilled and relliable personnel.
                </p>
                <div className="flex gap-3 text-orange-500 cursor-pointer hover:text-orange-400">
                  <p className="font-bold">Discover More</p>
                  <div className="flex items-center">
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
