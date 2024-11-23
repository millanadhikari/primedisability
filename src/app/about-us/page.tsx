import Footer from "@/components/footer";
import Header from "@/components/header";
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
            About Us
            <div className="flex justify-center items-center gap-4 text-[1.2rem] mt-3">
              <h1 className="cursor-pointer">Home</h1>
              <span>
                <FaAngleDoubleRight />
              </span>
              <h1 className="">About Us</h1>
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
            <h2 className="text-3xl md:text-3xl font-bold">
              Welcome to{" "}
              <span className="text-orange-500">Prime Care Solutions</span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Welcome to PrimeCare Solutions, your trusted partner NDIS and homecare, a premier provider of personalized care
                services. We excel in delivering comprehensive solutions,
                including mobile allied health services, disability support and
                NDIS coordination, home and community care, and specialized aged
                care staffing. Our unwavering dedication lies in crafting
                tailored care plans that empower individuals to lead independent
                lives while achieving their unique personal objectives.
              </p>
              <br className=""></br>

              <p>
                At PrimeCare Solutions, we place the utmost importance on
                understanding and respecting your preferences and support needs.
                By adopting a client-centered approach, we prioritize delivering
                services that seamlessly align with your lifestyle and goals.
                Choosing PrimeCare Solutions means engaging with a highly
                professional team committed to fostering transparent
                communication, collaborative partnerships, and excellence in
                care delivery.
              </p>
              <br className=""></br>

              Our range of services for NDIS Participants is thoughtfully
              designed to include Core Supports, Capital Supports, and Capacity
              Building Supports, ensuring a holistic and customized approach to
              meeting diverse care requirements.
              <br className=""></br>
              <br className=""></br>

              We are deeply committed to providing bespoke care experiences for
              individuals with disabilities across all age groups. By tailoring
              every aspect of our support, we ensure that NDIS Participants
              receive the highest standard of care, grounded in compassion,
              expertise, and a genuine understanding of individual needs.
            </div>
          </div>
        </div>
      </div>

      <NeedHelp />
      <Why />
      {/* <DisplayTab /> */}
      <Footer />
    </div>
  );
}

export default Home;
