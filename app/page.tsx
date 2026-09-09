import { cv } from '@/content/cv';
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Skills } from '@/components/Skills';
import { Impact } from '@/components/Impact';

export default function Page() {
  return (
    <main className="mx-auto max-w-content px-5 py-12 sm:px-8 sm:py-16">
      <Header data={cv.header} langSwitchHref="/de/" langSwitchLabel="DE" />

      <Section id="summary" title="Summary">
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {cv.summary}
        </p>
      </Section>

      <Section id="impact" title="Key Outcomes">
        <Impact items={cv.impact} />
      </Section>

      <Section id="experience" title="Experience">
        <Experience items={cv.experience} />
      </Section>

      <Section id="education" title="Education">
        <Education items={cv.education} />
      </Section>

      <Section id="certifications" title="Certifications">
        <Certifications items={cv.certifications} />
      </Section>

      <Section id="skills" title="Skills">
        <Skills groups={cv.skills} />
      </Section>

      <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} {cv.header.name}. Built with Next.js
          &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
