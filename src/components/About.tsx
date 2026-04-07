import Image from 'next/image';
import { motion } from 'motion/react';
import { Logo } from './Logo';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">
              A different kind <br /> <span className="text-agency-accent text-5xl md:text-7xl">of agency.</span>
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                Most agencies make getting online harder than it needs to be. Long timelines, vague proposals, and invoices that
                don't match the results.
              </p>
              <div className="flex items-center gap-4 py-4">
                <Logo className="w-12 h-12 opacity-30" color="white" />
                <div className="h-[1px] flex-grow bg-agency-border/30"></div>
              </div>
              <p>
                Blackstride is built differently. Lean, fast, and accountable - because your first impression online deserves to
                be a good one.
              </p>
              <p className="font-display text-agency-accent tracking-widest uppercase text-sm">Built to Move.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="relative group"
          >
            <div className="aspect-square bg-card border border-agency-border group-hover:border-agency-accent/40 transition-colors duration-500 relative overflow-hidden">
              <Image
                src="/images/360_F_235097419_oW8XQTFySkHTSvGsbRSn61VBRz5mxv1b.jpg"
                alt="Developer working across multiple screens"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent"></div>

              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] flex-grow bg-agency-accent/30"></div>
                  <span className="text-agency-accent font-display text-[10px] tracking-[0.4em] uppercase">
                    Precision Operation
                  </span>
                </div>
                <p className="text-foreground font-display text-2xl tracking-tighter uppercase font-bold">
                  Outcome-Obsessed Delivery
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-agency-accent/30"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-agency-accent/30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
