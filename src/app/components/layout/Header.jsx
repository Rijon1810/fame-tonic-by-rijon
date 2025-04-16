import Link from "next/link";
import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex w-full mx-auto items-center lg:items-start justify-between px-[29px] mt-4 lg:mt-[35px]">
      <div className="flex lg:hidden" aria-hidden="true" />

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

      <NavBar />

      <button
        className="flex lg:hidden"
        aria-label="Open menu"
        aria-expanded="false"
      >
        <Image src="/menu.svg" alt="Menu" width={24} height={24} />
      </button>
    </header>
  );
};

export default Header;
