import { Home, Shirt, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { STORE_WHATSAPP } from '@/config';

const NAVY = 'hsl(215 32% 13%)';
const GOLD = 'hsl(43 85% 50%)';

const MobileNav = () => {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-safe"
      style={{
        background: '#fff',
        borderTop: '1px solid hsl(0 0% 91%)',
      }}
    >
      <div className="flex items-stretch h-16">

        {/* Inicio */}
        <a
          href="/"
          className="flex flex-col items-center justify-center gap-1 flex-1 transition-opacity hover:opacity-60"
          style={{ color: NAVY }}
        >
          <Home style={{ width: '20px', height: '20px' }} />
          <span className="font-body font-medium uppercase" style={{ fontSize: '0.52rem', letterSpacing: '0.1em' }}>
            Inicio
          </span>
        </a>

        {/* Tienda */}
        <a
          href="#catalogo"
          className="flex flex-col items-center justify-center gap-1 flex-1 transition-opacity hover:opacity-60"
          style={{ color: NAVY }}
        >
          <Shirt style={{ width: '20px', height: '20px' }} />
          <span className="font-body font-medium uppercase" style={{ fontSize: '0.52rem', letterSpacing: '0.1em' }}>
            Tienda
          </span>
        </a>

        {/* Carrito */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center gap-1 flex-1 relative transition-opacity hover:opacity-60"
          style={{ color: NAVY }}
        >
          <div className="relative">
            <ShoppingBag style={{ width: '20px', height: '20px' }} />
            {itemCount > 0 && (
              <span
                className="absolute -top-1.5 -right-2 flex items-center justify-center font-body font-bold text-white"
                style={{
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  background: GOLD,
                  fontSize: '0.5rem',
                  lineHeight: 1,
                }}
              >
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </div>
          <span className="font-body font-medium uppercase" style={{ fontSize: '0.52rem', letterSpacing: '0.1em' }}>
            Carrito
          </span>
        </button>

        {/* Contacto */}
        <a
          href={STORE_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 flex-1 transition-opacity hover:opacity-60"
          style={{ color: NAVY }}
        >
          <MessageCircle style={{ width: '20px', height: '20px' }} />
          <span className="font-body font-medium uppercase" style={{ fontSize: '0.52rem', letterSpacing: '0.1em' }}>
            Contacto
          </span>
        </a>

      </div>
    </nav>
  );
};

export default MobileNav;
