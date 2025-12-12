# 🎨 Tokens de Diseño - Referencia Rápida

## Colores

### Neutros
```css
--stone-50    /* #fafaf9 */
--stone-100   /* #f5f5f4 */
--stone-200   /* #e7e5e4 */
--stone-300   /* #d6d3d1 */
--stone-400   /* #a8a29e */
--stone-500   /* #78716c */
--stone-600   /* #57534e */
--stone-700   /* #44403c */
--stone-800   /* #292524 */
--stone-900   /* #1c1917 */
```

### Semánticos (Mode-Aware)
```css
--bg-primary      /* Fondo principal */
--bg-secondary    /* Fondo secundario */
--text-primary    /* Texto principal */
--text-secondary  /* Texto secundario */
--border          /* Bordes */
```

### Acentos
```css
--clay   /* #b8956a - Primario */
--wood   /* #8b6f47 - Hover */
--linen  /* Decorativo cálido */
--sage   /* Decorativo suave */
```

---

## Tipografía

```css
--font-display /* 'Crimson Pro', serif (300, 400, 600) */
--font-body    /* 'Work Sans', sans-serif (300, 400, 500) */
```

---

## Espaciado

```css
--space-xs   /* 0.5rem  (8px)  */
--space-sm   /* 1rem    (16px) */
--space-md   /* 1.5rem  (24px) */
--space-lg   /* 2.5rem  (40px) */
--space-xl   /* 4rem    (64px) */
--space-2xl  /* 6rem    (96px) */
```

---

## Uso Rápido

### Botón Primario
```css
background-color: var(--clay);
color: var(--stone-50);
padding: 0.875rem 2rem;
font-family: var(--font-body);
font-weight: 500;
```

### Card
```css
background-color: var(--bg-primary);
border: 1px solid var(--border);
padding: var(--space-lg);
```

### Hero Heading
```css
font-family: var(--font-display);
font-weight: 300;
font-size: clamp(2.5rem, 5vw, 4rem);
color: var(--text-primary);
```
