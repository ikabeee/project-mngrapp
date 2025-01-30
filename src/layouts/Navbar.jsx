/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/Auth";

export function Navbar() {
  const navigate = useNavigate(); 
  const [user, setUser] = useState(null);
  const [setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await AuthService.getProfile();
        if (response.data) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error obteniendo el usuario:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const isAdmin = user?.role === "Admin";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#admin-dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      navigate("/login");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-64 right-0 z-10 h-14 bg-[#40251B] flex items-center justify-between px-4 text-white">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative flex-1">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="search"
            placeholder="Buscar tarea, equipos, usuarios..."
            className="pl-8 bg-white/10 border-none text-white placeholder:text-gray-400 w-full rounded-md py-1.5 px-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
        </button>
        {!isAdmin && (
          <div className="w-8 h-8 bg-[#D9D0C1] rounded-full flex items-center justify-center">
            <span className="text-[#40251B] text-sm font-bold">JD</span>
          </div>
        )}
        {isAdmin && (
          <div className="relative" id="admin-dropdown">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 bg-[#D9D0C1] rounded-full flex items-center justify-center text-[#40251B] font-bold"
            >
              {user?.name?.charAt(0).toUpperCase()}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
