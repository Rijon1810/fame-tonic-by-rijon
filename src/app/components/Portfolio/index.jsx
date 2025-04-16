import OurServices from "./OurServices";
import CTAButton from "../Button/CTAButton";
import FooterNotice from "../FooterNotice";

const Portfolio = () => {
  return (
    <section className="w-full px-5 lg:px-0">
      <h2 className="text-white text-2xl lg:text-[35px] font-bold text-center lg:text-start line-height-normal">
        Want to Turn Social Media Into a Profitable Career?
      </h2>
      <h3 className="text-blue font-urbanist text-2xl lg:text-[35px] font-bold text-center lg:text-start mt-2 line-height-normal">
        Discover your way to success with Fametonic:
      </h3>

      <OurServices />

      <div className="w-full flex flex-col-reverse lg:flex-col items-center text-center lg:text-start lg:items-start justify-center md:justify-start">
        <CTAButton />
        <FooterNotice />
      </div>
    </section>
  );
};

export default Portfolio;
