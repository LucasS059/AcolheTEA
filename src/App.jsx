import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/Login/page.jsx';
import AdminLayout from './pages/Admin/AdminLayout.jsx';
import DashboardPage from './pages/Admin/Dashboard/page.jsx';
import ViagensPage from './pages/Admin/Viagens/page.jsx';
import MotoristaPage from './pages/Admin/Motorista/page.jsx';
import ConexaoWhatsPage from './pages/Admin/ConexaoWhats/page.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="viagens" element={<ViagensPage />} />
          <Route path="motorista" element={<MotoristaPage />} />
          <Route path="whatsapp" element={<ConexaoWhatsPage />} />
        </Route>

        <Route path="*" element={<h3 className="p-4 text-center">Página não encontrada</h3>} />
      </Routes>
    </BrowserRouter>
  );
}