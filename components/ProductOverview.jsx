"use client";

import { motion } from "framer-motion";
import { BrainCircuit, DatabaseZap, ShieldCheck } from "lucide-react";

const products = [
  {
    icon: BrainCircuit,
    title: "AI Model Orchestration",
    description:
      "Deploy, manage, and monitor multiple AI models from one intelligent control layer built for production teams.",
    points: ["Model routing", "Version control", "Smart scaling"],
  },
  {
    icon: DatabaseZap,
    title: "Data Pipeline Automation",
    description:
      "Connect data sources, automate processing, and move clean information into your AI workflows with confidence.",
    points: ["Automated triggers", "Data validation", "Live processing"],
  },
  {
    icon: ShieldCheck,
    title: "Secure API Integrations",
    description:
      "Build secure API-first workflows with encrypted communication, access control, and enterprise-ready reliability.",
    points: ["API security", "Access control", "Encrypted requests"],
  },
];

export default function ProductOverview() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 md:py-28"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Product Overview
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            One Platform for{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              AI Workflows
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 md:text-lg">
            NeuralStack gives teams the infrastructure layer they need to build,
            automate, monitor, and scale AI-powered operations without
            unnecessary complexity.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {products.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

                <div className="mb-8 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-white">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>

                <div className="mt-8 space-y-3">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-400/40 via-white/10 to-transparent" />

                <button className="mt-6 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                  Explore capability →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}