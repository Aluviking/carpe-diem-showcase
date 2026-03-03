import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-display font-semibold tracking-wide">
            CARPE DIEM
          </h1>
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Abrir carrito"
        >
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
