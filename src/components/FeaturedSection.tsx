import { products, type Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface FeaturedSectionProps {
  onSelect: (product: Product) => void;
}

const NAVY = 'hsl(215 32% 13%)';
const GOLD = 'hsl(43 85% 50%)';

const featured = products.filter(p => p.featured).slice(0, 4);

const FeaturedSection = ({ onSelect }: FeaturedSectionProps) => {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: 'hsl(40 20% 97%)' }}>
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-12">
          <div>
            <p
              className="font-body font-semibold uppercase tracking-[0.45em] mb-3"
              style={{ fontSize: '0.6rem', color: GOLD }}
            >
              Lo más amado
            </p>
            <h2
              className="font-display font-semibold"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', color: NAVY, lineHeight: 1.1 }}
            >
              Más Vendidos
            </h2>
            <div style={{ width: '36px', height: '1.5px', background: GOLD, marginTop: '14px' }} />
          </div>
          <a
            href="#catalogo"
            className="font-body font-medium uppercase transition-opacity hover:opacity-60 self-start sm:self-auto"
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: NAVY,
              paddingBottom: '2px',
              borderBottom: '1px solid hsl(215 32% 13% / 0.3)',
              whiteSpace: 'nowrap',
            }}
          >
            Ver colección completa →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          {featured.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelect}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;
