"use client";

import React, { useState, useRef } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement || !headerRef.current) return;

    const headerHeight = headerRef.current.offsetHeight;

    // targetElement のページ上の位置を計算
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;

    // ヘッダー分を引いた位置にスクロール
    const scrollPosition = elementPosition - headerHeight;

    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // モバイルメニューが開いている場合は閉じてからスクロール
    if (isOpen) {
      setIsOpen(false);

      // メニューが閉じるレンダー後にスクロールする
      setTimeout(() => scrollToSection(href), 50);
    } else {
      scrollToSection(href);
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed w-full z-50 bg-white shadow-md py-4 transition-all duration-300"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-500"
        >
          Michie Yagi Portfolio
        </a>

        {/* デスクトップメニュー */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイルボタン */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none text-gray-800 cursor-pointer"
          >
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
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <nav
          ref={mobileMenuRef}
          className="md:hidden bg-white py-4 transition-all duration-300"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
