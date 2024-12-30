"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NeedHelp from "@/components/site/NeedHelp";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FaAngleDoubleRight,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  postcode: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  mobile: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  service: z.string(),
  message: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      postcode: "",
      mobile: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    alert('hello')
    console.log("lkjdf", data);
  };

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
            Contact
            <div className="flex justify-center items-center gap-4 text-[1.2rem] mt-3">
              <h1 className="cursor-pointer">Home</h1>
              <span>
                <FaAngleDoubleRight />
              </span>
              <h1 className="">Contact Us</h1>
            </div>
            <button className="bg-orange-500 text-white mt-10 py-3 px-8 text-lg cursor-pointer hover:bg-orange-400">
              Book Service Today
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="container md:flex gap-4 max-w-[1200px] mx-auto text-[#3a474f]">
          <div className="px-5 py-6 mx-auto  max-w-[900px]  ">
            <h2 className="text-3xl md:text-3xl font-bold">
              Get in Touch{" "}
              <span className="text-orange-500">With Our Experts</span>
            </h2>
            <div className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              <p>
                Complete the form to send your message. If your inquiry is
                urgent, don't hesitate to call us at the number below.
              </p>
              <br className=""></br>
              <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-4 text-[1.1rem]">
                <div>
                  <div className="flex items-start gap-3 border shadow-lg p-4">
                    <span className="bg-orange-500 rounded-full text-white p-2 text-xl">
                      <MdEmail />
                    </span>
                    <div >
                      <h2 className="font-semibold text-orange-500">
                        General Enquiries
                      </h2>
                      <p className="text-[1rem]">Email:</p>
                      <p className="text-[1rem]">info@primechoicecare.com.au</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border shadow-lg p-4 my-4">
                    <span className="bg-orange-500 rounded-full text-white p-2 text-xl">
                      <FaPhoneAlt />
                    </span>
                    <div>
                      <h2 className="font-semibold text-orange-500">
                        Contact Details with 24 x 7 Support
                      </h2>
                      <p className="text-[1rem]">Phone:</p>
                      <p className="text-[1rem]">+61 451103939</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border shadow-lg p-4">
                    <span className="bg-orange-500 rounded-full text-white p-2 text-xl">
                      <FaClock />
                    </span>
                    <div>
                      <h2 className="font-semibold text-orange-500">
                        Operation Hours
                      </h2>
                      <p className="text-[1rem]">24 hours</p>
                    </div>
                  </div>
                  <div className="flex justify-center my-12 gap-3">
                    <span className="bg-gray-200 p-3 rounded-full text-orange-500 text-2xl cursor-pointer">
                      <FaFacebookF />
                    </span>
                    <span className="bg-gray-200 p-3 rounded-full text-orange-500 text-2xl cursor-pointer">
                      <FaInstagram />
                    </span>
                    <span className="bg-gray-200 p-3 rounded-full text-orange-500 text-2xl cursor-pointer">
                      <TiSocialLinkedin />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border p-3 shadow-xl w-full text-3xl">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              className="mb-3"
                              placeholder="Your name"
                              {...field}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              className="mb-3"
                              placeholder="Email"
                              {...field}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="postcode"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              className="mb-3"
                              placeholder="Postcode"
                              {...field}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <Input
                              className="mb-3"
                              placeholder="Mobile"
                              {...field}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="">
                        <Label className="">
                          SERVICE YOU ARE INQUIRING ABOUT*
                        </Label>
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <Select>
                                <FormControl>
                                  <SelectTrigger className="">
                                    <SelectValue placeholder="  --Please choose an option --" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="In-Home Support">
                                      In-Home Support
                                    </SelectItem>
                                    <SelectItem value="Community Support">
                                      Community Support
                                    </SelectItem>
                                    <SelectItem value="Care Assistance">
                                      Care Assistance
                                    </SelectItem>
                                    <SelectItem value="Domestic Assistance">
                                      Domestic Assistance
                                    </SelectItem>
                                    <SelectItem value="Daily Care">
                                      Daily Care
                                    </SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="mt-3">
                        <Label>YOUR MESSAGE*</Label>
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea
                                  placeholder="Additional Information"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button
                        className="bg-orange-500 hover:bg-orange-400 text-white text-[1rem] mt-5 "
                        type="submit"
                      >
                        SUBMIT
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NeedHelp />

      {/* <DisplayTab /> */}
      <Footer />
    </div>
  );
}

export default Home;
