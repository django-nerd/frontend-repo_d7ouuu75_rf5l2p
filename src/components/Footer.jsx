export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold">F</span>
            <span className="text-sm font-semibold tracking-tight text-slate-900">Flames UI</span>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Flames. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">Twitter</a>
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">GitHub</a>
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
