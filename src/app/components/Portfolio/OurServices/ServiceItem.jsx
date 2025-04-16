import React from "react";

const ServiceItem = ({ name }) => (
  <div className="flex flex-row items-center gap-2.5">
    <span className="text-2xl">✨</span>
    <p className="w-full max-w-[484px] text-base text-white font-semibold leading-[1.375rem]">
      {name}
    </p>
  </div>
);

export default ServiceItem;
