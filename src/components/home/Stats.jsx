import { motion } from 'framer-motion';
import { STATS } from '@/data/site';
import { stagger, child } from '@/utils/motion';

export default function Stats() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-x">
        <motion.div {...stagger(0.05, 0.1)} className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={child}
              className="glass-card relative overflow-hidden p-6 text-center"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-saffron-400/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="font-display text-3xl sm:text-5xl font-bold neon-text">
                {s.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-bone/70 sm:text-sm">
                {s.label}
              </div>
              {s.sub && (
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-saffron-400/60">
                  {s.sub}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
