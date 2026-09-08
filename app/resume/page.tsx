import type { Metadata } from 'next';
import { cv } from '@/content/cv';

export const metadata: Metadata = {
  title: `${cv.header.name} — Resume`,
  description: `${cv.header.name} — ${cv.header.title}. Printable, ATS-optimized resume.`,
};

/**
 * Section wrapper: an uppercase, letter-spaced bold title with a full-width
 * thin bottom rule underneath (Rostyslav-style), followed by the section body.
 */
function Section({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="mt-6 break-inside-avoid">
      <h2 className="mb-3 border-b border-neutral-300 pb-1 text-[13px] font-bold uppercase tracking-[0.18em] text-neutral-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  const {
    header,
    summary,
    experience,
    education,
    certifications,
    skills,
  } = cv;

  const contactParts: { id: string; node: React.ReactNode }[] = [];
  if (header.location) {
    contactParts.push({ id: 'loc', node: <span>{header.location}</span> });
  }
  if (header.contacts.email) {
    contactParts.push({
      id: 'email',
      node: (
        <a href={`mailto:${header.contacts.email}`} className="underline">
          {header.contacts.email}
        </a>
      ),
    });
  }
  if (header.contacts.linkedin) {
    contactParts.push({
      id: 'linkedin',
      node: (
        <a href={header.contacts.linkedin} className="underline">
          {header.contacts.linkedin.replace(/^https?:\/\//, '')}
        </a>
      ),
    });
  }
  if (header.contacts.github) {
    contactParts.push({
      id: 'github',
      node: (
        <a href={header.contacts.github} className="underline">
          {header.contacts.github.replace(/^https?:\/\//, '')}
        </a>
      ),
    });
  }

  return (
    // Force a light, print-safe surface regardless of the site's dark theme.
    <div className="min-h-screen bg-[#FAF9F7] print:min-h-0 print:bg-white">
      <main className="mx-auto max-w-[800px] bg-[#FAF9F7] px-8 py-10 font-sans text-[15px] leading-relaxed text-neutral-900 print:max-w-none print:px-0 print:py-0 print:text-[11.5px] print:leading-snug">
        {/* Non-printing hint bar */}
        <div className="no-print mb-6 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-600">
          Press{' '}
          <span className="font-semibold text-neutral-900">Cmd/Ctrl + P</span>{' '}
          to save as PDF.
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Header                                                            */}
        {/* ---------------------------------------------------------------- */}
        <header className="break-inside-avoid pb-4">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 print:text-3xl">
            {header.name}
          </h1>
          <p className="mt-1 text-lg font-medium text-neutral-600 print:text-base">
            {header.title}
          </p>

          {contactParts.length > 0 ? (
            <p className="mt-2 flex flex-wrap items-center gap-x-1.5 text-sm text-neutral-700 print:text-[11px]">
              {contactParts.map((part, i) => (
                <span
                  key={part.id}
                  className="inline-flex items-center gap-x-1.5"
                >
                  {i > 0 ? (
                    <span aria-hidden className="text-neutral-400">
                      ·
                    </span>
                  ) : null}
                  {part.node}
                </span>
              ))}
            </p>
          ) : null}

          {header.languages.length > 0 ? (
            <p className="mt-1.5 text-sm text-neutral-700 print:text-[11px]">
              <span className="font-semibold text-neutral-900">Languages: </span>
              {header.languages
                .map((l) => `${l.name} — ${l.level}`)
                .join(' · ')}
            </p>
          ) : null}
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* Summary                                                           */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Summary">
          <p className="text-[15px] leading-relaxed text-neutral-800 print:text-[11.5px]">
            {summary}
          </p>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Experience                                                        */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Experience">
          <div className="space-y-5">
            {experience.map((exp) => (
              <article key={exp.company} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[15px] font-bold text-neutral-900 print:text-[12px]">
                    {exp.company}
                  </h3>
                  {exp.dates ? (
                    <span className="shrink-0 text-sm font-medium text-neutral-600 print:text-[11px]">
                      {exp.dates}
                    </span>
                  ) : null}
                </div>
                {exp.location ? (
                  <p className="text-sm text-neutral-500 print:text-[10.5px]">
                    {exp.location}
                  </p>
                ) : null}

                <div className="mt-2 space-y-4">
                  {exp.roles.map((role) => (
                    <div key={role.title} className="break-inside-avoid">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="text-[14px] font-semibold text-neutral-900 print:text-[11.5px]">
                          {role.title}
                        </h4>
                        {role.dates ? (
                          <span className="shrink-0 text-sm text-neutral-600 print:text-[11px]">
                            {role.dates}
                          </span>
                        ) : null}
                      </div>

                      {role.project ? (
                        <p className="text-sm italic text-neutral-600 print:text-[11px]">
                          Project: {role.project}
                        </p>
                      ) : null}

                      {role.tech.length > 0 ? (
                        <p className="mt-1 text-[12px] text-neutral-500 print:text-[10px]">
                          {role.tech.join(' · ')}
                        </p>
                      ) : null}

                      {role.results.length > 0 ? (
                        <>
                          <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-neutral-500 print:text-[9.5px]">
                            Results &amp; Impact
                          </p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-[14px] leading-relaxed text-neutral-800 print:text-[11px]">
                            {role.results.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>
                        </>
                      ) : null}

                      {role.details ? (
                        <div
                          className="mt-2 space-y-1 text-[14px] leading-relaxed text-neutral-800 print:text-[11px] [&_strong]:mt-2.5 [&_strong]:block [&_strong]:text-[11px] [&_strong]:font-semibold [&_strong]:uppercase [&_strong]:tracking-wider [&_strong]:text-neutral-500 print:[&_strong]:text-[9.5px]"
                          dangerouslySetInnerHTML={{ __html: role.details }}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Education                                                         */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Education">
          <ul className="space-y-1.5">
            {education.map((e) => (
              <li
                key={`${e.degree}-${e.institution}`}
                className="text-[14px] leading-relaxed text-neutral-800 print:text-[11px]"
              >
                <span className="font-semibold text-neutral-900">{e.degree}</span>
                {' — '}
                {e.institution}
                {e.dates ? (
                  <span className="text-neutral-500"> ({e.dates})</span>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Certifications                                                    */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Certifications">
          <ul className="space-y-1.5">
            {certifications.map((c) => (
              <li
                key={`${c.name}-${c.issuer}-${c.date}`}
                className="text-[14px] leading-relaxed text-neutral-800 print:text-[11px]"
              >
                {c.url ? (
                  <a
                    href={c.url}
                    className="font-semibold text-neutral-900 underline"
                  >
                    {c.name}
                  </a>
                ) : (
                  <span className="font-semibold text-neutral-900">{c.name}</span>
                )}
                {' — '}
                {c.issuer}
                {c.date ? (
                  <span className="text-neutral-500"> ({c.date})</span>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Skills                                                            */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Skills">
          <div className="space-y-1.5">
            {skills.map((group) => (
              <p
                key={group.category}
                className="text-[14px] leading-relaxed text-neutral-800 print:text-[11px]"
              >
                <span className="font-semibold text-neutral-900">
                  {group.category}:{' '}
                </span>
                {group.skills.join(', ')}
              </p>
            ))}
          </div>
        </Section>

        <footer className="mt-8 border-t border-neutral-300 pt-3 text-center text-[11px] text-neutral-400 print:hidden">
          {header.name}
        </footer>
      </main>
    </div>
  );
}
