import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Forbidden from './pages/errors/Forbidden';
import ProtectedRoutes from './components/ProtectedRoutes';
import Test from './pages/Test';
import NotFound from './pages/errors/NotFound';
function App() {

  return (
    <>
      <Routes>
        <Route path='/error/forbidden' element={<Forbidden />} />
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedRoutes allowedRoles={['Admin', 'Guest']} />}>
          <Route path="/dashboard/admin" element={<Test />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
