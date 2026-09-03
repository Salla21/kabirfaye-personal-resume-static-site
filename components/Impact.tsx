import type { ImpactMetric } from '@/content/cv';

export function Impact({ items }: { items: ImpactMetric[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((metric, i) => (
        <div
          key={i}
          className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-accent dark:border-slate-700 dark:bg-slate-800/40 dark:hover:border-accent"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-accent dark:text-accent-hover">
              {metric.value}
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {metric.label}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {metric.narrative}
          </p>
        </div>
      ))}
    </div>
  );
}
