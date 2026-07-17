"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-6 pt-16 pb-28 md:pt-20 md:pb-36 bg-white border-t border-black/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-16">
        <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-2">
          <h2 className="font-heading text-2xl font-bold text-[#16161d] tracking-tight">
            About Me
          </h2>
        </div>

        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }}
            variants={fadeUp}
            className="text-base md:text-lg leading-loose mb-8"
          >
            はじめまして。八木美智惠と申します。大学院修了後、美術教員および教育機関の助手として教育現場で経験を積みました。その後、職業訓練校での学びを経て、正社員のWebデザイナー・コーダーとして5年間、フルリモート環境下でWeb制作業務に従事しました。現在はインハウスデザイナーとして、販促物制作やWebサイト制作(Wix等)、SNS、動画編集、業務効率化まで幅広く担当しており、Claude
            CodeやChatGPTなどのAIツールを積極的に活用して業務のスピードと質の向上に努めています。
          </motion.p>

          <div className="border-t border-black/10 pt-8">
            <h3 className="text-xs tracking-[0.2em] text-[#e94846] uppercase font-mono mb-4">
              今後の目標
            </h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.01 }}
              variants={fadeUp}
              className="text-base md:text-lg leading-loose"
            >
              現在はデザイン制作に加えて、SNS運用やGoogle広告運用などマーケティング領域の業務にも携わっています。今後はこれまで培ってきたデザイン・コーディングのスキルを土台にしながら、マーケティングやSNS運用の知識・経験をさらに深めていきたいと考えています。また、Claude
              CodeやChatGPTなどのAIツールを積極的に活用して業務効率化を進めながら、特定の業務にとどまらずマーケティング全体を俯瞰して動ける人材として成長していきたいと考えています。
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
