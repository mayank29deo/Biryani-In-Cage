import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { SITE, NAV } from '@/data/site';

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-saffron-400/15 bg-ink-900/80">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-saffron-400/60 to-transparent" />

      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl text-bone">
              Biryani <span className="italic text-saffron-300">In Cage</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-bone/70 leading-relaxed">
              {SITE.shortPitch}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-saffron-400/30 text-saffron-200 transition hover:border-saffron-400 hover:text-saffron-100"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="section-eyebrow">Explore</h4>
            <ul className="mt-4 space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-bone/80 hover:text-saffron-200">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-eyebrow">Order</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={SITE.links.zomato} target="_blank" rel="noopener noreferrer" className="text-bone/80 hover:text-saffron-200">
                  Order on Zomato
                </a>
              </li>
              <li>
                <a href={SITE.links.swiggy} target="_blank" rel="noopener noreferrer" className="text-bone/80 hover:text-saffron-200">
                  Order on Swiggy
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s+/g, '')}`} className="text-bone/80 hover:text-saffron-200">
                  Call to dine-in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-eyebrow">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-bone/80">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-saffron-400" />
                <a
                  href={SITE.links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-saffron-200"
                >
                  {SITE.address}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 text-saffron-400" />
                <a href={`tel:${SITE.phone.replace(/\s+/g, '')}`} className="hover:text-saffron-200">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 text-saffron-400" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-saffron-400/10 pt-6 text-xs text-bone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="font-display tracking-[0.3em] uppercase text-saffron-400/60">
            Caged in flavour · Deoghar
          </p>
        </div>
      </div>
    </footer>
  );
}
