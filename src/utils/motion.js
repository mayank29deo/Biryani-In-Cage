// Motion presets used across the site so animation feels consistent.

export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeInOut = [0.65, 0, 0.35, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: easeOutExpo },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: easeOutExpo },
};

export const stagger = (delayChildren = 0.1, staggerChildren = 0.08) => ({
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true, margin: '-80px' },
  variants: {
    initial: {},
    animate: {
      transition: { delayChildren, staggerChildren },
    },
  },
});

export const child = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: easeOutExpo },
};
