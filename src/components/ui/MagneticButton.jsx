import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/utils/cn';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

// Cursor-magnetic button. Gently follows pointer for a tactile feel on
// desktop. Falls back to plain on mobile and when reduced motion is on.

export default function MagneticButton({
  children,
  className,
  strength = 0.25,
  as = 'button',
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const reduced = usePrefersReducedMotion();

  const handleMove = (e) => {
    if (reduced) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = motion[as] || motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
