"use client";
export default function SaudePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Cernova Saúde</h1>
        <p className="text-amber-500 text-lg mb-8">Diagnóstico Especializado para Médicos e Clínicas</p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Cobertura Completa</h2>
          <ul className="text-slate-300 space-y-3">
            <li>✓ Análise de risco fiscal (STJ, CARF, Receita)</li>
            <li>✓ Conformidade LGPD e privacidade</li>
            <li>✓ Planejamento sucessório e patrimonial</li>
            <li>✓ Estrutura societária otimizada</li>
            <li>✓ Compliance ANS e regulatório</li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Para Quem É</h2>
          <ul className="text-slate-300 space-y-3">
            <li>• Médicos especialistas (alta renda)</li>
            <li>• Clínicas e consultórios (PJ)</li>
            <li>• Hospitais privados</li>
            <li>• Grupos médicos e cooperativas</li>
          </ul>
          <a href="/raio-x" className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg">
            Fazer Raio-X Saúde →
          </a>
        </div>
      </div>
    </div>
  );
}
