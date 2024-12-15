import React from "react";
import { FaTasks } from "react-icons/fa";
import {
  MdEmojiTransportation,
  MdOutlineDryCleaning,
  MdOutlinePeopleAlt,
  MdSportsKabaddi,
} from "react-icons/md";
import { PiHospital } from "react-icons/pi";
import { TbHomePlus, TbPlayHandball } from "react-icons/tb";

function Participation() {
  return (
    <div className="bg-[#e4e1dc] py-8">
      <div className="max-w-[1200px] mx-auto px-4 ">
        <h2 className="text-3xl md:text-3xl font-bold">
          NDIS participants plans
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 cursor-pointer  ">
          <div className="border border-gray-400 rounded-xl py-3 px-3 md:max-w-[340px] text-center ">
            <div className="my-4  border text-orange-800 border-orange-800 w-[68px] flex items-center py-3 px-3 justify-center rounded-md text-5xl mx-auto">
              <TbHomePlus />
            </div>
            <div className="">
              <h2 className="text-xl text-orange-800 underline ">
                Accomodation/Tenancy
              </h2>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl py-3 px-3 md:max-w-[340px] text-center ">
            <div className="my-4  border text-orange-800 border-orange-800 w-[68px] flex items-center py-3 px-3 justify-center rounded-md text-5xl mx-auto">
              <MdOutlineDryCleaning />
            </div>
            <div className="">
              <h2 className="text-xl text-orange-800 underline ">
                Assist-Personal Activities
              </h2>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl py-3 px-3 md:max-w-[340px] text-center ">
            <div className="my-4  border text-orange-800 border-orange-800 w-[68px] flex items-center py-3 px-3 justify-center rounded-md text-5xl mx-auto">
              <MdEmojiTransportation />
            </div>
            <div className="">
              <h2 className="text-xl text-orange-800 underline ">
                Assist-Travel/Transport
              </h2>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl py-3 px-3 md:max-w-[340px] text-center ">
            <div className="my-4  border text-orange-800 border-orange-800 w-[68px] flex items-center py-3 px-3 justify-center rounded-md text-5xl mx-auto">
              <FaTasks />
            </div>
            <div className="">
              <h2 className="text-xl text-orange-800 underline ">
                Daily Tasks/Shared Living
              </h2>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl py-3 px-3 md:max-w-[340px] text-center ">
            <div className="my-4  border text-orange-800 border-orange-800 w-[68px] flex items-center py-3 px-3 justify-center rounded-md text-5xl mx-auto">
              <MdOutlinePeopleAlt />{" "}
            </div>
            <div className="">
              <h2 className="text-xl text-orange-800 underline ">
                Innov Community Participation
              </h2>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl py-3 px-3 md:max-w-[340px] text-center ">
            <div className="my-4  border text-orange-800 border-orange-800 w-[68px] flex items-center py-3 px-3 justify-center rounded-md text-5xl mx-auto">
            <TbPlayHandball />
            </div>
            <div className="">
              <h2 className="text-xl text-orange-800 underline ">
                Development-Life Skills
              </h2>
            </div>
          </div>

          <div className="border border-gray-400 rounded-xl py-3 px-3 md:max-w-[340px] text-center ">
            <div className="my-4  border text-orange-800 border-orange-800 w-[68px] flex items-center py-3 px-3 justify-center rounded-md text-5xl mx-auto">
            <MdSportsKabaddi />
            </div>
            <div className="">
              <h2 className="text-xl text-orange-800 underline ">
                Group/Centre Activities
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participation;
