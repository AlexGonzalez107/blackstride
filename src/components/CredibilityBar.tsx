import { motion } from 'motion/react';

export default function CredibilityBar() {
  const items = [
    'BUILT TO MOVE.',
    'YOUR FIRST SITE, DONE RIGHT.',
    '1-WEEK DELIVERY',
    'MONTH-TO-MONTH. NO LOCK-IN.',
    '100% SMALL BUSINESS FOCUSED',
    'BUILT TO MOVE.',
    'YOUR FIRST SITE, DONE RIGHT.',
    '1-WEEK DELIVERY',
    'MONTH-TO-MONTH. NO LOCK-IN.',
    '100% SMALL BUSINESS FOCUSED',
  ];

  return (
    <div className="bg-background border-b border-agency-border py-3 overflow-hidden whitespace-nowrap relative z-50">
      <div className="marquee-content flex items-center">
        {items.concat(items).map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-[10px] font-bold tracking-[0.3em] text-agency-accent/80 uppercase px-8">
              {item}
            </span>
            <span className="text-agency-border">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
