FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Build AQUI dentro do Docker (com cache)
RUN npm run build

EXPOSE 3000

ENV NEXTAUTH_SECRET=9N1RimvqIf4awYztjusrOdHkVxKGAgC7
ENV NEXTAUTH_URL=http://localhost:3000

CMD ["npm", "start"]
