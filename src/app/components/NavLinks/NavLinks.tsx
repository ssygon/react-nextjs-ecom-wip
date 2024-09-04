import Link from "next/link";

const NavLinks = () => {

  return (
    <>
      <Link href="/">Homepage</Link>
      <Link href="/list">Products</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
};

export default NavLinks;
