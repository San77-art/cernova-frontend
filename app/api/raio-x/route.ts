import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefone, vertical } = body;

    // LOG NO CONSOLE (você vê na terminal)
    console.log("=== NOVO LEAD RAIO-X ===");
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Vertical: ${vertical}`);
    console.log("=======================");

    // SALVAR EM ARQUIVO LOCAL (para depois)
    const fs = require("fs");
    const data = `${new Date().toISOString()} - ${nome} (${email}) - ${vertical}\n`;
    fs.appendFileSync("leads.txt", data);

    // RESPONDER COM SUCESSO
    return NextResponse.json({ 
      success: true, 
      message: "Lead recebido! (mock - email não foi enviado)" 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erro ao processar" },
      { status: 500 }
    );
  }
}
