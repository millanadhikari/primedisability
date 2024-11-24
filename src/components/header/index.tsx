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

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-100 z-[999] sticky top-0 right-0 left-0 p-3 flex items-center justify-between z-100 border-b-2 bg-white ">
      <div className="flex gap-2">
        <Image alt="logo" src="/assets/prime_logo.png" height={20} width={52} />
        <div className="font-bold text-orange-600 ">
          <p>PRIME CHOICE</p>
          <p className="text-gray-400 mt-[-5px]">CARE</p>
        </div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl cursor-pointer lg:hidden text-orange-400"
      >
        {!open ? <RxHamburgerMenu /> : <IoCloseSharp />}
      </div>
      {open && (
        <div className="fixed top-[70px] left-0 bg-white w-full h-full px-4 py-4 lg:hidden">
          <h2 className="text-bold">Menu</h2>
          <ul className="text-gray-600">
            <li className="border-t-2 cursor-pointer">
              <MenuAccordion />
            </li>
            <li className="border-t-2 py-[9px] cursor-pointer hover:text-orange-500">
              Home Care
            </li>
            <li className="border-t-2 py-[9px] cursor-pointer hover:text-orange-500">
              Aged Care Staffing
            </li>
            <li className="border-t-2 py-[9px] cursor-pointer hover:text-orange-500">
              Help & FAQs
            </li>
            <li className="border-t-2 py-[9px] cursor-pointer hover:text-orange-500">
              About Us
            </li>
            <li className="border-t-2 py-[9px] cursor-pointer hover:text-orange-500">
              Blogs
            </li>
          </ul>
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
          <ul className="flex flex-col gap-3 pl-5 cursor-pointer">
            <li>NDIS in Home Support</li>
            <li>NDIS Community Sport</li>
            <li>NDIS Personal Care Assistance</li>
            <li>NDIS Domestic Assistance</li>
            <li>NDIS Daily Care</li>
            <li>NDIS Nursing Services</li>
            <li>NDIS Hospital Support</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
