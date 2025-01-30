import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Forbidden from './pages/errors/Forbidden';
function App() {

  return (
    <>
    <Routes>
      <Route path='/error/forbidden' element={<Forbidden />}/>
      <Route path='/login' element={<Login/>} />
    </Routes>

    </>
  )
}

export default App
