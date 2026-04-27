import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export default function MenuToolbar({
  query,
  onQuery,
  vegOnly,
  onVeg,
}) {
  return (
    <div className="sticky top-[68px] z-30 border-y border-saffron-400/10 bg-ink-950/85 py-3 backdrop-blur-md">
      <div className="container-x flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron-400/70" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search biryani, paneer, noodles…"
            className="w-full rounded-full border border-saffron-400/20 bg-ink-900/70 py-2.5 pl-10 pr-9 text-sm text-bone placeholder:text-bone/40 outline-none transition focus:border-saffron-400/60 focus:shadow-neon-soft"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-bone/50 hover:text-bone"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <VegToggle vegOnly={vegOnly} onChange={onVeg} />
      </div>
    </div>
  );
}

function VegToggle({ vegOnly, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!vegOnly)}
      aria-pressed={vegOnly}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition',
        vegOnly
          ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-200'
          : 'border-saffron-400/20 bg-ink-900/70 text-bone/70 hover:text-bone',
      )}
    >
      <span className="relative h-4 w-7 rounded-full bg-ink-800/80 ring-1 ring-inset ring-saffron-400/15">
        <motion.span
          animate={{ x: vegOnly ? 12 : 0, backgroundColor: vegOnly ? '#10B981' : '#FFC628' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full"
        />
      </span>
      Veg only
    </button>
  );
}
