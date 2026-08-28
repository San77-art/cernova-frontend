import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefone, vertical } = body;

    // Configurar transporter (usando Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Email para Cernova (você)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "santiago@cernova.com.br",
      subject: `Novo Raio-X Solicitado - ${vertical}`,
      html: `
        <h2>Novo Lead - Raio-X ${vertical}</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Vertical:</strong> ${vertical}</p>
        <p>Cliente será contatado em breve.</p>
      `,
    });

    // Email de confirmação para o cliente
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Raio-X Solicitado com Sucesso",
      html: `
        <h2>Obrigado, ${nome}!</h2>
        <p>Recebemos sua solicitação de Raio-X para <strong>${vertical}</strong>.</p>
        <p>Entraremos em contato em breve.</p>
        <p>Atenciosamente,<br>Equipe Cernova</p>
      `,
    });

    return Response.json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return Response.json(
      { success: false, error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
