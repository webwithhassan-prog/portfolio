import { useState } from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, MapPinIcon } from './icons';
import './Contact.css';

const CONTACT_EMAIL = 'webwithhassan@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <div className="container contact-inner">
        <p className="eyebrow">Contact</p>
        <h2 className="section-heading">Let's build something together</h2>
        <p className="section-sub">
          I'm open to freelance projects, internships and full stack roles.
          Feel free to reach out — I usually reply within a day.
        </p>

        <div className="contact-layout">
          <div className="contact-grid">
            <a className="contact-item" href={`mailto:${CONTACT_EMAIL}`}>
              <MailIcon />
              <div>
                <span className="contact-item-label">Email</span>
                <span className="contact-item-value">{CONTACT_EMAIL}</span>
              </div>
            </a>
            <a className="contact-item" href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
              <div>
                <span className="contact-item-label">GitHub</span>
                <span className="contact-item-value">github.com/your-username</span>
              </div>
            </a>
            <a className="contact-item" href="https://www.linkedin.com/in/hassan-web-505220435/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
              <div>
                <span className="contact-item-label">LinkedIn</span>
                <span className="contact-item-value">linkedin.com/in/hassan-web</span>
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="btn btn-primary contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
