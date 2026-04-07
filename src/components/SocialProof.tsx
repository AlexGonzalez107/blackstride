import { motion } from 'motion/react';
import { Logo } from './Logo';

export default function SocialProof() {
  const stats = [
    { value: '1 Week', label: 'From signed contract to live site' },
    { value: 'Month-to-Month', label: 'No annual contracts. No lock-in.' },
    { value: 'Done-for-You', label: 'You run your business. We handle the rest.' },
  ];

  const notes = [
    {
      title: 'Fast launch, clear scope.',
      body: "One call gets you a clear recommendation, a clear price, and a clear next step. No vague proposal cycle.",
    },
    {
      title: 'Ongoing support without lock-in.',
      body: 'Retainers stay month to month so your business keeps moving without getting trapped in an annual contract.',
    },
  ];

  return (
    <section className="py-32 results-contrast-bg text-black overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            x: [0, 150, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="geometric-shape w-[600px] h-[600px] -top-64 -left-64 rounded-full border border-black/5"
        />
        <motion.div
          animate={{
            rotate: [0, -180, -360],
            x: [0, -150, 100, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="geometric-shape w-[700px] h-[700px] -bottom-64 -right-64 border border-black/5"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [45, 135, 225, 315, 405],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="geometric-shape w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-black/5"
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
            }}
            className="absolute w-4 h-4 border border-black/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none select-none hidden lg:block">
          <Logo className="w-96 h-auto opacity-10" color="black" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-black/60 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
              Performance Metrics
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-5xl md:text-8xl font-bold leading-none tracking-tighter"
            >
              Built to <br />
              <span className="text-black">move.</span>
            </motion.h2>
          </div>
          <div className="h-[1px] flex-grow bg-black/10 hidden md:block mb-6 mx-12"></div>
          <div className="text-right">
            <p className="text-black/40 text-xs font-bold tracking-widest uppercase mb-2">Operating Model</p>
            <div className="text-black font-display font-bold text-2xl">Fast. Clear. Managed.</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="bg-black/5 p-12 group hover:bg-black/10 transition-colors duration-500"
            >
              <div className="text-black/40 text-xs font-bold tracking-widest uppercase mb-8">0{i + 1}</div>
              <div className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tighter transition-colors duration-500">
                {stat.value}
              </div>
              <p className="text-black/60 font-medium text-sm leading-relaxed max-w-[220px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {notes.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"></div>
              <div className="relative">
                <p className="text-2xl md:text-3xl font-medium leading-tight mb-6 text-black tracking-tight">
                  {item.title}
                </p>
                <p className="text-sm text-black/60 font-medium leading-relaxed max-w-md">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
