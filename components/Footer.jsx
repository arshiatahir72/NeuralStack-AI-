"use client";

import { Mail } from "lucide-react";

function GitHubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.38 8h4.24v15H.38V8ZM8.1 8h4.06v2.05h.06c.57-1.08 1.96-2.22 4.03-2.22 4.31 0 5.1 2.84 5.1 6.53V23h-4.24v-7.65c0-1.82-.03-4.17-2.54-4.17-2.55 0-2.94 1.99-2.94 4.04V23H8.1V8Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            NeuralStack<span className="text-cyan-400">AI</span>
          </a>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
            Premium animated AI SaaS landing page built with Next.js, Tailwind
            CSS, Framer Motion, and GSAP.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>

          <a
            href="mailto:hello@neuralstack.ai"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>© 2026 NeuralStack AI. All rights reserved.</p>

        <div className="flex gap-5">
          <a href="#" className="transition hover:text-gray-300">
            Privacy
          </a>
          <a href="#" className="transition hover:text-gray-300">
            Terms
          </a>
          <a href="#" className="transition hover:text-gray-300">
            Security
          </a>
        </div>
      </div>
    </footer>
  );
}