FROM node:20-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar TODAS as dependências (incluindo dev)
RUN npm install

# Copiar código
COPY . .

# Build Next.js
RUN npm run build

# Remover devDependencies para produção
RUN npm prune --omit=dev

# Expor porta
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
