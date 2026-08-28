"use client";

export default function VisaoGeralPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">Visão Geral</h1>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-slate-400 text-sm">Status Jornada</p>
          <p className="text-3xl font-bold text-amber-500">03/06</p>
          <p className="text-slate-500 text-xs mt-2">Diagnostico em progresso</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-slate-400 text-sm">Riscos Identificados</p>
          <p className="text-3xl font-bold text-red-500">7</p>
          <p className="text-slate-500 text-xs mt-2">2 críticos</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-slate-400 text-sm">Produtos Contratados</p>
          <p className="text-3xl font-bold text-green-500">3</p>
          <p className="text-slate-500 text-xs mt-2">Todos ativos</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-slate-400 text-sm">Próxima Entrega</p>
          <p className="text-3xl font-bold text-blue-500">15 dias</p>
          <p className="text-slate-500 text-xs mt-2">Setembro/2026</p>
        </div>
      </div>

      {/* Matriz de Risco */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Matriz de Risco</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-900 rounded">
            <div>
              <p className="text-white font-semibold">Gestão Fiscal</p>
              <p className="text-slate-400 text-sm">Compliance tributário</p>
            </div>
            <span className="px-4 py-2 bg-red-600/20 border border-red-600 text-red-400 rounded">CRÍTICO</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-900 rounded">
            <div>
              <p className="text-white font-semibold">Fluxo de Caixa</p>
              <p className="text-slate-400 text-sm">Projeções e planejamento</p>
            </div>
            <span className="px-4 py-2 bg-yellow-600/20 border border-yellow-600 text-yellow-400 rounded">ALTO</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-900 rounded">
            <div>
              <p className="text-white font-semibold">Estrutura Societária</p>
              <p className="text-slate-400 text-sm">Conformidade legal</p>
            </div>
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-600 text-blue-400 rounded">MÉDIO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
