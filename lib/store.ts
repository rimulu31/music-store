// stores/useTodoStore.ts
import { create } from 'zustand'

type Todo = {
  id: string
  content: string
  completed: boolean
}

type TodoStore = {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  addTodo: (todo: Todo) => void
  toggleTodo: (id: string) => void
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
}))
