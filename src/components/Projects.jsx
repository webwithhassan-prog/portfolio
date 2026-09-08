import { ExternalLinkIcon } from './icons';
import { eyebrow, sectionHeading, sectionSub, card } from './classNames';

const projects = [
  {
    name: 'RG Travels',
    url: 'https://rgtravels.pk',
    domain: 'rgtravels.pk',
    description:
      'A travel & tour booking platform built end to end — package listings, booking flow and an admin-managed content system, designed to convert visitors into inquiries.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    name: 'Fitness Zone',
    url: 'https://fitnesszone.ltd',
    domain: 'fitnesszone.ltd',
    description:
      'A gym & fitness website showcasing memberships, classes and trainers, with a responsive UI built to drive membership sign-ups.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="container-narrow">
        <p className={eyebrow}>Projects</p>
        <h2 className={sectionHeading}>Things I've built</h2>
        <p className={sectionSub}>
          Live, production websites I designed and developed end to end —
          from database to deployment.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${card} block p-7 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgb(0_0_0_/_0.4)]`}
            >
              <div className="mb-1 flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-text-h">{p.name}</h3>
                <ExternalLinkIcon className="text-text-dim" />
              </div>
              <p className="mb-4 font-mono text-[13px] text-accent">{p.domain}</p>
              <p className="mb-5 text-[14.5px] leading-[1.7] text-text-dim">{p.description}</p>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-bg-alt px-2.5 py-[5px] text-xs font-semibold text-text"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
