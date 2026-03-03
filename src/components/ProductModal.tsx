import { useState } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Product, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Selecciona talla y color');
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }
    toast.success(`${product.name} agregado a tu bolsa`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-background w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-in shadow-monastery">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="aspect-[3/4] bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 flex flex-col justify-center space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1">
                {product.category}
              </p>
              <h2 className="text-3xl font-display font-semibold">{product.name}</h2>
              <p className="text-xl font-body mt-2 text-gold-DEFAULT">{formatPrice(product.price)}</p>
            </div>

            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              {product.description}
            </p>

            {/* Tallas */}
            <div>
              <p className="text-xs uppercase tracking-wider font-body mb-2 font-medium">Talla</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[44px] h-10 px-3 border text-sm font-body transition-all ${
                      selectedSize === size
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-foreground/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colores */}
            <div>
              <p className="text-xs uppercase tracking-wider font-body mb-2 font-medium">Color</p>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-accent scale-110'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
              {selectedColor && (
                <p className="text-xs text-muted-foreground mt-1 font-body">{selectedColor}</p>
              )}
            </div>

            {/* Cantidad */}
            <div>
              <p className="text-xs uppercase tracking-wider font-body mb-2 font-medium">Cantidad</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-9 h-9 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center font-body">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  className="w-9 h-9 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1 font-body">{product.stock} disponibles</p>
            </div>

            <button
              onClick={handleAdd}
              className="w-full py-3.5 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-body font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Agregar a la Bolsa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
