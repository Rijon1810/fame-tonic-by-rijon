import { ourServices } from "@/utils/data";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <div className="hidden lg:flex">
        <img
          src="/mobile_mockup.png"
          alt="mobile_mockup"
          className="absolute w-[666px] h-[679px] right-[101px] top-[125px]"
        />
        <div className="absolute left-[215px] top-[212px] w-[516px]">
          <Portfolio />
        </div>
      </div>
      <div className="flex lg:hidden">
        <img
          src="/mobile_mockup.png"
          alt="mobile_mockup"
          className="absolute h-[300px] left-1/2 transform -translate-x-1/2 top-[138px]"
        />
        <div className="absolute w-full top-[438px] left-1/2 transform -translate-x-1/2 ">
          <Portfolio />
        </div>
      </div>
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//       {/* Image - centered on small screens, original position on large */}
//       <img
//         src="/mobile_mockup.png"
//         alt=""
//         className="absolute w-full max-w-[666px] h-[679px] top-[125px]
//                   left-1/2 transform -translate-x-1/2
//                   lg:right-[101px] lg:left-auto lg:transform-none"
//       />

//       {/* Portfolio - centered on small screens, original position on large */}
//       <div className="absolute top-[212px] w-full max-w-[516px] px-4
//                      left-1/2 transform -translate-x-1/2
//                      lg:left-[215px] lg:transform-none lg:px-0">
//         <Portfolio />
//       </div>
//     </>
//   );
// }
