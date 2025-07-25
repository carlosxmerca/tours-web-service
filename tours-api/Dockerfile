# Etapa 1: build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

COPY start.sh ./start.sh
RUN chmod +x start.sh

RUN npm run build

# Etapa 2: producción
FROM node:20-alpine AS production

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/start.sh ./start.sh
COPY --from=builder /app/dist ./dist

RUN chmod +x start.sh

EXPOSE 3001

CMD ["./start.sh"]
