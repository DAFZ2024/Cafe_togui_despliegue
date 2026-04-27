<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,12&height=220&section=header&text=☕%20Café%20El%20Hatillo&fontSize=60&fontColor=F5F0E8&animation=fadeIn&desc=Café%20de%20Especialidad%20·%20Togüí,%20Boyacá%20🇨🇴&descSize=20&descAlignY=68&fontAlignY=42" width="100%" />
</div>

<div align="center">

  ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![Supabase](https://img.shields.io/badge/Supabase-2.57.4-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
  ![License](https://img.shields.io/badge/Licencia-MIT-B8956A?style=for-the-badge)

</div>

<br/>

> *Del corazón de las montañas de Boyacá a tu taza — una experiencia web tan artesanal como nuestro café.*

---

## 📌 Tabla de Contenidos

- [🌿 Sobre el Proyecto](#-sobre-el-proyecto)
- [✨ Características](#-características)
- [🎨 Diseño y Paleta](#-diseño-y-paleta)
- [🛠️ Tecnologías](#️-tecnologías)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Inicio Rápido](#-inicio-rápido)
- [📜 Scripts](#-scripts)
- [🌟 Componentes Principales](#-componentes-principales)
- [🚢 Despliegue](#-despliegue)
- [🤝 Contribuciones](#-contribuciones)
- [📞 Contacto](#-contacto)

---

## 🌿 Sobre el Proyecto

**Café El Hatillo** es una marca de café de especialidad originaria de **Togüí, Boyacá, Colombia**. Este sitio web presenta una experiencia visual inmersiva que celebra la historia, el proceso artesanal y la calidad premium del café colombiano de alta montaña.

El proyecto fue construido con un enfoque **mobile-first**, animaciones suaves y una identidad visual que evoca los tonos cálidos de la tierra cafetera.

---

## ✨ Características

### 🎨 Diseño y UX
- Paleta de colores tierra: crema, café y dorado
- Efecto parallax en el hero y transiciones fluidas entre secciones
- Navegación sticky con desvanecimiento al hacer scroll
- Totalmente responsive — móvil, tablet y desktop

### 📄 Secciones del Sitio

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Hero** | Banner con parallax y animación de entrada |
| 2 | **Historia** | Origen y tradición del café boyacense |
| 3 | **Productos** | Catálogo con variedades Clásico y Reserva |
| 4 | **Proceso** | Timeline del cultivo a la taza (5 etapas) |
| 5 | **Galería** | Imágenes filtradas por categoría + lightbox |
| 6 | **Beneficios** | Sostenibilidad y comercio justo |
| 7 | **Origen** | Terroir y geografía de Togüí |
| 8 | **Testimonios** | Reseñas de clientes |
| 9 | **Preparación** | Guías para 5 métodos de preparación |
| 10 | **Suscripción** | Club de café mensual |
| 11 | **Contacto** | Formulario y datos |

---

## 🎨 Diseño y Paleta

La identidad visual está inspirada en los tonos naturales del café y las montañas boyacenses:

<table>
<tr>
  <td align="center"><img src="https://img.shields.io/badge/-%23F5F0E8-F5F0E8?style=for-the-badge"/><br/><sub>Cream Light<br/><code>#F5F0E8</code> — Fondo</sub></td>
  <td align="center"><img src="https://img.shields.io/badge/-%23E8DCC8-E8DCC8?style=for-the-badge"/><br/><sub>Cream Warm<br/><code>#E8DCC8</code> — Acentos</sub></td>
  <td align="center"><img src="https://img.shields.io/badge/-%233E2723-3E2723?style=for-the-badge"/><br/><sub>Coffee Dark<br/><code>#3E2723</code> — Texto</sub></td>
  <td align="center"><img src="https://img.shields.io/badge/-%23B8956A-B8956A?style=for-the-badge"/><br/><sub>Gold Muted<br/><code>#B8956A</code> — Dorados</sub></td>
  <td align="center"><img src="https://img.shields.io/badge/-%23556B2F-556B2F?style=for-the-badge"/><br/><sub>Olive Dark<br/><code>#556B2F</code> — WhatsApp</sub></td>
</tr>
</table>

```js
// tailwind.config.js
colors: {
  'cream-light':   '#F5F0E8',   // Fondo principal
  'cream-warm':    '#E8DCC8',   // Acentos cálidos
  'cream-medium':  '#D4C4A8',   // Bordes suaves
  'coffee-dark':   '#3E2723',   // Texto principal
  'coffee-medium': '#6D4C41',   // Texto secundario
  'gold-muted':    '#B8956A',   // Acentos dorados
  'olive-dark':    '#556B2F',   // Botón WhatsApp
}
```

---

## 🛠️ Tecnologías

| Capa | Tecnología | Versión |
|------|-----------|---------|
| **UI Framework** | React | 18.3.1 |
| **Lenguaje** | TypeScript | 5.5.3 |
| **Build Tool** | Vite + HMR | 5.4.2 |
| **Estilos** | Tailwind CSS | 3.4.1 |
| **Iconos** | Lucide React | 0.344.0 |
| **Backend (opcional)** | Supabase | 2.57.4 |

---

## 📁 Estructura del Proyecto

```
cafe-el-hatillo/
├── 📁 public/
│   └── 📁 images/
│       ├── gallery/      # Galería de fotos
│       ├── hero/         # Imágenes del hero
│       ├── process/      # Etapas del proceso
│       ├── products/     # Fotos de productos
│       └── story/        # Historia de la marca
│
├── 📁 src/
│   ├── 📁 assets/
│   │   └── images.ts     # Rutas centralizadas de imágenes
│   ├── App.tsx           # Componente raíz
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales (Tailwind)
│
├── eslint.config.js
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

### Gestión de imágenes

Las rutas de imágenes están centralizadas en `src/assets/images.ts` para facilitar el mantenimiento:

```typescript
export const IMAGES = {
  hero:        { main: '/images/hero/hero-coffee.jpg' },
  story:       { cafetales: '/images/story/cafetales.jpg' },
  products:    { clasico: '/images/products/clasico.jpg' },
  process:     { cultivo: '/images/process/cultivo.jpg' },
  gallery:     { mountains: '/images/gallery/mountains.jpg' },
  preparation: { pourover: '/images/preparation/pourover.jpg' },
}
```

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 16+
- npm o yarn

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/cafe-el-hatillo.git
cd cafe-el-hatillo

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador. 🎉

---

## 📜 Scripts

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Compilación para producción |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Análisis estático con ESLint |
| `npm run typecheck` | Verificación de tipos TypeScript |

---

## 🌟 Componentes Principales

<details>
<summary><b>StickyNav</b> — Navegación flotante</summary>
Aparece al hacer scroll con efecto de desvanecimiento. Incluye links a todas las secciones y es totalmente responsive.
</details>

<details>
<summary><b>HeroSection</b> — Banner principal</summary>
Parallax scrolling con animación de entrada. Establece la identidad visual de la marca desde el primer impacto.
</details>

<details>
<summary><b>ProductSection</b> — Catálogo interactivo</summary>
Selector de tamaños con precios dinámicos. Presenta las variedades Clásico y Reserva.
</details>

<details>
<summary><b>ProcessSection</b> — Timeline del café</summary>
Animación de 5 etapas que lleva al usuario desde el cultivo hasta la taza.
</details>

<details>
<summary><b>GallerySection</b> — Galería filtrable</summary>
Filtros por categoría con lightbox modal para visualizar cada imagen.
</details>

<details>
<summary><b>PreparationSection</b> — Guías de preparación</summary>
Instrucciones paso a paso para 5 métodos: pour over, prensa francesa, espresso, cold brew y aeropress.
</details>

---

## 🚢 Despliegue

### ▲ Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/ al dashboard de Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para servir desde /dist
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Sigue estos pasos:

```bash
git checkout -b feature/nueva-funcionalidad
git commit -m "feat: descripción del cambio"
git push origin feature/nueva-funcionalidad
# Luego abre un Pull Request
```

Usa [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/): `feat:`, `fix:`, `docs:`, `style:`, `refactor:`.

---

## 📞 Contacto

<div align="center">

| Canal | Info |
|-------|------|
| 🌐 Sitio Web | [www.cafeelhatillo.com](https://www.cafeelhatillo.com) |
| 📧 Email | info@cafeelhatillo.com |
| 📸 Instagram | [@cafeelhatillo](https://instagram.com/cafeelhatillo) |
| 💬 WhatsApp | +57 300 123 4567 |

</div>

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,12&height=120&section=footer" width="100%" />

  <br/>

  Hecho con ☕ y ❤️ en **Togüí, Boyacá, Colombia**

  © 2025 Café El Hatillo · Todos los derechos reservados.

</div>
