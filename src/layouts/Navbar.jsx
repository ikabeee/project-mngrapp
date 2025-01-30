export function Navbar() {
    return (
      <nav className="sticky top-0 z-10 h-14 bg-[#40251B] flex items-center justify-between px-4 text-white">
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
          <div className="w-8 h-8 bg-[#D9D0C1] rounded-full flex items-center justify-center">
            <span className="text-[#40251B] text-sm font-bold">JD</span>
          </div>
        </div>
      </nav>
    )
  }
  
  