/* eslint-disable react/prop-types */
import { Navbar } from './Navbar'; 
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom'; 
export function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4">{children}
        <Outlet />
        </main>
      </div>
    </div>
  );
}
