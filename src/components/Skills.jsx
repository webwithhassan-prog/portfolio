import { eyebrow, sectionHeading, sectionSub, card } from './classNames';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs'],
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
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="container-narrow">
        <p className={eyebrow}>Skills</p>
        <h2 className={sectionHeading}>Technologies I work with</h2>
        <p className={sectionSub}>
          A snapshot of the stack I use to design, build and ship full stack
          web applications.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className={`${card} p-6 hover:-translate-y-1`}>
              <h3 className="mb-4 font-sans text-base font-semibold text-text-h">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-accent-soft px-3 py-1.5 text-[13px] font-medium text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
