const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'MongoDB',
  'Docker'
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I&apos;m a web developer passionate about creating seamless digital experiences. I enjoy
            transforming complex requirements into scalable, intuitive products that deliver real
            value to users and businesses.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-200 sm:text-base">
            {technologies.map((tech) => (
              <li key={tech} className="rounded-md border border-slate-700 bg-slate-900/60 px-4 py-2">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto h-72 w-72 rounded-3xl border border-slate-700 bg-gradient-to-br from-brand-500/30 to-slate-800 p-2">
          <div className="flex h-full w-full items-center justify-center rounded-[1.35rem] bg-slate-900 text-center text-slate-400">
            Your Photo / Illustration
          </div>
        </div>
      </div>
    </section>
  );
}
