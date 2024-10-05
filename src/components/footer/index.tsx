import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

function Footer() {
  return (
    <div className=" bg-gray-50 w-full">
      <div className="container py-10 w-full xl:w-[1500px] mx-auto  px-10 text-gray-700  ">
        <div className="md:grid grid-cols-2 justify-center lg:grid-cols-3 xl:grid-cols-4  ">
          <div className=" mr-10">
            <div className="flex gap-3 ">
              <Image alt="logo" src="/assets/prime.JPG" height={2} width={22} />
              <div className="font-bold text-white ">
                <p>PRIME DISABILITY</p>
                <p className="text-gray-300 mt-[-5px]">Agency</p>
              </div>
            </div>
            <p className="mt-6 text-[1.1rem] ">
              PrimeDisability Care provides a comprehensive range of
              personalised services.
            </p>

            <div className="flex items-center pt-10 gap-5">
              <Image
                alt="care"
                src="/assets/care.jpg"
                width={70}
                height={70}
                className="rounded-full aspect-square object-cover "
              />
              <div>
                <h2 className="text-orange-400 text-lg font-bold">
                  NEED HELP?
                </h2>
                <p className="font-semibold mt-1 cursor-pointer hover:text-orange-400 text-md">
                  Contact Us{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 max-w-[200px] ">
            <h2 className="text-lg font-bold">Company</h2>
            <div className="border-[3px] border-orange-400 w-14 my-2"></div>
            <ul className="mt-5 flex flex-col gap-2">
              <li className="cursor-pointer hover:text-orange-400">Home</li>
              <li className="cursor-pointer hover:text-orange-400">Acout Us</li>
              <li className="cursor-pointer hover:text-orange-400">Contact</li>
              <li className="cursor-pointer hover:text-orange-400">FAQ</li>
              <li className="cursor-pointer hover:text-orange-400">
                Get Started
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-bold">Disability & NDIS</h2>
            <div className="border-[3px] border-orange-400 w-14 my-2"></div>
            <ul className="mt-5 flex flex-col gap-2">
              <li className="cursor-pointer hover:text-orange-400">
                In-Home Support
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                Community Support
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                Care Assistance
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                Domestic Assistance
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                Daily Care
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                Nursing Services
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-bold">Get in Touch</h2>
            <div className="border-[3px] border-orange-400 w-14 my-2"></div>
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex gap-3">
                <div className="bg-orange-400 h-10 w-10 rounded-full text-white text-xl flex items-center justify-center">
                  <MdEmail />
                </div>
                <div>
                  <h2 className="text-bold text-[1.1rem]">Email Us</h2>
                  <p>info@primedisability.com.au</p>
                </div>
              </div>

              <div className=" mt-4 flex gap-3">
                <div className="bg-orange-400 h-10 w-10 rounded-full text-white text-xl flex items-center justify-center">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h2 className="text-bold text-[1.1rem]">Phone</h2>
                  <p className="cursor-pointer hover:text-orange-400">
                    02 8065 4646
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-center pt-16 pb-5">
          <div className="flex gap-3 cursor-pointer items-center">
            <SiTicktick className="text-orange-400" />
            <p>Privacy Policy</p>
          </div>
          <div className="flex gap-3 cursor-pointer items-center">
            <SiTicktick className="text-orange-400" />
            <p>Terms & Conditions</p>
          </div>
        </div>
        <p className="text-center">2024 (c) PrimeDisability Solutions</p>
      </div>
    </div>
  );
}

export default Footer;
