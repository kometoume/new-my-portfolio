"use client";

import React, { useState, useRef } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Career", href: "#career" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement || !headerRef.current) return;

    const headerHeight = headerRef.current.offsetHeight;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = elementPosition - headerHeight;

    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => scrollToSection(href), 50);
    } else {
      scrollToSection(href);
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 h-20 flex items-center bg-white/80 backdrop-blur-md border-b border-black/10 transition-all duration-300"
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex flex-col leading-none"
        >
          <span className="font-heading text-sm font-bold tracking-[0.2em] text-[#333d29] uppercase">
            Michie Yagi
          </span>
          <span className="text-[10px] tracking-[0.15em] text-black/40 uppercase mt-1">
            Portfolio
          </span>
        </a>

        {/* デスクトップメニュー */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, i) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="font-heading group flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase text-black/50 hover:text-[#333d29] transition-colors duration-300"
                >
                  <span className="text-[10px] text-[#e94846]/80 group-hover:text-[#e94846] transition-colors duration-300 font-mono">
                    0{i + 1}
                  </span>
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
            className="relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            aria-label="メニューを開く"
          >
            <span
              className={`block w-6 h-px bg-[#16161d] transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#16161d] transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#16161d] transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <nav
        className={`md:hidden fixed inset-0 top-20 bg-white transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
          {navItems.map((item, i) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="font-heading flex items-center gap-3 text-lg tracking-[0.1em] uppercase text-black/60 hover:text-[#333d29] transition-colors duration-300"
              >
                <span className="text-xs text-[#e94846]/80 font-mono">0{i + 1}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
