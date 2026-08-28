"use client";
export default function ProdutosContratadosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">03 - Produtos Contratados</h1>
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
        <div className="space-y-4">
          <div className="p-4 bg-slate-900 rounded border border-slate-700">
            <p className="text-white font-semibold">Produto A</p>
            <p className="text-slate-400 text-sm">Status: Ativo</p>
            <p className="text-slate-500 text-xs mt-2">Contratado em 15/07/2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
