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
            NDIS Personal Care Assistance
            <div className="flex justify-center items-center gap-4 text-[1.2rem] mt-3">
              <h1 className="cursor-pointer">Home</h1>
              <span>
                <FaAngleDoubleRight />
              </span>
              <h1 className="">Personal Care Assistance</h1>
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
              Personal Care{" "}
              <span className="text-orange-500">Assistance and Support</span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Serving individuals funded through the NDIS, seniors utilizing a
                Home Care Package, and private clients.
              </p>
              <br className=""></br>
            </div>

            <h2 className="text-[1.6rem] md:text-3xl font-bold">
              Tailored Personal{" "}
              <span className="text-orange-500">Care Services</span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Providing high-quality support for individuals accessing a Home
                Care Package or the NDIS is essential for promoting their
                well-being and independence. Our focus on NDIS personal care
                aims to assist participants with everyday tasks such as
                grooming, bathing, and dressing. By offering in-home personal
                care, participants receive the support they need in a familiar
                and comfortable environment, fostering both convenience and a
                sense of safety.
              </p>
              <br className=""></br>
              <p>
                When you choose us as your NDIS personal care provider, you can
                expect compassionate and individualized care tailored to meet
                each person’s specific requirements. Additionally, our reliable
                and professional services help participants uphold their dignity
                and independence while ensuring the highest level of care.
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
              The Role of{" "}
              <span className="text-orange-500">Personal Carer</span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                A personal carer plays a vital role in supporting the well-being
                of individuals accessing a Home Care Package or the NDIS. Our
                committed professionals deliver essential personal care
                services, helping with daily tasks such as bathing, dressing,
                and mobility assistance. By providing in-home personal care,
                they empower individuals to maintain their independence and
                routines in the comfort and familiarity of their own homes.
              </p>
              <br className=""></br>
              <p>
                As a trusted NDIS personal care provider, we ensure that each
                participant receives support tailored to their unique needs and
                preferences. The presence of a compassionate and skilled
                personal carer creates a safe and nurturing environment,
                improving the overall quality of life for the individuals they
                assist.
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
