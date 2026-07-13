"use client";

import "./globals.css";
import { Inter, Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoToTopButton from "../components/GoToTopButton";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
});
const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-maru-gothic",
});

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
        className={`${inter.variable} ${notoSansJP.variable} ${zenMaruGothic.variable} font-sans bg-white text-[#16161d] antialiased`}
      >
        {shouldShowHeaderFooter && <Header />}
        <main className="flex-grow pt-20">{children}</main>
        {shouldShowHeaderFooter && <Footer />}
        {shouldShowHeaderFooter && <GoToTopButton />}
      </body>
    </html>
  );
}
