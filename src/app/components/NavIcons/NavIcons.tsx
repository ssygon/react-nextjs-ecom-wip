"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import IconMyAccount from "@/app/icons/my-account.svg";
import IconShoppingBag from "@/app/icons/shopping-bag.svg";

import { Popover } from '@mantine/core';


const NavIcons = () => {

  const router = useRouter();
  
  // TODO: Logged in for now
  // Change to false when not logged in, true when user is logged in
  const isLoggedIn = true;
 

  const [isMyAccountOpen, setIsMyAccountOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);


  const handleMyAccountClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isLoggedIn) {
      console.log("Not logged in, now redirecting to login page");
      router.push("/login");
    }
    else {
      console.log("Logged in, show my account popover");
      setIsMyAccountOpen(!isMyAccountOpen);
    }
  };

  const handleShoppingBagClick = () => {
    setIsShoppingBagOpen(!isShoppingBagOpen);
  };

  const handleLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Clicked logged out");
    setIsMyAccountOpen(false);
    router.push("/logout");
  };


  return (
    <>
      <div className="flex items-center gap-4">
        <Popover opened={isMyAccountOpen} onChange={setIsMyAccountOpen}>
          <Popover.Target>
            <Link href="/login" onClick={handleMyAccountClick}>
              <IconMyAccount width={24} height={24} viewBox={"0 0 32 32"} className="mt-[1px] cursor-pointer" />
            </Link>
          </Popover.Target>
          <Popover.Dropdown>
          <ul>
            <li>
              <Link href="/my-account">My Account</Link>
            </li>
            <li>
              <Link href="/logout" onClick={handleLogoutClick}>Log out</Link>
            </li>
          </ul>
          </Popover.Dropdown>
        </Popover>
        
        <IconShoppingBag width={26} height={26} viewBox={"0 0 20 20"} className="mt-[-2px] cursor-pointer" onClick={handleShoppingBagClick}/>
      </div>
    </>
  );

};

export default NavIcons;