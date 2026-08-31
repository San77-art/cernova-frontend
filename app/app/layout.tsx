"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Ler do localStorage
    const userEmail = localStorage.getItem("user_email");
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    localStorage.removeItem("logged_in");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-slate-900 border-b border-slate-700 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-500">Cernova</h1>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">{email || "Demo User"}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Sair
            </button>
          </div>
        </div>
      </header>
      <div className="flex">
        <aside className="w-64 bg-slate-900 border-r border-slate-700 p-6">
          <nav className="space-y-2">
            <Link href="/app/visao-geral" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              📊 Visão Geral
            </Link>
            <Link href="/app/produtos" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              🛍️ Produtos
            </Link>
            <Link href="/app/00-cadastro" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              📝 00 - Cadastro
            </Link>
            <Link href="/app/01-onboarding" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              🎯 01 - Onboarding
            </Link>
            <Link href="/app/02-diagnostico-360" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              🔍 02 - Diagnóstico 360
            </Link>
            <Link href="/app/03-produtos-contratados" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              ✅ 03 - Contratados
            </Link>
            <Link href="/app/04-entregas" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              📦 04 - Entregas
            </Link>
            <Link href="/app/05-reunioes" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              👥 05 - Reuniões
            </Link>
            <Link href="/app/06-plano-de-acao" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              🎲 06 - Plano de Ação
            </Link>
            <Link href="/app/cofre" className="block text-slate-300 hover:text-amber-500 p-3 rounded">
              🔐 Cofre Digital
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
