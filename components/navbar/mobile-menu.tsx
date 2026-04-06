"use client";

import { Link } from "@heroui/react";
import clsx from "clsx";

import type { MobileMenuProps } from "./types";

export function MobileMenu({ items, pathname }: MobileMenuProps) {
  return (
    <div className="border-t border-separator bg-background-tertiary sm:hidden">
      <ul className="flex flex-col gap-2 px-4 pb-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className={clsx(
                "block rounded-2xl px-3 py-2 text-base font-medium no-underline transition-colors",
                pathname === item.href
                  ? "bg-black/6 text-slate-950 dark:bg-white/10 dark:text-white"
                  : "text-slate-700 hover:bg-black/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/6 dark:hover:text-white",
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
