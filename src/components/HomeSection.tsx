const HomeSection = () => {
  return (
    // Home / トップセクション
    <section
      id="home"
      className="container mx-auto px-4 py-20 text-center 
            bg-gradient-to-r from-pink-500 to-indigo-500 text-white"
    >
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Michie Yagi
        <br className="block sm:hidden" /> Portfolio
      </h1>
      <p className="mt-6 text-lg text-white">
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
  );
};

export default HomeSection;