"use client";

import { Pencil, SquareX, Check } from "lucide-react";
import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Writing Next.js", completed: false },
    { id: 2, title: "Do homework", completed: false },
    { id: 3, title: "Sleeping", completed: false },
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
    <>
      <h1 className="text-2xl font-bold mb-4">Todo</h1>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id} className="my-2 flex items-center gap-2">
              <span>{index + 1}.</span>

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
              />

              {editID === todo.id ? (
                <>
                  <input
                    type="text"
                    className="border p-2 rounded-2xl"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <Check
                    className="text-green-600 cursor-pointer"
                    onClick={() => updateTodoTitle(todo.id, editedTitle)}
                  />
                </>
              ) : (
                <>
                  <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                  </span>
                  <Pencil
                    className="cursor-pointer"
                    onClick={() => editTodo(todo.id, todo.title)}
                  />
                </>
              )}

              <SquareX
                className="cursor-pointer text-red-500"
                onClick={() =>
                  setTodos((prev) => prev.filter((t) => t.id !== todo.id))
                }
              />
            </li>
          ))}
        </ul>

        <input
          type="text"
          className="border p-2 rounded-2xl my-2 mx-5"
          placeholder="Add a new todo"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button className="px-3 py-2 bg-sky-400 rounded text-white" onClick={addTodo}>
          Add
        </button>
      </div>
    </>
  );
};

export default Todo;