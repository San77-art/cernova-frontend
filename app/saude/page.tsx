"use client";
export default function SaudePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Cernova Saúde</h1>
        <p className="text-amber-500 text-lg mb-8">Diagnóstico Fiscal Jurisprudencial para Médicos e Clínicas</p>

        {/* ICP */}
        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">🎯 Perfil do Cliente Ideal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-white mb-3">📊 Porte</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>✅ Renda PF: R$50k+ /mês</li>
                <li>✅ Clínica: R$1M - R$20M/ano</li>
                <li>✅ Estrutura: PJ + Patrimônio</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">🔴 Dores Críticas</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>❌ Enquadramento fiscal frágil</li>
                <li>❌ Confusão patrimonial</li>
                <li>❌ Risco de glosa CARF</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">🔔 Gatilhos de Compra</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>📮 Recebeu intimação Receita</li>
                <li>🏢 Vai vender/crescer clínica</li>
                <li>📋 Reforma tributária 2026</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PRODUTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">📋 Raio-X Fiscal</h2>
            <p className="text-slate-300 mb-4">Diagnóstico jurisprudencial de risco com lastro em:</p>
            <ul className="text-slate-300 space-y-2">
              <li>✅ STJ REsp 1.877.568 (anestesiologia)</li>
              <li>✅ Súmula CARF 142 (serviços hospitalares)</li>
              <li>✅ Acórdão CARF 2401-002.873 (pró-labore)</li>
              <li>✅ Lei 13.874/2019 (reclassificação)</li>
            </ul>
            <p className="text-amber-500 font-bold mt-6">R$ 5.000 - R$ 15.000</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">📊 Planejamento Tributário</h2>
            <p className="text-slate-300 mb-4">Estruturação fiscal com defesa robusta:</p>
            <ul className="text-slate-300 space-y-2">
              <li>✅ Dossiê jurisprudencial</li>
              <li>✅ Reforma tributária 2026 (IBS/CBS)</li>
              <li>✅ Planejamento sucessório</li>
              <li>✅ Compliance LGPD + Receita Saúde</li>
            </ul>
            <p className="text-amber-500 font-bold mt-6">A partir de R$ 15.000</p>
          </div>
        </div>

        {/* REFORMA */}
        <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">⚠️ Reforma Tributária 2026</h2>
          <p className="text-slate-300 mb-4">Redução de 60% IBS/CBS para saúde, mas 2026 é ano-teste operacional. Clínicas precisam se preparar AGORA.</p>
          <ul className="text-slate-300 space-y-2">
            <li>🔔 LC 214/2025: Reduções começam</li>
            <li>📊 Receita Saúde obrigatório (01/01/2025)</li>
            <li>🚨 Cruzamento eletrônico com ANS/CFM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
