import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    // 1. セクション全体（枠組みと背景デザイン）
    <section
      id="contact"
      className="
          px-4 py-16 
          bg-cyan-100/20 backdrop-blur-sm
      "
    >
      <div className="container mx-auto">
        <h2
          className="
          text-4xl font-bold mb-8 text-center
          // 文字グラデーション設定
          bg-clip-text
          text-transparent
          bg-gradient-to-r from-purple-600 to-cyan-500
        "
        >
          Contact
        </h2>

        {/* 3. フォームコンポーネントを配置するコンテナ */}
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {/* ★ ContactForm.tsxで定義したフォームのロジックとUIを呼び出し ★ */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
