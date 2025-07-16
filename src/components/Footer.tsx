// src/components/Footer.tsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-8 text-center mt-auto h-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Michie Yagi Portfolio</p>
        {/* 元々あった「Built with Next.js and Tailwind CSS」の行は、ご要望に合わせて削除しました。
            必要であれば、<p className="text-sm mt-2">Built with Next.js and Tailwind CSS</p> を再度追加してください。 */}
      </div>
    </footer>
  );
}
