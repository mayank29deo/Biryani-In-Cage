import { cn } from '@/utils/cn';

// Endless horizontal marquee. The track is duplicated so the CSS
// keyframe scroll-50% creates a seamless loop.

export default function MarqueeStrip({ items, className, separator = '✦' }) {
  const track = (
    <div className="flex shrink-0 items-center gap-10 px-6">
      {items.map((it, i) => (
        <span
          key={i}
          className="font-display whitespace-nowrap text-saffron-200 text-sm sm:text-base tracking-[0.2em] uppercase"
        >
          {it}
          <span className="ml-10 text-saffron-400/60">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        'mask-fade-x relative flex w-full overflow-hidden border-y border-saffron-400/20 bg-ink-900/80 py-3',
        className,
      )}
    >
      <div className="flex animate-marquee">
        {track}
        {track}
      </div>
    </div>
  );
}
