import type { Metadata } from 'next';
import { cv } from '@/content/cv';

export const metadata: Metadata = {
  title: `${cv.header.name} — Resume`,
  description: `${cv.header.name} — ${cv.header.title}. Printable resume.`,
};

function ResumeSection({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 border-b border-neutral-300 pb-1 text-sm font-bold uppercase tracking-widest text-neutral-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  const { header, summary, impact, experience, education, certifications, skills } =
    cv;

  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-[#FAF9F7] px-8 py-10 text-neutral-900 print:max-w-none print:px-0 print:py-0">
      {/* Print hint — hidden when printing */}
      <div className="no-print mb-6 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-600">
        Tip: Download or save as PDF with{' '}
        <span className="font-semibold">Cmd/Ctrl + P</span>.
      </div>

      {/* Header */}
      <header className="border-b-2 border-neutral-800 pb-4">
        <h1 className="text-3xl font-bold tracking-tight">{header.name}</h1>
        <p className="mt-1 text-lg text-neutral-700">{header.title}</p>
        <p className="mt-1 text-sm text-neutral-600">{header.location}</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-700">
          <a href={`mailto:${header.contacts.email}`} className="underline">
            {header.contacts.email}
          </a>
          <a href={header.contacts.linkedin} className="underline">
            {header.contacts.linkedin.replace('https://', '')}
          </a>
          <a href={header.contacts.github} className="underline">
            {header.contacts.github.replace('https://', '')}
          </a>
        </div>
        {header.languages.length > 0 ? (
          <p className="mt-2 text-sm text-neutral-700">
            <span className="font-semibold">Languages: </span>
            {header.languages
              .map((l) => `${l.name} — ${l.level}`)
              .join('  ·  ')}
          </p>
        ) : null}
      </header>

      {/* Summary */}
      <ResumeSection title="Summary">
        <p className="text-sm leading-relaxed text-neutral-800">{summary}</p>
      </ResumeSection>

      {/* Key Outcomes */}
      <ResumeSection title="Key Outcomes">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {impact.map((m) => (
            <li key={m.label} className="text-sm leading-relaxed text-neutral-800">
              <span className="font-bold">{m.value}</span>{' '}
              <span className="font-semibold">{m.label}</span> — {m.narrative}
            </li>
          ))}
        </ul>
      </ResumeSection>

      {/* Experience */}
      <ResumeSection title="Experience">
        <div className="space-y-6">
          {experience.map((exp) => (
            <article key={exp.company} className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-bold text-neutral-900">
                  {exp.company}
                </h3>
                <span className="text-sm font-medium text-neutral-600">
                  {exp.dates}
                </span>
              </div>
              {exp.location ? (
                <p className="text-sm text-neutral-600">{exp.location}</p>
              ) : null}

              <div className="mt-3 space-y-5">
                {exp.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="text-sm font-semibold text-neutral-900">
                        {role.title}
                      </h4>
                      {role.dates ? (
                        <span className="text-sm text-neutral-600">
                          {role.dates}
                        </span>
                      ) : null}
                    </div>
                    {role.project ? (
                      <p className="text-sm italic text-neutral-600">
                        {role.project}
                      </p>
                    ) : null}
                    {role.tech.length > 0 ? (
                      <p className="mt-1 text-xs text-neutral-600">
                        {role.tech.join(' · ')}
                      </p>
                    ) : null}
                    {role.results.length > 0 ? (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-800">
                        {role.results.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    ) : null}
                    {role.details ? (
                      <div
                        className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-800 [&_strong]:mt-3 [&_strong]:block [&_strong]:text-xs [&_strong]:font-semibold [&_strong]:uppercase [&_strong]:tracking-wider [&_strong]:text-neutral-500"
                        dangerouslySetInnerHTML={{ __html: role.details }}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <ul className="space-y-2">
          {education.map((e) => (
            <li key={`${e.degree}-${e.institution}`} className="text-sm text-neutral-800">
              <span className="font-semibold">{e.degree}</span>
              {', '}
              {e.institution}
              {e.dates ? (
                <span className="text-neutral-600"> ({e.dates})</span>
              ) : null}
            </li>
          ))}
        </ul>
      </ResumeSection>

      {/* Certifications */}
      <ResumeSection title="Certifications">
        <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {certifications.map((c) => (
            <li key={`${c.name}-${c.date}`} className="text-sm text-neutral-800">
              <span className="font-semibold">{c.name}</span>
              {' — '}
              {c.issuer}
              <span className="text-neutral-600"> ({c.date})</span>
            </li>
          ))}
        </ul>
      </ResumeSection>

      {/* Skills */}
      <ResumeSection title="Skills">
        <div className="space-y-2">
          {skills.map((group) => (
            <p key={group.category} className="text-sm leading-relaxed text-neutral-800">
              <span className="font-semibold">{group.category}: </span>
              {group.skills.join(', ')}
            </p>
          ))}
        </div>
      </ResumeSection>

      <footer className="mt-8 border-t border-neutral-300 pt-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {header.name}
      </footer>
    </main>
  );
}
