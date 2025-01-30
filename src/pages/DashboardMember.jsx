import React from 'react'
import { TaskColumn } from '../components/Task-Column'

const mockTasks = {
  notStarted: [
    { title: "Diseñar la interfaz de usuario", priority: "medium", type: "Not Started" },
    { title: "Definir la estructura de la base de datos", priority: "high", type: "Not Started" },
    { title: "Establecer roles de usuario", priority: "low", type: "Not Started" },
    { title: "Configurar la integración con herramientas de notificación", priority: "medium", type: "Not Started" },
    { title: "Planificar pruebas de usabilidad", priority: "low", type: "Not Started" }
  ],
  inProgress: [
    { title: "Implementar la autenticación de usuarios", priority: "high", type: "In Progress" },
    { title: "Desarrollar el sistema de asignación de tareas", priority: "medium", type: "In Progress" },
    { title: "Crear API para interacción con el frontend", priority: "high", type: "In Progress" },
    { title: "Desarrollar la sección de informes de progreso", priority: "medium", type: "In Progress" },
    { title: "Realizar la integración con plataformas de correo electrónico", priority: "low", type: "In Progress" }
  ],
  completed: [
    { title: "Planificación del proyecto", priority: "low", type: "Completed" },
    { title: "Análisis de requerimientos", priority: "high", type: "Completed" },
    { title: "Configuración inicial del repositorio", priority: "low", type: "Completed" },
    { title: "Revisión de arquitectura de software", priority: "high", type: "Completed" },
    { title: "Definir las herramientas de desarrollo", priority: "medium", type: "Completed" }
  ]
}

const priorityOrder = {
  "high": 0,
  "medium": 1,
  "low": 2
}

function sortByPriority(tasks) {
  return [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

export function DashboardMember() {
  const sortedTasks = {
    notStarted: sortByPriority(mockTasks.notStarted),
    inProgress: sortByPriority(mockTasks.inProgress),
    completed: sortByPriority(mockTasks.completed)
  };

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#40251B]">Sistema de Gestión de Tareas para Equipos de Trabajo</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TaskColumn title="No iniciadas" tasks={sortedTasks.notStarted} color="bg-red-500" />
        <TaskColumn title="En progreso" tasks={sortedTasks.inProgress} color="bg-yellow-500" />
        <TaskColumn title="Completadas" tasks={sortedTasks.completed} color="bg-green-500" />
      </div>
    </div>
  )
}