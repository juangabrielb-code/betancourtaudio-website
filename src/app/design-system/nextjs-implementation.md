# 🚀 Implementación en Next.js

Guía práctica para implementar el Sistema de Diseño Japandi en componentes Next.js.

---

## 📦 Setup Inicial

### 1. Definir Variables CSS en `globals.css`

Reemplaza el contenido actual de `src/app/globals.css` con nuestros tokens:

```css
@import "tailwindcss";

/* ============================================
   SISTEMA DE DISEÑO JAPANDI - BETANCOURT AUDIO
   ============================================ */

/* Importar tipografías de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600&family=Work+Sans:wght@300;400;500&display=swap');

:root {
  /* === COLORES NEUTROS === */
  --stone-50: #fafaf9;
  --stone-100: #f5f5f4;
  --stone-200: #e7e5e4;
  --stone-300: #d6d3d1;
  --stone-400: #a8a29e;
  --stone-500: #78716c;
  --stone-600: #57534e;
  --stone-700: #44403c;
  --stone-800: #292524;
  --stone-900: #1c1917;

  /* === ACENTOS (MARCA) === */
  --clay: #b8956a;
  --wood: #8b6f47;
  --linen: #f5ebe0;
  --sage: #9caf88;

  /* === TIPOGRAFÍA === */
  --font-display: 'Crimson Pro', serif;
  --font-body: 'Work Sans', sans-serif;

  /* === ESPACIADO === */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;

  /* === SEMÁNTICOS - MODO CLARO === */
  --bg-primary: var(--stone-50);
  --bg-secondary: var(--stone-100);
  --text-primary: var(--stone-900);
  --text-secondary: var(--stone-600);
  --border: var(--stone-300);
}

/* === MODO OSCURO === */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--stone-900);
    --bg-secondary: var(--stone-800);
    --text-primary: var(--stone-50);
    --text-secondary: var(--stone-400);
    --border: var(--stone-700);
  }
}

/* === ESTILOS BASE === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body), ui-sans-serif, system-ui, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 300;
}
```

---

## 🎨 Opciones de Estilos en Next.js

Puedes usar **cualquiera** de estas opciones (se recomienda CSS Modules para mayor encapsulamiento):

### Opción 1: CSS Modules (Recomendado)

```typescript
// Button.module.css
.btn {
  padding: 0.875rem 2rem;
  border-radius: 2px;
  font-family: var(--font-body);
  transition: all 0.3s ease;
}

.primary {
  background-color: var(--clay);
  color: var(--stone-50);
}

.primary:hover {
  background-color: var(--wood);
  transform: translateY(-2px);
}
```

```tsx
// Button.tsx
import styles from './Button.module.css';

export function Button({ variant = 'primary', children }) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`}>
      {children}
    </button>
  );
}
```

### Opción 2: Inline Styles con Variables CSS

```tsx
export function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        padding: 'var(--space-lg)',
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </div>
  );
}
```

### Opción 3: className con CSS Global

Crea `/src/app/components.css` con las clases base:

```css
/* components.css */
.btn {
  padding: 0.875rem 2rem;
  border-radius: 2px;
  font-family: var(--font-body);
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--clay);
  color: var(--stone-50);
}
```

Importa en `layout.tsx`:

```tsx
import './globals.css';
import './components.css';
```

Úsalo en componentes:

```tsx
export function Button() {
  return <button className="btn btn-primary">Click</button>;
}
```

---

## 📂 Estructura Recomendada de Componentes

```
src/
├── app/
│   ├── globals.css           (variables CSS del sistema)
│   ├── components.css        (estilos globales de componentes)
│   └── layout.tsx
└── components/
    ├── ui/                   (componentes reutilizables)
    │   ├── Button/
    │   │   ├── Button.tsx
    │   │   ├── Button.module.css
    │   │   └── index.ts
    │   ├── Card/
    │   │   ├── Card.tsx
    │   │   ├── Card.module.css
    │   │   └── index.ts
    │   └── ...
    └── sections/             (secciones completas)
        ├── Hero.tsx
        ├── Services.tsx
        └── ...
```

---

## 🧩 Componentes Base Recomendados

### 1. Button Component

```tsx
// src/components/ui/Button/Button.tsx
import { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  variant = 'primary', 
  children, 
  onClick,
  type = 'button'
}: ButtonProps) {
  return (
    <button 
      type={type}
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### 2. Card Component

```tsx
// src/components/ui/Card/Card.tsx
import { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <article className={`${styles.card} ${className}`}>
      {children}
    </article>
  );
}

// Subcomponentes
Card.Image = function CardImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className={styles.cardImage} />;
};

Card.Content = function CardContent({ children }: { children: ReactNode }) {
  return <div className={styles.cardContent}>{children}</div>;
};

Card.Title = function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className={styles.cardTitle}>{children}</h3>;
};

Card.Description = function CardDescription({ children }: { children: ReactNode }) {
  return <p className={styles.cardDescription}>{children}</p>;
};
```

### 3. Section Component

```tsx
// src/components/ui/Section/Section.tsx
import { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'hero';
  className?: string;
}

export function Section({ 
  children, 
  variant = 'default',
  className = '' 
}: SectionProps) {
  return (
    <section className={`${styles.section} ${styles[variant]} ${className}`}>
      {children}
    </section>
  );
}
```

---

## 🎯 Patrones de Uso

### Hero Section

```tsx
// app/page.tsx
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Audio de Alta Fidelidad</h1>
      <p className={styles.heroSubtitle}>
        Mezcla, masterización y post-producción profesional
      </p>
      <div className={styles.buttonGroup}>
        <Button variant="primary">Iniciar Proyecto</Button>
        <Button variant="secondary">Ver Portfolio</Button>
      </div>
    </section>
  );
}
```

```css
/* page.module.css */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-2xl) var(--space-lg);
  min-height: 80vh;
  gap: var(--space-lg);
}

.heroTitle {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--text-primary);
}

.heroSubtitle {
  font-family: var(--font-body);
  color: var(--text-secondary);
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  max-width: 600px;
}

.buttonGroup {
  display: flex;
  gap: var(--space-md);
}
```

### Grid de Proyectos

```tsx
import { Card } from '@/components/ui/Card';
import styles from './projects.module.css';

export function ProjectsGrid({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <Card key={project.id}>
          <Card.Image src={project.image} alt={project.title} />
          <Card.Content>
            <Card.Title>{project.title}</Card.Title>
            <Card.Description>{project.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
```

```css
/* projects.module.css */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}
```

---

## ⚠️ Reglas Críticas para Next.js

### ✅ HACER

```tsx
// ✓ Usar variables CSS
<div style={{ padding: 'var(--space-lg)' }} />

// ✓ CSS Modules con variables
.card {
  background-color: var(--bg-primary);
}

// ✓ Componentes tipados
interface ButtonProps {
  variant: 'primary' | 'secondary';
}
```

### ❌ NO HACER

```tsx
// ✗ Valores hardcoded
<div style={{ padding: '40px' }} />

// ✗ Tailwind utility classes que duplican el sistema
<button className="bg-blue-500 px-8 py-4" />

// ✗ Colores que no están en la paleta
<div style={{ color: '#0000ff' }} />
```

---

## 🔄 Migración desde Tailwind

Si ya tienes componentes con Tailwind, reemplaza así:

| Tailwind | Sistema Japandi |
|----------|----------------|
| `bg-white` | `backgroundColor: 'var(--bg-primary)'` |
| `text-gray-900` | `color: 'var(--text-primary)'` |
| `p-4` | `padding: 'var(--space-sm)'` |
| `gap-6` | `gap: 'var(--space-md)'` |
| `rounded` | `borderRadius: '4px'` |
| `border` | `border: '1px solid var(--border)'` |

---

## 📋 Checklist de Implementación

- [ ] Variables CSS añadidas a `globals.css`
- [ ] Tipografías importadas (Crimson Pro, Work Sans)
- [ ] Componentes base creados (Button, Card, etc.)
- [ ] Estilos usan CSS Modules o CSS global
- [ ] NUNCA valores hardcoded
- [ ] Modo oscuro funciona automáticamente
- [ ] TypeScript con tipos apropiados
- [ ] Responsive con Grid/Flexbox/clamp

---

**Próximo paso**: Ver ejemplos completos en `/examples/react/`
