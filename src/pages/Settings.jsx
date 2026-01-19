import InfoCard from '../components/InfoCard';
import { settingsOptions } from '../data/dashboardData';

const Settings = () => {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2">
        {settingsOptions.map((option) => (
          <div
            key={option.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{option.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{option.description}</p>
            <button className="mt-4 rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-200">
              Manage
            </button>
          </div>
        ))}
      </section>

      <InfoCard title="Notifications">
        {[
          'Weekly KPI summary',
          'System uptime alerts',
          'Customer feedback digest',
        ].map((item) => (
          <label
            key={item}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm"
          >
            <span className="text-slate-300">{item}</span>
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-indigo-500"
            />
          </label>
        ))}
      </InfoCard>
    </div>
  );
};

export default Settings;
