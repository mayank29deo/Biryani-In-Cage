import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll position when the route changes — keeps page transitions clean.
export default function PageShell({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return children;
}
