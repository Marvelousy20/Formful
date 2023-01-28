"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <nav
      className={`py-5 md:py-[1rem] font-poppins fixed left-0 right-0 px-4 md:px-10 bg-white max-w-[1440px] mx-auto ${
        isOpen ? "shadow" : "shadow-md"
      }`}
    >
      <ul className="md:flex items-center text-lg">
        <li>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width="200"
              height="46"
              className="hidden md:block"
            />
            <Image
              src="/images/logo.png"
              alt="logo"
              width="130"
              height="46"
              className="block md:hidden"
            />
          </Link>
        </li>
        <div className="md:hidden absolute right-0 top-3">
          <Hamburger toggled={isOpen} onToggle={setIsOpen} />
        </div>
        <div className="flex-1"></div>
        <div
          className={`md:flex md:items-center shadow-md md:shadow-none absolute md:static md:z-auto z-[-1] bg-white md:bg-auto pl-6 md:pl-0 left-0 w-full md:w-auto py-6 md:py-0 transition-all duration-500 ease-in ${
            isOpen
              ? "top-16 opacity-100"
              : "top-[-400px] md:opacity-100 opacity-0"
          }`}
        >
          <li
            className={`mr-10 px-4
              ${
                pathname === "/"
                  ? "border-b-[3px] border-[#332DCC] rounded-[10px] mb-7 md:mb-0"
                  : "hover:border-b-[2px] duration-200 border-[#332DCC] py-2 rounded-[10px] transistion-all ease-in mb-7 md:my-0"
              }
            `}
            onClick={() => setIsOpen(false)}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`mr-10 px-4
              ${
                pathname === "/explorer"
                  ? "border-b-[3px] border-[#332DCC] rounded-[10px] my-7 md:mb-0"
                  : "hover:border-b-[2px] duration-200 border-[#332DCC] py-2 rounded-[10px] transistion-all ease-in my-7 md:my-0"
              }
            `}
            onClick={() => setIsOpen(false)}
          >
            <Link href="/explorer">Form Explorer</Link>
          </li>
          <li
            className={`mr-10 px-4
              ${
                pathname === "/builder"
                  ? "border-b-[3px] border-[#332DCC] rounded-[10px] my-7 md:mb-0"
                  : "hover:border-b-[2px] duration-200 border-[#332DCC] py-2 rounded-[10px] transistion-all ease-in my-7 md:my-0"
              }
            `}
            onClick={() => setIsOpen(false)}
          >
            <Link href="/builder">Form Builder</Link>
          </li>
          <li className="text-[#141414]">
            <button className="border-r-[3px] border-b-[3px] border-[#332DCC] rounded-[10px] py-2 px-4 font-bold">
              Connect Wallet
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
