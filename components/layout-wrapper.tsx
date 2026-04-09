"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/" || pathname === "/login" || pathname === "/register";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <div className={isAuthPage ? "" : "mx-auto flex w-full max-w-7xl flex-1 px-5 pb-10 pt-24 sm:px-6 lg:px-8"}>
        {children}
      </div>
      {!isAuthPage && (
        <footer className="mx-auto w-full flex items-center justify-center py-3 max-w-7xl gap-4 border-t border-black/10 dark:border-white/10 text-sm text-slate-500">
          <div className="text-center">
            <p className="text-accent">ClikDown</p>
            <span>{new Date().getFullYear()}</span>
          </div>
        </footer>
      )}
    </>
  );
}
