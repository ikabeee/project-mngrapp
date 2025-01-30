import React from 'react'
import { Task } from './Task'

export function TaskColumn({ title, tasks, color }) {
return (
  <div className="bg-[#D9D0C1]/50 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-4">
      <div className={`h-3 w-3 ${color} rounded-full`} />
      <h2 className="font-semibold text-[#40251B]">{title}</h2>
    </div>
    <div>
      {tasks.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </div>
  </div>
)
}