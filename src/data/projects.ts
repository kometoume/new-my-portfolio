// src/data/projects.ts

// プロジェクトのデータ構造を定義
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string; // 画像のパス (オプショナルにする)
  technologies: string[];
  githubLink?: string; // GitHubリポジトリのURL (任意)
  demoLink?: string; // デモサイトのURL (任意)
  points: string[]; // 工夫した点や特徴
}

// プロジェクトデータの配列
export const projects: Project[] = [
  {
    id: "zunda_web",
    title: "【仙台名物】ずんだ餅専門店Webサイト（自主制作）",
    description:
      "仙台伝統の味、ずんだ餅の魅力を最大限に伝える架空のWebサイトです。和の雰囲気を重視しつつ作成しました。",
    image: "/images/zunda-thumbnail.png",
    technologies: ["HTML", "JavaScript", "CSS", "Tailwind CSS"],
    demoLink: "https://kometoume.github.io/zunda_site/",
    points: [
      "Illustratorで、ブランドの信念を象徴するハンコ風ロゴを自作し、伝統と信頼感をデザインで表現。",
      "Google Fontsで和風フォントを選定し、商品名や見出しに伝統的な和菓子の雰囲気と高級感を演出。",
      "モバイルフレンドリーなレスポンシブデザインを、Tailwind CSSのユーティリティを活用して実現。",
      "Tailwindのデフォルトカラーを上書きし、カスタムの「ずんだカラー」を定義・適用することで、ブランド独自の配色を一貫して表現。",
    ],
  },
  {
    id: "todo-app",
    title: "Daily Task（自主制作）",
    description:
      "日々の習慣化をサポートするTodoアプリです。Firebase Authenticationによるユーザー認証機能を実装し、メールアドレスでのログイン・新規登録に加え、手軽なゲストログインにも対応しています。タスクデータはFirebase Firestoreにユーザーごとにセキュアに保存され、クラウド上でリアルタイムに同期されます。毎日行う3種類のタスクが自動で再表示される機能により、継続的なタスク管理を支援します。",
    image: "/images/todo-thumbnail.png",
    technologies: ["JavaScript", "HTML", "CSS", "Firebase"],
    demoLink: "https://kometoume.github.io/MyTodos/",
    githubLink: "https://github.com/kometoume/MyTodos",
    points: [
      "Firebase Authenticationによるユーザー認証機能（メール/パスワード登録・ログイン、ゲストログイン）を実装。",
      "ログインユーザーごとに独立したタスクデータをFirestoreに保存・管理。",
      "毎日行う「ゴミ出し」「洗濯」「皿洗い」の3種類のタスクを自動で再表示",
      "Firebase FirestoreのonSnapshot機能を活用し、複数デバイス間でのタスクデータのリアルタイム同期を実現。",
    ],
  },
  {
    id: "eding-website",
    title: "コンテンツ制作会社のコーポレートサイト",
    description:
      "前職の会社のWebサイトの制作・改修を担当しました。主にHTML, CSS, JavaScript, jQueryを用いてレスポンシブデザインに対応させ、視覚的な魅力を高めるスライダーを導入しました。バックエンドではPHPを使用してセキュアな問い合わせフォームを実装しています。デザイン面ではAdobe PhotoshopとIllustratorを活用し、サイト全体の品質向上に貢献しました。",
    image: "/images/eding-thumbnail.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    demoLink: "https://www.eding.co.jp",
    points: [
      "レスポンシブデザイン対応",
      "問い合わせフォーム作成",
      "スライダー導入",
    ],
  },
  {
    id: "client-website-scsk-nvidia",
    title: "クライアントのWebサイト (スライダー・シミュレーション)",
    description:
      "クライアントのWebサイトです。クライアントの要望に応えつつ、サイトの顔となるスライダーのデザインや、ユーザー体験を向上させる見積もりシミュレーションの設計・実装を担当しました。",
    image: "/images/project-a-thumbnail.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    demoLink: "https://www.scsk.jp/sp/nvidia/index.html",
    points: [
      "レスポンシブデザイン対応",
      "見積もりシミュレーションの作成",
      "スライダー導入",
      "ポップアップバナー導入",
      "図版作成",
    ],
  },
  {
    id: "client-website-scsk-club",
    title: "クライアントのWebサイト (スライダー・デザイン調整)",
    description:
      "クライアントのWebサイトにおいて、トップページの印象を左右するスライダーのデザインから画像制作、実装・導入までを一貫して担当しました。また、既存サイトの構成やデザインの調整にも対応し、ユーザー動線の見直しや導線設計の改善を行いました。",
    image: "/images/project-b-thumbnail.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    demoLink: "https://www.scsk.jp/sp/clubscsk/",
    points: ["レスポンシブデザイン対応", "スライダー導入", "図版作成"],
  },

  {
    id: "client-website-scsk-pureflow",
    title: "クライアントのWebサイト (構成・デザイン修正)",
    description:
      "クライアントの要望に応じて、サイト全体の構成やデザインの細部を適宜修正し、図版の作成や既存素材の調整なども行いました。視認性や操作性を意識した改善を重ねることで、ユーザー体験の向上に貢献しています。",
    image: "/images/project-d-thumbnail.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    demoLink: "https://www.scsk.jp/sp/pureflow/index.html",
    points: ["レスポンシブデザイン対応", "図版作成"],
  },
];
