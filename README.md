# 🎵 Betancourt Audio Website

Website profesional para Betancourt Audio - Servicios de producción de audio profesional.

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Iniciar servidor de desarrollo
npm run dev
```

### Con Docker

```bash
# Modo desarrollo
docker-compose up

# Modo producción
docker-compose -f docker-compose.prod.yml up --build
```

**Acceder a la aplicación:** [http://localhost:3000](http://localhost:3000)

📖 **Documentación completa:** Ver [SETUP.md](SETUP.md) y [DOCKER.md](DOCKER.md)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Lenguaje**: TypeScript 5 (configuración estricta)
- **UI Library**: React 19
- **Estilos**: Tailwind CSS v4 + CSS Variables
- **Internacionalización**: next-intl (ES/EN)
- **Contenedores**: Docker + Docker Compose

## 📁 Estructura del Proyecto

```
betancourtaudio-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Rutas i18n (ES/EN)
│   │   ├── design-system/     # Sistema de diseño Japandi
│   │   └── globals.css        # Estilos globales + variables CSS
│   ├── components/            # Componentes React reutilizables
│   ├── i18n/                  # Configuración de internacionalización
│   ├── lib/                   # Utilidades y helpers
│   └── types/                 # Definiciones de tipos TypeScript
├── messages/                  # Traducciones (en.json, es.json)
├── public/                    # Archivos estáticos
├── scripts/                   # Scripts de desarrollo
├── Dockerfile                 # Build de producción
├── Dockerfile.dev            # Build de desarrollo
└── docker-compose.yml        # Orquestación Docker
```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo (http://localhost:3000)
npm run lint         # Verificar código con ESLint

# Producción
npm run build        # Build optimizado para producción
npm start            # Ejecutar build de producción

# Docker
docker-compose up                           # Desarrollo con Docker
docker-compose -f docker-compose.prod.yml up  # Producción con Docker
```

## 🌍 Internacionalización (i18n)

El proyecto soporta múltiples idiomas usando **next-intl**:

- **Idioma por defecto**: Español (es)
- **Idiomas disponibles**: Español (es), Inglés (en)
- **Traducciones**: `messages/es.json` y `messages/en.json`

### Uso en componentes

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();
  return <h1>{t('MyComponent.title')}</h1>;
}
```

## 🎨 Sistema de Diseño

**Filosofía**: Japandi (minimalismo japonés + escandinavo)

- **Variables CSS**: Definidas en `src/app/globals.css`
- **Documentación completa**: `/src/app/design-system/`
- **Componentes de ejemplo**: React + HTML

### Variables principales

```css
/* Colores neutros */
--stone-{50-900}

/* Colores de marca */
--clay: #b8956a
--wood: #8b6f47
--linen: #f5ebe0
--sage: #9caf88

/* Tipografía */
--font-display: 'Crimson Pro', serif
--font-body: 'Work Sans', sans-serif

/* Espaciado */
--space-{xs,sm,md,lg,xl,2xl}
```

## 🐳 Docker

### Desarrollo (con hot reload)

```bash
docker-compose up
# O usando el script
.\scripts\docker-dev.bat  # Windows
./scripts/docker-dev.sh   # Mac/Linux
```

### Producción

```bash
# Build y ejecutar
docker build -t betancourt-audio:prod .
docker run -p 3000:3000 betancourt-audio:prod

# O con docker-compose
docker-compose -f docker-compose.prod.yml up --build
```

Ver [DOCKER.md](DOCKER.md) para más detalles.

## 🔒 Seguridad

Headers de seguridad configurados en `next.config.ts`:

- ✅ HSTS (Strict-Transport-Security)
- ✅ X-Frame-Options (SAMEORIGIN)
- ✅ X-Content-Type-Options (nosniff)
- ✅ X-XSS-Protection
- ✅ Referrer-Policy

## 🧪 Quality Checks

```bash
# Lint
npm run lint         # ESLint con configuración de Next.js

# Type checking
npm run build        # TypeScript + Next.js build
```

**Configuración TypeScript**: Modo estricto activado con opciones adicionales de seguridad.

## 📦 Dependencias Principales

### Producción
- `next`: 16.0.8
- `react`: 19.2.1
- `react-dom`: 19.2.1
- `next-intl`: 4.5.8

### Desarrollo
- `typescript`: ^5
- `tailwindcss`: ^4
- `eslint`: ^9
- `eslint-config-next`: 16.0.8

## 🚢 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Otras plataformas

El proyecto incluye configuración `standalone` para deploy en:
- Docker containers
- Kubernetes
- Cloud providers (AWS, GCP, Azure)

## 🐛 Troubleshooting

Ver [SETUP.md](SETUP.md) para soluciones a problemas comunes:

- Puerto 3000 ya en uso
- Errores de dependencias
- Problemas con Docker
- Hot reload no funciona

## 📚 Documentación Adicional

- **[SETUP.md](SETUP.md)** - Guía completa de instalación y configuración
- **[DOCKER.md](DOCKER.md)** - Documentación de Docker
- **[DOCKER-SETUP.md](DOCKER-SETUP.md)** - Setup detallado de Docker
- **`src/app/design-system/`** - Sistema de diseño completo

## 📝 Notas Importantes

- **Next.js 16 Proxy**: El proyecto usa `proxy.ts` (nueva convención de Next.js 16) para manejar i18n routing.
- **TypeScript Strict Mode**: El proyecto usa configuración estricta de TypeScript para máxima seguridad de tipos.
- **Node.js 20+**: Se recomienda usar Node.js 20 o superior.

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto es privado y confidencial.

---

**Desarrollado con ❤️ usando Next.js 16 + React 19**