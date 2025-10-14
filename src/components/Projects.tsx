import Image from "next/image";
import { projects, Project } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-16 bg-white  border-gray-200"
    >
      <h2
        className="
            text-4xl font-bold mb-8 text-center
            // ★ 文字グラデーション追加 ★
            bg-clip-text
            text-transparent
            bg-gradient-to-r from-sky-500 to-fuchsia-500
          "
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* projects.ts から読み込んだデータを map でループ処理 */}
        {projects.map(
          (
            project: Project // Project 型を明示的に指定
          ) => (
            <div
              key={project.id}
              className="
                p-5 // ★ 内側の余白 ★
                flex flex-col h-full // 親要素の高さを合わせ、子要素を縦方向に配置
                rounded-xl shadow-lg 
                bg-white
                text-gray-800 
                
                // Skillsカードのボーダー設定
                border-2 border-transparent 
                transition-all duration-300 ease-in-out 

                // ★ ホバー効果追加 ★
                hover:shadow-2xl hover:border-sky-500 
    "
            >
              {project.image && ( // 画像がある場合のみ表示
                <div
                  className="mb-4 relative overflow-hidden rounded-md"
                  style={{ paddingTop: "56.25%" /* 16:9 のアスペクト比 */ }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill // 親要素に合わせて画像を埋める
                    style={{ objectFit: "cover" }} // 画像がはみ出さないように調整
                    className="rounded-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // レスポンシブ画像最適化のため
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      bg-indigo-100/80  backdrop-blur-sm 
                      
                      text-indigo-700 
                      
                      text-xs font-semibold 
                      px-2.5 py-0.5 rounded-full 
                      
                      // 立体感とホバー効果を維持
                      shadow-md 
                      transition duration-200 hover:opacity-90
                    "
                  >
                    {tech} 
                  </span>
                ))}
              </div>
              <p className="text-gray-700 font-medium mb-3">ポイント:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                {project.points.map((point, index) => (
                  <li key={index} className="hanging-indent">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-2 justify-center">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-block
                      bg-cyan-500 backdrop-blur-sm 
                      text-white 
                      px-6 py-2 rounded shadow-lg 
                      transition-all duration-300 text-base font-semibold 
                      hover:bg-cyan-200/90 hover:text-cyan-600 hover:shadow-xl
                    `}
                  >
                    Webサイト
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-block
                      
                      // ★★★ 通常時: 濃い半透明の背景と白文字 ★★★
                      bg-purple-500 backdrop-blur-sm 
                      text-white 
                      
                      px-6 py-2 rounded shadow-lg 
                      transition-all duration-300 text-base font-semibold 
                      
                      // ★★★ ホバー時: 薄い背景、濃い文字に変更 ★★★
                      hover:bg-purple-200/90 hover:text-purple-900 hover:shadow-xl
                    `}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
