import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { SITE } from '@/data/site';
import { fadeUp } from '@/utils/motion';

export default function Locate() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="section-eyebrow">Find the cage</p>
            <h2 className="section-title mt-3">
              Walk in. <em>Sit inside</em>. Order anything.
            </h2>
            <p className="mt-5 max-w-md text-bone/70">
              We're parked in the heart of Deoghar. Easy parking, big windows, and the smell of biryani
              the moment you open the door.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-saffron-400" size={16} />
                <div>
                  <p className="font-medium text-bone">{SITE.address}</p>
                  <a
                    href={SITE.links.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-saffron-300 hover:text-saffron-200"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 text-saffron-400" size={16} />
                <p className="text-bone/85">{SITE.hours}</p>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 text-saffron-400" size={16} />
                <a href={`tel:${SITE.phone.replace(/\s+/g, '')}`} className="text-bone/85 hover:text-saffron-200">
                  {SITE.phone}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Navigation size={15} /> Get Directions
              </a>
              <a href={`tel:${SITE.phone.replace(/\s+/g, '')}`} className="btn-ghost">
                <Phone size={15} /> Call us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-saffron-400/20 bg-ink-900"
          >
            <img
              src="/photos/corridor-cage-booths.jpg"
              alt="Inside Biryani In Cage"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="font-display text-xl text-bone">
                Open · {SITE.hours.split('·')[0]}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-saffron-300/80">
                {SITE.city}, {SITE.state}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
