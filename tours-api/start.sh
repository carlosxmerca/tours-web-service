#!/bin/sh

echo "⏳ Iniciando migraciones de Prisma..."
if npx prisma migrate deploy; then
  echo "✅ Migraciones ejecutadas con éxito."
else
  echo "❌ Error ejecutando migraciones."
  exit 1
fi

echo "🌱 Ejecutando seed (si aplica)..."
if npm run seed:docker; then
  echo "✅ Seed ejecutado correctamente."
else
  echo "❌ Error ejecutando seed."
  exit 1
fi

echo "🚀 Iniciando aplicación Node.js..."
npm run start:prod
