import { eyebrow, sectionHeading, sectionSub, card } from './classNames';
import Reveal from './Reveal';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'Stripe API', 'Zoom API'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'PHP', 'C++'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Vite'],
  },
  {
    title: 'Currently Learning',
    skills: ['Python', 'Django', 'Django REST Framework'],
    learning: true,
  },
];

export default function Skills() {
  return (
    <section id="skills" tabIndex={-1} className="py-24 outline-none sm:py-28">
      <div className="container-narrow">
        <Reveal as="div">
          <p className={eyebrow}>Skills</p>
          <h2 className={sectionHeading}>Technologies I work with</h2>
          <p className={sectionSub}>
            A snapshot of the stack I use to design, build and ship full stack
            web applications.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className={`${card} p-6 hover:-translate-y-1`}>
                <h3 className="mb-4 flex items-center gap-2 font-sans text-base font-semibold text-text-h">
                  {group.title}
                  {group.learning && (
                    <span className="rounded-full border border-accent/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                      In progress
                    </span>
                  )}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className={
                        group.learning
                          ? 'rounded-full border border-dashed border-accent/50 px-3 py-1.5 text-[13px] font-medium text-accent'
                          : 'rounded-full bg-accent-soft px-3 py-1.5 text-[13px] font-medium text-accent'
                      }
                    >
                      {s}
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
