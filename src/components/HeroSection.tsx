import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img
        src={heroBg}
        alt="Carpe Diem - Colección"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
      
      <div className="relative h-full flex flex-col items-center justify-end pb-16 px-6 text-center">
        <p className="text-primary-foreground/70 uppercase tracking-[0.3em] text-sm font-body mb-3 animate-fade-in">
          Colección 2026
        </p>
        <h2 className="text-5xl md:text-7xl font-display font-semibold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Carpe Diem
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-md font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Viste el momento. Ropa con alma, diseñada para quienes viven con intención.
        </p>
        <a
          href="#catalogo"
          className="mt-8 px-8 py-3 border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all uppercase tracking-widest text-sm font-body animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Explorar
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
