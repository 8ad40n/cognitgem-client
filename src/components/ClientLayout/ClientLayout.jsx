"use client";

import { usePathname } from "next/navigation";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <div className="sticky top-0 z-20 bg-white dark:bg-black">
        <Navbar />
        <hr />
      </div>
      <main className="flex-grow">{children}</main>
      {pathname !== "/login" && pathname !== "/generate" && <Footer />}
    </>
  );
}
