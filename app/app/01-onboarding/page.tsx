"use client";
export default function OnboardingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">01 - Onboarding & Autorizações</h1>
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
        <div className="space-y-4">
          <div className="p-4 bg-amber-600/10 border border-amber-600/30 rounded">
            <p className="text-amber-400 font-semibold">Passo 1: Autorização de Dados</p>
            <p className="text-slate-300 text-sm mt-2">Conecte suas contas e autorize acesso aos seus dados</p>
          </div>
          <div className="p-4 bg-slate-900 border border-slate-600 rounded text-slate-400">
            Passo 2: Configuração de Acessos
          </div>
        </div>
      </div>
    </div>
  );
}
