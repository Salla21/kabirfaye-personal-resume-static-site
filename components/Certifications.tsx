import { BadgeCheck, ExternalLink } from 'lucide-react';
import type { Certification } from '@/content/cv';

export function Certifications({ items }: { items: Certification[] }) {
  return (
    <ul className="space-y-4">
      {items.map((cert, i) => (
        <li key={i} className="flex items-start gap-3">
          <BadgeCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-accent"
            aria-hidden="true"
          />
          <div>
            <div className="flex flex-wrap items-baseline gap-x-2">
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  {cert.name}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : (
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {cert.name}
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {cert.issuer}
            </p>
            {cert.placeholder ? (
              <p className="mt-0.5 text-xs italic text-amber-600 dark:text-amber-400">
                Editable — add verification link &amp; date in content/cv.ts
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
