import Image from "next/image";
import React from "react";

const CTAButton = () => (
  <div className="flex flex-col w-[313px] my-10 lg:my-[30px] gap-2.5 items-center justify-center">
    <button className="text-xl font-bold text-white w-full h-10 flex items-center justify-center gap-2.5 rounded-[10px] bg-promo-start cursor-pointer shadow-[2px_2px_10px_0px_#00E7F9] hover:bg-red-two transition-colors">
      GET STARTED
      <Image
        src="/arrow_right.png"
        alt=""
        width={11}
        height={6}
        aria-hidden="true"
      />
    </button>
    <p className="text-xs leading-4 font-normal">
      1-minute quiz for personalized Insights
    </p>
  </div>
);

export default CTAButton;
