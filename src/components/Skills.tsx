import React from "react";
// アイコンライブラリ（例: react-icons）から必要なものをインポート
import {
  FaReact,
  FaHtml5,
  FaWordpressSimple,
  FaGitAlt,
  FaPalette,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiVuedotjs,
  SiSass,
  SiNodedotjs,
  SiPhp,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from "react-icons/si";

// ----------------------------------------------------
// 1. スキルデータ（変更なし）
// ----------------------------------------------------
const skillCategories = [
  {
    title: "フロントエンド開発",
    icon: <FaCode />,
    skills: [
      {
        name: "HTML / CSS / JavaScript",
        months: 60,
        color: "orange-500",
        icon: <FaHtml5 className="text-orange-600" />,
      },
      {
        name: "React / Next.js",
        months: 3,
        color: "sky-500",
        icon: <FaReact className="text-sky-500" />,
      },
      {
        name: "TypeScript",
        months: 3,
        color: "blue-600",
        icon: <SiTypescript className="text-blue-600" />,
      },
      {
        name: "Vue.js",
        months: 3,
        color: "emerald-500",
        icon: <SiVuedotjs className="text-emerald-500" />,
      },
      {
        name: "Sass",
        months: 1,
        color: "pink-400",
        icon: <SiSass className="text-pink-400" />,
      },
    ],
  },
  {
    title: "CMS",
    icon: <FaDatabase />,
    skills: [
      {
        name: "WordPress",
        months: 12,
        color: "gray-700",
        icon: <FaWordpressSimple className="text-gray-700" />,
      },
    ],
  },
  {
    title: "バックエンド開発",
    icon: <FaServer />,
    skills: [
      {
        name: "PHP",
        months: 24,
        color: "indigo-500",
        icon: <SiPhp className="text-indigo-500" />,
      },
      {
        name: "Node.js",
        months: 1,
        color: "green-500",
        icon: <SiNodedotjs className="text-green-500" />,
      },
    ],
  },
  {
    title: "バージョン管理",
    icon: <FaGitAlt />,
    skills: [
      {
        name: "Git / GitHub",
        months: 3,
        color: "red-600",
        icon: <FaGitAlt className="text-red-600" />,
      },
    ],
  },
  {
    title: "デザインツール",
    icon: <FaPalette />,
    skills: [
      {
        name: "Adobe Photoshop",
        months: 60,
        color: "blue-700",
        icon: <SiAdobephotoshop className="text-blue-700" />,
      },
      {
        name: "Adobe Illustrator",
        months: 60,
        color: "orange-700",
        icon: <SiAdobeillustrator className="text-orange-700" />,
      },
      {
        name: "Adobe Premiere Pro",
        months: 24,
        color: "purple-700",
        icon: <SiAdobepremierepro className="text-purple-700" />,
      },
    ],
  },
];

// ----------------------------------------------------
// 2. ヘルパー関数（変更なし）
// ----------------------------------------------------
const getYearsInfo = (months: number) => {
  const years = months / 12;
  if (months >= 36)
    return {
      label: `${Math.floor(years)}年`,
      text: "text-white",
      bg: "bg-teal-500",
      ring: "ring-teal-300",
    };
  if (months >= 12)
    return {
      label: `${Math.floor(years)}年`,
      text: "text-white",
      bg: "bg-lime-500",
      ring: "ring-lime-300",
    };
  if (months > 0)
    return {
      label: `${months}ヶ月`,
      text: "text-gray-800",
      bg: "bg-yellow-300",
      ring: "ring-yellow-200",
    };
  return {
    label: "New",
    text: "text-gray-800",
    bg: "bg-gray-200",
    ring: "ring-gray-100",
  };
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="
    container mx-auto px-4 py-16
   "
    >
      <h2
        className="
            text-4xl font-bold mb-8 text-center
     bg-clip-text text-transparent
     bg-gradient-to-r from-fuchsia-500 to-sky-500
     tracking-tight
    "
      >
        Skills
      </h2>

      {skillCategories.map((category) => {
        // グラデーションのスタイルを定義（Tailwind CSSのクラス）
        const gradientClass =
          "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-sky-500";

        // React.cloneElementを使って、category.iconにグラデーションのスタイルを適用
        const gradientIcon = React.cloneElement(category.icon, {
          // fillプロパティを上書きして、SVGの塗りを強制的にテキストクリップに合わせる
          className: `text-3xl mr-3 ${gradientClass}`,
          fill: "url(#categoryGradient)", // SVGのグラデーションIDを参照（後で定義）
        });

        // SVGのグラデーション定義
        const gradientDefinition = (
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient
                id="categoryGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#d946ef", stopOpacity: 1 }}
                />{" "}
                {/* fuchsia-500 */}
                <stop
                  offset="100%"
                  style={{ stopColor: "#0ea5e9", stopOpacity: 1 }}
                />{" "}
                {/* sky-500 */}
              </linearGradient>
            </defs>
          </svg>
        );

        return (
          <div key={category.title} className="mb-10">
            {/* SVGグラデーション定義を配置（一度だけレンダリングされればOKだが、カテゴリ内に入れておく） */}
            {gradientDefinition}

            {/* カテゴリタイトルと文字長に合わせたグラデーション下線 */}
            <h3
              className="
        text-2xl font-bold mb-6 
        text-gray-800 dark:text-gray-200 
                // inline-flex: テキストの幅にh3の幅を合わせる
        inline-flex relative pb-2 items-center
                // before: 擬似要素を使って文字の長さに合わせたグラデーション下線を作成
                before:content-[''] before:absolute before:bottom-0 before:left-0 
                before:w-full before:h-1 
                before:bg-gradient-to-r before:from-fuchsia-500 before:to-sky-500
       "
            >
              {/* ★★★ 修正箇所: cloneElementで処理したアイコンを配置 ★★★ */}
              {gradientIcon}
              {category.title}
            </h3>

            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {category.skills.map((skill) => {
                const { label, text, bg } = getYearsInfo(skill.months);

                return (
                  <li
                    key={skill.name}
                    className={`
           p-5 flex flex-col items-start justify-between 
           rounded-xl shadow-lg 
           bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200

          `}
                  >
                    <div className="flex items-center mb-4">
                      {/* スキル名とアイコン */}
                      <span className="text-3xl mr-3">{skill.icon}</span>
                      <span className="font-semibold text-lg">
                        {skill.name}
                      </span>
                    </div>

                    {/* ★ 年数を「React風コンポーネント」としてデザイン ★ */}
                    <div
                      className={`
            ${bg} ${text} 
            font-bold px-3 py-1 rounded-full text-xs
            flex items-center shadow-md 
            transition-transform duration-300
            // Tailwind JITモードでは動的クラスの完全な組み合わせが必要
           `}
                    >
                      {label}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
