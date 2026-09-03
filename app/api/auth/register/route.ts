import bcrypt from "bcrypt";
import { generateJWT } from "@/lib/jwt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
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

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json(
        { error: "Email ja cadastrado" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || email.split("@")[0],
      },
    });

    const token = generateJWT(user.id);

    return Response.json(
      { 
        success: true, 
        token, 
        user: { id: user.id, email: user.email, name: user.name }
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
