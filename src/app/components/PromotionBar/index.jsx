import React from "react";

const PromotionBar = ({
  highlightText = "FRESH BEGINNINGS SALE:",
  message = "Extra 25% OFF, Limited Spots - start your journey today!",
}) => {
  return (
    <div className="w-full flex items-center justify-center xl:h-[46px] px-5 xl:px-0 py-5 xl:py-2.5 bg-gradient-to-r from-promo-start to-promo-end">
      <p className="text-sm xl:text-[22px] font-extrabold text-white text-center leading-3 xl:leading-[17px]">
        🚀{" "}
        <span className="text-base xl:text-[22px] text-promo-accent">
          {highlightText}
        </span>{" "}
        {message}
      </p>
    </div>
  );
};

export default PromotionBar;
