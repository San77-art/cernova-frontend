import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  debug: true,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("✅ LOGIN ATTEMPT:", credentials?.email);
        if (credentials?.email && credentials?.password) {
          const user = {
            id: "1",
            email: credentials.email,
            name: credentials.email.split("@")[0],
          };
          console.log("✅ USER AUTHORIZED:", user);
          return user;
        }
        console.log("❌ AUTH FAILED");
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("🔐 JWT CALLBACK:", { token, user });
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("📦 SESSION CALLBACK:", { session, token });
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
      },
    },
  },
});

export { handler as GET, handler as POST };
