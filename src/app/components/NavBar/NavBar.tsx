import Link from "next/link"
import IconLogo from '@/app/icons/logo.svg';

const NavBar = () => {
  return (
    <>
      <Link href="/">
        <IconLogo width={120} height={38} />
      </Link>
    </>
  );
};

export default NavBar;