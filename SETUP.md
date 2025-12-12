# 🚀 Guía de Setup - Betancourt Audio

Guía completa para configurar y ejecutar el proyecto.

---

## 📋 Requisitos Previos

### Desarrollo Local
- Node.js 20+ ([descargar](https://nodejs.org/))
- npm (incluido con Node.js)
- Git

### Desarrollo con Docker
- Docker Desktop ([descargar](https://www.docker.com/products/docker-desktop))
- Docker Compose (incluido en Docker Desktop)

---

## 🎯 Inicio Rápido

### Opción 1: Desarrollo Local (Recomendado)

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd betancourtaudio-website

# 2. Instalar dependencias
npm install

# 3. Copiar variables de entorno (opcional)
cp .env.example .env.local

# 4. Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Opción 2: Desarrollo con Docker

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd betancourtaudio-website

# 2. Iniciar con Docker Compose
docker-compose up

# O en segundo plano
docker-compose up -d
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 📁 Estructura del Proyecto

```
betancourtaudio-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Rutas i18n
│   │   ├── design-system/     # Sistema de diseño
│   │   ├── globals.css        # Estilos globales
│   │   └── layout.tsx         # Layout raíz
│   ├── components/            # Componentes React
│   ├── i18n/                  # Configuración i18n
│   ├── lib/                   # Utilidades
│   └── types/                 # TypeScript types
├── messages/                  # Traducciones (i18n)
│   ├── en.json               # Inglés
│   └── es.json               # Español
├── public/                    # Archivos estáticos
├── Dockerfile                 # Docker producción
├── Dockerfile.dev            # Docker desarrollo
├── docker-compose.yml        # Docker dev setup
├── docker-compose.prod.yml   # Docker prod setup
└── next.config.ts            # Configuración Next.js
```

---

## 🛠️ Comandos Disponibles

### Desarrollo Local

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Build y Deploy
npm run build        # Build de producción
npm start            # Ejecutar build de producción

# Code Quality
npm run lint         # Ejecutar ESLint
```

### Docker

```bash
# Desarrollo
docker-compose up                    # Iniciar dev server
docker-compose up -d                 # Iniciar en background
docker-compose down                  # Detener contenedores
docker-compose down -v               # Detener y limpiar volúmenes
docker-compose logs -f               # Ver logs
docker-compose exec web sh           # Acceder al contenedor

# Producción
docker-compose -f docker-compose.prod.yml up --build
docker build -t betancourt-audio:prod .
docker run -p 3000:3000 betancourt-audio:prod
```

---

## 🌍 Internacionalización (i18n)

El proyecto soporta múltiples idiomas usando `next-intl`:

- **Idioma por defecto**: Español (es)
- **Idiomas soportados**: Español (es), Inglés (en)

### Agregar traducciones

1. Editar `messages/es.json` y `messages/en.json`
2. Usar en componentes:

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();

  return <h1>{t('MyComponent.title')}</h1>;
}
```

### Agregar nuevo idioma

1. Crear `messages/{locale}.json`
2. Actualizar `src/proxy.ts`:
   ```ts
   locales: ['en', 'es', 'fr'], // Agregar nuevo idioma
   ```
3. Actualizar `src/i18n/request.ts`:
   ```ts
   const locales = ['en', 'es', 'fr'];
   ```

---

## 🎨 Sistema de Diseño

El proyecto usa un sistema de diseño Japandi con variables CSS:

- **Documentación**: `/src/app/design-system/`
- **Tokens**: Variables CSS en `src/app/globals.css`
- **Componentes**: Ejemplos en React y HTML

### Variables disponibles

```css
/* Colores */
--stone-{50-900}
--clay, --wood, --linen, --sage

/* Tipografía */
--font-display: 'Crimson Pro'
--font-body: 'Work Sans'

/* Espaciado */
--space-{xs,sm,md,lg,xl,2xl}
```

---

## 🔒 Seguridad

El proyecto incluye headers de seguridad configurados en `next.config.ts`:

- ✅ Strict-Transport-Security (HSTS)
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy

---

## 🐛 Troubleshooting

### Puerto 3000 ya en uso

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -i :3000
kill -9 <PID>
```

### Error de dependencias

```bash
# Limpiar cache e instalar
rm -rf node_modules package-lock.json
npm install
```

### Docker: Hot reload no funciona

```bash
docker-compose down -v
docker-compose up --build
```

### TypeScript errors después de actualizar

```bash
rm -rf .next
npm run build
```

---

## 📝 Variables de Entorno

Crear `.env.local` para desarrollo (copiar de `.env.example`):

```env
# Next.js
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1

# API (opcional)
# NEXT_PUBLIC_API_URL=http://localhost:3000/api
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Nota**: Variables con `NEXT_PUBLIC_` son accesibles en el cliente.

---

## 🚢 Deploy a Producción

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
# Build imagen
docker build -t betancourt-audio:latest .

# Tag y push a registry
docker tag betancourt-audio:latest your-registry/betancourt-audio:latest
docker push your-registry/betancourt-audio:latest
```

### Manual

```bash
npm run build
npm start
```

---

## ✅ Checklist de Verificación

Después del setup, verificar:

- [ ] Servidor accesible en http://localhost:3000
- [ ] Hot reload funciona (editar componente y ver cambios)
- [ ] Cambio de idioma funciona (ES/EN)
- [ ] Sistema de diseño se carga correctamente
- [ ] No hay errores en consola del navegador
- [ ] ESLint pasa sin errores (`npm run lint`)
- [ ] Build funciona (`npm run build`)

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [next-intl](https://next-intl-docs.vercel.app/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

## 📄 Licencia

Este proyecto es privado y confidencial.

---

**¿Necesitas ayuda?** Abre un issue o contacta al equipo de desarrollo.
