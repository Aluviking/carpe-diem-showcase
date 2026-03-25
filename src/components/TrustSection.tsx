import { Truck, RefreshCw, ShieldCheck, MessageCircle } from 'lucide-react';
import { STORE_WHATSAPP } from '@/config';

const NAVY = 'hsl(215 32% 13%)';
const GOLD = 'hsl(43 85% 50%)';

const items = [
  { icon: Truck,         title: 'Envíos a todo Colombia', desc: 'Coordinadora, Servientrega y TCC. Tracking incluido.' },
  { icon: RefreshCw,     title: 'Cambios en 30 días',     desc: 'Sin preguntas. Talla incorrecta, te la cambiamos.' },
  { icon: ShieldCheck,   title: 'Compra segura',          desc: 'Confirmamos tu pedido antes de recibir cualquier pago.' },
  { icon: MessageCircle, title: 'Asesoría personalizada', desc: 'Un asesor real responde en minutos, sin bots.' },
];

const TrustSection = () => {
  return (
    <section className="py-12 sm:py-14 px-5 sm:px-8 bg-white" style={{ borderBottom: '1px solid hsl(0 0% 93%)' }}>
      <div className="container mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: '42px',
                  height: '42px',
                  background: `hsl(43 85% 50% / 0.09)`,
                  color: GOLD,
                }}
              >
                <Icon style={{ width: '18px', height: '18px' }} />
              </div>
              <div>
                <p className="font-body font-semibold leading-tight" style={{ fontSize: '0.85rem', color: NAVY, marginBottom: '4px' }}>
                  {title}
                </p>
                <p className="font-body leading-snug" style={{ fontSize: '0.76rem', color: 'hsl(215 8% 50%)' }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href={STORE_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-excl btn-navy-fill mt-10"
          style={{ padding: '0.95rem 1.5rem', width: '100%' }}
        >
          <MessageCircle style={{ width: '15px', height: '15px', flexShrink: 0 }} />
          ¿Dudas? Escríbenos — te respondemos en minutos
        </a>
      </div>
    </section>
  );
};

export default TrustSection;
