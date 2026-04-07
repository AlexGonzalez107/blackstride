import { motion } from 'motion/react';
import { Globe, Camera, LayoutGrid } from 'lucide-react';

const services = [
  {
    title: 'Web Presence',
    icon: <Globe className="text-agency-accent" size={32} />,
    description:
      'A website built around how your customers actually think - not around what looks good in a portfolio. Fast, mobile-first, and built to convert.',
    tag: 'One-time build + optional retainer',
  },
  {
    title: 'Media & Content',
    icon: <Camera className="text-agency-accent" size={32} />,
    description:
      'Professional photography, video, and social content. The kind of first impression that makes people take you seriously.',
    tag: 'Project-based or retainer',
  },
  {
    title: 'Digital Management',
    icon: <LayoutGrid className="text-agency-accent" size={32} />,
    description:
      'We handle your SEO, updates, content, and analytics on a monthly basis. You get a professional digital operation without hiring one.',
    tag: 'Monthly retainer',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            What we <span className="text-agency-accent">handle.</span>
          </motion.h2>
          <div className="h-1 w-24 bg-agency-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: false }}
              className="group bg-card p-10 border-l border-agency-border hover:border-agency-accent transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-agency-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-agency-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-agency-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-8">{service.description}</p>
              <div className="mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-agency-accent/80 px-3 py-1 border border-agency-accent/20 rounded-sm">
                  {service.tag}
                </span>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-agency-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-agency-accent/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
