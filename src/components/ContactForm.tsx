// src/components/ContactForm.tsx

"use client"; // Client Componentとしてマーク

import { useState } from "react";

export default function ContactForm() {
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // 送信中かどうかの状態
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // 送信成功/失敗の状態

  // カスタムバリデーションメッセージを設定する関数
  const setCustomValidity = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    message: string
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    target.setCustomValidity(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // フォームのデフォルト送信を防ぐ

    // バリデーションチェック (ブラウザのHTML5バリデーションを発火させる)
    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      // バリデーションエラーがあれば、送信処理を中断
      return;
    }

    setIsSubmitting(true); // 送信中状態を開始
    setFormMessage(""); // 以前のメッセージをクリア
    setIsSuccess(null); // 状態をリセット

    const formData = new FormData(form);
    // FormDataから各フィールドの値を取得
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject"); // 件名フィールドを追加
    const message = formData.get("message");

    // 取得した値をオブジェクトにまとめる
    const data = { name, email, subject, message };

    try {
      const response = await fetch("/api/contact", {
        // 作成したAPI Routeのエンドポイント
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // フォームデータをJSON形式で送信
      });

      if (response.ok) {
        setFormMessage("お問い合わせありがとうございました！");
        setIsSuccess(true);
        form.reset(); // フォームの内容をクリア
      } else {
        const errorData = await response.json();
        setFormMessage(
          `送信に失敗しました: ${errorData.message || "不明なエラー"}`
        );
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("フォーム送信エラー:", error);
      setFormMessage(
        "お問い合わせの送信中にエラーが発生しました。しばらくしてから再度お試しください。"
      );
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false); // 送信状態を解除
    }
  };

  return (
    <div>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="mb-8">
          <label
            htmlFor="name"
            className="block text-sm tracking-[0.15em] uppercase text-black/40 mb-3"
          >
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-transparent border-0 border-b border-black/20 py-2 text-[#16161d] placeholder-black/20 focus:outline-none focus:border-[#333d29] transition-colors duration-300"
            onInvalid={(e) =>
              setCustomValidity(e, "お名前を入力してください。")
            }
            onInput={(e) => setCustomValidity(e, "")}
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-sm tracking-[0.15em] uppercase text-black/40 mb-3"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-transparent border-0 border-b border-black/20 py-2 text-[#16161d] placeholder-black/20 focus:outline-none focus:border-[#333d29] transition-colors duration-300"
            onInvalid={(e) =>
              setCustomValidity(e, "有効なメールアドレスを入力してください。")
            }
            onInput={(e) => setCustomValidity(e, "")}
          />
        </div>

        <div className="mb-10">
          <label
            htmlFor="message"
            className="block text-sm tracking-[0.15em] uppercase text-black/40 mb-3"
          >
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full bg-transparent border-0 border-b border-black/20 py-2 text-[#16161d] placeholder-black/20 focus:outline-none focus:border-[#333d29] transition-colors duration-300 resize-none"
            onInvalid={(e) =>
              setCustomValidity(e, "メッセージを入力してください。")
            }
            onInput={(e) => setCustomValidity(e, "")}
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase border border-[#333d29] text-[#333d29] px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#333d29] hover:text-white focus:outline-none ${
              isSubmitting ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </button>
        </div>

        {formMessage && (
          <p
            className={`mt-6 text-center text-sm ${
              isSuccess ? "text-black/60" : "text-red-500"
            }`}
          >
            {formMessage}
          </p>
        )}
      </form>
    </div>
  );
}
