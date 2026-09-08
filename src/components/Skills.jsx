import './Skills.css';

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
    <section id="skills">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section-heading">Technologies I work with</h2>
        <p className="section-sub">
          A snapshot of the stack I use to design, build and ship full stack
          web applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <h3 className="skill-card-title">{group.title}</h3>
              <ul className="skill-tags">
                {group.skills.map((s) => (
                  <li key={s} className="skill-tag">
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
