"use client";

import { useState } from "react";

export default function RaioX() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vertical: "agro",
    empresa: "",
    consent: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Por favor, aceite os termos");
      return;
    }
    alert(`Raio-X solicitado! Você será contatado em ${formData.email}`);
    console.log("Enviando:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-500 mb-4 text-center">Raio-X Diagnóstico</h1>
        <p className="text-slate-300 text-center mb-12">Avaliação gratuita de sua situação fiscal</p>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Nome Completo</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full bg-slate-700 text-white border border-slate-600 rounded px-4 py-2"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full bg-slate-700 text-white border border-slate-600 rounded px-4 py-2"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Telefone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="w-full bg-slate-700 text-white border border-slate-600 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Vertical</label>
              <select
                value={formData.vertical}
                onChange={(e) => setFormData({...formData, vertical: e.target.value})}
                className="w-full bg-slate-700 text-white border border-slate-600 rounded px-4 py-2"
              >
                <option value="agro">Agro</option>
                <option value="saude">Saúde</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({...formData, consent: e.target.checked})}
              />
              <label htmlFor="consent" className="text-slate-300 text-sm">
                Aceito receber análise de diagnóstico por email
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition"
            >
              Solicitar Raio-X Gratuito
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
