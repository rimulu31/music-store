'use client'

import { useState } from "react";
import React from "react";

const Button = () => {

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const deleteCount = () => {
    setCount(count - 1);
    };

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div>
      <h2 className="my-3">Count: {count}</h2>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded me-2"
        onClick={addCount}
      >Add 1:
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded me-2"
        onClick={deleteCount}
      >Minus 1:
      </button>
      <button
        className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded me-2"
        onClick={resetCount}
      >Reset Count:
      </button>
    </div>
  );
};

export default Button;
