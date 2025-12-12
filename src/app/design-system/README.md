# 🎨 Sistema de Diseño - Betancourt Audio

> **Versión 1.0** | Última actualización: Diciembre 2024

Este documento define la **única fuente de verdad** para todas las decisiones de diseño y desarrollo del sitio web de Betancourt Audio.

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: CSS Variables nativas + Vanilla CSS
- **Componentes**: React Server/Client Components

> ⚠️ **IMPORTANTE**: Aunque el proyecto tiene Tailwind instalado, el sistema de diseño Japandi se implementa con **variables CSS nativas** definidas en `globals.css`. Los componentes deben usar estas variables, NO utility classes de Tailwind.

---

## 📐 Filosofía de Diseño

### Estética: **Japandi**
Fusión de diseño japonés y escandinavo que combina:

- **Minimalismo**: Espacios limpios, elementos esenciales
- **Calidez**: Tonos terrosos, materiales orgánicos
- **Profesionalismo**: Precisión técnica, atención al detalle
- **Organicidad**: Natural pero controlado

### Enfoque Principal
**Audio de Alta Fidelidad** - Cada elemento visual debe reflejar precisión, calidad y excelencia técnica.

### Modos de Color
Soporte nativo para **modo claro y oscuro** mediante variables CSS semánticas.

---

## 🎨 Tokenización (La Verdad Única)

> ⚠️ **REGLA CRÍTICA**: NUNCA inventes colores, espaciados o valores nuevos. Usa ESTRICTAMENTE las variables CSS definidas en `:root`.

### 1. Paleta de Colores

#### Neutros (Base)
Escala de grises cálidos para fondos, superficies y textos:

```css
var(--stone-50)   /* Casi blanco */
var(--stone-100)
var(--stone-200)
var(--stone-300)
var(--stone-400)
var(--stone-500)  /* Gris medio */
var(--stone-600)
var(--stone-700)
var(--stone-800)
var(--stone-900)  /* Casi negro */
```

#### Mapeo Semántico (Variables Mode-Aware)
Estas variables cambian automáticamente entre modo claro/oscuro:

```css
var(--bg-primary)      /* Fondo principal de la página */
var(--bg-secondary)    /* Fondos de tarjetas, secciones */
var(--text-primary)    /* Texto principal (títulos, cuerpo) */
var(--text-secondary)  /* Texto secundario (descripciones, metadatos) */
var(--border)          /* Bordes sutiles */
```

#### Acentos (Marca)
Colores de la identidad de Betancourt Audio:

```css
var(--clay)   /* #b8956a - Acento primario (CTAs, elementos destacados) */
var(--wood)   /* #8b6f47 - Hover/Active state del acento primario */
var(--linen)  /* Decorativo cálido (usar con moderación) */
var(--sage)   /* Decorativo suave (usar con moderación) */
```

**Uso recomendado:**
- `--clay`: Botones primarios, enlaces importantes, iconos de acción
- `--wood`: Estados hover de elementos con `--clay`
- `--linen`, `--sage`: Detalles decorativos, badges, tags (máximo 1-2 por sección)

---

### 2. Tipografía

#### Familias

```css
var(--font-display)  /* 'Crimson Pro', serif */
var(--font-body)     /* 'Work Sans', sans-serif */
```

#### Uso y Pesos

**Display/Títulos** (`--font-display`):
- Para: H1, H2, H3, títulos de hero, encabezados de sección
- Pesos: 300 (light), 400 (regular), 600 (semibold)
- Estilo: Editorial, elegante, con serifas

**Cuerpo** (`--font-body`):
- Para: Párrafos, botones, navegación, UI text
- Pesos: 300 (light), 400 (regular), 500 (medium)
- Estilo: Legible, profesional, sans-serif

#### Ejemplo de Uso

```css
h1 {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2.5rem, 5vw, 4rem); /* Responsive */
}

p {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.6;
}
```

---

### 3. Espaciado (Ritmo Vertical)

Sistema de espaciado en escala armónica:

```css
var(--space-xs)   /* 0.5rem  (8px)  - Espacios muy pequeños */
var(--space-sm)   /* 1rem    (16px) - Espacios pequeños */
var(--space-md)   /* 1.5rem  (24px) - Espacios medianos */
var(--space-lg)   /* 2.5rem  (40px) - Espacios grandes */
var(--space-xl)   /* 4rem    (64px) - Espacios muy grandes */
var(--space-2xl)  /* 6rem    (96px) - Espacios de sección */
```

**Aplicación:**
- `margin`, `padding`, `gap` en layouts
- Distancias entre elementos relacionados
- Espaciado vertical entre secciones

**❌ NUNCA usar pixeles arbitrarios** como `13px`, `27px`, `45px`.

---

## 🧩 Biblioteca de Componentes

### Botones

#### Clase Base: `.btn`

```css
.btn {
  padding: 0.875rem 2rem;
  border-radius: 2px;
  font-family: var(--font-body);
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}
```

#### Variantes

**Primario** (`.btn-primary`):
```css
.btn-primary {
  background-color: var(--clay);
  color: var(--stone-50);
  border: none;
}

.btn-primary:hover {
  background-color: var(--wood);
  transform: translateY(-2px);
}
```

**Secundario** (`.btn-secondary`):
```css
.btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--clay);
  color: var(--clay);
}
```

---

### Cards (Tarjetas)

Contenedores para proyectos, servicios, testimonios:

```css
.card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: var(--space-lg);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

**Características:**
- Borde sutil de 1px
- Elevación ligera en hover
- Padding consistente usando variables de espaciado

---

## 📋 Reglas de Generación de Código

### 1. **Variable-First** ⚠️

**NUNCA escribas valores directos** si existe una variable:

❌ **Incorrecto:**
```css
.mi-elemento {
  background-color: #ffffff;
  padding: 16px;
  color: #b8956a;
}
```

✅ **Correcto:**
```css
.mi-elemento {
  background-color: var(--bg-primary);
  padding: var(--space-sm);
  color: var(--clay);
}
```

---

### 2. **Consistencia en Modo Oscuro**

Al crear nuevos componentes, usa siempre variables semánticas para que cambien automáticamente entre temas:

✅ **Correcto:**
```css
.navbar {
  background-color: var(--bg-secondary); /* ✓ Cambia con el tema */
  color: var(--text-primary);            /* ✓ Cambia con el tema */
  border-bottom: 1px solid var(--border); /* ✓ Cambia con el tema */
}
```

❌ **Evitar:**
```css
.navbar {
  background-color: #ffffff; /* ✗ Hardcoded, no cambia */
  color: #000000;           /* ✗ Hardcoded, no cambia */
}
```

---

### 3. **Estilo de Código**

- **CSS Nativo** dentro de `<style>` o archivos `.css`
- **Comentarios claros** explicando decisiones
- **Organización**: Agrupar propiedades relacionadas (layout → visual → tipografía → interacción)

```css
/* ✓ Bien organizado */
.hero-section {
  /* Layout */
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  
  /* Visual */
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  
  /* Tipografía */
  font-family: var(--font-body);
  color: var(--text-primary);
  
  /* Interacción */
  transition: all 0.3s ease;
}
```

---

### 4. **Interactividad**

Mantén las transiciones **suaves y consistentes**:

```css
/* Patrón estándar para elementos interactivos */
.interactive-element {
  transition: all 0.3s ease;
}

.interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

**Propiedades comunes para transición:**
- `transform` (movimiento)
- `background-color` (cambios de color)
- `box-shadow` (elevación)
- `opacity` (aparición/desaparición)

---

### 5. **Responsive Design**

- **Grid y Flexbox** para layouts fluidos
- **Evita tamaños fijos** (width: 600px)
- **Usa `clamp()`** para tipografía responsiva

```css
/* ✓ Tipografía fluida */
h1 {
  font-size: clamp(2rem, 4vw, 3.5rem);
}

/* ✓ Layout flexible */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}
```

---

## 🚨 Protocolo de Violación del Sistema

Si se solicita un cambio que **rompe** el sistema de diseño:

### Ejemplo de Solicitud Problemática:
> "Pon un botón azul brillante en el hero"

### Respuesta del Agente:

> ⚠️ **Advertencia de Consistencia**
> 
> El color **azul brillante** no está en la paleta Japandi de Betancourt Audio y rompería la estética cálida y profesional del sitio.
> 
> **Alternativas recomendadas:**
> 1. `var(--clay)` (#b8956a) - Acento primario dorado cálido
> 2. `var(--sage)` - Verde suave si buscas contraste
> 
> ¿Deseas proceder con una de estas opciones o requieres agregar azul al sistema de diseño oficial? (esto último requeriría actualización de tokens).

---

## 📁 Estructura de Archivos

```
design-system/
├── README.md              (este archivo - documentación principal)
├── tokens.md              (referencia rápida de variables CSS)
├── components.md          (biblioteca de componentes React/Next.js)
├── nextjs-implementation.md (guía de implementación en Next.js)
└── examples/
    ├── react/             (componentes React listos para usar)
    │   ├── Button.tsx
    │   ├── Card.tsx
    │   └── ...
    └── html/              (referencia visual HTML - solo para demos)
        ├── buttons.html
        ├── cards.html
        └── layouts.html
```

> 📝 **Nota**: Los archivos HTML en `examples/html/` son solo para **referencia visual** del comportamiento esperado. Los componentes de producción deben usar los ejemplos de React en `examples/react/`.

---

## ✅ Checklist de Revisión

Antes de aprobar cualquier componente o sección nueva, verifica:

- [ ] ¿Usa variables CSS en lugar de valores hardcoded?
- [ ] ¿Funciona correctamente en modo claro y oscuro?
- [ ] ¿Usa el espaciado del sistema (`--space-*`)?
- [ ] ¿La tipografía usa `--font-display` o `--font-body`?
- [ ] ¿Los colores de acento son `--clay`, `--wood`, `--linen` o `--sage`?
- [ ] ¿Las transiciones usan `0.3s ease`?
- [ ] ¿Es responsive (Grid/Flexbox/clamp)?
- [ ] ¿Mantiene la estética Japandi (minimalista, cálida, profesional)?

---

## 🎯 Objetivos del Sistema

1. **Consistencia**: Todos los elementos se sienten parte de la misma familia visual
2. **Escalabilidad**: Nuevos componentes se integran sin romper la armonía
3. **Mantenibilidad**: Cambios globales desde variables, no edit masivos
4. **Accesibilidad**: Contraste adecuado, jerarquía clara
5. **Performance**: CSS eficiente, sin redundancias

---

**Última actualización**: Diciembre 2024  
**Mantenido por**: Equipo de Desarrollo Betancourt Audio
