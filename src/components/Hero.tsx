import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax and Scale */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y, opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-highlight-tech/10 via-base-bg/80 to-base-bg z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,196,182,0.05)_0%,rgba(10,10,10,1)_100%)] z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        >
          {/* Clinical eye examination / LASIK style videos */}
          <source src="https://videos.pexels.com/video-files/7579955/7579955-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/8465922/8465922-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2020/08/18/47404-450259885_large.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-2">
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-highlight-tech text-sm tracking-[0.2em] uppercase mb-6"
            >
              La claridad como arte
            </motion.div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-[-0.04em] leading-[1.05] text-text-primary">
            <div className="overflow-hidden py-2">
              <motion.div 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
                className="font-light"
              >
                Redefiniendo el futuro
              </motion.div>
            </div>
            <div className="overflow-hidden py-2">
              <motion.div 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
                className="font-semibold italic text-text-secondary"
              >
                de la visión ocular.
              </motion.div>
            </div>
          </h1>
          
          <div className="overflow-hidden mt-12">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-sans text-text-secondary text-lg max-w-xl font-light leading-relaxed">
                Precisión quirúrgica e innovación tecnológica unidas para brindar un cuidado ocular de élite. Experimente el mundo con una nitidez sin precedentes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary">Scroll</span>
        <div className="w-[1px] h-12 bg-border-subtle relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-highlight-tech"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
