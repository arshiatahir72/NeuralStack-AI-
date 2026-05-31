"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cable,
  Workflow,
  Activity,
  ShieldCheck,
  Database,
  Zap,
  Lock,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Cable,
    title: "Connect your data",
    description:
      "Bring together APIs, databases, product events, and external tools into one secure AI-ready infrastructure layer.",
    visualTitle: "Unified Data Layer",
    visualSubtitle: "12 sources connected",
    items: ["PostgreSQL", "MongoDB", "AWS S3", "OpenAI API"],
  },
  {
    icon: Workflow,
    title: "Automate workflows",
    description:
      "Create smart AI workflows that process data, trigger actions, and reduce manual operational work across your team.",
    visualTitle: "Workflow Automation",
    visualSubtitle: "48 active workflows",
    items: ["Lead scoring", "Report generation", "Data sync", "AI routing"],
  },
  {
    icon: Activity,
    title: "Monitor performance",
    description:
      "Track response time, usage, errors, and model performance through a clean real-time monitoring experience.",
    visualTitle: "Live Monitoring",
    visualSubtitle: "99.9% uptime",
    items: ["Latency", "Requests", "Errors", "Model usage"],
  },
  {
    icon: ShieldCheck,
    title: "Scale securely",
    description:
      "Protect every workflow with access control, encrypted API communication, audit logs, and secure deployment patterns.",
    visualTitle: "Enterprise Security",
    visualSubtitle: "Audit-ready controls",
    items: ["RBAC", "Encryption", "Audit logs", "API keys"],
  },
];

export default function ScrollStory() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          gsap.to(progressRef.current, {
            height: `${self.progress * 100}%`,
            duration: 0.2,
            ease: "none",
          });

          const nextStep = Math.min(
            steps.length - 1,
            Math.floor(self.progress * steps.length)
          );

          setActiveStep(nextStep);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 md:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#22d3ee0a,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Sticky Left Side */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300"
            >
              Workflow Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-xl text-3xl font-bold tracking-tight md:text-5xl"
            >
              From raw data to{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                scalable AI automation
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg"
            >
              NeuralStack turns disconnected tools into production-ready AI
              systems with a smooth workflow from connection to secure scale.
            </motion.p>

            <div className="mt-12 flex gap-6">
              {/* Progress Line */}
              <div className="relative hidden w-px bg-white/10 md:block">
                <div
                  ref={progressRef}
                  className="absolute left-0 top-0 w-px bg-gradient-to-b from-cyan-300 to-violet-400"
                  style={{ height: "0%" }}
                />
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === index;

                  return (
                    <div
                      key={step.title}
                      className={`flex gap-4 rounded-3xl border p-4 transition duration-300 ${
                        isActive
                          ? "border-cyan-400/40 bg-cyan-400/10"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition ${
                          isActive
                            ? "bg-cyan-400 text-[#050816]"
                            : "bg-white/[0.06] text-gray-400"
                        }`}
                      >
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3
                          className={`font-semibold ${
                            isActive ? "text-white" : "text-gray-300"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side Visuals */}
          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7 }}
                  className="min-h-[460px] rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Icon size={26} />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">
                          {step.visualTitle}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {step.visualSubtitle}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                      Active
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {step.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: itemIndex * 0.08,
                        }}
                        className="rounded-3xl border border-white/10 bg-[#08111f] p-5"
                      >
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-300">
                          {itemIndex === 0 && <Database size={20} />}
                          {itemIndex === 1 && <Zap size={20} />}
                          {itemIndex === 2 && <BarChart3 size={20} />}
                          {itemIndex === 3 && <Lock size={20} />}
                        </div>

                        <h4 className="font-semibold text-white">{item}</h4>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          Connected and monitored inside the AI workflow system.
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-3xl border border-white/10 bg-[#08111f] p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-300">
                        Workflow Progress
                      </p>
                      <p className="text-sm text-cyan-300">
                        {[92, 84, 98, 95][index]}%
                      </p>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${[92, 84, 98, 95][index]}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}