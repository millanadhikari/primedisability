import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

function Footer() {
  return (
    <div className=" bg-[#3a474f] w-full">
      <div className="container py-10 w-full xl:w-[1500px] mx-auto  px-5 text-gray-200  ">
        <div className="md:grid grid-cols-2 justify-center lg:grid-cols-3 xl:grid-cols-4  ">
          <div className=" mr-10">
            <Link href="/">
              <div className="flex gap-3 ">
                <Image
                  alt="logo"
                  src="/assets/logo_2.png"
                  height={20}
                  width={56}
                />
                <div className="font-bold text-orange-500 ">
                  <p className="text-lg text-white">PRIME CHOICE</p>
                  <p className="text-gray-300 text-sm mt-[-4px]">CARE</p>
                </div>
              </div>
            </Link>
            <p className="mt-4 text-[0.9rem] ">
              PrimeChoice Care provides a comprehensive range of personalised
              services.
            </p>

            <div className="flex items-center pt-8 gap-4">
              <Image
                alt="care"
                src="/assets/care.jpg"
                width={60}
                height={70}
                className="rounded-full aspect-square object-cover"
              />
              <Link href="/contact">
                <div>
                  <h2 className="text-orange-500 text-lg font-bold">
                    NEED HELP ?
                  </h2>
                  <p className=" mt-1 cursor-pointer hover:text-orange-400 text-md">
                    Contact Us{" "}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-6 max-w-[200px] ">
            <h2 className="text-lg font-bold">Company</h2>
            <div className="border-[3px] border-orange-400 w-14 my-2"></div>
            <ul className="mt-5 flex flex-col gap-2">
              <Link href="/">
                {" "}
                <li className="cursor-pointer hover:text-orange-400">Home</li>
              </Link>
              <Link href="/about-us">
                {" "}
                <li className="cursor-pointer hover:text-orange-400">
                  About Us
                </li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer hover:text-orange-400">
                  Contact
                </li>{" "}
              </Link>
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
              <Link href="/home-support">
                {" "}
                <li className="cursor-pointer hover:text-orange-400">
                  In-Home Support
                </li>
              </Link>
              <Link href="/community-support">
                {" "}
                <li className="cursor-pointer hover:text-orange-400">
                  Community Support
                </li>
              </Link>
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
                  <h2 className="text-bold text-[1rem]">Email Us</h2>
                  <p>info@primechoicecare.com.au</p>
                </div>
              </div>

              <div className=" mt-4 flex gap-3">
                <div className="bg-orange-400 h-10 w-10 rounded-full text-white text-xl flex items-center justify-center">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h2 className="text-bold text-[1rem]">Phone</h2>
                  <p className="cursor-pointer hover:text-orange-400">
                   +61 451103939
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 justify-center pt-16 pb-5 text-sm">
          <div className="flex gap-1 cursor-pointer items-center">
            <SiTicktick className="text-orange-400" />
            <p>Privacy Policy</p>
          </div>
          <div className="flex gap-1 cursor-pointer items-center">
            <SiTicktick className="text-orange-400" />
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="flex justify-center items-center  gap-1 text-center text-sm">
          2024 <span className="text-xl">© </span> PrimeChoice Care
        </div>
      </div>
    </div>
  );
}

export default Footer;
