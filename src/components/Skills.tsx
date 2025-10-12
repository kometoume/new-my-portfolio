
const Skills = () => {
  return (
    <section
      id="skills"
      className="
             container mx-auto px-4 py-16 border-gray-200
             bg-gradient-to-r from-pink-50/50 to-indigo-50/50 // 薄いグラデーション
         "
    >
      <h2
        className="
            text-4xl font-bold mb-8 text-center
            // ★ 文字グラデーション追加 ★
            bg-clip-text
            text-transparent
            bg-gradient-to-r from-purple-600 to-cyan-500
          "
      >
        Skills
      </h2>

      {/* フロントエンド開発 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          フロントエンド開発
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="p-4 rounded-lg shadow bg-white">
            HTML / CSS / JavaScript{" "}
            <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              5年
            </span>{" "}
          </li>
          <li className="p-4 rounded-lg shadow bg-white">
            React / Next.js{" "}
            <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              3ヶ月
            </span>{" "}
          </li>
          <li className="p-4 rounded-lg shadow bg-white">
            TypeScript{" "}
            <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              3ヶ月
            </span>{" "}
          </li>
          <li className="p-4 rounded-lg shadow bg-white">
            Vue.js{" "}
            <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              3ヶ月
            </span>{" "}
          </li>
          <li className="p-4 rounded-lg shadow bg-white">
            Sass{" "}
            <span className="inline-block bg-blue-400 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              1ヶ月
            </span>{" "}
          </li>
        </ul>
      </div>

      {/* CMS */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">CMS</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="p-4 rounded-lg shadow bg-white">
            WordPress{" "}
            <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              1年
            </span>{" "}
            {/* 2年: 緑 */}
          </li>
        </ul>
      </div>

      {/* バックエンド開発 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          バックエンド開発
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="p-4 rounded-lg shadow bg-white">
            PHP{" "}
            <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              2年
            </span>{" "}
            {/* 2年: 緑 */}
          </li>
          <li className="p-4 rounded-lg shadow bg-white">
            Node.js{" "}
            <span className="inline-block bg-blue-400 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              1ヶ月
            </span>{" "}
            {/* 3ヶ月: オレンジ */}
          </li>
        </ul>
      </div>

      {/* バージョン管理 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          バージョン管理
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="p-4 rounded-lg shadow bg-white">
            Git / GitHub{" "}
            <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              3ヶ月
            </span>{" "}
            {/* 3ヶ月: オレンジ */}
          </li>
        </ul>
      </div>

      {/* デザインツール */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          デザインツール
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="p-4 rounded-lg shadow bg-white">
            Adobe Photoshop{" "}
            <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              5年
            </span>{" "}
            {/* 5年: 青 */}
          </li>
          <li className="p-4 rounded-lg shadow bg-white">
            Adobe Illustrator{" "}
            <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              5年
            </span>{" "}
            {/* 5年: 青 */}
          </li>
          <li className="p-4 rounded-lg shadow bg-white">
            Adobe Premiere Pro{" "}
            <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">
              2年
            </span>{" "}
            {/* 2年: 緑 */}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;