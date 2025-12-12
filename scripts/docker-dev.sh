#!/bin/bash

# ================================
# Script Docker - Desarrollo
# ================================

echo "🐳 Iniciando Betancourt Audio con Docker - Modo Desarrollo"
echo "=========================================================="
echo ""

# Verificar si Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker no está instalado"
    echo "   Descargar desde: https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Verificar si Docker está corriendo
if ! docker info &> /dev/null; then
    echo "❌ Docker no está corriendo"
    echo "   Por favor, inicia Docker Desktop"
    exit 1
fi

echo "✅ Docker está listo"
echo ""

# Verificar si existe .env.local
if [ ! -f ".env.local" ]; then
    echo "⚙️  Creando .env.local desde .env.example..."
    cp .env.example .env.local
fi

# Preguntar si quiere rebuild
read -p "¿Reconstruir la imagen? (y/N): " rebuild
if [[ $rebuild =~ ^[Yy]$ ]]; then
    echo "🔨 Reconstruyendo imagen..."
    docker-compose up --build
else
    echo "🚀 Iniciando contenedores..."
    docker-compose up
fi
