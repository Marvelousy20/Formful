import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="pt-[2rem] font-sora">
      <ul className="flex justify-between items-center text-lg">
        <li>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width="200" height="46" />
          </Link>
        </li>

        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Form Explorer</Link>
        </li>
        <li>
          <Link href="/">Form Builder</Link>
        </li>
        <li className="text-[#3F1651]">
          <button className="border border-[#3F1651] rounded-[10px] py-2 px-4">
            Connect Wallet
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
