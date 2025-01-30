import React from 'react'
import { Flag, AlertTriangle, AlertCircle } from 'lucide-react'

const priorityIcons = {
  low: Flag,
  medium: AlertTriangle,
  high: AlertCircle
}

export function Task({ title, priority, type }) {
  return (
    <div className="bg-[#40251B]/80 text-white p-4 rounded-lg mb-3">
      <div className="flex items-center gap-2 mb-2">
        <span className={`h-2 w-2 rounded-full ${priorityIcons[priority]}`} />
        <span className="text-xs opacity-90">{type}</span>
      </div>
      <h3 className="font-medium">{title}</h3>
    </div>
  )
}