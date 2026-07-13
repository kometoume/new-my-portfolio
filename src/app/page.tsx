import React from "react";
import type { Metadata } from "next";
import HomeSection from "../components/HomeSection";
import About from "../components/About";
import Career from "../components/Career";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Michie Yagi Portfolio",
  description:
    "Michie Yagi のポートフォリオサイトです。Web開発の経験とスキルを紹介しています。",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeSection />

      <About />

      <Career />

      <Skills />

      <Projects />

      <Contact />
    </div>
  );
}
