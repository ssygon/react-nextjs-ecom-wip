import Link from "next/link";

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row gap-4">
        <li><Link href="/">Homepage</Link></li>
        <li><Link href="/list">Products</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavLinks;