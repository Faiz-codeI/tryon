import ChartPlaceholder from '../components/ChartPlaceholder';
import InfoCard from '../components/InfoCard';
import StatCard from '../components/StatCard';
import { activities, stats, teamStatus } from '../data/dashboardData';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <ChartPlaceholder
          title="Revenue growth"
          subtitle="Monthly revenue compared to targets"
        />
        <ChartPlaceholder title="Acquisition channels" subtitle="Top sources this quarter" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <InfoCard
          title="Latest activity"
          action={<button className="text-xs text-indigo-300">View all</button>}
        >
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">{activity.title}</p>
                <span className="text-xs text-slate-400">{activity.time}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{activity.detail}</p>
            </div>
          ))}
        </InfoCard>
        <InfoCard title="Team status">
          {teamStatus.map((member) => (
            <div key={member.name} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">{member.name}</p>
                <p className="text-xs text-slate-400">{member.role}</p>
              </div>
              <span className="text-xs text-slate-400">{member.status}</span>
            </div>
          ))}
        </InfoCard>
      </section>
    </div>
  );
};

export default Dashboard;
