import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, total, itemCount } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-monastery animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-xl font-semibold">Tu Bolsa ({itemCount})</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-body">Tu bolsa está vacía</p>
              <p className="text-sm text-muted-foreground font-body mt-1">Agrega productos para comenzar</p>
            </div>
          ) : (
            items.map((item, i) => (
              <div key={`${item.product.id}-${item.size}-${item.color}-${i}`} className="flex gap-4">
                <div className="w-20 h-24 bg-secondary shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm font-medium truncate">{item.product.name}</h3>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">
                    {item.size} · {item.color}
                  </p>
                  <p className="text-sm font-body mt-1">{formatPrice(item.product.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                      className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm font-body w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                      className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id, item.size, item.color)}
                      className="ml-auto p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-display text-lg">Total</span>
              <span className="font-display text-lg font-semibold">{formatPrice(total)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-3.5 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-body font-medium hover:opacity-90 transition-opacity"
            >
              Ir al Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
