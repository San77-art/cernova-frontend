import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: Conectar ao banco depois
        // Por enquanto, aceitar qualquer email/senha para teste
        
        if (credentials?.email && credentials?.password) {
          return {
            id: "1",
            email: credentials.email,
            name: credentials.email.split("@")[0],
            role: "cliente",
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "seu-secret-aleatorio-aqui",
});

export { handler as GET, handler as POST };