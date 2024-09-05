"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAiGenerate } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Button } from "../ui/button";

const Links = () => {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    return pathname === path
      ? "text-white font-semibold hover:text-bebebe"
      : "hover:text-[#f5f5f5]";
  };

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center">
      <Link href="/" className={getLinkClass("/")}>
        Home
      </Link>
      <Link href="/about" className={getLinkClass("/about")}>
        About
      </Link>
      <Link href="/contact" className={getLinkClass("/contact")}>
        Contact
      </Link>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-5 container">
      <div className="flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <RiAiGenerate className="text-xl md:text-3xl font-extrabold text-purple-600"/>
          <h1 className="text-lg md:text-2xl font-medium">Cognit<span className="text-purple-600 ">Gem</span></h1>
        </Link>
        <div className="hidden md:block text-[#a1a1a1]">
          <Links />
        </div>
        <div className="md:hidden">
          <button
            onClick={handleOpen}
            className="transition-transform duration-300"
          >
            {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-opacity duration-300 absolute top-16 left-0 h-[100vh] text-center right-0 z-20 bg-zinc-900 text-[#c7c7c7] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="p-4">
          <Links />
        </div>
      </div>
    </div>
  );
}
