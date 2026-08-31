"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    console.log("🔍 Session Status:", status);
    console.log("👤 Session Data:", session);

    if (status === "unauthenticated" && !redirected) {
      console.log("❌ UNAUTHENTICATED - Redirecting to login");
      setRedirected(true);
      router.push("/login");
    }
  }, [status, redirected, router]);

  // Mostrar loading enquanto valida sessão
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Validando sessão...</div>
      </div>
    );
  }

  // Se não autenticado, não renderizar nada (vai redirecionar)
  if (status === "unauthenticated") {
    return null;
  }

  // Renderizar conteúdo autenticado
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-500">Cernova</h1>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">{session?.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Sair
            </button>
          </div>
        </div>
      </header>
      <div className="flex">
        {/* Sidebar */}
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
        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
