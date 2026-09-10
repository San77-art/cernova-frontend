FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
ENV NODE_ENV=production
ENV NEXTAUTH_SECRET=WpTLNfAlgWt4mCA4ZsU32YS7h8OskrgWBIatdniPpKM=
ENV NEXTAUTH_URL=https://cernova.com.br
EXPOSE 3000
CMD ["npm", "start"]
