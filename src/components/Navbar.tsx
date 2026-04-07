import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Logo } from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav 
      className={`fixed left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'top-0 navbar-gradient-blur py-4 border-t-2 border-agency-accent' 
          : 'top-[44px] bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <Logo variant="full" className="h-10" priority />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/70 hover:text-agency-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-6 py-2 border border-agency-accent/40 text-agency-accent text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-agency-accent hover:text-background transition-all duration-300"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-background border-b border-agency-border p-8 md:hidden flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold tracking-widest uppercase text-foreground"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-agency-accent text-background text-center font-bold uppercase tracking-widest text-sm"
          >
            Book a Call
          </a>
        </motion.div>
      )}
    </nav>
  );
}
