"use client";
export default function ProdutosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">Catálogo de Produtos</h1>
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
        <p className="text-slate-400">Nenhum produto disponível ainda</p>
        <p className="text-slate-500 text-sm mt-2">Os produtos serão adicionados conforme sua jornada progride</p>
      </div>
    </div>
  );
}
