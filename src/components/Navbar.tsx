import { MagneticButton } from './MagneticButton';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-base-bg/60 backdrop-blur-[20px] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="font-serif text-2xl tracking-[0.2em] uppercase text-text-primary">
          Spectra
        </div>
        <div className="hidden md:flex gap-12 text-xs font-sans tracking-[0.15em] uppercase text-text-secondary">
          <a href="#clinic" className="hover:text-text-primary transition-colors duration-300">Clínica</a>
          <a href="#services" className="hover:text-text-primary transition-colors duration-300">Servicios</a>
          <a href="#results" className="hover:text-text-primary transition-colors duration-300">Resultados</a>
        </div>
        <a href="#booking" className="hidden md:block">
          <MagneticButton className="border border-border-subtle px-8 py-3 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-text-primary hover:text-base-bg transition-colors duration-500">
            Reservar Cita
          </MagneticButton>
        </a>
        <button className="md:hidden text-text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
