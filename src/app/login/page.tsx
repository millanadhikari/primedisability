"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="text-center bg-[#e5e6e1] h-[100vh] w-full relative">
      <Image
        src={"/assets/logo_2.png"}
        alt="Prime Logo"
        height={90}
        width={90}
        className="mx-auto"
      />
      <h2 className="font-semibold text-xl">
        Log in to <span className="text-orange-500">PrimeCare </span> Dashboard
      </h2>
      <Form {...form}>
        <form>
          <div className="flex flex-col justify-center items-center w-full mt-10">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Input
                    placeholder="Email Address"
                    className="placeholder:text-sm border bg-white rounded-none rounded-t-sm border-b-0 border-gray-400 px-3 py-2 w-[350px] "
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Input
                    placeholder="Password"
                    type="password"
                    className="placeholder:text-sm border bg-white border-gray-400 rounded-none rounded-b-sm px-3 py-2 w-[350px] "
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-[350px] mt-5 rounded-sm bg-orange-500 text-md cursor-pointer hover:bg-orange-600">
            Log in
          </Button>
        </form>
      </Form>
      <div className="flex gap-3 justify-center mt-8 text-sm text-orange-500 ">
        <Link href="forgot-password">
          <p className="hover:underline hover:text-orange-600 cursor-pointer">
            Forgot Password?
          </p>
        </Link>
        <p className="hover:underline hover:text-orange-600 cursor-pointer">
          Can't log in?
        </p>
      </div>
      <div className="absolute bottom-7 text-gray-600 left-1/2  transform -translate-x-1/2 flex justify-center gap-4 text-sm items-center text-center">
        <p className="text-nowrap hover:underline hover:text-orange-800 cursor-pointer">
          Terms of use
        </p>
        <p className="text-nowrap hover:underline hover:text-orange-800 cursor-pointer">
          Privacy
        </p>
        <p className="text-nowrap hover:underline hover:text-orange-800 cursor-pointer">
          Help Center
        </p>
        <p className="text-nowrap hover:underline hover:text-orange-800 cursor-pointer">
          Sign up
        </p>
      </div>
    </div>
  );
}

export default Home;
