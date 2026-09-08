import { ExternalLinkIcon } from './icons';
import './Projects.css';

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
    <section id="projects">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="section-heading">Things I've built</h2>
        <p className="section-sub">
          Live, production websites I designed and developed end to end —
          from database to deployment.
        </p>

        <div className="projects-grid">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-card-head">
                <h3>{p.name}</h3>
                <ExternalLinkIcon className="project-link-icon" />
              </div>
              <p className="project-domain">{p.domain}</p>
              <p className="project-desc">{p.description}</p>
              <ul className="project-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
