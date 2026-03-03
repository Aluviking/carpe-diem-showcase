import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CategoryFilter from '@/components/CategoryFilter';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { products, type Product, type Category } from '@/data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section id="catalogo" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-2">Catálogo</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Nuestra Colección</h2>
          </div>

          <div className="mb-10">
            <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
                index={i}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">
              No hay productos en esta categoría.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="container mx-auto text-center space-y-2">
          <p className="font-display text-lg font-semibold tracking-wide">CARPE DIEM</p>
          <p className="text-xs text-muted-foreground font-body tracking-wider">
            Viste el momento · © 2026
          </p>
        </div>
      </footer>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Index;
