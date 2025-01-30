import { Navbar } from "./layouts/Navbar"
import { Sidebar } from "./layouts/Sidebar"

function App() {


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

      </div>
    </div>
  )
}

export default App

