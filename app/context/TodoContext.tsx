
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type TodoContextType = {
  filter: string
  setFilter: (f: string) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export function TodoProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState('all')
  return <TodoContext.Provider value={{ filter, setFilter }}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (!context) throw new Error('useTodoContext must be used within a TodoProvider')
  return context
}
