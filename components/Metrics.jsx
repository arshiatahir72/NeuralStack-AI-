"use client";

import { motion } from "framer-motion";
import { Activity, Gauge, Rocket, Server } from "lucide-react";

const metrics = [
  {
    icon: Server,
    value: "99.9%",
    label: "Platform uptime",
  },
  {
    icon: Rocket,
    value: "4x",
    label: "Faster deployment",
  },
  {
    icon: Gauge,
    value: "120ms",
    label: "Average response",
  },
  {
    icon: Activity,
    value: "10M+",
    label: "API requests processed",
  },
];

const logos = ["NovaAI", "CloudOps", "DataForge", "AutoPilot", "ScaleMind"];

export default function Metrics() {
  return (
    <section id="metrics" className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Trusted by modern AI teams
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Built for speed, scale, and reliability
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            NeuralStack helps teams deploy AI workflows faster with real-time
            monitoring, secure infrastructure, and enterprise-grade performance.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <div className="mb-7 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 transition group-hover:scale-110">
                  <Icon size={24} />
                </div>

                <h3 className="text-4xl font-bold text-white md:text-5xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm text-gray-400">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl"
        >
          <p className="text-center text-sm uppercase tracking-[0.25em] text-gray-500">
            Integrated by teams building the future
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-gray-300"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}