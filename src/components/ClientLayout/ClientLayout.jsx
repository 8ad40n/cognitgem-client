"use client"; 


import { usePathname } from "next/navigation";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <hr />
      <main className="flex-grow">{children}</main>
      {pathname !== "/login" && pathname !== "/generate" && <Footer />}
    </>
  );
}
