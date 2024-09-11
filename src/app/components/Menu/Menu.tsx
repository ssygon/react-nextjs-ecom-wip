"use client";

import { useState } from "react";
import Link from "next/link";

import IconLogo from "@/app/icons/logo.svg";
import IconMenu from "@/app/icons/menu.svg";
import NavLinks from "@/app/components/NavLinks/NavLinks";

import { Drawer } from '@mantine/core';
import './style.css';


const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const drawerTitle = (
    <Link href="/">
      <IconLogo width={80} height={25} />
    </Link>
  );

  return (
    <>
      <IconMenu width={30} height={30} viewBox={"0 0 24 24"} className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}/>
      <Drawer
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        title={drawerTitle}
        position="left"
        size="sm"
        classNames={{
          root: 'lg:hidden',
          body: 'pt-10'
        }}
      >
        <NavLinks />
      </Drawer>
    </>
  );
};

export default Menu;
