# 🎨 Componentes React - Sistema de Diseño Japandi

Componentes listos para producción en Next.js con TypeScript.

---

## 📦 Componentes Disponibles

### 1. Button
Botón con 3 variantes: `primary`, `secondary`, `ghost`

**Uso:**
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary">Iniciar Proyecto</Button>
<Button variant="secondary">Ver Más</Button>
<Button variant="ghost">Enlace</Button>
```

**Props:**
- `variant?: 'primary' | 'secondary' | 'ghost'` (default: `'primary'`)
- `children: ReactNode`
- Todos los props nativos de `<button>` (onClick, disabled, etc.)

---

### 2. Card
Tarjeta con patrón de composición para máxima flexibilidad

**Uso:**
```tsx
import { Card } from '@/components/ui/Card';

<Card>
  <Card.Image src="/proyecto.jpg" alt="Proyecto" />
  <Card.Content>
    <Card.Title>Nombre del Proyecto</Card.Title>
    <Card.Description>Descripción breve del proyecto...</Card.Description>
  </Card.Content>
</Card>
```

**Subcomponentes:**
- `Card.Image` - Imagen del card
- `Card.Content` - Contenedor de contenido
- `Card.Title` - Título (h3)
- `Card.Description` - Descripción (p)

---

### 3. Section
Sección de contenido con variantes `default` y `hero`

**Uso:**
```tsx
import { Section } from '@/components/ui/Section';

// Hero
<Section variant="hero">
  <h1>Audio de Alta Fidelidad</h1>
  <p>Mezcla profesional...</p>
</Section>

// Content
<Section>
  <h2>Servicios</h2>
  {/* contenido */}
</Section>
```

**Props:**
- `variant?: 'default' | 'hero'` (default: `'default'`)
- `className?: string`
- `children: ReactNode`

---

## 🚀 Instalación en tu Proyecto

### Opción 1: Copiar Archivos Completos (Recomendado)

1. Copia la carpeta de componentes:
```bash
# Ejemplo: Button
src/app/design-system/examples/react/Button.tsx
src/app/design-system/examples/react/Button.module.css

# A tu proyecto:
src/components/ui/Button/Button.tsx
src/components/ui/Button/Button.module.css
src/components/ui/Button/index.ts (exportar)
```

2. Crea `index.ts` para exportar:
```tsx
// src/components/ui/Button/index.ts
export { Button } from './Button';
```

### Opción 2: Import Directo (Solo para Desarrollo/Referencia)

```tsx
import { Button } from '@/app/design-system/examples/react/Button';
```

---

## 📂 Estructura Recomendada

```
src/
├── components/
│   └── ui/
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.module.css
│       │   └── index.ts
│       ├── Card/
│       │   ├── Card.tsx
│       │   ├── Card.module.css
│       │   └── index.ts
│       └── Section/
│           ├── Section.tsx
│           ├── Section.module.css
│           └── index.ts
└── app/
    ├── globals.css (con variables del sistema)
    └── ...
```

---

## 🎨 Personalización

### Extender Estilos

Usa el prop `className` para agregar estilos adicionales:

```tsx
<Button className="mi-clase-custom">Click</Button>
```

```css
/* En tu módulo CSS */
.mi-clase-custom {
  width: 100%;
  /* Otros estilos específicos */
}
```

### Crear Variantes Nuevas

Edita el CSS Module:

```css
/* Button.module.css */
.large {
  padding: 1.25rem 3rem;
  font-size: 1.125rem;
}
```

Actualiza TypeScript:

```tsx
// Button.tsx
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'large';
```

---

## ✅ Garantías de Estos Componentes

- ✅ Usan **SOLO** variables CSS del sistema
- ✅ Funcionan en **modo claro y oscuro**
- ✅ **Responsive** por defecto
- ✅ **TypeScript** completo
- ✅ **Accesibles** (semántica HTML correcta)
- ✅ **Estética Japandi** consistente
- ✅ Transiciones suaves (`0.3s ease`)

---

## 📖 Próximos Pasos

1. Lee [`nextjs-implementation.md`](../nextjs-implementation.md) para setup completo
2. Revisa [`components.md`](../components.md) para más patrones
3. Consulta [`tokens.md`](../tokens.md) para variables disponibles

---

**Última actualización**: Diciembre 2024
