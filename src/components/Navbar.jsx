import { useEffect, useState } from 'react';
import { btnPrimary } from './classNames';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? 'border-border bg-bg/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1080px] items-center gap-6 px-6 py-[18px]">
        <a href="#top" className="font-serif text-xl font-bold tracking-tight text-text-h">
          Hassan<span className="text-accent">.</span>
        </a>

        <nav className="hidden flex-1 justify-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-dim transition-colors hover:text-text-h"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden md:block">
          <a href="#contact" className={`${btnPrimary} !px-[18px] !py-[9px] !text-sm`}>
            Let's Talk
          </a>
        </div>

        <button
          className="ml-auto flex flex-col gap-[5px] p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-0.5 w-5 bg-text-h" />
          <span className="block h-0.5 w-5 bg-text-h" />
          <span className="block h-0.5 w-5 bg-text-h" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 pb-5 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 text-[15px] text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`${btnPrimary} mt-3 justify-center`}
          >
            Let's Talk
          </a>
        </nav>
      )}
    </header>
  );
}
