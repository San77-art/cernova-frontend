"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/app/visao-geral");
    } else {
      setError("Email ou senha inválidos");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Cernova</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-2 rounded"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-2 rounded"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-900/20 border border-red-700 text-red-300 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="text-slate-400 text-sm text-center mt-6">
          Para teste, use qualquer email/senha
        </p>
      </div>
    </div>
  );
}
