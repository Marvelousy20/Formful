"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="py-[1rem] font-sora fixed left-0 right-0 px-10 bg-white border-b-2 max-w-[1440px] mx-auto">
      <ul className="flex items-center text-lg">
        <li>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width="200" height="46" />
          </Link>
        </li>
        <div className="flex-1"></div>
        <li
          className={
            pathname === "/"
              ? "mr-10 border-b-[3px] border-[#332DCC] rounded-[10px] py-2 px-4"
              : "mr-10 hover:border-b-[2px] border-[#332DCC] py-2 px-4 rounded-[10px] ease-in-out"
          }
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            pathname === "/explorer"
              ? "mr-10 border-b-[3px] border-[#332DCC] rounded-[10px] py-2 px-4"
              : "mr-10 hover:border-b-[2px] border-[#332DCC] py-2 px-4 rounded-[10px] ease-in-out"
          }
        >
          <Link href="/explorer">Form Explorer</Link>
        </li>
        <li
          className={
            pathname === "/form-builder"
              ? "mr-10 border-b-[3px] border-[#332DCC] rounded-[10px] py-2 px-4"
              : "mr-10 hover:border-b-[2px] border-[#332DCC] py-2 px-4 rounded-[10px] ease-in-out"
          }
        >
          <Link href="/builder">Form Builder</Link>
        </li>
        <li className="text-[#141414]">
          <button className="border-r-[3px] border-b-[3px] border-[#332DCC] rounded-[10px] py-2 px-4 font-bold">
            Connect Wallet
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
