"use client";

import { FcGoogle } from "react-icons/fc";

interface SocialLoginButtonProps {
  label?: string;
}

export function SocialLoginButton({ label = "Google" }: SocialLoginButtonProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-lg border-0 bg-gray-200 dark:bg-gray-800 py-3.5 font-bold text-gray-800 dark:text-gray-100 transition-all hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <FcGoogle className="h-5 w-5" />
      {label}
    </button>
  );
}
