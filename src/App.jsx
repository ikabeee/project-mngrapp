import { DashboardMember } from './pages/DashboardMember'


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
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <DashboardMember />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/error/forbidden" element={<Forbidden />} />

        <Route element={<ProtectedRoutes allowedRoles={['Admin']} />}>
          <Route element={<Layout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="/admin/create-user" element={<CreateUsers />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
          </Route>
        </Route>
 
        <Route element={<ProtectedRoutes allowedRoles={['Collaborator']} />}>
          <Route element={<Layout />}>
            <Route index element={<CollaboratorDashboard />} />
            <Route path="/dashboard/collaborator" element={<CollaboratorDashboard />} />
          </Route>
        </Route>


        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App
