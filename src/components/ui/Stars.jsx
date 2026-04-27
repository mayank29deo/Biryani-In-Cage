import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';

// Renders a 5-star rating. Filled stars use the saffron neon. Supports
// half stars by passing a fractional value (e.g. 4.5).

export default function Stars({ rating = 5, size = 14, className }) {
  return (
    <div className={cn('inline-flex items-center gap-0.5', className)} aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i)); // 0..1
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star
              size={size}
              className="absolute inset-0 text-saffron-400/30"
              strokeWidth={1.5}
            />
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  size={size}
                  className="text-saffron-400 fill-saffron-400 drop-shadow-[0_0_4px_rgba(245,184,0,0.5)]"
                  strokeWidth={1.5}
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
