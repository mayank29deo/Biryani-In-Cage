import { motion } from 'framer-motion';
import { GALLERY } from '@/data/gallery';
import { fadeUp } from '@/utils/motion';

// Bento-style grid showing the actual restaurant interior. The first
// photo spans 2 columns / 2 rows to anchor the layout.

export default function Gallery() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <motion.div {...fadeUp} className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="section-eyebrow">Inside the Cage</p>
            <h2 className="section-title mt-3">
              The <em>place</em> people Instagram before they eat.
            </h2>
          </div>
          <p className="max-w-md text-sm text-bone/70">
            Cage booths, neon, brick walls, floral entrance. Built for the photo, kept for the food.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:[grid-auto-rows:240px]">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={g.src}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={[
                'group relative overflow-hidden rounded-3xl border border-saffron-400/10 bg-ink-900',
                i === 0 ? 'col-span-2 row-span-2 lg:row-span-2' : '',
                i === 3 ? 'lg:col-span-2' : '',
              ].join(' ')}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-sm tracking-wide text-saffron-200/90 sm:text-base">
                  {g.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
