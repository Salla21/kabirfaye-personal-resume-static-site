import { Github, Linkedin, Mail, MapPin, FileText, Languages } from 'lucide-react';
import type { Header as HeaderData } from '@/content/cv';
import { ThemeToggle } from './ThemeToggle';

export function Header({
  data,
  titleOverride,
  langSwitchHref,
  langSwitchLabel,
}: Readonly<{
  data: HeaderData;
  titleOverride?: string;
  langSwitchHref?: string;
  langSwitchLabel?: string;
}>) {
  const { name, title, location, contacts, languages } = data;

  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
        {name}
      </h1>

      <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
        {titleOverride ?? title}
      </p>

      <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
        <span>{location}</span>
      </div>

      <div className="mt-6 flex flex-nowrap items-center gap-2 overflow-x-auto">
        <a className="contact-btn" href={`mailto:${contacts.email}`}>
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>Email</span>
        </a>
        <a
          className="contact-btn"
          href={contacts.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
        <a
          className="contact-btn"
          href={contacts.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <a
          className="contact-btn"
          href={contacts.pdf || '/resume/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          <span>PDF</span>
        </a>
        {langSwitchHref ? (
          <a className="contact-btn" href={langSwitchHref}>
            <Languages className="h-4 w-4" aria-hidden="true" />
            <span>{langSwitchLabel}</span>
          </a>
        ) : null}
        <ThemeToggle />
      </div>

      {languages.length > 0 ? (
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
          {languages.map((lang) => (
            <span key={lang.name} className="inline-flex items-center gap-2">
              <span className="font-medium text-slate-700 dark:text-slate-200">
                {lang.name}
              </span>
              <span className="text-slate-400 dark:text-slate-500">:</span>
              <span className="text-slate-500 dark:text-slate-400">
                {lang.level}
              </span>
            </span>
          ))}
        </div>
      ) : null}
    </header>
  );
}
