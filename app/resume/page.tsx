import type { Metadata } from 'next';
import { cv } from '@/content/cv';

export const metadata: Metadata = {
  title: `${cv.header.name} - Resume`,
  description: `${cv.header.name} - ${cv.header.title}. Printable, ATS-optimized resume.`,
};

// ---------------------------------------------------------------------------
// Design system (blue / white / black, print-safe)
// ---------------------------------------------------------------------------
const NAVY = '#0B3D91'; // headings, name, rules, label lead-ins
const NAVY_DEEP = '#082B66'; // name / strongest accent
const INK = '#1A1A1A'; // body text (near-black for crisp print)
const PAPER = '#F7F4EE'; // light warm off-white (comfortable reading)

/**
 * A bullet where a "Label: rest of sentence" is rendered with the label in
 * bold navy (matching the reference design). Falls back to plain text when
 * there is no leading label.
 */
function ImpactBullet({ text }: Readonly<{ text: string }>) {
  const idx = text.indexOf(':');
  // Only treat as a label if the colon appears early (a short lead-in phrase).
  if (idx > 0 && idx <= 42) {
    const label = text.slice(0, idx);
    const rest = text.slice(idx + 1).trim();
    return (
      <li className="leading-relaxed">
        <span className="font-bold" style={{ color: NAVY }}>
          {label}:
        </span>{' '}
        <span>{rest}</span>
      </li>
    );
  }
  return <li className="leading-relaxed">{text}</li>;
}

/**
 * Section wrapper: an uppercase, letter-spaced navy title with a strong
 * full-width rule underneath.
 */
function Section({
  title,
  children,
  keepTogether = false,
}: Readonly<{ title: string; children: React.ReactNode; keepTogether?: boolean }>) {
  return (
    <section className={`mt-7 print:mt-5${keepTogether ? ' break-inside-avoid' : ''}`}>
      <h2
        className="mb-3 pb-1.5 text-[13.5px] font-bold uppercase tracking-[0.16em] break-after-avoid print:text-[11.5px]"
        style={{ color: NAVY, borderBottom: `2px solid ${NAVY}` }}
      >
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
        <a href={`mailto:${header.contacts.email}`} className="hover:underline">
          {header.contacts.email}
        </a>
      ),
    });
  }
  if (header.contacts.linkedin) {
    contactParts.push({
      id: 'linkedin',
      node: (
        <a
          href={header.contacts.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline"
          style={{ color: NAVY }}
        >
          {header.contacts.linkedin.replace(/^https?:\/\//, '')}
        </a>
      ),
    });
  }
  if (header.contacts.github) {
    contactParts.push({
      id: 'github',
      node: (
        <a
          href={header.contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline"
          style={{ color: NAVY }}
        >
          {header.contacts.github
            .replace(/^https?:\/\//, '')
            .replace(/\?tab=repositories$/, '')}
        </a>
      ),
    });
  }

  return (
    // Force a light, print-safe surface regardless of the site's dark theme.
    <div
      className="min-h-screen py-8 print:min-h-0 print:bg-white print:py-0"
      style={{ backgroundColor: '#EFEAE0' }}
    >
      {/* Non-printing hint bar */}
      <div className="no-print mx-auto mb-6 max-w-[820px] px-6">
        <div
          className="flex items-center justify-between rounded-lg border px-4 py-2.5 text-sm shadow-sm"
          style={{ backgroundColor: '#FFFFFF', borderColor: '#D8D2C4', color: INK }}
        >
          <span>
            Press{' '}
            <span className="font-semibold" style={{ color: NAVY }}>
              Cmd/Ctrl + P
            </span>{' '}
            to save as PDF.
          </span>
          <span className="text-xs" style={{ color: '#7A7466' }}>
            A4 · single column · ATS-friendly
          </span>
        </div>
      </div>

      {/* The document sheet */}
      <main
        className="mx-auto max-w-[820px] px-10 py-10 font-sans text-[13.5px] leading-relaxed shadow-[0_10px_40px_rgba(11,61,145,0.12)] ring-1 print:max-w-none print:px-0 print:py-0 print:text-[11px] print:leading-snug print:shadow-none print:ring-0"
        style={{ backgroundColor: PAPER, color: INK, ['--tw-ring-color' as string]: '#DED8CA' }}
      >
        {/* ---------------------------------------------------------------- */}
        {/* Header                                                            */}
        {/* ---------------------------------------------------------------- */}
        <header className="break-inside-avoid text-center">
          <h1
            className="text-[34px] font-bold uppercase tracking-[0.06em] print:text-[27px]"
            style={{ color: NAVY_DEEP }}
          >
            {header.name}
          </h1>
          <p
            className="mt-1 text-[15px] font-semibold print:text-[12.5px]"
            style={{ color: INK }}
          >
            {header.title}
          </p>

          {contactParts.length > 0 ? (
            <p className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 text-[12.5px] print:text-[10.5px]">
              {contactParts.map((part, i) => (
                <span
                  key={part.id}
                  className="inline-flex items-center gap-x-2"
                >
                  {i > 0 ? (
                    <span aria-hidden style={{ color: '#B9B2A2' }}>
                      |
                    </span>
                  ) : null}
                  {part.node}
                </span>
              ))}
            </p>
          ) : null}

          <div
            className="mx-auto mt-3 h-[3px] w-full print:mt-2"
            style={{ backgroundColor: NAVY }}
          />
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* Summary                                                           */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Executive Summary">
          <p className="text-justify leading-relaxed">{summary}</p>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Experience                                                        */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Professional Experience">
          <div className="space-y-4">
            {experience.map((exp) => (
              <article key={exp.company}>
                {exp.roles.map((role, ri) => {
                  const titles = role.title.split('/').map((t) => t.trim());
                  return (
                  <div
                    key={role.title}
                    className={ri > 0 ? 'mt-3' : ''}
                  >
                    <div className="flex items-baseline justify-between gap-4 break-after-avoid">
                      <h3
                        className="text-[14px] font-bold leading-snug print:text-[11.5px]"
                        style={{ color: NAVY }}
                      >
                        {titles.map((t, ti) => (
                          <span key={t} className="block">
                            {t}
                            {ti === titles.length - 1 ? (
                              <span style={{ color: INK }}> | {exp.company}</span>
                            ) : null}
                          </span>
                        ))}
                      </h3>
                      <span
                        className="shrink-0 text-[12px] font-semibold print:text-[10.5px]"
                        style={{ color: '#55503f' }}
                      >
                        {role.dates || exp.dates}
                      </span>
                    </div>

                    {role.results.length > 0 ? (
                      <ul
                        className="mt-1.5 list-disc space-y-1 pl-5 text-[13px] print:text-[10.5px]"
                        style={{ color: INK }}
                      >
                        {role.results.map((r) => (
                          <ImpactBullet key={r} text={r} />
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  );
                })}
              </article>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------- */}
        {/* Technical Expertise (skills): placed before Education */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Technical Expertise">
          <div className="space-y-1.5">
            {skills.map((group) => (
              <p
                key={group.category}
                className="text-[12.5px] leading-relaxed print:text-[10px]"
              >
                <span className="font-bold" style={{ color: NAVY }}>
                  {group.category}:{' '}
                </span>
                <span style={{ color: INK }}>{group.skills.join(', ')}</span>
              </p>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Certifications                                                    */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Certifications & Professional Development" keepTogether>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 print:grid-cols-2">
            {certifications.map((c) => (
              <li
                key={`${c.name}-${c.issuer}-${c.date}`}
                className="flex items-baseline gap-2 text-[12.5px] print:text-[10px]"
              >
                <span
                  aria-hidden
                  className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full"
                  style={{ backgroundColor: NAVY }}
                />
                <span>
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline"
                      style={{ color: INK }}
                    >
                      {c.name}
                    </a>
                  ) : (
                    <span className="font-semibold" style={{ color: INK }}>
                      {c.name}
                    </span>
                  )}
                  {c.date ? (
                    <span style={{ color: '#6f6a59' }}> ({c.date})</span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Education                                                         */}
        {/* ---------------------------------------------------------------- */}
        <Section title="Education">
          <ul className="space-y-1">
            {education.map((e) => (
              <li
                key={`${e.degree}-${e.institution}`}
                className="text-[13px] print:text-[10.5px]"
              >
                <span className="font-semibold" style={{ color: INK }}>
                  {e.degree}
                </span>
                {', '}
                {e.institution}
                {e.dates ? (
                  <span style={{ color: '#6f6a59' }}> | {e.dates}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Languages                                                         */}
        {/* ---------------------------------------------------------------- */}
        {header.languages.length > 0 ? (
          <Section title="Languages">
            <p className="flex flex-wrap items-center gap-x-2 text-[13px] print:text-[10.5px]">
              {header.languages.map((l, i) => (
                <span key={l.name} className="inline-flex items-center gap-x-2">
                  {i > 0 ? (
                    <span aria-hidden style={{ color: '#B9B2A2' }}>
                      ·
                    </span>
                  ) : null}
                  <span>
                    <span className="font-bold" style={{ color: NAVY }}>
                      {l.name}
                    </span>{' '}
                    <span style={{ color: INK }}>{l.level}</span>
                  </span>
                </span>
              ))}
            </p>
          </Section>
        ) : null}

        <footer
          className="mt-8 border-t pt-3 text-center text-[11px] print:hidden"
          style={{ borderColor: '#DED8CA', color: '#8a8474' }}
        >
          {header.name} · {header.title}
        </footer>
      </main>
    </div>
  );
}
