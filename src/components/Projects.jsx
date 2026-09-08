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
    role: 'Solo developer — built end to end, from content structure to deployment',
    summary:
      "A marketing and package-comparison site for a licensed Hajj & Umrah travel agency. Pilgrimage packages involve a lot of interlocking detail — maktab, hotel tier, room occupancy, live pricing — and the site needed to make that scannable at a glance while building the trust a high-value, once-in-a-lifetime booking decision requires.",
    features: [
      'Package comparison across multiple maktabs and tiers (Silver → Platinum) with live PKR pricing',
      'Testimonials, blog and certifications sections to establish trust',
      'Direct WhatsApp and social integration for fast contact',
      'Fully responsive, mobile-first layout',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    name: 'Fitness Zone',
    url: 'https://fitnesszone.ltd',
    domain: 'fitnesszone.ltd',
    image: '/projects/fitnesszone.jpg',
    tag: "Women's Wellness Platform",
    role: 'Solo developer — built end to end, from auth to deployment',
    summary:
      'A membership platform for a UK-registered women\'s health company, replacing scattered WhatsApp groups with one dashboard. Members sign up and choose from three service types — self-paced diet plans, scheduled live workout classes, and bookable 1-on-1 consultations with specialists — all under one account.',
    features: [
      'Authentication and a member dashboard for a global, remote-first audience',
      'Three distinct service paths (diet plans, live sessions, consultations) in one coherent flow',
      'Scheduling for live classes and 1-on-1 specialist bookings',
      'Session demos and success-story sections to build member confidence',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
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
            <Reveal key={p.name} delay={i * 100} className={`${card} overflow-hidden`}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={p.image}
                  alt={`Screenshot of the ${p.name} homepage`}
                  width={1200}
                  height={844}
                  className="h-auto w-full border-b border-border object-cover object-top"
                  loading="lazy"
                />
              </a>

              <div className="p-7 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">
                  {p.tag}
                </p>

                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-2xl font-bold text-text-h">{p.name}</h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[13px] text-accent hover:underline"
                  >
                    {p.domain} <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="mb-4 text-[13px] font-medium text-text-dim">{p.role}</p>

                <p className="mb-5 max-w-[640px] text-[15px] leading-[1.75] text-text">
                  {p.summary}
                </p>

                <ul className="mb-6 flex flex-col gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[14px] leading-[1.6] text-text-dim">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

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
