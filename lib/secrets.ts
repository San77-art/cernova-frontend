import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({ region: "us-east-1" });
const cache = new Map<string, any>();

export async function getSecret(secretName: string): Promise<any> {
  if (cache.has(secretName)) {
    return cache.get(secretName);
  }

  try {
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secretName,
      })
    );

    const secret = response.SecretString 
      ? JSON.parse(response.SecretString)
      : response.SecretBinary;

    cache.set(secretName, secret);
    setTimeout(() => cache.delete(secretName), 3600000);

    return secret;
  } catch (error) {
    console.error(`Erro ao buscar secret ${secretName}:`, error);
    throw error;
  }
}
