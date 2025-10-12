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
            bg-gradient-to-r from-cyan-600 to-purple-500
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
            // ProjectCardとして更にコンポーネント化可能ですが、ここではProjects内に含めます
            <div
              key={project.id}
              className="
p-5 // ★ 内側の余白 ★
        flex flex-col h-full 
        rounded-xl shadow-lg 
        bg-white dark:bg-gray-800 
        text-gray-800 dark:text-gray-200 
        
        // Skillsカードのボーダー設定
        border-2 border-transparent 
        transition-all duration-300 ease-in-out 
        cursor-pointer group 

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
              <p className="text-gray-600 mb-4 text-sm flex-grow">
                {project.description}
              </p>{" "}
              {/* flex-grow で高さを揃える */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
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
                {" "}
                {/* justify-center を追加 */}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-cyan-600 to-purple-500 text-white px-6 py-2 rounded shadow-lg transition-all duration-300 text-base font-semibold hover:from-cyan-700 hover:to-purple-600"
                  >
                    Webサイト
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-cyan-600 to-purple-500 text-white px-6 py-2 rounded shadow-lg transition-all duration-300 text-base font-semibold hover:from-cyan-700 hover:to-purple-600"
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
