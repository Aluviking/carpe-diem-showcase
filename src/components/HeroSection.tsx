import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '100vh', minHeight: '640px' }}
    >
      {/* Background */}
      <img
        src={heroBg}
        alt="Carpe Diem"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 18%' }}
      />

      {/* Overlays — cinematic */}
      <div className="absolute inset-0" style={{ background: 'hsl(215 30% 5% / 0.48)' }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(112deg, hsl(215 30% 5% / 0.92) 0%, hsl(215 30% 5% / 0.58) 46%, transparent 78%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '260px', background: 'linear-gradient(to top, hsl(215 30% 5% / 0.65), transparent)' }}
      />

      {/* Gold vertical accent */}
      <div
        className="absolute left-0 sm:left-8 lg:left-16"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          width: '2px',
          height: '180px',
          background: 'linear-gradient(to bottom, transparent, hsl(43 85% 50%), transparent)',
          borderRadius: '2px',
        }}
      />

      {/* ── Content ─────────────────────────────────────────── */}
      <div
        className="relative h-full flex flex-col justify-center px-6 sm:px-14 lg:px-24"
        style={{ maxWidth: '820px' }}
      >
        {/* Eyebrow label */}
        <div
          className="flex items-center gap-3 mb-8 animate-fade-in"
          style={{ animationDelay: '0.05s' }}
        >
          <div style={{ width: '32px', height: '1px', background: 'hsl(43 85% 58%)' }} />
          <p
            className="font-body font-medium uppercase text-white/65"
            style={{ fontSize: '0.6rem', letterSpacing: '0.55em' }}
          >
            Colección 2026
          </p>
        </div>

        {/* Headline — massive, cinematic */}
        <h1
          className="font-display text-white animate-fade-in"
          style={{
            fontSize: 'clamp(5.5rem, 14vw, 12rem)',
            lineHeight: 0.86,
            letterSpacing: '-0.03em',
            fontWeight: 600,
            marginBottom: '1.8rem',
            animationDelay: '0.12s',
          }}
        >
          Carpe<br />
          <em className="not-italic" style={{ color: 'hsl(43 85% 62%)' }}>
            Diem
          </em>
        </h1>

        {/* Gold divider */}
        <div
          className="flex items-center gap-3 mb-8 animate-fade-in"
          style={{ animationDelay: '0.22s' }}
        >
          <div style={{ width: '56px', height: '1.5px', background: 'hsl(43 85% 54%)', borderRadius: '1px' }} />
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'hsl(43 85% 54%)', flexShrink: 0 }} />
        </div>

        {/* Tagline */}
        <p
          className="font-body text-white/85 animate-fade-in"
          style={{
            fontSize: 'clamp(1rem, 1.9vw, 1.18rem)',
            fontWeight: 300,
            lineHeight: 1.72,
            maxWidth: '370px',
            marginBottom: '3rem',
            animationDelay: '0.3s',
          }}
        >
          Moda premium con sello propio.<br />
          Cada prenda, una declaración.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="#catalogo"
            className="btn-excl btn-gold-fill"
            style={{ padding: '1rem 2.6rem' }}
          >
            Ver Colección
          </a>
          <a
            href="#catalogo"
            className="font-body font-medium uppercase text-white/70 hover:text-white transition-colors"
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              paddingBottom: '2px',
              borderBottom: '1px solid rgba(255,255,255,0.28)',
            }}
          >
            Explorar
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        aria-hidden="true"
      >
        <span className="font-body uppercase text-white" style={{ fontSize: '0.52rem', letterSpacing: '0.3em' }}>
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '36px',
            background: 'linear-gradient(to bottom, white, transparent)',
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
