// src/data/career.ts

export interface Achievement {
  title: string;
  period: string;
  overview: string;
  task: string;
  result: string;
}

export interface CareerEntry {
  id: string;
  company: string;
  department: string;
  period: string;
  responsibilities: string[];
  achievements: Achievement[];
  points: string[];
}

export const careerEntries: CareerEntry[] = [
  {
    id: "kenko-salon",
    company: "健康サロン株式会社",
    department: "マーケティング部門",
    period: "2025年12月 〜 現在",
    responsibilities: [
      "CRM（顧客管理システム）の運用・管理、顧客データを活用したメルマガ配信・セミナー集客導線の設計",
      "メルマガ配信（企画・原稿作成・配信設計）、セミナー開催（企画・運営・集客）",
      "Google広告のA/Bテスト実施、効果検証に基づく改善提案",
      "SNS投稿・note記事作成（AIを活用したコンテンツ制作・効率化）",
      "Illustrator・Manusを用いたバナー、DM、ポスター、のぼり、ステッカー等の販促物の企画・制作",
      "FigmaによるLINE公式アカウントのリッチメニュー作成、Webデザイン制作",
      "AutoHotkey・Power Automateを用いた定型業務（業務開始/終了報告、日報作成）の自動化",
      "電話対応（問い合わせ対応）",
      "Claude Code、Manus、ChatGPTを用途別に使い分けたAI活用による業務全般の効率化",
    ],
    achievements: [
      {
        title: "コンサル支援業務の書類作成効率化プロジェクト",
        period: "2026年7月～",
        overview:
          "ハザードマップ等を組み込んだ提出書類作成業務が手作業中心で、処理件数に限界があった",
        task: "Claude Codeによる書類作成フローの構築",
        result: "1日あたりの処理件数を4件から30件に拡大（約7.5倍の生産性向上）",
      },
      {
        title: "Google広告A/Bテストによる効果改善",
        period: "2026年2月～",
        overview:
          "Google広告のクリエイティブ・訴求文言の比較検証による効果改善",
        task: "バナークリエイティブを複数パターン（デザイン・訴求文言違い）作成し配信、パフォーマンスを比較して効果の高いパターンを特定・反映",
        result: "CPA・CVR等の指標改善に貢献",
      },
      {
        title: "定型業務の自動化プロジェクト",
        period: "2026年4月～",
        overview:
          "業務開始/終了報告、日報作成など毎日発生する定型業務に時間を要していた",
        task: "AutoHotkeyによるワンクリック報告機能の実装、Power Automateによる日報作成フローの自動化",
        result:
          "報告・日報作成にかかる時間を削減し、コア業務への集中時間を確保",
      },
      {
        title: "SNS・note運用によるコンテンツ発信強化",
        period: "2025年12月～",
        overview:
          "AIツールを活用したSNS投稿・note記事作成のコンテンツ制作体制構築",
        task: "ChatGPT・Manusを用いたコンテンツ企画、制作、投稿",
        result: "投稿頻度・発信の幅を拡大し、継続的なコンテンツ制作体制を確立",
      },
      {
        title: "HubSpotによるメルマガ配信・セミナー運営",
        period: "2025年12月～",
        overview:
          "メルマガ配信やセミナーの集客・運営が属人化しており、仕組み化されていなかった",
        task: "HubSpotを用いたメルマガの企画・配信設計、セミナーの集客導線設計から当日運営までを一貫して担当",
        result:
          "メルマガ配信からセミナー運営までの一連のフローを整備し、継続的に実施できる体制を構築",
      },
    ],
    points: [
      "CRM・広告運用・販促物・SNS・業務自動化と領域を横断し、AIツールを目的別に使い分けて実装まで担う実行力",
      "「手作業で時間がかかっている業務」を発見し、AIやRPAツール（AutoHotkey、Power Automate）で自動化まで落とし込む改善提案力",
    ],
  },
];
