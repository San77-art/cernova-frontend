export default function Saude() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Cernova Saúde</h1>
        <p className="text-xl text-slate-300 mb-12">Gestão de Riscos para Médicos e Clínicas</p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Status: Em Validação</h3>
          <p className="text-slate-300">
            Estamos desenvolvendo nossa plataforma especializada para o setor de saúde.
          </p>
        </div>

        <a href="/contato" className="text-amber-500 hover:text-amber-400 font-semibold">
          Interesse em ser beta-tester? Entre em contato →
        </a>
      </div>
    </div>
  );
}
