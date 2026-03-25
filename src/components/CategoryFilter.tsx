import { categories, type Category } from '@/data/products';

interface CategoryFilterProps {
  selected: Category | 'Todos';
  onSelect: (category: Category | 'Todos') => void;
}

const NAVY = 'hsl(215 32% 13%)';

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  const all: Array<Category | 'Todos'> = ['Todos', ...categories];

  return (
    <div className="flex gap-0 overflow-x-auto scrollbar-hide justify-start md:justify-center -mx-5 sm:-mx-8 px-5 sm:px-8">
      {all.map(cat => {
        const active = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="flex-shrink-0 font-body font-medium uppercase relative transition-all duration-200"
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              padding: '0.7rem 1rem',
              color: active ? NAVY : 'hsl(0 0% 55%)',
              background: 'transparent',
              border: 'none',
              borderBottom: active ? `2px solid ${NAVY}` : '2px solid transparent',
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
