@echo off
REM ================================
REM Script Docker - Desarrollo (Windows)
REM ================================

echo.
echo 🐳 Iniciando Betancourt Audio con Docker - Modo Desarrollo
echo ==========================================================
echo.

REM Verificar si Docker está instalado
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker no está instalado
    echo    Descargar desde: https://www.docker.com/products/docker-desktop
    exit /b 1
)

REM Verificar si Docker está corriendo
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker no está corriendo
    echo    Por favor, inicia Docker Desktop
    exit /b 1
)

echo ✅ Docker está listo
echo.

REM Verificar si existe .env.local
if not exist ".env.local" (
    echo ⚙️  Creando .env.local desde .env.example...
    copy .env.example .env.local
)

REM Preguntar si quiere rebuild
set /p rebuild="¿Reconstruir la imagen? (y/N): "
if /i "%rebuild%"=="y" (
    echo 🔨 Reconstruyendo imagen...
    docker-compose up --build
) else (
    echo 🚀 Iniciando contenedores...
    docker-compose up
)
