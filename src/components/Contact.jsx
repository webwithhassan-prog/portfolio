import { useState } from 'react';
import { MailIcon, LinkedinIcon, MapPinIcon } from './icons';
import { eyebrow, sectionHeading, sectionSub, btnPrimary } from './classNames';
import Reveal from './Reveal';

const CONTACT_EMAIL = 'webwithhassan@gmail.com';

const inputClass =
  'rounded-lg border border-border bg-bg-alt px-3.5 py-[11px] text-sm text-text-h placeholder:text-text-dim focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/35';

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
    <section id="contact" className="py-24 sm:py-28">
      <div className="container-narrow max-w-[920px]">
        <Reveal as="div">
          <p className={eyebrow}>Contact</p>
          <h2 className={sectionHeading}>Let's build something together</h2>
          <p className={sectionSub}>
            I'm open to freelance projects, internships and full stack roles.
            Feel free to reach out — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal as="div" delay={100} className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-1 gap-4">
            <a
              className="flex items-center gap-3.5 rounded-[10px] border border-border bg-surface p-4 transition-colors hover:border-accent"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <MailIcon className="shrink-0 text-accent" />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-xs text-text-dim">Email</span>
                <span className="truncate text-sm font-semibold text-text-h">{CONTACT_EMAIL}</span>
              </div>
            </a>
            <a
              className="flex items-center gap-3.5 rounded-[10px] border border-border bg-surface p-4 transition-colors hover:border-accent"
              href="https://www.linkedin.com/in/hassan-web-505220435/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="shrink-0 text-accent" />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-xs text-text-dim">LinkedIn</span>
                <span className="truncate text-sm font-semibold text-text-h">linkedin.com/in/hassan-web</span>
              </div>
            </a>
            <div className="flex items-center gap-3.5 rounded-[10px] border border-border bg-surface p-4">
              <MapPinIcon className="shrink-0 text-accent" />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-xs text-text-dim">Location</span>
                <span className="truncate text-sm font-semibold text-text-h">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-[18px] rounded-xl border border-border bg-surface p-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[13px] font-semibold text-text-h">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[13px] font-semibold text-text-h">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[13px] font-semibold text-text-h">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-y`}
              />
            </div>
            <button type="submit" className={`${btnPrimary} w-full justify-center border-none`}>
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
