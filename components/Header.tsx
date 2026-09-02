import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import type { Header as HeaderData } from '@/content/cv';
import { ThemeToggle } from './ThemeToggle';

export function Header({ data }: { data: HeaderData }) {
  const { name, title, location, contacts, languages } = data;

  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
        {name}
      </h1>

      <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">{title}</p>

      <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
        <span>{location}</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
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
        {contacts.pdf ? (
          <a
            className="contact-btn"
            href={contacts.pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            <span>PDF</span>
          </a>
        ) : null}
        <ThemeToggle />
      </div>

      {languages.length > 0 ? (
        <div className="mt-8 max-w-md space-y-3">
          {languages.map((lang) => (
            <div key={lang.name}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {lang.name}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {lang.level}
                </span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
                role="progressbar"
                aria-label={`${lang.name} proficiency`}
                aria-valuenow={lang.percent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${lang.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
