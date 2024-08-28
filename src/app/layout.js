import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>
        <Navbar></Navbar>
        <hr />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
