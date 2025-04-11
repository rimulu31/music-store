"use client";

import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([
    {
      name: "Fender Guitar",
      price: 300,
      likes: 20,
      image: "https://images.unsplash.com/photo-1706356104839-5d3a4e8eb35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVuZGVyJTIwZ3VpdGFyfGVufDB8fDB8fHww",
      isNew: true,
    },
    {
      name: "Yamaha Piano",
      price: 800,
      likes: 45,
      image: "https://images.unsplash.com/photo-1469939868368-83e00d69432e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isNew: true,
    },
    {
      name: "Drum Set",
      price: 500,
      likes: 34,
      image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isNew: false,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    likes: "",
    image: "",
    isNew: false,
  });

  const handleAdd = () => {
    if (form.name && form.price && form.image) {
      const newProduct = {
        name: form.name,
        price: Number(form.price),
        likes: Number(form.likes) || 0,
        image: form.image,
        isNew: form.isNew,
      };
      setProducts([...products, newProduct]);
      setForm({ name: "", price: "", likes: "", image: "", isNew: false });
    }
  };

  const handleDelete = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-white text-center py-6 bg-gray-800">
        Music Store
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Music Instrument</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Instrument Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Likes"
            value={form.likes}
            onChange={(e) => setForm({ ...form, likes: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="border p-2 rounded"
          />
          <label className="flex items-center gap-2 mt-2 md:mt-0">
            <input
              type="checkbox"
              checked={form.isNew}
              onChange={(e) => setForm({ ...form, isNew: e.target.checked })}
            />
            New Arrival
          </label>
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Instrument
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold flex items-center justify-between">
                {item.name}
                {item.isNew && (
                  <span className="ml-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                    New
                  </span>
                )}
              </h3>
              <p className="text-gray-600 mt-1">Price: ${item.price}</p>
              <p className="text-gray-600">Likes: {item.likes}</p>
              <button
                onClick={() => handleDelete(idx)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
