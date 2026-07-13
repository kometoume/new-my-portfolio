"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaWordpressSimple,
  FaGitAlt,
  FaPalette,
  FaCode,
  FaServer,
  FaDatabase,
  FaBullhorn,
  FaHashtag,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSass,
  SiNodedotjs,
  SiPhp,
  SiFirebase,
  SiWix,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiTailwindcss,
  SiFigma,
  SiHubspot,
} from "react-icons/si";

const skillCategories = [
  {
    title: "フロントエンド開発",
    icon: <FaCode />,
    skills: [
      {
        name: "HTML / CSS / JavaScript",
        months: 60,
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "React / Next.js",
        months: 1,
        icon: <FaReact className="text-sky-400" />,
      },
      {
        name: "TypeScript",
        months: 1,
        icon: <SiTypescript className="text-blue-400" />,
      },
      {
        name: "Tailwind CSS",
        months: 3,
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "Sass", months: 1, icon: <SiSass className="text-pink-400" /> },
    ],
  },
  {
    title: "CMS / Webサイト制作ツール",
    icon: <FaDatabase />,
    skills: [
      {
        name: "WordPress",
        months: 3,
        icon: <FaWordpressSimple className="text-slate-300" />,
      },
      { name: "Wix", months: 7, icon: <SiWix className="text-yellow-400" /> },
    ],
  },
  {
    title: "バックエンド開発",
    icon: <FaServer />,
    skills: [
      { name: "PHP", months: 12, icon: <SiPhp className="text-indigo-400" /> },
      {
        name: "Node.js",
        months: 1,
        icon: <SiNodedotjs className="text-green-400" />,
      },
      {
        name: "Firebase",
        months: 1,
        icon: <SiFirebase className="text-amber-400" />,
      },
    ],
  },
  {
    title: "マーケティング運用",
    icon: <FaBullhorn />,
    skills: [
      {
        name: "Hubspot",
        months: 7,
        icon: <SiHubspot className="text-orange-500" />,
      },
      {
        name: "SNS運用",
        months: 7,
        icon: <FaHashtag className="text-rose-400" />,
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
        icon: <FaGitAlt className="text-orange-500" />,
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
        icon: <SiAdobephotoshop className="text-blue-500" />,
      },
      {
        name: "Adobe Illustrator",
        months: 60,
        icon: <SiAdobeillustrator className="text-orange-400" />,
      },
      {
        name: "Adobe Premiere Pro",
        months: 24,
        icon: <SiAdobepremierepro className="text-purple-400" />,
      },
      { name: "Figma", months: 7, icon: <SiFigma className="text-fuchsia-400" /> },
    ],
  },
];

const getDurationLabel = (months: number) => {
  if (months >= 12) return `${Math.floor(months / 12)}年`;
  if (months > 0) return `${months}ヶ月`;
  return "New";
};

const getDurationBadgeClass = (months: number) => {
  if (months >= 36) return "bg-[#e94846]/10 text-[#e94846]";
  if (months >= 12) return "bg-[#333d29]/10 text-[#333d29]";
  return "bg-black/5 text-black/55";
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 pt-16 pb-28 md:pt-20 md:pb-36 bg-white border-t border-black/10"
    >
      <div className="container mx-auto">
        <div className="flex items-baseline gap-3 mb-16">
          <h2 className="font-heading text-2xl font-bold text-[#16161d] tracking-tight">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <h3 className="font-heading flex items-center gap-3 text-sm tracking-[0.1em] uppercase text-black/70 mb-6 pb-3 border-b border-black/10">
                <span className="text-[10px] text-[#e94846] font-mono">
                  0{ci + 1}
                </span>
                {category.title}
              </h3>

              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-black/15 text-black/70 text-sm transition-all duration-300"
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                    <span
                      className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full ${getDurationBadgeClass(
                        skill.months
                      )}`}
                    >
                      {getDurationLabel(skill.months)}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
