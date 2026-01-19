import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout pageTitle="Dashboard Overview">
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/users"
        element={
          <Layout pageTitle="User Management">
            <Users />
          </Layout>
        }
      />
      <Route
        path="/analytics"
        element={
          <Layout pageTitle="Performance Analytics">
            <Analytics />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout pageTitle="Workspace Settings">
            <Settings />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
