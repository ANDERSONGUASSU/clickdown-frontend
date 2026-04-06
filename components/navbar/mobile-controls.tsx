"use client";

import { FiGithub } from "react-icons/fi";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import type { MobileControlsProps } from "./types";

export function MobileControls({
  isMenuOpen,
  onToggleMenu,
}: MobileControlsProps) {
  return (
    <div className="flex items-center gap-2 sm:hidden">
      <a
        aria-label="Github"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/6"
        href={siteConfig.links.github}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FiGithub />
      </a>
      <ThemeSwitch />
      <button
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-800 transition hover:bg-black/5 dark:text-white dark:hover:bg-white/6"
        onClick={onToggleMenu}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          ) : (
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          )}
        </svg>
      </button>
    </div>
  );
}
