// src/components/Header.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // ヘッダーの高さを定義 (layout.tsxのpt-[80px]と合わせるか、実測値を使う)
  const HEADER_HEIGHT = 70; // 例: 80px。あなたのヘッダーの実際の高さに合わせて調整してください

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - HEADER_HEIGHT; // オフセットを適用

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setIsOpen(false); // モバイルメニューを閉じる
    }
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-4 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* サイトタイトル/ロゴ */}
        {/* ★この Link コンポーネントを修正します★ */}
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-2xl font-bold text-gray-800"
        >
          Michie Yagi Portfolio
        </Link>

        {/* ナビゲーションメニュー (デスクトップ) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                {/* ★この Link コンポーネントを修正します★ */}
                <Link
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイルメニューボタン */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none text-gray-800 cursor-pointer">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー (開閉式) */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {/* ★この Link コンポーネントを修正します★ */}
                <Link
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}