"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Braces,
  FileClock,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track usage, requests, latency, and model activity with clean real-time reporting built for AI teams.",
  },
  {
    icon: LockKeyhole,
    title: "Role-based Access",
    description:
      "Control who can view, deploy, monitor, and manage workflows with permission-based access control.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Deployment",
    description:
      "Deploy AI workflows with encrypted communication, protected API access, and secure infrastructure patterns.",
  },
  {
    icon: Braces,
    title: "API-first Architecture",
    description:
      "Connect apps, models, databases, and third-party services through flexible API-first workflows.",
  },
  {
    icon: FileClock,
    title: "AI Workflow Logs",
    description:
      "Review every workflow event, model response, data update, and system action through organized logs.",
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    description:
      "Monitor system health, uptime, response speed, and workflow performance from a single command center.",
  },
];

export default function FeatureGrid() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 md:py-28"
    >
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Core Features
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Everything teams need to build{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              production AI systems
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 md:text-lg">
            A complete frontend showcase of enterprise SaaS features, designed
            with premium spacing, animated cards, and responsive layouts.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  Learn more
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}