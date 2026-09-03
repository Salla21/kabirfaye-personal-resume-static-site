'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Experience as ExperienceData, Role } from '@/content/cv';
import { Pill } from './Pill';

function RoleBlock({ role, nested }: { role: Role; nested: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={nested ? 'relative pl-5' : ''}>
      {nested ? (
        <span
          className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
          aria-hidden="true"
        />
      ) : null}

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          {role.title}
        </h4>
        <span className="text-sm font-medium text-accent dark:text-accent-hover">
          {role.dates}
        </span>
      </div>

      {role.project ? (
        <p className="mt-1 text-sm italic text-slate-500 dark:text-slate-400">
          {role.project}
        </p>
      ) : null}

      {role.tech.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {role.tech.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      ) : null}

      {role.results.length > 0 ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Results &amp; Impact
          </p>
          <ul className="mt-2 space-y-2">
            {role.results.map((r, i) => (
              <li
                key={i}
                className="relative pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {role.details ? (
        <div className="mt-3 no-print">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
            aria-expanded={open}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
            {open ? 'Hide project details' : 'Show project details'}
          </button>
          {open ? (
            <div
              className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-3 [&_strong]:block [&_strong]:text-xs [&_strong]:font-semibold [&_strong]:uppercase [&_strong]:tracking-wider [&_strong]:text-slate-400 [&_strong]:dark:text-slate-500 [&_strong]:mt-4"
              dangerouslySetInnerHTML={{ __html: role.details }}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function Experience({ items }: { items: ExperienceData[] }) {
  return (
    <div className="space-y-10">
      {items.map((exp) => (
        <article key={exp.company}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {exp.company}
            </h3>
            <span className="text-sm font-medium text-accent dark:text-accent-hover">
              {exp.dates}
            </span>
          </div>
          {exp.location ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {exp.location}
            </p>
          ) : null}

          <div
            className={
              exp.roles.length > 1
                ? 'mt-5 space-y-8 border-l border-slate-200 pl-4 dark:border-slate-700'
                : 'mt-5 space-y-8'
            }
          >
            {exp.roles.map((role) => (
              <RoleBlock
                key={role.title}
                role={role}
                nested={exp.roles.length > 1}
              />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
