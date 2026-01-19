import ChartPlaceholder from '../components/ChartPlaceholder';
import InfoCard from '../components/InfoCard';
import { analyticsCards } from '../data/dashboardData';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {analyticsCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <p className="text-sm text-slate-400">{card.title}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{card.value}</p>
            <p className="mt-2 text-xs text-slate-400">{card.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ChartPlaceholder
          title="Weekly active users"
          subtitle="7-day rolling activity"
        />
        <ChartPlaceholder
          title="Feature adoption"
          subtitle="Core feature usage in the last 30 days"
        />
      </section>

      <InfoCard title="Insights">
        {[
          {
            title: 'Marketing campaigns are driving 42% of new signups.',
            detail: 'Focus on paid social to maintain momentum.',
          },
          {
            title: 'Enterprise upgrades up 18% month-over-month.',
            detail: 'Sales outreach is converting high-intent leads.',
          },
          {
            title: 'Retention increased after the onboarding refresh.',
            detail: 'Continue optimizing in-app guidance.',
          },
        ].map((insight) => (
          <div key={insight.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-sm font-semibold text-white">{insight.title}</p>
            <p className="mt-2 text-sm text-slate-400">{insight.detail}</p>
          </div>
        ))}
      </InfoCard>
    </div>
  );
};

export default Analytics;
