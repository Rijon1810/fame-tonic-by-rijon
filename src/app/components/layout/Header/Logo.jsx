import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" aria-label="Home">
      <Image
        src="/logo.svg"
        alt="Company Logo"
        width={174}
        height={74}
        className="cursor-pointer object-contain w-[107px] h-[46px] lg:w-[174px] lg:h-[74px]"
        priority
      />
    </Link>
  );
};

export default Logo;
