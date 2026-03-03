import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    id: 'lasik',
    name: 'Cirugía LASIK',
    price: '$2,500 / ojo',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
    category: 'Refractiva'
  },
  {
    id: 'prk',
    name: 'PRK Avanzado',
    price: '$2,200 / ojo',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop',
    category: 'Refractiva'
  },
  {
    id: 'catarata',
    name: 'Lente Intraocular',
    price: '$3,800 / ojo',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    category: 'Implantes'
  },
  {
    id: 'presbicia',
    name: 'Corrección Presbicia',
    price: '$3,000 / ojo',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2014&auto=format&fit=crop',
    category: 'Tratamientos'
  }
];

export function Services() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Refractiva', 'Implantes', 'Tratamientos'];

  const filteredServices = activeFilter === 'Todos' 
    ? services 
    : services.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-24 md:py-32 bg-base-bg relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.02em] font-light mb-4">
              Services & <span className="italic text-text-secondary">Solutions</span>
            </h2>
            <p className="font-sans text-text-secondary font-light max-w-md">
              Procedimientos de vanguardia diseñados para restaurar y perfeccionar su visión con mínima invasión.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-5 py-2 rounded-full text-xs font-sans uppercase tracking-[0.1em] transition-all duration-300
                  ${activeFilter === filter 
                    ? 'bg-text-primary text-base-bg' 
                    : 'border border-border-subtle text-text-secondary hover:border-text-secondary'}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={service.id}
                className="group relative overflow-hidden rounded-xl bg-surface-accent aspect-[3/4] cursor-pointer"
              >
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Turquoise Filter Overlay */}
                <div className="absolute inset-0 bg-highlight-tech/0 group-hover:bg-highlight-tech/20 transition-colors duration-700 mix-blend-overlay" />
                
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-bg via-base-bg/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-highlight-tech mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.category}
                    </div>
                    <h3 className="font-sans text-xl font-light text-text-primary mb-1">
                      {service.name}
                    </h3>
                    <p className="font-mono text-sm text-text-secondary">
                      {service.price}
                    </p>
                    
                    <div className="overflow-hidden h-0 group-hover:h-10 transition-all duration-500 mt-4">
                      <button className="text-text-primary text-xs uppercase tracking-[0.15em] flex items-center gap-2 hover:text-highlight-tech transition-colors">
                        <span>Ver detalles</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
