import { motion } from 'framer-motion';
import { STORY } from '@/data/site';
import { fadeUp, stagger, child } from '@/utils/motion';

export default function Story() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Story</p>
          <h2 className="section-title mt-3">
            From a cloud kitchen to <em>Deoghar's favourite</em> cage.
          </h2>
        </motion.div>

        <motion.div {...stagger(0.1, 0.12)} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STORY.map((m) => (
            <motion.article
              key={m.year}
              variants={child}
              className="group relative overflow-hidden rounded-3xl border border-saffron-400/15 bg-ink-900/70 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-saffron-400/40"
            >
              <div className="font-display text-saffron-400 text-sm tracking-[0.3em] uppercase">
                {m.year}
              </div>
              <h3 className="mt-4 font-display text-xl sm:text-2xl text-bone">
                {m.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/75">
                {m.body}
              </p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-saffron-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
