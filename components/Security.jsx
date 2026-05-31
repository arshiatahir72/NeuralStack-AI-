"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  KeyRound,
  Lock,
  Radar,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const securityItems = [
  {
    icon: Lock,
    title: "Encrypted Data Handling",
    description:
      "Protect sensitive workflow data with encrypted communication and secure processing patterns.",
  },
  {
    icon: Radar,
    title: "Audit-ready Activity Logs",
    description:
      "Track every workflow event, access attempt, model update, and system action with clear audit logs.",
  },
  {
    icon: UserCheck,
    title: "Permission-based Access",
    description:
      "Control who can view, manage, deploy, and monitor workflows using role-based permissions.",
  },
  {
    icon: KeyRound,
    title: "Secure API Communication",
    description:
      "Keep API connections protected with authentication, access keys, and secure request handling.",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 md:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,#22d3ee0a,transparent)]" />
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300"
          >
            Enterprise Security
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Built for secure{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              enterprise teams
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg"
          >
            NeuralStack is designed with security-first workflows, protected API
            communication, audit visibility, and permission-based access for
            production AI operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {["SOC-ready", "Encrypted", "RBAC", "Audit Logs"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-gray-300"
              >
                <span className="mr-2 text-cyan-300">●</span>
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Security Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
            {/* Scanning Line */}
            <motion.div
              animate={{ y: ["-20%", "120%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/10 to-cyan-400/0"
            />

            <div className="relative z-10">
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.25)]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-44 w-44 rounded-full border border-dashed border-cyan-400/30"
                />

                <ShieldCheck className="relative z-10 text-cyan-300" size={56} />
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold">Security Control Center</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Monitor access, API communication, audit events, and security
                  posture from one clean interface.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {securityItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group rounded-3xl border border-white/10 bg-[#08111f] p-5 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
                        <Icon size={22} />
                      </div>

                      <h4 className="font-semibold text-white">{item.title}</h4>

                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-[#08111f] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Fingerprint className="text-cyan-300" size={22} />
                    <p className="font-semibold">Identity Verification</p>
                  </div>

                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Verified
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}