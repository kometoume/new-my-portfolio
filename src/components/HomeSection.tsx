"use client"; // ★アニメーション（インタラクティブな機能）を使用するため追加★

import React from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
// ★修正: tsparticles からではなく、@tsparticles/engine から型をインポート★
// （通常、tsparticles v3以降の環境ではこのパスが正しい）
import type { MoveDirection, OutMode } from "@tsparticles/engine";

const HomeSection = () => {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    // フルスクリーン表示を無効化
    fullScreen: {
      enable: false,
    },
    background: {
      color: { value: "transparent" },
    },
    particles: {
      number: {
        value: 200,
      },
      color: {
        value: "#FFFFFF",
      },
      shape: {
        type: "circle" as const,
      },
      opacity: {
        value: { min: 0.5, max: 1 },
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.5, max: 1.5 },
      },
      links: {
        enable: false,
      },
      move: {
        // ★修正: 型をインポートし、as const ではなく as MoveDirection を使用★
        direction: "none" as MoveDirection,
        enable: true,
        random: true,
        speed: 0.3,
        straight: false,
        outModes: {
          // ★修正: 型をインポートし、as const ではなく as OutMode を使用★
          default: "out" as OutMode,
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" as const },
        onClick: { enable: true, mode: "push" as const },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    fpsLimit: 120,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!init) {
    return null;
  }

  return (
    <section
      id="home"
      className="relative flex items-center justify-center 
                       min-h-[400px] text-center text-white overflow-hidden"
    >
      {/* 1. 背景レイヤー (暗いグラデーション) */}
      <div
        className="absolute inset-0 z-0 
                           bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900"
      />

      {/* 2. tsparticlesによる星空レイヤー */}
      <Particles
        className="absolute inset-0 z-[1]"
        id="tsparticles-home"
        options={particlesOptions}
      />

      {/* 3. コンテンツレイヤー (Framer Motionでアニメーション化) */}
      <motion.div
        className="relative z-10 w-full px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl font-extrabold text-white mb-4"
          variants={itemVariants}
        >
          Michie Yagi
          <br className="block sm:hidden" /> Portfolio
        </motion.h1>

        <motion.p className="mt-6 text-lg text-white" variants={itemVariants}>
          Michie Yagiのポートフォリオサイトです。
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HomeSection;
