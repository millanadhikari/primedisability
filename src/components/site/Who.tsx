import React from "react";
import { RiHandHeartLine } from "react-icons/ri";
import { TbHeartHandshake } from "react-icons/tb";
function Who() {
  return (
    <div className="my-10   ">
      <div className="container md:flex gap-4 max-w-[1200px] mx-auto">
        <img
          src="/assets/who.jpg"
          alt="disability care"
          className="  h-auto w-auto max-w-[320px] md:max-w-[500px] object-contain rounded-xl mx-auto "
        />
        <div className="px-5 py-6 mx-auto  max-w-[700px]  ">
          <h2 className="text-3xl md:text-3xl font-bold">
            Your Trusted NDIS Provider in Sydney
          </h2>
          <p className="mt-4 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
            Your search for a professional NDIS provider in Sydney ends here.
            With years of experience in disability care and support, we are
            leaders in this field. We focus on delivering top-notch NDIS Core
            Supports, such as personal care, household assistance, and community
            participation, empowering participants to reach their goals and
            maintain their independence.<br></br> To us, participants are like
            family, and we care for them wholeheartedly. We create welcoming
            environments and treat everyone with dignity and respect. We go
            beyond being just support workers; we are companions who help
            navigate daily challenges, enabling individuals to gain their
            independence. If youre seeking compassionate staff for yourself or a
            loved one, were here to fulfill your needs.
          </p>
        </div>
      </div>
      <div className="my-6 px-4 lg:flex max-w-[1200px] mx-auto">
        <div>
          <div>
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-3  text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] pr-10">
              Prime Disability Agency is a NDIS registered (National Disability
              Insurance Scheme) Provider operating all over greater Sydney
              region. We are specialised in Disability Support, Supported
              Accommodation such as SIL, STA and MTA, Community Participation,
              Domestic Assistance, Social and Community Participation and more.
              We support our clients 24/7.
            </p>
          </div>
          <div className="mt-5 ">
            <div>
              <div className="bg-orange-500 text-white text-4xl w-[75px] rounded-full py-5 px-5 ">
                <TbHeartHandshake />
              </div>
              <h2 className="text-2xl font-bold mt-3">Personalised Services</h2>
              <div className="border-[3px] border-orange-400 w-14 my-2"></div>

              <p className=" text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] mt-4 max-w-[400px]">
                PathwayCare Solutions provides personalised services for
                independence and goal achievement, covering allied health,
                disability support, NDIS services, home care, and labour hire.
              </p>
            </div>

            <div className="mt-6">
              <div className="bg-orange-500 text-white text-4xl w-[75px] rounded-full py-5 px-5 ">
                <RiHandHeartLine />{" "}
              </div>
              <h2 className="text-2xl font-bold mt-3">Tailored Care</h2>
              <div className="border-[3px] border-orange-400 w-14 my-2"></div>

              <p className=" text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] mt-4 max-w-[400px]">
                We prioritise tailored care and language diversity to support
                various disabilities and culturally diverse communities in
                Australia.
              </p>
            </div>
            <button className=" mt-5 border border-orange-500 py-3 px-6 text-orange-500 font-semibold cursor-pointer hover:text-orange-400">
              Read More
            </button>
          </div>
        </div>

        <div>
          <img
            src="/assets/community1.jpg"
            className="object-contain my-6 rounded-xl md:max-w-[500px]"
          />
          <img
            src="/assets/community2.jpg"
            className="object-contain rounded-xl md:max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Who;
