import { motion } from 'motion/react';

const stats = [
  {
    value: '20/20',
    label: 'Visión Perfecta',
    description: 'Alcanzada por el 98% de nuestros pacientes premium post-cirugía.'
  },
  {
    value: '15k+',
    label: 'Procedimientos',
    description: 'Intervenciones exitosas realizadas por nuestro equipo de especialistas.'
  },
  {
    value: '24h',
    label: 'Recuperación',
    description: 'Tiempo promedio para retomar actividades cotidianas con claridad.'
  }
];

export function Results() {
  return (
    <section id="results" className="py-24 md:py-32 border-t border-border-subtle relative z-20 bg-base-bg overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-highlight-tech/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 md:mb-32 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.02em] font-light mb-6">
            Resultados que <span className="italic text-text-secondary">hablan por sí mismos</span>
          </h2>
          <p className="font-sans text-text-secondary font-light text-lg leading-relaxed">
            Nuestra obsesión por la precisión se traduce en métricas inigualables. Cada número representa una vida transformada a través de la claridad visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-12 border-l border-border-subtle"
            >
              <div className="absolute top-0 left-0 w-[1px] h-0 bg-highlight-tech transition-all duration-1000 group-hover:h-full" />
              <div className="font-serif text-6xl md:text-7xl lg:text-8xl text-text-primary mb-4 tracking-tighter">
                {stat.value}
              </div>
              <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-highlight-tech mb-4">
                {stat.label}
              </h3>
              <p className="font-sans text-text-secondary font-light leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
