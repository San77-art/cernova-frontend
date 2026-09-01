"use client";
import { useState } from "react";

export default function RaioXPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "medico",
    revenue: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Lead:", formData);
    // TODO: Integrar com email/CRM
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 flex items-center justify-center">
        <div className="bg-green-900/20 border border-green-700 rounded-lg p-12 text-center max-w-md">
          <h1 className="text-3xl font-bold text-green-400 mb-4">✅ Enviado!</h1>
          <p className="text-slate-300 mb-4">Recebemos seu Raio-X fiscal. Análise em 48 horas.</p>
          <p className="text-amber-500 font-bold">Confira seu email para acompanhamento.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Raio-X Fiscal Gratuito</h1>
        <p className="text-amber-500 text-lg mb-8">Diagnóstico em 48 horas - Sem compromisso</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Solicitar Análise</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Nome Completo*</label>
                <input 
                  type="text"
                  placeholder="Dr. João Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email*</label>
                <input 
                  type="email"
                  placeholder="joao@clinica.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Telefone*</label>
                <input 
                  type="tel"
                  placeholder="(11) 99999-8888"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Clínica/Consultório*</label>
                <input 
                  type="text"
                  placeholder="Clínica Dr. João"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Faturamento Anual Aprox.*</label>
                <input 
                  type="text"
                  placeholder="R$ 500.000 - R$ 2.000.000"
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Tipo*</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded"
                >
                  <option value="medico">Médico/Clínica</option>
                  <option value="agro">Produtor Rural</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition mt-6"
              >
                Solicitar Raio-X Gratuito
              </button>
              
              <p className="text-xs text-slate-400 text-center mt-4">
                ✓ Seus dados estão 100% seguros conforme LGPD
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">📊 Análise Inclui</h3>
              <ul className="text-slate-300 space-y-3">
                <li>✅ Enquadramento fiscal atual</li>
                <li>✅ Identificação de riscos (CARF/Receita)</li>
                <li>✅ Oportunidades de economia</li>
                <li>✅ Conformidade LGPD</li>
                <li>✅ Planejamento sucessório</li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">⏱️ Como Funciona</h3>
              <div className="text-slate-300 space-y-3">
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">1.</span>
                  <div>
                    <p className="font-semibold">Preencha o formulário (5 min)</p>
                    <p className="text-sm">Informações básicas sobre seu negócio</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">2.</span>
                  <div>
                    <p className="font-semibold">Análise preliminar (24h)</p>
                    <p className="text-sm">Receba feedback inicial por email</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">3.</span>
                  <div>
                    <p className="font-semibold">Consulta especialista (48h)</p>
                    <p className="text-sm">Conversa com nosso time</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">4.</span>
                  <div>
                    <p className="font-semibold">Relatório final (72h)</p>
                    <p className="text-sm">Documento completo com recomendações</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
