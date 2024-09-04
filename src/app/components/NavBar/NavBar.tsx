import Link from "next/link"
import IconLogo from "@/app/icons/logo.svg";
import Menu from "@/app/components/Menu/Menu";
import NavLinks from "@/app/components/NavLinks/NavLinks";

const NavBar = () => {
  return (
    <div className="navbar">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between lg:hidden">
        <Link href="/">
          <IconLogo width={120} height={38} />
        </Link>
        <Menu />
      </div>
      {/* DESKTOP */}
      <div className="hidden h-full items-center gap-4 lg:flex">
        <Link href="/">
          <IconLogo width={120} height={38} />
        </Link>
        <div className="flex items-center gap-4 ml-auto">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default NavBar;