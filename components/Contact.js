const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
  { label: 'GitHub', href: 'https://github.com/yourname' },
  { label: 'Twitter', href: 'https://twitter.com/yourname' }
];

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900/60 px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let&apos;s connect.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-brand-100 hover:text-brand-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-100 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-100 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-brand-100 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
