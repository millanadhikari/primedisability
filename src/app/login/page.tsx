import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div className="text-center bg-[#e5e6e1] h-[100vh]">
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
      <div className="flex flex-col justify-center items-center w-full mt-10">
        <input
          placeholder="Email address"
          className="border border-gray-400 rounded-t-sm px-3 py-2 w-[350px] "
        />
        <input
          placeholder="Password"
          type="password"
          className="border border-t-0 border-gray-400 rounded-b-sm px-3 py-2 w-[350px] "
        />
      </div>
      <Button className="w-[350px] mt-5 rounded-sm bg-orange-500 text-md cursor-pointer hover:bg-orange-600">
        Log in
      </Button>
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
    </div>
  );
}

export default Home;
