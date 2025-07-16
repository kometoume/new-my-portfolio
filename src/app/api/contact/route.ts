// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // subject を削除
    const { name, email, message } = await request.json(); 

    // 環境変数が設定されているか確認
    // Next.jsでは、環境変数は process.env.YOUR_VAR_NAME でアクセスします。
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('環境変数が設定されていません: EMAIL_USER, EMAIL_PASS');
      return NextResponse.json({ message: 'サーバー設定エラーが発生しました。メール送信設定が正しくありません。' }, { status: 500 });
    }

    // Nodemailerのトランスポーターを設定
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Gmailサービスを使用
      auth: {
        user: process.env.EMAIL_USER, // あなたのGmailアドレス
        pass: process.env.EMAIL_PASS, // あなたのアプリパスワード
      },
    });

    // 送信するメールの内容を定義
    const mailOptions = {
      from: process.env.EMAIL_USER, // 送信元（あなたのGmailアドレス）
      to: process.env.EMAIL_USER,   // 受信先（あなたのGmailアドレス）
      // 件名を固定、または名前を含める
      subject: `ポートフォリオサイトからのお問い合わせ (${name}様より)`, 
      // text から subject を削除
      text: `名前: ${name}\nメール: ${email}\nメッセージ: ${message}`, 
      // html から subject を削除
      html: `
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メール:</strong> ${email}</p>
        <p><strong>メッセージ:</strong> ${message}</p>
      `, 
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'お問い合わせが正常に送信されました！' }, { status: 200 });

  } catch (error) {
    console.error('お問い合わせ送信エラー:', error);
    return NextResponse.json({ message: 'お問い合わせの送信に失敗しました。サーバー側でエラーが発生しました。' }, { status: 500 });
  }
}
