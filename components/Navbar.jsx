"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Platform", href: "#platform" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed left-0 top-0 z-[100] w-full max-w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
          <a href="#" className="text-lg font-bold tracking-tight text-white sm:text-xl">
            NeuralStack<span className="text-cyan-400">AI</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-[#050816] md:inline-flex"
          >
            Start Building
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[120] text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-[#050816]/85 backdrop-blur-xl md:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22d3ee20,transparent_45%)]" />

          <div className="relative z-[95] mx-auto mt-24 w-full max-w-sm px-4">
            <div className="rounded-[2rem] border border-white/10 bg-[#050816]/90 p-5 shadow-2xl">
              <div className="flex flex-col gap-4 text-sm text-gray-300">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center transition hover:border-cyan-400/40 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-cyan-400 px-4 py-4 text-center font-semibold text-[#050816] transition hover:bg-cyan-300"
                >
                  Start Building
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}