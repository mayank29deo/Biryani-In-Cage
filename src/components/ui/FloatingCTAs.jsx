import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ChefHat } from 'lucide-react';
import { SITE } from '@/data/site';

// Persistent conversion stack. On mobile this becomes a horizontal pill
// pinned bottom-center. On desktop it docks to the right edge.
// Tracks: Call, Zomato, Swiggy.

const ZomatoIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M5.5 11.5c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6Zm6-3a3 3 0 1 0 .001 6.001A3 3 0 0 0 11.5 8.5Z"/>
  </svg>
);

const SwiggyIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 2c4.97 0 9 3.58 9 8 0 5.5-9 12-9 12S3 15.5 3 10c0-4.42 4.03-8 9-8Zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
  </svg>
);

export default function FloatingCTAs() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [40, 0]);
  const opacity = useTransform(scrollY, [0, 150], [0, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:bottom-auto md:inset-x-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:flex-col md:gap-3"
    >
      <div className="flex items-center gap-2 rounded-full border border-saffron-400/30 bg-ink-900/85 p-1.5 shadow-plate backdrop-blur-md md:flex-col md:rounded-3xl md:p-2">
        <CtaButton
          href={`tel:${SITE.phone.replace(/\s+/g, '')}`}
          aria-label={`Call ${SITE.name}`}
          color="bg-saffron-400 text-ink-950"
          glow="shadow-neon-soft hover:shadow-neon"
          icon={<Phone size={18} strokeWidth={2.5} />}
          label="Call"
        />
        <CtaButton
          href={SITE.links.zomato}
          aria-label="Order on Zomato"
          color="bg-[#E23744] text-white"
          glow="shadow-[0_0_18px_rgba(226,55,68,0.45)]"
          icon={<ZomatoIcon className="h-[18px] w-[18px]" />}
          label="Zomato"
        />
        <CtaButton
          href={SITE.links.swiggy}
          aria-label="Order on Swiggy"
          color="bg-[#F26722] text-white"
          glow="shadow-[0_0_18px_rgba(242,103,34,0.45)]"
          icon={<SwiggyIcon className="h-[18px] w-[18px]" />}
          label="Swiggy"
        />
        <div className="ml-1 hidden items-center gap-1 px-2 md:flex md:flex-col md:py-2">
          <ChefHat size={14} className="text-saffron-400/70" />
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-saffron-300/60 [writing-mode:vertical-rl]">
            Order
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function CtaButton({ href, icon, label, color, glow, ...rest }) {
  return (
    <motion.a
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`group inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-all md:px-3 md:py-2.5 ${color} ${glow}`}
      {...rest}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}
