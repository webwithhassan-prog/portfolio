import { eyebrow, sectionHeading } from './classNames';

const facts = [
  { label: 'Based in', value: 'Lahore, Pakistan' },
  { label: 'Studying', value: 'BSCS (in progress)' },
  { label: 'Focus', value: 'MERN & PHP web apps' },
  { label: 'Projects shipped', value: '2 live sites' },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="container-narrow">
        <p className={eyebrow}>About Me</p>
        <h2 className={sectionHeading}>A bit about my journey</h2>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <p className="text-[16px] leading-[1.8] text-text">
            I'm a Computer Science undergraduate (BSCS) based in Lahore,
            Pakistan, currently focused on full stack web development. I work
            across the MERN stack (MongoDB, Express, React, Node.js) and PHP,
            with a C++ foundation from my coursework in data structures and
            algorithms.
            <br />
            <br />
            I've independently built and shipped two production websites —{' '}
            <strong className="text-text-h">rgtravels.pk</strong>, a travel booking platform, and{' '}
            <strong className="text-text-h">fitnesszone.ltd</strong>, a fitness &amp; gym website —
            handling everything from database design to frontend UI to
            deployment. I enjoy turning real business requirements into
            clean, working products.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex flex-col gap-1.5 rounded-[10px] border border-border bg-surface p-[18px]"
              >
                <span className="text-xs uppercase tracking-wide text-text-dim">{f.label}</span>
                <span className="text-[15px] font-semibold text-text-h">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
