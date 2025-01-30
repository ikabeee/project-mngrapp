export function Sidebar() {
    return (
      <aside className="fixed top-14 left-0 w-64 bg-[#D9D0C1] h-[calc(100vh-3.5rem)] overflow-y-auto p-4 flex flex-col">
        <div className="text-[#40251B] font-bold text-xl mb-8">MyTaskAdmin</div>
        <nav className="space-y-2 flex-1">
          <a href="/" className="flex items-center gap-2 text-[#40251B] p-2 rounded-lg hover:bg-[#40251B]/10">
            <span>🏠</span> Inicio
          </a>
          <a
            href="/tasks"
            className="flex items-center gap-2 text-[#40251B] p-2 rounded-lg hover:bg-[#40251B]/10 bg-[#40251B]/10"
          >
            <span>📋</span> Tareas
          </a>
          <a href="/progress" className="flex items-center gap-2 text-[#40251B] p-2 rounded-lg hover:bg-[#40251B]/10">
            <span>⏱️</span> Progreso
          </a>
          <a href="/teams" className="flex items-center gap-2 text-[#40251B] p-2 rounded-lg hover:bg-[#40251B]/10">
            <span>👥</span> Mis equipos
          </a>
          <a href="/resources" className="flex items-center gap-2 text-[#40251B] p-2 rounded-lg hover:bg-[#40251B]/10">
            <span>📁</span> Recursos
          </a>
        </nav>
        <button className="w-full bg-[#40251B] text-white hover:bg-[#40251B]/90 p-2 rounded-lg flex items-center justify-center">
          <span className="mr-2">➕</span> Crear Tarea
        </button>
      </aside>
    )
  }
  
  