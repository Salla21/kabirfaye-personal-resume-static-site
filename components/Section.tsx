export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-8">
      <h2 className="section-heading text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
