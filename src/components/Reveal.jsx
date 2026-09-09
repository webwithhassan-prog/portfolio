import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y: 24 });

    const play = () => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: delay / 1000,
        ease: 'power3.out',
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: play,
    });

    // If the element is already within the trigger zone on mount
    // (e.g. above-the-fold content), fire immediately.
    if (trigger.isActive) {
      play();
      trigger.kill();
    }

    return () => {
      trigger.kill();
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
