import { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const NAVY = 'hsl(215 32% 13%)';
const GOLD = 'hsl(43 85% 50%)';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      toast.error('Ingresa un correo válido');
      return;
    }
    setSubmitted(true);
    setEmail('');
    toast.success('¡Listo! Te notificaremos los próximos lanzamientos 🎉');
  };

  return (
    <section
      className="py-16 sm:py-20 px-5 sm:px-8"
      style={{ background: 'hsl(43 60% 96%)', borderTop: '1px solid hsl(43 40% 89%)', borderBottom: '1px solid hsl(43 40% 89%)' }}
    >
      <div className="container mx-auto max-w-xl text-center">

        {/* Eyebrow */}
        <p
          className="font-body font-semibold uppercase tracking-[0.45em] mb-4"
          style={{ fontSize: '0.6rem', color: GOLD }}
        >
          Exclusivo para ti
        </p>

        {/* Headline */}
        <h2
          className="font-display font-semibold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: NAVY }}
        >
          Sé el primero en conocer
          <br />
          <em className="not-italic" style={{ color: GOLD }}>nuevos lanzamientos</em>
        </h2>

        {/* Divider */}
        <div style={{ width: '36px', height: '1.5px', background: GOLD, margin: '0 auto 20px' }} />

        {/* Subtítulo */}
        <p
          className="font-body mx-auto mb-8"
          style={{ fontSize: '0.88rem', color: 'hsl(215 15% 42%)', lineHeight: 1.7, maxWidth: '360px' }}
        >
          Preventas, descuentos exclusivos y novedades de colección — solo para suscriptores.
        </p>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
              required
              className="flex-1 font-body outline-none transition-all"
              style={{
                padding: '0.85rem 1.1rem',
                borderRadius: '0.4rem',
                border: '1.5px solid hsl(43 40% 80%)',
                background: '#fff',
                fontSize: '0.85rem',
                color: NAVY,
              }}
              onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
              onBlur={e => (e.currentTarget.style.borderColor = 'hsl(43 40% 80%)')}
            />
            <button
              type="submit"
              className="btn-excl btn-navy shrink-0 w-full sm:w-auto"
              style={{ padding: '0.85rem 1.5rem' }}
            >
              <Send style={{ width: '14px', height: '14px' }} />
              Suscribirme
            </button>
          </form>
        ) : (
          <div
            className="font-body font-medium text-center animate-fade-in"
            style={{
              padding: '0.85rem 1.5rem',
              borderRadius: '0.4rem',
              background: 'hsl(43 85% 50% / 0.12)',
              border: '1px solid hsl(43 85% 50% / 0.3)',
              color: NAVY,
              fontSize: '0.85rem',
            }}
          >
            ✓ ¡Perfecto! Ya estás en la lista. Pronto tendrás novedades exclusivas.
          </div>
        )}

        <p
          className="font-body mt-4"
          style={{ fontSize: '0.68rem', color: 'hsl(215 10% 58%)', lineHeight: 1.5 }}
        >
          Sin spam. Solo novedades que valen la pena. Cancela cuando quieras.
        </p>

      </div>
    </section>
  );
};

export default NewsletterSection;
