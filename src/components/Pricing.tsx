import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

type PricingCard = {
  name: string;
  eyebrow: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  recommended?: boolean;
};

const websiteTiers: PricingCard[] = [
  {
    name: 'Colt',
    eyebrow: 'FOR BUSINESSES GETTING ONLINE FOR THE FIRST TIME.',
    description: 'A lean launch package built to get you live quickly with the essentials in place.',
    price: '$300',
    priceNote: 'Starting at',
    features: [
      '1-3 page website',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Stallion',
    eyebrow: 'FOR BUSINESSES THAT NEED A FULL WEB PRESENCE.',
    description: 'Designed for growing brands that need a stronger site, better structure, and more ways to convert.',
    price: '$1,000',
    priceNote: 'Starting at',
    features: [
      '4-8 page custom design',
      'Blog or portfolio section',
      'Booking / inquiry system',
      'SEO foundation',
      'Analytics setup',
    ],
    cta: 'Get Started',
    recommended: true,
  },
  {
    name: 'Pegasus',
    eyebrow: 'FOR BUSINESSES WITH COMPLEX NEEDS OR CUSTOM FUNCTIONALITY.',
    description: 'Built for larger projects where custom systems, deeper strategy, and tailored functionality matter.',
    price: '$3,000',
    priceNote: 'Starting at',
    features: [
      '8+ pages',
      'E-commerce or member portal',
      'Custom integrations',
      'Advanced SEO',
      'Priority delivery',
    ],
    cta: 'Get Started',
  },
];

const presencePackages: PricingCard[] = [
  {
    name: 'Maintain',
    eyebrow: 'YOUR SITE STAYS LIVE, SECURE, AND UP TO DATE.',
    description: 'A simple monthly layer that covers the core upkeep most businesses do not want to manage themselves.',
    price: '$50/mo',
    priceNote: 'From',
    features: [
      'Hosting oversight',
      'Security monitoring',
      'Software updates',
      'Ongoing content edits',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Establish',
    eyebrow: 'YOUR SITE PLUS A SOCIAL PRESENCE THAT WORKS.',
    description: 'Adds consistent visibility across search and social so your business looks active everywhere people check.',
    price: '$150/mo',
    priceNote: 'From',
    features: [
      'Everything in Maintain',
      'Google Business profile setup & management',
      'Social media content creation & scheduling',
      'Social media engagement management (up to 2 platforms)',
      'Grow your website with your business',
    ],
    cta: 'Get Started',
    recommended: true,
  },
  {
    name: 'Dominate',
    eyebrow: 'A FULLY MANAGED DIGITAL PRESENCE.',
    description: 'For businesses that want one team handling strategy, campaigns, reporting, and ongoing growth.',
    price: 'Custom',
    priceNote: 'Book a call',
    features: [
      'Everything in Establish',
      'Paid ad campaign management',
      'Monthly analytics reporting',
      'Ongoing performance optimization',
      'Custom pricing',
    ],
    cta: 'Book a Call',
  },
];

function PricingGroup({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: PricingCard[];
}) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="flex flex-col gap-4 mb-8 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] font-bold tracking-[0.35em] text-agency-accent uppercase mb-3">
            {subtitle}
          </p>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">{title}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: false }}
            className={`relative p-10 glass-card flex flex-col ${
              card.recommended ? 'border-agency-accent/40 ring-1 ring-agency-accent/20' : ''
            }`}
          >
            {card.recommended && (
              <div className="absolute top-0 right-0 px-6 py-2 bg-agency-accent text-background text-[10px] font-bold tracking-[0.4em] uppercase shadow-lg">
                Most Popular
              </div>
            )}

            <div className="mb-10 pt-4">
              <div className="flex justify-between items-start gap-4 mb-6">
                <h4 className="text-3xl font-bold">{card.name}</h4>
                <span className="text-[9px] font-bold tracking-widest text-foreground/40 uppercase">
                  {card.priceNote}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold tracking-tighter">{card.price}</span>
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-agency-accent mb-6 leading-relaxed">
                {card.eyebrow}
              </p>
              <p className="text-foreground/60 text-sm leading-relaxed">{card.description}</p>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {card.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <div className="w-1.5 h-1.5 bg-agency-accent/60 mt-1.5 shrink-0"></div>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`w-full py-5 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                card.recommended
                  ? 'bg-agency-accent text-background hover:bg-foreground hover:text-background'
                  : 'border border-agency-border text-foreground hover:border-agency-accent'
              }`}
            >
              {card.cta} <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <span className="section-label">Services</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-none mb-4 tracking-tighter">
              Build Once. Grow <br /> Every Month.
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-foreground/50 text-lg leading-relaxed mb-8">
              Pricing is split across two axes: the one-time website build and the monthly presence layer that keeps
              your business visible, updated, and growing after launch.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ONE-TIME WEBSITE BUILDS', 'MONTHLY PRESENCE SUPPORT', 'STRUCTURED TO SCALE'].map((label) => (
                <span
                  key={label}
                  className="text-[9px] font-bold tracking-widest px-3 py-1.5 bg-card border border-agency-border text-foreground/60"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <PricingGroup title="Website Tiers" subtitle="One-Time Build" cards={websiteTiers} />
        <PricingGroup title="Presence Packages" subtitle="Monthly Retainer" cards={presencePackages} />
      </div>
    </section>
  );
}
