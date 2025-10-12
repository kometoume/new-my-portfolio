"use client"; // ★アニメーション（インタラクティブな機能）を使用するため追加★

import React from "react";
import { motion } from "framer-motion";

const HomeSection = () => {
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

  return (
    <section
      id="home"
      className="relative flex items-center justify-center 
                 min-h-[400px] text-center text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 
                      bg-gradient-to-r from-cyan-500 to-purple-500"
      />
      <motion.div
        className="relative z-10 w-full px-4"
        variants={containerVariants}
        initial="hidden" // 初期状態は非表示
        animate="visible" // マウント時に表示アニメーションを実行
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
