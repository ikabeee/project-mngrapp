
import { Navbar } from './Navbar'; 
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom'; 
export function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-[#E5D8C5]">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col">
        <Navbar className="h-16" /> {/* Asegura una altura fija */}
        <main className="flex-1 overflow-y-auto p-6 pt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
