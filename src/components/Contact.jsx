import { useState } from 'react';
import { MailIcon, LinkedinIcon, MapPinIcon, CopyIcon, CheckIcon } from './icons';
import { eyebrow, sectionHeading, sectionSub, btnPrimary } from './classNames';
import Reveal from './Reveal';

const CONTACT_EMAIL = 'webwithhassan@gmail.com';
// Web3Forms access keys are meant to be used client-side (like a Formspree
// form ID) — safe to commit. Get one free, no signup, at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = '73bf3151-041b-4db5-bb90-e4c052dce051';

const inputClass =
  'rounded-lg border border-border bg-bg-alt px-3.5 py-[11px] text-sm text-text-h placeholder:text-text-dim focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/35';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — the mailto link still works as a fallback.
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      const subject = `Portfolio inquiry from ${form.name}`;
      const body = `${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
            <div className="flex items-center gap-3.5 rounded-[10px] border border-border bg-surface p-4 transition-colors hover:border-accent">
              <MailIcon className="shrink-0 text-accent" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="text-xs text-text-dim">Email</span>
                <span className="truncate text-sm font-semibold text-text-h">{CONTACT_EMAIL}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="shrink-0 rounded-md p-1.5 text-text-dim transition-colors hover:bg-accent-soft hover:text-accent"
              >
                {copied ? <CheckIcon className="text-accent" /> : <CopyIcon />}
              </button>
            </div>
            <a
              className="flex items-center gap-3.5 rounded-[10px] border border-border bg-surface p-4 transition-colors hover:border-accent"
              href="https://www.linkedin.com/in/hassan-arslan-505220435/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="shrink-0 text-accent" />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-xs text-text-dim">LinkedIn</span>
                <span className="truncate text-sm font-semibold text-text-h">linkedin.com/in/hassan-arslan</span>
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

            {status === 'success' && (
              <p className="rounded-lg border border-accent/40 bg-accent-soft px-3.5 py-3 text-sm text-text-h">
                Thanks — your message is in! I'll reply within a day.
              </p>
            )}
            {status === 'error' && (
              <p className="rounded-lg border border-border bg-bg-alt px-3.5 py-3 text-sm text-text-dim">
                Something went wrong sending that. Please email me directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-accent hover:underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`${btnPrimary} w-full justify-center border-none disabled:cursor-not-allowed disabled:opacity-60`}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
