export function Footer() {
  return (
    <footer className="bg-base-bg border-t border-border-subtle pt-24 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <div className="font-serif text-3xl tracking-[0.2em] uppercase text-text-primary mb-6">
              Spectra
            </div>
            <p className="font-sans text-text-secondary font-light max-w-sm leading-relaxed">
              Elevando el estándar del cuidado ocular a través de tecnología de precisión y experiencia médica excepcional.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-text-primary mb-6">Clínica</h4>
            <ul className="space-y-4 font-sans text-sm text-text-secondary font-light">
              <li><a href="#" className="hover:text-highlight-tech transition-colors">Nuestra Filosofía</a></li>
              <li><a href="#" className="hover:text-highlight-tech transition-colors">Equipo Médico</a></li>
              <li><a href="#" className="hover:text-highlight-tech transition-colors">Tecnología</a></li>
              <li><a href="#" className="hover:text-highlight-tech transition-colors">Testimonios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-text-primary mb-6">Contacto</h4>
            <ul className="space-y-4 font-sans text-sm text-text-secondary font-light">
              <li>1-800-SPECTRA</li>
              <li>info@spectravision.com</li>
              <li>1200 Medical Plaza, Suite 400<br/>Los Angeles, CA 90015</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-text-secondary tracking-wider">
            &copy; {new Date().getFullYear()} Spectra Vision. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 font-sans text-xs text-text-secondary tracking-wider">
            <a href="#" className="hover:text-text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-text-primary transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
