import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { PAYMENT_LINK, STORE_NAME } from '@/config';

const NAVY = 'hsl(215 32% 13%)';
const GOLD = 'hsl(43 85% 50%)';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, total, itemCount } = useCart();

  if (!isCartOpen) return null;

  const handlePay = () => {
    const lines = items.map(i =>
      `• ${i.product.name} (${i.size} / ${i.color}) ×${i.quantity} — ${formatPrice(i.product.price * i.quantity)}`
    );
    const msg = `Hola ${STORE_NAME} 👋\n\nQuiero realizar este pedido:\n\n${lines.join('\n')}\n\n*Total: ${formatPrice(total)}*\n\n¿Me pueden confirmar disponibilidad? 🙏`;
    window.open(`${PAYMENT_LINK}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl animate-slide-in-right flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid hsl(0 0% 92%)' }}>
          <div>
            <p className="font-body font-semibold uppercase tracking-[0.2em]" style={{ fontSize: '0.62rem', color: 'hsl(0 0% 50%)' }}>
              Tu carrito
            </p>
            <p className="font-display font-medium" style={{ fontSize: '1.4rem', color: NAVY, lineHeight: 1.1, marginTop: '3px' }}>
              {itemCount === 0 ? 'Vacío' : `${itemCount} ${itemCount === 1 ? 'artículo' : 'artículos'}`}
            </p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="flex items-center justify-center rounded-full transition-colors hover:bg-stone-100"
            style={{ width: '36px', height: '36px' }}
          >
            <X style={{ width: '18px', height: '18px', color: NAVY }} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8 pb-16">
              <ShoppingBag style={{ width: '44px', height: '44px', color: 'hsl(0 0% 82%)', marginBottom: '16px' }} />
              <p className="font-display font-medium" style={{ fontSize: '1.2rem', color: NAVY, marginBottom: '6px' }}>
                Tu carrito está vacío
              </p>
              <p className="font-body text-center" style={{ fontSize: '0.82rem', color: 'hsl(0 0% 54%)', lineHeight: 1.6 }}>
                Agrega productos y te ayudamos a elegir.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-excl btn-navy mt-8"
                style={{ padding: '0.85rem 2rem' }}
              >
                Ver Colección
              </button>
            </div>
          ) : (
            <div className="px-5 py-4 space-y-0">
              {items.map((item, i) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}-${i}`}
                  className="flex gap-4 py-4"
                  style={{ borderBottom: '1px solid hsl(0 0% 93%)' }}
                >
                  {/* Image */}
                  <div className="w-[72px] h-[90px] overflow-hidden bg-stone-100 shrink-0" style={{ borderRadius: '4px' }}>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-medium truncate" style={{ fontSize: '0.98rem', color: NAVY, lineHeight: 1.2 }}>
                      {item.product.name}
                    </h3>
                    <p className="font-body mt-1" style={{ fontSize: '0.7rem', color: 'hsl(0 0% 54%)' }}>
                      {item.size} · {item.color}
                    </p>
                    <p className="font-body font-semibold mt-1.5" style={{ fontSize: '0.86rem', color: NAVY }}>
                      {formatPrice(item.product.price * item.quantity)}
                    </p>

                    {/* Quantity + delete */}
                    <div className="flex items-center gap-2 mt-3">
                      <div
                        className="flex items-center"
                        style={{ border: '1px solid hsl(0 0% 86%)', borderRadius: '3px', overflow: 'hidden' }}
                      >
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                          className="flex items-center justify-center transition-colors hover:bg-stone-100"
                          style={{ width: '30px', height: '30px', color: NAVY }}
                        >
                          <Minus style={{ width: '11px', height: '11px' }} />
                        </button>
                        <span className="font-body font-semibold" style={{ width: '28px', textAlign: 'center', fontSize: '0.82rem', color: NAVY }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                          className="flex items-center justify-center transition-colors hover:bg-stone-100"
                          style={{ width: '30px', height: '30px', color: NAVY }}
                        >
                          <Plus style={{ width: '11px', height: '11px' }} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size, item.color)}
                        className="flex items-center justify-center ml-auto rounded transition-colors hover:bg-rose-50"
                        style={{ width: '30px', height: '30px', color: 'hsl(0 0% 62%)' }}
                      >
                        <Trash2 style={{ width: '13px', height: '13px' }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-5 space-y-4" style={{ borderTop: '1px solid hsl(0 0% 92%)' }}>
            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-body" style={{ fontSize: '0.78rem', color: 'hsl(0 0% 52%)' }}>
                  Subtotal ({itemCount} {itemCount === 1 ? 'art.' : 'arts.'})
                </span>
                <span className="font-body font-medium" style={{ fontSize: '0.86rem', color: NAVY }}>
                  {formatPrice(total)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body" style={{ fontSize: '0.76rem', color: 'hsl(0 0% 58%)' }}>Envío</span>
                <span className="font-body font-medium" style={{ fontSize: '0.76rem', color: '#16a34a' }}>Se confirma al pedir</span>
              </div>
              <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid hsl(0 0% 92%)' }}>
                <span className="font-display font-semibold" style={{ fontSize: '1rem', color: NAVY }}>Total</span>
                <span className="font-display font-bold" style={{ fontSize: '1.3rem', color: NAVY }}>{formatPrice(total)}</span>
              </div>
            </div>

            {/* Pay button */}
            <button
              onClick={handlePay}
              className="btn-excl btn-whatsapp w-full"
              style={{ padding: '1rem' }}
            >
              <MessageCircle style={{ width: '17px', height: '17px' }} />
              Pagar por WhatsApp
            </button>

            <p className="text-center font-body" style={{ fontSize: '0.62rem', color: 'hsl(0 0% 58%)', lineHeight: 1.5 }}>
              Confirmamos tu pedido y forma de pago 🔒
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
