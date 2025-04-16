import Link from "next/link";
import React from "react";

const NavItem = ({ href, label }) => (
  <div className="flex items-center cursor-pointer">
    <Link
      href={href}
      className="text-dark-gray text-[18px] font-medium hover:text-primary transition-colors"
    >
      {label}
    </Link>
  </div>
);

export default NavItem;
