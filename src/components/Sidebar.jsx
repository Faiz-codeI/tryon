import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Users', path: '/users' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Settings', path: '/settings' },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/80 transition lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      ></div>
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-800 bg-slate-950 px-6 py-8 transition-transform lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Tryon</p>
            <h2 className="text-2xl font-semibold text-white">Ops Center</h2>
          </div>
          <button
            type="button"
            className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-sm text-slate-300 lg:hidden"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <nav className="mt-10 flex flex-1 flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'border-indigo-400/60 bg-indigo-500/10 text-white'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                }`
              }
            >
              <span>{item.label}</span>
              <span className="text-xs text-slate-400">›</span>
            </NavLink>
          ))}
        </nav>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm font-medium text-white">Upgrade Insights</p>
          <p className="mt-2 text-xs text-slate-400">
            Unlock custom reports and advanced monitoring across teams.
          </p>
          <button className="mt-4 w-full rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white">
            Upgrade plan
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
