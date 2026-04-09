"use client";

import { useState } from "react";
import { Link } from "@heroui/react";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { UsernameInput } from "@/app/register/components";
import { SocialLoginButton } from "./SocialLoginButton";
import { LoginHeader } from "./LoginHeader";
import { AuthTabs } from "./AuthTabs";

interface LoginFormProps {
  activeTab: "login" | "register";
  onTabChange: (tab: "login" | "register") => void;
}

export function LoginForm({ activeTab, onTabChange }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState<{ password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <LoginHeader />

      <AuthTabs activeTab={activeTab} onTabChange={onTabChange} />

      <form onSubmit={handleSubmit} className="space-y-6">
        <EmailInput value={email} onChange={setEmail} />

        {activeTab === "register" && (
          <UsernameInput value={username} onChange={setUsername} />
        )}

        <PasswordInput
          value={password}
          onChange={setPassword}
          error={errors.password}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
        />

        <div className="pt-4">
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 py-3.5 font-bold uppercase tracking-[0.025em] text-white shadow-[0_4px_6px_-4px_rgba(37,99,235,0.3),0_10px_15px_-3px_rgba(37,99,235,0.3)] dark:shadow-[0_4px_6px_-4px_rgba(59,130,246,0.4),0_10px_15px_-3px_rgba(59,130,246,0.4)] transition-all hover:opacity-95 active:scale-[0.98]"
          >
            {activeTab === "login" ? "Entrar" : "Criar conta"}
          </button>
        </div>

        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
          <span className="text-xs font-medium text-gray-500/50 dark:text-gray-400/50">
            OU
          </span>
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
        </div>

        <SocialLoginButton />

        <div className="mt-8 text-center">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Não tem uma conta?{" "}
            <Link
              href="#"
              onClick={() => onTabChange(activeTab === "login" ? "register" : "login")}
              className="text-gray-500 underline transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
            >
              Criar conta agora
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
