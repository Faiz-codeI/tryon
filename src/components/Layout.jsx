import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, pageTitle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
      <div className="lg:pl-64">
        <Navbar onMenuClick={handleToggleSidebar} pageTitle={pageTitle} />
        <main className="px-6 py-8 lg:px-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
