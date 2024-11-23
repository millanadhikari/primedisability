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
            NDIS Community Support
            <div className="flex justify-center items-center gap-4 text-[1.2rem] mt-3">
              <h1 className="cursor-pointer">Home</h1>
              <span>
                <FaAngleDoubleRight />
              </span>
              <h1 className="">NDIS in Community Support</h1>
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
              NDIS Community{" "}
              <span className="text-orange-500">Support & Participation</span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Build meaningful connections and participate in activities
                within your local community with guidance from our dedicated and
                caring NDIS community support workers. With an emphasis on
                fostering NDIS community engagement, you’ll discover new
                opportunities to connect, grow, and flourish in an inclusive and
                supportive setting.
              </p>
              <br className=""></br>
            </div>

            <h2 className="text-[1.6rem] md:text-3xl font-bold">
              Assistance for{" "}
              <span className="text-orange-500">
                Social and Community Engagement
              </span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Receive personalized support from our committed team, ready to
                assist and accompany you to appointments, social gatherings,
                community events, or as you explore new hobbies and navigate
                different environments.
              </p>
              <br className=""></br>
              <p>
                Our compassionate and attentive support workers are here to
                empower and encourage you every step of the way. We strive to
                foster a positive and uplifting atmosphere where you can grow,
                feel confident, and reach your fullest potential.
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
             Benefits of{" "}
              <span className="text-orange-500">
              Engaging in NDIS Community Participation
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
                  Foster New Relationships and Networks:
                  </h2>
                  <p className="mt-1">
                  Connect with individuals who share your passions and create meaningful new relationships.
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
                  Develop New Skills and Strengthen Independence:
                  </h2>
                  <p className="mt-1">
                  Enhance your abilities and build a stronger sense of autonomy.
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
                  Discover and Enjoy Personal Interests:
                  </h2>
                  <p className="mt-1">
                  Engage in activities that excite you and bring joy to your life.
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
                  Boost Positivity and Inspiration:
                  </h2>
                  <p className="mt-1">
                  Surround yourself with a supportive, uplifting environment that encourages personal growth and fulfillment.
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
