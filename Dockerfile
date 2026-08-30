FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

ENV NEXTAUTH_SECRET=9N1RimvqIf4awYztjusrOdHkVxKGAgC7
ENV NEXTAUTH_URL=https://cernova.com.br
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
