const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16 bg-white ">
      <h2
        className="
            text-4xl font-bold mb-8 text-center
            // ★ 文字グラデーション用の3つのキー設定 ★
            bg-clip-text
            text-transparent
            bg-gradient-to-r from-sky-500 to-fuchsia-500
            
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
            はじめまして。八木美智惠と申します。
            大学院修了後、美術教員および教育機関の助手として教育現場で経験を積みました。その後、職業訓練校での学びを経て、正社員のWebデザイナー・コーダーとして5年間、フルリモート環境下でWeb制作業務に従事しました。現在はプログラマーとして、ReactやVue.jsを用いたフロントエンドの開発に携わっています。GitHubを活用し、非同期環境下での円滑なコード共有とタスク進捗管理を実現することで、開発における専門性と応用力を高めております。
            スキルの幅を広げつつ、より柔軟でクリエイティブな仕事ができるよう成長していきたいと考えています。
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
            今後の目標
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            現在はプログラマーとして勤務していますが、Web制作の現場に再び携わりたいと考えています。特に、デザインとコーディングを一貫して行うスキルを活かして、より魅力的で使いやすいWebサイトを生み出し、制作全体のクオリティ向上に貢献したいと考えています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
