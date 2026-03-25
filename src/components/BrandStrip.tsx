const brands = [
  { name: 'MONASTERY',       w: 700, ls: '0.3em'  },
  { name: 'DOLCE & GABBANA', w: 300, ls: '0.18em', italic: true },
  { name: 'NIKE',            w: 800, ls: '0.45em'  },
  { name: 'GUCCI',           w: 300, ls: '0.38em', italic: true },
  { name: 'RALPH LAUREN',    w: 600, ls: '0.22em'  },
  { name: 'ARMANI',          w: 300, ls: '0.45em'  },
  { name: 'CALVIN KLEIN',    w: 700, ls: '0.28em'  },
  { name: 'BALENCIAGA',      w: 600, ls: '0.22em'  },
  { name: 'TOMMY HILFIGER',  w: 400, ls: '0.18em'  },
  { name: 'VERSACE',         w: 300, ls: '0.38em', italic: true },
];

const Sep = () => (
  <span
    aria-hidden="true"
    style={{
      display: 'inline-block',
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'hsl(43 85% 58%)',
      margin: '0 32px',
      flexShrink: 0,
      opacity: 0.85,
      verticalAlign: 'middle',
    }}
  />
);

const BrandStrip = () => {
  const doubled = [...brands, ...brands];

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        background: 'hsl(215 32% 13%)',
        borderTop: '1px solid hsl(215 30% 20%)',
        borderBottom: '1px solid hsl(215 30% 20%)',
        padding: '16px 0',
      }}
    >
      <div
        className="flex items-center animate-marquee"
        style={{ width: 'max-content' }}
      >
        {doubled.map((b, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="font-display select-none whitespace-nowrap text-white"
              style={{
                fontSize: 'clamp(0.78rem, 1.3vw, 0.95rem)',
                fontWeight: b.w,
                letterSpacing: b.ls,
                fontStyle: b.italic ? 'italic' : 'normal',
                opacity: 0.9,
              }}
            >
              {b.name}
            </span>
            <Sep />
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandStrip;
