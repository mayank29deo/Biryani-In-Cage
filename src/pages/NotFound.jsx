import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CageBars from '@/components/ui/CageBars';

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center pt-[88px]">
      <CageBars count={10} className="opacity-40" splitFromCenter={false} />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="container-x relative text-center"
      >
        <p className="section-eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl text-bone sm:text-7xl">
          You wandered <em className="not-italic neon-text">out of the cage</em>.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-bone/70">
          This page doesn't exist. The biryani still does.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">Take me home</Link>
          <Link to="/menu" className="btn-ghost">Show me food</Link>
        </div>
      </motion.div>
    </main>
  );
}
