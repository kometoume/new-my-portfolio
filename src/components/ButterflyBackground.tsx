// components/ButterflyBackground.tsx

"use client";

import React from "react";
// motion.div を使用して、背景の蝶を動的に変化させることも可能
import { motion } from "framer-motion";

const butterflyVariants = {
  // 🚨 修正点: 'i' を '_i' に変更
  animate: (_i: number) => ({
    // 🚨 修正点: 関数内の 'i' を '_i' に変更
    x: [0, (_i % 2 === 0 ? 50 : -50) + Math.random() * 100, 0],
    y: [0, (_i % 2 === 0 ? -100 : 100) + Math.random() * 100, 0],
    rotate: [0, Math.random() * 360, 0],
    scale: [0.8, 1.2, 0.8],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 15 + Math.random() * 10,
      repeat: Infinity,
      ease: "linear" as const,
      delay: Math.random() * 5,
    },
  }),
} as const;
// 蝶の数
const NUMBER_OF_BUTTERFLIES = 8;

const ButterflyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {Array.from({ length: NUMBER_OF_BUTTERFLIES }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-10 h-10" // 蝶のコンテナサイズ
          style={{
            // 画面のランダムな初期位置
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            // 蝶の見た目 (ここでは仮の円としています)
            backgroundColor:
              i % 3 === 0 ? "pink" : i % 3 === 1 ? "lightblue" : "lightgreen",
            borderRadius: "50%",
          }}
          variants={butterflyVariants}
          custom={i}
          initial="animate"
          animate="animate"
        >
          {/* ここに蝶のSVGや画像を入れるとリアルになります */}
          {/* 例: <img src="/path/to/butterfly.svg" alt="Butterfly" className="w-full h-full" /> */}
        </motion.div>
      ))}
    </div>
  );
};

export default ButterflyBackground;
