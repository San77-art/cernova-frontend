"use client";
export default function DiagnosticoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">02 - Diagnóstico 360</h1>
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
        <div className="space-y-4">
          <p className="text-slate-300">Análise completa em progresso...</p>
          <div className="w-full bg-slate-900 rounded-full h-2">
            <div className="bg-amber-500 h-2 rounded-full w-1/2"></div>
          </div>
          <p className="text-slate-400 text-sm">50% concluído</p>
        </div>
      </div>
    </div>
  );
}
