export default function Skills({ skills }) {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Tools and technologies I rely on to ship quality products.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-100 hover:text-brand-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
