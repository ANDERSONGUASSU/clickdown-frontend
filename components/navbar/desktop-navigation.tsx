"use client";

import { Link } from "@heroui/react";
import clsx from "clsx";

import type { DesktopNavigationProps } from "./types";

export function DesktopNavigation({
  items,
  pathname,
}: DesktopNavigationProps) {
  return (
    <ul className="ml-2 hidden gap-2 lg:flex">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors no-underline",
              "text-slate-700 hover:bg-black/5 hover:text-slate-950",
              "dark:text-slate-300 dark:hover:bg-white/6 dark:hover:text-white",
              pathname === item.href &&
                "bg-black/6 text-slate-950 dark:bg-white/10 dark:text-white",
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
