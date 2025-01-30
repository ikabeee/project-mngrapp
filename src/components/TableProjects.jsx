const teamsData = [
    { id: 1, name: "Equipo Alfa", project: "Gestor de Tareas Ágil", members: 5, progress: 75 },
    { id: 2, name: "Equipo Beta", project: "Sistema de Inventarios", members: 4, progress: 60 },
    { id: 3, name: "Equipo Gamma", project: "Plataforma de E-learning", members: 6, progress: 40 },
    { id: 4, name: "Equipo Delta", project: "Aplicación de Gestión Financiera", members: 3, progress: 90 },
    { id: 5, name: "Equipo Épsilon", project: "CRM para Pymes", members: 7, progress: 25 },
];

  export default function TableProjects() {
    return (
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="p-4 bg-[#40251B] text-white">
          <h2 className="text-2xl font-bold">Panel de Equipos y Proyectos</h2>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr className="bg-[#40251B] text-white">
                  <th className="border-b border-[#6B3F09] p-4">Equipo</th>
                  <th className="border-b border-[#6B3F09] p-4">Proyecto</th>
                  <th className="border-b border-[#6B3F09] p-4">Miembros</th>
                  <th className="border-b border-[#6B3F09] p-4">Progreso</th>
                </tr>
              </thead>
              <tbody>
                {teamsData.map((team) => (
                  <tr key={team.id} className="even:bg-[#D9D0C1]/30">
                    <td className="p-4 border-b border-[#6B3F09]">{team.name}</td>
                    <td className="p-4 border-b border-[#6B3F09]">{team.project}</td>
                    <td className="p-4 border-b border-[#6B3F09]">{team.members}</td>
                    <td className="p-4 border-b border-[#6B3F09]">
                      <div className="w-full bg-[#D9D0C1] rounded-full h-2.5">
                        <div className="bg-[#40251B] h-2.5 rounded-full" style={{ width: `${team.progress}%` }}></div>
                      </div>
                      <span className="text-sm text-[#40251B] mt-1">{team.progress}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  
  