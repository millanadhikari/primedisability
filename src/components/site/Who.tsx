import React from "react";
function Who() {
  return (
    <div className="my-10  ">
        <div className="container md:flex gap-4 max-w-[1200px] mx-auto">
      <img
        src="/assets/who.jpg"
        alt="disability care"
        
        className="  h-auto w-auto max-w-[320px] md:max-w-[600px] object-contain rounded-xl mx-auto "
      />
      <div className="px-5 py-6 mx-auto  max-w-[700px] flex-1 ">
        <h2 className="text-2xl md:text-3xl font-bold">Your Trusted NDIS Provider in Sydney</h2>
        <p className="mt-4 text-[1rem] md:text-[1.2rem]">
          Your search for a professional NDIS provider in Sydney ends here. With
          years of experience in disability care and support, we are leaders in
          this field. We focus on delivering top-notch NDIS Core Supports, such
          as personal care, household assistance, and community participation,
          empowering participants to reach their goals and maintain their
          independence. To us, participants are like family, and we care for
          them wholeheartedly. We create welcoming environments and treat
          everyone with dignity and respect. We go beyond being just support
          workers; we are companions who help navigate daily challenges,
          enabling individuals to gain their independence. If youre seeking
          compassionate staff for yourself or a loved one, were here to fulfill
          your needs.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Who;
