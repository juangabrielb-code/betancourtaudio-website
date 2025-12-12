@echo off
REM ================================
REM Script de inicio rápido - Desarrollo (Windows)
REM ================================

echo.
echo 🚀 Iniciando Betancourt Audio - Modo Desarrollo
echo ================================================
echo.

REM Verificar si existe node_modules
if not exist "node_modules" (
    echo 📦 Instalando dependencias...
    call npm install
)

REM Verificar si existe .env.local
if not exist ".env.local" (
    echo ⚙️  Creando .env.local desde .env.example...
    copy .env.example .env.local
)

echo.
echo ✅ Setup completo!
echo 🌐 Iniciando servidor en http://localhost:3000
echo.

REM Iniciar servidor de desarrollo
call npm run dev
