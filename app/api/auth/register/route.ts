// app/api/auth/register/route.ts
import bcrypt from "bcrypt";
import { generateJWT } from "@/lib/jwt";
import { query, queryOne } from "@/lib/db";
import { randomUUID } from "crypto";

const SALT_ROUNDS = 12;

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password || password.length < 8) {
      return Response.json(
        { error: "Email e senha (min 8 chars) obrigatorios" },
        { status: 400 }
      );
    }

    // Verificar se existe
    const existing = await queryOne(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existing) {
      return Response.json(
        { error: "Email ja cadastrado" },
        { status: 409 }
      );
    }

    // Hash senha
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const userId = randomUUID();

    // Inserir no banco
    await query(
      "INSERT INTO users (id, email, password, name) VALUES ($1, $2, $3, $4)",
      [userId, email, hashedPassword, name || email.split("@")[0]]
    );

    const token = generateJWT(userId);

    return Response.json(
      { 
        success: true, 
        token, 
        user: { id: userId, email, name }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return Response.json(
      { error: "Erro ao cadastrar" },
      { status: 500 }
    );
  }
}
