"use client";

import { Pencil, SquareX, Check } from "lucide-react";
import React, { useState } from "react";

const GothicTodo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Compose the sacred scroll of Next.js", completed: false },
    { id: 2, title: "Fulfill academic oaths", completed: false },
    { id: 3, title: "Retreat to the crypt for slumber", completed: false },
  ]);

  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [editID, setEditID] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");

  const addTodo = () => {
    if (!newTodoTitle.trim()) return;

    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setNewTodoTitle("");
  };

  const editTodo = (id: number, currentTitle: string) => {
    setEditID(id);
    setEditedTitle(currentTitle);
  };

  const updateTodoTitle = (id: number, newTitle: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setEditID(null);
    setEditedTitle("");
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-zinc-900 rounded-2xl shadow-lg p-8 border border-red-900">
        <h1 className="text-4xl font-black text-center mb-6 text-red-700 gothic-font">
          Decrees of the Eternal Night
        </h1>

        <ul className="space-y-4 mb-6">
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-zinc-800 p-4 rounded-lg transition hover:bg-zinc-700"
            >
              <div className="flex items-center gap-3 w-full">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    setTodos((prev) =>
                      prev.map((t) =>
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      )
                    )
                  }
                  className="accent-red-700"
                />

                {editID === todo.id ? (
                  <>
                    <input
                      type="text"
                      className="bg-zinc-700 border border-zinc-600 p-2 rounded w-full"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <Check
                      className="text-green-500 cursor-pointer"
                      onClick={() => updateTodoTitle(todo.id, editedTitle)}
                    />
                  </>
                ) : (
                  <>
                    <span
                      className={`flex-1 gothic-font ${
                        todo.completed
                          ? "line-through text-zinc-400 italic"
                          : "text-white"
                      }`}
                    >
                      {todo.title}
                    </span>
                    <Pencil
                      className="text-purple-400 cursor-pointer hover:text-purple-300"
                      onClick={() => editTodo(todo.id, todo.title)}
                    />
                  </>
                )}
              </div>
              <SquareX
                className="text-red-600 hover:text-red-400 cursor-pointer ml-4"
                onClick={() =>
                  setTodos((prev) => prev.filter((t) => t.id !== todo.id))
                }
              />
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            className="flex-1 bg-zinc-800 text-white border border-red-800 p-3 rounded gothic-font"
            placeholder="Scribe thy new command..."
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
          <button
            className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded gothic-font"
            onClick={addTodo}
          >
            Engrave
          </button>
        </div>
      </div>
    </div>
  );
};

export default GothicTodo;