import Link from "next/link"
import IconLogo from "@/app/icons/logo.svg";
import Menu from "@/app/components/Menu/Menu";

const NavBar = () => {
  return (
    <div className="h-20 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <IconLogo width={120} height={38} />
        </Link>
        <Menu />
      </div>
      {/* DESKTOP */}
      <div className="hidden h-full items-center gap-4 md:flex">
        <Link href="/">
          <IconLogo width={120} height={38} />
        </Link>
        <div className="flex items-center gap-4 ml-auto">
          <Link href="/">Homepage</Link>
          <Link href="/list">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;