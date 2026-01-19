const InfoCard = ({ title, children, action }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {action}
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
};

export default InfoCard;
