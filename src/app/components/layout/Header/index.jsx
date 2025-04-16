import { navItems } from "@/utils/data";
import NavBar from "./NavBar";
import Menu from "./Menu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex w-full mx-auto items-center lg:items-start justify-between px-[29px] mt-4 lg:mt-[35px]">
      <div className="flex lg:hidden" aria-hidden="true" />
      <Logo />
      <NavBar navItems={navItems} />
      <Menu />
    </header>
  );
};

export default Header;
