# Dockerfile SIMPLES - sem build
FROM node:20-alpine

WORKDIR /app

# Copiar APENAS dependências de produção
COPY package*.json ./
RUN npm install --legacy-peer-deps --omit=dev

# Copiar código e .next JÁ BUILDADO
COPY .next ./.next
COPY public ./public

ENV NEXTAUTH_SECRET=9N1RimvqIf4awYztjusrOdHkVxKGAgC7
ENV NEXTAUTH_URL=https://cernova.com.br
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
