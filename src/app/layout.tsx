"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoToTopButton from "../components/GoToTopButton";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noHeaderFooterPaths = ["/todos", "/calendar"];

  const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(pathname);

  return (
    <html lang="ja">
      <body
        className={`
           ${inter.className} 
         `}
      >
        {shouldShowHeaderFooter && <Header />}
        <main className="flex-grow pt-[60px] md:pt-[60px]">{children}</main>
        {shouldShowHeaderFooter && <Footer />}
        {shouldShowHeaderFooter && <GoToTopButton />}
      </body>
    </html>
  );
}
