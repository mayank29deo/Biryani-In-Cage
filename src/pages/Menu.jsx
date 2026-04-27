import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CATEGORIES, MENU } from '@/data/menu';
import MenuItemCard from '@/components/menu/MenuItemCard';
import MenuToolbar from '@/components/menu/MenuToolbar';
import CategoryNav from '@/components/menu/CategoryNav';
import { fadeUp } from '@/utils/motion';
import { Sparkles } from 'lucide-react';

export default function MenuPage() {
  const [query, setQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [active, setActive] = useState(CATEGORIES[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU.filter((m) => {
      if (vegOnly && !m.veg) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        (m.desc && m.desc.toLowerCase().includes(q))
      );
    });
  }, [query, vegOnly]);

  const isSearching = query.trim().length > 0;

  // When the user is searching, render flat results across categories.
  // Otherwise, render the active category section by section.
  const sections = useMemo(() => {
    if (isSearching) {
      return [{ id: 'results', label: `Results for "${query}"`, items: filtered }];
    }
    const inActive = filtered.filter((m) => m.category === active);
    const cat = CATEGORIES.find((c) => c.id === active);
    return cat ? [{ id: cat.id, label: cat.label, blurb: cat.blurb, items: inActive }] : [];
  }, [isSearching, query, filtered, active]);

  return (
    <main className="pb-32 pt-[88px]">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-saffron-400/5 to-transparent" />
        <div className="container-x relative py-16 sm:py-20">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="section-eyebrow">The full card</p>
            <h1 className="section-title mt-3">
              <em>Menu</em>.
            </h1>
            <p className="mt-5 text-bone/70">
              Biryani, multicuisine veg & non-veg, Indo-Chinese — every plate we serve, with prices.
              Search, filter, or jump to a section.
            </p>
          </motion.div>
        </div>
      </section>

      <MenuToolbar
        query={query}
        onQuery={setQuery}
        vegOnly={vegOnly}
        onVeg={setVegOnly}
      />

      {!isSearching && (
        <div className="container-x">
          <CategoryNav categories={CATEGORIES} active={active} onChange={setActive} />
        </div>
      )}

      <div className="container-x mt-6">
        <AnimatePresence mode="wait">
          {sections.map((s) => (
            <motion.section
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <header className="mb-6 mt-2 flex items-end justify-between">
                <div>
                  <h2 className="font-display text-2xl text-bone sm:text-3xl">{s.label}</h2>
                  {s.blurb && <p className="mt-1 text-sm text-bone/60">{s.blurb}</p>}
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-saffron-400/70">
                  {s.items.length} {s.items.length === 1 ? 'item' : 'items'}
                </span>
              </header>

              {s.items.length === 0 ? (
                <EmptyState />
              ) : (
                <motion.div layout className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <AnimatePresence>
                    {s.items.map((m) => (
                      <MenuItemCard key={m.id} item={m} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-saffron-400/15 bg-ink-900/50 p-12 text-center">
      <Sparkles className="mx-auto text-saffron-400" size={22} />
      <p className="mt-4 font-display text-xl text-bone">Nothing matches that.</p>
      <p className="mt-2 text-sm text-bone/60">Try another keyword, or clear the filters.</p>
    </div>
  );
}
