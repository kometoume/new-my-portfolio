const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-16 bg-white  border-gray-200"
    >
      <h2
        className="
            text-4xl font-bold mb-8 text-center
            // ★ 文字グラデーション用の3つのキー設定 ★
            bg-clip-text
            text-transparent
            bg-gradient-to-r from-purple-600 to-cyan-500
            
          "
      >
        About Me
      </h2>
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
            はじめまして。八木美智惠と申します。大学院修了後、美術教員および教育機関の助手として教育現場で経験を積んだ後、職業訓練校でWebデザインの知識を習得しました。その後、正社員のWebデザイナー・コーダーとして5年間、フルリモート環境下で業務に従事し、自己管理能力を高めながら円滑なコミュニケーションを心がけてきました。現在はプログラマーとして勤務しており、フロントエンドとバックエンドの両方を幅広く習得しています。ReactやVue.jsを使った新規テンプレート制作を行い、GitHubを活用したチーム開発に取り組んでいます。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            スキルの幅を広げつつ、より柔軟でクリエイティブな仕事ができるよう成長していきたいと考えています。
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
            これまでの経験
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 hanging-indent">
            <li>大学院修了後、美術教員として教育現場で経験を積む</li>
            <li>教育機関の助手として教育現場での経験</li>
            <li>職業訓練校でWebデザインの知識を習得</li>
            <li>
              正社員のWebコーダー/Webデザイナーとして5年間、フルリモート環境下で業務に従事
            </li>
            <li>現在は正社員のプログラマーとしてシステム開発に携わる</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
            学習中の技術・今後の目標
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 hanging-indent">
            <li>
              現在はプログラマーとして勤務していますが、Web制作の現場に再び携わりたいと考えています。特に、デザインとコーディングを一貫して行うスキルを活かして、より魅力的で使いやすいWebサイトを作ることで、制作のクオリティ向上に貢献したいと思っています。
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
