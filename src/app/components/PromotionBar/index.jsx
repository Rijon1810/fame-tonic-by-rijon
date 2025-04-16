import React from "react";

const PromotionBar = ({
  highlightText = "FRESH BEGINNINGS SALE:",
  message = "Extra 25% OFF, Limited Spots - start your journey today!",
}) => {
  return (
    <div className="w-full flex items-center justify-center lg:h-[46px] px-5 lg:px-0 py-5 lg:py-2.5 bg-gradient-to-r from-promo-start to-promo-end">
      <p className="text-sm lg:text-[22px] font-extrabold text-white text-center leading-3 lg:leading-[17px]">
        🚀{" "}
        <span className="text-base lg:text-[22px] text-promo-accent">
          {highlightText}
        </span>{" "}
        {message}
      </p>
    </div>
  );
};

export default PromotionBar;
