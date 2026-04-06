"use client";

import { Link } from "@heroui/react"
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import clsx from "clsx";


export default function Home() {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-auto grid min-h-[calc(100vh-12rem)] max-w-5xl items-center gap-8 lg:grid-cols-[1.15fr_0,85fr]">
       <div className="space-y-6">
          <span className="inline-flex rounded-full border border-black/8 bg-white/75 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/6 dark:text-slate-400">ClickDown</span>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            Crie tarefas, organize seus projetos e aumente sua produtividade com o{" "}
            <motion.span
              className="inline-block bg-[linear-gradient(90deg,#0ea5e9_0%,#22c55e_25%,#f59e0b_50%,#ec4899_75%,#0ea5e9_100%)] bg-[length:200%_100%] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              ClickDown.
            </motion.span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
            O ClickDown é uma aplicação de gerenciamento de tarefas e projetos que ajuda você a organizar suas atividades diárias, colaborar com sua equipe e alcançar seus objetivos de forma eficiente. Com uma interface intuitiva e recursos poderosos, o ClickDown é a solução ideal para quem busca produtividade e organização em um só lugar.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/login" className={clsx("no-underline inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-accent/90 sm:w-auto", title({ color: "foreground", size: "sm" }) )}>
              Entrar agora
            </Link>
            <Link href="/cadastro" className={clsx("no-underline inline-flex w-full items-center justify-center rounded-md border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 sm:w-auto", title({ color: "foreground", size: "sm" }) )}>
              Cadastre-se
            </Link>
          </div>
       </div>
       
      </div>
    </section>
  );
}
