import DataTable from '../components/DataTable';
import InfoCard from '../components/InfoCard';
import { userTable } from '../data/dashboardData';

const Users = () => {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Total users', value: '12,450' },
          { label: 'New signups', value: '860' },
          { label: 'Pending invites', value: '42' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </section>

      <InfoCard
        title="User directory"
        action={<button className="text-xs text-indigo-300">Add user</button>}
      >
        <DataTable
          columns={['Name', 'Email', 'Role', 'Status']}
          rows={userTable}
        />
      </InfoCard>
    </div>
  );
};

export default Users;
