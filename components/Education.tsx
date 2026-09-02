import type { Education as EducationData } from '@/content/cv';

export function Education({ items }: { items: EducationData[] }) {
  return (
    <div className="space-y-6">
      {items.map((edu, i) => (
        <div key={i}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {edu.degree}
            </h3>
            <span className="text-sm font-medium text-accent dark:text-accent-hover">
              {edu.dates}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {edu.institution}
          </p>
          {edu.placeholder ? (
            <p className="mt-1 text-xs italic text-amber-600 dark:text-amber-400">
              Editable placeholder — update in content/cv.ts
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
