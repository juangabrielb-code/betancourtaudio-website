# 📁 Índice del Sistema de Diseño

Bienvenido a la documentación del Sistema de Diseño de **Betancourt Audio**.

## 📚 Documentación Principal

### [README.md](./README.md)
**Documento principal** - Consulta primero
- Stack tecnológico (Next.js 15)
- Filosofía de diseño Japandi
- Tokenización completa (colores, tipografía, espaciado)
- Reglas de generación de código
- Protocolo de violación del sistema
- Checklist de revisión

### [nextjs-implementation.md](./nextjs-implementation.md)
**Guía de implementación Next.js** - Cómo usar el sistema en producción
- Setup de variables CSS en `globals.css`
- Opciones de estilos (CSS Modules, inline, global)
- Estructura de componentes recomendada
- Patrones de uso (Hero, Grid, etc.)
- Migración desde Tailwind
- Checklist de implementación

### [tokens.md](./tokens.md)
**Referencia rápida** - Para copiar y pegar
- Todas las variables CSS en un solo lugar
- Valores exactos de colores
- Ejemplos de uso rápido

### [components.md](./components.md)
**Biblioteca de componentes** - Patrones listos para usar
- Botones (primarios, secundarios, ghost)
- Cards (tarjetas de proyectos/servicios)
- Navegación (navbar, enlaces)
- Secciones (hero, content)
- Formularios
- Grid layouts
- Badges y utilidades

## 🎨 Ejemplos Listos para Usar

### React Components (Producción)

Componentes Next.js con TypeScript - **COPIA ESTOS A TU PROYECTO**

#### [examples/react/README.md](./examples/react/README.md)
Guía completa de uso de componentes React

#### Componentes Disponibles:
- **[Button.tsx](./examples/react/Button.tsx)** + [Button.module.css](./examples/react/Button.module.css)
- **[Card.tsx](./examples/react/Card.tsx)** + [Card.module.css](./examples/react/Card.module.css)
- **[Section.tsx](./examples/react/Section.tsx)** + [Section.module.css](./examples/react/Section.module.css)

### HTML (Solo Referencia Visual)

Abre estos archivos en el navegador para ver el comportamiento esperado:

- [examples/html/buttons.html](./examples/html/buttons.html)
- [examples/html/cards.html](./examples/html/cards.html)
- [examples/html/layouts.html](./examples/html/layouts.html)

> ⚠️ Los archivos HTML son solo demos. Usa los componentes React para producción.


## 🚀 Inicio Rápido

### 1. Lee la filosofía
Empieza por [README.md](./README.md) para entender la estética Japandi y las reglas del sistema.

### 2. Consulta los tokens
Usa [tokens.md](./tokens.md) como referencia permanente mientras codificas.

### 3. Copia componentes
Encuentra el patrón que necesitas en [components.md](./components.md) y adáptalo.

### 4. Visualiza ejemplos
Abre los archivos HTML en `examples/` para ver cómo se ven los componentes.

## ⚠️ Reglas Críticas

1. **NUNCA** uses valores hardcoded (`#ffffff`, `16px`)
2. **SIEMPRE** usa variables CSS (`var(--clay)`, `var(--space-md)`)
3. **VERIFICA** que funciona en modo claro y oscuro
4. **MANTÉN** transiciones en `0.3s ease`
5. **USA** `--font-display` para títulos, `--font-body` para texto

## 📞 Consultas

Si tienes dudas sobre qué variable usar o cómo aplicar el sistema:

1. Revisa [README.md § Reglas de Generación](./README.md#-reglas-de-generación-de-código)
2. Consulta [components.md](./components.md) para patrones similares
3. Verifica los ejemplos HTML en `examples/`

---

**Última actualización**: Diciembre 2024  
**Versión del Sistema**: 1.0
