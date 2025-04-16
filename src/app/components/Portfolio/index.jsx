import { ourServices } from "@/utils/data";
import React from "react";

const Portfolio = () => {
  return (
    <div className="w-full px-[20px] lg:px-0">
      <p className="text-[#FFF] text-[25px] lg:text-[35px] font-bold text-center lg:text-start line-height-normal">
        Want to Turn Social Media Into a Profitable Career?
      </p>
      <p className="text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E] font-urbanist text-[25px] lg:text-[35px] font-bold leading-normal text-center lg:text-start line-height-normal">
        Discover your way to success with Fametonic:
      </p>
      <div className="flex flex-col gap-[13px] mt-[22px] lg:mt-[16px]">
        {ourServices.map((service, index) => (
          <div key={index} className="flex flex-row items-center gap-[10px]">
            <div className="text-[22px] font-medium">✨</div>{" "}
            <div className="w-[484px] text-[16px] font-semibold leading-[22px]">
              {service.name}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-col items-center text-center lg:text-start lg:items-start justify-center md:justify-start">
        <div className="flex flex-col w-[313px] my-[40px]  lg:my-[30px] gap-[10px] items-center justify-center">
          <div className="text-[20px] font-bold text-[#FFF] w-full h-[40px] flex items-center justify-center gap-[10px] rounded-[10px] bg-[#FC004E] cursor-pointer shadow-[2px_2px_10px_0px_#00E7F9]">
            GET STARTED
            <img src="/arrow_right.png" alt="arrow-right" />
          </div>
          <p className="text-[12px] leading-[16px] font-normal">
            1-minute quiz for personalized Insights
          </p>
        </div>
        <div className="flex flex-col gap-[12px] lg:mb-[82px] mt-[22px] lg:mt-0">
          <p className="text-[#ABABAB] text-[12px] font-medium">
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
          <p className="text-[#ABABAB] text-[10px] font-medium">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
