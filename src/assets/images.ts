// Configuración centralizada de imágenes locales
export const IMAGES = {
  // Imágenes Hero
  hero: {
    main: '/images/hero/granos.webp',
    background: '/images/hero/granos.webp'
  },

  // Imágenes de productos
  products: {
    clasico: '/images/products/clasico.webp',
    reserva: '/images/products/reserva.webp',
    packaging: '/images/products/packaging.webp'
  },

  // Imágenes de historia/origen
  story: {
    cafetales: '/images/process/finca2.webp',
    farmers: '/images/process/cafetal2.webp',
    landscape: '/images/process/finca2.webp'
  },

  // Imágenes de proceso
  process: {
    cultivo: '/images/process/cafetal2.webp',
    cosecha: '/images/process/recolectar.webp',
    procesamiento: '/images/process/lavado.webp',
    tostado: '/images/process/tostado.webp',
    empaque: '/images/products/reserva.webp'
  },

  // Imágenes de galería
  gallery: {
    mountains: '/images/process/cafetal2.webp',
    harvest: '/images/process/finca1.webp',
    washing: '/images/process/lavado.webp',
    roasted: '/images/hero/granos.webp',
    cup: '/images/process/pocillo.webp',
    roasting: '/images/process/tostado.webp',
    plantation: '/images/process/finca2.webp',
    premium: '/images/products/reserva.webp',
    pourover: '/images/process/pour_over.webp'
  },

  // Imágenes de métodos de preparación
  preparation: {
    pourover: '/images/process/pour_over.webp',
    french: '/images/process/prensa_francesa.webp',
    espresso: '/images/process/espresso.webp',
    aeropress: '/images/process/aeropress.webp',
    coldBrew: '/images/process/cold_brew.webp'
  }
};

// Función helper para obtener rutas de imágenes con fallback
export const getImagePath = (category: keyof typeof IMAGES, image: string, fallback?: string): string => {
  const categoryImages = IMAGES[category] as Record<string, string>;
  return categoryImages?.[image] || fallback || '/images/placeholder.jpg';
};

// Rutas de imágenes por defecto para testing
export const PLACEHOLDER_IMAGES = {
  coffee: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzg3NzE2MSIvPiA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkPDoWZlIEVsIEhhdGlsbG88L3RleHQ+IDwvc3ZnPg==',
  landscape: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzYzNzA1MyIvPiA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhZmV0YWxlcyBCb3lhY8OhPC90ZXh0PiA8L3N2Zz4='
};