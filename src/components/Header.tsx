import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAVY = 'hsl(215 32% 13%)';
const GOLD  = 'hsl(43 85% 50%)';

const Header = () => {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50">

      {/* ── Scripture bar ─────────────────────────────────────────── */}
      <div className="w-full text-center px-4 py-2.5" style={{ background: NAVY }}>

        {/* Mobile: short verse */}
        <p className="font-scripture italic text-white sm:hidden" style={{ fontSize: 'clamp(0.78rem, 2.5vw, 0.9rem)', lineHeight: 1.45 }}>
          "Yo estoy contigo y te guardaré."
          <span
            className="not-italic font-body ml-2"
            style={{ fontSize: '0.6rem', color: 'hsl(43 75% 70%)', letterSpacing: '0.24em', fontWeight: 500 }}
          >
            GÉN. 28:15
          </span>
        </p>

        {/* Tablet+: full verse */}
        <p className="font-scripture italic text-white hidden sm:block" style={{ fontSize: '1.02rem', lineHeight: 1.45 }}>
          "He aquí, yo estoy contigo y te guardaré por dondequiera que vayas."
          <span
            className="not-italic font-body ml-3"
            style={{ fontSize: '0.58rem', color: 'hsl(43 75% 70%)', letterSpacing: '0.3em', fontWeight: 500 }}
          >
            — GÉNESIS 28:15
          </span>
        </p>
      </div>

      {/* ── Navigation bar — 3 columns ──────────────────────────────── */}
      <div className="bg-white" style={{ borderBottom: '1px solid hsl(0 0% 91%)' }}>
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 items-center h-16 sm:h-[70px] lg:h-[76px]">

            {/* LEFT — nav links (tablet+) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-10">
              {[
                { label: 'Colección',   href: '#catalogo'   },
                { label: 'Lifestyle',   href: '#catalogo'   },
                { label: 'Testimonios', href: '#testimonios' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-40"
                  style={{ fontSize: '0.7rem', color: NAVY }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            {/* Mobile: empty left cell */}
            <div className="md:hidden" />

            {/* CENTER — logo */}
            <div className="flex justify-center">
              <a
                href="/"
                className="font-display font-semibold tracking-[0.14em] hover:opacity-70 transition-opacity"
                style={{ fontSize: 'clamp(1.05rem, 3.2vw, 1.5rem)', color: NAVY, lineHeight: 1 }}
              >
                CARPE DIEM
              </a>
            </div>

            {/* RIGHT — cart */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center justify-center rounded-full transition-colors hover:bg-stone-50 active:bg-stone-100"
                style={{ width: '44px', height: '44px' }}
                aria-label="Abrir carrito"
              >
                <ShoppingBag style={{ width: '20px', height: '20px', color: NAVY }} />
                {itemCount > 0 && (
                  <span
                    className="absolute top-0.5 right-0.5 flex items-center justify-center font-body font-bold text-white"
                    style={{
                      background: GOLD,
                      fontSize: '0.52rem',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      lineHeight: 1,
                    }}
                  >
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
