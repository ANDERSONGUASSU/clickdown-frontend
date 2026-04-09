"use client";

import { Input } from "@heroui/react";
import { FiMail } from "react-icons/fi";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <div className="space-y-1.5 flex flex-col">
      <label
        htmlFor="email"
        className="text-xs font-semibold uppercase tracking-[0.05em] text-gray-500 dark:text-gray-400"
      >
        E-mail
      </label>
      <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 focus-within:border-blue-600 dark:focus-within:border-blue-500">
        <div className="[&>input]:!px-4 [&>input]:!py-3">
          <Input
            id="email"
            type="email"
            placeholder="nome@exemplo.com"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-gray-800 dark:text-gray-100"
            autoComplete="email"
          />
        </div>
        <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500/50 dark:text-gray-400/50 pointer-events-none" />
      </div>
    </div>
  );
}
