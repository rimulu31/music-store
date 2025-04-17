'use client';

import { create } from 'zustand';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  fetchTodos: async () => {
    const res = await fetch('http://localhost:3001/todos');
    const data = await res.json();
    set({ todos: data });
  },
  addTodo: async (title) => {
    const res = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const newTodo = await res.json();
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
  deleteTodo: async (id) => {
    await fetch(`http://localhost:3001/todos/${id}`, { method: 'DELETE' });
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) }));
  },
}));
