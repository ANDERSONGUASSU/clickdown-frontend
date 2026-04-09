"use client";

import { ReactNode } from "react";
import { VisualShowcase } from "./VisualShowcase";

interface AuthLayoutProps {
  children: ReactNode;
  showVisual?: boolean;
}

export function AuthLayout({ children, showVisual = true }: AuthLayoutProps) {
  return (
    <div className="flex min-h-[95vh] w-full bg-slate-50 dark:bg-gray-950">
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
        {children}
      </div>

      {showVisual && <VisualShowcase />}
    </div>
  );
}
