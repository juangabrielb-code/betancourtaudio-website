# ================================
# Dockerfile para Betancourt Audio
# Next.js 16 + TypeScript
# ================================

# Etapa 1: Dependencias
FROM node:20-alpine AS deps
WORKDIR /app

# Instalar dependencias del sistema necesarias para node-gyp
RUN apk add --no-cache libc6-compat

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci

# ================================
# Etapa 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar dependencias instaladas
COPY --from=deps /app/node_modules ./node_modules

# Copiar código fuente
COPY . .

# Variables de entorno para build
ENV NEXT_TELEMETRY_DISABLED=1

# Build de Next.js
RUN npm run build

# ================================
# Etapa 3: Runner (Producción)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Crear usuario no-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios desde builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cambiar ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
