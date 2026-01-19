const StatCard = ({ label, value, change }) => {
  const isPositive = change.startsWith('+');

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <div className="mt-4 flex items-end justify-between">
        <h3 className="text-2xl font-semibold text-white">{value}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isPositive
              ? 'bg-emerald-400/10 text-emerald-300'
              : 'bg-rose-400/10 text-rose-300'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
