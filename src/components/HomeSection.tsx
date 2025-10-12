"use client";

import React from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

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
    background: {
      // 背景色はCSSのグラデーションに任せるので透明に
      color: { value: "transparent" },
    },
    particles: {
      number: {
        // ★星の数を大幅に増やす★
        value: 200,
      },
      color: {
        // 星の色を白に固定
        value: "#FFFFFF",
      },
      shape: {
        type: "circle" as const,
      },
      opacity: {
        value: { min: 0.5, max: 1 }, // ★不規則な明るさに調整★
        anim: {
          enable: true,
          speed: 1, // ★点滅速度を少し速く★
          opacity_min: 0.1, // より暗くなる星も
          sync: false,
        },
      },
      size: {
        value: { min: 0.5, max: 1.5 }, // ★星の大きさを少し小さく集中★
      },
      links: {
        enable: false, // 星と星を繋ぐ線を無効化（星空っぽく）
      },
      move: {
        // ★より動いているように設定★
        direction: "none" as const, // 全体的な方向は無し
        enable: true,
        random: true, // ランダムな方向へ動く
        speed: 0.3, // ★動きの速度を上げる (0.15 -> 0.3)★
        straight: false,
        outModes: {
          default: "out" as const,
        },
        attract: {
          enable: true, // 星が引き合うような動き
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true, // マウスホバーでインタラクション
          mode: "repulse", // マウスが近づくと星が反発
        },
        onClick: {
          enable: true, // クリックでインタラクション
          mode: "push", // クリックで星が増える
        },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    // ★FPSを上げてより滑らかに（オプション）★
    fpsLimit: 120,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
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
      {/* 1. ★背景レイヤー (より暗いグラデーション)★ */}
      <div
        className="absolute inset-0 z-0 
                           bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900" // ★色を暗く★
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
