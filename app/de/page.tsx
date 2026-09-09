import { cv, de } from '@/content/cv';
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Skills } from '@/components/Skills';

// German-language version of the CV. Reuses the same components; translates the
// human-readable prose (title, summary, section headings). Technical bullets,
// tool names, and proper nouns stay as-is (standard practice on German tech CVs).
export default function GermanPage() {
  return (
    <main className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-16">
      <Header
        data={cv.header}
        titleOverride={de.title}
        langSwitchHref="/"
        langSwitchLabel="EN"
      />

      <Section id="summary" title={de.sections.summary}>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {de.summary}
        </p>
      </Section>

      <Section id="experience" title={de.sections.experience}>
        <Experience items={cv.experience} />
      </Section>

      <Section id="skills" title={de.sections.skills}>
        <Skills groups={cv.skills} />
      </Section>

      <Section id="certifications" title={de.sections.certifications}>
        <Certifications items={cv.certifications} />
      </Section>

      <Section id="education" title={de.sections.education}>
        <Education items={cv.education} />
      </Section>

      <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} {cv.header.name}
        </p>
      </footer>
    </main>
  );
}
