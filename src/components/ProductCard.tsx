import { Product, formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index: number;
}

const NAVY = 'hsl(215 32% 13%)';
const GOLD = 'hsl(43 85% 50%)';

const badgeColors: Record<string, { bg: string; color: string }> = {
  'Más vendido':      { bg: GOLD, color: '#fff' },
  'Nuevo':            { bg: NAVY, color: '#fff' },
  'Edición limitada': { bg: '#9F1239', color: '#fff' },
};

const ProductCard = ({ product, onSelect, index }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <button
      onClick={() => onSelect(product)}
      className="group text-left w-full animate-fade-in focus:outline-none"
      style={{ animationDelay: `${index * 0.045}s` }}
    >
      {/* ── Image — full bleed ───────────────────────────────── */}
      <div
        className="relative overflow-hidden bg-stone-100"
        style={{ aspectRatio: '3/4' }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          loading="lazy"
        />

        {/* Hover veil */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'rgba(0,0,0,0.07)' }}
        />

        {/* Badge */}
        {product.badge && badgeColors[product.badge] && (
          <span
            className="absolute top-3 left-3 font-body font-semibold uppercase"
            style={{
              fontSize: '0.56rem',
              letterSpacing: '0.1em',
              padding: '0.2rem 0.65rem',
              borderRadius: '99px',
              background: badgeColors[product.badge].bg,
              color: badgeColors[product.badge].color,
            }}
          >
            {product.badge}
          </span>
        )}

        {/* Discount badge — top right */}
        {discount > 0 && (
          <span
            className="absolute top-3 right-3 font-body font-bold"
            style={{
              fontSize: '0.6rem',
              padding: '0.22rem 0.6rem',
              borderRadius: '99px',
              background: '#dc2626',
              color: '#fff',
            }}
          >
            -{discount}%
          </span>
        )}

        {/* Low stock — only when no discount badge */}
        {product.stock <= 5 && discount === 0 && (
          <span
            className="absolute top-3 right-3 font-body font-semibold uppercase"
            style={{
              fontSize: '0.56rem',
              letterSpacing: '0.08em',
              padding: '0.2rem 0.65rem',
              borderRadius: '99px',
              background: 'rgba(0,0,0,0.52)',
              color: '#fff',
            }}
          >
            ¡Solo {product.stock}!
          </span>
        )}

        {/* Hover CTA strip */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ padding: '0.8rem', background: 'linear-gradient(to top, rgba(0,0,0,0.48), transparent)' }}
        >
          <span
            className="font-body font-semibold uppercase text-white"
            style={{ fontSize: '0.58rem', letterSpacing: '0.28em' }}
          >
            Ver detalles
          </span>
        </div>
      </div>

      {/* ── Product info — editorial minimal ────────────────── */}
      <div className="pt-4 pb-1 space-y-1.5">
        <p
          className="font-body uppercase tracking-widest"
          style={{ fontSize: '0.58rem', color: 'hsl(0 0% 56%)' }}
        >
          {product.category}
        </p>
        <h3
          className="font-display font-medium leading-snug"
          style={{ fontSize: 'clamp(1.08rem, 2.4vw, 1.25rem)', color: NAVY }}
        >
          {product.name}
        </h3>

        {/* Price row */}
        <div className="flex items-baseline gap-2 flex-wrap">
          <p
            className="font-body font-bold"
            style={{ fontSize: '0.92rem', color: NAVY }}
          >
            {formatPrice(product.price)}
          </p>
          {product.originalPrice && (
            <p
              className="font-body"
              style={{ fontSize: '0.76rem', color: 'hsl(0 0% 58%)', textDecoration: 'line-through' }}
            >
              {formatPrice(product.originalPrice)}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
