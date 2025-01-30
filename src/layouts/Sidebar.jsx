import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import AuthService from "../services/Auth"
import LogoutButton from "./../components/LogoutButton"

export function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [userRole, setUserRole] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await AuthService.getProfile()
        if (response.data?.role) {
          setUserRole(response.data.role)
        }
      } catch (error) {
        console.error("Error obteniendo el rol:", error)
        setUserRole(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUserRole()
  }, [])

  const navItems = [
    { path: "/dashboard", label: "Inicio", icon: "🏠", roles: ["Admin", "Collaborator"] },
    { path: "/tasks", label: "Tareas", icon: "📋", roles: ["Admin", "Collaborator"] },
    { path: "/progress", label: "Progreso", icon: "⏱️", roles: ["Admin"] },
    { path: "/teams", label: "Mis equipos", icon: "👥", roles: ["Admin"] },
    { path: "/resources", label: "Recursos", icon: "📁", roles: ["Admin"] },
  ]

  const handleNavigateToDashboard = () => {
    if (userRole === "Admin") {
      navigate("/dashboard/admin")  // Redirige a /dashboard/admin si el rol es Admin
    } else if (userRole === "Collaborator") {
      navigate("/dashboard/collaborator")  // Redirige a /dashboard/collaborator si el rol es Collaborator
    }
  }

  const handleCreateUser = () => {
    navigate("/admin/create-user")
  }

  if (loading) {
    return (
      <aside className="fixed top-0 left-0 w-64 h-screen bg-[#D9D0C1] p-4 flex flex-col items-center justify-center">
        <div className="animate-pulse">Cargando...</div>
      </aside>
    )
  }

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#D9D0C1] overflow-y-auto p-4 flex flex-col z-20">
      <div className="text-[#40251B] font-bold text-xl mb-8">MyTaskAdmin</div>

      <nav className="space-y-2 flex-1">
        {navItems.map(
          (item) =>
            item.roles.includes(userRole) && (
              <a
                key={item.path}
                onClick={(e) => {
                  e.preventDefault()
                  item.path === "/dashboard" && handleNavigateToDashboard()
                }}
                className={`flex items-center gap-2 text-[#40251B] p-2 rounded-lg transition-colors
                ${location.pathname === item.path ? "bg-[#40251B]/10 font-semibold" : "hover:bg-[#40251B]/10"}`}
              >
                <span>{item.icon}</span> {item.label}
              </a>
            ),
        )}
      </nav>

      <div className="mt-auto">
        {userRole === "Admin" ? (
          <>
            <button
              onClick={handleCreateUser}
              className="w-full bg-[#40251B] text-white hover:bg-[#301a12] 
                          p-2.5 rounded-lg flex items-center justify-center gap-2
                          transition-colors duration-200"
            >
              <span>➕</span> Crear Usuario
            </button>
          </>
        ) : (
          <div className="p-2">
            <LogoutButton className="w-full bg-[#40251B] hover:bg-[#301a12]" />
          </div>
        )}
      </div>
    </aside>
  )
}
