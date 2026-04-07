import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

const projects = [
  {
    title: "Oakwood Grille",
    category: "FEATURED · RESTAURANT",
    stats: "Launched in 4 days · Bookings up 40%",
    image: "https://picsum.photos/seed/restaurant/1200/800",
    featured: true
  },
  {
    title: "Harmon Contracting",
    category: "CONTRACTOR",
    stats: "Launched in 3 days · Leads doubled in 30 days",
    image: "https://picsum.photos/seed/contracting/800/600",
    featured: false
  },
  {
    title: "Lumière Med Spa",
    category: "MED SPA",
    stats: "Launched in 5 days · Online bookings up 65%",
    image: "https://picsum.photos/seed/spa/800/600",
    featured: false
  },
  {
    title: "Peak Fitness Studio",
    category: "FITNESS",
    stats: "Launched in 3 days · Membership inquiries up 50%",
    image: "https://picsum.photos/seed/fitness/800/600",
    featured: false
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <span className="section-label">Our Work</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-none mb-4 tracking-tighter">
              Built for Real <br /> Businesses
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-foreground/50 text-lg leading-relaxed mb-6">
              Launches built for actual operators, not fictional case studies. The goal is simple: clearer offers, faster launches, and better conversion once the site is live.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-agency-accent text-sm font-bold tracking-widest uppercase hover:underline">
              Your business could be next <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Project */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="aspect-video overflow-hidden glass-card mb-6 relative border-t-2 border-transparent group-hover:border-agency-accent transition-all duration-500">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60"></div>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-agency-accent uppercase mb-2 block">{projects[0].category}</span>
              <h3 className="text-4xl font-bold mb-2">{projects[0].title}</h3>
              <p className="text-foreground/40 text-sm font-medium">{projects[0].stats}</p>
            </div>
          </motion.div>

          {/* Side Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {projects.slice(1, 2).map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden glass-card mb-6 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-agency-accent uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/40 text-sm font-medium">{project.stats}</p>
                </div>
              </motion.div>
            ))}

            <div className="grid grid-cols-2 gap-6">
              {projects.slice(2).map((project, i) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: false }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden glass-card mb-6 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 17vw, 50vw"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] text-agency-accent uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-[11px] text-foreground/40 font-medium leading-tight">{project.stats}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
