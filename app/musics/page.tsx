"use client";

import React, { useState } from "react";
import MusicItem from "../components/MusicItem";

const Products = () => {
  const [instruments, setInstruments] = useState([
    {
      id: 1,
      name: "Acoustic Guitar",
      description: "A classic instrument for all styles of music.",
      price: 1000,
      likes: 300,
      img: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Electric Guitar",
      description: "Perfect for rock, blues, and metal.",
      price: 1500,
      likes: 150,
      img: "https://images.unsplash.com/photo-1568193755668-aae18714a9f1?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Violin",
      description:
        "A beautiful string instrument used in orchestras and solo performances.",
      price: 1300,
      likes: 120,
      img: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Piano",
      description: "A versatile instrument great for solo or accompaniment.",
      price: 3000,
      likes: 90,
      img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      name: "Drum Set",
      description: "The backbone of any band rhythm section.",
      price: 4000,
      likes: 10,
      img: "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      name: "Saxophone",
      description: "A jazzy wind instrument known for its expressive sound.",
      price: 4000,
      likes: 50,
      img: "https://images.unsplash.com/photo-1623123776919-e5208e9b0b47?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 7,
      name: "Flute",
      description:
        "A soft and soothing wind instrument, often used in orchestras.",
      price: 2600,
      likes: 30,
      img: "https://images.unsplash.com/photo-1710075554684-88f369e05e99?w=900&auto=format&fit=crop&q=60",
    },
  ]);

  const [newInstrument, setNewInstrument] = useState({
    name: "",
    description: "",
    price: 0,
    likes: 0,
    img: "",
  });

  function AddNewInstrument() {
    if (!newInstrument.name.trim()) return;

    const instrument = {
      id: instruments.length + 1,
      name: newInstrument.name,
      description: newInstrument.description,
      price: newInstrument.price,
      likes: newInstrument.likes,
      img: newInstrument.img,
    };
    setInstruments((prev) => [...prev, instrument]);
    setNewInstrument({
      name: "",
      description: "",
      price: 0,
      likes: 0,
      img: "",
    });
  }

  return (
    <div className="bg-gradient-to-r from-slate-200 to-sky-700">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-16 text-3xl font-bold text-slate-100">
          Musical Instruments
        </h1>
        <div className="max-w-sm mx-auto my-5 bg-amber-100 opacity-90 border p-5 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Create New Instrument</h1>
          <label className="text-2xl font-bold" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            className="border p-2 w-full rounded-2xl my-2"
            type="text"
            placeholder="Enter instrument name"
            value={newInstrument.name}
            onChange={(e) =>
              setNewInstrument((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          <label className="text-2xl font-bold" htmlFor="age">
            Description
          </label>
          <input
            name="age"
            className="border p-2 w-full rounded-2xl my-2"
            type="text"
            placeholder="Enter instrument description"
            value={newInstrument.description}
            onChange={(e) =>
              setNewInstrument((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
          <label className="text-2xl font-bold" htmlFor="email">
            Price
          </label>
          <input
            name="email"
            className="border p-2 w-full rounded-2xl my-2"
            type="number"
            placeholder="Enter instrument price"
            value={newInstrument.price}
            onChange={(e) =>
              setNewInstrument((prev) => ({
                ...prev,
                price: Number(e.target.value),
              }))
            }
          />
          <label className="text-2xl font-bold" htmlFor="salary">
            Likes
          </label>
          <input
            name="salary"
            className="border p-2 w-full rounded-2xl my-2"
            type="number"
            placeholder="Enter instrument likes"
            value={newInstrument.likes}
            onChange={(e) =>
              setNewInstrument((prev) => ({
                ...prev,
                likes: Number(e.target.value),
              }))
            }
          />
          <label className="text-2xl font-bold" htmlFor="salary">
            Image URL
          </label>
          <input
            name="salary"
            className="border p-2 w-full rounded-2xl my-2"
            type="text"
            placeholder="Enter instrument image URL"
            value={newInstrument.img}
            onChange={(e) =>
              setNewInstrument((prev) => ({
                ...prev,
                img: e.target.value,
              }))
            }
          />
        </div>
        <button className=" border p-4 rounded-lg bg-green-300 hover:bg-green-200 mt-5"
          onClick={AddNewInstrument}>
          Add New Musical Instrument
        </button>
        <div className="flex flex-wrap w-[80%] m-auto justify-center bg-slate-100 my-10 p-5 border-2 border-gray-300 rounded-lg">
          {instruments.map((instrument) => (
            <MusicItem
              key={instrument.id}
              id={instrument.id}
              name={instrument.name}
              description={instrument.description}
              img={instrument.img}
              price={instrument.price}
              likes={instrument.likes}
            />
          ))}
        </div>
      </div>
      <footer className="bg-slate-300 text-center p-4">
        --- Product footer ---
      </footer>
    </div>
  );
};

export default Products;
