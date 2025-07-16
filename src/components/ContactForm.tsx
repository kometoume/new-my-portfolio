// src/components/ContactForm.tsx

'use client'; // Client Componentとしてマーク

import { useState } from 'react';

export default function ContactForm() {
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // 送信中かどうかの状態
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // 送信成功/失敗の状態

  // カスタムバリデーションメッセージを設定する関数
  const setCustomValidity = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, message: string) => {
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
    setFormMessage(''); // 以前のメッセージをクリア
    setIsSuccess(null); // 状態をリセット

    const formData = new FormData(form);
    // FormDataから各フィールドの値を取得
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject'); // 件名フィールドを追加
    const message = formData.get('message');

    // 取得した値をオブジェクトにまとめる
    const data = { name, email, subject, message };

    try {
      const response = await fetch('/api/contact', { // 作成したAPI Routeのエンドポイント
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // フォームデータをJSON形式で送信
      });

      if (response.ok) {
        setFormMessage('お問い合わせありがとうございました！');
        setIsSuccess(true);
        form.reset(); // フォームの内容をクリア
      } else {
        const errorData = await response.json();
        setFormMessage(`送信に失敗しました: ${errorData.message || '不明なエラー'}`);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('フォーム送信エラー:', error);
      setFormMessage('お問い合わせの送信中にエラーが発生しました。しばらくしてから再度お試しください。');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false); // 送信状態を解除
    }
  };

  return (
    <div className="text-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">お問い合わせ</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="mb-4"> {/* 各入力フィールドをdivで囲むとTailwindのmbが効きやすい */}
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">お名前:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onInvalid={(e) => setCustomValidity(e, 'お名前を入力してください。')}
            onInput={(e) => setCustomValidity(e, '')}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">メールアドレス:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onInvalid={(e) => setCustomValidity(e, '有効なメールアドレスを入力してください。')}
            onInput={(e) => setCustomValidity(e, '')}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">メッセージ:</label>
          <textarea
            id="message"
            name="message"
            rows={5} // 行数を少し増やしました
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onInvalid={(e) => setCustomValidity(e, 'メッセージを入力してください。')}
            onInput={(e) => setCustomValidity(e, '')}
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer' // 送信中はカーソルを無効化
            }`}
            disabled={isSubmitting} // 送信中はボタンを無効化
          >
            {isSubmitting ? '送信中...' : '送信'}
          </button>
        </div>

        {/* 送信メッセージの表示 */}
        {formMessage && (
          <p className={`mt-4 text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {formMessage}
          </p>
        )}
      </form>
    </div>
  );
}
