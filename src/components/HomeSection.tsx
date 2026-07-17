"use client";

import React from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { MoveDirection, OutMode } from "@tsparticles/engine";

const useClock = () => {
  const [now, setNow] = React.useState<Date | null>(null);

  React.useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  if (!now) return { time: "", greeting: "" };

  const hours = now.getHours();
  const time = now.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  let greeting = "Good Evening";
  if (hours >= 5 && hours < 12) greeting = "Good Morning";
  else if (hours >= 12 && hours < 18) greeting = "Good Afternoon";

  return { time, greeting };
};

const HomeSection = () => {
  const [init, setInit] = React.useState(false);
  const { time, greeting } = useClock();

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 背景を彩る大きめの丸（メインビジュアル）
  const bubblesOptions = {
    fullScreen: {
      enable: false,
    },
    background: {
      color: { value: "transparent" },
    },
    particles: {
      number: {
        value: 26,
      },
      color: {
        value: ["#333d29", "#e94846", "#f2c14e"],
      },
      shape: {
        type: "circle" as const,
      },
      opacity: {
        value: { min: 0.12, max: 0.32 },
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.08,
          sync: false,
        },
      },
      size: {
        value: { min: 24, max: 120 },
        anim: {
          enable: true,
          speed: 2,
          size_min: 20,
          sync: false,
        },
      },
      links: {
        enable: false,
      },
      move: {
        direction: "none" as MoveDirection,
        enable: true,
        random: true,
        speed: 0.6,
        straight: false,
        outModes: {
          default: "out" as OutMode,
        },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: { enable: true },
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 6 },
      },
    },
    fpsLimit: 60,
  };

  // 手前に舞う小さな粒（奥行き用）
  const dustOptions = {
    fullScreen: {
      enable: false,
    },
    background: {
      color: { value: "transparent" },
    },
    particles: {
      number: {
        value: 90,
      },
      color: {
        value: ["#333d29", "#e94846"],
      },
      shape: {
        type: "circle" as const,
      },
      opacity: {
        value: { min: 0.15, max: 0.55 },
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.5, max: 2.4 },
      },
      links: {
        enable: false,
      },
      move: {
        direction: "none" as MoveDirection,
        enable: true,
        random: true,
        speed: 0.25,
        straight: false,
        outModes: {
          default: "out" as OutMode,
        },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
    fpsLimit: 60,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[65vh] text-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,90,254,0.10),_transparent_60%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,122,41,0.10),_transparent_55%)]" />

      {init && (
        <>
          <Particles
            className="absolute inset-0 z-[1]"
            id="tsparticles-bubbles"
            options={bubblesOptions}
          />
          <Particles
            className="absolute inset-0 z-[1]"
            id="tsparticles-dust"
            options={dustOptions}
          />
        </>
      )}

      <motion.div
        className="relative z-10 w-full px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-heading text-gradient text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl font-bold tracking-tight mb-6"
          variants={itemVariants}
        >
          Michie Yagi
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-black/40 uppercase">
          Scroll
        </span>
        <span className="w-px h-10 bg-gradient-to-b from-[#333d29] to-transparent" />
      </motion.div>
    </section>
  );
};

export default HomeSection;
