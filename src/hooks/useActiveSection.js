import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const triggers = ids
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) setActive(id);
          },
        });
      })
      .filter(Boolean);

    return () => triggers.forEach((t) => t.kill());
  }, [ids]);

  return active;
}
