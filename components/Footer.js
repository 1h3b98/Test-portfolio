export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <a href="#home" className="transition hover:text-brand-100">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
