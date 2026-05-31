"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  Gauge,
  Layers,
  LineChart,
  Lock,
  Server,
} from "lucide-react";

const sidebarItems = [
  { icon: BarChart3, label: "Overview", active: true },
  { icon: Bot, label: "Models" },
  { icon: Database, label: "Pipelines" },
  { icon: Lock, label: "Security" },
];

const stats = [
  {
    icon: Activity,
    title: "Active Workflows",
    value: "248",
    change: "+18%",
  },
  {
    icon: Gauge,
    title: "Avg. Latency",
    value: "120ms",
    change: "-24%",
  },
  {
    icon: Server,
    title: "API Requests",
    value: "10.8M",
    change: "+42%",
  },
];

const activities = [
  "AI workflow deployed to production",
  "Data validation completed successfully",
  "Model version v2.8 promoted",
  "Security policy check passed",
];

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative w-full max-w-full overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22d3ee14,transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]">
            Dashboard Preview
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Monitor AI Operations from{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              One Command Center
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
            Track workflow health, model usage, API performance, and security
            events through a clean real-time dashboard interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mt-12 w-full max-w-full md:mt-16"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-2xl sm:-inset-6 sm:rounded-[2.5rem] sm:blur-3xl" />

          <div className="relative w-full max-w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-xl sm:rounded-[2rem]">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
              <div className="flex shrink-0 items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 sm:h-3 sm:w-3" />
              </div>

              <div className="hidden min-w-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300 sm:block">
                app.neuralstack.ai/dashboard
              </div>

              <div className="shrink-0 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300 sm:px-4 sm:py-2 sm:text-sm">
                Live
              </div>
            </div>

            <div className="grid min-h-[520px] lg:min-h-[650px] lg:grid-cols-[260px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 bg-black/20 p-5 lg:block">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-[#050816]">
                    <Layers size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold">NeuralStack</h3>
                    <p className="text-xs text-gray-500">Enterprise Cloud</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                          item.active
                            ? "bg-cyan-400/10 text-cyan-300"
                            : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        <Icon size={18} />
                        {item.label}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                  <p className="text-sm font-semibold text-cyan-200">
                    System Health
                  </p>
                  <h4 className="mt-3 text-3xl font-bold text-white">98.7%</h4>
                  <p className="mt-2 text-xs leading-5 text-gray-400">
                    All services are running with stable performance.
                  </p>
                </div>
              </aside>

              {/* Main Dashboard */}
              <div className="min-w-0 p-4 md:p-8">
                <div className="flex min-w-0 flex-col justify-between gap-5 md:flex-row md:items-center">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
                      AI Workflow Overview
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
                      Real-time performance across models, pipelines, and APIs.
                    </p>
                  </div>

                  <button className="w-full rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 sm:w-fit">
                    Generate Report
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-8 lg:grid-cols-3">
                  {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                            <Icon size={22} />
                          </div>

                          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                            {item.change}
                          </span>
                        </div>

                        <p className="mt-5 text-sm text-gray-400">
                          {item.title}
                        </p>
                        <h4 className="mt-2 text-2xl font-bold sm:text-3xl">
                          {item.value}
                        </h4>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Chart + Activity */}
                <div className="mt-5 grid min-w-0 gap-5 xl:grid-cols-[1.4fr_0.8fr]">
                  {/* Chart Card */}
                  <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                    <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
                      <div className="min-w-0">
                        <p className="font-semibold">Model Usage</p>
                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          Last 7 days activity
                        </p>
                      </div>

                      <LineChart className="shrink-0 text-cyan-300" size={22} />
                    </div>

                    <div className="flex h-44 items-end gap-2 sm:h-56 md:h-72 md:gap-3">
                      {[42, 68, 54, 90, 72, 100, 84, 60, 88, 76, 96, 70].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.7,
                              delay: 0.15 + index * 0.05,
                            }}
                            className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 via-blue-500 to-violet-400 sm:rounded-t-xl"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Activity Card */}
                  <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                    <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
                      <div className="min-w-0">
                        <p className="font-semibold">Activity Logs</p>
                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          Latest system events
                        </p>
                      </div>

                      <Activity className="shrink-0 text-cyan-300" size={22} />
                    </div>

                    <div className="space-y-4">
                      {activities.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex min-w-0 gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                        >
                          <CheckCircle2
                            className="mt-0.5 shrink-0 text-emerald-300"
                            size={18}
                          />

                          <div className="min-w-0">
                            <p className="text-sm leading-6 text-gray-300">
                              {item}
                            </p>
                            <p className="mt-1 text-xs text-gray-600">
                              {index + 2} min ago
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Cards */}
                <div className="mt-5 grid min-w-0 gap-5 md:grid-cols-2">
                  <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                    <p className="font-semibold">Workflow Health</p>

                    <div className="mt-5 space-y-4">
                      {["Data Sync", "Model Routing", "API Gateway"].map(
                        (item, index) => (
                          <div key={item} className="min-w-0">
                            <div className="mb-2 flex items-center justify-between text-sm">
                              <span className="text-gray-400">{item}</span>
                              <span className="text-cyan-300">
                                {[96, 88, 93][index]}%
                              </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                  width: `${[96, 88, 93][index]}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.8,
                                  delay: index * 0.15,
                                }}
                                className="h-full rounded-full bg-cyan-400"
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                    <p className="font-semibold">Secure Deployment</p>

                    <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                      {["Encrypted", "Audit Logs", "RBAC", "API Keys"].map(
                        (item) => (
                          <div
                            key={item}
                            className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs text-gray-300 sm:text-sm"
                          >
                            <Lock className="mb-3 text-cyan-300" size={18} />
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}