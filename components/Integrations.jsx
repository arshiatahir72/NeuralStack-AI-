"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Database,
  CreditCard,
  MessageSquare,
  Server,
  Triangle,
  Workflow,
} from "lucide-react";

const integrations = [
  {
    name: "OpenAI",
    icon: Bot,
  },
  {
    name: "AWS",
    icon: Cloud,
  },
  {
    name: "MongoDB",
    icon: Database,
  },
  {
    name: "Stripe",
    icon: CreditCard,
  },
  {
    name: "Slack",
    icon: MessageSquare,
  },
  {
    name: "Supabase",
    icon: Server,
  },
  {
    name: "Vercel",
    icon: Triangle,
  },
  {
    name: "Zapier",
    icon: Workflow,
  },
];

const marqueeItems = [...integrations, ...integrations];

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#8b5cf614,transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Integrations
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Connect with your{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              existing stack
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 md:text-lg">
            NeuralStack connects with your favorite AI tools, cloud platforms,
            databases, payment systems, and team communication apps.
          </p>
        </motion.div>

        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] py-8 backdrop-blur-xl">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#050816] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#050816] to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-5"
          >
            {marqueeItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.name}-${index}`}
                  className="group flex min-w-[190px] items-center gap-4 rounded-2xl border border-white/10 bg-[#08111f] px-6 py-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <span className="font-semibold text-gray-200">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <p className="text-sm text-cyan-300">01</p>
            <h3 className="mt-4 text-xl font-bold">Connect APIs</h3>
            <p className="mt-3 leading-7 text-gray-400">
              Link your existing tools, databases, and AI services through clean
              API-first connections.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <p className="text-sm text-cyan-300">02</p>
            <h3 className="mt-4 text-xl font-bold">Automate Events</h3>
            <p className="mt-3 leading-7 text-gray-400">
              Trigger workflows from form submissions, app events, webhooks,
              messages, and backend processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <p className="text-sm text-cyan-300">03</p>
            <h3 className="mt-4 text-xl font-bold">Scale Workflows</h3>
            <p className="mt-3 leading-7 text-gray-400">
              Run AI operations across multiple services while keeping
              performance, security, and monitoring in one place.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}