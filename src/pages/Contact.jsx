import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { SITE } from '@/data/site';
import ContactForm from '@/components/contact/ContactForm';
import { fadeUp } from '@/utils/motion';

export default function ContactPage() {
  return (
    <main className="pb-32 pt-[88px]">
      <section className="container-x py-16 sm:py-20">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="section-eyebrow">Reach the cage</p>
          <h1 className="section-title mt-3">
            Drop us a <em>line</em>.
          </h1>
          <p className="mt-5 text-bone/70">
            Reservations, bulk orders, party catering, or just a hello. We answer fast.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-4"
          >
            <InfoTile
              icon={<Phone size={16} />}
              title="Call us directly"
              body={SITE.phone}
              href={`tel:${SITE.phone.replace(/\s+/g, '')}`}
              cta="Call now"
            />
            <InfoTile
              icon={<MapPin size={16} />}
              title="Visit"
              body={SITE.address}
              href={SITE.links.maps}
              cta="Open in Maps"
              external
            />
            <InfoTile
              icon={<Clock size={16} />}
              title="Hours"
              body={SITE.hours}
            />
            <InfoTile
              icon={<Instagram size={16} />}
              title="Follow"
              body="@biryaniincage"
              href={SITE.links.instagram}
              cta="Open Instagram"
              external
            />
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

function InfoTile({ icon, title, body, href, cta, external }) {
  const inner = (
    <div className="glass-card flex items-start gap-4 p-5 transition hover:border-saffron-400/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-saffron-400/30 bg-saffron-400/10 text-saffron-300">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-[11px] uppercase tracking-[0.25em] text-saffron-400/70">{title}</p>
        <p className="mt-1 text-sm text-bone">{body}</p>
        {cta && href && (
          <p className="mt-2 text-xs text-saffron-300">{cta} →</p>
        )}
      </div>
    </div>
  );
  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}
