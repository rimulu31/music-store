import React from "react";
import Image from "next/image";

const MusicItem = ({ id, name, description, img, price, likes }) => {
  return (
    <div
      key={id}
      className="w-64 relative border border-indigo-300 p-5 m-2 bg-neutral-100 rounded-xl shadow-sm 
      transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      <h2 className="text-xl font-bold text-indigo-800 mb-1">{name}</h2>
      <Image
        className="w-64 h-64 object-cover rounded-lg my-3 transition-transform duration-300 ease-in-out hover:scale-105"
        src={img}
        alt={name}
        width={300}
        height={300}
      />
      <p className="text-sm text-gray-700 mb-2">{description}</p>

      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-green-700">${price}</span>
        <span className="flex items-center text-sm text-red-500 gap-1">
          &#9829; {likes}
        </span>
      </div>

      <button
        className="w-full border bg-blue-300 px-3 py-1 rounded-2xl mt-1
        hover:bg-blue-400 transition-all duration-300 text-sm font-medium"
      >
        Buy Now
      </button>

      <span className="absolute top-2 right-2 bg-blue-200 border border-blue-300 p-1 rounded-full w-7 h-7 flex items-center justify-center text-xs font-semibold text-gray-700">
        #{id}
      </span>
    </div>
  );
};

export default MusicItem;