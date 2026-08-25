export default function Agro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-amber-500 mb-4">Cernova Agro</h1>
        <p className="text-xl text-slate-300 mb-12">Diagnóstico Especializado para Produtores Rurais</p>

        <div className="grid grid-cols-2 gap-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Cobertura Completa</h3>
            <ul className="text-slate-300 space-y-2">
              <li>✓ Análise de risco fiscal</li>
              <li>✓ Conformidade trabalhista</li>
              <li>✓ Planejamento sucessório</li>
              <li>✓ Estrutura societária</li>
            </ul>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Para Quem É</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Produtores de grãos</li>
              <li>• Pecuaristas</li>
              <li>• Cooperativas agrícolas</li>
              <li>• Empresas de agronegócio</li>
            </ul>
          </div>
        </div>

        <a href="/raio-x" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition inline-block mt-8">
          Fazer Raio-X Agro
        </a>
      </div>
    </div>
  );
}
