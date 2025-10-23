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
    id: "banner",
    title: "バナーデザイン一覧",
    description:
      "各種Webサイトやキャンペーンで使用されたバナーデザインをまとめたページです。訴求内容や掲載媒体に合わせて、レイアウト・配色・フォント選定を工夫し、目的に応じたビジュアルを制作しました。",
    image: "/images/project-banner-thumbnail.png",
    technologies: ["Adobe Photoshop", "Adobe Illustrator"],
    demoLink: "https://kometoume.github.io/design_portfolio/",
    points: [
      "キャンペーン・新商品告知・イベント用など目的別に制作",
      "ブランドイメージを損なわず、視覚的に訴求できる構成を意識",
    ],
  },
  {
    id: "client-website-scsk-nvidia",
    title: "クライアントのWebサイト (導入事例、FAQなど)",
    description:
      "クライアントのWebサイトです。また、導入事例ページの追加やFAQページの設計・開発にも携わり、アコーディオン機能を活用したカテゴリ別の表示や、見やすさ・使いやすさに配慮したUI設計を行いました。",
    image: "/images/project-e-thumbnail.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
    demoLink: "https://www.scsk.jp/sp/radius/casestudy/index.html",
    points: [
      "レスポンシブデザイン対応",
      "スライダー導入",
      "導入事例ページの追加・調整",
      "FAQページの設計・実装（アコーディオン機能を使用）",
      "ユーザー導線を意識した情報設計",
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
  //   {
  //     id: "client-website-scsk-pureflow",
  //     title: "クライアントのWebサイト (構成・デザイン修正)",
  //     description:
  //       "クライアントの要望に応じて、サイト全体の構成やデザインの細部を適宜修正し、図版の作成や既存素材の調整なども行いました。視認性や操作性を意識した改善を重ねることで、ユーザー体験の向上に貢献しています。",
  //     image: "/images/project-d-thumbnail.png",
  //     technologies: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "jQuery",
  //       "Adobe Photoshop",
  //       "Adobe Illustrator",
  //     ],
  //     demoLink: "https://www.scsk.jp/sp/pureflow/index.html",
  //     points: ["レスポンシブデザイン対応", "図版作成"],
  //   },
  //   {
  //     id: "client-website-scsk-netscout",
  //     title: "クライアントのWebサイト (構成・デザイン修正)",
  //     description:
  //       "クライアントの要望に応じて、サイト全体の構成やデザインの細部を適宜修正し、図版の作成や既存素材の調整なども行いました。視認性や操作性を意識した改善を重ねることで、ユーザー体験の向上に貢献しています。",
  //     image: "/images/project-netscout-thumbnail.png",
  //     technologies: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "jQuery",
  //       "Adobe Photoshop",
  //       "Adobe Illustrator",
  //     ],
  //     demoLink: "https://www.scsk.jp/sp/netscout/index.html",
  //     points: ["レスポンシブデザイン対応", "図版作成"],
  //   },
  //   {
  //     id: "client-website-scsk-ixia",
  //     title: "クライアントのWebサイト (構成・デザイン修正)",
  //     description:
  //       "クライアントの要望に応じて、サイト全体の構成やデザインの細部を適宜修正し、図版の作成や既存素材の調整なども行いました。視認性や操作性を意識した改善を重ねることで、ユーザー体験の向上に貢献しています。",
  //     image: "/images/project-c-thumbnail.png",
  //     technologies: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "jQuery",
  //       "Adobe Photoshop",
  //       "Adobe Illustrator",
  //     ],
  //     demoLink: "https://www.scsk.jp/sp/ixia/",
  //     points: ["レスポンシブデザイン対応", "図版作成"],
  //   },
  //   {
  //     id: "client-website-scsk-icewall",
  //     title: "クライアントのWebサイト (デザイン統一・ページ制作)",
  //     description:
  //       "クライアント製品の特徴に合わせて全体のカラーを統一し、要望に応じたデザイン修正を行いました。YouTube動画の埋め込みを含め、ほぼすべてのページを新規制作。図版やアイコンのテイストも揃えることで、統一感のあるビジュアルデザインを実現しました。",
  //     image: "/images/project-icewall-thumbnail.png",
  //     technologies: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "jQuery",
  //       "Adobe Photoshop",
  //       "Adobe Illustrator",
  //     ],
  //     demoLink: "https://www.scsk.jp/sp/hpe/icewall/index.html",
  //     points: [
  //       "全ページの新規制作",
  //       "製品イメージに合わせたカラー統一",
  //       "YouTube動画埋め込み",
  //       "図版・アイコンの統一",
  //       "デザイン修正対応",
  //     ],
  //   },
  //   {
  //     id: "client-website-scsk-alletra",
  //     title: "クライアントのWebサイト (デザイン統一・ページ制作)",
  //     description:
  //       "クライアント製品の特徴に合わせて全体のカラーを統一し、要望に応じたデザイン修正を行いました。ほぼすべてのページを新規制作。図版やアイコンのテイストも揃えることで、統一感のあるビジュアルデザインを実現しました。",
  //     image: "/images/project-alletra-thumbnail.png",
  //     technologies: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "jQuery",
  //       "Adobe Photoshop",
  //       "Adobe Illustrator",
  //     ],
  //     demoLink: "https://www.scsk.jp/sp/hpe/alletra/index.html",
  //     points: [
  //       "全ページの新規制作",
  //       "製品イメージに合わせたカラー統一",
  //       "図版・アイコンの統一",
  //       "デザイン修正対応",
  //     ],
  //   },
  //   {
  //     id: "client-website-scsk-hpedx",
  //     title: "クライアントのWebサイト (デザイン統一・ページ制作)",
  //     description:
  //       "クライアント製品の特徴に合わせて全体のカラーを統一し、要望に応じたデザイン修正を行いました。ほぼすべてのページを新規制作。図版やアイコンのテイストも揃えることで、統一感のあるビジュアルデザインを実現しました。",
  //     image: "/images/project-hpedx-thumbnail.png",
  //     technologies: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "jQuery",
  //       "Adobe Photoshop",
  //       "Adobe Illustrator",
  //     ],
  //     demoLink: "https://www.scsk.jp/sp/hpe/hpedx/index.html",
  //     points: [
  //       "全ページの新規制作",
  //       "製品イメージに合わせたカラー統一",
  //       "図版・アイコンの統一",
  //       "デザイン修正対応",
  //     ],
  //   },
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
  //   {
  //     id: "kirakira_music_lp",
  //     title: "きらきら音楽教室 LP (自主製作)",
  //     description:
  //       "「できた！」が自信になる」をコンセプトに、子供のピアノ教室の無料体験レッスンへの申し込みを促すランディングページです。親御さんの不安を解消し、教室の明るい雰囲気を直感的に伝えるデザインに重点を置きました。",
  //     image: "/images/kirakira-thumbnail.png",
  //     technologies: ["HTML5", "CSS3", "JavaScript", "Adobe Illustrator"],
  //     demoLink: "https://kometoume.github.io/piano_web/",
  //     points: [
  //       "Adobe Illustratorで教室のロゴを自作し、ブランドイメージとターゲット層に合わせた可愛らしく親しみやすいデザインを実現。",
  //       "コンバージョン率向上のため、固定CTAボタン用のアイコンを自作し、視覚的な訴求力を高める工夫を実施。",
  //       "親しみやすさを追求し、クレヨンで描いたような手書き風のデザインを適用。",
  //       "Google FontsのKosugi Maruを利用し、子供らしい遊び心と優しい雰囲気を演出。",
  //       "ユーザーの離脱を防ぐため、固定CTAボタンとフォームへの動線をページ上部と下部に設置し、コンバージョンを意識した設計。",
  //       "親御さんの抱える不安（飽きる、親の負担など）を最初に提示し、それに対して教室の3つの強みで論理的に解決する構成を採用。",
  //     ],
  //   },
  //   {
  //     id: "zunda_web",
  //     title: "ずんだ餅専門店Webサイト（自主制作）",
  //     description:
  //       "仙台伝統の味、ずんだ餅の魅力を最大限に伝える架空のWebサイトです。和の雰囲気を重視しつつ、ターゲットである観光客にとって「分かりやすさ」と「利便性」を追求して作成しました。",
  //     image: "/images/zunda-thumbnail.png",
  //     technologies: ["HTML", "JavaScript", "CSS", "Tailwind CSS"],
  //     demoLink: "https://kometoume.github.io/zunda_site/",
  //     points: [
  //       "Google Fontsで游明朝のフォントを選定し、商品名や見出しに伝統的な和菓子の雰囲気と高級感を演出。",
  //       "モバイルフレンドリーなレスポンシブデザインを、Tailwind CSSのユーティリティを活用して実現。",
  //       "Tailwindのデフォルトカラーを上書きし、カスタムの「ずんだカラー」を定義・適用することで、ブランド独自の配色を一貫して表現。",
  //     ],
  //   },
  {
    id: "todo-app",
    title: "Daily Taskアプリ（自主制作）",
    description:
      "日々の習慣化をサポートするTodoアプリです。ユーザーがタスク管理に集中できるよう、手書き風フォントと罫線を採用したレトロなノート風UIに刷新しています。技術面では、Firebase Authenticationによるユーザー認証機能（メール/パスワード、ゲストログイン）を実装し、タスクデータはFirebase Firestoreにユーザーごとにセキュアに保存され、クラウド上でリアルタイムに同期されます。さらに、毎朝「ゴミ出し」「洗濯」「皿洗い」など、継続的な習慣化を支援するための固定タスクが自動で再表示される機能を実装しています。",
    image: "/images/todo-thumbnail.png",
    technologies: ["JavaScript", "HTML", "CSS", "Tailwind CSS", "Firebase"],
    demoLink: "https://kometoume.github.io/MyTodos/",
    githubLink: "https://github.com/kometoume/MyTodos",
    points: [
      "Firebase Authenticationによるユーザー認証機能（メール/パスワード登録・ログイン、ゲストログイン）を実装。",
      "ログインユーザーごとに独立したタスクデータをFirestoreに保存・管理。",
      "毎日行う「ゴミ出し」「洗濯」「皿洗い」の3種類のタスクを自動で再表示",
      "Firebase FirestoreのonSnapshot機能を活用し、複数デバイス間でのタスクデータのリアルタイム同期を実現。",
      "「メモ帳/ノート」コンセプトのUIを実装。手書き風の日本語フォント（Yusei Magic）と紙のような背景色を使用し、アナログなタスク管理の親しみやすさを追求。",
      "ゴミ箱アイコン（削除）や人のアイコン（ユーザー認証）など、直感的な操作を可能にする標準的なピクトグラムを効果的に配置。",
    ],
  },
];
