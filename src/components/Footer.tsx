// src/components/Footer.tsx

import React from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#333d29] uppercase font-mono block mb-4">
              (Navigation)
            </span>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-black/60 hover:text-[#333d29] transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs tracking-[0.2em] text-[#e94846] uppercase font-mono block mb-4">
              (Contact)
            </span>
            <a
              href="#contact"
              className="text-sm text-black/60 hover:text-[#e94846] transition-colors duration-300"
            >
              Contactフォームよりご連絡ください
            </a>
          </div>

          <div>
            <span className="text-xs tracking-[0.2em] text-black/30 uppercase font-mono block mb-4">
              (Information)
            </span>
            <p className="text-sm text-black/60">Michie Yagi</p>
            <p className="text-sm text-black/40">Web Designer / Coder</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-8 border-t border-black/10 text-xs text-black/30 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Michie Yagi</p>
          <p>Design & Development</p>
        </div>
      </div>
    </footer>
  );
}
