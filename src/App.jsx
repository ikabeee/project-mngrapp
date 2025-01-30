import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Forbidden from './pages/errors/Forbidden';
import ProtectedRoutes from './components/ProtectedRoutes';
import AdminDashboard from './pages/AdminDashboard';
import { CreateUsers } from './pages/CreateUsers';
import NotFound from './pages/errors/NotFound';
import CollaboratorDashboard from './pages/CollaboratorDashboard';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/error/forbidden" element={<Forbidden />} />

      {/* Rutas protegidas con layout común */}
      <Route element={<Layout />}>
        {/* Admin routes */}
        <Route element={<ProtectedRoutes allowedRoles={['Admin']} />}>
          <Route path="/admin/create-user" element={<CreateUsers />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
        </Route>

        {/* Collaborator routes */}
        <Route element={<ProtectedRoutes allowedRoles={['Collaborator']} />}>
          <Route path="/dashboard/collaborator" element={<CollaboratorDashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App