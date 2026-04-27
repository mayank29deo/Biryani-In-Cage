import { motion } from 'framer-motion';
import { Phone, ExternalLink } from 'lucide-react';
import { SITE } from '@/data/site';
import { fadeUp } from '@/utils/motion';

const ZomatoCard = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-[#E23744]/30 bg-gradient-to-br from-[#E23744]/15 via-ink-900 to-ink-950 p-8 transition-all hover:-translate-y-1 hover:border-[#E23744]/70"
  >
    <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#E23744]/30 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-90" />
    <div className="relative">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#E23744] px-3 py-1 font-display text-xs uppercase tracking-[0.3em] text-white">
          Zomato
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-saffron-400">#1 Biryani</span>
      </div>
      <h3 className="mt-6 font-display text-3xl text-bone">Order on Zomato</h3>
      <p className="mt-3 max-w-sm text-sm text-bone/70">
        Tap straight through to our Zomato page. Fastest checkout, full menu.
      </p>
    </div>
    <div className="mt-10 inline-flex items-center gap-2 font-display text-sm tracking-wider text-bone/85">
      Open Zomato <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
    </div>
  </a>
);

const SwiggyCard = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-[#F26722]/30 bg-gradient-to-br from-[#F26722]/15 via-ink-900 to-ink-950 p-8 transition-all hover:-translate-y-1 hover:border-[#F26722]/70"
  >
    <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#F26722]/30 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-90" />
    <div className="relative">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#F26722] px-3 py-1 font-display text-xs uppercase tracking-[0.3em] text-white">
          Swiggy
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-saffron-400">#2 Biryani</span>
      </div>
      <h3 className="mt-6 font-display text-3xl text-bone">Order on Swiggy</h3>
      <p className="mt-3 max-w-sm text-sm text-bone/70">
        Already on Swiggy? Hop in, your biryani is two taps away.
      </p>
    </div>
    <div className="mt-10 inline-flex items-center gap-2 font-display text-sm tracking-wider text-bone/85">
      Open Swiggy <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
    </div>
  </a>
);

const CallCard = () => (
  <a
    href={`tel:${SITE.phone.replace(/\s+/g, '')}`}
    className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-saffron-400/30 bg-gradient-to-br from-saffron-400/15 via-ink-900 to-ink-950 p-8 transition-all hover:-translate-y-1 hover:border-saffron-400/70"
  >
    <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-saffron-400/30 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-90" />
    <div className="relative">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-saffron-400 px-3 py-1 font-display text-xs uppercase tracking-[0.3em] text-ink-950">
          Call us
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-saffron-400">Direct line</span>
      </div>
      <h3 className="mt-6 font-display text-3xl text-bone">{SITE.phone}</h3>
      <p className="mt-3 max-w-sm text-sm text-bone/70">
        Bulk orders, party catering, table reservations — talk to us. We pick up.
      </p>
    </div>
    <div className="mt-10 inline-flex items-center gap-2 font-display text-sm tracking-wider text-bone/85">
      Call now <Phone size={14} className="transition-transform group-hover:rotate-12" />
    </div>
  </a>
);

export default function OrderCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Three taps to your biryani</p>
          <h2 className="section-title mt-3">
            Pick your <em>poison</em>.
          </h2>
          <p className="mt-5 text-bone/70">
            Whichever app you live on, we're already there.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <ZomatoCard href={SITE.links.zomato} />
          <SwiggyCard href={SITE.links.swiggy} />
          <CallCard />
        </div>
      </div>
    </section>
  );
}
