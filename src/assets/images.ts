// Configuración centralizada de imágenes locales
export const IMAGES = {
  // Imágenes Hero
  hero: {
    main: '/images/hero/granos.png',
    background: '/images/hero/mountains-background.jpg'
  },

  // Imágenes de productos
  products: {
    clasico: '/images/products/clasico.png',
    reserva: '/images/products/reserva.png',
    packaging: '/images/products/packaging.jpg'
  },

  // Imágenes de historia/origen
  story: {
    cafetales: '/images/process/finca2.png',
    farmers: '/images/process/cafetal2.png',
    landscape: '/images/story/landscape-boyaca.jpg'
  },

  // Imágenes de proceso
  process: {
    cultivo: '/images/process/cafetal2.png',
    cosecha: '/images/process/recolectar.png',
    procesamiento: '/images/process/lavado.png',
    tostado: '/images/process/tostado.png',
    empaque: '/images/process/reserva.png'
  },

  // Imágenes de galería
  gallery: {
    mountains: '/images/process/cafetal2.png',
    harvest: '/images/process/finca1.png',
    washing: '/images/process/lavado.png',
    roasted: '/images/hero/granos.png',
    cup: '/images/process/pocillo.png',
    roasting: '/images/process/tostado.png',
    plantation: '/images/process/finca2.png',
    premium: '/images/products/reserva.png',
    pourover: '/images/process/pour_over.png',
  },

  // Imágenes de métodos de preparación
  preparation: {
    pourover: '/images/process/pour_over.png',
    french: '/images/process/prensa_francesa.png',
    espresso: '/images/process/espresso.png',
    aeropress: '/images/process/aeroespress.png',
    coldBrew: '/images/process/cold_brew.png'
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