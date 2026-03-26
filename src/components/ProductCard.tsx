import { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { Product, formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index: number;
}

const NAVY = 'hsl(215 32% 13%)';
const GOLD = 'hsl(43 85% 50%)';

const FALLBACK = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop&q=80';

const badgeColors: Record<string, { bg: string; color: string }> = {
  'Más vendido':      { bg: GOLD, color: '#fff' },
  'Nuevo':            { bg: NAVY, color: '#fff' },
  'Edición limitada': { bg: '#9F1239', color: '#fff' },
};

const ProductCard = ({ product, onSelect, index }: ProductCardProps) => {
  const [wishlisted, setWishlisted] = useState(false);
  const [imgError, setImgError] = useState(false);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const visibleColors = product.colors.slice(0, 4);

  return (
    <div
      className="group text-left w-full animate-fade-in"
      style={{ animationDelay: `${index * 0.045}s` }}
    >
      {/* ── Image ─────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden bg-stone-100 cursor-pointer"
        style={{ aspectRatio: '3/4' }}
        onClick={() => onSelect(product)}
      >
        <img
          src={imgError ? FALLBACK : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          loading="lazy"
          onError={() => setImgError(true)}
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

        {/* Wishlist button — bottom right */}
        <button
          onClick={(e) => { e.stopPropagation(); setWishlisted(w => !w); }}
          className="absolute bottom-3 right-3 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
          style={{ width: '32px', height: '32px' }}
          aria-label="Guardar en favoritos"
        >
          <Heart
            className="h-[14px] w-[14px] transition-colors duration-200"
            style={{ color: wishlisted ? '#dc2626' : NAVY, fill: wishlisted ? '#dc2626' : 'transparent' }}
          />
        </button>

        {/* Hover CTA strip */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ padding: '0.75rem 2.5rem 0.75rem 0.75rem', background: 'linear-gradient(to top, rgba(0,0,0,0.52), transparent)' }}
        >
          <span
            className="font-body font-semibold uppercase text-white"
            style={{ fontSize: '0.58rem', letterSpacing: '0.28em' }}
          >
            Ver detalles
          </span>
        </div>
      </div>

      {/* ── Product info ──────────────────────────────────────── */}
      <div className="pt-3 pb-1 space-y-1.5" onClick={() => onSelect(product)} style={{ cursor: 'pointer' }}>
        <p
          className="font-body uppercase tracking-widest"
          style={{ fontSize: '0.56rem', color: 'hsl(0 0% 56%)' }}
        >
          {product.category}
        </p>

        <h3
          className="font-display font-medium leading-snug line-clamp-2"
          style={{ fontSize: 'clamp(0.92rem, 3.5vw, 1.18rem)', color: NAVY }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            {[1,2,3,4,5].map(s => (
              <Star
                key={s}
                className="h-[9px] w-[9px]"
                style={{
                  fill: s <= Math.round(product.rating) ? '#f59e0b' : '#e5e7eb',
                  color: s <= Math.round(product.rating) ? '#f59e0b' : '#e5e7eb',
                }}
              />
            ))}
          </div>
          <span className="font-body" style={{ fontSize: '0.64rem', color: 'hsl(0 0% 52%)' }}>
            {product.rating.toFixed(1)}
            <span className="hidden sm:inline"> ({product.reviewCount})</span>
          </span>
        </div>

        {/* Price row */}
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <p className="font-body font-bold" style={{ fontSize: 'clamp(0.82rem, 2.8vw, 0.95rem)', color: NAVY }}>
            {formatPrice(product.price)}
          </p>
          {product.originalPrice && (
            <p
              className="font-body hidden sm:block"
              style={{ fontSize: '0.72rem', color: 'hsl(0 0% 58%)', textDecoration: 'line-through' }}
            >
              {formatPrice(product.originalPrice)}
            </p>
          )}
        </div>

        {/* Color swatches */}
        <div className="flex items-center gap-1.5 pt-0.5">
          {visibleColors.map(color => (
            <span
              key={color.name}
              title={color.name}
              className="rounded-full border border-stone-200 flex-shrink-0"
              style={{ width: '11px', height: '11px', background: color.hex, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)' }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="font-body" style={{ fontSize: '0.6rem', color: 'hsl(0 0% 56%)' }}>
              +{product.colors.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
