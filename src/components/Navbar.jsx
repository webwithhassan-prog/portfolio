import { useEffect, useState } from 'react';
import { btnPrimary } from './classNames';
import useActiveSection from '../hooks/useActiveSection';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const sectionIds = links.map((link) => link.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

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
              aria-current={activeId === link.href.slice(1) ? 'true' : undefined}
              className={`text-sm font-medium transition-colors hover:text-text-h ${
                activeId === link.href.slice(1) ? 'text-accent' : 'text-text-dim'
              }`}
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
              aria-current={activeId === link.href.slice(1) ? 'true' : undefined}
              className={`border-b border-border py-3 text-[15px] ${
                activeId === link.href.slice(1) ? 'font-semibold text-accent' : 'text-text'
              }`}
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
