import Image from "next/image";
import React from "react";

const MobileMockup = () => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden xl:block">
        <Image
          src="/mobile_mockup.png"
          alt="Mobile device mockup"
          width={666}
          height={679}
          className="absolute w-[666px] h-[679px] right-[101px] top-[125px]"
          priority
        />
      </div>

      {/* Mobile Version */}
      <div className="xl:hidden">
        <Image
          src="/mobile_mockup.png"
          alt="Mobile device mockup"
          width={300}
          height={300}
          className="absolute h-[300px] left-1/2 transform -translate-x-1/2 top-[138px]"
          priority
        />
      </div>
    </>
  );
};

export default MobileMockup;
