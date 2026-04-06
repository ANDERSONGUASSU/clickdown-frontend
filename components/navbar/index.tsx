"use client";

import { useState } from "react";
import { Link } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { FiGithub } from "react-icons/fi";

import { useAuth } from "@/app/login/hooks/use-auth";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

import { NavbarBrand } from "./brand";
import { DesktopActions } from "./desktop-actions";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileControls } from "./mobile-controls";
import { MobileMenu } from "./mobile-menu";

function resolveNavigationItems(isAuthenticated: boolean) {
  return isAuthenticated
    ? [
        { label: "Home", href: "/" },
        { label: "Dashboard", href: "/dashboard" },
      ]
    : siteConfig.navItems;
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading, user } = useAuth();
  const navItems = resolveNavigationItems(isAuthenticated);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <header className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 rounded-full border border-black/8 bg-white/78 px-4 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#081624]/78 dark:shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:px-6">
        <div className="flex items-center gap-4">
          <NavbarBrand />
          <DesktopNavigation items={navItems} pathname={pathname} />
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            aria-label="Github"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-black/5 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/6 dark:hover:text-white"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiGithub />
          </a>
          <ThemeSwitch />
          <DesktopActions
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
            user={user}
            onDashboardPress={() => router.push("/dashboard")}
          />
        </div>

        <MobileControls
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((current) => !current)}
        />
      </header>

      {isMenuOpen ? <MobileMenu items={navItems} pathname={pathname} /> : null}
    </nav>
  );
};

export default Navbar;
