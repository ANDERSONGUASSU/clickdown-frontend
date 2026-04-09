"use client";

import { useState } from "react";
import { Input, Link } from "@heroui/react";
import {
  FiMail,
  FiUser,
  FiEye,
  FiEyeOff,
  FiAlertCircle,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState<{ password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
    <div className="flex min-h-[95vh] w-full bg-slate-50 dark:bg-gray-950">
      {/* Lado Esquerdo - Formulário */}
      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-[30px] font-black tracking-[-0.025em] text-gray-800 dark:text-gray-100">
              Particular
            </h1>
            <p className="mt-2 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Organize sua rotina com elegância e foco absoluto.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex gap-8">
            <button
              onClick={() => setActiveTab("login")}
              className={`pb-2 text-sm font-semibold transition-all ${
                activeTab === "login"
                  ? "border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                  : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`pb-2 text-sm font-medium transition-all ${
                activeTab === "register"
                  ? "border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                  : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
              }`}
            >
              Criar conta
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-1.5 flex flex-col">
              <label className="text-xs font-semibold uppercase tracking-[0.05em] text-gray-500 dark:text-gray-400">
                E-mail
              </label>
              <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 focus-within:border-blue-600 dark:focus-within:border-blue-500">
                <div className="[&>input]:!px-4 [&>input]:!py-3">
                  <Input
                    type="email"
                    placeholder="nome@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-gray-800 dark:text-gray-100"
                  />
                </div>
                <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500/50 dark:text-gray-400/50" />
              </div>
            </div>

            {/* Username Input (apenas para cadastro) */}
            {activeTab === "register" && (
              <div className="space-y-1.5 flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-[0.05em] text-gray-500 dark:text-gray-400">
                  Usuário
                </label>
                <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 focus-within:border-blue-600 dark:focus-within:border-blue-500">
                  <div className="[&>input]:!px-4 [&>input]:!py-3">
                    <Input
                      type="text"
                      placeholder="seu_nome"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="text-gray-800 dark:text-gray-100"
                    />
                  </div>
                  <FiUser className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500/50 dark:text-gray-400/50" />
                </div>
              </div>
            )}

            {/* Password Input */}
            <div className="space-y-1.5 flex flex-col">
              <label className="text-xs font-semibold uppercase tracking-[0.05em] text-gray-500 dark:text-gray-400">
                Senha
              </label>
              <div className={`relative bg-white dark:bg-gray-900 border rounded-lg hover:border-gray-400 dark:hover:border-gray-600 focus-within:border-blue-600 dark:focus-within:border-blue-500 ${
                errors.password
                  ? "border-rose-400 dark:border-rose-500"
                  : "border-gray-300 dark:border-gray-700"
              }`}>
                <div className="[&>input]:!px-4 [&>input]:!py-3">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-gray-800 dark:text-gray-100"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
                >
                  {showPassword ? (
                    <FiEyeOff
                      className={`h-4 w-4 ${
                        errors.password
                          ? "text-rose-700 dark:text-rose-400"
                          : "text-gray-500/50 dark:text-gray-400/50"
                      }`}
                    />
                  ) : (
                    <FiEye
                      className={`h-4 w-4 ${
                        errors.password
                          ? "text-rose-700 dark:text-rose-400"
                          : "text-gray-500/50 dark:text-gray-400/50"
                      }`}
                    />
                  )}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center gap-1 text-xs text-rose-700 dark:text-rose-400">
                  <FiAlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 py-3.5 font-bold uppercase tracking-[0.025em] text-white shadow-[0_4px_6px_-4px_rgba(37,99,235,0.3),0_10px_15px_-3px_rgba(37,99,235,0.3)] dark:shadow-[0_4px_6px_-4px_rgba(59,130,246,0.4),0_10px_15px_-3px_rgba(59,130,246,0.4)] transition-all hover:opacity-95 active:scale-[0.98]"
              >
                {activeTab === "login" ? "Entrar" : "Criar conta"}
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
              <span className="text-xs font-medium text-gray-500/50 dark:text-gray-400/50">OU</span>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border-0 bg-gray-200 dark:bg-gray-800 py-3.5 font-bold text-gray-800 dark:text-gray-100 transition-all hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <FcGoogle className="h-5 w-5" />
              Google
            </button>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Não tem uma conta?{" "}
              <Link
                href="#"
                onClick={() =>
                  setActiveTab(activeTab === "login" ? "register" : "login")
                }
                className="text-gray-500 underline transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              >
                Criar conta agora
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Lado Direito - Área Visual */}
      <div className="relative hidden w-1/2 overflow-hidden bg-gray-100 dark:bg-gray-900 lg:block">
        {/* Gradientes decorativos */}
        <div className="absolute -right-32 -top-24 h-[614px] w-[768px] rounded-full bg-blue-100/40 blur-[120px] dark:bg-blue-900/20" />
        <div className="absolute -left-32 bottom-0 h-[512px] w-[640px] rounded-full bg-indigo-100/40 blur-[120px] dark:bg-indigo-900/20" />

        {/* Conteúdo */}
        <div className="relative flex h-full flex-col justify-center p-12">
          {/* Header com ícone */}
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500">
              <BsStars className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Texto principal */}
          <div className="max-w-md">
            <h2 className="text-4xl font-black leading-tight text-gray-800 dark:text-gray-100">
              Mantenha o fluxo criativo
              <br />
              sem interrupções.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              Uma interface pensada para quem valoriza o
              <br />
              trabalho bem feito.
            </p>
          </div>

          {/* Cards flutuantes */}
          <div className="relative h-64">
            {/* Card 1 - Review de Design */}
            <div className="left-0 top-0 w-72 rounded-xl border border-white/20 bg-white/80 dark:border-gray-800/50 dark:bg-gray-900/80 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="h-12 w-1 rounded-full bg-blue-600 dark:bg-blue-500" />
                <div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">
                    Review de Design
                  </h4>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">Hoje, 14:00</p>
                </div>
              </div>
              {/* Avatares */}
              <div className="mt-4 flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 ring-2 ring-white dark:ring-gray-900" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 ring-2 ring-white dark:ring-gray-900" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 ring-2 ring-white dark:ring-gray-900">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400">+3</span>
                </div>
              </div>
            </div>
            <div className="flex mt-5 gap-6">
              {/* Card 2 - Progresso */}
              <div className="bottom-0 left-0 w-48 rounded-xl bg-blue-600 dark:bg-blue-500 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                <div className="mb-3">
                  <FiCheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-black text-white">84%</div>
                <div className="text-xs font-medium text-white/80">
                  Concluído
                </div>
              </div>

              {/* Card 3 - Produtividade */}
              <div className="bottom-8 right-0 w-52 rounded-xl bg-gray-200 dark:bg-gray-800 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                <div className="mb-3">
                  <FiTrendingUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-xs font-bold uppercase tracking-tight text-gray-500 dark:text-gray-400">
                  Produtividade semanal em alta
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer minimalista */}
    </div>
      <div className="bottom-0 left-0 z-10 w-full p-6 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500/50 dark:text-gray-400/50 lg:px-6">
        Clikdown © {new Date().getFullYear()}
      </div>
      </>
  );
}
