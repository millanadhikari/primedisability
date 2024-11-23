import Footer from "@/components/footer";
import Header from "@/components/header";
import Embark from "@/components/site/Embark";
import NeedHelp from "@/components/site/NeedHelp";
import Why from "@/components/site/Why";
import Image from "next/image";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function Home() {
  return (
    <div className="h-full ">
      <Header />
      <div className="relative h-[300px] pt-20 ">
        <Image
          src="/assets/hand.jpg"
          alt="banner"
          layout="fill"
          className="object-cover mt-[-0px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 mt-[-80px] "></div>
        <div className="relative">
          <div className="container mx-auto absolute  text-center inset-0  text-white text-2xl px-5 md:px-[80px] lg:px-[140px] xl:px-[300px]  ">
            NDIS Home Support
            <div className="flex justify-center items-center gap-4 text-[1.2rem] mt-3">
              <h1 className="cursor-pointer">Home</h1>
              <span>
                <FaAngleDoubleRight />
              </span>
              <h1 className="">NDIS in Home Support</h1>
            </div>
            <button className="bg-orange-500 text-white mt-10 py-3 px-8 text-lg cursor-pointer hover:bg-orange-400">
              Book Service Today
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="container md:flex gap-4 max-w-[1200px] mx-auto">
          <img
            src="/assets/disable.jpg"
            alt="disability care"
            className=" px-3 md:max-w-[500px] object-contain rounded-xl mx-auto "
          />
          <div className="px-5 py-6 mx-auto  max-w-[700px]  ">
            <h2 className="text-[1.6rem] md:text-3xl font-bold">
              Receive Premium In-Home Support in{" "}
              <span className="text-orange-500">
                Sydney From Seasoned Professionals
              </span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Partner with skilled and empathetic support workers who
                prioritize your needs, offering attentive care and a warm,
                welcoming presence each day.
              </p>
              <br className=""></br>
            </div>

            <h2 className="text-[1.6rem] md:text-3xl font-bold">
              Assistance with{" "}
              <span className="text-orange-500">
                Daily Living and Genuine Companionship
              </span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                As a reputable NDIS service provider in Sydney, we prioritize
                building meaningful and supportive relationships with you or
                your loved ones. Our dedicated support workers go beyond
                offering practical assistance—they provide compassionate,
                respectful, and attentive care, fostering authentic connections.
              </p>
              <br className=""></br>
              <p>
                Our approach is centered on delivering the exceptional care you
                deserve while nurturing an empowering and enduring partnership
                that stands the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="container md:flex gap-4 max-w-[1200px] mx-auto">
          <img
            src="/assets/care.jpg"
            alt="disability care"
            className=" px-3 md:max-w-[500px] object-contain rounded-xl mx-auto "
          />
          <div className="px-5 py-6 mx-auto  max-w-[700px]  ">
            <h2 className="text-[1.6rem] md:text-3xl font-bold">
              Comprehensive Support for{" "}
              <span className="text-orange-500">
                Your Daily Activities Aligned with Your NDIS Plan
              </span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Personal Assistance
                  </h2>
                  <p className="mt-1">
                    Expert support with grooming, bathing, and maintaining
                    personal hygiene.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Household Management
                  </h2>
                  <p className="mt-1">
                    Efficient help with daily chores to keep your home tidy and
                    well-organized.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Community engagement
                  </h2>
                  <p className="mt-1">
                    Encouragement to participate in local events, activities,
                    and social groups.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Recreational Outings
                  </h2>
                  <p className="mt-1">
                    Memorable trips to parks, shops, and other enjoyable
                    destinations.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Meal Preparation
                  </h2>
                  <p className="mt-1">
                    Assistance with meal planning, grocery shopping, and cooking
                    nutritious meals.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Meal Preparation
                  </h2>
                  <p className="mt-1">
                    Assistance with meal planning, grocery shopping, and cooking
                    nutritious meals.
                  </p>
                </div>
              </div>{" "}
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Home Maintenance
                  </h2>
                  <p className="mt-1">
                    Professional care to ensure your home is clean, organized,
                    and welcoming.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Social Interaction
                  </h2>
                  <p className="mt-1">
                    Meaningful companionship through engaging conversations and
                    activities.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Medication Support
                  </h2>
                  <p className="mt-1">
                    Reliable administration of medications with accuracy and
                    timeliness.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-top mb-3 ">
                <div className="flex mt-[6px] md:mt-[9px]">
                  <span className="w-[11px] bg-orange-500 h-[8px]"></span>
                  <span className="w-[11px] bg-orange-200 h-[8px]"></span>
                </div>
                <div>
                  <h2 className="font-semibold text-orange-500">
                    Overnight Care
                  </h2>
                  <p className="mt-1">
                    Thoughtful support and assistance throughout the night for
                    peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Embark />
      </div>

      <NeedHelp />
      <Why />
      {/* <DisplayTab /> */}
      <Footer />
    </div>
  );
}

export default Home;
