"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Daniel Carter",
    role: "CTO at NovaCloud",
    quote:
      "NeuralStack gave our team a faster way to launch AI workflows without building every infrastructure layer from scratch. The dashboard experience feels incredibly polished.",
  },
  {
    name: "Sophia Reynolds",
    role: "Product Lead at ScaleMind",
    quote:
      "The platform makes complex automation feel simple. We were able to connect data sources, monitor workflows, and ship AI features much faster.",
  },
  {
    name: "Marcus Lee",
    role: "Operations Manager at DataForge",
    quote:
      "Security, visibility, and workflow monitoring are all in one place. It helped our operations team manage AI processes with more confidence.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22d3ee10,transparent_45%)]" />
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Testimonials
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Loved by teams building{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              intelligent systems
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 md:text-lg">
            A social-proof section designed for a premium SaaS landing page,
            using animated cards, trust signals, and clean visual hierarchy.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{
                y: -12,
                rotateX: 4,
                rotateY: index === 1 ? 0 : index === 0 ? -4 : 4,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/[0.07]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

              <div className="mb-7 flex items-center justify-between">
                <div className="flex gap-1 text-cyan-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={17} fill="currentColor" />
                  ))}
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                  <Quote size={22} />
                </div>
              </div>

              <p className="min-h-[168px] leading-8 text-gray-300">
                “{item.quote}”
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-400/40 via-white/10 to-transparent" />

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-lg font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl"
        >
          <p className="text-sm text-gray-400">
            Trusted across AI teams, SaaS founders, product teams, and
            automation-first businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}