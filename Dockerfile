# Stage 1: Builder
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ENV NEXTAUTH_SECRET=9N1RimvqIf4awYztjusrOdHkVxKGAgC7
ENV NEXTAUTH_URL=https://cernova.com.br
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
