import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <div className="hidden xl:flex">
        <img
          src="/mobile_mockup.png"
          alt="mobile_mockup"
          className="absolute w-[666px] h-[679px] right-[101px] top-[125px]"
        />
        <div className="absolute left-[215px] top-[212px] w-[516px]">
          <Portfolio />
        </div>
      </div>
      <div className="flex xl:hidden">
        <img
          src="/mobile_mockup.png"
          alt="mobile_mockup"
          className="absolute h-[300px] left-1/2 transform -translate-x-1/2 top-[138px]"
        />
        <div className="absolute w-full md:max-w-[600px] top-[438px] left-1/2 transform -translate-x-1/2 ">
          <Portfolio />
        </div>
      </div>
    </>
  );
}
