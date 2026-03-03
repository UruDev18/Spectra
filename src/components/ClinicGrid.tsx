import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const pillars = [
  {
    id: '01',
    title: 'Innovación',
    description: 'Equipamiento láser de última generación con mapeo topográfico 3D para una precisión nanométrica en cada intervención.',
  },
  {
    id: '02',
    title: 'Personalización',
    description: 'Protocolos quirúrgicos adaptados a la biometría única de su ojo, asegurando resultados óptimos y recuperación acelerada.',
  },
  {
    id: '03',
    title: 'Resultados',
    description: 'Más de 10,000 procedimientos exitosos. Visión 20/20 o superior en el 98% de nuestros pacientes premium.',
  }
];

export function ClinicGrid() {
  return (
    <section id="clinic" className="py-24 md:py-32 border-t border-border-subtle relative z-20 bg-base-bg">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.02em] font-light">
          Cutting-Edge <span className="italic text-text-secondary">Care</span>
        </h2>
      </div>
      
      <div className="border-t border-b border-border-subtle">
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 snap-x snap-mandatory hide-scrollbar">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id}
              className={`
                min-w-[85vw] md:min-w-0 snap-center
                border-r border-border-subtle last:border-r-0
                p-8 md:p-12 lg:p-16
                hover:bg-surface-accent transition-colors duration-700 group
                flex flex-col justify-between min-h-[400px]
              `}
            >
              <div className="font-mono text-sm text-text-secondary mb-12 group-hover:text-highlight-tech transition-colors duration-500">
                // {pillar.id}
              </div>
              
              <div>
                <h3 className="font-serif text-3xl mb-6 font-light group-hover:translate-x-2 transition-transform duration-500">
                  {pillar.title}
                </h3>
                <p className="font-sans text-text-secondary font-light leading-relaxed mb-12 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {pillar.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <button className="flex items-center gap-4 text-xs font-sans uppercase tracking-[0.15em] text-text-secondary group-hover:text-text-primary transition-colors duration-500">
                  <span>Descubrir</span>
                  <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
