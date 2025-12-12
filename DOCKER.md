# 🐳 Docker - Betancourt Audio

Guía para ejecutar el proyecto con Docker.

---

## 📋 Requisitos Previos

- Docker instalado ([descargar](https://www.docker.com/products/docker-desktop))
- Docker Compose (incluido en Docker Desktop)

---

## 🚀 Inicio Rápido

### Modo Desarrollo (Recomendado para visualizar cambios)

```bash
# Levantar el servidor de desarrollo
docker-compose up

# O en segundo plano (detached)
docker-compose up -d

# Ver logs
docker-compose logs -f
```

**Acceder a la aplicación:**
- URL: http://localhost:3000

**Hot Reload:** Los cambios en el código se reflejan automáticamente sin reiniciar el contenedor.

### Detener el servidor

```bash
# Detener contenedores
docker-compose down

# Detener y eliminar volúmenes (limpieza completa)
docker-compose down -v
```

---

## 🏗️ Modo Producción

Para crear una build optimizada de producción:

```bash
# Build de la imagen
docker build -t betancourt-audio:prod .

# Ejecutar contenedor
docker run -p 3000:3000 betancourt-audio:prod
```

Acceder en: http://localhost:3000

---

## 📁 Archivos Docker

```
betancourtaudio-website/
├── Dockerfile              # Build de producción (multi-stage)
├── Dockerfile.dev          # Build de desarrollo (simple)
├── docker-compose.yml      # Orquestación para desarrollo
└── .dockerignore          # Archivos excluidos del build
```

---

## 🔧 Comandos Útiles

### Desarrollo

```bash
# Rebuild sin cache
docker-compose build --no-cache

# Rebuild y reiniciar
docker-compose up --build

# Ejecutar comandos dentro del contenedor
docker-compose exec web npm install <paquete>
docker-compose exec web npm run lint

# Acceder al shell del contenedor
docker-compose exec web sh
```

### Producción

```bash
# Build optimizado
docker build -t betancourt-audio:latest .

# Ver tamaño de la imagen
docker images betancourt-audio

# Inspeccionar logs
docker logs <container-id>
```

---

## 🐛 Troubleshooting

### El contenedor no inicia

```bash
# Ver logs detallados
docker-compose logs

# Verificar que el puerto 3000 no esté en uso
netstat -ano | findstr :3000  # Windows
lsof -i :3000                  # Mac/Linux
```

### Hot reload no funciona

```bash
# Reconstruir contenedor
docker-compose down
docker-compose up --build
```

### Cambios en package.json no se reflejan

```bash
# Eliminar volumen de node_modules y reconstruir
docker-compose down -v
docker-compose up --build
```

### Error de permisos

```bash
# Cambiar ownership (Mac/Linux)
sudo chown -R $USER:$USER .

# En Windows, ejecutar Docker Desktop como administrador
```

---

## 📊 Arquitectura Docker

### Dockerfile (Producción)

**3 etapas:**
1. **deps**: Instala dependencias de Node
2. **builder**: Compila el proyecto Next.js
3. **runner**: Ejecuta la app con mínima surface area

**Optimizaciones:**
- Usuario no-root (seguridad)
- Multi-stage build (reduce tamaño)
- Standalone output (solo archivos necesarios)
- Cache de layers

### docker-compose.yml (Desarrollo)

**Características:**
- Hot reload habilitado
- Source code montado como volumen
- node_modules preservado en volumen Docker
- Variables de entorno configuradas

---

## 🎯 Flujo de Trabajo Recomendado

### 1. Desarrollo Local (sin Docker)

```bash
npm install
npm run dev
```

### 2. Testing con Docker

```bash
docker-compose up
```

Verifica que todo funcione igual que localmente.

### 3. Build de Producción

```bash
docker build -t betancourt-audio:v1.0.0 .
docker run -p 3000:3000 betancourt-audio:v1.0.0
```

### 4. Deploy

```bash
# Tag y push a registry (ej: Docker Hub)
docker tag betancourt-audio:v1.0.0 usuario/betancourt-audio:v1.0.0
docker push usuario/betancourt-audio:v1.0.0
```

---

## 🌐 Variables de Entorno

Para usar variables de entorno en Docker:

1. Crea un archivo `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://api.example.com
```

2. Actualiza `docker-compose.yml`:
```yaml
services:
  web:
    env_file:
      - .env.local
```

---

## ✅ Verificación del Setup

Después de `docker-compose up`, verifica:

- [ ] Servidor accesible en http://localhost:3000
- [ ] Hot reload funciona (edita un componente)
- [ ] No hay errores en los logs
- [ ] Sistema de diseño se carga correctamente
- [ ] Navegación i18n funciona

---

## 📝 Notas Importantes

- **Node Modules**: Se preservan en un volumen Docker para evitar conflictos entre Windows/Linux
- **Standalone Output**: Next.js genera una versión auto-contenida en `.next/standalone`
- **Next.js 16**: Usa configuración optimizada para la versión canary

---

**Última actualización**: Diciembre 2024
