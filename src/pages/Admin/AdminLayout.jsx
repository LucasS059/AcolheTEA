import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

export default function AdminLayout() {
  return (
    <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <main className="flex-grow-1 p-4 bg-light" style={{ overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
}