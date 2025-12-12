#!/bin/bash

# ================================
# Script de inicio rápido - Desarrollo
# ================================

echo "🚀 Iniciando Betancourt Audio - Modo Desarrollo"
echo "================================================"
echo ""

# Verificar si existe node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Verificar si existe .env.local
if [ ! -f ".env.local" ]; then
    echo "⚙️  Creando .env.local desde .env.example..."
    cp .env.example .env.local
fi

echo ""
echo "✅ Setup completo!"
echo "🌐 Iniciando servidor en http://localhost:3000"
echo ""

# Iniciar servidor de desarrollo
npm run dev
