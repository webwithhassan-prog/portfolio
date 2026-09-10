import { ExternalLinkIcon } from './icons';
import { eyebrow, sectionHeading, sectionSub, card } from './classNames';
import Reveal from './Reveal';

const projects = [
  {
    name: 'RG Tour & Travels',
    url: 'https://rgtravels.pk',
    domain: 'rgtravels.pk',
    image: '/projects/rgtravels.jpg',
    tag: 'Hajj & Umrah Travel Agency',
    role: 'Solo developer, end to end',
    summary:
      'A marketing and package-comparison site for a licensed Hajj & Umrah travel agency — maktabs, hotel tiers and live PKR pricing at a glance, backed by testimonials and blog content to earn a high-value booking decision.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    name: 'Fitness Zone',
    url: 'https://fitnesszone.ltd',
    domain: 'fitnesszone.ltd',
    image: '/projects/fitnesszone.jpg',
    tag: "Women's Wellness Platform",
    role: 'Solo developer, end to end',
    summary:
      "A membership platform for a UK-registered women's health company, replacing scattered WhatsApp groups with one dashboard for diet plans and Zoom-hosted live sessions. Stripe powers checkout and subscription billing across both service paths.",
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Zoom API'],
  },
];

export default function Projects() {
  return (
    <section id="projects" tabIndex={-1} className="py-24 outline-none sm:py-28">
      <div className="container-narrow">
        <Reveal as="div">
          <p className={eyebrow}>Projects</p>
          <h2 className={sectionHeading}>Things I've built</h2>
          <p className={sectionSub}>
            Live, production websites I designed and developed end to end —
            from database to deployment.
          </p>
        </Reveal>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className={`${card} grid grid-cols-1 overflow-hidden sm:grid-cols-[220px_1fr]`}
            >
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={p.image}
                  alt={`Screenshot of the ${p.name} homepage`}
                  width={1200}
                  height={844}
                  className="aspect-[16/10] h-full w-full border-b border-border object-cover object-top sm:border-b-0 sm:border-r"
                  loading="lazy"
                />
              </a>

              <div className="p-6 sm:p-7">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                  {p.tag}
                </p>

                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-serif text-xl font-bold text-text-h">{p.name}</h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[13px] text-accent hover:underline"
                  >
                    {p.domain} <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="mb-3 text-xs font-medium text-text-dim">{p.role}</p>

                <p className="mb-4 max-w-[560px] text-sm leading-relaxed text-text">
                  {p.summary}
                </p>

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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
