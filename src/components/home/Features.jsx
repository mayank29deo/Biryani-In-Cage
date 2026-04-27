import { motion } from 'framer-motion';
import { Flame, Utensils, Sparkles, Phone } from 'lucide-react';
import { FEATURES } from '@/data/site';
import { fadeUp, stagger, child } from '@/utils/motion';

const ICONS = {
  flame: Flame,
  utensils: Utensils,
  sparkles: Sparkles,
  phone: Phone,
};

export default function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Why we keep them coming back</p>
          <h2 className="section-title mt-3">
            Built for <em>flavour</em>. Designed for <em>vibe</em>.
          </h2>
        </motion.div>

        <motion.div {...stagger(0.06, 0.1)} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon] ?? Sparkles;
            return (
              <motion.div
                key={f.title}
                variants={child}
                className="group relative overflow-hidden rounded-3xl border border-saffron-400/15 bg-ink-900/70 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-saffron-400/40"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-saffron-400/30 bg-saffron-400/10 text-saffron-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl text-bone">{f.title}</h3>
                <p className="mt-3 text-sm text-bone/70 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
