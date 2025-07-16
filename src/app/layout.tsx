// src/app/layout.tsx

'use client'; // ★この行をファイルの先頭に追加★

import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoToTopButton from '../components/GoToTopButton';
import { usePathname } from 'next/navigation'; // ★この行を追加★

const inter = Inter({ subsets: ['latin'] });

// import type { Metadata } from 'next'; // ★この行はもう不要なので削除してもOKです★

// ★ここにあった 'export const metadata: Metadata = { ... };' のブロックを丸ごと削除します★

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // ★この行を追加★

  // ★ヘッダーとフッターを表示したくないページのパスをここに定義します★
  // 例: TODOアプリが /todo というURLで、カレンダーアプリが /calendar というURLの場合
  const noHeaderFooterPaths = ['/todos', '/calendar'];

  // 現在のパスが noHeaderFooterPaths に含まれていなければ、ヘッダーとフッターを表示
  const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(pathname);

  return (
    <html lang="ja">
      <body className={inter.className}>
        {shouldShowHeaderFooter && <Header />} {/* ★条件付きでレンダリング★ */}
        <main className="flex-grow pt-[80px] md:pt-[80px]">{children}</main>
        {shouldShowHeaderFooter && <Footer />} {/* ★条件付きでレンダリング★ */}
        {shouldShowHeaderFooter && <GoToTopButton />} {/* ★条件付きでレンダリング★ */}
      </body>
    </html>
  );
}