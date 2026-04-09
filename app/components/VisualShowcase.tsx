"use client";

import { FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

export function VisualShowcase() {
  return (
    <div className="relative hidden w-1/2 overflow-hidden bg-gray-100 dark:bg-gray-900 lg:block">
      <div className="absolute -right-32 -top-24 h-[614px] w-[768px] rounded-full bg-blue-100/40 blur-[120px] dark:bg-blue-900/20" />
      <div className="absolute -left-32 bottom-0 h-[512px] w-[640px] rounded-full bg-indigo-100/40 blur-[120px] dark:bg-indigo-900/20" />

      <div className="relative flex h-full flex-col justify-center p-12">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500">
            <BsStars className="h-5 w-5 text-white" />
          </div>
        </div>

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

        <div className="relative h-64">
          <div className="left-0 top-0 w-72 rounded-xl border border-white/20 bg-white/80 dark:border-gray-800/50 dark:bg-gray-900/80 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="h-12 w-1 rounded-full bg-blue-600 dark:bg-blue-500" />
              <div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">
                  Review de Design
                </h4>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  Hoje, 14:00
                </p>
              </div>
            </div>
            <div className="mt-4 flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 ring-2 ring-white dark:ring-gray-900" />
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 ring-2 ring-white dark:ring-gray-900" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 ring-2 ring-white dark:ring-gray-900">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  +3
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-6">
            <div className="bottom-0 left-0 w-48 rounded-xl bg-blue-600 dark:bg-blue-500 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
              <div className="mb-3">
                <FiCheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-black text-white">84%</div>
              <div className="text-xs font-medium text-white/80">Concluído</div>
            </div>

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
  );
}
