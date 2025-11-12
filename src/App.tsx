import { useState, useEffect } from 'react';
import {
  Coffee,
  Leaf,
  HandHeart,
  CheckCircle,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Camera,
  Calendar,
  Search,
  X
} from 'lucide-react';
import { IMAGES, getImagePath, PLACEHOLDER_IMAGES } from './assets/images';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-cream-light">
      <StickyNav isVisible={isNavVisible} scrollToSection={scrollToSection} />

      <HeroSection scrollY={scrollY} scrollToSection={scrollToSection} />
      <StorySection />
      <ProductSection />
      <ProcessSection />
      <GallerySection />
      <BenefitsSection />
      <OriginSection />
      <TestimonialsSection />
      <PreparationSection />
      <SubscriptionSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />

      <WhatsAppButton />
    </div>
  );
}

function StickyNav({ isVisible, scrollToSection }: { isVisible: boolean; scrollToSection: (id: string) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'bg-coffee-dark/95 backdrop-blur-sm translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="text-gold-muted font-serif text-lg sm:text-xl tracking-wide">El Hatillo</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-cream-warm text-sm tracking-wider uppercase">
          <button onClick={() => scrollToSection('story')} className="hover:text-gold-muted transition-colors">Historia</button>
          <button onClick={() => scrollToSection('product')} className="hover:text-gold-muted transition-colors">Producto</button>
          <button onClick={() => scrollToSection('process')} className="hover:text-gold-muted transition-colors">Proceso</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gold-muted transition-colors">Contacto</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gold-muted p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Coffee className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-coffee-dark/98 backdrop-blur-sm border-t border-gold-muted/20">
          <div className="px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => { scrollToSection('story'); setIsMobileMenuOpen(false); }} 
              className="text-cream-warm text-sm tracking-wider uppercase hover:text-gold-muted transition-colors text-left py-2"
            >
              Historia
            </button>
            <button 
              onClick={() => { scrollToSection('product'); setIsMobileMenuOpen(false); }} 
              className="text-cream-warm text-sm tracking-wider uppercase hover:text-gold-muted transition-colors text-left py-2"
            >
              Producto
            </button>
            <button 
              onClick={() => { scrollToSection('process'); setIsMobileMenuOpen(false); }} 
              className="text-cream-warm text-sm tracking-wider uppercase hover:text-gold-muted transition-colors text-left py-2"
            >
              Proceso
            </button>
            <button 
              onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} 
              className="text-cream-warm text-sm tracking-wider uppercase hover:text-gold-muted transition-colors text-left py-2"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection({ scrollY, scrollToSection }: { scrollY: number; scrollToSection: (id: string) => void }) {
  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES.hero.main})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 animate-fade-in">
        <h1 className="font-serif text-gold-muted text-4xl sm:text-5xl md:text-7xl mb-3 sm:mb-4 tracking-wide">
          El Hatillo
        </h1>
        <p className="text-cream-warm text-base sm:text-lg md:text-xl mb-2 tracking-widest uppercase font-light px-2">
          Desde las montañas de Togüi, Boyacá
        </p>
        <p className="text-cream-warm/80 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 font-light max-w-md px-4">
          Café de altura, tradición colombiana
        </p>

        <button
          onClick={() => scrollToSection('product')}
          className="border-2 border-gold-muted text-gold-muted px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-widest uppercase hover:bg-gold-muted hover:text-coffee-dark transition-all duration-500"
        >
          Descubre Nuestro Café
        </button>

        <button
          onClick={() => scrollToSection('story')}
          className="absolute bottom-12 animate-bounce"
        >
          <ChevronDown className="text-gold-muted w-8 h-8" />
        </button>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-gold-muted" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gold-muted font-medium">Nuestra Tierra</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-coffee-dark mb-3 sm:mb-4 leading-tight">
            Café con Alma Boyacense
          </h2>

          <p className="text-coffee-dark/90 text-base sm:text-lg md:text-xl font-light mb-4 sm:mb-6 max-w-prose">
            En las alturas de Togüi, Boyacá, donde las montañas se funden con las nubes,
            nace El Hatillo: granos cultivados con dedicación por familias que conocen la
            tierra y la cuidan como legado.
          </p>

          <div className="space-y-4 text-coffee-medium/90 font-light leading-relaxed">
            <p>
              La combinación única de altitud, clima y suelos fértiles da lugar a un café
              con cuerpo y notas complejas. Cada etapa —desde la cosecha manual hasta el tostado artesanal—
              busca resaltar lo mejor de cada grano.
            </p>
            <p>
              Apoyamos prácticas sostenibles y comercio justo para que el sabor vaya acompañado
              de impacto social y ambiental positivo.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-gold-muted text-coffee-dark px-6 py-2 text-sm tracking-widest uppercase hover:bg-gold-muted/90 transition-all duration-300">
              Conoce la Historia
            </button>
            <button className="border border-coffee-medium text-coffee-dark px-6 py-2 text-sm hover:bg-cream-medium transition-all duration-300">
              Ver Origen
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="rounded-lg overflow-hidden shadow-xl relative">
            <img
              src={IMAGES.story.cafetales}
              alt="Cafetales de Togüi"
              className="w-full h-80 md:h-[420px] object-cover grayscale-[10%] hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-sm p-4 rounded-md border border-gold-muted/10 max-w-xs">
              <p className="text-coffee-dark italic text-sm font-light">“Cada grano cuenta la historia de nuestra gente y su pasión por la tierra.”</p>
              <div className="text-xs text-coffee-medium mt-2">— Productores de Togüi, Boyacá</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  const [selectedSize, setSelectedSize] = useState<{[key: string]: string}>({
    clasico: '500g',
    reserva: '500g'
  });

  const products = [
    {
      id: 'clasico',
      badge: 'Más Popular',
      badgeColor: 'bg-gold-muted',
      image: IMAGES.products.clasico,
      alt: "Empaque Café El Hatillo - Tostado Medio",
      roastLevel: 'Tostado Medio',
      name: 'El Hatillo - Clásico',
      description: 'Notas de chocolate, caramelo y cítricos; cuerpo balanceado y acidez suave. Ideal para espresso y métodos filtrados.',
      features: [
        { icon: '🍫', text: 'Notas chocolate' },
        { icon: '🍯', text: 'Caramelo' },
        { icon: '🍊', text: 'Cítricos' },
        { icon: '⚖️', text: 'Cuerpo balanceado' }
      ],
      sizes: {
        '250g': { price: 18000, originalPrice: 20000 },
        '500g': { price: 28000, originalPrice: 32000 },
        '1kg': { price: 52000, originalPrice: 58000 }
      },
      rating: 4.8,
      reviews: 127
    },
    {
      id: 'reserva',
      badge: 'Edición Especial',
      badgeColor: 'bg-coffee-medium',
      image: IMAGES.products.reserva,
      alt: "Empaque Café El Hatillo - Tostado Oscuro",
      roastLevel: 'Tostado Oscuro',
      name: 'El Hatillo - Reserva',
      description: 'Perfil intenso con notas de cacao y nuez; cuerpo pleno y final largo. Perfecto para quienes buscan una taza potente.',
      features: [
        { icon: '🍫', text: 'Notas cacao' },
        { icon: '🥜', text: 'Nuez' },
        { icon: '💪', text: 'Cuerpo pleno' },
        { icon: '⏳', text: 'Final largo' }
      ],
      sizes: {
        '250g': { price: 22000, originalPrice: 24000 },
        '500g': { price: 32000, originalPrice: 36000 },
        '1kg': { price: 58000, originalPrice: 65000 }
      },
      rating: 4.9,
      reviews: 89
    }
  ];

  return (
    <section id="product" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-coffee-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-gold-muted" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gold-muted">Selección Premium</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream-warm mb-3 sm:mb-4 px-4">Nuestros Productos</h2>
          <p className="text-base sm:text-lg text-cream-warm/80 max-w-2xl mx-auto px-4">
            Café artesanal de las montañas de Boyacá. Tostado bajo pedido para garantizar máxima frescura y calidad.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="group bg-cream-light rounded-2xl shadow-xl overflow-hidden border border-cream-warm/20 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500">
              {/* Badge */}
              <div className="relative">
                <div className={`absolute top-4 left-4 z-10 ${product.badgeColor} text-cream-light px-3 py-1 rounded-full text-xs font-medium tracking-wide`}>
                  {product.badge}
                </div>
                <div className="absolute top-4 right-4 z-10 bg-cream-warm/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-gold-muted">★</span>
                    <span className="text-coffee-dark font-medium">{product.rating}</span>
                    <span className="text-coffee-medium/60">({product.reviews})</span>
                  </div>
                </div>

                <div className="h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-gold-muted" />
                  <span className="text-xs sm:text-sm uppercase tracking-widest text-gold-muted font-medium">{product.roastLevel}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-coffee-dark mb-3 sm:mb-4">{product.name}</h3>

                <p className="text-sm sm:text-base text-coffee-medium/80 mb-4 sm:mb-6 leading-relaxed">{product.description}</p>

                {/* Características mejoradas */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 bg-cream-medium/50 rounded-lg">
                      <span className="text-base sm:text-lg flex-shrink-0">{feature.icon}</span>
                      <span className="text-xs sm:text-sm text-coffee-dark font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Selector de tamaños mejorado */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm text-coffee-medium mb-2 sm:mb-3 font-medium">Tamaño disponible:</p>
                  <div className="flex gap-2">
                    {Object.entries(product.sizes).map(([size, pricing]) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(prev => ({ ...prev, [product.id]: size }))}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                          selectedSize[product.id] === size
                            ? 'bg-gold-muted text-coffee-dark shadow-md'
                            : 'bg-cream-medium text-coffee-medium hover:bg-cream-warm'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Precios mejorados */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-col w-full sm:w-auto">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-serif text-gold-muted">
                        ${product.sizes[selectedSize[product.id] as keyof typeof product.sizes].price.toLocaleString()}
                      </span>
                      <span className="text-base sm:text-lg text-coffee-medium/60 line-through">
                        ${product.sizes[selectedSize[product.id] as keyof typeof product.sizes].originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="bg-gold-muted/20 text-gold-muted px-2 py-1 rounded text-[10px] sm:text-xs font-medium">
                        Ahorro: ${(product.sizes[selectedSize[product.id] as keyof typeof product.sizes].originalPrice - 
                                  product.sizes[selectedSize[product.id] as keyof typeof product.sizes].price).toLocaleString()}
                      </span>
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted" />
                      <span className="text-[10px] sm:text-xs text-coffee-medium">Envío gratis</span>
                    </div>
                  </div>

                  <button className="bg-gold-muted text-coffee-dark px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-gold-muted/90 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                    <span>Comprar Ahora</span>
                    <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>

                {/* Información adicional */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-cream-medium/30">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-coffee-medium/70 flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted" />
                      <span className="text-[10px] sm:text-xs">100% Orgánico</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <HandHeart className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted" />
                      <span className="text-[10px] sm:text-xs">Comercio Justo</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted" />
                      <span className="text-[10px] sm:text-xs">Tostado fresco</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Llamada a la acción adicional */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="bg-cream-warm/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold-muted/20">
            <h3 className="font-serif text-xl sm:text-2xl text-cream-warm mb-3 sm:mb-4">¿No sabes cuál elegir?</h3>
            <p className="text-sm sm:text-base text-cream-warm/80 mb-4 sm:mb-6 max-w-md mx-auto">
              Nuestros expertos te ayudan a encontrar el café perfecto para tu paladar
            </p>
            <button className="border-2 border-gold-muted text-gold-muted px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm tracking-widest uppercase hover:bg-gold-muted hover:text-coffee-dark transition-all duration-500">
              Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      icon: Leaf, 
      title: 'Cultivo Sostenible', 
      shortDescription: 'En alturas ideales de Boyacá',
      fullDescription: 'Cultivamos nuestro café en las montañas de Togüi, Boyacá, a una altitud de 1,700-1,800 msnm. El clima fresco y los suelos volcánicos ricos en minerales crean las condiciones perfectas para desarrollar granos con sabores complejos y únicos.',
      details: ['Altitud: 1,700-1,800 msnm', 'Sombra natural', 'Suelos volcánicos', 'Sin pesticidas'],
      duration: '8-10 meses',
      image: IMAGES.process.cultivo
    },
    { 
      icon: HandHeart, 
      title: 'Cosecha Selectiva', 
      shortDescription: 'Selección manual de granos maduros',
      fullDescription: 'Nuestros caficultores realizan múltiples pasadas por cada árbol, seleccionando únicamente los frutos en su punto perfecto de maduración. Esta cosecha selectiva garantiza la calidad superior de cada grano.',
      details: ['Recolección manual', 'Solo frutos maduros', 'Múltiples pasadas', 'Tradición familiar'],
      duration: '3-4 meses',
      image: IMAGES.process.cosecha
    },
    { 
      icon: Coffee, 
      title: 'Procesamiento Húmedo', 
      shortDescription: 'Lavado y fermentación controlada',
      fullDescription: 'Utilizamos el método de procesamiento húmedo que realza la acidez brillante y los sabores limpios. La fermentación controlada durante 12-18 horas desarrolla los perfiles de sabor únicos de nuestro café.',
      details: ['Despulpado inmediato', 'Fermentación 12-18h', 'Lavado múltiple', 'Secado controlado'],
      duration: '5-7 días',
      image: IMAGES.process.procesamiento
    },
    { 
      icon: Coffee, 
      title: 'Tostado Artesanal', 
      shortDescription: 'Perfiles personalizados de tostado',
      fullDescription: 'Cada lote se tuesta cuidadosamente en pequeñas cantidades para resaltar las características únicas del grano. Nuestro maestro tostador desarrolla perfiles específicos que maximizan los sabores naturales.',
      details: ['Tostado en lotes pequeños', 'Perfiles personalizados', 'Control de temperatura', 'Maestro tostador'],
      duration: '12-15 minutos',
      image: IMAGES.process.tostado
    },
    { 
      icon: CheckCircle, 
      title: 'Empaque y Distribución', 
      shortDescription: 'Sellado para máxima frescura',
      fullDescription: 'Empacamos nuestro café inmediatamente después del tostado en bolsas con válvula de desgasificación que preservan la frescura y los aromas. Cada paquete incluye la fecha de tostado para garantizar calidad.',
      details: ['Empaque inmediato', 'Válvula desgasificación', 'Fecha de tostado', 'Envío rápido'],
      duration: '24 horas',
      image: IMAGES.process.empaque
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-cream-medium">
      <div className="max-w-7xl mx-auto">
        {/* Header mejorado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <Coffee className="w-6 h-6 text-gold-muted" />
            <span className="text-sm uppercase tracking-widest text-gold-muted font-medium">Nuestro Proceso</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-dark mb-6">
            De la Montaña a tu Taza
          </h2>
          <p className="text-lg text-coffee-medium/80 max-w-2xl mx-auto leading-relaxed">
            Cada etapa de nuestro proceso está diseñada para preservar y realzar los sabores únicos 
            del café de las montañas boyacenses.
          </p>
        </div>

        {/* Sección principal con timeline interactivo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Timeline de pasos */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`group cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                    <div className={`flex items-start gap-6 p-6 rounded-2xl border-2 transition-all duration-500 ${
                      isActive 
                        ? 'bg-cream-light border-gold-muted shadow-lg' 
                        : 'bg-cream-light/50 border-cream-warm/20 hover:border-gold-muted/50 hover:bg-cream-light'
                    }`}>
                      {/* Número e ícono */}
                      <div className="flex-shrink-0">
                        <div className={`relative w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          isActive 
                            ? 'bg-gold-muted border-gold-muted shadow-md' 
                            : 'bg-cream-warm border-gold-muted/50 group-hover:border-gold-muted'
                        }`}>
                          <Icon className={`w-7 h-7 transition-colors duration-500 ${
                            isActive ? 'text-coffee-dark' : 'text-coffee-medium group-hover:text-coffee-dark'
                          }`} />
                          <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                            isActive 
                              ? 'bg-coffee-dark text-gold-muted' 
                              : 'bg-gold-muted text-coffee-dark'
                          }`}>
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`text-xl font-medium transition-colors duration-300 ${
                            isActive ? 'text-coffee-dark' : 'text-coffee-medium group-hover:text-coffee-dark'
                          }`}>
                            {step.title}
                          </h3>
                          <span className={`text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 ${
                            isActive 
                              ? 'bg-gold-muted/20 text-gold-muted' 
                              : 'bg-cream-warm text-coffee-medium'
                          }`}>
                            {step.duration}
                          </span>
                        </div>

                        <p className={`text-sm mb-4 transition-colors duration-300 ${
                          isActive ? 'text-coffee-dark/90' : 'text-coffee-medium/70'
                        }`}>
                          {isActive ? step.fullDescription : step.shortDescription}
                        </p>

                        {isActive && (
                          <div className="grid grid-cols-2 gap-2 animate-fade-in">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-2 text-xs text-coffee-medium/80">
                                <CheckCircle className="w-3 h-3 text-gold-muted flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Imagen principal */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-96 lg:h-[500px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent" />
              
              {/* Overlay con información */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-cream-light/95 backdrop-blur-sm p-6 rounded-xl border border-gold-muted/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gold-muted flex items-center justify-center">
                      <span className="text-coffee-dark text-sm font-bold">{activeStep + 1}</span>
                    </div>
                    <h3 className="font-serif text-xl text-coffee-dark">{steps[activeStep].title}</h3>
                  </div>
                  <p className="text-coffee-medium/80 text-sm leading-relaxed">
                    {steps[activeStep].shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de progreso */}
        <div className="flex justify-center gap-3 mb-12">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-gold-muted scale-125' 
                  : 'bg-cream-warm hover:bg-gold-muted/50'
              }`}
            />
          ))}
        </div>

        {/* Estadísticas finales */}
        <div className="bg-cream-light/50 rounded-2xl p-8 border border-gold-muted/10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif text-gold-muted mb-2">12+</div>
              <div className="text-sm text-coffee-medium uppercase tracking-wider">Meses de Cultivo</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-gold-muted mb-2">100%</div>
              <div className="text-sm text-coffee-medium uppercase tracking-wider">Cosecha Manual</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-gold-muted mb-2">48h</div>
              <div className="text-sm text-coffee-medium uppercase tracking-wider">Del Tostado al Envío</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-gold-muted mb-2">3</div>
              <div className="text-sm text-coffee-medium uppercase tracking-wider">Generaciones de Tradición</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Todas', icon: '📷' },
    { id: 'process', name: 'Proceso', icon: '⚙️' },
    { id: 'origin', name: 'Origen', icon: '🏔️' },
    { id: 'product', name: 'Producto', icon: '☕' },
    { id: 'people', name: 'Gente', icon: '👥' }
  ];

  const images = [
    {
      url: IMAGES.gallery.mountains,
      category: 'origin',
      title: 'Montañas de Togüí',
      description: 'Paisajes cafeteros en las alturas de Boyacá donde nace nuestro café de especialidad.',
      location: 'Togüí, Boyacá',
      date: '2024'
    },
    {
      url: IMAGES.gallery.harvest,
      category: 'people',
      title: 'Cosecha Manual',
      description: 'Nuestros caficultores seleccionando cuidadosamente los frutos maduros.',
      location: 'Finca El Hatillo',
      date: '2024'
    },
    {
      url: IMAGES.gallery.washing,
      category: 'process',
      title: 'Procesamiento Húmedo',
      description: 'Proceso de lavado que realza la acidez brillante y sabores limpios.',
      location: 'Beneficiadero',
      date: '2024'
    },
    {
      url: IMAGES.gallery.roasted,
      category: 'product',
      title: 'Granos Tostados',
      description: 'Café recién tostado con el aroma y color perfecto para una taza excepcional.',
      location: 'Tostadora El Hatillo',
      date: '2024'
    },
    {
      url: IMAGES.gallery.cup,
      category: 'product',
      title: 'Taza Perfecta',
      description: 'El resultado final: una taza con notas complejas y aroma inigualable.',
      location: 'Estudio',
      date: '2024'
    },
    {
      url: IMAGES.gallery.roasting,
      category: 'process',
      title: 'Tostado Artesanal',
      description: 'Maestro tostador controlando cada lote para obtener el perfil perfecto.',
      location: 'Tostadora',
      date: '2024'
    },
    {
      url: IMAGES.gallery.plantation,
      category: 'origin',
      title: 'Cafetales en Ladera',
      description: 'Cultivos en pendiente que aprovechan las condiciones ideales del terroir.',
      location: 'Togüí, Boyacá',
      date: '2024'
    },
    {
      url: IMAGES.gallery.premium,
      category: 'product',
      title: 'Empaque Premium',
      description: 'Presentación elegante que preserva la frescura y calidad de nuestro café.',
      location: 'Estudio',
      date: '2024'
    },
    {
      url: IMAGES.gallery.pourover,
      category: 'process',
      title: 'Preparación Pour Over',
      description: 'Método manual que resalta la complejidad y claridad de nuestros granos.',
      location: 'Laboratorio de Catación',
      date: '2024'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section className="py-24 px-6 bg-cream-light">
      <div className="max-w-7xl mx-auto">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-gold-muted" />
            <span className="text-sm uppercase tracking-widest text-gold-muted font-medium">Nuestra Historia Visual</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-dark mb-6">
            Galería El Hatillo
          </h2>
          <p className="text-lg text-coffee-medium/80 max-w-2xl mx-auto leading-relaxed">
            Un recorrido visual por nuestro proceso, desde las montañas boyacenses hasta tu taza perfecta. 
            Cada imagen cuenta la historia de nuestro café de especialidad.
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gold-muted text-coffee-dark shadow-lg scale-105'
                  : 'bg-cream-medium text-coffee-medium hover:bg-cream-warm hover:text-coffee-dark hover:scale-102'
              }`}
            >
              <span className="text-base sm:text-lg">{category.icon}</span>
              <span className="tracking-wide whitespace-nowrap">{category.name}</span>
              <span className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-xs ${
                selectedCategory === category.id
                  ? 'bg-coffee-dark/20 text-coffee-dark'
                  : 'bg-gold-muted/20 text-gold-muted'
              }`}>
                {category.id === 'all' ? images.length : images.filter(img => img.category === category.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid de imágenes mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer bg-cream-medium shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Imagen */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover grayscale-[15%] group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-coffee-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Información superpuesta */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream-warm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-xl mb-2">{image.title}</h3>
                <p className="text-sm text-cream-warm/90 mb-3 line-clamp-2 leading-relaxed">
                  {image.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-gold-muted" />
                    <span className="text-cream-warm/80">{image.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-gold-muted" />
                    <span className="text-cream-warm/80">{image.date}</span>
                  </div>
                </div>
              </div>

              {/* Badge de categoría */}
              <div className="absolute top-4 left-4 bg-gold-muted/90 backdrop-blur-sm text-coffee-dark px-3 py-1 rounded-full text-xs font-medium">
                {categories.find(cat => cat.id === image.category)?.name}
              </div>

              {/* Botón de zoom */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-cream-light/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Search className="w-5 h-5 text-coffee-dark" />
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas de la galería */}
        <div className="bg-coffee-dark/5 rounded-2xl p-8 border border-gold-muted/10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-serif text-gold-muted mb-2 group-hover:scale-110 transition-transform duration-300">
                {images.length}+
              </div>
              <div className="text-sm text-coffee-medium uppercase tracking-wider">
                Imágenes en Galería
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-serif text-gold-muted mb-2 group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div className="text-sm text-coffee-medium uppercase tracking-wider">
                Categorías Diferentes
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-serif text-gold-muted mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-sm text-coffee-medium uppercase tracking-wider">
                Imágenes Reales
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-serif text-gold-muted mb-2 group-hover:scale-110 transition-transform duration-300">
                2024
              </div>
              <div className="text-sm text-coffee-medium uppercase tracking-wider">
                Año de Captura
              </div>
            </div>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="text-center mt-16">
          <div className="bg-cream-medium/50 rounded-2xl p-8 border border-gold-muted/20">
            <h3 className="font-serif text-2xl text-coffee-dark mb-4">
              ¿Quieres visitar nuestra finca?
            </h3>
            <p className="text-coffee-medium/80 mb-6 max-w-md mx-auto">
              Organiza una visita a nuestros cafetales y vive de cerca todo el proceso del café
            </p>
            <button className="bg-gold-muted text-coffee-dark px-8 py-3 rounded-lg text-sm tracking-widest uppercase hover:bg-gold-muted/90 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 mx-auto">
              <span>Programa tu Visita</span>
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal para imagen ampliada (placeholder - se puede implementar después) */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-coffee-dark/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-cream-light/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cream-light transition-colors duration-300"
              >
                <X className="w-5 h-5 text-coffee-dark" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { icon: Leaf, title: '100% Orgánico', description: 'Sin químicos ni pesticidas' },
    { icon: HandHeart, title: 'Comercio Justo', description: 'Apoyo directo a caficultores' },
    { icon: CheckCircle, title: 'Frescura Garantizada', description: 'Tostado bajo pedido' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-coffee-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gold-muted mx-auto mb-4 sm:mb-6" strokeWidth={1} />
                <h3 className="text-cream-warm text-lg sm:text-xl font-medium mb-2 sm:mb-3 tracking-wide px-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-cream-warm/70 font-light px-4">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OriginSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Altitud Perfecta',
      value: '1,700 - 1,800',
      unit: 'msnm',
      icon: '🏔️',
      description: 'La altitud ideal para desarrollar sabores complejos y acidez brillante en nuestros granos de café.',
      benefit: 'Desarrollo lento del grano que intensifica los sabores'
    },
    {
      title: 'Clima Templado',
      value: '18 - 24',
      unit: '°C',
      icon: '🌡️',
      description: 'Temperaturas estables que permiten una maduración uniforme y gradual de los frutos del café.',
      benefit: 'Maduración lenta que concentra azúcares naturales'
    },
    {
      title: 'Suelos Ricos',
      value: 'Volcánicos',
      unit: 'Minerales',
      icon: '🌋',
      description: 'Suelos arcillosos y franco-arenosos de origen volcánico, ricos en minerales esenciales.',
      benefit: 'Aporta mineralidad y cuerpo distintivo al café'
    },
    {
      title: 'Precipitación',
      value: '1,200 - 1,800',
      unit: 'mm/año',
      icon: '🌧️',
      description: 'Régimen de lluvias ideal distribuido a lo largo del año para el cultivo del café.',
      benefit: 'Hidratación constante sin encharcamiento'
    }
  ];

  const regionStats = [
    { label: 'Familias Caficultoras', value: '150+', icon: '👨‍👩‍👧‍👦' },
    { label: 'Hectáreas Cultivadas', value: '500+', icon: '🌱' },
    { label: 'Años de Tradición', value: '80+', icon: '📅' },
    { label: 'Variedades Cultivadas', value: '4', icon: '☕' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-cream-light">
      <div className="max-w-7xl mx-auto">
        {/* Header mejorado */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold-muted" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gold-muted font-medium">Nuestro Origen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-coffee-dark mb-4 sm:mb-6 px-4">
            Togüi, Boyacá
          </h2>
          <p className="text-base sm:text-lg text-coffee-medium/80 max-w-3xl mx-auto leading-relaxed px-4">
            En el corazón de la Región Andina colombiana, donde la tradición cafetera se encuentra con 
            la excelencia del terroir montañoso, nace nuestro café de especialidad.
          </p>
        </div>

        {/* Sección principal */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Mapa y ubicación */}
          <div className="order-2 lg:order-1">
            <div className="bg-cream-medium/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gold-muted/10 shadow-lg">
              <div className="w-full h-64 sm:h-80 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden relative">
                <iframe
                  title="Mapa Togui, Boyacá"
                  src="https://www.google.com/maps?q=Togui+Boyaca&z=12&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-cream-light/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gold-muted/20">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted" />
                    <span className="text-coffee-dark font-medium">Togüi, Boyacá</span>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-cream-light rounded-lg sm:rounded-xl border border-gold-muted/10">
                  <div>
                    <h4 className="text-sm sm:text-base text-coffee-dark font-medium">Coordenadas</h4>
                    <p className="text-xs sm:text-sm text-coffee-medium/70">5°58'N, 74°28'W</p>
                  </div>
                  <div className="text-xl sm:text-2xl">🌍</div>
                </div>
                
                <div className="flex items-center justify-between p-3 sm:p-4 bg-cream-light rounded-lg sm:rounded-xl border border-gold-muted/10">
                  <div>
                    <h4 className="text-sm sm:text-base text-coffee-dark font-medium">Distancia a Bogotá</h4>
                    <p className="text-xs sm:text-sm text-coffee-medium/70">180 km al noreste</p>
                  </div>
                  <div className="text-xl sm:text-2xl">🚗</div>
                </div>
              </div>
            </div>
          </div>

          {/* Características del terroir */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => {
                const isActive = activeFeature === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`group cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                    <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-500 ${
                      isActive 
                        ? 'bg-cream-medium border-gold-muted shadow-lg' 
                        : 'bg-cream-medium/50 border-cream-warm/20 hover:border-gold-muted/50 hover:bg-cream-medium'
                    }`}>
                      <div className="flex items-start gap-3 sm:gap-6">
                        {/* Icono y valor */}
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex flex-col items-center justify-center border-2 transition-all duration-500 ${
                            isActive 
                              ? 'bg-gold-muted border-gold-muted' 
                              : 'bg-cream-light border-gold-muted/50 group-hover:border-gold-muted'
                          }`}>
                            <span className="text-lg sm:text-xl">{feature.icon}</span>
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
                            <h3 className={`text-base sm:text-xl font-medium transition-colors duration-300 ${
                              isActive ? 'text-coffee-dark' : 'text-coffee-medium group-hover:text-coffee-dark'
                            }`}>
                              {feature.title}
                            </h3>
                          </div>

                          <div className="flex items-baseline gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                            <span className={`text-2xl sm:text-3xl font-serif transition-colors duration-300 ${
                              isActive ? 'text-gold-muted' : 'text-coffee-medium group-hover:text-gold-muted'
                            }`}>
                              {feature.value}
                            </span>
                            <span className={`text-xs sm:text-sm transition-colors duration-300 ${
                              isActive ? 'text-gold-muted' : 'text-coffee-medium/70'
                            }`}>
                              {feature.unit}
                            </span>
                          </div>

                          <p className={`text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed transition-colors duration-300 ${
                            isActive ? 'text-coffee-dark/90' : 'text-coffee-medium/70'
                          }`}>
                            {feature.description}
                          </p>

                          {isActive && (
                            <div className="flex items-start gap-2 animate-fade-in">
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-coffee-medium/80 italic leading-relaxed">{feature.benefit}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Indicadores de progreso */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                activeFeature === index 
                  ? 'bg-gold-muted scale-125' 
                  : 'bg-cream-warm hover:bg-gold-muted/50'
              }`}
            />
          ))}
        </div>

        {/* Estadísticas de la región */}
        <div className="bg-coffee-dark/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gold-muted/10">
          <h3 className="font-serif text-xl sm:text-2xl text-coffee-dark text-center mb-6 sm:mb-8">
            La Región en Números
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {regionStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-cream-medium/50 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center border border-gold-muted/20 group-hover:border-gold-muted/50 group-hover:bg-cream-medium transition-all duration-300">
                  <span className="text-xl sm:text-2xl">{stat.icon}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif text-gold-muted mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-coffee-medium/80 uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de historia regional */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl text-coffee-dark">Historia & Tradición</h3>
            <p className="text-sm sm:text-base text-coffee-medium/90 leading-relaxed">
              Togüi es un municipio boyacense cuya tradición cafetera se remonta a principios del siglo XX. 
              Las familias campesinas han perfeccionado durante generaciones las técnicas de cultivo que 
              aprovechan las condiciones únicas de esta región montañosa.
            </p>
            <p className="text-sm sm:text-base text-coffee-medium/90 leading-relaxed">
              El nombre "Togüi" proviene del idioma chibcha y significa "lugar del maíz", pero con el tiempo 
              se ha convertido en sinónimo de café de alta calidad en la región central de Colombia.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-cream-medium/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted" />
                <span className="text-xs sm:text-sm text-coffee-dark">Cultivo Orgánico</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-cream-medium/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
                <HandHeart className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted" />
                <span className="text-xs sm:text-sm text-coffee-dark">Comercio Justo</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-cream-medium/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted" />
                <span className="text-xs sm:text-sm text-coffee-dark">Certificado</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={IMAGES.story.landscape}
              alt="Paisaje cafetero de Togüí"
              className="w-full h-64 sm:h-80 object-cover rounded-xl sm:rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <div className="bg-cream-light/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gold-muted/20">
                <p className="text-coffee-dark text-xs sm:text-sm italic leading-relaxed">
                  "Estas montañas han sido testigo de generaciones dedicadas al arte del café."
                </p>
                <div className="text-xs text-coffee-medium mt-1">— Don Carlos, Caficultor de 3ra generación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { text: 'El mejor café que he probado. Las notas de chocolate son increíbles.', author: 'María González', city: 'Bogotá' },
    { text: 'Frescura incomparable. Se nota la calidad en cada taza.', author: 'Carlos Rodríguez', city: 'Medellín' },
    { text: 'Apoyar directamente a los caficultores hace que cada sorbo sea especial.', author: 'Ana Martínez', city: 'Cali' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-cream-medium">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream-light p-6 sm:p-8 rounded-sm">
              <div className="text-5xl sm:text-6xl text-gold-muted/30 font-serif mb-3 sm:mb-4">"</div>
              <p className="text-sm sm:text-base text-coffee-dark/90 italic mb-4 sm:mb-6 font-light leading-relaxed">
                {testimonial.text}
              </p>
              <div>
                <p className="text-sm sm:text-base text-coffee-dark font-medium">{testimonial.author}</p>
                <p className="text-coffee-medium/60 text-xs sm:text-sm">{testimonial.city}</p>
              </div>
              <div className="flex gap-1 mt-3 sm:mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-gold-muted">★</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreparationSection() {
  const [activeMethod, setActiveMethod] = useState('pourover');

  const methods = {
    pourover: {
      name: 'Pour Over',
      icon: '☕',
      difficulty: 'Intermedio',
      time: '4-5 min',
      description: 'Método manual que resalta la claridad y complejidad de sabores de nuestro café de especialidad.',
      steps: [
        { text: 'Calienta 300ml de agua a 93°C', detail: 'Temperatura ideal para extracción óptima' },
        { text: 'Coloca filtro y enjuaga con agua caliente', detail: 'Elimina sabores del papel y precalienta' },
        { text: 'Añade 18g de café molido medio', detail: 'Proporción 1:16 para balance perfecto' },
        { text: 'Pre-infusión con 40ml por 30 segundos', detail: 'Permite que el café se hinche y desgasifique' },
        { text: 'Vertido en círculos concéntricos 2-3 min', detail: 'Movimientos suaves y constantes' },
        { text: 'Disfruta inmediatamente', detail: 'Mejor sabor en los primeros minutos' }
      ],
      tips: ['Molienda uniforme es clave', 'Controla la velocidad de vertido', 'Usa báscula para precisión'],
      equipment: ['V60 o Chemex', 'Filtros de papel', 'Báscula digital', 'Hervidor de cuello cisne'],
      image: IMAGES.preparation.pourover,
      ratio: '1:16',
      grind: 'Medio'
    },
    french: {
      name: 'Prensa Francesa',
      icon: '🫖',
      difficulty: 'Fácil',
      time: '6-8 min',
      description: 'Método de inmersión completa que produce una taza con cuerpo y aceites naturales del café.',
      steps: [
        { text: 'Calienta 500ml de agua a 95°C', detail: 'Temperatura ligeramente más alta para inmersión' },
        { text: 'Precalienta la prensa francesa', detail: 'Enjuaga con agua caliente y seca' },
        { text: 'Añade 30g de café molido grueso', detail: 'Proporción 1:16 con molienda gruesa' },
        { text: 'Vierte agua y revuelve suavemente', detail: 'Asegura saturación completa del café' },
        { text: 'Coloca tapa y espera 4 minutos', detail: 'Tiempo óptimo de extracción' },
        { text: 'Presiona lentamente y sirve', detail: 'Movimiento constante y controlado' }
      ],
      tips: ['Molienda gruesa evita sobre-extracción', 'No dejes reposar más de 6 minutos', 'Sirve inmediatamente'],
      equipment: ['Prensa francesa', 'Molinillo de rebabas', 'Cronómetro', 'Cuchara para revolver'],
      image: IMAGES.preparation.french,
      ratio: '1:16',
      grind: 'Grueso'
    },
    espresso: {
      name: 'Espresso',
      icon: '🎯',
      difficulty: 'Avanzado',
      time: '25-30 seg',
      description: 'La base de todas las bebidas con leche, concentrado y aromático con crema espesa y dorada.',
      steps: [
        { text: 'Precalienta la máquina y portafiltro', detail: 'Temperatura estable es fundamental' },
        { text: 'Muele 18-20g de café fino', detail: 'Ajusta molienda según extracción' },
        { text: 'Distribuye uniformemente en portafiltro', detail: 'Evita canalizaciones de agua' },
        { text: 'Nivela y compacta con 15kg de presión', detail: 'Superficie pareja y firme' },
        { text: 'Extrae 40ml en 25-30 segundos', detail: 'Observa el color y consistencia' },
        { text: 'Sirve inmediatamente en taza precalentada', detail: 'El espresso espera por nadie' }
      ],
      tips: ['Calibra la molienda diariamente', 'Observa el color de la extracción', 'Practica la consistencia'],
      equipment: ['Máquina de espresso', 'Molinillo de rebabas', 'Tamper', 'Báscula de precisión'],
      image: IMAGES.preparation.espresso,
      ratio: '1:2',
      grind: 'Fino'
    },
    aeropress: {
      name: 'AeroPress',
      icon: '💨',
      difficulty: 'Fácil',
      time: '2-3 min',
      description: 'Método versátil que combina inmersión y presión para un café limpio y concentrado.',
      steps: [
        { text: 'Coloca filtro y enjuaga con agua caliente', detail: 'Elimina sabores del papel' },
        { text: 'Añade 15g de café molido medio-fino', detail: 'Proporción 1:16 concentrada' },
        { text: 'Vierte 240ml de agua a 85°C', detail: 'Temperatura más baja por presión' },
        { text: 'Revuelve 10 segundos', detail: 'Asegura extracción uniforme' },
        { text: 'Espera 1 minuto y coloca émbolo', detail: 'Crea vacío parcial' },
        { text: 'Presiona suavemente 30 segundos', detail: 'Presión constante y controlada' }
      ],
      tips: ['Experimenta con tiempo de contacto', 'Ajusta temperatura según gusto', 'Prueba método invertido'],
      equipment: ['AeroPress', 'Filtros AeroPress', 'Revolvedor', 'Taza resistente'],
      image: IMAGES.preparation.aeropress,
      ratio: '1:16',
      grind: 'Medio-Fino'
    },
    coldBrew: {
      name: 'Cold Brew',
      icon: '🧊',
      difficulty: 'Fácil',
      time: '12-24 hrs',
      description: 'Extracción en frío que produce un café suave, menos ácido y naturalmente dulce.',
      steps: [
        { text: 'Muele 100g de café grueso', detail: 'Molienda muy gruesa es esencial' },
        { text: 'Combina con 1L de agua fría', detail: 'Proporción 1:10 para concentrado' },
        { text: 'Revuelve para saturar completamente', detail: 'Asegura que todo el café esté húmedo' },
        { text: 'Refrigera 12-24 horas', detail: 'Más tiempo = más extracción' },
        { text: 'Filtra con malla fina o filtro', detail: 'Doble filtrado para claridad' },
        { text: 'Sirve con hielo o diluye con agua', detail: 'Ajusta concentración al gusto' }
      ],
      tips: ['Usa agua filtrada', 'Experimenta con tiempos', 'Se conserva hasta 2 semanas'],
      equipment: ['Contenedor grande', 'Filtro de malla fina', 'Refrigerador', 'Botellas para almacenar'],
      image: IMAGES.preparation.coldBrew,
      ratio: '1:10',
      grind: 'Muy Grueso'
    }
  };

  const generalTips = [
    { icon: '💧', title: 'Agua de Calidad', description: 'Usa agua filtrada o embotellada. El 98% del café es agua.' },
    { icon: '⚖️', title: 'Proporción Exacta', description: 'Usa báscula digital para medidas precisas y consistentes.' },
    { icon: '🌡️', title: 'Temperatura Correcta', description: 'Entre 85-95°C según el método de preparación.' },
    { icon: '⏰', title: 'Tiempo de Contacto', description: 'Respeta los tiempos para evitar sobre o sub-extracción.' }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-cream-light">
      <div className="max-w-7xl mx-auto">
        {/* Header mejorado */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-gold-muted" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gold-muted font-medium">Guía de Preparación</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-coffee-dark mb-4 sm:mb-6 px-4">
            Prepara la Taza Perfecta
          </h2>
          <p className="text-base sm:text-lg text-coffee-medium/80 max-w-3xl mx-auto leading-relaxed px-4">
            Descubre los secretos de la preparación perfecta con nuestras guías detalladas para cada método. 
            Cada técnica resalta diferentes características de nuestro café de especialidad.
          </p>
        </div>

        {/* Selector de métodos mejorado */}
        <div className="overflow-x-auto pb-4 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4 min-w-max sm:min-w-0">
            {Object.entries(methods).map(([key, method]) => (
              <button
                key={key}
                onClick={() => setActiveMethod(key)}
                className={`group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-500 flex-shrink-0 ${
                  activeMethod === key
                    ? 'bg-gold-muted border-gold-muted text-coffee-dark shadow-lg scale-105'
                    : 'bg-cream-medium border-cream-warm/20 text-coffee-medium hover:border-gold-muted/50 hover:bg-cream-warm hover:scale-102'
                }`}
              >
                <span className="text-xl sm:text-2xl">{method.icon}</span>
                <div className="text-left">
                  <div className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
                    activeMethod === key ? 'text-coffee-dark' : 'text-coffee-medium group-hover:text-coffee-dark'
                  }`}>
                    {method.name}
                  </div>
                  <div className={`text-xs transition-colors duration-300 ${
                    activeMethod === key ? 'text-coffee-dark/70' : 'text-coffee-medium/60'
                  }`}>
                    {method.difficulty} • {method.time}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Contenido principal del método */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Información del método */}
          <div className="space-y-6 sm:space-y-8">
            {/* Header del método */}
            <div className="bg-cream-medium/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gold-muted/10">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl flex-shrink-0">{methods[activeMethod as keyof typeof methods].icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl text-coffee-dark mb-2">{methods[activeMethod as keyof typeof methods].name}</h3>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-coffee-medium/80">
                    <span className="flex items-center gap-1">📊 {methods[activeMethod as keyof typeof methods].difficulty}</span>
                    <span className="flex items-center gap-1">⏱️ {methods[activeMethod as keyof typeof methods].time}</span>
                    <span className="flex items-center gap-1">☕ {methods[activeMethod as keyof typeof methods].ratio}</span>
                    <span className="flex items-center gap-1">⚙️ {methods[activeMethod as keyof typeof methods].grind}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-coffee-dark/90 leading-relaxed">
                {methods[activeMethod as keyof typeof methods].description}
              </p>
            </div>

            {/* Pasos de preparación */}
            <div>
              <h4 className="text-lg sm:text-xl font-medium text-coffee-dark mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-gold-muted">📋</span>
                Pasos de Preparación
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {methods[activeMethod as keyof typeof methods].steps.map((step, index) => (
                  <div key={index} className="group flex gap-3 sm:gap-4 p-3 sm:p-4 bg-cream-medium/30 rounded-lg sm:rounded-xl hover:bg-cream-medium/50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold-muted/20 flex items-center justify-center text-coffee-dark text-sm sm:text-base font-medium group-hover:bg-gold-muted/30 transition-colors duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base text-coffee-dark font-medium mb-1">{step.text}</p>
                      <p className="text-xs sm:text-sm text-coffee-medium/70 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consejos profesionales */}
            <div>
              <h4 className="text-lg sm:text-xl font-medium text-coffee-dark mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-gold-muted">💡</span>
                Consejos Profesionales
              </h4>
              <div className="grid gap-2 sm:gap-3">
                {methods[activeMethod as keyof typeof methods].tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gold-muted/10 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-gold-muted flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-coffee-dark leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipamiento necesario */}
            <div>
              <h4 className="text-lg sm:text-xl font-medium text-coffee-dark mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-gold-muted">🛠️</span>
                Equipamiento Necesario
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {methods[activeMethod as keyof typeof methods].equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-2.5 sm:p-3 bg-cream-medium/50 rounded-lg">
                    <span className="text-gold-muted flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-coffee-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imagen y visualización */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <img
                src={methods[activeMethod as keyof typeof methods].image}
                alt={methods[activeMethod as keyof typeof methods].name}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent" />
              
              {/* Overlay con información rápida */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-cream-light/95 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gold-muted/20">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-coffee-medium/60 uppercase tracking-wide text-xs">Proporción</span>
                      <div className="text-gold-muted font-medium text-sm sm:text-base">{methods[activeMethod as keyof typeof methods].ratio}</div>
                    </div>
                    <div>
                      <span className="text-coffee-medium/60 uppercase tracking-wide text-xs">Molienda</span>
                      <div className="text-gold-muted font-medium text-sm sm:text-base">{methods[activeMethod as keyof typeof methods].grind}</div>
                    </div>
                    <div>
                      <span className="text-coffee-medium/60 uppercase tracking-wide text-xs">Tiempo</span>
                      <div className="text-gold-muted font-medium text-sm sm:text-base">{methods[activeMethod as keyof typeof methods].time}</div>
                    </div>
                    <div>
                      <span className="text-coffee-medium/60 uppercase tracking-wide text-xs">Dificultad</span>
                      <div className="text-gold-muted font-medium text-sm sm:text-base">{methods[activeMethod as keyof typeof methods].difficulty}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de café recomendado */}
            <div className="bg-coffee-dark/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gold-muted/10">
              <h4 className="text-base sm:text-lg font-medium text-coffee-dark mb-3">☕ Café Recomendado</h4>
              <div className="flex items-center gap-3 sm:gap-4">
                <img 
                  src={IMAGES.products.clasico}
                  alt="El Hatillo Clásico"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm sm:text-base text-coffee-dark font-medium">El Hatillo - Clásico</h5>
                  <p className="text-xs sm:text-sm text-coffee-medium/80">Perfecto para este método de preparación</p>
                  <div className="text-gold-muted text-xs sm:text-sm font-medium mt-1">$28.000 - 500g</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos generales */}
        <div className="bg-cream-medium/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gold-muted/10">
          <h3 className="font-serif text-xl sm:text-2xl text-coffee-dark text-center mb-6 sm:mb-8 px-4">
            Consejos Universales para el Café Perfecto
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {generalTips.map((tip, index) => (
              <div key={index} className="text-center group">
                <div className="bg-cream-light w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center border border-gold-muted/20 group-hover:border-gold-muted/50 group-hover:bg-cream-warm transition-all duration-300">
                  <span className="text-xl sm:text-2xl">{tip.icon}</span>
                </div>
                <h4 className="text-sm sm:text-base text-coffee-dark font-medium mb-1 sm:mb-2 group-hover:text-gold-muted transition-colors duration-300 px-2">
                  {tip.title}
                </h4>
                <p className="text-xs sm:text-sm text-coffee-medium/80 leading-relaxed px-2">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubscriptionSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-coffee-dark to-coffee-medium">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-muted mb-3 sm:mb-4 px-4">
          Club El Hatillo
        </h2>
        <p className="text-cream-warm/90 text-base sm:text-lg mb-6 sm:mb-8 font-light px-4">
          Café fresco cada mes en tu puerta
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 text-cream-warm/80 text-xs sm:text-sm px-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold-muted flex-shrink-0" />
            <span>Descuento 15%</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold-muted flex-shrink-0" />
            <span>Envío gratis</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold-muted flex-shrink-0" />
            <span>Variedades exclusivas</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-gold-muted/50 text-cream-warm placeholder-cream-warm/50 focus:outline-none focus:border-gold-muted transition-colors text-sm sm:text-base"
          />
          <button className="bg-gold-muted text-coffee-dark px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-widest uppercase hover:bg-gold-muted/90 transition-all duration-500">
            Unirme
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-cream-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-coffee-dark text-center mb-12 sm:mb-16">
          Contáctanos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold-muted flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-sm sm:text-base text-coffee-dark font-medium mb-1">Ubicación</h3>
                <p className="text-xs sm:text-base text-coffee-medium/80 font-light">Togüi, Boyacá, Colombia</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold-muted flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-sm sm:text-base text-coffee-dark font-medium mb-1">Email</h3>
                <p className="text-xs sm:text-base text-coffee-medium/80 font-light break-all">info@cafeelhatillo.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold-muted flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-sm sm:text-base text-coffee-dark font-medium mb-1">WhatsApp</h3>
                <p className="text-xs sm:text-base text-coffee-medium/80 font-light">+57 300 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gold-muted flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-sm sm:text-base text-coffee-dark font-medium mb-1">Instagram</h3>
                <p className="text-xs sm:text-base text-coffee-medium/80 font-light">@cafeelhatillo</p>
              </div>
            </div>
          </div>

          <form className="space-y-5 sm:space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-0 py-2.5 sm:py-3 bg-transparent border-b border-coffee-medium/30 text-coffee-dark placeholder-coffee-medium/50 focus:outline-none focus:border-gold-muted transition-colors text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-0 py-2.5 sm:py-3 bg-transparent border-b border-coffee-medium/30 text-coffee-dark placeholder-coffee-medium/50 focus:outline-none focus:border-gold-muted transition-colors text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-0 py-2.5 sm:py-3 bg-transparent border-b border-coffee-medium/30 text-coffee-dark placeholder-coffee-medium/50 focus:outline-none focus:border-gold-muted transition-colors resize-none text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="bg-gold-muted text-coffee-dark px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-widest uppercase hover:bg-gold-muted/90 transition-all duration-500 w-full"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <footer className="bg-coffee-dark py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-cream-warm font-serif text-xl sm:text-2xl mb-4 sm:mb-6">El Hatillo</div>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 text-cream-warm/70 text-xs sm:text-sm tracking-wider uppercase mb-6 sm:mb-8 px-4">
            <button onClick={() => scrollToSection('story')} className="hover:text-gold-muted transition-colors py-1">Sobre Nosotros</button>
            <span className="text-gold-muted/30 hidden sm:inline">|</span>
            <button onClick={() => scrollToSection('product')} className="hover:text-gold-muted transition-colors py-1">Productos</button>
            <span className="text-gold-muted/30 hidden sm:inline">|</span>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gold-muted transition-colors py-1">Contacto</button>
            <span className="text-gold-muted/30 hidden sm:inline">|</span>
            <button className="hover:text-gold-muted transition-colors py-1">Términos</button>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a href="#" className="text-cream-warm/70 hover:text-gold-muted transition-colors p-2">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="text-cream-warm/70 hover:text-gold-muted transition-colors p-2">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        <div className="text-center text-cream-warm/50 text-xs sm:text-sm font-light px-4">
          © 2025 Café El Hatillo - Togüi, Boyacá
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-olive-dark rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cream-light" />
    </a>
  );
}

export default App;
