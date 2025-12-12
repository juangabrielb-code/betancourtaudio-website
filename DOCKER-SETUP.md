# 🐳 Docker Setup Completado - Betancourt Audio

## ✅ Archivos Creados

- `Dockerfile` - Build de producción optimizado (multi-stage)
- `Dockerfile.dev` - Build de desarrollo con hot reload
- `docker-compose.yml` - Orquestación para desarrollo fácil
- `.dockerignore` - Optimización del contexto de build
- `DOCKER.md` - Guía completa de uso
- `next.config.ts` - Actualizado con output standalone

---

## 🚀 Cómo Usar Docker

### Opción 1: Docker Compose (Recomendado para Desarrollo)

```bash
# Levantar servidor de desarrollo
docker-compose up

# En segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Opción 2: Docker Build (Producción)

```bash
# Build
docker build -t betancourt-audio .

# Run
docker run -p 3000:3000 betancourt-audio
```

**Acceder:** http://localhost:3000

---

## ⚠️ Troubleshooting Docker Desktop

Si obtienes error `input/output error` en Windows:

### Solución 1: Reiniciar Docker Desktop
1. Cierra Docker Desktop completamente
2. Abre el Task Manager (Ctrl+Shift+Esc)
3. Busca procesos de Docker y termínalos
4. Reinicia Docker Desktop

### Solución 2: Limpiar Docker
```bash
# Limpiar todos los recursos de Docker
docker system prune -a --volumes

# Reiniciar Docker Desktop
```

### Solución 3: Reset Factory
1. Abre Docker Desktop
2. Settings → Troubleshoot → "Reset to factory defaults"
3. Reinicia la PC

---

## 🎯 Alternativa Sin Docker

Si prefieres NO usar Docker (completamente válido):

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build
npm start
```

**Acceder:** http://localhost:3000

---

## 📋 Verificación del Setup

- [x] Dockerfile creado (producción multi-stage)
- [x] Dockerfile.dev creado (desarrollo)
- [x] docker-compose.yml configurado
- [x] .dockerignore optimizado
- [x] next.config.ts actualizado con standalone
- [x] DOCKER.md guía completa

---

**Próximo paso recomendado:**

Si Docker Desktop da problemas, simplemente usa:
```bash
npm run dev
```

Y accede a http://localhost:3000 para ver el proyecto.

---

**Última actualización**: Diciembre 2024
