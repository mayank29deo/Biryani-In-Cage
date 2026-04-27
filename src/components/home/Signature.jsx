import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import VegBadge from '@/components/ui/VegBadge';
import Steam from '@/components/ui/Steam';
import { fadeUp, stagger, child } from '@/utils/motion';
import { MENU } from '@/data/menu';

export default function Signature() {
  // Top biryanis + a couple of standout starters/mains
  const featured = MENU.filter((m) => m.category === 'biryani').slice(0, 6);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-saffron-400/40 to-transparent" />

      <div className="container-x relative">
        <motion.div {...fadeUp} className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">The hero on every table</p>
            <h2 className="section-title mt-3">
              Our <em>signature biryanis</em>.
            </h2>
            <p className="mt-5 max-w-xl text-bone/70">
              Long-grain basmati. Slow dum. House masala blends we've spent three years tightening.
              Pick your favourite — or do what locals do and try them all.
            </p>
          </div>
          <Link to="/menu" className="btn-ghost shrink-0">
            See full menu →
          </Link>
        </motion.div>

        <motion.div {...stagger(0.08, 0.08)} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((m, i) => (
            <motion.article
              key={m.id}
              variants={child}
              className="group relative overflow-hidden rounded-3xl border border-saffron-400/15 bg-gradient-to-br from-ink-800/90 via-ink-900 to-ink-950 p-7"
            >
              <Steam count={3} className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between">
                <div className="chip">
                  <Flame size={11} /> Biryani · #{i + 1}
                </div>
                <VegBadge veg={m.veg} />
              </div>

              <h3 className="mt-6 font-display text-2xl text-bone leading-tight">
                {m.name}
              </h3>
              {m.desc && <p className="mt-3 text-sm text-bone/70 leading-relaxed">{m.desc}</p>}

              <div className="mt-8 flex items-center justify-between border-t border-saffron-400/10 pt-5">
                <div className="price-tag text-2xl">₹{m.price}</div>
                {m.popular && (
                  <span className="text-[10px] uppercase tracking-[0.3em] text-saffron-400/80">
                    Bestseller
                  </span>
                )}
              </div>

              {/* hover glow */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl border border-saffron-400/0 transition-colors duration-500 group-hover:border-saffron-400/40" />
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-saffron-400/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
