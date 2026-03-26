import { useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import BrandStrip from '@/components/BrandStrip';
import TrustSection from '@/components/TrustSection';
import FeaturedSection from '@/components/FeaturedSection';
import CategoryFilter from '@/components/CategoryFilter';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import MobileNav from '@/components/MobileNav';
import { products, type Product, type Category } from '@/data/products';
import { STORE_WHATSAPP } from '@/config';

const NAVY = 'hsl(215 32% 13%)';
const NAVY_DARK = 'hsl(215 38% 9%)';
const GOLD = 'hsl(43 85% 50%)';

type SortOption = 'relevancia' | 'precio-asc' | 'precio-desc' | 'nuevo';

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: 'Relevancia', value: 'relevancia' },
  { label: 'Precio ↑',   value: 'precio-asc'  },
  { label: 'Precio ↓',   value: 'precio-desc' },
  { label: 'Nuevos',     value: 'nuevo'        },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [selectedProduct, setSelectedProduct]   = useState<Product | null>(null);
  const [sortBy, setSortBy]                     = useState<SortOption>('relevancia');

  const filtered = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'precio-asc')  return a.price - b.price;
    if (sortBy === 'precio-desc') return b.price - a.price;
    if (sortBy === 'nuevo')       return (b.badge === 'Nuevo' ? 1 : 0) - (a.badge === 'Nuevo' ? 1 : 0);
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── BRAND STRIP ──────────────────────────────────────────────── */}
      <BrandStrip />

      {/* ── TRUST ────────────────────────────────────────────────────── */}
      <TrustSection />

      {/* ── DESTACADOS ───────────────────────────────────────────────── */}
      <FeaturedSection onSelect={setSelectedProduct} />

      {/* ── CATÁLOGO ─────────────────────────────────────────────────── */}
      <section id="catalogo" className="pt-20 sm:pt-24 lg:pt-28 pb-24 px-5 sm:px-8">
        <div className="container mx-auto">

          {/* Section heading */}
          <div className="mb-12 sm:mb-16">
            <p
              className="font-body font-semibold uppercase tracking-[0.45em] mb-4"
              style={{ fontSize: '0.6rem', color: GOLD }}
            >
              Colección 2026
            </p>
            <h2
              className="font-display font-semibold"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: NAVY, lineHeight: 1.1, marginBottom: '16px' }}
            >
              Nuestra Colección
            </h2>
            <div style={{ width: '44px', height: '1.5px', background: GOLD }} />
          </div>

          {/* Category filter */}
          <div className="mb-6" style={{ borderBottom: '1px solid hsl(0 0% 90%)' }}>
            <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          </div>

          {/* Sort + count bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10 sm:mb-12">
            <p
              className="font-body"
              style={{ fontSize: '0.76rem', color: 'hsl(0 0% 54%)' }}
            >
              {sorted.length} {sorted.length === 1 ? 'producto' : 'productos'}
            </p>
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide pb-0.5">
              <span
                className="font-body font-semibold uppercase tracking-[0.18em] mr-1 shrink-0"
                style={{ fontSize: '0.58rem', color: 'hsl(0 0% 52%)' }}
              >
                Ordenar
              </span>
              {SORT_OPTIONS.map(opt => {
                const active = sortBy === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setSortBy(opt.value)}
                    className="font-body font-semibold transition-all duration-200 active:scale-95 shrink-0"
                    style={{
                      fontSize: '0.7rem',
                      padding: '0.32rem 0.9rem',
                      borderRadius: '99px',
                      letterSpacing: '0.04em',
                      background: active ? NAVY : 'transparent',
                      color:      active ? '#fff' : 'hsl(0 0% 36%)',
                      border:     active ? `1.5px solid ${NAVY}` : '1.5px solid hsl(0 0% 78%)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product grid */}
          {sorted.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 md:gap-y-14 lg:gap-x-10 lg:gap-y-16">
              {sorted.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="font-body" style={{ fontSize: '0.95rem', color: 'hsl(0 0% 50%)' }}>
                No hay productos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-5 sm:px-8" style={{ background: NAVY }}>
        <div className="container mx-auto max-w-lg text-center">
          <p
            className="font-body font-semibold uppercase tracking-[0.45em] mb-5"
            style={{ fontSize: '0.6rem', color: 'hsl(43 85% 62%)' }}
          >
            ¿Tienes dudas?
          </p>
          <h2
            className="font-display font-semibold text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)' }}
          >
            Un asesor real te ayuda a elegir
          </h2>
          <p
            className="font-body text-white/65 mb-10 mx-auto"
            style={{ fontSize: 'clamp(0.88rem, 1.8vw, 0.98rem)', maxWidth: '360px', lineHeight: 1.75 }}
          >
            Sin bots, sin esperas. Te respondemos en minutos y encontramos la prenda perfecta para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#catalogo"
              className="btn-excl btn-ghost-dark"
              style={{ padding: '0.95rem 2rem' }}
            >
              Ver más productos
            </a>
            <a
              href={STORE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-excl btn-whatsapp"
              style={{ padding: '0.95rem 2rem' }}
            >
              <MessageCircle style={{ width: '15px', height: '15px' }} />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ──────────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── NEWSLETTER ───────────────────────────────────────────────── */}
      <NewsletterSection />

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="py-16 sm:py-20 px-5 sm:px-8 pb-28 sm:pb-16 md:pb-16" style={{ background: NAVY_DARK }}>
        <div className="container mx-auto">

          <div className="flex flex-col items-center text-center gap-5 mb-10 sm:mb-12">
            <p
              className="font-display font-semibold tracking-[0.18em] text-white"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}
            >
              CARPE DIEM
            </p>
            <p
              className="font-scripture italic"
              style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.38)', maxWidth: '400px', lineHeight: 1.6 }}
            >
              "He aquí, yo estoy contigo y te guardaré por dondequiera que vayas."
            </p>
            <p className="font-body uppercase" style={{ fontSize: '0.56rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.35em' }}>
              Génesis 28:15
            </p>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '32px' }} />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="font-body uppercase tracking-[0.25em]" style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)' }}>
              © 2026 Carpe Diem · Colombia
            </p>
            <nav className="flex items-center gap-6">
              {[
                { label: 'Colección',   href: '#catalogo'    },
                { label: 'Lifestyle',   href: '#catalogo'    },
                { label: 'Testimonios', href: '#testimonios' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
                  style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.38)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

        </div>
      </footer>

      {/* FAB WhatsApp — desktop only */}
      <a
        href={STORE_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-7 right-6 z-40 w-14 h-14 rounded-full text-white items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        title="Hablar por WhatsApp"
      >
        <MessageCircle style={{ width: '24px', height: '24px' }} />
      </a>

      {/* Scroll to top — desktop only */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="hidden md:flex fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full text-white items-center justify-center shadow-md hover:opacity-90 transition-opacity"
        style={{ background: 'hsl(215 32% 22%)' }}
        title="Volver arriba"
      >
        <ArrowUp style={{ width: '16px', height: '16px' }} />
      </button>

      {/* Mobile bottom nav */}
      <MobileNav />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelect={setSelectedProduct}
      />
    </div>
  );
};

export default Index;
