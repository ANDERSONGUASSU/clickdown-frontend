"use client";

import { useState } from "react";
import { AuthLayout, PageFooter } from "./components";
import { LoginForm } from "./login/components";
import { ThemeSwitch } from "@/components/theme-switch";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <>
      <div className="fixed top-6 right-6 z-50">
        <ThemeSwitch />
      </div>
      <AuthLayout>
        <LoginForm activeTab={activeTab} onTabChange={setActiveTab} />
      </AuthLayout>
      <PageFooter />
    </>
  );
}
