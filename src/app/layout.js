import ClientLayout from "@/components/ClientLayout/ClientLayout";
import AuthProvider from "@/services/AuthProvider";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  icons: {
    icon: "/assets/images/icon.png",
  },
  title: "Cognitgem - AI-Powered Text Generation Platform",
  description: "Cognitgem is an advanced AI-powered text generation platform designed to provide innovative solutions for content creation, code generation, and more. Start generating with AI today.",
  keywords: "AI text generation, AI content creation, code generation, Cognitgem, machine learning, GPT, AI tools",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <AuthProvider>
          <ClientLayout>
            <main className="flex-grow">{children}</main>
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
