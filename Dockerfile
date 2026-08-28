FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps --omit=dev

COPY . .
COPY .next ./.next

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
