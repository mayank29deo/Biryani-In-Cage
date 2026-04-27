import { motion } from 'framer-motion';
import VegBadge from '@/components/ui/VegBadge';
import { Star } from 'lucide-react';

export default function MenuItemCard({ item }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="menu-card flex flex-col"
    >
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="mt-1.5">
            <VegBadge veg={item.veg} />
          </div>
          <div>
            <h3 className="font-display text-lg leading-tight text-bone">
              {item.name}
            </h3>
            {item.popular && (
              <span className="mt-1.5 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-saffron-300">
                <Star size={10} className="fill-saffron-400 text-saffron-400" /> Bestseller
              </span>
            )}
          </div>
        </div>
        <PriceBlock price={item.price} priceHalf={item.priceHalf} />
      </header>

      {item.desc && (
        <p className="mt-3 text-sm leading-relaxed text-bone/70">{item.desc}</p>
      )}
    </motion.article>
  );
}

function PriceBlock({ price, priceHalf }) {
  if (priceHalf) {
    return (
      <div className="text-right shrink-0">
        <div className="price-tag text-base">₹{priceHalf} <span className="text-[10px] uppercase tracking-widest text-bone/50">half</span></div>
        <div className="price-tag text-lg">₹{price} <span className="text-[10px] uppercase tracking-widest text-bone/50">full</span></div>
      </div>
    );
  }
  return <div className="price-tag text-xl shrink-0">₹{price}</div>;
}
