// components/Butterfly.tsx (最終修正案)

"use client";

import React from "react";
// Variants のインポートはあってもなくても動作しますが、ここでは削除して型推論に任せます。
import { motion } from "framer-motion";

interface ButterflyProps {
  index: number;
  isScrolling: boolean;
}

// 🚨 修正1: 外側の 'as const' を削除
const wingVariants = {
  flap: {
    rotateX: [0, -30, 0],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      ease: "easeInOut" as const, // transition内の文字列にのみ as const を残す
      repeatType: "reverse" as const, // transition内の文字列にのみ as const を残す
    },
  },
  still: {
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
  },
}; // 👈 外側の 'as const' を削除

const Butterfly: React.FC<ButterflyProps> = ({ index, isScrolling }) => {
  // 🚨 修正2: 外側の 'as const' を削除
  // Math.random() は SSR 環境を考慮して、コンポーネント内で定義し直します。
  const butterflyFlightVariants = {
    animate: {
      x: [
        Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 800) *
          0.8 -
          (typeof window !== "undefined" ? window.innerWidth : 800) * 0.4,
        Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 800) *
          1.5 -
          (typeof window !== "undefined" ? window.innerWidth : 800) * 0.75,
        Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 800) *
          0.8 -
          (typeof window !== "undefined" ? window.innerWidth : 800) * 0.4,
      ],
      y: [
        Math.random() *
          (typeof window !== "undefined" ? window.innerHeight : 600) *
          0.8 -
          (typeof window !== "undefined" ? window.innerHeight : 600) * 0.4,
        Math.random() *
          (typeof window !== "undefined" ? window.innerHeight : 600) *
          1.5 -
          (typeof window !== "undefined" ? window.innerHeight : 600) * 0.75,
        Math.random() *
          (typeof window !== "undefined" ? window.innerHeight : 600) *
          0.8 -
          (typeof window !== "undefined" ? window.innerHeight : 600) * 0.4,
      ],
      rotate: [0, Math.random() * 360, 0],
      scale: [0.8, 1.2, 0.8],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 20 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear" as const, // transition内の文字列にのみ as const を残す
        delay: Math.random() * 5,
      },
    },
  }; // 👈 外側の 'as const' を削除

  return (
    <motion.div
      // ... (省略)
      variants={butterflyFlightVariants}
      initial="animate"
      animate="animate"
    >
      {/* ... (省略) ... */}

      {/* 左の羽 */}
      <motion.div
        // ... (省略)
        variants={wingVariants}
        animate={isScrolling ? "flap" : "still"}
      />

      {/* 右の羽 */}
      <motion.div
        // ... (省略)
        variants={wingVariants}
        animate={isScrolling ? "flap" : "still"}
      />
    </motion.div>
  );
};

export default Butterfly;
