"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#050816] px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:56px_56px] sm:bg-[size:80px_80px]" />

      {/* Glow Effects */}
      <div className="absolute left-1/2 top-32 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[90px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
      <div className="absolute right-0 top-48 h-[220px] w-[220px] rounded-full bg-violet-500/20 blur-[90px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:min-h-screen lg:grid-cols-2">
        {/* Left Content */}
        <div className="w-full min-w-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex max-w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-cyan-200 backdrop-blur sm:text-sm"
          >
            AI Infrastructure for modern teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto max-w-4xl text-[32px] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl"
          >
            AI Infrastructure for{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Enterprise Scale
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0"
          >
            Deploy intelligent automation, data pipelines, and AI workflows with
            speed, security, and control.
          </motion.p>

          {/* Updated Small Inline Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 flex w-full max-w-sm items-center justify-center gap-3 lg:mx-0"
          >
            <a
              href="#contact"
              className="group inline-flex flex-1 items-center justify-center rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-[#050816] transition hover:bg-cyan-300"
            >
              Start Building
              <ArrowRight
                className="ml-1.5 transition group-hover:translate-x-1"
                size={16}
              />
            </a>

            <a
              href="#platform"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <PlayCircle className="mr-1.5" size={16} />
              View Platform
            </a>
          </motion.div>
        </div>

        {/* Right Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative w-full min-w-0 max-w-full"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-2xl sm:-inset-6" />

          <div className="relative w-full max-w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-4">
            <div className="rounded-[1.2rem] border border-white/10 bg-[#08111f] p-4 sm:rounded-[1.5rem] sm:p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 sm:text-sm">
                    Workflow Health
                  </p>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    98.7%
                  </h3>
                </div>

                <div className="shrink-0 rounded-full bg-emerald-400/10 px-3 py-2 text-xs text-emerald-300 sm:px-4 sm:text-sm">
                  Live
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                <DashboardCard title="Models" value="24" />
                <DashboardCard title="Pipelines" value="128" />
                <DashboardCard title="Latency" value="120ms" />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:mt-6">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-gray-300">Model Usage</p>
                  <p className="text-sm text-cyan-300">+32%</p>
                </div>

                <div className="flex h-32 items-end gap-2 sm:h-40 sm:gap-3">
                  {[45, 70, 50, 88, 64, 95, 78, 100].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + index * 0.08,
                      }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 to-violet-400"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 space-y-3 sm:mt-6">
                <Activity text="Data pipeline completed successfully" />
                <Activity text="New model version deployed" />
                <Activity text="Security scan passed" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs text-gray-400 sm:text-sm">{title}</p>
      <h4 className="mt-2 text-xl font-bold text-white sm:text-2xl">
        {value}
      </h4>
    </div>
  );
}

function Activity({ text }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 sm:px-4">
      <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
      <p className="min-w-0 text-xs text-gray-300 sm:text-sm">{text}</p>
    </div>
  );
}