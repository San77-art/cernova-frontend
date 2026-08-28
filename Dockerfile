FROM node:20-alpine

WORKDIR /app

# Copiar package.json e .next PRÉ-FEITO
COPY package.json package-lock.json ./
COPY .next ./.next ./
COPY public ./public ./

# Instalar APENAS dependências de produção
RUN npm install --legacy-peer-deps --omit=dev

# NEXTAUTH secret
ENV NEXTAUTH_SECRET=9N1RimvqIf4awYztjusrOdHkVxKGAgC7
ENV NEXTAUTH_URL=http://localhost:3000

EXPOSE 3000

# Iniciar sem build
CMD ["node_modules/.bin/next", "start"]
