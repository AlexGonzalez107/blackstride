import { Linkedin, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="py-20 border-t-2 border-agency-accent bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <Logo variant="full" className="h-16" />
            </div>
            <p className="text-foreground/50 max-w-sm mb-8">Blackstride Digital - Built to Move.</p>
            <div className="flex gap-6">
              <a href="#" className="text-foreground/50 hover:text-agency-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-agency-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-agency-accent">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-foreground/50 hover:text-foreground transition-colors text-sm uppercase tracking-widest">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-foreground/50 hover:text-foreground transition-colors text-sm uppercase tracking-widest">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/50 hover:text-foreground transition-colors text-sm uppercase tracking-widest">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/50 hover:text-foreground transition-colors text-sm uppercase tracking-widest">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-agency-accent">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-foreground/50 hover:text-foreground transition-colors text-sm uppercase tracking-widest">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/50 hover:text-foreground transition-colors text-sm uppercase tracking-widest">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-agency-border/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/30 text-[10px] uppercase tracking-[0.2em]">
            © 2025 Blackstride Digital. A Black Steed Capital Company.
          </p>
          <p className="text-foreground/30 text-[10px] uppercase tracking-[0.2em]">
            Built with AI. Delivered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
