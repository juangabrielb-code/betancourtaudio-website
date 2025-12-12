# 🧩 Biblioteca de Componentes

## Botones

### `.btn` - Base

```css
.btn {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  /* Visual */
  padding: 0.875rem 2rem;
  border-radius: 2px;
  border: none;
  
  /* Tipografía */
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  
  /* Interacción */
  cursor: pointer;
  transition: all 0.3s ease;
}
```

### `.btn-primary` - Acción Principal

```css
.btn-primary {
  background-color: var(--clay);
  color: var(--stone-50);
  border: none;
}

.btn-primary:hover {
  background-color: var(--wood);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(184, 149, 106, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

**Cuándo usar:**
- CTAs principales (Call-to-Action)
- Formularios de contacto (submit)
- Acciones prioritarias

### `.btn-secondary` - Acción Secundaria

```css
.btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--clay);
  color: var(--clay);
  transform: translateY(-2px);
}
```

**Cuándo usar:**
- Acciones secundarias
- "Ver más", "Aprender más"
- Navegación complementaria

### `.btn-ghost` - Fantasma

```css
.btn-ghost {
  background-color: transparent;
  color: var(--text-secondary);
  border: none;
  padding: 0.5rem 1rem;
}

.btn-ghost:hover {
  color: var(--clay);
  background-color: var(--bg-secondary);
}
```

**Cuándo usar:**
- Navegación en header/footer
- Acciones terciarias
- Enlaces discretos

---

## Cards (Tarjetas)

### `.card` - Base

```css
.card {
  /* Visual */
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 4px;
  
  /* Espaciado */
  padding: var(--space-lg);
  
  /* Interacción */
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--clay);
}
```

### `.card-horizontal` - Horizontal

```css
.card-horizontal {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--space-lg);
}

@media (max-width: 768px) {
  .card-horizontal {
    grid-template-columns: 1fr;
  }
}
```

### `.card-image` - Con Imagen

```html
<div class="card">
  <img src="..." alt="..." class="card-image">
  <div class="card-content">
    <h3>Título</h3>
    <p>Descripción...</p>
  </div>
</div>
```

```css
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: var(--space-md);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
```

---

## Navegación

### `.navbar`

```css
.navbar {
  /* Layout */
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* Visual */
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  
  /* Espaciado */
  padding: var(--space-md) var(--space-lg);
  
  /* Posición */
  position: sticky;
  top: 0;
  z-index: 100;
  
  /* Efecto */
  backdrop-filter: blur(10px);
  background-color: rgba(var(--bg-primary-rgb), 0.95);
}
```

### `.nav-links`

```css
.nav-links {
  display: flex;
  gap: var(--space-lg);
  list-style: none;
}

.nav-link {
  font-family: var(--font-body);
  font-weight: 400;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--clay);
}
```

---

## Secciones

### `.hero-section`

```css
.hero-section {
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  /* Espaciado */
  padding: var(--space-2xl) var(--space-lg);
  min-height: 80vh;
  gap: var(--space-lg);
  
  /* Visual */
  background-color: var(--bg-primary);
}

.hero-title {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--text-primary);
  line-height: 1.2;
}

.hero-subtitle {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: var(--text-secondary);
  max-width: 600px;
}
```

### `.content-section`

```css
.content-section {
  /* Espaciado */
  padding: var(--space-xl) var(--space-lg);
  
  /* Layout */
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.section-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
}

.section-description {
  font-family: var(--font-body);
  font-weight: 300;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
}
```

---

## Grid Layouts

### `.grid-2-col`

```css
.grid-2-col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-lg);
}

@media (max-width: 768px) {
  .grid-2-col {
    grid-template-columns: 1fr;
  }
}
```

### `.grid-3-col`

```css
.grid-3-col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}

@media (max-width: 768px) {
  .grid-3-col {
    grid-template-columns: 1fr;
  }
}
```

---

## Formularios

### `.form-group`

```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
}

.form-label {
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--text-primary);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-input,
.form-textarea {
  /* Visual */
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 2px;
  
  /* Espaciado */
  padding: var(--space-sm);
  
  /* Tipografía */
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-primary);
  
  /* Interacción */
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--clay);
  box-shadow: 0 0 0 3px rgba(184, 149, 106, 0.1);
}
```

---

## Badges y Tags

### `.badge`

```css
.badge {
  /* Visual */
  display: inline-flex;
  align-items: center;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  
  /* Espaciado */
  padding: var(--space-xs) var(--space-sm);
  
  /* Tipografía */
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
}

.badge-accent {
  background-color: var(--clay);
  color: var(--stone-50);
  border-color: var(--clay);
}
```

---

## Efectos y Utilidades

### `.glass-effect`

Efecto de glassmorphism sutil:

```css
.glass-effect {
  background-color: rgba(var(--bg-primary-rgb), 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
}
```

### `.text-gradient`

Gradiente de texto para títulos especiales:

```css
.text-gradient {
  background: linear-gradient(135deg, var(--clay), var(--wood));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### `.divider`

Separador visual:

```css
.divider {
  width: 100%;
  height: 1px;
  background-color: var(--border);
  margin: var(--space-lg) 0;
}
```

---

## Ejemplos de Uso

### Proyecto Card

```html
<article class="card">
  <img src="project.jpg" alt="Proyecto" class="card-image">
  <div class="card-content">
    <span class="badge badge-accent">Audio Post</span>
    <h3 class="card-title">Nombre del Proyecto</h3>
    <p class="card-description">Descripción breve del proyecto...</p>
    <a href="#" class="btn btn-secondary">Ver Detalles</a>
  </div>
</article>
```

### Hero con CTA

```html
<section class="hero-section">
  <h1 class="hero-title">Audio de Alta Fidelidad</h1>
  <p class="hero-subtitle">Mezcla, masterización y post-producción profesional</p>
  <div style="display: flex; gap: var(--space-md);">
    <a href="#contacto" class="btn btn-primary">Iniciar Proyecto</a>
    <a href="#portafolio" class="btn btn-secondary">Ver Trabajos</a>
  </div>
</section>
```
