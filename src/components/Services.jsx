import { CodeIcon, PlugIcon, BriefcaseIcon, SupportIcon } from './icons';
import { eyebrow, sectionHeading, sectionSub, card } from './classNames';
import Reveal from './Reveal';

const services = [
  {
    icon: CodeIcon,
    title: 'Full-Stack Web Applications',
    description:
      'End-to-end builds on the MERN stack or PHP — database schema, backend APIs and a polished frontend, shipped to production.',
  },
  {
    icon: PlugIcon,
    title: 'Payment & API Integrations',
    description:
      'Stripe checkout and subscriptions, Zoom API, and other third-party services wired in and tested in a live product.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Business & Marketing Sites',
    description:
      'Conversion-focused sites for real businesses — package comparisons, testimonials, WhatsApp integration, mobile-first.',
  },
  {
    icon: SupportIcon,
    title: 'Maintenance & Feature Work',
    description:
      "Bug fixes, new features and ongoing support for existing sites — happy to work inside a codebase that isn't mine.",
  },
];

export default function Services() {
  return (
    <section id="services" tabIndex={-1} className="py-24 outline-none sm:py-28">
      <div className="container-narrow">
        <Reveal as="div">
          <p className={eyebrow}>Services</p>
          <h2 className={sectionHeading}>What I can build for you</h2>
          <p className={sectionSub}>
            Freelance and contract work, from a first prototype to a production-ready product.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="h-full">
              <div className={`${card} flex h-full gap-4 p-6`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1.5 text-base font-semibold text-text-h">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-text-dim">{s.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
