import { useState, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag, Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product, formatPrice, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelect?: (product: Product) => void;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map(star => (
      <Star
        key={star}
        className={`h-[14px] w-[14px] ${
          star <= Math.round(rating)
            ? 'fill-amber-400 text-amber-400'
            : 'fill-stone-200 text-stone-200'
        }`}
      />
    ))}
  </div>
);

const NAVY = 'hsl(215 32% 13%)';
const GOLD = 'hsl(43 85% 50%)';

const ProductModal = ({ product, onClose, onSelect }: ProductModalProps) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
    setActiveImg(0);
  }, [product?.id]);

  if (!product) return null;

  const images = product.images?.length ? product.images : [product.image];
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const crossSell = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const prevImg = () => setActiveImg(i => (i === 0 ? images.length - 1 : i - 1));
  const nextImg = () => setActiveImg(i => (i === images.length - 1 ? 0 : i + 1));

  const handleAdd = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Selecciona talla y color para continuar');
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }
    toast.success(`¡${product.name} agregado al carrito!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative w-full max-w-3xl overflow-y-auto animate-scale-in shadow-2xl rounded-t-[1.5rem] sm:rounded-[1.5rem]"
        style={{
          maxHeight: '95vh',
          background: '#ffffff',
        }}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 transition-colors"
          style={{ width: '32px', height: '32px' }}
        >
          <X className="h-[15px] w-[15px]" style={{ color: NAVY }} />
        </button>

        <div className="grid md:grid-cols-2">

          {/* ── Galería ────────────────────────────────────────── */}
          <div
            className="flex flex-col bg-stone-100 group/gallery rounded-t-[1.5rem] md:rounded-t-none md:rounded-l-[1.5rem] overflow-hidden"
          >
            {/* Imagen principal */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                key={activeImg}
                src={images[activeImg]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                style={{ animationDuration: '0.28s' }}
              />

              {/* Badge descuento */}
              {discount > 0 && (
                <span
                  className="absolute top-4 left-4 font-body font-bold z-10"
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '99px',
                    background: '#dc2626',
                    color: '#fff',
                  }}
                >
                  -{discount}% OFF
                </span>
              )}

              {/* Flechas navegación */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImg(); }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-200 opacity-0 group-hover/gallery:opacity-100 hover:scale-105 active:scale-95"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.92)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.14)',
                    }}
                  >
                    <ChevronLeft style={{ width: '15px', height: '15px', color: NAVY }} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImg(); }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-200 opacity-0 group-hover/gallery:opacity-100 hover:scale-105 active:scale-95"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.92)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.14)',
                    }}
                  >
                    <ChevronRight style={{ width: '15px', height: '15px', color: NAVY }} />
                  </button>
                </>
              )}

              {/* Indicadores dot (móvil) */}
              {images.length > 1 && (
                <div
                  className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-3 md:hidden"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.28), transparent)', paddingTop: '20px' }}
                >
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      style={{
                        width: i === activeImg ? '16px' : '5px',
                        height: '5px',
                        borderRadius: '99px',
                        background: i === activeImg ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.45)',
                        transition: 'width 0.25s ease',
                        border: 'none',
                        padding: 0,
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Tira de miniaturas (desktop) */}
            {images.length > 1 && (
              <div
                className="hidden md:flex gap-1.5 p-2"
                style={{ background: 'hsl(0 0% 97%)', borderTop: '1px solid hsl(0 0% 91%)' }}
              >
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="shrink-0 overflow-hidden transition-all duration-200 hover:opacity-80"
                    style={{
                      width: '54px',
                      aspectRatio: '3/4',
                      borderRadius: '4px',
                      border: `2px solid ${i === activeImg ? NAVY : 'transparent'}`,
                      opacity: i === activeImg ? 1 : 0.48,
                    }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Panel derecho ───────────────────────────────────── */}
          <div className="p-5 sm:p-7 md:p-9 flex flex-col gap-5 overflow-y-auto">

            {/* Categoría + badge */}
            <div className="flex items-center justify-between">
              <span
                className="font-body font-semibold uppercase tracking-[0.22em]"
                style={{ fontSize: '0.62rem', color: 'hsl(215 10% 52%)' }}
              >
                {product.category}
              </span>
              {product.badge && (
                <span
                  className="font-body font-semibold uppercase tracking-wide"
                  style={{ fontSize: '0.62rem', color: GOLD }}
                >
                  ✦ {product.badge}
                </span>
              )}
            </div>

            {/* Nombre */}
            <div style={{ marginTop: '-8px' }}>
              <h2
                className="font-display font-semibold leading-tight"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: NAVY }}
              >
                {product.name}
              </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} />
              <span
                className="font-body font-medium"
                style={{ fontSize: '0.78rem', color: NAVY }}
              >
                {product.rating.toFixed(1)}
              </span>
              <span
                className="font-body"
                style={{ fontSize: '0.78rem', color: 'hsl(215 10% 52%)' }}
              >
                · {product.reviewCount} reseñas
              </span>
            </div>

            {/* Precio */}
            <div className="flex items-baseline gap-3 flex-wrap">
              <p
                className="font-body font-bold"
                style={{ fontSize: '1.6rem', color: NAVY, lineHeight: 1 }}
              >
                {formatPrice(product.price)}
              </p>
              {product.originalPrice && (
                <>
                  <p
                    className="font-body"
                    style={{ fontSize: '1rem', color: 'hsl(0 0% 58%)', textDecoration: 'line-through' }}
                  >
                    {formatPrice(product.originalPrice)}
                  </p>
                  <span
                    className="font-body font-semibold"
                    style={{ fontSize: '0.72rem', color: '#dc2626', background: '#fef2f2', padding: '3px 8px', borderRadius: '4px' }}
                  >
                    Ahorras {formatPrice(product.originalPrice - product.price)}
                  </span>
                </>
              )}
            </div>

            {/* Stock urgency */}
            {product.stock <= 8 && (
              <div
                style={{
                  background: product.stock <= 3 ? '#fff5f5' : 'hsl(38 90% 97%)',
                  border: `1px solid ${product.stock <= 3 ? '#fecaca' : 'hsl(38 80% 82%)'}`,
                  borderRadius: '0.6rem',
                  padding: '0.65rem 0.9rem',
                }}
              >
                <p
                  className="font-body font-medium"
                  style={{ fontSize: '0.75rem', color: product.stock <= 3 ? '#dc2626' : 'hsl(33 90% 38%)' }}
                >
                  {product.stock <= 3
                    ? `⚠ ¡Solo quedan ${product.stock} unidades! Pide ya.`
                    : `Solo quedan ${product.stock} unidades disponibles`}
                </p>
                <div style={{ height: '3px', background: 'hsl(0 0% 88%)', borderRadius: '2px', marginTop: '7px' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${Math.min(100, (product.stock / 20) * 100)}%`,
                      background: product.stock <= 3 ? '#dc2626' : 'hsl(33 90% 50%)',
                      borderRadius: '2px',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>
            )}

            {/* Descripción */}
            <p
              className="font-body leading-relaxed"
              style={{ fontSize: '0.82rem', color: 'hsl(215 15% 35%)', lineHeight: 1.7 }}
            >
              {product.description}
            </p>

            <div style={{ height: '1px', background: 'hsl(0 0% 90%)' }} />

            {/* ── Talla ────────────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <p
                  className="font-body font-semibold uppercase tracking-[0.18em]"
                  style={{ fontSize: '0.65rem', color: NAVY }}
                >
                  Talla
                </p>
                {selectedSize && (
                  <span className="font-body" style={{ fontSize: '0.65rem', color: 'hsl(215 10% 52%)' }}>
                    — {selectedSize}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => {
                  const active = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="font-body font-medium transition-all duration-150 active:scale-95"
                      style={{
                        minWidth: '44px',
                        height: '40px',
                        padding: '0 12px',
                        borderRadius: '0.6rem',
                        fontSize: '0.82rem',
                        border: active ? `2px solid ${NAVY}` : '1.5px solid hsl(0 0% 82%)',
                        background: active ? NAVY : '#fff',
                        color: active ? '#fff' : NAVY,
                        fontWeight: active ? 600 : 400,
                      }}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Color ─────────────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <p
                  className="font-body font-semibold uppercase tracking-[0.18em]"
                  style={{ fontSize: '0.65rem', color: NAVY }}
                >
                  Color
                </p>
                {selectedColor && (
                  <span className="font-body" style={{ fontSize: '0.65rem', color: 'hsl(215 10% 52%)' }}>
                    — {selectedColor}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => {
                  const active = selectedColor === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      className="transition-all duration-150"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: color.hex,
                        border: active ? `3px solid ${NAVY}` : '2px solid hsl(0 0% 80%)',
                        outline: active ? `2px solid white` : 'none',
                        outlineOffset: active ? '-5px' : '0',
                        transform: active ? 'scale(1.12)' : 'scale(1)',
                        boxShadow: active ? '0 2px 8px rgba(0,0,0,0.18)' : '0 1px 3px rgba(0,0,0,0.1)',
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* ── Cantidad ──────────────────────────────────────── */}
            <div>
              <p
                className="font-body font-semibold uppercase tracking-[0.18em] mb-3"
                style={{ fontSize: '0.65rem', color: NAVY }}
              >
                Cantidad
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center"
                  style={{ border: '1.5px solid hsl(0 0% 82%)', borderRadius: '0.6rem', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="flex items-center justify-center transition-colors hover:bg-stone-100"
                    style={{ width: '38px', height: '38px', color: NAVY }}
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span
                    className="font-body font-semibold"
                    style={{ width: '36px', textAlign: 'center', fontSize: '0.95rem', color: NAVY }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                    className="flex items-center justify-center transition-colors hover:bg-stone-100"
                    style={{ width: '38px', height: '38px', color: NAVY }}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Subtotal */}
            {quantity > 1 && (
              <div
                style={{
                  background: 'hsl(43 85% 50% / 0.07)',
                  border: '1px solid hsl(43 85% 50% / 0.2)',
                  borderRadius: '0.75rem',
                  padding: '0.7rem 1rem',
                }}
              >
                <p className="font-body" style={{ fontSize: '0.8rem', color: NAVY }}>
                  Subtotal:{' '}
                  <strong style={{ color: GOLD }}>{formatPrice(product.price * quantity)}</strong>
                </p>
              </div>
            )}

            {/* Botón agregar */}
            <button
              onClick={handleAdd}
              className="btn-excl btn-navy-fill w-full"
              style={{ height: '52px', padding: '0 1.5rem' }}
            >
              <ShoppingBag className="h-[16px] w-[16px]" />
              Agregar al Carrito
            </button>

            {/* Trust */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {['Envío a todo Colombia', 'Pago seguro', 'Devolución 30 días'].map(t => (
                <span
                  key={t}
                  className="font-body flex items-center gap-1.5"
                  style={{ fontSize: '0.7rem', color: 'hsl(215 15% 38%)' }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: GOLD }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sticky CTA móvil ─────────────────────────────────────── */}
        <div
          className="sticky bottom-0 md:hidden"
          style={{
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid hsl(0 0% 91%)',
            padding: '12px 20px',
            paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
          }}
        >
          <button
            onClick={handleAdd}
            className="btn-excl btn-navy-fill w-full"
            style={{ height: '48px', padding: '0 1.2rem', fontSize: '0.68rem' }}
          >
            <ShoppingBag style={{ width: '15px', height: '15px' }} />
            {quantity > 1
              ? `Agregar ×${quantity} — ${formatPrice(product.price * quantity)}`
              : `Agregar al Carrito — ${formatPrice(product.price)}`}
          </button>
        </div>

        {/* ── Cross-sell ─────────────────────────────────────────── */}
        {crossSell.length >= 2 && (
          <div style={{ borderTop: '1px solid hsl(0 0% 92%)', padding: '1.5rem 2rem 2rem' }}>
            <p
              className="font-body font-semibold uppercase tracking-[0.22em] mb-4"
              style={{ fontSize: '0.6rem', color: 'hsl(0 0% 46%)' }}
            >
              También te puede gustar
            </p>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
              {crossSell.map(p => (
                <button
                  key={p.id}
                  onClick={() => onSelect ? onSelect(p) : undefined}
                  className="shrink-0 text-left group/cs focus:outline-none"
                  style={{ width: '100px' }}
                >
                  <div
                    className="overflow-hidden bg-stone-100 mb-2"
                    style={{ aspectRatio: '3/4', borderRadius: '6px' }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/cs:scale-[1.06]"
                    />
                  </div>
                  <p
                    className="font-display font-medium leading-snug line-clamp-2"
                    style={{ fontSize: '0.78rem', color: NAVY }}
                  >
                    {p.name}
                  </p>
                  <p
                    className="font-body font-semibold mt-0.5"
                    style={{ fontSize: '0.72rem', color: NAVY, opacity: 0.65 }}
                  >
                    {formatPrice(p.price)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
