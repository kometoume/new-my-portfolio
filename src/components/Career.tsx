"use client";

import { motion } from "framer-motion";
import { careerEntries } from "../data/career";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const Career = () => {
  return (
    <section
      id="career"
      className="container mx-auto px-6 pt-16 pb-28 md:pt-20 md:pb-36 bg-white border-t border-black/10"
    >
      <div className="flex items-baseline gap-3 mb-16">
        <h2 className="font-heading text-2xl font-bold text-[#16161d] tracking-tight">
          Career
        </h2>
      </div>

      <div className="flex flex-col gap-20">
        {careerEntries.map((entry) => (
          <div key={entry.id}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.01 }}
              variants={fadeUp}
              className="mb-10 pb-6 border-b border-black/10 flex flex-col md:flex-row md:items-end md:justify-between gap-2"
            >
              <div>
                <h3 className="font-heading text-xl font-bold text-[#16161d]">
                  {entry.company}
                </h3>
                <p className="text-base text-black/50 mt-1">
                  {entry.department}
                </p>
              </div>
              <span className="text-sm font-mono tracking-[0.1em] text-[#e94846]">
                {entry.period}
              </span>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.01 }}
              variants={fadeUp}
              className="mb-12"
            >
              <p className="text-[#e94846] text-sm tracking-[0.1em] uppercase font-mono mb-4">
                担当業務
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[#16161d] text-base md:text-lg leading-relaxed">
                {entry.responsibilities.map((item, index) => (
                  <li key={index} className="hanging-indent">
                    ・{item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <p className="text-[#e94846] text-sm tracking-[0.1em] uppercase font-mono mb-4">
              成果・実績
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {entry.achievements.map((achievement, i) => (
                <motion.div
                  key={achievement.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.01 }}
                  variants={cardVariants}
                  transition={{ delay: (i % 2) * 0.1 }}
                  className="flex flex-col h-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#e94846] tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-mono text-black/35 tracking-[0.1em]">
                      {achievement.period}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[#16161d] mb-4">
                    {achievement.title}
                  </h4>

                  <dl className="space-y-3 text-base md:text-lg">
                    <div>
                      <dt className="text-xs tracking-[0.1em] text-black/40 uppercase font-mono mb-1">
                        概要
                      </dt>
                      <dd className="text-[#16161d] leading-relaxed">
                        {achievement.overview}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-[0.1em] text-black/40 uppercase font-mono mb-1">
                        担当業務
                      </dt>
                      <dd className="text-[#16161d] leading-relaxed">
                        {achievement.task}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-[0.1em] text-[#333d29] uppercase font-mono mb-1">
                        成果
                      </dt>
                      <dd className="text-[#16161d] font-medium leading-relaxed">
                        {achievement.result}
                      </dd>
                    </div>
                  </dl>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.01 }}
              variants={fadeUp}
            >
              <p className="text-[#e94846] text-sm tracking-[0.1em] uppercase font-mono mb-3">
                Point
              </p>
              <ul className="text-[#16161d] text-base md:text-lg space-y-1.5">
                {entry.points.map((point, index) => (
                  <li key={index} className="hanging-indent">
                    ・{point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
