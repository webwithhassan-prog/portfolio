import { useEffect, useState } from 'react';

const MIN_VISIBLE_MS = 700;
const FADE_MS = 550;

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const start = Date.now();
    document.documentElement.classList.add('preloading');

    let waitTimeoutId;
    let fadeTimeoutId;

    const dismiss = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);

      waitTimeoutId = window.setTimeout(() => {
        document.documentElement.classList.remove('preloading');

        if (reduceMotion) {
          setMounted(false);
          return;
        }

        setLeaving(true);
        fadeTimeoutId = window.setTimeout(() => setMounted(false), FADE_MS);
      }, wait);
    };

    if (document.readyState === 'complete') {
      dismiss();
    } else {
      window.addEventListener('load', dismiss, { once: true });
    }

    return () => {
      window.removeEventListener('load', dismiss);
      window.clearTimeout(waitTimeoutId);
      window.clearTimeout(fadeTimeoutId);
      document.documentElement.classList.remove('preloading');
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-bg transition-opacity ease-out"
      style={{ transitionDuration: `${FADE_MS}ms`, opacity: leaving ? 0 : 1 }}
    >
      <span className="preloader-dot h-2.5 w-2.5 rounded-full bg-accent" />
      <span className="font-serif text-lg font-bold tracking-[0.3em] text-text-h">
        HASSAN<span className="text-accent">.</span>
      </span>
      <style>{`
        .preloading { overflow: hidden; }
        .preloader-dot {
          animation: preloader-pulse 1.1s ease-in-out infinite;
        }
        @keyframes preloader-pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          .preloader-dot { animation: none; }
        }
      `}</style>
    </div>
  );
}
