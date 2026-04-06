import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-[0.10] pointer-events-none select-none hidden lg:block">
        <Logo className="w-[800px] h-auto opacity-35" color="white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              Your digital presence is either <span className="relative inline-block">working for you<span className="absolute bottom-2 left-0 w-full h-1 bg-agency-accent/40 -z-10"></span></span> — <br />
              <span className="text-agency-accent">or against you.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-foreground/60 font-medium mb-10 max-w-xl leading-relaxed"
          >
            We build websites, produce media, and manage your entire digital presence. Monthly. Done-for-you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#work" 
              className="px-10 py-5 bg-agency-accent text-background font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-foreground hover:text-background transition-all duration-500"
            >
              See Our Work <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 border border-agency-accent/40 text-agency-accent font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center hover:bg-agency-accent/10 transition-all duration-500"
            >
              Book a Free Call
            </a>
          </motion.div>
        </div>
      </div>

      {/* Tagline Separator - Moved lower and emphasized */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center overflow-hidden px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="flex items-center gap-8 w-full max-w-7xl"
        >
          <div className="h-[1px] flex-grow bg-agency-border"></div>
          <span className="text-agency-accent font-display text-xs font-bold tracking-[1.2em] uppercase whitespace-nowrap">Built to Move.</span>
          <div className="h-[1px] flex-grow bg-agency-border"></div>
        </motion.div>
      </div>
    </section>
  );
}

