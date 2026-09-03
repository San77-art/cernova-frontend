import crypto from "crypto";

const ENCRYPTION_ALGORITHM = "aes-256-gcm";
const ENCODING = "hex";

export function encryptPII(plaintext: string, encryptionKey: string): string {
  const iv = crypto.randomBytes(16);
  const key = Buffer.from(encryptionKey, ENCODING);
  
  const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, key, iv);
  let encrypted = cipher.update(plaintext, "utf8", ENCODING);
  encrypted += cipher.final(ENCODING);
  
  const authTag = cipher.getAuthTag();
  
  return `${iv.toString(ENCODING)}:${authTag.toString(ENCODING)}:${encrypted}`;
}

export function decryptPII(ciphertext: string, encryptionKey: string): string {
  const [ivHex, authTagHex, encrypted] = ciphertext.split(":");
  const iv = Buffer.from(ivHex, ENCODING);
  const authTag = Buffer.from(authTagHex, ENCODING);
  const key = Buffer.from(encryptionKey, ENCODING);
  
  const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  
  let decrypted = decipher.update(encrypted, ENCODING, "utf8");
  decrypted += decipher.final("utf8");
  
  return decrypted;
}
