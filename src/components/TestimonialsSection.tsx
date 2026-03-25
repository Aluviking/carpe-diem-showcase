import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map(s => (
      <Star
        key={s}
        className={`h-3.5 w-3.5 ${s <= rating ? 'fill-amber-400 text-amber-400' : 'fill-none text-white/15'}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: 'hsl(215 32% 13%)' }}>
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-body font-semibold uppercase tracking-[0.45em] mb-4"
            style={{ fontSize: '0.6rem', color: 'hsl(43 85% 60%)' }}
          >
            Testimonios
          </p>
          <h2
            className="font-display font-semibold text-white"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: '16px' }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <div className="mx-auto" style={{ width: '44px', height: '1.5px', background: 'hsl(43 85% 50%)' }} />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={t.id}
              className="flex flex-col gap-5 p-7 animate-fade-in"
              style={{
                animationDelay: `${i * 0.1}s`,
                background: 'hsl(215 30% 17%)',
                border: '1px solid hsl(215 28% 22%)',
                borderRadius: '4px',
              }}
            >
              <Quote style={{ width: '20px', height: '20px', color: 'hsl(43 85% 50% / 0.45)', flexShrink: 0 }} />

              <p
                className="font-body font-light flex-1 leading-relaxed"
                style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}
              >
                "{t.comment}"
              </p>

              <div style={{ height: '1px', background: 'hsl(215 28% 24%)' }} />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center font-body font-bold text-white shrink-0"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, hsl(43 85% 44%), hsl(215 55% 28%))',
                      fontSize: '0.68rem',
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-white" style={{ fontSize: '0.82rem' }}>
                      {t.name}
                    </p>
                    <p className="font-body" style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.38)' }}>
                      {t.city}
                    </p>
                  </div>
                </div>
                <Stars rating={t.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20 max-w-xs sm:max-w-sm mx-auto">
          {[
            { value: '4.8★', label: 'Calificación' },
            { value: '800+', label: 'Clientes' },
            { value: '98%',  label: 'Recomendarían' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold" style={{ fontSize: 'clamp(1.35rem, 5.5vw, 2.1rem)', color: 'hsl(43 85% 60%)', lineHeight: 1 }}>
                {stat.value}
              </p>
              <p className="font-body uppercase tracking-wider mt-1.5" style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.32)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
