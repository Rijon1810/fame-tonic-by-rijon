import OurServices from "./OurServices";
import CTAButton from "../Button/CTAButton";
import FooterNotice from "../FooterNotice";

const Portfolio = () => {
  return (
    <section className="w-full px-5 xl:px-0">
      <h2 className="text-white text-2xl xl:text-[35px] font-bold text-center xl:text-start line-height-normal">
        Want to Turn Social Media Into a Profitable Career?
      </h2>
      <h3 className="text-blue font-urbanist text-2xl xl:text-[35px] font-bold text-center xl:text-start mt-2 line-height-normal  text-shadow-lg  text-shadow-[#FC004E]">
        Discover your way to success with Fametonic:
      </h3>

      <OurServices />

      <div className="w-full flex flex-col-reverse xl:flex-col items-center text-center xl:text-start xl:items-start justify-center md:justify-start">
        <CTAButton />
        <FooterNotice />
      </div>
    </section>
  );
};

export default Portfolio;

// shadow-[2px_2px_10px_0px_#]