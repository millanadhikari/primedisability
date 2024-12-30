"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-100 z-[999] sticky top-0 right-0 left-0 p-3 flex items-center justify-between z-100 border-b-2 bg-white ">
      <Link href="/">
        <div className="flex gap-2">
          <Image
            alt="logo"
            src="/assets/prime_logo.png"
            height={22}
            width={56}
          />
          <div className="font-bold text-orange-600 mt-1 ">
            <p className="text-lg">PRIME CHOICE</p>
            <p className="text-gray-500 mt-[-5px]">CARE</p>
          </div>
        </div>
      </Link>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl cursor-pointer lg:hidden text-orange-400"
      >
        {/* {!open ? <RxHamburgerMenu /> : <IoCloseSharp />} */}
        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-menu md:hidden cursor-pointer"
                                onClick={() => setOpen(!open)}
                            >
                                <line
                                    x1="3"
                                    y1="6"
                                    x2="21"
                                    y2="6"
                                    className={twMerge(
                                        "origin-left transition",
                                        open && "rotate-45 -translate-y-1"
                                    )}
                                ></line>
                                <line
                                    x1="3"
                                    y1="12"
                                    x2="21"
                                    y2="12"
                                    className={twMerge(
                                        "transition",
                                        open && "opacity-0"
                                    )}
                                ></line>
                                <line
                                    x1="3"
                                    y1="18"
                                    x2="21"
                                    y2="18"
                                    className={twMerge(
                                        "origin-left transition",
                                        open && "-rotate-45 translate-y-1"
                                    )}
                                ></line>
                            </svg>

      </div>
      <AnimatePresence>
      {open && (
        <motion.div
          initial={{height:0}}
          animate={{height:"auto"}}
          exit={{height:0}}
          
          className="fixed inset-0 top-[70px] left-0 bg-[#e5e6e1] w-full h-full px-4 py-4 overflow-hidden lg:hidden">
          <h2 className="text-bold">Menu</h2>
          <ul className="text-gray-600">
            <li className="border-t-2 cursor-pointer">
              <MenuAccordion />
            </li>
            <li className=" border-t-2 border-gray-400 py-[10px] cursor-pointer hover:text-orange-500">
              Home Care
            </li>
            <li className=" border-t-2 border-gray-400 py-[10px] cursor-pointer hover:text-orange-500">
              Aged Care Staffing
            </li>
            <li className=" border-t-2 border-gray-400 py-[10px] cursor-pointer hover:text-orange-500">
              Help & FAQs
            </li>
            <Link href="about-us">
              <li className=" border-t-2 border-gray-400 py-[10px] cursor-pointer hover:text-orange-500">
                About Us
              </li>
            </Link>
            <li className=" border-t-2 border-gray-400 py-[10px] cursor-pointer hover:text-orange-500">
              Blogs
            </li>
          </ul>

          <div className="flex justify-center my-12 gap-3">
            <span className="bg-gray-300 p-3 rounded-full text-orange-500 text-xl cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="bg-gray-300 p-3 rounded-full text-orange-500 text-xl cursor-pointer">
              <FaInstagram />
            </span>
            <span className="bg-gray-300 p-3 rounded-full text-orange-500 text-xl cursor-pointer">
              <TiSocialLinkedin />
            </span>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}

export default Header;

const MenuAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-none  ">
        <AccordionTrigger className="text-md  hover:text-orange-500 hover:no-underline">
          Disability & NDIS
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-3 pl-5 cursor-pointer text-[1rem]">
            <Link href="/home-support">
              <li className="hover:text-orange-500">NDIS in Home Support</li>
            </Link>
            <Link href="community-support">
              <li className="hover:text-orange-500">NDIS Community Support</li>
            </Link>
            <Link href="/personal-care">
              <li className="hover:text-orange-500">
                NDIS Personal Care Assistance
              </li>
            </Link>

            <Link href="/domestic-assistance">
              <li className="hover:text-orange-500">
                NDIS Domestic Assistance
              </li>
            </Link>
            {/* <Link href="">
              <li className="hover:text-orange-500">NDIS Daily Care</li>
            </Link>
            <Link href="">
              <li className="hover:text-orange-500">NDIS Nursing Services</li>
            </Link>
            <Link href="">
              <li className="hover:text-orange-500">NDIS Hospital Support</li>
            </Link> */}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
