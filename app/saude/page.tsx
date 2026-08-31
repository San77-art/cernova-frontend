"use client";
export default function SaudePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Cernova Saúde</h1>
        <p className="text-amber-500 text-xl mb-8">Diagnóstico Fiscal e Patrimonial para Médicos e Clínicas</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">📋 ICP - Médicos</h2>
            <ul className="text-slate-300 space-y-2">
              <li>✅ Consultórios individuais (1-5 médicos)</li>
              <li>✅ Clínicas médicas (5-50 profissionais)</li>
              <li>✅ Hospitais especializados</li>
              <li>✅ Faturamento: R$ 200k - R$ 10M/ano</li>
            </ul>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 Produtos</h2>
            <ul className="text-slate-300 space-y-2">
              <li>✅ Raio-X Fiscal (Compliance)</li>
              <li>✅ Planejamento Patrimonial</li>
              <li>✅ LGPD e Privacidade</li>
              <li>✅ Successório (Herança/Trusts)</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">📊 Riscos Identificados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-900/20 border border-red-700 rounded p-4">
              <h3 className="font-bold text-red-400">🔴 Crítico</h3>
              <p className="text-sm text-slate-300 mt-2">Compliance tributário - Glosas INSS/Receita</p>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-700 rounded p-4">
              <h3 className="font-bold text-yellow-400">🟡 Alto</h3>
              <p className="text-sm text-slate-300 mt-2">Sucessão patrimonial não planejada</p>
            </div>
            <div className="bg-blue-900/20 border border-blue-700 rounded p-4">
              <h3 className="font-bold text-blue-400">🔵 Médio</h3>
              <p className="text-sm text-slate-300 mt-2">LGPD e proteção de dados de pacientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
