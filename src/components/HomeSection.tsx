"use client"; // ★アニメーション（インタラクティブな機能）を使用するため追加★

import React from "react";
// motionオブジェクトをインポート
import { motion } from "framer-motion";

const HomeSection = () => {
  // アニメーションのバリアントを定義
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // 子要素の表示を0.3秒ずつ遅延させる
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // Home / トップセクション
    <motion.section // ★sectionをmotion.sectionに置き換え★
      id="home"
      className="  py-20 text-center 
                   bg-gradient-to-r from-cyan-600 to-purple-500 text-white"
      variants={containerVariants}
      initial="hidden" // 初期状態は非表示
      animate="visible" // マウント時に表示アニメーションを実行
    >
      {/* h1をmotion.h1に置き換え、itemVariantsを適用 */}
      <motion.h1
        className="text-5xl font-extrabold text-white mb-4"
        variants={itemVariants}
      >
        Michie Yagi
        <br className="block sm:hidden" /> Portfolio
      </motion.h1>

      {/* pタグをmotion.pに置き換え、itemVariantsを適用 */}
      <motion.p className="mt-6 text-lg text-white" variants={itemVariants}>
        Michie Yagiのポートフォリオサイトです。
      </motion.p>
    </motion.section>
  );
};

export default HomeSection;
