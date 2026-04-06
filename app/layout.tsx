import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#06131f" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(15,157,138,0.08),_transparent_28%)] dark:bg-[radial-gradient(circle_at_top,_rgba(66,214,195,0.08),_transparent_28%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(15,157,138,0.14),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_22%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(66,214,195,0.14),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_24%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[24rem] bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.03),_transparent_45%)] dark:bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.04),_transparent_45%)]" />
            <Navbar />
            <main className="mx-auto flex w-full max-w-7xl flex-1 px-5 pb-10 pt-24 sm:px-6 lg:px-8">
              {children}
            </main>
            <footer className="mx-auto w-full flex items-center justify-center py-3 max-w-7xl gap-4 border-t border-black/10 dark:border-white/10 text-sm text-slate-500">
              <div className="text-center">
                <p className="text-accent">ClikDown</p>
                <span>{new Date().getFullYear()}</span>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
