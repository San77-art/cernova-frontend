import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.NEXTAUTH_SECRET || "dev-secret-change-me";
const JWT_EXPIRES_IN = "24h";

export function generateJWT(userId: string): string {
  return jwt.sign(
    { sub: userId, iat: Math.floor(Date.now() / 1000) },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN, algorithm: "HS256" }
  );
}

export function verifyJWT(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
  } catch (error) {
    return null;
  }
}
