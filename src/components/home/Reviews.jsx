import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';
import Stars from '@/components/ui/Stars';
import { REVIEWS, RATING } from '@/data/reviews';
import { SITE } from '@/data/site';
import { fadeUp, stagger, child } from '@/utils/motion';

// Two-column masonry-ish grid. Cards fade in staggered. The header
// summarises the aggregate rating + a CTA to read everything on Google.

const GoogleG = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.6 6 29 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z"/>
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 16 19 13 24 13c3 0 5.7 1.1 7.8 3l5.7-5.7C33.6 6 29 4 24 4 16.3 4 9.6 8.3 6.3 14.7Z"/>
    <path fill="#4CAF50" d="M24 44c5 0 9.5-1.9 12.9-5l-5.9-5C28.9 35.5 26.6 36 24 36c-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44Z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l5.9 5C40.3 35.7 44 30.3 44 24c0-1.3-.1-2.4-.4-3.5Z"/>
  </svg>
);

export default function Reviews() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <motion.div {...fadeUp} className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Receipts from Deoghar</p>
            <h2 className="section-title mt-3">
              The <em>verdict's</em> in.
            </h2>
            <p className="mt-5 text-bone/70">
              Don't take our word for it. Take theirs.
            </p>
          </div>

          <a
            href={SITE.links.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-saffron-400/20 bg-ink-900/60 p-4 backdrop-blur transition hover:border-saffron-400/50"
          >
            <GoogleG className="h-9 w-9" />
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl text-bone">{RATING.average}</span>
                <Stars rating={RATING.average} size={14} />
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-bone/55">
                {RATING.count} reviews · {RATING.source}
              </div>
            </div>
            <ExternalLink size={14} className="text-saffron-300 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div {...stagger(0.06, 0.08)} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={`${r.name}-${i}`}
              variants={child}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-saffron-400/15 bg-ink-900/70 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-saffron-400/40"
            >
              <Quote className="absolute right-6 top-6 text-saffron-400/20" size={36} strokeWidth={1.5} />

              <Stars rating={r.rating} size={14} />

              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-bone/85">
                "{r.text}"
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-saffron-400/10 pt-5">
                <Avatar initials={r.initials} />
                <div className="min-w-0 flex-1 leading-tight">
                  <div className="truncate font-medium text-bone">{r.name}</div>
                  {r.badge && (
                    <div className="mt-0.5 truncate text-[10px] uppercase tracking-[0.18em] text-saffron-400/70">
                      {r.badge}
                    </div>
                  )}
                  <div className="mt-1 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-bone/45">
                    <GoogleG className="h-3 w-3" />
                    <span>{r.date || 'On Google'}</span>
                  </div>
                </div>
              </figcaption>

              <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-saffron-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </motion.div>

        <motion.div {...fadeUp} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.links.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Read all reviews on Google <ExternalLink size={14} />
          </a>
          <a
            href={SITE.links.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Leave us a review →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Avatar({ initials }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-saffron-400/30 bg-gradient-to-br from-saffron-400/20 to-ember-500/15 font-display text-sm tracking-wider text-saffron-200">
      {initials}
    </div>
  );
}
