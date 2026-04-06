"use client";

import { Avatar, Button, Link } from "@heroui/react";
import { FiGrid, FiLogIn, FiUserPlus } from "react-icons/fi";

import { LogoutButton } from "@/app/login/components/logout-button";

import type { DesktopActionsProps } from "./types";

function UserSummary({ user }: { user: DesktopActionsProps["user"] }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-black/8 bg-white/65 px-3 py-2 dark:border-white/10 dark:bg-white/6">
      <Avatar className="h-8 w-8 bg-[var(--app-accent)] text-xs text-white">
        <span>{user?.firstName?.[0] || user?.email?.[0]?.toUpperCase() || "U"}</span>
      </Avatar>
      <div className="max-w-36 overflow-hidden">
        <p className="truncate text-sm font-medium text-slate-950 dark:text-white">
          {user?.firstName || "Usuario"}
        </p>
        <p className="truncate text-xs text-slate-600 dark:text-slate-400">
          {user?.email}
        </p>
      </div>
    </div>
  );
}

function GuestActions() {
  return (
    <div className="hidden items-center gap-2 md:flex">
      <Link
        className="no-underline inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-black/5 dark:border-white/10 dark:text-slate-100 dark:hover:bg-white/6"
        href="/register"
      >
        <FiUserPlus />
        Cadastro
      </Link>
      <Link
        className="no-underline inline-flex items-center gap-2 rounded-full bg-[var(--app-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--app-accent-strong)]"
        href="/login"
      >
        <FiLogIn />
        Entrar
      </Link>
    </div>
  );
}

function AuthenticatedActions({
  user,
  onDashboardPress,
}: Pick<DesktopActionsProps, "user" | "onDashboardPress">) {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <UserSummary user={user} />
      <Button className="rounded-full" variant="secondary" onPress={onDashboardPress}>
        <span className="inline-flex items-center gap-2">
          <FiGrid />
          Painel
        </span>
      </Button>
      <LogoutButton className="rounded-full" variant="ghost" />
    </div>
  );
}

export function DesktopActions({
  isAuthenticated,
  isLoading,
  user,
  onDashboardPress,
}: DesktopActionsProps) {
  if (isLoading) {
    return null;
  }

  return isAuthenticated ? (
    <AuthenticatedActions user={user} onDashboardPress={onDashboardPress} />
  ) : (
    <GuestActions />
  );
}
