"use client";

import { useEffect, useState } from "react";
import { api } from "./api-client/client";

export default function Home() {
  const [health, setHealth] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const data = await api.getHealth();
        setHealth(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-amber-500">CERNOVA</h1>
              <p className="text-slate-400 text-sm">Diagnóstico de Risco Fiscal e Patrimonial</p>
            </div>
            <nav className="flex gap-6 text-slate-300">
              <a href="/agro" className="hover:text-amber-500 transition">Agro</a>
              <a href="/saude" className="hover:text-amber-500 transition">Saúde</a>
              <a href="/raio-x" className="hover:text-amber-500 transition">Raio-X</a>
              <a href="/contato" className="hover:text-amber-500 transition">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">Identifique Riscos Fiscais</h2>
          <p className="text-xl text-slate-400 mb-12">Análise profunda de sua situação fiscal e patrimonial.</p>
          
          <div className="flex gap-4 justify-center mb-12">
            <a href="/raio-x" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition">
              Fazer Raio-X Gratuito
            </a>
            <button className="border border-amber-500 text-amber-500 hover:bg-amber-500/10 font-bold py-3 px-8 rounded-lg transition">
              Saber Mais
            </button>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-4">Status do Sistema</h3>
          {loading && <p className="text-slate-400">Verificando...</p>}
          {health && (
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-slate-400 text-sm">Status</p>
                <p className="text-green-400 font-bold">{health.status}</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Banco de Dados</p>
                <p className="text-green-400 font-bold">{health.database}</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Versão</p>
                <p className="text-amber-400 font-bold">{health.version}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Nossas Verticais</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 hover:border-amber-500/50 transition">
              <h4 className="text-2xl font-bold text-white mb-3">Cernova Agro</h4>
              <p className="text-slate-400 mb-6">Diagnóstico especializado para produtores rurais.</p>
              <a href="/agro" className="text-amber-500 hover:text-amber-400 font-semibold">Conheça mais →</a>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 hover:border-amber-500/50 transition">
              <h4 className="text-2xl font-bold text-white mb-3">Cernova Saúde</h4>
              <p className="text-slate-400 mb-6">Plataforma para médicos e clínicas (em breve).</p>
              <a href="/saude" className="text-amber-500 hover:text-amber-400 font-semibold">Em breve →</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-700 bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm">
          <p>© 2026 Cernova. Diagnóstico de Risco Fiscal e Patrimonial.</p>
        </div>
      </footer>
    </div>
  );
}
