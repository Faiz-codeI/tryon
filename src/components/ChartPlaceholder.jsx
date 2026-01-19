const ChartPlaceholder = ({ title, subtitle }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-400">{subtitle}</p>
        </div>
        <button className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
          View report
        </button>
      </div>
      <div className="mt-6 flex h-40 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950/50 text-sm text-slate-500">
        Chart placeholder
      </div>
    </div>
  );
};

export default ChartPlaceholder;
