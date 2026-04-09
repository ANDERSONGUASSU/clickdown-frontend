"use client";

import { Input } from "@heroui/react";
import { FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  showPassword: boolean;
  onTogglePassword: () => void;
}

export function PasswordInput({
  value,
  onChange,
  error,
  showPassword,
  onTogglePassword,
}: PasswordInputProps) {
  return (
    <div className="space-y-1.5 flex flex-col">
      <label
        htmlFor="password"
        className="text-xs font-semibold uppercase tracking-[0.05em] text-gray-500 dark:text-gray-400"
      >
        Senha
      </label>
      <div
        className={`relative bg-white dark:bg-gray-900 border rounded-lg hover:border-gray-400 dark:hover:border-gray-600 focus-within:border-blue-600 dark:focus-within:border-blue-500 ${
          error
            ? "border-rose-400 dark:border-rose-500"
            : "border-gray-300 dark:border-gray-700"
        }`}
      >
        <div className="[&>input]:!px-4 [&>input]:!py-3">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-gray-800 dark:text-gray-100"
            autoComplete={showPassword ? "off" : "current-password"}
          />
        </div>
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
        >
          {showPassword ? (
            <FiEyeOff
              className={`h-4 w-4 ${
                error
                  ? "text-rose-700 dark:text-rose-400"
                  : "text-gray-500/50 dark:text-gray-400/50"
              }`}
            />
          ) : (
            <FiEye
              className={`h-4 w-4 ${
                error
                  ? "text-rose-700 dark:text-rose-400"
                  : "text-gray-500/50 dark:text-gray-400/50"
              }`}
            />
          )}
        </button>
      </div>
      {error && (
        <div className="flex items-center gap-1 text-xs text-rose-700 dark:text-rose-400">
          <FiAlertCircle className="h-3.5 w-3.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
