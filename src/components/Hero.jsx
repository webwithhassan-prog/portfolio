import { lazy, Suspense } from 'react';
import { LinkedinIcon, MailIcon, ArrowRightIcon, DownloadIcon } from './icons';
import { btnPrimary, btnOutline, eyebrow } from './classNames';
import Reveal from './Reveal';
import NetworkSphereLite from './NetworkSphereLite';
import useMediaQuery from '../hooks/useMediaQuery';

const NetworkSphere = lazy(() => import('./NetworkSphere'));

export default function Hero() {
  const showSphere = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-28 sm:pb-28 sm:pt-32">
      <div
        className="pointer-events-none absolute left-1/2 top-[-220px] -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(85 120 201 / 0.22) 0%, rgb(85 120 201 / 0) 70%)' }}
      />

      {showSphere ? (
        <Suspense fallback={null}>
          <NetworkSphere className="pointer-events-none absolute right-[-120px] top-1/2 -z-10 h-[560px] w-[560px] -translate-y-1/2 xl:right-[-40px]" />
        </Suspense>
      ) : (
        <NetworkSphereLite className="pointer-events-none absolute -right-6 -top-4 -z-10 h-[230px] w-[290px] opacity-70" />
      )}

      <Reveal as="div" className="container-narrow max-w-[780px]">
        <p className={eyebrow}>Available for freelance &amp; internships</p>

        <h1 className="mb-6 text-[38px] leading-[1.15] tracking-tight sm:text-[50px] lg:text-[62px]">
          Hi, I'm <span className="text-accent">Hassan Arslan</span>
          <br />
          Full Stack Developer
        </h1>

        <p className="mb-10 max-w-[560px] text-lg leading-relaxed text-text-dim">
          BSCS student in Lahore, Pakistan, building web applications with the
          MERN stack, PHP and C++. I've shipped two production sites end to
          end — from database to deployment.
        </p>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          <a href="#projects" className={btnPrimary}>
            View My Work <ArrowRightIcon />
          </a>
          <a href="#contact" className={btnOutline}>
            Get In Touch
          </a>
          <a
            href="/Hassan_Arslan_Resume.pdf"
            download
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-1.5 py-3 text-[15px] font-semibold text-text-dim transition-colors hover:text-accent"
          >
            <DownloadIcon /> Download Resume
          </a>
        </div>

        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/hassan-arslan-505220435/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-dim transition-colors hover:text-accent"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:webwithhassan@gmail.com"
            aria-label="Email"
            className="text-text-dim transition-colors hover:text-accent"
          >
            <MailIcon />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
