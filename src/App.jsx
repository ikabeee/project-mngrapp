import React from 'react'
import { Navbar } from './layout/Navbar'
import { Sidebar } from './layout/Sidebar'
import { DashboardMember } from './pages/DashboardMember'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <DashboardMember />
      </div>
    </div>
  )
}

export default App