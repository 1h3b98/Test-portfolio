export default function Projects({ projects }) {
  return (
    <section id="projects" className="bg-slate-900/60 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A few recent builds that showcase my process and impact.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition hover:-translate-y-1 hover:border-brand-100/60"
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-brand-100/30 bg-brand-500/10 px-3 py-1 text-xs text-brand-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm font-medium">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-100 transition hover:text-white"
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 transition hover:text-white"
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
