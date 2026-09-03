import bcrypt from "bcrypt";
import { generateJWT } from "@/lib/jwt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json(
        { error: "Email e senha obrigatorios" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return Response.json(
        { error: "Credenciais invalidas" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return Response.json(
        { error: "Credenciais invalidas" },
        { status: 401 }
      );
    }

    const token = generateJWT(user.id);

    return Response.json(
      { 
        token, 
        user: { id: user.id, email: user.email, name: user.name }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      { error: "Erro ao fazer login" },
      { status: 500 }
    );
  }
}
