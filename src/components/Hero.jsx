import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon, DownloadIcon } from './icons';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Available for freelance & internships</p>
        <h1 className="hero-title">
          Hi, I'm <span className="accent-text">Hassan Ansari</span>
          <br />
          Full Stack Developer
        </h1>
        <p className="hero-sub">
          BSCS student in Lahore, Pakistan, building web applications with the
          MERN stack, PHP and C++. I've shipped two production sites end to
          end — from database to deployment.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRightIcon />
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
          <a href="/Hassan_Ansari_Resume.pdf" download className="hero-resume-link">
            <DownloadIcon /> Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/hassan-web-505220435/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="mailto:webwithhassan@gmail.com" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
