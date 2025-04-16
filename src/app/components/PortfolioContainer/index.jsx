import React from "react";
import Portfolio from "../Portfolio";

const PortfolioContainer = () => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden xl:block absolute left-[215px] top-[212px] w-[516px]">
        <Portfolio />
      </div>

      {/* Mobile Version */}
      <div className="xl:hidden absolute w-full md:max-w-[600px] top-[438px] left-1/2 transform -translate-x-1/2">
        <Portfolio />
      </div>
    </>
  );
};

export default PortfolioContainer;
