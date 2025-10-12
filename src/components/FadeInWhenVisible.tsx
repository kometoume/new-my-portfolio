// components/FadeInWhenVisible.tsx

"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string; // Tailwindクラスを受け付ける
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  className,
}) => {
  const ref = useRef(null);
  // useInViewで要素がビューポートに入ったかを検出
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // once: true で一度だけ実行

  const controls = useAnimation(); // アニメーションを制御

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50 }, // 初期状態（見えない、少し下にいる）
        visible: { opacity: 1, y: 0 }, // 最終状態（見える、元の位置）
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
