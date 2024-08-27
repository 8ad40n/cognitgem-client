"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Links = () => {
  const pathname = usePathname(); 

  const getLinkClass = (path) => {
    return pathname === path ? "text-blue-500 font-bold" : "";
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Link href="/" className={getLinkClass("/")}>
        Home
      </Link>
      <Link href="/about" className={getLinkClass("/about")}>
        About
      </Link>
      <Link href="/contact" className={getLinkClass("/contact")}>
        Contact
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
    <div className="py-5 bg-red-400">
      <div className="container flex justify-between mx-auto">
        <h1>LOGO</h1>
        <div className="hidden md:block">
          <Links />
        </div>
        <div className="md:hidden">
          <button onClick={handleOpen}>
            {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      <div className="md:hidden">
        {isOpen && (
          <div className="p-4 absolute top-16 shadow-lg bg-orange-200 left-0 right-0">
            <Links />
          </div>
        )}
      </div>
    </div>
  );
}
