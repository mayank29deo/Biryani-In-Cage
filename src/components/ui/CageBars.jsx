import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

// Vertical "cage bars" — glossy black bars used as decoration over hero
// and section dividers. `count` controls how many bars; `interactive`
// enables the open/close animation triggered by the parent state.

const Bar = ({ delay = 0, gloss = true }) => (
  <div
    className={cn(
      'relative h-full w-[6px] rounded-full bg-gradient-to-b from-ink-800 via-ink-950 to-ink-800',
      gloss && 'shadow-[0_0_12px_rgba(0,0,0,0.7),inset_-1px_0_0_rgba(255,255,255,0.08)]',
    )}
    style={{ animationDelay: `${delay}s` }}
  >
    {gloss && (
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-transparent to-white/10" />
    )}
  </div>
);

export default function CageBars({
  count = 14,
  className,
  open = false,
  splitFromCenter = true,
}) {
  const half = Math.ceil(count / 2);
  const left = Array.from({ length: half });
  const right = Array.from({ length: count - half });

  if (splitFromCenter) {
    return (
      <div className={cn('pointer-events-none absolute inset-0 flex', className)}>
        <motion.div
          aria-hidden
          className="flex h-full w-1/2 justify-around pr-1"
          initial={{ x: 0 }}
          animate={open ? { x: '-105%' } : { x: 0 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
        >
          {left.map((_, i) => (
            <Bar key={`l-${i}`} delay={i * 0.05} />
          ))}
        </motion.div>
        <motion.div
          aria-hidden
          className="flex h-full w-1/2 justify-around pl-1"
          initial={{ x: 0 }}
          animate={open ? { x: '105%' } : { x: 0 }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
        >
          {right.map((_, i) => (
            <Bar key={`r-${i}`} delay={i * 0.05} />
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className={cn('pointer-events-none absolute inset-0 flex justify-around', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Bar key={i} delay={i * 0.05} />
      ))}
    </div>
  );
}
