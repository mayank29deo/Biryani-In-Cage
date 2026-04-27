import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { STORY, SITE, STATS } from '@/data/site';
import { fadeUp, stagger, child } from '@/utils/motion';

export default function AboutPage() {
  return (
    <main className="pb-32 pt-[88px]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/cage-booth-brick.jpg"
            alt="Biryani In Cage interior"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/65 via-ink-950/75 to-ink-950" />
        </div>
        <div className="container-x relative py-24 sm:py-32">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="section-eyebrow">Our story</p>
            <h1 className="section-title mt-3">
              We sell biryani. <em>The cage</em> is just the wrapper.
            </h1>
            <p className="mt-6 max-w-xl text-bone/80">
              {SITE.shortPitch}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x py-24">
        <motion.div {...stagger(0.05, 0.15)} className="grid gap-8 lg:grid-cols-2">
          {STORY.map((m, i) => (
            <motion.article
              key={m.year}
              variants={child}
              className="relative overflow-hidden rounded-3xl border border-saffron-400/15 bg-ink-900/70 p-8 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-bold neon-text">{m.year}</span>
                <div className="gold-divider flex-1" />
              </div>
              <h2 className="mt-5 font-display text-2xl text-bone">{m.title}</h2>
              <p className="mt-3 text-bone/75 leading-relaxed">{m.body}</p>
              <span className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-saffron-400/8 blur-3xl" />
              <span className="absolute right-7 top-7 text-[10px] uppercase tracking-[0.3em] text-saffron-400/50">
                Chapter 0{i + 1}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Receipts */}
      <section className="container-x py-12">
        <motion.div {...fadeUp} className="rounded-3xl border border-saffron-400/15 bg-gradient-to-br from-ink-900 to-ink-950 p-10">
          <p className="section-eyebrow">By the numbers</p>
          <h2 className="section-title mt-3">
            We don't <em>say</em> we're top-rated. The receipts do.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="border-l border-saffron-400/20 pl-5">
                <div className="font-display text-3xl font-bold text-saffron-300 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-bone/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container-x py-12 text-center">
        <motion.p {...fadeUp} className="font-display text-2xl text-bone sm:text-3xl">
          Now come <em className="not-italic neon-text">eat</em>.
        </motion.p>
        <motion.div
          {...fadeUp}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link to="/menu" className="btn-primary">See full menu</Link>
          <a href={SITE.links.zomato} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Order on Zomato
          </a>
        </motion.div>
      </section>
    </main>
  );
}
