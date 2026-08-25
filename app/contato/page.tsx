export default function Contato() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-500 mb-12 text-center">Entre em Contato</h1>

        <div className="grid grid-cols-2 gap-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Informações</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 font-semibold">Email</p>
                <p className="text-white">contato@cernova.com.br</p>
              </div>
              <div>
                <p className="text-slate-400 font-semibold">Telefone</p>
                <p className="text-white">(11) 3000-0000</p>
              </div>
              <div>
                <p className="text-slate-400 font-semibold">Localização</p>
                <p className="text-white">São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Horário de Atendimento</h3>
            <div className="space-y-2 text-white">
              <p>Segunda a Sexta: 08h às 18h</p>
              <p>Sábados: 09h às 12h</p>
              <p>Domingos: Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
