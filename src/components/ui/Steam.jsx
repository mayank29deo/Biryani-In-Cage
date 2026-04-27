import { motion } from 'framer-motion';

// Wisps of steam rising. Used decoratively over biryani imagery.
// Pure CSS particles — no canvas, cheap to render.

export default function Steam({ count = 6, className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const left = 10 + (i * (80 / count)) + (i % 2 ? 4 : -4);
        const delay = (i * 0.6) % 5;
        const size = 38 + (i * 7) % 20;
        return (
          <motion.span
            key={i}
            className="absolute bottom-0 rounded-full bg-bone/30 blur-2xl"
            style={{ left: `${left}%`, width: size, height: size }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-10, -160, -200],
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.4, 1.7],
            }}
            transition={{
              duration: 5 + (i % 3),
              delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        );
      })}
    </div>
  );
}
