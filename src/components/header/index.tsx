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
        {!open ? <RxHamburgerMenu /> : <IoCloseSharp />}
      </div>
      {open && (
        <div className="fixed top-[70px] left-0 bg-[#e5e6e1] w-full h-full px-4 py-4 lg:hidden">
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
        </div>
      )}
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
            <Link href="">
              <li className="hover:text-orange-500">
                NDIS Personal Care Assistance
              </li>
            </Link>

            <Link href="">
              <li className="hover:text-orange-500">
                NDIS Domestic Assistance
              </li>
            </Link>
            <Link href="">
              <li className="hover:text-orange-500">NDIS Daily Care</li>
            </Link>
            <Link href="">
              <li className="hover:text-orange-500">NDIS Nursing Services</li>
            </Link>
            <Link href="">
              <li className="hover:text-orange-500">NDIS Hospital Support</li>
            </Link>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
