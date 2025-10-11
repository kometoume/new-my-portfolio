// src/components/GoToTopButton.tsx
'use client';

import React, { useState, useEffect } from 'react';

const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-6 z-50 bottom-20 sm:bottom-32 md:bottom-5">
      {isVisible && (
    <button
     onClick={scrollToTop}
     className="
                p-3 shadow-lg transition-all duration-300 ease-in-out focus:outline-none cursor-pointer 
                active:scale-95 active:shadow-2xl active:transform-none 
                
                // ★ ここからグラデーションのクラスに置き換えます ★
                bg-gradient-to-r from-pink-500 to-indigo-500 // グラデーション背景
                text-white                                    // アイコンの色を白に
                hover:from-pink-600 hover:to-indigo-600       // ホバー時の色
                rounded-lg                                    // 角を丸める（任意）
          "
     aria-label="ページトップへ戻る"
    >
     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* 矢印アイコンを上向きに変更（より直感的になります） */}
             <path d="M12 2L4 18H20L12 2Z" /> {/* 元の三角形 */}
             
             {/* ★推奨：一般的な上向き矢印アイコン（より直感的）★
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
             */}
     </svg>
    </button>
      )}
    </div>
  );
};

export default GoToTopButton;