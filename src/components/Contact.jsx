import { MailIcon, GithubIcon, LinkedinIcon, MapPinIcon } from './icons';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-inner">
        <p className="eyebrow">Contact</p>
        <h2 className="section-heading">Let's build something together</h2>
        <p className="section-sub">
          I'm open to freelance projects, internships and full stack roles.
          Feel free to reach out — I usually reply within a day.
        </p>

        <div className="contact-grid">
          <a className="contact-item" href="mailto:hello@hassanarslan.dev">
            <MailIcon />
            <div>
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">hello@hassanarslan.dev</span>
            </div>
          </a>
          <a className="contact-item" href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            <div>
              <span className="contact-item-label">GitHub</span>
              <span className="contact-item-value">github.com/your-username</span>
            </div>
          </a>
          <a className="contact-item" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
            <div>
              <span className="contact-item-label">LinkedIn</span>
              <span className="contact-item-value">linkedin.com/in/your-profile</span>
            </div>
          </a>
          <div className="contact-item">
            <MapPinIcon />
            <div>
              <span className="contact-item-label">Location</span>
              <span className="contact-item-value">Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        <a href="mailto:hello@hassanarslan.dev" className="btn btn-primary contact-cta">
          Say Hello
        </a>
      </div>
    </section>
  );
}
