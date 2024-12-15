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
            NDIS Daily Tasks/Shared Living
            <div className="flex justify-center items-center gap-4 text-[1.2rem] mt-3">
              <h1 className="cursor-pointer">Home</h1>
              <span>
                <FaAngleDoubleRight />
              </span>
              <h1 className="">DailyTasks/ Shared Living</h1>
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
              NDIS{" "}
              <span className="text-orange-500">
                Daily Tasks/ Shared Living
              </span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Serving individuals funded through the NDIS, seniors utilizing a
                Home Care Package, and private clients.
              </p>
              <br className=""></br>
            </div>

            <h2 className="text-[1.6rem] md:text-3xl font-bold">
              Streamlined Home Management:{" "}
              <span className="text-orange-500">
                Making Your Everyday Life Easier
              </span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Domestic assistance plays a pivotal role in improving daily
                living for individuals supported by Home Care Packages or the
                NDIS. These services, including home care and NDIS domestic
                assistance, provide crucial support that allows elderly
                individuals and those with disabilities to maintain independence
                and enhance their quality of life. Tasks such as cleaning, meal
                preparation, and personal care ensure participants can enjoy a
                safe, clean, and comfortable home environment.
              </p>
              <br className=""></br>
              <p>
                In addition, domestic assistance reduces the workload on family
                members, giving them the freedom to focus on their personal and
                professional lives while having peace of mind that their loved
                ones are well cared for. These services also promote dignity and
                empowerment, helping participants engage more actively in their
                communities and fostering meaningful social connections.
                Ultimately, domestic assistance goes beyond household tasks—it
                contributes to overall well-being, enabling those on Home Care
                Packages or NDIS plans to lead more balanced and fulfilling
                lives.
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
              The Core of{" "}
              <span className="text-orange-500">Domestic Assistance</span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Domestic assistance is fundamentally about improving the daily
                lives of individuals supported by Home Care Packages or the
                NDIS. These essential services provide vital help to elderly
                individuals and people with disabilities, allowing them to
                maintain their independence and enhance their overall quality of
                life. By offering support with tasks such as cleaning, meal
                preparation, and personal care, domestic assistance ensures
                participants can enjoy a safe and comfortable home environment.
              </p>
              <br className=""></br>
              <p>
                In addition to supporting participants, domestic assistance
                eases the pressure on family members, enabling them to focus on
                their own lives with confidence that their loved ones are
                receiving excellent care. These services also help participants
                maintain their dignity and empower them to engage more actively
                within their communities, fostering social connections and
                meaningful interactions. Ultimately, domestic assistance is
                about much more than household tasks—it’s about enhancing
                well-being and supporting individuals to lead more balanced,
                enriched, and fulfilling lives.
              </p>
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
