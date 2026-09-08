import './About.css';

const facts = [
  { label: 'Based in', value: 'Lahore, Pakistan' },
  { label: 'Studying', value: 'BSCS (in progress)' },
  { label: 'Focus', value: 'MERN & PHP web apps' },
  { label: 'Projects shipped', value: '2 live sites' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="eyebrow">About Me</p>
        <h2 className="section-heading">A bit about my journey</h2>
        <div className="about-grid">
          <p className="about-text">
            I'm a Computer Science undergraduate (BSCS) based in Lahore,
            Pakistan, currently focused on full stack web development. I work
            across the MERN stack (MongoDB, Express, React, Node.js) and PHP,
            with a C++ foundation from my coursework in data structures and
            algorithms.
            <br />
            <br />
            I've independently built and shipped two production websites —{' '}
            <strong>rgtravels.pk</strong>, a travel booking platform, and{' '}
            <strong>fitnesszone.ltd</strong>, a fitness & gym website —
            handling everything from database design to frontend UI to
            deployment. I enjoy turning real business requirements into
            clean, working products.
          </p>
          <div className="about-facts">
            {facts.map((f) => (
              <div key={f.label} className="about-fact">
                <span className="about-fact-label">{f.label}</span>
                <span className="about-fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
