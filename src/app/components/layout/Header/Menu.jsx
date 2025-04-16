import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <button
      className="flex lg:hidden"
      aria-label="Open menu"
      aria-expanded="false"
    >
      <Image src="/menu.svg" alt="Menu" width={24} height={24} />
    </button>
  );
};

export default Menu;
