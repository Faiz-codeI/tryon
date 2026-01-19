const Navbar = ({ onMenuClick, pageTitle }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-100 transition hover:border-slate-700 lg:hidden"
            onClick={onMenuClick}
            aria-label="Open sidebar"
          >
            <span className="text-lg">☰</span>
          </button>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Admin Panel</p>
            <h1 className="text-xl font-semibold text-white">{pageTitle}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Live metrics updated 2m ago
          </div>
          <button className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500"></span>
            <span className="hidden text-left text-sm font-medium md:block">
              Alex Morgan
              <span className="block text-xs text-slate-400">Operations Lead</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
