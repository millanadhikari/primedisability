import Footer from "@/components/footer";
import Header from "@/components/header";
import Banner from "@/components/site/Banner";
import Who from "@/components/site/Who";
// import DisplayTab from "@/components/site/tabs/DisplayTab";
import Why from "@/components/site/Why";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <div className="mt-20"></div>
      <Banner />
     <Who/>
      <Why />
      {/* <DisplayTab /> */}
      <Footer />
    </div>
  );
}
