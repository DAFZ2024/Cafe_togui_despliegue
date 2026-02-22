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
  X,
  Mountain,
  Thermometer,
  CloudRain,
  Users,
  Star,
  Quote,
  Droplets,
  Scale,
  Clock,
  CupSoda,
  GlassWater,
  Beaker,
  Settings2,
  ListRestart
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
    <section id="story" className="relative py-24 md:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cream-light/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-muted/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1 relative z-10">
          <div className="inline-flex items-center gap-3 mb-8 bg-cream-light/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gold-muted/20">
            <Leaf className="w-5 h-5 text-gold-muted" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gold-muted font-medium">Nuestra Tierra</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-coffee-dark mb-6 leading-tight">
            Café con Alma <br className="hidden sm:block"/>
            <span className="text-gold-muted italic">Boyacense</span>
          </h2>

          <div className="w-20 h-1 bg-gold-muted/60 mb-8 rounded-full"></div>

          <p className="text-coffee-dark text-lg md:text-xl font-light mb-8 max-w-xl leading-relaxed">
            En las alturas de Togüi, Boyacá, donde las montañas se funden con las nubes,
            nace <strong className="font-medium">El Hatillo</strong>: granos cultivados con dedicación por familias que conocen la
            tierra y la cuidan como legado.
          </p>

          <div className="space-y-5 text-coffee-medium/80 font-light text-base md:text-lg leading-relaxed max-w-xl border-l-2 border-gold-muted/30 pl-6 mb-10">
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

          <div className="flex flex-wrap gap-5">
            <button className="bg-gold-muted text-coffee-dark px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-coffee-dark hover:text-gold-muted shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500">
              Conoce la Historia
            </button>
            <button className="bg-transparent border border-coffee-medium/30 text-coffee-dark px-8 py-4 text-sm font-medium tracking-widest uppercase hover:border-gold-muted hover:bg-gold-muted/5 transition-all duration-500">
              Ver Origen
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative h-full flex items-center justify-center mt-8 lg:mt-0">
          {/* Main Image Container */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            {/* Decorative Outline */}
            <div className="absolute inset-0 border-2 border-gold-muted/20 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 rounded-2xl -z-10"></div>
            
            {/* Image Box */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-coffee-dark group">
              <div className="absolute inset-0 bg-coffee-dark/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img
                src={IMAGES.story.cafetales}
                alt="Cafetales de Togüi"
                className="w-full h-[400px] sm:h-[500px] lg:h-[650px] object-cover object-center grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              
              {/* Optional Gradient Overlay for Text Readability */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none opacity-60"></div>
            </div>

            {/* Floating Testimonial Card */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 lg:-left-12 bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gold-muted/10 max-w-[300px] sm:max-w-sm z-20 group-hover:-translate-y-2 transition-transform duration-700 delay-100">
              <div className="mb-4">
                <svg className="w-8 h-8 text-gold-muted/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-coffee-dark italic text-sm sm:text-base font-light leading-relaxed">
                “Cada grano cuenta la historia de nuestra gente y su pasión por la tierra.”
              </p>
              <div className="flex items-center gap-4 mt-6 pt-5 border-t border-cream-medium/50">
                <div className="w-10 h-10 rounded-full bg-cream-medium flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-gold-muted" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-coffee-dark uppercase tracking-wider">Productores</div>
                  <div className="text-[10px] sm:text-xs text-coffee-medium tracking-widest uppercase mt-0.5">Togüi, Boyacá</div>
                </div>
              </div>
            </div>
            
            {/* Small decorative accent */}
            <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-24 h-24 lg:w-32 lg:h-32 bg-[radial-gradient(circle,rgba(212,175,55,0.2)_2px,transparent_2px)] bg-[length:16px_16px] z-20"></div>
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
    <section id="process" className="py-24 md:py-32 px-6 bg-cream-light">
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
    { id: 'all', name: 'Todas', icon: '' },
    { id: 'process', name: 'Proceso', icon: '' },
    { id: 'origin', name: 'Origen', icon: '' },
    { id: 'product', name: 'Producto', icon: '' },
    { id: 'people', name: 'Gente', icon: '' }
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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-cream-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group p-6 rounded-2xl hover:bg-white/40 transition-colors duration-300">
                <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-coffee-dark mx-auto mb-4 sm:mb-6 group-hover:text-gold-muted transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="text-coffee-dark text-lg sm:text-xl font-medium mb-2 sm:mb-3 tracking-wide px-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-coffee-medium/80 font-light px-4">
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
      icon: <Mountain className="w-6 h-6" />,
      description: 'La altitud ideal para desarrollar sabores complejos y acidez brillante en nuestros granos de café.',
      benefit: 'Desarrollo lento del grano que intensifica los sabores'
    },
    {
      title: 'Clima Templado',
      value: '18 - 24',
      unit: '°C',
      icon: <Thermometer className="w-6 h-6" />,
      description: 'Temperaturas estables que permiten una maduración uniforme y gradual de los frutos del café.',
      benefit: 'Maduración lenta que concentra azúcares naturales'
    },
    {
      title: 'Suelos Ricos',
      value: 'Volcánicos',
      unit: 'Minerales',
      icon: <MapPin className="w-6 h-6" />,
      description: 'Suelos arcillosos y franco-arenosos de origen volcánico, ricos en minerales esenciales.',
      benefit: 'Aporta mineralidad y cuerpo distintivo al café'
    },
    {
      title: 'Precipitación',
      value: '1,200 - 1,800',
      unit: 'mm/año',
      icon: <CloudRain className="w-6 h-6" />,
      description: 'Régimen de lluvias ideal distribuido a lo largo del año para el cultivo del café.',
      benefit: 'Hidratación constante sin encharcamiento'
    }
  ];

  const regionStats = [
    { label: 'Familias Caficultoras', value: '150+', icon: <Users className="w-7 h-7" /> },
    { label: 'Hectáreas Cultivadas', value: '500+', icon: <Leaf className="w-7 h-7" /> },
    { label: 'Años de Tradición', value: '80+', icon: <Calendar className="w-7 h-7" /> },
    { label: 'Variedades Cultivadas', value: '4', icon: <Coffee className="w-7 h-7" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 bg-cream-light overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream-medium/40 rounded-l-[150px] blur-3xl -z-10 transform translate-x-1/4"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-muted/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header premium */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gold-muted/20 shadow-sm">
            <MapPin className="w-5 h-5 text-gold-muted" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gold-muted font-medium">Nuestro Origen</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-coffee-dark mb-6">
            Togüi, <span className="text-gold-muted italic">Boyacá</span>
          </h2>
          
          <div className="w-24 h-1 bg-gold-muted/60 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-coffee-medium/90 max-w-3xl mx-auto leading-relaxed font-light px-4">
            En el corazón de la Región Andina colombiana, donde la tradición cafetera se encuentra con 
            la excelencia del terroir montañoso, nace nuestro café de especialidad.
          </p>
        </div>

        {/* Sección principal de Terroir y Mapa */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Mapa y ubicación (Left side visually, but responsive order) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            {/* Outline Decorativo */}
            <div className="absolute -inset-4 border-2 border-gold-muted/15 rounded-[2rem] -z-10 translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6"></div>
            
            <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-cream-medium/50 relative">
              <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-gold-muted/20 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cream-medium flex items-center justify-center group-hover:bg-gold-muted/20 transition-colors">
                    <MapPin className="w-5 h-5 text-gold-muted" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-coffee-dark uppercase tracking-wider">Togüi</div>
                    <div className="text-[10px] text-coffee-medium tracking-widest uppercase">Boyacá, Colombia</div>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-[400px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden relative group">
                {/* Capa para quitar saturación y darle estilo */}
                <div className="absolute inset-0 bg-coffee-dark/5 pointer-events-none z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"></div>
                
                <iframe
                  title="Mapa Togui, Boyacá"
                  src="https://www.google.com/maps?q=Togui+Boyaca&z=11&output=embed"
                  className="w-full h-full border-0 filter grayscale-[25%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Data pills flotantes del mapa */}
              <div className="absolute bottom-6 right-6 lg:-right-6 flex flex-col gap-3 z-20">
                <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-gold-muted/15 flex items-center gap-4 transform transition-transform hover:-translate-x-2">
                  <div className="w-8 h-8 rounded-full bg-cream-medium flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gold-muted" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-coffee-medium">Coordenadas</span>
                    <span className="text-xs sm:text-sm font-bold text-coffee-dark">5°58'N, 74°28'W</span>
                  </div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-gold-muted/15 flex items-center gap-4 transform transition-transform hover:-translate-x-2">
                  <div className="w-8 h-8 rounded-full bg-cream-medium flex items-center justify-center">
                    <CaravanIcon />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-coffee-medium">A Bogotá</span>
                    <span className="text-xs sm:text-sm font-bold text-coffee-dark">180 km al noreste</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Características del terroir (Right side visually) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <h3 className="font-serif text-3xl md:text-4xl text-coffee-dark mb-8">El Terroir Perfecto</h3>
            
            <div className="grid gap-4">
              {features.map((feature, index) => {
                const isActive = activeFeature === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`group cursor-pointer transition-all duration-500 overflow-hidden ${
                      isActive ? 'scale-100' : 'hover:scale-[1.02]'
                    }`}
                  >
                    <div className={`p-5 sm:p-6 rounded-2xl border-l-4 transition-all duration-500 ${
                      isActive 
                        ? 'bg-white border-gold-muted shadow-xl' 
                        : 'bg-white/40 border-transparent hover:border-gold-muted/30 hover:bg-white/80 border-l-gold-muted/10'
                    }`}>
                      <div className="flex gap-4 sm:gap-6">
                        {/* Icono */}
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${
                          isActive ? 'bg-gold-muted/10 text-gold-muted' : 'bg-cream-medium text-coffee-medium group-hover:text-gold-muted'
                        }`}>
                          {feature.icon}
                        </div>

                        {/* Contenido */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                            <h4 className={`text-lg font-medium transition-colors duration-300 ${
                              isActive ? 'text-coffee-dark' : 'text-coffee-medium group-hover:text-coffee-dark'
                            }`}>
                              {feature.title}
                            </h4>
                            <div className="flex items-baseline gap-1">
                              <span className={`font-serif text-xl sm:text-2xl transition-colors duration-300 ${
                                isActive ? 'text-gold-muted' : 'text-coffee-medium/50 group-hover:text-gold-muted/80'
                              }`}>
                                {feature.value}
                              </span>
                              <span className={`text-xs transition-colors duration-300 ${
                                isActive ? 'text-gold-muted' : 'text-coffee-medium/40'
                              }`}>
                                {feature.unit}
                              </span>
                            </div>
                          </div>

                          <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                              <p className="text-sm text-coffee-medium/80 mb-4 leading-relaxed">
                                {feature.description}
                              </p>
                              <div className="flex items-center gap-2.5 bg-cream-light/80 p-3 rounded-lg border border-gold-muted/10">
                                <CheckCircle className="w-4 h-4 text-gold-muted flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-coffee-dark font-medium">{feature.benefit}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Indicadores de progreso radiales */}
            <div className="flex justify-start gap-3 mt-8 pl-4">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`relative flex items-center justify-center w-6 h-6 transition-all duration-300 ${
                    activeFeature === index ? 'scale-110' : 'hover:scale-110'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    activeFeature === index ? 'bg-gold-muted' : 'bg-cream-warm hover:bg-gold-muted/50'
                  }`} />
                  {activeFeature === index && (
                    <div className="absolute inset-0 rounded-full border border-gold-muted/30 animate-ping opacity-50"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de Estadísticas con fondo oscuro premium */}
        <div className="relative bg-coffee-dark rounded-[2.5rem] p-8 sm:p-14 overflow-hidden shadow-2xl mt-32 mb-24 lg:mx-8">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-muted/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="text-center lg:text-left lg:max-w-sm flex-shrink-0">
              <h3 className="font-serif text-3xl sm:text-4xl text-cream-light mb-4">La Región en<br className="hidden lg:block"/> Números</h3>
              <p className="text-cream-medium/70 text-base leading-relaxed font-light">
                Tradición, esfuerzo y dedicación de cientos de familias boyacenses.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 flex-1 w-full">
              {regionStats.map((stat, index) => (
                <div key={index} className="text-center group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gold-muted/30 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl mx-auto mb-5 flex items-center justify-center bg-cream-medium/10 text-gold-muted/80 group-hover:text-gold-muted group-hover:bg-gold-muted/20 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-cream-medium/60 uppercase tracking-widest leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de historia regional */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-cream-medium/50 px-4 py-2 rounded-full border border-gold-muted/20">
              <Calendar className="w-4 h-4 text-gold-muted" />
              <span className="text-xs uppercase tracking-widest text-coffee-dark font-medium">Legado Cafetero</span>
            </div>
            
            <h3 className="font-serif text-4xl lg:text-5xl text-coffee-dark leading-tight">
              Historia & <br className="hidden lg:block"/>
              <span className="text-gold-muted italic">Tradición</span>
            </h3>
            
            <div className="w-16 h-1 bg-gold-muted/50 rounded-full"></div>
            
            <div className="space-y-5 text-coffee-medium/90 font-light text-lg leading-relaxed">
              <p>
                Togüi es un municipio boyacense cuya tradición cafetera se remonta a principios del siglo XX. 
                Las familias campesinas han perfeccionado durante generaciones las técnicas de cultivo que 
                aprovechan las condiciones únicas de esta región montañosa.
              </p>
              <p>
                El nombre "Togüi" proviene del idioma chibcha y significa "lugar del maíz", pero con el tiempo 
                se ha convertido en sinónimo de café de alta calidad en la región central de Colombia.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 pt-4 border-t border-gold-muted/10">
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gold-muted/20 shadow-sm hover:shadow-md transition-shadow">
                <Leaf className="w-4 h-4 text-gold-muted" />
                <span className="text-sm text-coffee-dark font-medium">Cultivo Orgánico</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gold-muted/20 shadow-sm hover:shadow-md transition-shadow">
                <HandHeart className="w-4 h-4 text-gold-muted" />
                <span className="text-sm text-coffee-dark font-medium">Comercio Justo</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gold-muted/20 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-4 h-4 text-gold-muted" />
                <span className="text-sm text-coffee-dark font-medium">Certificado Superior</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 border-2 border-gold-muted/20 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 rounded-3xl -z-10 transition-transform duration-700 group-hover:translate-x-8 group-hover:translate-y-8"></div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
              <img
                src={IMAGES.story.landscape}
                alt="Paisaje cafetero de Togüí"
                className="w-full h-[450px] sm:h-[550px] object-cover filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20">
                <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gold-muted/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform translate-y-0 opacity-100 transition-all duration-500 group-hover:-translate-y-2">
                  <p className="text-coffee-dark text-base italic leading-relaxed font-light mb-4">
                    "Estas montañas han sido testigo de generaciones dedicadas al arte del cultivo manual, donde cada planta tiene nombre e historia."
                  </p>
                  <div className="flex items-center gap-4 border-t border-cream-medium/50 pt-4">
                    <div className="w-10 h-10 rounded-full bg-cream-medium flex items-center justify-center text-gold-muted shadow-inner">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-coffee-medium mb-0.5">Don Carlos</div>
                      <div className="text-xs font-bold text-coffee-dark">Caficultor de 3ra generación</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaravanIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-muted">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
      <circle cx="7" cy="17" r="2"/>
      <path d="M9 17h6"/>
      <circle cx="17" cy="17" r="2"/>
    </svg>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { 
      text: 'El mejor café que he probado. Las notas de chocolate son increíbles. Ha cambiado mis mañanas por completo.', 
      author: 'María González', 
      city: 'Bogotá', 
      role: 'Amante del Café' 
    },
    { 
      text: 'Frescura incomparable. Se nota la calidad y el trabajo artesanal en cada taza. Aroma espectacular.', 
      author: 'Carlos Rodríguez', 
      city: 'Medellín', 
      role: 'Barista Aficionado' 
    },
    { 
      text: 'Apoyar directamente a los caficultores hace que cada sorbo sea especial. Sostenibilidad que se saborea.', 
      author: 'Ana Martínez', 
      city: 'Cali', 
      role: 'Cliente Frecuente' 
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-cream-light overflow-hidden">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold-muted/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coffee-dark/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-5">
            <Star className="w-4 h-4 text-gold-muted fill-gold-muted" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gold-muted font-medium">Experiencias Reales</span>
            <Star className="w-4 h-4 text-gold-muted fill-gold-muted" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-coffee-dark mb-6">
            Lo Que Dicen <br className="hidden sm:block"/>
            <span className="text-gold-muted italic">Nuestros Clientes</span>
          </h2>
          <div className="w-20 h-1 bg-gold-muted/60 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-gold-muted/20 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              {/* Comillas Decorativas Grandes detrás */}
              <div className="absolute top-6 left-6 text-gold-muted/10 transform group-hover:scale-110 group-hover:text-gold-muted/20 transition-all duration-500 pointer-events-none z-0">
                <Quote size={80} strokeWidth={1} />
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold-muted fill-gold-muted" />
                  ))}
                </div>
                
                <p className="text-base sm:text-lg text-coffee-dark/90 italic mb-8 font-light leading-relaxed flex-1">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-cream-medium/80">
                  <div className="w-12 h-12 rounded-full bg-cream-medium flex items-center justify-center text-gold-muted border border-gold-muted/20 font-serif text-xl shrink-0 shadow-inner">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-coffee-dark font-bold tracking-wide">{testimonial.author}</p>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                      <p className="text-[10px] sm:text-xs text-coffee-medium tracking-widest uppercase">{testimonial.role}</p>
                      <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gold-muted shrink-0"></span>
                      <p className="text-[10px] sm:text-xs text-gold-muted font-medium">{testimonial.city}</p>
                    </div>
                  </div>
                </div>
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
      icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />,
      difficulty: 'Intermedio',
      time: '4-5 min',
      description: 'Método manual que resalta la claridad y complejidad de sabores de nuestro café de especialidad mediante un filtrado delicado.',
      steps: [
        { text: 'Calienta 300ml de agua a 93°C', detail: 'Temperatura ideal para extracción óptima' },
        { text: 'Coloca filtro y enjuaga con agua caliente', detail: 'Elimina sabores del papel y precalienta' },
        { text: 'Añade 18g de café molido medio', detail: 'Proporción 1:16 para balance perfecto' },
        { text: 'Pre-infusión con 40ml por 30 segundos', detail: 'Permite que el café se hinche y desgasifique' },
        { text: 'Vertido en círculos concéntricos 2-3 min', detail: 'Movimientos suaves y constantes' },
        { text: 'Disfruta inmediatamente', detail: 'El mejor sabor se aprecia en los primeros minutos' }
      ],
      tips: ['Molienda uniforme es clave', 'Controla la velocidad de vertido', 'Usa báscula para precisión milimétrica'],
      equipment: ['V60 o Chemex', 'Filtros de papel', 'Báscula digital', 'Hervidor de cuello de cisne'],
      image: IMAGES.preparation.pourover,
      ratio: '1:16',
      grind: 'Medio'
    },
    french: {
      name: 'Prensa Francesa',
      icon: <Beaker className="w-5 h-5 sm:w-6 sm:h-6" />,
      difficulty: 'Fácil',
      time: '6-8 min',
      description: 'Clásico método de inmersión completa que produce una taza con cuerpo inigualable y extrae a la perfección los aceites naturales.',
      steps: [
        { text: 'Calienta 500ml de agua a 95°C', detail: 'Temperatura ligeramente más alta para facilitar la inmersión' },
        { text: 'Precalienta la prensa francesa', detail: 'Enjuaga con agua caliente y seca bien antes del uso' },
        { text: 'Añade 30g de café molido grueso', detail: 'Proporción 1:16 con molienda gruesa obligatoria' },
        { text: 'Vierte agua y revuelve suavemente', detail: 'Asegura una saturación completa de todo el café' },
        { text: 'Coloca tapa y espera 4 minutos', detail: 'Paciencia: este es el tiempo óptimo de extracción' },
        { text: 'Presiona lentamente y sirve', detail: 'Aplica un movimiento constante y controlado hacia abajo' }
      ],
      tips: ['La molienda gruesa evita la sobre-extracción', 'No dejes reposar el líquido más de 6 minutos', 'Sirve inmediatamente después de prensar'],
      equipment: ['Prensa francesa', 'Molinillo de rebabas', 'Cronómetro', 'Cuchara de madera para revolver'],
      image: IMAGES.preparation.french,
      ratio: '1:16',
      grind: 'Grueso'
    },
    espresso: {
      name: 'Espresso',
      icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />,
      difficulty: 'Avanzado',
      time: '25-30 seg',
      description: 'La esencia de las bebidas con leche. Un concentrado aromático, potente y con una capa de crema espesa y dorada.',
      steps: [
        { text: 'Precalienta la máquina y portafiltro', detail: 'Una temperatura estable es fundamental para no quemar el grano' },
        { text: 'Muele 18-20g de café fino', detail: 'Ajusta la molienda todos los días según el flujo de extracción' },
        { text: 'Distribuye uniformemente en portafiltro', detail: 'Esto evita canalizaciones de agua durante el presurizado' },
        { text: 'Nivela y compacta con 15kg de presión', detail: 'Genera una superficie de café pareja y firme' },
        { text: 'Extrae 40ml en 25-30 segundos', detail: 'Observa la evolución del color y la consistencia espesa' },
        { text: 'Sirve inmediatamente', detail: 'En taza rigurosamente precalentada. El espresso espera por nadie.' }
      ],
      tips: ['Calibra la molienda diariamente', 'Observa atentamente el color de la extracción ("crema")', 'Practica la consistencia en el compactado'],
      equipment: ['Máquina de espresso', 'Molinillo de rebabas de precisión', 'Tamper metálico', 'Báscula de precisión'],
      image: IMAGES.preparation.espresso,
      ratio: '1:2',
      grind: 'Fino'
    },
    aeropress: {
      name: 'AeroPress',
      icon: <ListRestart className="w-5 h-5 sm:w-6 sm:h-6" />,
      difficulty: 'Fácil',
      time: '2-3 min',
      description: 'El método más versátil moderno. Combina inmersión y presión generando un café limpio, redondo y sumamente concentrado.',
      steps: [
        { text: 'Coloca el filtro y enjuaga', detail: 'Con agua caliente para eliminar los residuos y sabores del papel' },
        { text: 'Añade 15g de café molido', detail: 'Medio-fino, utilizando una proporción concentrada 1:16' },
        { text: 'Vierte 240ml de agua a 85°C', detail: 'Preferimos una temperatura un poco más baja para este método de presión' },
        { text: 'Revuelve durante 10 segundos', detail: 'Es vital para asegurar una extracción uniforme' },
        { text: 'Espera 1 minuto y coloca émbolo', detail: 'Esto crea un vacío parcial dentro de la cámara' },
        { text: 'Presiona suave y constante', detail: 'Termina de presionar durante unos 30 segundos controlados' }
      ],
      tips: ['Experimenta variando el tiempo de contacto', 'Ajusta la temperatura probando según tu gusto', 'Sube la apuesta intentando el método "invertido"'],
      equipment: ['AeroPress original', 'Filtros AeroPress (papel o metal)', 'Revolvedor', 'Taza robusta y resistente'],
      image: IMAGES.preparation.aeropress,
      ratio: '1:16',
      grind: 'Medio-Fino'
    },
    coldBrew: {
      name: 'Cold Brew',
      icon: <GlassWater className="w-5 h-5 sm:w-6 sm:h-6" />,
      difficulty: 'Fácil',
      time: '12-24 hrs',
      description: 'Una extracción pura en frío. Su paciencia produce un café suave, significativamente menos ácido y con mucha dulzura natural.',
      steps: [
        { text: 'Muele 100g de café grueso', detail: 'Una molienda muy gruesa es absolutamente esencial aquí' },
        { text: 'Combina con 1L de agua fría', detail: 'Maneja una proporción de 1:10 para asegurar un buen concentrado' },
        { text: 'Revuelve para saturar', detail: 'Asegúrate que todo el café esté visiblemente húmedo y mezclado' },
        { text: 'Refrigera 12 a 24 horas', detail: 'Acuérdate de la regla: a más tiempo de reposo, más extracción obtienes' },
        { text: 'Filtra doblemente', detail: 'Usa malla fina y luego de papel para máxima claridad en la taza' },
        { text: 'Sirve con bastante hielo', detail: 'Puedes tomarlo puro o diluirlo con un poco de agua o leche al gusto' }
      ],
      tips: ['Usa estrictamente agua bien filtrada', 'Experimenta prolongando los tiempos de inmersión', 'Este concentrado se conserva excelente hasta por 2 semanas'],
      equipment: ['Contenedor ancho/grande', 'Filtro de malla súper fina', 'Refrigerador', 'Botellas herméticas para almacenar'],
      image: IMAGES.preparation.coldBrew,
      ratio: '1:10',
      grind: 'Muy Grueso'
    }
  };

  const generalTips = [
    { icon: <Droplets className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Agua de Calidad', description: 'Usa agua filtrada. El 98% del café es agua, afecta directamente.' },
    { icon: <Scale className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Proporción Exacta', description: 'Usa una báscula digital de precisión para repeticiones consistentes.' },
    { icon: <Thermometer className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Temperatura Vital', description: 'Asegura entre 85°C y 95°C dependiendo rigurosamente del método.' },
    { icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Tiempo Restringido', description: 'Respeta los tiempos estipulados para evitar la astringencia (sobre-extracción).' }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream-medium/30 rounded-l-[150px] blur-3xl -z-10 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header premium */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 mb-6 bg-cream-light/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gold-muted/20 shadow-sm">
            <CupSoda className="w-5 h-5 text-gold-muted" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gold-muted font-medium">Arte y Precisión</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-coffee-dark mb-6">
            Guía de <span className="text-gold-muted italic">Preparación</span>
          </h2>
          
          <div className="w-24 h-1 bg-gold-muted/60 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-coffee-medium/90 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Descubre y perfecciona los secretos para extraer la taza ideal. Cada técnica revelará matices asombrosos sobre la complejidad de nuestro café de especialidad.
          </p>
        </div>

        {/* Selector de métodos (Pestañas premium) */}
        <div className="flex justify-start sm:justify-center overflow-x-auto pb-4 mb-16 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
          <div className="flex gap-4 min-w-max p-2 rounded-2xl bg-white/50 backdrop-blur-md border border-gold-muted/15 shadow-sm">
            {Object.entries(methods).map(([key, method]) => {
              const isActive = activeMethod === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveMethod(key)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-500 overflow-hidden ${
                    isActive
                      ? 'bg-coffee-dark text-white shadow-lg scale-100'
                      : 'bg-transparent text-coffee-medium hover:bg-cream-medium/50 hover:text-coffee-dark'
                  }`}
                >
                  <div className={`relative z-10 flex items-center gap-3 ${isActive ? 'text-gold-muted' : 'text-coffee-medium group-hover:text-gold-muted'}`}>
                    {method.icon}
                  </div>
                  <div className="text-left relative z-10 pr-2">
                    <div className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-coffee-dark'
                    }`}>
                      {method.name}
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark via-coffee-dark to-coffee-dark z-0 border border-gold-muted/30 rounded-xl"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenedor Principal (Panel Dividido) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-24">
          
          {/* Lado Izquierdo: Información y Pasos */}
          <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
            
            {/* Header de Información del Método */}
            <div className="bg-cream-light p-8 md:p-10 rounded-[2rem] border border-gold-muted/15 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-muted/5 rounded-bl-full transition-transform duration-700 group-hover:scale-150"></div>
              
              <div className="relative z-10 flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gold-muted/20 shadow-md flex items-center justify-center text-gold-muted flex-shrink-0 group-hover:bg-gold-muted/10 transition-colors duration-500">
                  {methods[activeMethod as keyof typeof methods].icon}
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-coffee-dark mb-3">{methods[activeMethod as keyof typeof methods].name}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gold-muted/10 rounded-full text-xs font-bold text-coffee-dark uppercase tracking-wider shadow-sm">
                      <Settings2 className="w-3.5 h-3.5 text-gold-muted" /> {methods[activeMethod as keyof typeof methods].difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gold-muted/10 rounded-full text-xs font-bold text-coffee-dark uppercase tracking-wider shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-gold-muted" /> {methods[activeMethod as keyof typeof methods].time}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-base md:text-lg text-coffee-dark/80 font-light leading-relaxed relative z-10">
                {methods[activeMethod as keyof typeof methods].description}
              </p>
            </div>

            {/* Guía Paso a Paso */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <h4 className="font-serif text-2xl text-coffee-dark border-b-2 border-gold-muted/40 pb-2">Secuencia de Elaboración</h4>
              </div>
              <div className="space-y-4">
                {methods[activeMethod as keyof typeof methods].steps.map((step, index) => (
                  <div key={index} className="group relative flex gap-5 bg-white p-5 rounded-2xl border border-cream-medium hover:border-gold-muted/30 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cream-medium/50 flex items-center justify-center text-gold-muted font-bold font-serif text-lg group-hover:bg-gold-muted group-hover:text-coffee-dark transition-colors duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-base text-coffee-dark font-bold mb-1 group-hover:text-gold-muted transition-colors">{step.text}</h5>
                      <p className="text-sm text-coffee-medium/80 leading-relaxed font-light">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Lado Derecho: Visuales y Herramientas */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            
            {/* Imagen Principal Tipo Poster (Aspect Ratio Alto) */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[450px] md:h-[550px] lg:h-[650px] group">
              <div className="absolute inset-0 bg-coffee-dark/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img
                src={methods[activeMethod as keyof typeof methods].image}
                alt={methods[activeMethod as keyof typeof methods].name}
                className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              
              {/* Overlay Glassmorphism con Parámetros */}
              <div className="absolute inset-x-6 bottom-6 z-20">
                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-x divide-cream-medium/50">
                    <div className="px-2 text-center lg:text-left">
                      <span className="block text-[10px] text-coffee-medium uppercase tracking-widest mb-1">Ratió Café/Agua</span>
                      <div className="text-coffee-dark font-serif text-lg font-bold">{methods[activeMethod as keyof typeof methods].ratio}</div>
                    </div>
                    <div className="px-2 text-center lg:text-left">
                      <span className="block text-[10px] text-coffee-medium uppercase tracking-widest mb-1">Tipo de Molienda</span>
                      <div className="text-coffee-dark font-serif text-lg font-bold truncate" title={methods[activeMethod as keyof typeof methods].grind}>{methods[activeMethod as keyof typeof methods].grind}</div>
                    </div>
                    <div className="px-2 text-center lg:text-left hidden lg:block">
                      <span className="block text-[10px] text-coffee-medium uppercase tracking-widest mb-1">Temperatura</span>
                      <div className="text-coffee-dark font-serif text-lg font-bold">90-95°C</div>
                    </div>
                    <div className="px-2 text-center lg:text-left hidden lg:block">
                      <span className="block text-[10px] text-coffee-medium uppercase tracking-widest mb-1">Agua Filtrada</span>
                      <div className="text-coffee-dark font-serif text-lg font-bold">Obligatorio</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dos Columnas Inferiores: Tips y Equipo */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Bloque Tips Profesionales */}
              <div className="bg-coffee-dark p-6 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-muted/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-cream-light font-serif text-xl mb-5 flex items-center gap-2 relative z-10">
                  <Star className="w-5 h-5 text-gold-muted fill-gold-muted" /> Pro Tips
                </h4>
                <ul className="space-y-4 relative z-10">
                  {methods[activeMethod as keyof typeof methods].tips.map((tip, index) => (
                    <li key={index} className="flex gap-3 text-sm text-cream-medium/80 font-light leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-gold-muted flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloque Equipamiento */}
              <div className="bg-cream-light p-6 rounded-3xl border border-gold-muted/20 relative overflow-hidden group">
                <h4 className="text-coffee-dark font-serif text-xl mb-5 flex items-center gap-2 relative z-10">
                  <Settings2 className="w-5 h-5 text-gold-muted" /> Herramientas
                </h4>
                <div className="flex flex-col gap-3 relative z-10">
                  {methods[activeMethod as keyof typeof methods].equipment.map((item, index) => (
                    <div key={index} className="flex grid-cols-[auto_1fr] items-center gap-3 bg-white px-4 py-2.5 rounded-xl text-sm font-medium text-coffee-dark shadow-sm border border-transparent hover:border-gold-muted/30 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-muted flex-shrink-0"></span> {item}
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
            
          </div>
        </div>

        {/* Banners Consejos Generales Universales */}
        <div className="relative bg-white rounded-[2.5rem] p-8 sm:p-12 border border-gold-muted/15 shadow-[0_20px_60px_rgba(0,0,0,0.03)] mt-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cream-medium/40 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 z-0"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-coffee-dark">
              Principios <span className="text-gold-muted italic">Universales</span> de Extracción
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {generalTips.map((tip, index) => (
              <div key={index} className="flex flex-col lg:items-center lg:text-center group">
                <div className="w-16 h-16 rounded-2xl bg-cream-light border border-gold-muted/20 flex items-center justify-center text-gold-muted mb-5 group-hover:bg-gold-muted group-hover:text-white group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  {tip.icon}
                </div>
                <h4 className="text-base sm:text-lg text-coffee-dark font-bold mb-2 group-hover:text-gold-muted transition-colors">
                  {tip.title}
                </h4>
                <p className="text-sm text-coffee-medium/90 leading-relaxed font-light">
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
