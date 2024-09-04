"use client";

import { useState } from "react";
import IconMenu from "@/app/icons/menu.svg";
import NavLinks from "@/app/components/NavLinks/NavLinks";

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconMenu width={30} height={30} viewBox={"0 0 24 24"} className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}/>
      {isOpen && (
        <div className="navlinks-wrapper absolute bg-black right-0 w-full flex flex-col items-center justify-center gap-4 ml-auto text-white">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Menu;
