"use client";
import { useState } from "react";

export default function RaioXPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "medico"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Raio-X enviado! Análise em 48 horas.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Raio-X Fiscal Gratuito</h1>
        <p className="text-amber-500 text-lg mb-8">Diagnóstico em 48 horas - Sem compromisso</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Solicitar Análise</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-2 rounded"
                required
              />
              <input 
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-2 rounded"
                required
              />
              <input 
                type="tel"
                placeholder="Telefone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-2 rounded"
                required
              />
              <input 
                type="text"
                placeholder="Empresa/Consultório"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-2 rounded"
                required
              />
              <select 
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-2 rounded"
              >
                <option value="medico">Médico/Clínica</option>
                <option value="agro">Produtor Rural</option>
              </select>
              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 rounded-lg transition"
              >
                Solicitar Raio-X Gratuito
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">📊 O que você recebe</h3>
              <ul className="text-slate-300 space-y-2">
                <li>✅ Análise fiscal completa</li>
                <li>✅ Identificação de riscos</li>
                <li>✅ Oportunidades de economia</li>
                <li>✅ Plano de ação personalizado</li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">⏱️ Timeline</h3>
              <ul className="text-slate-300 space-y-2">
                <li>1️⃣ Preencha o formulário (5 min)</li>
                <li>2️⃣ Receba análise preliminar (24h)</li>
                <li>3️⃣ Consulta com especialista (48h)</li>
                <li>4️⃣ Relatório final (72h)</li>
              </ul>
            </div>

            <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🎯 Próximos Passos</h3>
              <p className="text-slate-300">Após análise, você receberá proposta de consultoria sem qualquer obrigação.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
