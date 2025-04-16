import React from "react";
import NavItem from "./NavItem";

const NavBar = ({ navItems }) => {
  return (
    <nav className="hidden lg:flex gap-6" aria-label="Main navigation">
      {navItems.map((navItem, index) => (
        <NavItem key={index} href={navItem.href} label={navItem.label} />
      ))}
    </nav>
  );
};

export default NavBar;
