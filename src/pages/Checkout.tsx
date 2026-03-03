import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, total, saveOrder } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderSaved, setOrderSaved] = useState<string | null>(null);

  if (items.length === 0 && !orderSaved) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <p className="text-muted-foreground font-body mb-4">No hay productos en tu bolsa</p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm uppercase tracking-wider font-body hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Volver a la tienda
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error('Completa todos los campos');
      return;
    }
    const order = saveOrder(name, phone);
    setOrderSaved(order.id);
    toast.success(`Pedido ${order.id} guardado`);
  };

  if (orderSaved) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in max-w-md space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">Pedido registrado</p>
          <h2 className="text-4xl font-display font-semibold">{orderSaved}</h2>
          <p className="text-muted-foreground font-body">
            Tu pedido ha sido guardado. Haz clic en el botón para completar el pago.
          </p>
          <a
            href="https://nequi.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground uppercase tracking-widest text-sm font-body font-medium hover:opacity-90 transition-opacity"
          >
            Ir a Pagar <ExternalLink className="h-4 w-4" />
          </a>
          <div>
            <button
              onClick={() => navigate('/')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body underline underline-offset-4"
            >
              Volver a la tienda
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm uppercase tracking-wider font-body text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Volver
        </button>

        <h1 className="text-4xl font-display font-semibold mb-8">Checkout</h1>

        {/* Resumen */}
        <div className="border border-border p-6 mb-8 space-y-4">
          <h3 className="font-display text-lg font-medium">Resumen del pedido</h3>
          {items.map((item, i) => (
            <div key={i} className="flex justify-between items-center text-sm font-body">
              <span>
                {item.product.name} × {item.quantity}
                <span className="text-muted-foreground ml-2">({item.size}, {item.color})</span>
              </span>
              <span>{formatPrice(item.product.price * item.quantity)}</span>
            </div>
          ))}
          <div className="border-t border-border pt-3 flex justify-between">
            <span className="font-display font-semibold">Total</span>
            <span className="font-display font-semibold text-lg">{formatPrice(total)}</span>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs uppercase tracking-wider font-body font-medium block mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3 border border-border bg-transparent font-body text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider font-body font-medium block mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-border bg-transparent font-body text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="300 123 4567"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-body font-medium hover:opacity-90 transition-opacity"
          >
            Confirmar Pedido
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
