# ☕ Café El Hatillo - Sitio Web

![Café El Hatillo](https://img.shields.io/badge/Caf%C3%A9-El%20Hatillo-8B4513?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss)

## 📋 Descripción

Sitio web de **Café El Hatillo**, una marca de café de especialidad de las montañas de Togüí, Boyacá, Colombia. Este proyecto presenta una experiencia visual moderna e inmersiva que destaca la historia, el proceso artesanal y la calidad premium del café colombiano.

## ✨ Características

### 🎨 Diseño y UX
- **Diseño minimalista elegante** con paleta de colores tierra (crema, café, dorado)
- **Animaciones suaves** con parallax scrolling y transiciones fluidas
- **Totalmente responsive** - optimizado para móviles, tablets y desktop
- **Navegación intuitiva** con menú sticky y scroll suave

### 📦 Secciones del Sitio
1. **Hero Section** - Banner impactante con efecto parallax
2. **Historia** - Origen y tradición del café boyacense
3. **Productos** - Catálogo con dos variedades (Clásico y Reserva)
4. **Proceso** - Timeline interactivo del cultivo a la taza
5. **Galería** - Imágenes filtradas por categorías
6. **Beneficios** - Valores de sostenibilidad y comercio justo
7. **Origen** - Información del terroir de Togüí
8. **Testimonios** - Reseñas de clientes
9. **Preparación** - Guías detalladas para 5 métodos
10. **Suscripción** - Club de café mensual
11. **Contacto** - Formulario y datos de contacto

### 🛠️ Tecnologías

- **Frontend Framework:** React 18.3.1
- **Lenguaje:** TypeScript 5.5.3
- **Build Tool:** Vite 5.4.2
- **Estilos:** TailwindCSS 3.4.1
- **Iconos:** Lucide React 0.344.0
- **Backend (opcional):** Supabase 2.57.4

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/cafe-el-hatillo.git
cd cafe-el-hatillo
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con hot reload |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Ejecuta ESLint para análisis de código |
| `npm run typecheck` | Verifica tipos de TypeScript |

## 📁 Estructura del Proyecto

```
Cafe-bolt-main/
├── public/
│   └── images/
│       ├── gallery/      # Imágenes de la galería
│       ├── hero/         # Imágenes del hero
│       ├── process/      # Imágenes del proceso
│       ├── products/     # Imágenes de productos
│       └── story/        # Imágenes de historia
├── src/
│   ├── assets/
│   │   └── images.ts     # Configuración de rutas de imágenes
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales con Tailwind
├── eslint.config.js      # Configuración de ESLint
├── postcss.config.js     # Configuración de PostCSS
├── tailwind.config.js    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
├── vite.config.ts        # Configuración de Vite
└── package.json          # Dependencias y scripts
```

## 🎨 Paleta de Colores

La paleta de colores está inspirada en los tonos naturales del café:

```javascript
colors: {
  'cream-light': '#F5F0E8',   // Fondo principal
  'cream-warm': '#E8DCC8',    // Acentos cálidos
  'cream-medium': '#D4C4A8',  // Bordes suaves
  'coffee-dark': '#3E2723',   // Texto principal
  'coffee-medium': '#6D4C41', // Texto secundario
  'gold-muted': '#B8956A',    // Acentos dorados
  'olive-dark': '#556B2F'     // WhatsApp button
}
```

## 🖼️ Gestión de Imágenes

Las imágenes se organizan por categorías en `src/assets/images.ts`:

```typescript
export const IMAGES = {
  hero: { main: '/images/hero/hero-coffee.jpg' },
  story: { cafetales: '/images/story/cafetales.jpg', ... },
  products: { clasico: '/images/products/clasico.jpg', ... },
  process: { cultivo: '/images/process/cultivo.jpg', ... },
  gallery: { mountains: '/images/gallery/mountains.jpg', ... },
  preparation: { pourover: '/images/preparation/pourover.jpg', ... }
}
```

## 🔧 Configuración de Desarrollo

### ESLint
Configuración moderna con TypeScript ESLint y reglas para React:
```bash
npm run lint
```

### TypeScript
Type checking estricto configurado en `tsconfig.json`:
```bash
npm run typecheck
```

### Vite
Hot Module Replacement (HMR) configurado con React Fast Refresh para desarrollo ágil.

## 📱 Características Responsive

- **Mobile First Design**
- Breakpoints de Tailwind:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## 🌟 Componentes Principales

### 1. StickyNav
Navegación que aparece al hacer scroll con efecto de desvanecimiento.

### 2. HeroSection
Banner principal con parallax scrolling y animación de entrada.

### 3. ProductSection
Catálogo interactivo con selector de tamaños y precios dinámicos.

### 4. ProcessSection
Timeline animado que muestra las 5 etapas del café.

### 5. GallerySection
Galería filtrable por categorías con lightbox modal.

### 6. PreparationSection
Guías paso a paso para 5 métodos de preparación.

## 🚢 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Pages para servir desde /docs
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👥 Autores

- **Tu Nombre** - *Desarrollo inicial* - [Tu GitHub](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- Familia productora de café en Togüí, Boyacá
- Comunidad de React y TypeScript
- Lucide Icons por los iconos hermosos
- Tailwind CSS por el framework de utilidades

## 📞 Contacto

- **Sitio Web:** [www.cafeelhatillo.com](https://www.cafeelhatillo.com)
- **Email:** info@cafeelhatillo.com
- **Instagram:** [@cafeelhatillo](https://instagram.com/cafeelhatillo)
- **WhatsApp:** +57 300 123 4567

---

<div align="center">
  <p>Hecho con ☕ y ❤️ en Togüí, Boyacá, Colombia</p>
  <p>© 2025 Café El Hatillo. Todos los derechos reservados.</p>
</div>
