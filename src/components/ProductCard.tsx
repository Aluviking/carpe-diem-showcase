import { Product, formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index: number;
}

const ProductCard = ({ product, onSelect, index }: ProductCardProps) => {
  return (
    <button
      onClick={() => onSelect(product)}
      className="group text-left w-full animate-fade-in"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        {product.stock <= 5 && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs px-2 py-1 uppercase tracking-wider font-body font-medium">
            Últimas unidades
          </span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-body">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-medium leading-tight">
          {product.name}
        </h3>
        <p className="text-sm font-body text-muted-foreground">
          {formatPrice(product.price)}
        </p>
      </div>
    </button>
  );
};

export default ProductCard;
