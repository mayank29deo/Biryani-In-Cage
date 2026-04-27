import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

// Neon-glow text styled like the restaurant's actual signage.
// `flicker` adds a subtle, occasional flicker like a real neon tube.

export default function NeonText({
  as: Tag = 'span',
  children,
  className,
  flicker = true,
  intensity = 'high',
}) {
  return (
    <Tag
      className={cn(
        'neon-text font-display',
        flicker && 'animate-flicker',
        intensity === 'low' && 'opacity-90',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

// Animated entrance for the wordmark — used on hero
export function NeonWordmark({ className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex flex-col items-center', className)}
    >
      <span className="font-hindi text-3xl sm:text-5xl lg:text-6xl neon-text leading-none">
        बिरयानी
      </span>
      <span className="font-display italic text-5xl sm:text-7xl lg:text-9xl neon-text leading-[0.95] mt-1">
        In Cage
      </span>
    </motion.div>
  );
}
