export default function Hero() {
  return (
    <header
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(63,114,255,0.3),_transparent_50%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start">
        <p className="mb-4 inline-flex rounded-full border border-brand-100/40 bg-brand-500/10 px-4 py-1 text-sm text-brand-100">
          Available for freelance and full-time roles
        </p>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Hi, I&apos;m <span className="text-brand-100">Your Name</span>
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-brand-50 sm:text-3xl">Full Stack Developer</h2>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I build performant, user-focused web applications that blend clean architecture with
          thoughtful design.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-brand-100 hover:text-brand-100"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}
