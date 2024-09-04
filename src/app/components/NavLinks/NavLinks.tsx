import Link from "next/link";

const NavLinks = () => {

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <Link href="/">Homepage</Link>
      <Link href="/list">Products</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default NavLinks;
