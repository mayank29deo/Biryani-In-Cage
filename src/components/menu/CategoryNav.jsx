import { useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

// Horizontal pill list of categories. Active category auto-scrolls into view.

export default function CategoryNav({ categories, active, onChange }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current?.querySelector(`[data-cat="${active}"]`);
    if (el) el.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [active]);

  return (
    <div className="mask-fade-x -mx-5 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div ref={containerRef} className="flex items-center gap-2 py-4">
        {categories.map((c) => (
          <button
            key={c.id}
            data-cat={c.id}
            onClick={() => onChange(c.id)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition',
              active === c.id
                ? 'border-saffron-400 bg-saffron-400 text-ink-950 shadow-neon-soft'
                : 'border-saffron-400/20 bg-ink-900/60 text-bone/75 hover:border-saffron-400/50 hover:text-bone',
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
