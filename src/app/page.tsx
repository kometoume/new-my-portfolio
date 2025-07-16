// src/app/page.tsx

import React from 'react';
import Image from 'next/image';
import { projects, Project } from '../data/projects'; // data/projects.ts からインポート
import ContactForm from '../components/ContactForm'; // ContactForm をインポート
import type { Metadata } from 'next'; // ★この行を追加★

// ★ここにメタデータのエクスポートを貼り付けます★
export const metadata: Metadata = {
  title: 'Michie Yagi Portfolio', // ブラウザのタブに表示されるタイトル
  description: 'Michie Yagi のポートフォリオサイトです。Web開発の経験とスキルを紹介しています。', // サイトの説明
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Home / トップセクション */}
      <section id="home" className="container mx-auto px-4 py-20 text-center bg-gray-50">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Michie Yagi<br className="block sm:hidden"/> Portfolio</h1>
        <p className="mt-6 text-lg text-gray-600">
          Michie Yagiのポートフォリオサイトです。
        </p>
        {/* 必要であれば、ここにプロフィール画像やアピール画像を追加 */}
        {/* 例:
        <div className="mt-8">
          <Image
            src="/images/main-visual.jpg" // あなたの画像をpublic/images/に配置
            alt="メインビジュアル"
            width={800}
            height={450}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        */}
      </section>

      {/* About Me セクション */}
      <section id="about" className="container mx-auto px-4 py-16 bg-white  border-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* プロフィール画像 (任意): public/images/your-profile-pic.jpg などに画像を配置してください */}
          {/*
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/your-profile-pic.jpg"
              alt="プロフィール画像"
              width={192} // 画像の元の幅に合わせる
              height={192} // 画像の元の高さに合わせる
              className="object-cover w-full h-full"
            />
          </div>
          */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              はじめまして。八木美智惠と申します。大学院修了後、美術教員および教育機関の助手として教育現場で経験を積みました。その後、職業訓練校でWebデザインの知識を習得。現在は正社員のWebコーダーとして5年間、フルリモート環境下で業務に従事しています。自己管理を意識しながら業務を遂行し、円滑なコミュニケーションを心がけています。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Web制作に携わる中で、より高い専門性を身につけ、スキルを向上させたいという思いが強まり、今後の成長を見据えて転職を決意いたしました。このポートフォリオサイトは、ReactとNext.jsで開発し、バックエンドにはFirebaseを導入してサイトのアナリティクスを計測しています。現在はTailwind CSS、TypeScript、Node.js、そしてFirebaseの各種サービスなど、幅広い技術を積極的に学習中です。また、GitやGitHubを用いたバージョン管理にも取り組み、実務での経験を活かしながら、常に新しい知識を吸収し柔軟に対応できる力を身につけています。さらなる成長を目指して、前向きに取り組んでまいります。
            </p>

            <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">これまでの経験</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>大学院修了後、美術教員として教育現場で経験を積む</li>
              <li>教育機関の助手として教育現場での経験</li>
              <li>職業訓練校でWebデザインの知識を習得</li>
              <li>正社員のWebコーダーとして5年間、フルリモート環境下で業務に従事</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">学習中の技術・今後の目標</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>React、Next.js、Tailwind CSS、TypeScript、Node.js、Firebaseなどの技術を積極的に学習・活用中</li>
              <li>GitやGitHubを用いたバージョン管理に取り組む</li>
              <li>さらなる専門性の向上とスキルアップを目指して転職を検討中</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills セクション */}
      <section id="skills" className="container mx-auto px-4 py-16 bg-gray-50  border-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Skills</h2>

        {/* フロントエンド開発 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">フロントエンド開発</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="p-4 rounded-lg shadow bg-white">
              HTML / CSS / JavaScript <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">5年</span> {/* 5年: 青 */}
            </li>
            <li className="p-4 rounded-lg shadow bg-white">
              React / Next.js <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">3ヶ月</span> {/* 3ヶ月: オレンジ */}
            </li>
            <li className="p-4 rounded-lg shadow bg-white">
              Tailwind CSS <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">3ヶ月</span> {/* 3ヶ月: オレンジ */}
            </li>
            <li className="p-4 rounded-lg shadow bg-white">
              TypeScript <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">3ヶ月</span> {/* 3ヶ月: オレンジ */}
            </li>
          </ul>
        </div>

        {/* CMS */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">CMS</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="p-4 rounded-lg shadow bg-white">
              WordPress <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">2年</span> {/* 2年: 緑 */}
            </li>
          </ul>
        </div>

        {/* バックエンド開発 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">バックエンド開発</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="p-4 rounded-lg shadow bg-white">
              PHP <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">2年</span> {/* 2年: 緑 */}
            </li>
            <li className="p-4 rounded-lg shadow bg-white">
              Node.js <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">3ヶ月</span> {/* 3ヶ月: オレンジ */}
            </li>
          </ul>
        </div>

        {/* バージョン管理 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">バージョン管理</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="p-4 rounded-lg shadow bg-white">
              Git / GitHub <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">3ヶ月</span> {/* 3ヶ月: オレンジ */}
            </li>
          </ul>
        </div>

        {/* デザインツール */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">デザインツール</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="p-4 rounded-lg shadow bg-white">
              Adobe Photoshop <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">5年</span> {/* 5年: 青 */}
            </li>
            <li className="p-4 rounded-lg shadow bg-white">
              Adobe Illustrator <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">5年</span> {/* 5年: 青 */}
            </li>
            <li className="p-4 rounded-lg shadow bg-white">
              Adobe Premiere Pro <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">2年</span> {/* 2年: 緑 */}
            </li>
          </ul>
        </div>
      </section>
      {/* Projects セクション */}
      <section id="projects" className="container mx-auto px-4 py-16 bg-white  border-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* projects.ts から読み込んだデータを map でループ処理 */}
          {projects.map((project: Project) => ( // Project 型を明示的に指定
            <div key={project.id} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              {project.image && ( // 画像がある場合のみ表示
                 <div className="mb-4 relative overflow-hidden rounded-md" style={{ paddingTop: '56.25%' /* 16:9 のアスペクト比 */ }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill // 親要素に合わせて画像を埋める
                    style={{ objectFit: 'cover' }} // 画像がはみ出さないように調整
                    className="rounded-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // レスポンシブ画像最適化のため
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p> {/* flex-grow で高さを揃える */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 font-medium mb-3">ポイント:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="mt-auto flex gap-2 justify-center"> {/* justify-center を追加 */}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors duration-300 text-base font-semibold"
                  >
                    Webサイト
                  </a>
                )}
                {/* {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300 text-sm"
                  >
                    GitHub
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact セクション (仮の内容) */}
<section id="contact" className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact</h2>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <ContactForm /> {/* ★ここに ContactForm コンポーネントを配置★ */}
        </div>
      </section>
    </div>
  );
}