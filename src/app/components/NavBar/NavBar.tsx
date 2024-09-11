import Link from "next/link"
import IconLogo from "@/app/icons/logo.svg";
import Menu from "@/app/components/Menu/Menu";
import NavLinks from "@/app/components/NavLinks/NavLinks";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import NavIcons from "@/app/components/NavIcons/NavIcons";
import "./style.css";

const NavBar = () => {
  return (
    <div className="navbar">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between lg:hidden">
        <Link href="/">
          <IconLogo width={80} height={25} />
        </Link>
        <Menu />
      </div>
      {/* DESKTOP */}
      <div className="hidden h-full items-center gap-4 lg:flex">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <IconLogo width={120} height={38} />
          </Link>
          <NavLinks />
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default NavBar;