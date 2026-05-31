"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22d3ee18,transparent_45%)]" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] px-6 py-16 text-center shadow-2xl backdrop-blur-xl md:px-12 md:py-24"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-dashed border-cyan-400/20"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-dashed border-violet-400/20"
        />

        <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_60px_rgba(34,211,238,0.25)]">
          <Sparkles size={30} />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 mx-auto mt-8 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl"
        >
          Build AI Workflows{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Without Complexity
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg"
        >
          Launch scalable AI infrastructure with a frontend experience built for
          speed, trust, clarity, and premium SaaS presentation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#"
            className="group inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#050816] transition hover:bg-cyan-300"
          >
            Start Your Project
            <ArrowRight
              className="ml-2 transition group-hover:translate-x-1"
              size={20}
            />
          </a>

          <a
            href="#dashboard"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            View Dashboard
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}