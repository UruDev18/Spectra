import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MagneticButton } from './MagneticButton';

export function Booking() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-surface-accent relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-highlight-tech mb-6">
              // Agendar Consulta
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] font-light mb-8 leading-[1.1]">
              Dé el primer paso hacia <br/>
              <span className="italic text-text-secondary">la claridad absoluta.</span>
            </h2>
            <p className="font-sans text-text-secondary font-light text-lg leading-relaxed mb-12 max-w-md">
              Programe una evaluación integral con nuestros especialistas. Analizaremos su biometría ocular para diseñar un plan quirúrgico personalizado.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1px] bg-border-subtle" />
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-text-secondary">
                Atención VIP disponible
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-base-bg p-8 md:p-12 rounded-2xl border border-border-subtle relative overflow-hidden">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              >
                <div className="w-16 h-16 rounded-full border border-highlight-tech flex items-center justify-center mb-6 text-highlight-tech">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-serif text-3xl mb-4 text-text-primary">Solicitud Recibida</h3>
                <p className="font-sans text-text-secondary font-light">
                  Nuestro concierge médico se pondrá en contacto con usted en breve para confirmar su cita.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-[10px] uppercase tracking-[0.1em] text-text-secondary ml-2">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-surface-accent border border-border-subtle rounded-lg px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-highlight-tech transition-colors"
                      placeholder="Ej. Carlos Mendoza"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-[10px] uppercase tracking-[0.1em] text-text-secondary ml-2">Teléfono</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-surface-accent border border-border-subtle rounded-lg px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-highlight-tech transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-[0.1em] text-text-secondary ml-2">Correo Electrónico</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-surface-accent border border-border-subtle rounded-lg px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-highlight-tech transition-colors"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-[10px] uppercase tracking-[0.1em] text-text-secondary ml-2">Servicio de Interés</label>
                    <select 
                      required
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-surface-accent border border-border-subtle rounded-lg px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-highlight-tech transition-colors appearance-none"
                    >
                      <option value="" disabled>Seleccione una opción</option>
                      <option value="lasik">Cirugía LASIK</option>
                      <option value="prk">PRK Avanzado</option>
                      <option value="catarata">Lente Intraocular</option>
                      <option value="presbicia">Corrección de Presbicia</option>
                      <option value="consult">Consulta General</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-[10px] uppercase tracking-[0.1em] text-text-secondary ml-2">Fecha Preferida</label>
                    <input 
                      required
                      type="date" 
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      className="w-full bg-surface-accent border border-border-subtle rounded-lg px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-highlight-tech transition-colors"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <MagneticButton className="w-full bg-text-primary text-base-bg py-4 rounded-lg font-sans text-xs uppercase tracking-[0.15em] font-medium hover:bg-highlight-tech hover:text-base-bg transition-colors duration-500">
                    Solicitar Cita
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
