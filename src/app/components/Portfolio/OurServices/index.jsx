import { ourServices } from "@/utils/data";
import React from "react";
import ServiceItem from "./ServiceItem";

const OurServices = () => {
  return (
    <div className="flex flex-col gap-3.5 mt-5 xl:mt-4">
      {ourServices.map((service, index) => (
        <ServiceItem key={index} name={service.name} />
      ))}
    </div>
  );
};

export default OurServices;
