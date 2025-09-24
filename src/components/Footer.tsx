// src/components/Footer.tsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-8 text-center mt-auto h-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Michie Yagi Portfolio</p>
      </div>
    </footer>
  );
}
