"use client";

interface AuthTabsProps {
  activeTab: "login" | "register";
  onTabChange: (tab: "login" | "register") => void;
}

export function AuthTabs({ activeTab, onTabChange }: AuthTabsProps) {
  return (
    <div className="mb-8 flex gap-8" role="tablist">
      <button
        role="tab"
        aria-selected={activeTab === "login"}
        onClick={() => onTabChange("login")}
        className={`pb-2 text-sm font-semibold transition-all ${
          activeTab === "login"
            ? "border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
            : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
        }`}
      >
        Entrar
      </button>
      <button
        role="tab"
        aria-selected={activeTab === "register"}
        onClick={() => onTabChange("register")}
        className={`pb-2 text-sm font-medium transition-all ${
          activeTab === "register"
            ? "border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
            : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
        }`}
      >
        Criar conta
      </button>
    </div>
  );
}
