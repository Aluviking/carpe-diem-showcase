import { categories, type Category } from '@/data/products';

interface CategoryFilterProps {
  selected: Category | 'Todos';
  onSelect: (category: Category | 'Todos') => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onSelect('Todos')}
        className={`px-5 py-2 text-sm uppercase tracking-wider transition-all border font-body ${
          selected === 'Todos'
            ? 'bg-primary text-primary-foreground border-primary'
            : 'bg-transparent text-foreground border-border hover:border-foreground/40'
        }`}
      >
        Todos
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 text-sm uppercase tracking-wider transition-all border font-body ${
            selected === cat
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-transparent text-foreground border-border hover:border-foreground/40'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
